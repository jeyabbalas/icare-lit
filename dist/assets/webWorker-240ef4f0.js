(function(){"use strict";async function n(t){const r=["https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_formula_lt50.txt","https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_formula_ge50.txt","https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_log_odds_ratios_lt50.json","https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_log_odds_ratios_ge50.json","https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/reference_covariate_data_lt50.csv","https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/reference_covariate_data_ge50.csv","https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/age_specific_breast_cancer_incidence_rates.csv","https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/age_specific_all_cause_mortality_rates.csv"];await t.preloadFiles(r)}(async()=>(await(async()=>{const t=await import("https://cdn.jsdelivr.net/gh/jeyabbalas/wasm-icare@1.1.0/dist/wasm-icare.js");self.icare=await t.loadWasmICARE()})(),self.iCARELitPreloadPromise=await n(self.icare)))();function _(t,r){if(!Array.isArray(t)||!Array.isArray(r))throw new Error("Both headers and data must be arrays.");function a(e){return typeof e=="string"&&(e.includes(",")||e.includes('"')||e.includes(`
`))?`"${e.replace(/"/g,'""')}"`:e}const i=t.map(e=>a(e)).join(","),c=r.map(e=>t.map(s=>{const o=e.hasOwnProperty(s)&&e[s]!==void 0?e[s]:"";return a(o)}).join(",")).join(`
`);return`${i}
${c}`}function m(t){const r=t.age;let a,i=[t];return r>=50?a=["age_at_menarche","parity","age_first_birth","oc_ever","alcohol_intake","bbd","famhist","age_at_menopause","height","hrt","hrt_type","bmi_curc"]:a=["age_at_menarche","parity","age_first_birth","oc_ever","oc_current","alcohol_intake","bbd","famhist","height","bmi_curc"],_(a,i)}self.addEventListener("message",async t=>{await self.iCARELitPreloadPromise;let r=t.data;const a=r.age,i=5,c=a>=50?"https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_formula_ge50.txt":"https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_formula_lt50.txt",e=a>=50?"https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_log_odds_ratios_ge50.json":"https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/model_log_odds_ratios_lt50.json",s=a>=50?"https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/reference_covariate_data_ge50.csv":"https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/reference_covariate_data_lt50.csv",o="https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/age_specific_breast_cancer_incidence_rates.csv",u="https://raw.githubusercontent.com/jeyabbalas/icare-lit/master/icare_lit/age_specific_all_cause_mortality_rates.csv",b=m(r),l="query_covariate_profile.csv";self.icare.pyodide.FS.writeFile(l,b),self.icare.preloadedFiles.push(l);const d={applyAgeStart:a,applyAgeIntervalLength:i,modelCovariateFormulaUrl:c,modelLogRelativeRiskUrl:e,modelReferenceDatasetUrl:s,applyCovariateProfileUrl:l,modelDiseaseIncidenceRatesUrl:o,modelCompetingIncidenceRatesUrl:u,returnReferenceRisks:!0,seed:1234},g=await self.icare.computeAbsoluteRisk(d);self.postMessage(g)})})();