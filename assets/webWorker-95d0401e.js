(function(){"use strict";importScripts("https://cdn.jsdelivr.net/pyodide/v0.23.0/full/pyodide.js");async function l(e){if(typeof pyodide>"u")throw new Error("Pyodide is not loaded.");async function t(i){try{const s=await fetch(i);if(!s.ok)throw new Error(`Failed to fetch file from ${i}`);const a=await s.text(),o=i.substring(i.lastIndexOf("/")+1);pyodide.FS.writeFile(o,a),console.log(`File ${o} successfully loaded to the Pyodide file system.`)}catch(s){console.error(`Error fetching and writing file: ${s.message}`)}}const r=e.map(t);await Promise.all(r)}async function d(){let t=await(await fetch("https://raw.githubusercontent.com/jeyabbalas/py-icare/master/dist/icare.zip")).arrayBuffer();return await self.pyodide.unpackArchive(t,"zip"),await self.pyodide.loadPackage(["numpy","pandas","patsy"]),self.pyodide.pyimport("icare")}async function _(){const e=["https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_formula_lt50.txt","https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_formula_ge50.txt","https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_log_odds_ratios_lt50.json","https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_log_odds_ratios_ge50.json","https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/reference_covariate_data_lt50.csv","https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/reference_covariate_data_ge50.csv","https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/age_specific_breast_cancer_incidence_rates.csv","https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/age_specific_all_cause_mortality_rates.csv"];self.pyodide=await loadPyodide(),self.icare=await d(),await l(e)}let f=_();function u(e,t){if(!Array.isArray(e)||!Array.isArray(t))throw new Error("Both headers and data must be arrays.");function r(a){return typeof a=="string"&&(a.includes(",")||a.includes('"')||a.includes(`
`))?`"${a.replace(/"/g,'""')}"`:a}const i=e.map(a=>r(a)).join(","),s=t.map(a=>e.map(o=>{const c=a.hasOwnProperty(o)&&a[o]!==void 0?a[o]:"";return r(c)}).join(",")).join(`
`);return`${i}
${s}`}function n(e){if(e instanceof Map){const t={};return e.forEach((r,i)=>{t[i]=n(r)}),t}return Array.isArray(e)?e.map(t=>n(t)):e}function p(e){const t=e.age;let r,i=[e];t>=50?r=["age_at_menarche","parity","age_first_birth","oc_ever","alcohol_intake","bbd","famhist","age_at_menopause","height","hrt","hrt_type","bmi_curc"]:r=["age_at_menarche","parity","age_first_birth","oc_ever","oc_current","alcohol_intake","bbd","famhist","height","bmi_curc"];let s=u(r,i);self.pyodide.FS.writeFile("query_covariate_profile.csv",s)}self.addEventListener("message",async e=>{await f;let t=e.data;const r=t.age,i=5,s=r>=50?"model_formula_ge50.txt":"model_formula_lt50.txt",a=r>=50?"model_log_odds_ratios_ge50.json":"model_log_odds_ratios_lt50.json",o=r>=50?"reference_covariate_data_ge50.csv":"reference_covariate_data_lt50.csv";p(t);let c=self.icare.compute_absolute_risk(r,i,"age_specific_breast_cancer_incidence_rates.csv","age_specific_all_cause_mortality_rates.csv",s,a,o,null,null,null,1,"query_covariate_profile.csv",null,!1,!0).toJs();c=n(c),c.profile=JSON.parse(c.profile),self.postMessage(c)})})();