import {loadWasmICARE} from 'https://cdn.jsdelivr.net/gh/jeyabbalas/wasm-icare@1.1.0/dist/wasm-icare.js';


async function loadICARE() {
    return await loadWasmICARE();
}

async function loadICARELit(icare) {
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
    await icare.preloadFiles(iCareLitData);
}


(async () => {
  self.icare = await loadICARE();
  self.iCARELitPreloadPromise = await loadICARELit(self.icare);
})();



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

function convertQueryToCsv(query) {
    const age = query.age;
    let headers;
    let profiles = [query];

    if (age >= 50) {
        headers = [
            'age_at_menarche', 'parity', 'age_first_birth', 'oc_ever', 'alcohol_intake',
            'bbd', 'famhist', 'age_at_menopause', 'height', 'hrt',
            'hrt_type', 'bmi_curc'
        ];
    } else {
        headers = [
            'age_at_menarche', 'parity', 'age_first_birth', 'oc_ever', 'oc_current',
            'alcohol_intake', 'bbd', 'famhist', 'height', 'bmi_curc'
        ];
    }

    return objectsToCsv(headers, profiles);
}


self.addEventListener('message', async (event) => {
    await self.iCARELitPreloadPromise;

    let data = event.data;
    const age = data.age;
    const ageInterval = 5;
    const formulaFile = age >= 50 ? 'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_formula_ge50.txt' : 'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_formula_lt50.txt';
    const logOddsRatiosFile = age >= 50 ? 'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_log_odds_ratios_ge50.json' : 'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_log_odds_ratios_lt50.json';
    const referenceCovariateDataFile = age >= 50 ? 'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/reference_covariate_data_ge50.csv' : 'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/reference_covariate_data_lt50.csv';
    const diseaseIncidenceRatesFile = 'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/age_specific_breast_cancer_incidence_rates.csv';
    const competingIncidenceRatesFile = 'https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/age_specific_all_cause_mortality_rates.csv';

    const profilesCsv = convertQueryToCsv(data);
    const covariateProfileFile = 'query_covariate_profile.csv';
    self.icare.pyodide.FS.writeFile(covariateProfileFile, profilesCsv);
    self.icare.preloadedFiles.push(covariateProfileFile);

    const params = {
        applyAgeStart: age,
        applyAgeIntervalLength: ageInterval,
        modelCovariateFormulaUrl: formulaFile,
        modelLogRelativeRiskUrl: logOddsRatiosFile,
        modelReferenceDatasetUrl: referenceCovariateDataFile,
        applyCovariateProfileUrl: covariateProfileFile,
        modelDiseaseIncidenceRatesUrl: diseaseIncidenceRatesFile,
        modelCompetingIncidenceRatesUrl: competingIncidenceRatesFile,
        returnReferenceRisks: true,
        seed: 1234
    };
    const result = await self.icare.computeAbsoluteRisk(params);

    self.postMessage(result);
});
