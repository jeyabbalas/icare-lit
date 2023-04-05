importScripts("https://cdn.jsdelivr.net/pyodide/v0.23.0/full/pyodide.js");


async function fetchFilesAndWriteToPyodideFS(fileURLs) {
    if (typeof pyodide === 'undefined') {
        throw new Error('Pyodide is not loaded.');
    }

    async function fetchAndWriteFile(url) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Failed to fetch file from ${url}`);
            }

            const fileContent = await response.text();
            const fileName = url.substring(url.lastIndexOf('/') + 1);
            pyodide.FS.writeFile(fileName, fileContent);

            console.log(`File ${fileName} successfully loaded to the Pyodide file system.`);
        } catch (error) {
            console.error(`Error fetching and writing file: ${error.message}`);
        }
    }

    const promises = fileURLs.map(fetchAndWriteFile);
    await Promise.all(promises);
}


async function loadICare() {
    let response = await fetch('https://raw.githubusercontent.com/jeyabbalas/py-icare/master/dist/icare.zip');
    let buffer = await response.arrayBuffer();
    await self.pyodide.unpackArchive(buffer, 'zip');
    await self.pyodide.loadPackage(['numpy', 'pandas', 'patsy']);

    return self.pyodide.pyimport('icare');
}

async function loadPyodideAndICareLit() {
    const iCareLitData = [
        'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_formula_lt50.txt',
        'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_formula_ge50.txt',
        'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_log_odds_ratios_lt50.json',
        'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_log_odds_ratios_ge50.json',
        'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/reference_covariate_data_lt50.csv',
        'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/reference_covariate_data_ge50.csv',
        'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/age_specific_breast_cancer_incidence_rates.csv',
        'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/age_specific_all_cause_mortality_rates.csv'
    ];
    self.pyodide = await loadPyodide();
    self.icare = await loadICare();
    await fetchFilesAndWriteToPyodideFS(iCareLitData);
}

let loadPyodideAndICareLitPromise = loadPyodideAndICareLit();

function objectsToCsv(headers, data) {
    if (!Array.isArray(headers) || !Array.isArray(data)) {
        throw new Error('Both headers and data must be arrays.');
    }

    // Create a helper function to escape CSV values
    function escapeCsvValue(value) {
        if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
            return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
    }

    // Convert the header array to a CSV header string
    const headerString = headers.map(header => escapeCsvValue(header)).join(',');

    // Convert the data array to a CSV data string
    const dataString = data
        .map(row => {
            return headers
                .map(header => {
                    const value = row.hasOwnProperty(header) && row[header] !== undefined ? row[header] : '';
                    return escapeCsvValue(value);
                })
                .join(',');
        })
        .join('\n');

    // Combine the header and data strings to create the full CSV string
    return `${headerString}\n${dataString}`;
}

function convertICareOutputToJSON(obj) {
    if (obj instanceof Map) {
        const result = {};
        obj.forEach((value, key) => {
            result[key] = convertICareOutputToJSON(value);
        });
        return result;
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => convertICareOutputToJSON(item));
    }

    return obj;
}

function convertQueryToCsv(query) {
    const age = query.age;
    let headers;
    let profiles = [query];

    if (age >= 50) {
        headers = [
            'age_at_menarche','parity','age_first_birth','oc_ever','alcohol_intake',
            'bbd','famhist','age_at_menopause','height','hrt',
            'hrt_type','bmi_curc'
        ];
    } else {
        headers = [
            'age_at_menarche','parity','age_first_birth','oc_ever', 'oc_current',
            'alcohol_intake','bbd','famhist','height', 'bmi_curc'
        ];
    }

    let profilesCsv = objectsToCsv(headers, profiles);
    self.pyodide.FS.writeFile('query_covariate_profile.csv', profilesCsv);
}

self.addEventListener('message', async (event) => {
    await loadPyodideAndICareLitPromise;

    let data = event.data;
    const age = data.age;
    const ageInterval = 5;
    const formulaFile = age >= 50 ? 'model_formula_ge50.txt' : 'model_formula_lt50.txt';
    const logOddsRatiosFile = age >= 50 ? 'model_log_odds_ratios_ge50.json' : 'model_log_odds_ratios_lt50.json';
    const referenceCovariateDataFile = age >= 50 ? 'reference_covariate_data_ge50.csv' : 'reference_covariate_data_lt50.csv';

    convertQueryToCsv(data);
    let result = self.icare.compute_absolute_risk(
        age, ageInterval,
        'age_specific_breast_cancer_incidence_rates.csv',
        'age_specific_all_cause_mortality_rates.csv',
        formulaFile, logOddsRatiosFile, referenceCovariateDataFile,
        null, null, null, 1,
        'query_covariate_profile.csv',
        null, false, true
    ).toJs();
    result = convertICareOutputToJSON(result);
    result.profile = JSON.parse(result.profile);

    self.postMessage(result);
});
