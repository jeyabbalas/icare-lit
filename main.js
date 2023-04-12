import './style.css'
import roseIcon from './rose.svg'
import githubIcon from './github.svg'
import {select} from 'd3';
import {slider, densityPlot, boxPlot, beeswarmPlot, populationPrevalencePlot} from './plots';


const icareLitApp = document.querySelector('#app');
const pyodideWorker = new Worker(new URL('./webWorker.js', import.meta.url));

const minMortalityAge = 1;
const maxMortalityAge = 80;
const minDiseaseIncidenceAge = 0;
const maxDiseaseIncidenceAge = 84;
const numYearRisk = 5;
const minAge = Math.max(minMortalityAge, minDiseaseIncidenceAge);
const maxAge = Math.min(maxMortalityAge, maxDiseaseIncidenceAge) - numYearRisk;

icareLitApp.innerHTML = `
  <div id="header" class="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8 bg-slate-900 rounded-b-lg">
    <div class="flex items-center justify-between">
      <div class="flex justify-start gap-2">
        <div class="flex items-center">
          <img src="${roseIcon}" class="h-12 w-12 sm:h-16 sm:w-16 gap-2 logo vanilla" alt="rose logo" />
        </div>
        <div class="min-w-0 flex-1">
          <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:tracking-tight">iCARE-Lit</h2>
          <p class="py-2 pr-2 text-sm sm:text-base text-white">Absolute risk estimator for breast cancer</p>
        </div>
      </div>
      
      <div class="flex md:mt-0 md:ml-4 shrink-0">
        <a title="Source code" href="https://github.com/jeyabbalas/icare-lit">
          <img src="${githubIcon}" class="h-10 w-10 sm:h-12 sm:w-12 fill-current" alt="github logo" />
        </a>
      </div>
    </div>
  </div>
  
  <div id="info" class="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8">
    <div id="info-privacy" class="flex p-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50" role="alert">
      <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
      </svg>
      <span class="sr-only">Data privacy notice</span>
      <div>
        <span class="font-medium">Privacy notice</span>: All data is maintained and all calculations are performed within your browser. No data is sent to and no calculations are performed by any server. <a class="font-bold underline" href="https://github.com/jeyabbalas/icare-lit">This app's code</a> is open source and can be inspected by anyone.
      </div>
    </div>
    
    <div id="info-usage" class="flex p-4 mt-2 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50" role="alert">
      <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
      </svg>
      <span class="sr-only">App usage notice</span>
      <div>
        <span class="font-medium">Usage notice</span>: This app is intended for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this app.
      </div>
    </div>
  </div>
  
  <div id="form" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border rounded-lg">
    <form id="form-icare-lit" autocomplete="off" class="space-y-8 divide-y divide-gray-200">
      <div id="form-questionnaire" class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div class="space-y-6 sm:space-y-5 pt-2 sm:pt-4">
          <div id="questionnaire-heading">
            <h3 class="text-lg leading-6 font-semibold text-gray-900">Questionnaire</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Please answer the following questions to the best of your knowledge.</p>
          </div>
          
          <div id="questions" class="space-y-6 sm:space-y-5">
          
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label for="name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Enter a name or an alias.</label>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <input type="text" name="name" id="name" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm" value="Jane Doe" required>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label for="age" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">What is your age?</label>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <input type="number" name="age" id="age" min="${minAge}" max="${maxAge}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm" required>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <div>
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Please specify your sex assigned at birth</label>
                <p class="text-sm text-gray-500"><span class="font-medium">Note</span>: The current version of this tool is developed for <em>females</em> only.</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <fieldset class="mt-4">
                  <legend class="sr-only">Sex type</legend>
                  <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div class="flex items-center">
                      <input id="female" name="sex" type="radio" value="female" checked class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="female" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Female</label>
                    </div>
                    <div class="flex items-center">
                      <input id="male" name="sex" type="radio" value="male" class="h-4 w-4 border-gray-300 bg-gray-100 text-slate-600 focus:ring-slate-600" disabled>
                      <label for="male" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Male <span class="font-normal text-gray-500">(option currently unavailable)</span></label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <div>
                <label for="race-ethnicity" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Which race/ethnicity group do you most closely associate with?</label>
                <p class="text-sm text-gray-500"><span class="font-medium">Note</span>: The current version of the model is developed for <em>non-hispanic white</em> populations only. Future versions will be developed for other populations.</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <select id="race-ethnicity" name="race-ethnicity" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm" required>
                  <option disabled selected value> -- select an option -- </option>
                  <option disabled>American Indian or Alaska Native</option>
                  <option disabled>Asian</option>
                  <option disabled>Black or African American</option>
                  <option disabled>Hispanic</option>
                  <option disabled>Native Hawaiian or Other Pacific Islander</option>
                  <option>Non-Hispanic White</option>
                  <option disabled>Other</option>
                </select>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <div>
                <label for="weight" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How much do you weigh (in pounds) without your clothes or shoes on?</label>
                <p class="text-sm text-gray-500">If you are pregnant, how much did you weigh before your pregnancy?</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                  <input type="number" name="weight" id="weight" min="0" max="500" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0.00" aria-describedby="weight-units">
                  <span id="weight-units" class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">lbs.</span>
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <div>
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How tall (in feet and inches) are you with your shoes off?</label>
                <p class="text-sm text-gray-500">For example, if you are 5 feet 7 inches enter 5 in the feet box and 7 in the inches box.</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <div class="space-y-2">
                  <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                    <label for="height-feet" class="sr-only">Feet portion of the height</label>
                    <input type="number" name="height-feet" min="2" max="8" step="1" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0" aria-describedby="height-feet">
                    <span id="height-feet" class="inline-block w-[70px] inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-5 text-gray-500 sm:text-sm">feet</span>
                  </div>
                  <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                    <label for="height-inches" class="sr-only">Inches portion of the height</label>
                    <input type="number" name="height-inches" min="0" max="11" step="1" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0" aria-describedby="height-inches">
                    <span id="height-inches" class="inline-block w-[70px] inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">inches</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label for="menarche" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How old were you when you had your first menstrual period?</label>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <input type="number" name="menarche" id="menarche" min="${minAge}" max="${maxAge}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <div>
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Have your periods completely stopped?</label>
                <p class="text-sm text-gray-500">By <em>completely stopped</em>, we mean that you have gone at least 6 months without having a period, and you are not pregnant or using any form of hormonal contraception.</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <fieldset class="mt-4">
                  <legend class="sr-only">Menopause status</legend>
                  <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div class="flex items-center">
                      <input id="menopause-yes" name="menopause" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="menopause-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                    </div>
                    <div class="flex items-center">
                      <input id="menopause-no" name="menopause" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="menopause-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                    </div>
                    <div class="flex items-center">
                      <input id="menopause-unknown" name="menopause" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="menopause-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            
            <div id="age-menopause-container" class="hidden space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="age-menopause" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How old were you when you had your last menstrual period?</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input type="number" name="age-menopause" id="age-menopause" min="${minAge}" max="${maxAge}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <div>
                <label for="num-pregnancies" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How many times have you been pregnant?</label>
                <p class="text-sm text-gray-500">Please include all live births, as well as pregnancies that ended as stillbirths, miscarriages, ectopic or tubal pregnancies, or termination. Twins, triplets, or higher multiples count as one pregnancy.</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <input type="number" name="num-pregnancies" id="num-pregnancies" min="0" max="25" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
              </div>
            </div>
            
            <div id="children-container" class="hidden space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Have you ever had any children?</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <fieldset class="mt-4">
                    <legend class="sr-only">Had children status</legend>
                    <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      <div class="flex items-center">
                        <input id="parous-yes" name="parous" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="parous-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                      </div>
                      <div class="flex items-center">
                        <input id="parous-no" name="parous" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="parous-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                      </div>
                      <div class="flex items-center">
                        <input id="parous-unknown" name="parous" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="parous-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            
            <div id="births-container" class="hidden space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="parity" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How many children have you had?</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input type="number" name="parity" id="parity" min="1" max="25" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
                </div>
              </div>
              
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="age-first-child-birth" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How old were you when you had your first child?</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input type="number" name="age-first-child-birth" id="age-first-child-birth" min="${minAge}" max="${maxAge}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Have you ever used menopausal hormone treatment prescribed by a doctor or other health professional?</label>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <fieldset class="mt-4">
                  <legend class="sr-only">Menopausal hormone treatment use status</legend>
                  <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div class="flex items-center">
                      <input id="hormone-treatment-yes" name="hormone-treatment" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="hormone-treatment-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                    </div>
                    <div class="flex items-center">
                      <input id="hormone-treatment-no" name="hormone-treatment" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="hormone-treatment-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                    </div>
                    <div class="flex items-center">
                      <input id="hormone-treatment-unknown" name="hormone-treatment" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="hormone-treatment-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            
            <div id="hormone-treatment-current-container" class="hidden space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Do you currently use menopausal hormone treatment?</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <fieldset class="mt-4">
                    <legend class="sr-only">Current menopausal hormone treatment use status</legend>
                    <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      <div class="flex items-center">
                        <input id="hormone-treatment-current-yes" name="hormone-treatment-current" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormone-treatment-current-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                      </div>
                      <div class="flex items-center">
                        <input id="hormone-treatment-current-no" name="hormone-treatment-current" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormone-treatment-current-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                      </div>
                      <div class="flex items-center">
                        <input id="hormone-treatment-current-unknown" name="hormone-treatment-current" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormone-treatment-current-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            
            
            <div id="hormone-treatment-type-container" class="hidden space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">What type of menopausal hormone treatment do you currently use?</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <fieldset class="mt-4">
                    <legend class="sr-only">Menopausal hormone treatment type</legend>
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <input id="hormone-treatment-type-e" name="hormone-treatment-type" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormone-treatment-type-e" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Estrogen prescription hormone only.</label>
                      </div>
                      <div class="flex items-center">
                        <input id="hormone-treatment-type-c" name="hormone-treatment-type" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormone-treatment-type-c" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Combined estrogen plus progestin prescription hormones.</label>
                      </div>
                      <div class="flex items-center">
                        <input id="hormone-treatment-type-unknown" name="hormone-treatment-type" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormone-treatment-type-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know.</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <div>
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Have you ever used any hormonal contraceptive medication or device?</label>
                <p class="text-sm text-gray-500">This includes combined oral contraceptive pills containing both estrogen and progesterone/progestin (commonly called <em>the pill</em>), progesterone-only or progestin-only contraceptive pills (commonly called the <em>mini-pill</em>), <em>Norplant</em> (inserted under the skin of your upper arm, lasts several years), <em>Depo-provera</em> (birth control shot given once every three months), Vaginal ring (such as <em>Nuva Ring</em>, inserted vaginally each month), Birth control patch (such as <em>Ortho Evra</em>, applied to the skin), Hormonal IUD (such as <em>Mirena intrauterine device</em>), or other hormones prescribed by a health professional.</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <fieldset class="mt-4">
                  <legend class="sr-only">Hormonal contraceptive use status</legend>
                  <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div class="flex items-center">
                      <input id="hormonal-contraceptive-yes" name="hormonal-contraceptive" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="hormonal-contraceptive-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                    </div>
                    <div class="flex items-center">
                      <input id="hormonal-contraceptive-no" name="hormonal-contraceptive" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="hormonal-contraceptive-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                    </div>
                    <div class="flex items-center">
                      <input id="hormonal-contraceptive-unknown" name="hormonal-contraceptive" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="hormonal-contraceptive-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            
            <div id="hormonal-contraceptive-container" class="hidden space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Do you currently use any hormonal contraceptive medication or device?</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <fieldset class="mt-4">
                    <legend class="sr-only">Current hormonal contraceptive use status</legend>
                    <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      <div class="flex items-center">
                        <input id="hormonal-contraceptive-current-yes" name="hormonal-contraceptive-current" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormonal-contraceptive-current-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                      </div>
                      <div class="flex items-center">
                        <input id="hormonal-contraceptive-current-no" name="hormonal-contraceptive-current" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormonal-contraceptive-current-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                      </div>
                      <div class="flex items-center">
                        <input id="hormonal-contraceptive-current-unknown" name="hormonal-contraceptive-current" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormonal-contraceptive-current-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">During your entire life, have you had at least 12 drinks of any kind of alcoholic beverage?</label>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <fieldset class="mt-4">
                  <legend class="sr-only">Alcohol use status</legend>
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <input id="alcohol-use-never" name="alcohol-use" type="radio" value="never" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="alcohol-use-never" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No.</label>
                    </div>
                    <div class="flex items-center">
                      <input id="alcohol-use-former" name="alcohol-use" type="radio" value="former" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="alcohol-use-former" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes, but I no longer drink alcohol. (former drinker)</label>
                    </div>
                    <div class="flex items-center">
                      <input id="alcohol-use-current" name="alcohol-use" type="radio" value="current" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="alcohol-use-current" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes, I still drink alcohol. (current drinker)</label>
                    </div>
                    <div class="flex items-center">
                      <input id="alcohol-use-unknown" name="alcohol-use" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="alcohol-use-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know.</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            
            <div id="alcohol-container" class="hidden space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label id="alcohol-type-label" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Please select any of the following alcoholic beverages that you have had in the past 12 months.</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <fieldset class="mt-4">
                    <legend class="sr-only">Alcohol types</legend>
                    <div class="space-y-5">
                      <div class="flex h-6 items-center">
                        <input id="alcohol-type-wine" name="alcohol-type" type="checkbox" value="wine" class="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="alcohol-type-wine" class="ml-3 text-sm font-medium leading-6 text-gray-900">Glass of wine</label>
                      </div>
                      <div class="flex h-6 items-center">
                        <input id="alcohol-type-blc" name="alcohol-type" type="checkbox" value="blc" class="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="alcohol-type-blc" class="ml-3 text-sm font-medium leading-6 text-gray-900">Glass of beer/lager/cider</label>
                      </div>
                      <div class="flex h-6 items-center">
                        <input id="alcohol-type-beer" name="alcohol-type" type="checkbox" value="beer" class="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="alcohol-type-beer" class="ml-3 text-sm font-medium leading-6 text-gray-900">Bottle of beer</label>
                      </div>
                      <div class="relative flex items-start">
                        <div class="flex h-6 items-center">
                          <input id="alcohol-type-pop" aria-describedby="pop-description" name="alcohol-type" type="checkbox" value="pop" class="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600">
                        </div>
                        <div class="ml-3">
                          <label for="alcohol-type-pop" class="text-sm font-medium leading-6 text-gray-900">Alcoholic pop beverages</label>
                          <p id="pop-description" class="text-sm text-gray-500">Such as wine coolers, hard soda, spiked seltzer (sparkling water), Smirnoff Ice, malt liquor, or pre-mixed cocktails.</p>
                        </div>
                      </div>
                      <div class="flex h-6 items-center">
                        <input id="alcohol-type-shots" name="alcohol-type" type="checkbox" value="shots" class="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="alcohol-type-shots" class="ml-3 text-sm font-medium leading-6 text-gray-900">Shots of liquor</label>
                      </div>
                      <div class="flex h-6 items-center">
                        <input id="alcohol-type-unknown" name="alcohol-type" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="alcohol-type-unknown" class="ml-3 text-sm font-medium leading-6 text-gray-900">Don't know</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              
              <div id="wine-container" class="hidden space-y-6 sm:space-y-5">
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <div>
                    <label id="wine-freq-label" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, how often did you usually drink wine?</label>
                    <p class="text-sm text-gray-500">This includes any kind of wine or wine cooler.</p>
                  </div>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <fieldset class="mt-4">
                      <legend class="sr-only">Wine consumption frequencies</legend>
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input id="wine-freq-lt-one-month" name="wine-freq" type="radio" value="lt-once-a-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-lt-one-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Less than once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="wine-freq-once-per-month" name="wine-freq" type="radio" value="once-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-once-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="wine-freq-2-3-per-month" name="wine-freq" type="radio" value="2-3-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-2-3-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">2-3 times a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="wine-freq-1-2-per-week" name="wine-freq" type="radio" value="1-2-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-1-2-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">1-2 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="wine-freq-3-4-per-week" name="wine-freq" type="radio" value="3-4-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-3-4-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">3-4 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="wine-freq-5-6-per-week" name="wine-freq" type="radio" value="5-6-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-5-6-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">5-6 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="wine-freq-daily" name="wine-freq" type="radio" value="daily" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-daily" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Every day.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="wine-freq-unknown" name="wine-freq" type="radio" value="unknown" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know.</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <div>
                    <label id="wine-serving-label" for="wine-serving" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, on the days that you drank wine, how many servings did you drink per day?</label>
                    <p class="text-sm text-gray-500">A serving of wine is 5 ounces.</p>
                  </div>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <input type="number" name="wine-serving" id="wine-serving" min="1" step="1" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0" aria-describedby="wine-serving-units">
                      <span id="wine-serving-units" class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">glass(es)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div id="blc-container" class="hidden space-y-6 sm:space-y-5">
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label id="blc-freq-label" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, how often did you usually drink glasses of beer/lager/cider?</label>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <fieldset class="mt-4">
                      <legend class="sr-only">Beer, lager, and cider consumption frequencies</legend>
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input id="blc-freq-lt-one-month" name="blc-freq" type="radio" value="lt-once-a-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-lt-one-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Less than once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="blc-freq-once-per-month" name="blc-freq" type="radio" value="once-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-once-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="blc-freq-2-3-per-month" name="blc-freq" type="radio" value="2-3-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-2-3-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">2-3 times a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="blc-freq-1-2-per-week" name="blc-freq" type="radio" value="1-2-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-1-2-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">1-2 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="blc-freq-3-4-per-week" name="blc-freq" type="radio" value="3-4-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-3-4-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">3-4 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="blc-freq-5-6-per-week" name="blc-freq" type="radio" value="5-6-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-5-6-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">5-6 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="blc-freq-daily" name="blc-freq" type="radio" value="daily" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-daily" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Every day.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="blc-freq-unknown" name="blc-freq" type="radio" value="unknown" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know.</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <div>
                    <label id="blc-serving-label" for="blc-serving" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, on the days that you drank beer/lager/cider, how many servings did you drink per day?</label>
                    <p class="text-sm text-gray-500">A serving of beer/lager/cider is a 12-ounce container.</p>
                  </div>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <input type="number" name="blc-serving" id="blc-serving" min="1" step="1" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0" aria-describedby="blc-serving-units">
                      <span id="blc-serving-units" class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">glass(es)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div id="beer-container" class="hidden space-y-6 sm:space-y-5">
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label id="beer-freq-label" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, how often did you usually drink bottles of beer?</label>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <fieldset class="mt-4">
                      <legend class="sr-only">Beer consumption frequencies</legend>
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input id="beer-freq-lt-one-month" name="beer-freq" type="radio" value="lt-once-a-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-lt-one-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Less than once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="beer-freq-once-per-month" name="beer-freq" type="radio" value="once-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-once-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="beer-freq-2-3-per-month" name="beer-freq" type="radio" value="2-3-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-2-3-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">2-3 times a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="beer-freq-1-2-per-week" name="beer-freq" type="radio" value="1-2-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-1-2-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">1-2 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="beer-freq-3-4-per-week" name="beer-freq" type="radio" value="3-4-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-3-4-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">3-4 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="beer-freq-5-6-per-week" name="beer-freq" type="radio" value="5-6-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-5-6-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">5-6 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="beer-freq-daily" name="beer-freq" type="radio" value="daily" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-daily" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Every day.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="beer-freq-unknown" name="beer-freq" type="radio" value="unknown" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know.</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <div>
                    <label id="beer-serving-label" for="beer-serving" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, on the days that you drank beer, how many servings did you drink per day?</label>
                    <p class="text-sm text-gray-500">A serving of beer is a 12-ounce container.</p>
                  </div>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <input type="number" name="beer-serving" id="beer-serving" min="1" step="1" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0" aria-describedby="beer-serving-units">
                      <span id="beer-serving-units" class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">bottle(s)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div id="pop-container" class="hidden space-y-6 sm:space-y-5">
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <div>
                    <label id="pop-freq-label" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, how often did you usually drink alcoholic pop beverages?</label>
                    <p class="text-sm text-gray-500">These includes wine coolers, hard soda, spiked seltzer (sparkling water), Smirnoff Ice, malt liquor, or pre-mixed cocktails.</p>
                  </div>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <fieldset class="mt-4">
                      <legend class="sr-only">Alcoholic pop beverage consumption consumption frequencies</legend>
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input id="pop-freq-lt-one-month" name="pop-freq" type="radio" value="lt-once-a-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-lt-one-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Less than once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="pop-freq-once-per-month" name="pop-freq" type="radio" value="once-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-once-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="pop-freq-2-3-per-month" name="pop-freq" type="radio" value="2-3-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-2-3-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">2-3 times a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="pop-freq-1-2-per-week" name="pop-freq" type="radio" value="1-2-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-1-2-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">1-2 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="pop-freq-3-4-per-week" name="pop-freq" type="radio" value="3-4-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-3-4-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">3-4 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="pop-freq-5-6-per-week" name="pop-freq" type="radio" value="5-6-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-5-6-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">5-6 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="pop-freq-daily" name="pop-freq" type="radio" value="daily" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-daily" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Every day.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="pop-freq-unknown" name="pop-freq" type="radio" value="unknown" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know.</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <div>
                    <label id="pop-serving-label" for="pop-serving" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, on the days that you drank alcoholic pop beverages, how many servings did you drink per day?</label>
                    <p class="text-sm text-gray-500">A serving of beer, hard cider, wine coolers, 'hard soda', spiked sparkling water, or malt liquor is a 12-ounce container. A serving of liquor or mixed drinks is one shot or 1.5 ounces of liquor.</p>
                  </div>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <input type="number" name="pop-serving" id="pop-serving" min="1" step="1" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0" aria-describedby="pop-serving-units">
                      <span id="pop-serving-units" class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">beverage(s)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div id="shots-container" class="hidden space-y-6 sm:space-y-5">
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label id="shots-freq-label" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, how often did you usually take shots of liquor?</label>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <fieldset class="mt-4">
                      <legend class="sr-only">Shots of liquor consumption frequencies</legend>
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input id="shots-freq-lt-one-month" name="shots-freq" type="radio" value="lt-once-a-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-lt-one-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Less than once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="shots-freq-once-per-month" name="shots-freq" type="radio" value="once-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-once-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="shots-freq-2-3-per-month" name="shots-freq" type="radio" value="2-3-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-2-3-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">2-3 times a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="shots-freq-1-2-per-week" name="shots-freq" type="radio" value="1-2-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-1-2-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">1-2 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="shots-freq-3-4-per-week" name="shots-freq" type="radio" value="3-4-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-3-4-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">3-4 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="shots-freq-5-6-per-week" name="shots-freq" type="radio" value="5-6-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-5-6-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">5-6 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="shots-freq-daily" name="shots-freq" type="radio" value="daily" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-daily" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Every day.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="shots-freq-unknown" name="shots-freq" type="radio" value="unknown" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know.</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <div>
                    <label id="shot-serving-label" for="shot-serving" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, on the days that you drank liquor, how many servings did you drink per day?</label>
                    <p class="text-sm text-gray-500">A serving of liquor or mixed drinks is one shot or 1.5 ounces of liquor.</p>
                  </div>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <input type="number" name="shot-serving" id="shot-serving" min="1" step="1" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0" aria-describedby="shot-serving-units">
                      <span id="shot-serving-units" class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">shot(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Has a doctor or other health professional ever told you that you have or had fibrocystic breast or benign breast disease?</label>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <fieldset class="mt-4">
                  <legend class="sr-only">History of benign breast disease status</legend>
                  <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div class="flex items-center">
                      <input id="benign-breast-disease-yes" name="benign-breast-disease" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="benign-breast-disease-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                    </div>
                    <div class="flex items-center">
                      <input id="benign-breast-disease-no" name="benign-breast-disease" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="benign-breast-disease-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                    </div>
                    <div class="flex items-center">
                      <input id="benign-breast-disease-unknown" name="benign-breast-disease" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="benign-breast-disease-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Has your biological mother, father, sister, or brother ever been diagnosed with breast cancer?</label>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <fieldset class="mt-4">
                  <legend class="sr-only">Family history of breast cancer status</legend>
                  <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div class="flex items-center">
                      <input id="family-history-yes" name="family-history" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="family-history-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                    </div>
                    <div class="flex items-center">
                      <input id="family-history-no" name="family-history" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="family-history-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                    </div>
                    <div class="flex items-center">
                      <input id="family-history-unknown" name="family-history" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="family-history-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div id="form-buttons" class="py-2 sm:py-4">
        <div class="flex justify-center gap-2">
          <button type="reset" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">Reset</button>
          <button id="submit-btn" type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">Estimate risk</button>
        </div>
      </div>
    </form>
  </div>
  
  <div id="form-results-divider" class="pt-4">
    <div  class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300 mx-4 sm:mx-6 lg:mx-8"></div>
      </div>
      <div class="relative flex justify-center">
        <span class="bg-white px-2 text-lg text-gray-500">iCARE-Lit results</span>
      </div>
    </div>
  </div>
  
  <div class="mx-auto max-w-7xl mt-4 px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 lg:mb-8 border rounded-lg">
    <div id="results" class="w-full mt-4 px-4 sm:px-6 lg:px-8"></div>
  </div>
`

const ageAtMenopauseContainer = document.getElementById('age-menopause-container');
const childrenContainer = document.getElementById('children-container');
const birthsContainer = document.getElementById('births-container');
const hormoneTreatmentCurrentContainer = document.getElementById('hormone-treatment-current-container');
const hormoneTreatmentTypeContainer = document.getElementById('hormone-treatment-type-container');
const hormonalContraceptiveContainer = document.getElementById('hormonal-contraceptive-container');
const alcoholContainer = document.getElementById('alcohol-container');
const wineContainer = document.getElementById('wine-container');
const blcContainer = document.getElementById('blc-container');
const beerContainer = document.getElementById('beer-container');
const popContainer = document.getElementById('pop-container');
const shotsContainer = document.getElementById('shots-container');
const submitButton = document.getElementById("submit-btn");
const resultsDiv = document.getElementById("results");

document.getElementById('menopause-yes').addEventListener('change', (event) => {
    if (event.target.checked) {
        ageAtMenopauseContainer.classList.remove('hidden');
    }
});

document.getElementById('menopause-no').addEventListener('change', (event) => {
    if (event.target.checked && !ageAtMenopauseContainer.classList.contains('hidden')) {
        ageAtMenopauseContainer.classList.add('hidden');
    }
});

document.getElementById('menopause-unknown').addEventListener('change', (event) => {
    if (event.target.checked && !ageAtMenopauseContainer.classList.contains('hidden')) {
        ageAtMenopauseContainer.classList.add('hidden');
    }
});

document.getElementById('num-pregnancies').addEventListener('input', (event) => {
    if (parseInt(event.target.value) === 0 || event.target.value === '') {
        if (!childrenContainer.classList.contains('hidden')) {
            childrenContainer.classList.add('hidden');
        }
        if (!birthsContainer.classList.contains('hidden')) {
            birthsContainer.classList.add('hidden');
        }
    } else {
        childrenContainer.classList.remove('hidden');
    }
});

document.getElementById('parous-yes').addEventListener('change', (event) => {
    if (event.target.checked) {
        birthsContainer.classList.remove('hidden');
    }
});

document.getElementById('parous-no').addEventListener('change', (event) => {
    if (event.target.checked && !birthsContainer.classList.contains('hidden')) {
        birthsContainer.classList.add('hidden');
    }
});

document.getElementById('parous-unknown').addEventListener('change', (event) => {
    if (event.target.checked && !birthsContainer.classList.contains('hidden')) {
        birthsContainer.classList.add('hidden');
    }
});

document.getElementById('hormone-treatment-yes').addEventListener('change', (event) => {
    if (event.target.checked) {
        hormoneTreatmentCurrentContainer.classList.remove('hidden');
    }
});

document.getElementById('hormone-treatment-no').addEventListener('change', (event) => {
    if (event.target.checked && !hormoneTreatmentCurrentContainer.classList.contains('hidden')) {
        hormoneTreatmentCurrentContainer.classList.add('hidden');
    }
});

document.getElementById('hormone-treatment-unknown').addEventListener('change', (event) => {
    if (event.target.checked && !hormoneTreatmentCurrentContainer.classList.contains('hidden')) {
        hormoneTreatmentCurrentContainer.classList.add('hidden');
    }
});

document.getElementById('hormone-treatment-current-yes').addEventListener('change', (event) => {
    if (event.target.checked) {
        hormoneTreatmentTypeContainer.classList.remove('hidden');
    }
});

document.getElementById('hormone-treatment-current-no').addEventListener('change', (event) => {
    if (event.target.checked && !hormoneTreatmentTypeContainer.classList.contains('hidden')) {
        hormoneTreatmentTypeContainer.classList.add('hidden');
    }
});

document.getElementById('hormone-treatment-current-unknown').addEventListener('change', (event) => {
    if (event.target.checked && !hormoneTreatmentTypeContainer.classList.contains('hidden')) {
        hormoneTreatmentTypeContainer.classList.add('hidden');
    }
});

document.getElementById('hormonal-contraceptive-yes').addEventListener('change', (event) => {
    if (event.target.checked) {
        hormonalContraceptiveContainer.classList.remove('hidden');
    }
});

document.getElementById('hormonal-contraceptive-no').addEventListener('change', (event) => {
    if (event.target.checked && !hormonalContraceptiveContainer.classList.contains('hidden')) {
        hormonalContraceptiveContainer.classList.add('hidden');
    }
});

document.getElementById('hormonal-contraceptive-unknown').addEventListener('change', (event) => {
    if (event.target.checked && !hormonalContraceptiveContainer.classList.contains('hidden')) {
        hormonalContraceptiveContainer.classList.add('hidden');
    }
});

document.getElementById('alcohol-use-former').addEventListener('change', (event) => {
    if (event.target.checked) {
        alcoholContainer.classList.remove('hidden');
        document.getElementById('alcohol-type-label').innerHTML = 'Please select any of the following alcoholic beverages that you had in the 12 months <em>before</em> you stopped drinking.';
        document.getElementById('wine-freq-label').innerHTML = 'Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink wine?'
        document.getElementById('wine-serving-label').innerHTML = 'Over the 12 months <em>before</em> you stopped drinking, on the days that you drank wine, how many servings did you drink per day?';
        document.getElementById('blc-freq-label').innerHTML = 'Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink glasses of beer/lager/cider?';
        document.getElementById('blc-serving-label').innerHTML = 'Over the 12 months <em>before</em> you stopped drinking, on the days that you drank beer/lager/cider, how many servings did you drink per day?';
        document.getElementById('beer-freq-label').innerHTML = 'Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink bottles of beer?';
        document.getElementById('beer-serving-label').innerHTML = 'Over the 12 months <em>before</em> you stopped drinking, on the days that you drank beer, how many servings did you drink per day?';
        document.getElementById('pop-freq-label').innerHTML = 'Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink alcoholic pop beverages?';
        document.getElementById('pop-serving-label').innerHTML = 'Over the 12 months <em>before</em> you stopped drinking, on the days that you drank alcoholic pop beverages, how many servings did you drink per day?';
        document.getElementById('shots-freq-label').innerHTML = 'Over the 12 months <em>before</em> you stopped drinking, how often did you usually take shots of liquor?';
        document.getElementById('shot-serving-label').innerHTML = 'Over the 12 months <em>before</em> you stopped drinking, on the days that you drank liquor, how many servings did you drink per day?';
    }
});

document.getElementById('alcohol-use-current').addEventListener('change', (event) => {
    if (event.target.checked) {
        alcoholContainer.classList.remove('hidden');
        document.getElementById('alcohol-type-label').innerHTML = 'Please select any of the following alcoholic beverages that you have had in the past 12 months.';
        document.getElementById('wine-freq-label').innerHTML = 'Over the past 12 months, how often did you usually drink wine?';
        document.getElementById('wine-serving-label').innerHTML = 'Over the past 12 months, on the days that you drank wine, how many servings did you drink per day?';
        document.getElementById('blc-freq-label').innerHTML = 'Over the past 12 months, how often did you usually drink glasses of beer/lager/cider?';
        document.getElementById('blc-serving-label').innerHTML = 'Over the past 12 months, on the days that you drank beer/lager/cider, how many servings did you drink per day?';
        document.getElementById('beer-freq-label').innerHTML = 'Over the past 12 months, how often did you usually drink bottles of beer?';
        document.getElementById('beer-serving-label').innerHTML = 'Over the past 12 months, on the days that you drank beer, how many servings did you drink per day?';
        document.getElementById('pop-freq-label').innerHTML = 'Over the past 12 months, how often did you usually drink alcoholic pop beverages?';
        document.getElementById('pop-serving-label').innerHTML = 'Over the past 12 months, on the days that you drank alcoholic pop beverages, how many servings did you drink per day?';
        document.getElementById('shots-freq-label').innerHTML = 'Over the past 12 months, how often did you usually take shots of liquor?';
        document.getElementById('shot-serving-label').innerHTML = 'Over the past 12 months, on the days that you drank liquor, how many servings did you drink per day?';
    }
});

document.getElementById('alcohol-use-never').addEventListener('change', (event) => {
    if (event.target.checked && !alcoholContainer.classList.contains('hidden')) {
        alcoholContainer.classList.add('hidden');
    }
});

document.getElementById('alcohol-use-unknown').addEventListener('change', (event) => {
    if (event.target.checked && !alcoholContainer.classList.contains('hidden')) {
        alcoholContainer.classList.add('hidden');
    }
});

document.getElementById('alcohol-type-wine').addEventListener('change', (event) => {
    if (event.target.checked) {
        wineContainer.classList.remove('hidden');
        document.getElementById('alcohol-type-unknown').checked = false;
    } else {
        if (!wineContainer.classList.contains('hidden')) {
            wineContainer.classList.add('hidden');
        }
    }
});

document.getElementById('alcohol-type-blc').addEventListener('change', (event) => {
    if (event.target.checked) {
        blcContainer.classList.remove('hidden');
        document.getElementById('alcohol-type-unknown').checked = false;
    } else {
        if (!blcContainer.classList.contains('hidden')) {
            blcContainer.classList.add('hidden');
        }
    }
});

document.getElementById('alcohol-type-beer').addEventListener('change', (event) => {
    if (event.target.checked) {
        beerContainer.classList.remove('hidden');
        document.getElementById('alcohol-type-unknown').checked = false;
    } else {
        if (!beerContainer.classList.contains('hidden')) {
            beerContainer.classList.add('hidden');
        }
    }
});

document.getElementById('alcohol-type-pop').addEventListener('change', (event) => {
    if (event.target.checked) {
        popContainer.classList.remove('hidden');
        document.getElementById('alcohol-type-unknown').checked = false;
    } else {
        if (!popContainer.classList.contains('hidden')) {
            popContainer.classList.add('hidden');
        }
    }
});

document.getElementById('alcohol-type-shots').addEventListener('change', (event) => {
    if (event.target.checked) {
        shotsContainer.classList.remove('hidden');
        document.getElementById('alcohol-type-unknown').checked = false;
    } else {
        if (!shotsContainer.classList.contains('hidden')) {
            shotsContainer.classList.add('hidden');
        }
    }
});

document.getElementById('alcohol-type-unknown').addEventListener('change', (event) => {
    if (event.target.checked) {
        document.getElementById('alcohol-type-wine').checked = false;
        if (!wineContainer.classList.contains('hidden')) {
            wineContainer.classList.add('hidden');
        }
        document.getElementById('alcohol-type-blc').checked = false;
        if (!blcContainer.classList.contains('hidden')) {
            blcContainer.classList.add('hidden');
        }
        document.getElementById('alcohol-type-beer').checked = false;
        if (!beerContainer.classList.contains('hidden')) {
            beerContainer.classList.add('hidden');
        }
        document.getElementById('alcohol-type-pop').checked = false;
        if (!popContainer.classList.contains('hidden')) {
            popContainer.classList.add('hidden');
        }
        document.getElementById('alcohol-type-shots').checked = false;
        if (!shotsContainer.classList.contains('hidden')) {
            shotsContainer.classList.add('hidden');
        }
    }
});

function preprocessHeight(height_ft, height_in) {
    if ((isNaN(height_ft) && isNaN(height_in)) || isNaN(height_ft)) {
        return undefined;
    }
    if (isNaN(height_in)) {
        height_in = 0;
    }
    const height_cms = (height_ft * 12 + height_in) * 2.54;
    return height_cms / 10; // per iCARE-Lit definition
}

function calculateBMI(weight_lbs, height_ft, height_in, underAgeFifty) {
    const binBMI = (bmi) => {
        if (underAgeFifty) {
            if (bmi < 18.5) {
                return '<18.5';
            } else if (bmi < 25) {
                return '18.5-25';
            } else if (bmi < 30) {
                return '25-30';
            } else {
                return '>=30';
            }
        } else {
            if (bmi < 25) {
                return '<25';
            } else if (bmi < 30) {
                return '25-30';
            } else {
                return '>=30';
            }
        }
    };

    if ((isNaN(height_ft) && isNaN(height_in)) || isNaN(height_ft)) {
        return undefined;
    }
    if (isNaN(height_in)) {
        height_in = 0;
    }
    if (isNaN(weight_lbs)) {
        return undefined;
    }

    const height_inches = height_ft * 12 + height_in;
    return binBMI(weight_lbs / (height_inches * height_inches) * 703);
}

function preprocessAgeAtMenarche(ageAtMenarche) {
    const binAgeAtMenarche = (ageAtMenarche) => {
        if (ageAtMenarche <= 10) {
            return '<=10';
        } else if (ageAtMenarche === 11) {
            return '11';
        } else if (ageAtMenarche === 12) {
            return '12';
        } else if (ageAtMenarche === 13) {
            return '13';
        } else if (ageAtMenarche === 14) {
            return '14';
        } else if (ageAtMenarche === 15) {
            return '15';
        } else {
            return '>=16';
        }
    };

    if (isNaN(ageAtMenarche)) {
        return undefined;
    }

    return binAgeAtMenarche(ageAtMenarche);
}

function preprocessParity(numPregnancies, parous, parity) {
    const binParity = (parity) => {
        if (parity === 0) {
            return '0';
        } else if (parity === 1) {
            return '1';
        } else if (parity === 2) {
            return '2';
        } else {
            return '>=3';
        }
    };

    if (isNaN(numPregnancies)) {
        return undefined;
    }
    if (numPregnancies === 0) {
        return binParity(0);
    }
    if (isNaN(parous)) {
        return undefined;
    }
    if (parous === 0) {
        return binParity(0);
    }
    if (isNaN(parity)) {
        return undefined;
    }

    return binParity(parity);
}

function processAgeAtFirstChildBirth(numPregnancies, parous, parity, ageAtFirstChildBirth) {
    const binAgeAtFirstChildBirth = (ageAtFirstChildBirth) => {
        if (ageAtFirstChildBirth < 20) {
            return '<20';
        } else if (ageAtFirstChildBirth < 25) {
            return '20-25';
        } else if (ageAtFirstChildBirth < 30) {
            return '25-30';
        } else {
            return '>=30';
        }
    };

    if (isNaN(numPregnancies) || numPregnancies === 0 || isNaN(parous) || parous === 0 || parity === 0 ||
        isNaN(ageAtFirstChildBirth)) {
        return undefined;
    }

    return binAgeAtFirstChildBirth(ageAtFirstChildBirth);
}

function processHormoneTreatmentUse(hormoneTreatmentUse, hormoneTreatmentCurrentUse) {
    if (isNaN(hormoneTreatmentUse)) {
        return undefined;
    } else if (hormoneTreatmentUse === 0) {
        return 'never';
    } else {
        if (isNaN(hormoneTreatmentCurrentUse)) {
            return undefined;
        }
        if (hormoneTreatmentCurrentUse === 0) {
            return 'former';
        } else {
            return 'current';
        }
    }
}

function processHormoneContraceptiveUse(hormoneContraceptiveUse) {
    if (isNaN(hormoneContraceptiveUse)) {
        return undefined;
    }

    return hormoneContraceptiveUse;
}

function processHormoneContraceptiveCurrentUse(hormoneContraceptiveCurrentUse) {
    if (isNaN(hormoneContraceptiveCurrentUse)) {
        return undefined;
    }

    return hormoneContraceptiveCurrentUse;
}

function processBenignBreastDisease(benignBreastDisease) {
    if (isNaN(benignBreastDisease)) {
        return undefined;
    }

    return benignBreastDisease;
}

function processFamilyHistoryBreastCancer(familyHistoryBreastCancer) {
    if (isNaN(familyHistoryBreastCancer)) {
        return undefined;
    }

    return familyHistoryBreastCancer;
}

function processAgeAtMenopause(menopausalStatus, ageAtMenopause) {
    const binAgeAtMenopause = (ageAtMenopause) => {
        if (ageAtMenopause < 40) {
            return '<40';
        } else if (ageAtMenopause < 45) {
            return '40-45';
        } else if (ageAtMenopause < 50) {
            return '45-50';
        } else if (ageAtMenopause < 55) {
            return '50-55';
        } else {
            return '>=55';
        }
    };

    if (isNaN(menopausalStatus) || menopausalStatus === 0 || isNaN(ageAtMenopause)) {
        return undefined;
    }

    return binAgeAtMenopause(ageAtMenopause);
}

function preprocessHormoneTreatmentType(hormoneTreatmentUse, hormoneTreatmentCurrentUse, hormoneTreatmentType) {
    if (isNaN(hormoneTreatmentUse) || hormoneTreatmentUse === 0 || isNaN(hormoneTreatmentCurrentUse) ||
        hormoneTreatmentCurrentUse === 0 || isNaN(hormoneTreatmentType)) {
        return undefined;
    }

    return hormoneTreatmentType;
}

function preprocessAlcoholIntake(alcoholUse, alcoholType, wineFrequency, wineServing, blcFrequency, blcServing,
                                 beerFrequency, beerServing, popFrequency, popServing, shotsFrequency, shotsServing) {
    let alcoholGramsPerDay = 0;

    const gramsAlcoholPerStandardDrink = 14;
    const numDaysInYear = 365.25;

    const binAlcoholIntake = (alcoholIntake) => {
        if (alcoholIntake === 0) {
            return '0';
        } else if (alcoholIntake < 5) {
            return '>0-5';
        } else if (alcoholIntake < 15) {
            return '5-15';
        } else if (alcoholIntake < 25) {
            return '15-25';
        } else if (alcoholIntake < 35) {
            return '25-35';
        } else if (alcoholIntake < 45) {
            return '35-45';
        } else {
            return '>=45';
        }
    };

    const numIntakeDaysPerYear = (frequency) => {
        const minDaysPerMonth = 0;
        const monthsPerYear = 12;
        const weeksInYear = 52.14;

        if (frequency === 'lt-once-a-month') {
            return minDaysPerMonth * monthsPerYear;
        } else if (frequency === 'once-per-month') {
            return monthsPerYear;
        } else if (frequency === '2-3-per-month') {
            return 2.5 * monthsPerYear;
        } else if (frequency === '1-2-per-week') {
            return 1.5 * weeksInYear;
        } else if (frequency === '3-4-per-week') {
            return 3.5 * weeksInYear;
        } else if (frequency === '5-6-per-week') {
            return 5.5 * weeksInYear;
        } else if (frequency === 'daily') {
            return numDaysInYear;
        } else {
            return undefined;
        }
    };

    if (alcoholUse === undefined || alcoholUse === '') {
        return undefined;
    }

    if (alcoholUse === 'never') {
        return binAlcoholIntake(alcoholGramsPerDay);
    }

    if (alcoholType === undefined || alcoholType.length === 0 || alcoholType.includes('')) {
        return undefined;
    }

    if (alcoholType.includes('wine')) {
        if (wineFrequency === '' || isNaN(wineServing)) {
            return undefined;
        } else {
            alcoholGramsPerDay += (wineServing * gramsAlcoholPerStandardDrink * numIntakeDaysPerYear(wineFrequency)) / numDaysInYear;
        }
    }

    if (alcoholType.includes('blc')) {
        if (blcFrequency === '' || isNaN(blcServing)) {
            return undefined;
        } else {
            alcoholGramsPerDay += (blcServing * gramsAlcoholPerStandardDrink * numIntakeDaysPerYear(blcFrequency)) / numDaysInYear;
        }
    }

    if (alcoholType.includes('beer')) {
        if (beerFrequency === '' || isNaN(beerServing)) {
            return undefined;
        } else {
            alcoholGramsPerDay += (beerServing * gramsAlcoholPerStandardDrink * numIntakeDaysPerYear(beerFrequency)) / numDaysInYear;
        }
    }

    if (alcoholType.includes('pop')) {
        if (popFrequency === '' || isNaN(popServing)) {
            return undefined;
        } else {
            alcoholGramsPerDay += (popServing * gramsAlcoholPerStandardDrink * numIntakeDaysPerYear(popFrequency)) / numDaysInYear;
        }
    }

    if (alcoholType.includes('shots')) {
        if (shotsFrequency === '' || isNaN(shotsServing)) {
            return undefined;
        } else {
            alcoholGramsPerDay += (shotsServing * gramsAlcoholPerStandardDrink * numIntakeDaysPerYear(shotsFrequency)) / numDaysInYear;
        }
    }

    return binAlcoholIntake(alcoholGramsPerDay);
}

function preprocessUserData(formData) {
    const data = Object.fromEntries(formData.entries());
    const processedData = {};

    processedData.id = data['name'];
    processedData.age = parseInt(data['age']);
    processedData.height = preprocessHeight(parseInt(data['height-feet']), parseInt(data['height-inches']));
    processedData.age_at_menarche = preprocessAgeAtMenarche(parseInt(data['menarche']));
    processedData.parity = preprocessParity(parseInt(data['num-pregnancies']), parseInt(data['parous']),
        parseInt(data['parity']));
    processedData.age_first_birth = processAgeAtFirstChildBirth(parseInt(data['num-pregnancies']), parseInt(data['parous']),
        parseInt(data['parity']), parseInt(data['age-first-child-birth']));
    processedData.oc_ever = processHormoneContraceptiveUse(parseInt(data['hormonal-contraceptive']));
    processedData.alcohol_intake = preprocessAlcoholIntake(data['alcohol-use'], formData.getAll('alcohol-type'),
        data['wine-freq'], parseInt(data['wine-serving']), data['blc-freq'], parseInt(data['blc-serving']),
        data['beer-freq'], parseInt(data['beer-serving']), data['pop-freq'], parseInt(data['pop-serving']),
        data['shots-freq'], parseInt(data['shots-serving']));
    processedData.bbd = processBenignBreastDisease(parseInt(data['benign-breast-disease']));
    processedData.famhist = processFamilyHistoryBreastCancer(parseInt(data['family-history']));
    if (processedData.age >= 50) {
        processedData.bmi_curc = calculateBMI(parseFloat(data['weight']), parseInt(data['height-feet']),
            parseInt(data['height-inches']), false);
        processedData.age_at_menopause = processAgeAtMenopause(parseInt(data['menopause']), parseInt(data['age-menopause']));
        processedData.hrt = processHormoneTreatmentUse(parseInt(data['hormone-treatment']),
            parseInt(data['hormone-treatment-current']));
        processedData.hrt_type = preprocessHormoneTreatmentType(parseInt(data['hormone-treatment']),
            parseInt(data['hormone-treatment-current']), parseInt(data['hormone-treatment-type']));
    } else {
        processedData.bmi_curc = calculateBMI(parseFloat(data['weight']), parseInt(data['height-feet']),
            parseInt(data['height-inches']), true);
        processedData.oc_current = processHormoneContraceptiveCurrentUse(parseInt(data['hormonal-contraceptive-current']));
    }

    return processedData;
}

function getBandwidthValues(numBandwidths, data) {
    const bandwidthValues = [];
    const bandwidthMin = 0.001 * (Math.max(...data) - Math.min(...data));
    const bandwidthMax = Math.max(...data) - Math.min(...data);

    for (let i = 0; i < numBandwidths; i++) {
        const logBandwidth = Math.log10(bandwidthMin) + ((Math.log10(bandwidthMax) - Math.log10(bandwidthMin)) * i) / (numBandwidths - 1);
        bandwidthValues.push(Math.pow(10, logBandwidth));
    }

    return bandwidthValues;
}

function generateTable(headers, data, targetDiv) {
    targetDiv.innerHTML = '';
    const tableWrapper = document.createElement('div');
    tableWrapper.className = 'relative overflow-x-auto shadow-md sm:rounded-lg my-4 w-full sm:w-[75%]';

    const table = document.createElement('table');
    table.className = 'w-full text-sm text-left text-gray-500';

    // Table header
    const thead = document.createElement('thead');
    thead.className = 'text-xs text-white uppercase bg-slate-900';
    const theadRow = document.createElement('tr');

    headers.forEach(header => {
        const th = document.createElement('th');
        th.scope = 'col';
        th.className = 'px-6 py-3';
        th.textContent = header;
        theadRow.appendChild(th);
    });

    thead.appendChild(theadRow);
    table.appendChild(thead);

    // Table body
    const tbody = document.createElement('tbody');

    for (const key in data) {
        const tr = document.createElement('tr');

        if (data[key] === undefined) {
            tr.className = 'bg-red-50 border-b hover:bg-red-100';
        } else {
            tr.className = 'bg-white border-b hover:bg-slate-50';
        }

        const th = document.createElement('th');
        th.scope = 'row';
        th.className = 'px-4 py-2 font-medium text-gray-900 whitespace-nowrap';
        th.textContent = key;
        tr.appendChild(th);

        const td = document.createElement('td');
        td.className = 'px-4 py-2';
        td.textContent = data[key];
        tr.appendChild(td);

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    tableWrapper.appendChild(table);
    targetDiv.appendChild(tableWrapper);
}


function quantile(arr, p) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array of numbers.');
    }
    if (typeof p !== 'number' || p < 0 || p > 1) {
        throw new Error('Percentile must be a number between 0 and 1.');
    }

    const sortedArr = arr.slice().sort((a, b) => a - b);
    const index = p * (sortedArr.length - 1);
    const lowerIndex = Math.floor(index);
    const upperIndex = Math.ceil(index);

    if (lowerIndex === upperIndex) {
        return sortedArr[index];
    }

    const weight = index - lowerIndex;
    return sortedArr[lowerIndex] * (1 - weight) + sortedArr[upperIndex] * weight;
}

function calculateXMax(data, x) {
    const q1 = quantile(data, 0.25);
    const q3 = quantile(data, 0.75);
    const iqr = q3 - q1;
    const xMax = q3 + 1.5 * iqr;
    const xMaxScale = 1.4;
    const xScale = 1.5;
    return xMax * xMaxScale > x * xScale ? xMax * xMaxScale : x * xScale;
}

function createReadableProfile(profile) {
    const readableProfile = {};
    const riskFactorDescriptions = {
        'age': 'Age',
        'age_at_menarche': 'Age at menarche (years)',
        'age_at_menopause': 'Age at menopause (years)',
        'parity': 'Number of children',
        'age_first_birth': 'Age at first child birth (years)',
        'oc_ever': 'Use of oral contraceptives',
        'oc_current': 'Current use of oral contraceptives',
        'hrt': 'Hormone replacement therapy use',
        'hrt_type': 'Hormone replacement therapy type',
        'bmi_curc': 'Body Mass Index (kg/m²)',
        'height': 'Height (cm)',
        'alcohol_intake': 'Alcohol intake (g/day)',
        'bbd': 'History of benign breast disease',
        'famhist': 'Family history of breast cancer in first degree relatives',
    };

    for (const [key, value] of Object.entries(profile)) {
        if (key in riskFactorDescriptions) {
            if ((key === 'famhist' && value !== undefined) || (key === 'bbd' && value !== undefined)) {
                readableProfile[riskFactorDescriptions[key]] = value === 1 ? 'Yes' : 'No';
            } else if (key === 'oc_ever' && value !== undefined) {
                readableProfile[riskFactorDescriptions[key]] = value === 1 ? 'Ever' : 'Never';
            } else if (key === 'oc_current' && value !== undefined) {
                readableProfile[riskFactorDescriptions[key]] = value === 1 ? 'Current' : 'Former';
            } else if (key === 'hrt' && value !== undefined) {
                readableProfile[riskFactorDescriptions[key]] = value.charAt(0).toUpperCase() + value.slice(1);
            } else if (key === 'age_first_birth' && profile['parity'] === '0') {
                readableProfile[riskFactorDescriptions[key]] = 'N/A';
            } else if (key === 'hrt_type' && value !== undefined) {
                readableProfile[riskFactorDescriptions[key]] = value === 1 ? 'Estrogen prescription hormone only' : 'Combined estrogen plus progestin prescription hormones';
            } else if (key === 'height' && value !== undefined) {
                readableProfile[riskFactorDescriptions[key]] = (value * 10).toFixed(2);
            } else {
                readableProfile[riskFactorDescriptions[key]] = value;
            }
        }
    }

    const sortedReadableProfile = {};
    Object.values(riskFactorDescriptions).forEach(key => {
        if (key in readableProfile) {
            sortedReadableProfile[key] = readableProfile[key];
        }
    });

    return sortedReadableProfile;
}

function percentageInPlainEnglish(percentage, basePeople) {
  let people;

  while (true) {
    people = Math.round((percentage / 100) * basePeople);
    if (people > 0) break;
    basePeople *= 10;
  }

  return `out of ${basePeople} people, about ${people} people`;
}

function plotResults(resultsContainer, results, query) {
    const profileName = query.id;
    const populationRisks = (results.reference_risks[0].population_risks).map(risk => risk * 100.0);
    const profileRisk = results.profile[0].risk_estimates * 100.0;

    const precision = 4;

    resultsContainer.innerHTML = '';
    resultsContainer.className = 'space-y-6 sm:space-y-5 w-full';

    // Display profile risk
    const profileRiskResults = document.createElement('div');
    profileRiskResults.className = 'flex flex-col w-full';
    resultsContainer.appendChild(profileRiskResults);

    const profileRiskTitle = document.createElement('h1');
    profileRiskTitle.className = 'text-xl font-bold text-center py-4';
    profileRiskTitle.innerHTML = `${profileName}'s estimated 5-year absolute risk of breast cancer: <span class="border-2 border-red-500 rounded-lg px-2">${profileRisk.toFixed(precision)} %</span>`;
    profileRiskResults.appendChild(profileRiskTitle);

    const populationPrevalenceChartContainer = document.createElement('div');
    const populationPrevalenceD3ChartContainer = select(populationPrevalenceChartContainer)
        .attr('class', 'flex justify-center w-full py-4');
    populationPrevalenceD3ChartContainer.call(
        populationPrevalencePlot()
            .width(400)
            .height(350)
            .prevalence(profileRisk)
            .colorCase('orange')
            .colorControl('maroon')
            .margin({top: 5, right: 5, bottom: 5, left: 5})
    );
    profileRiskResults.appendChild(populationPrevalenceChartContainer);

    const profileRiskDescription = document.createElement('p');
    profileRiskDescription.className = 'text-md';
    profileRiskDescription.innerText = `
    In a population of disease-free, non-Hispanic white women, in the US, with an identical risk factor profile as the one provided above for ${profileName}, ${profileRisk.toFixed(precision)}% of them are expected to develop breast cancer over the next 5 years. In other words, ${percentageInPlainEnglish(profileRisk, 100)} are expected to develop breast cancer over the next 5 years.
    `;
    profileRiskResults.appendChild(profileRiskDescription);

    const riskFactorsDescription = document.createElement('p');
    riskFactorsDescription.className = 'text-md';
    riskFactorsDescription.innerText = `
    The risk is estimated based on the risk factors provided by the user. The provided values were processed, as shown below, to run the iCARE-Lit model. The rows highlighted in red are used by iCARE-Lit for its calculations but were not provided by the user. For a more accurate risk estimation, please provide the missing risk factors.
    `;
    profileRiskResults.appendChild(riskFactorsDescription);

    const tableWrapper = document.createElement('div');
    tableWrapper.className = 'flex justify-center w-full';
    generateTable(['Risk factor', 'Value'], createReadableProfile(query), tableWrapper);
    profileRiskResults.appendChild(tableWrapper);

    // Juxtapose with the population risk
    const populationRiskTitle = document.createElement('h1');
    populationRiskTitle.className = 'text-xl font-bold text-center py-4 sm:border-t';
    populationRiskTitle.innerHTML = `${profileName}'s estimated 5-year absolute risk of breast cancer compared to the non-Hispanic white US population</span>`;
    profileRiskResults.appendChild(populationRiskTitle);

    const densityPlotHeight = 300;
    const boxPlotHeight = 100;
    const beeswarmPlotHeight = 75;
    const width = resultsContainer.clientWidth;
    const margin = {
        left: 50,
        right: 20
    };
    const xMin = 0.0;
    const xMax = calculateXMax(populationRisks, profileRisk);
    const numBandwidths = 100;
    const bandwidthValues = getBandwidthValues(numBandwidths, populationRisks);
    const defaultBandwidth = 50;

    const chartContainer = document.createElement('div');
    const chartContainerD3 = select(chartContainer)
        .attr('class', 'pr-10 py-4');

    const sliderContainer = chartContainerD3
        .append('div')
        .attr('class', 'slider-container');

    const densityPlotObject = densityPlot()
        .width(width)
        .height(densityPlotHeight)
        .margin({
            top: 50,
            right: margin.right,
            bottom: 50,
            left: margin.left,
        })
        .data(populationRisks)
        .xMin(xMin)
        .xMax(xMax)
        .vLine(profileRisk)
        .xLabel('Absolute risk (%) →')
        .title('Distribution of the 5-year absolute risk-percentage of breast cancer in the non-Hispanic white US population')
        .bandwidth(bandwidthValues[defaultBandwidth - 1]);

    const boxPlotObject = boxPlot()
        .width(width)
        .height(boxPlotHeight)
        .margin({
            top: 0,
            right: margin.right,
            bottom: 0,
            left: margin.left,
        })
        .data(populationRisks)
        .xMin(xMin)
        .xMax(xMax)
        .vLine(profileRisk)
        .boxWidth(30)
        .radius(1)
        .hoverOffsetX(80)
        .hoverOffsetY(100)
        .removeAxis(true);

    const beeswarmPlotObject = beeswarmPlot()
        .width(width)
        .height(beeswarmPlotHeight)
        .margin({
            top: 5,
            right: margin.right,
            bottom: 0,
            left: margin.left,
        })
        .data([profileRisk])
        .xMin(xMin)
        .xMax(xMax)
        .radius(7)
        .markerPadding(2)
        .markerText(`${profileName}'s estimated absolute risk`)
        .color('#FF0000')
        .plotPadding(7)
        .removeAxis(true);

    chartContainerD3.call(densityPlotObject);
    chartContainerD3.call(boxPlotObject);
    chartContainerD3.call(beeswarmPlotObject);

    sliderContainer.call(
        slider()
            .id('bandwidth')
            .labelText('Bandwidth: ')
            .min(1)
            .max(numBandwidths)
            .step(1)
            .value(defaultBandwidth)
            .on('change', (value) => {
                chartContainerD3.call(densityPlotObject.bandwidth(bandwidthValues[value - 1]));
            })
    );

    resultsContainer.appendChild(chartContainer);

    const downloadButtonsContainer = chartContainerD3
        .append('div')
        .attr('class', 'flex flex-row justify-center items-center mt-4');

    const downloadPlotButton = downloadButtonsContainer
        .append('button')
        .attr('class', 'rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 py-2 px-4 mr-2')
        .text('Download plot as PNG');

    const downloadDataButton = downloadButtonsContainer
        .append('button')
        .attr('class', 'rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 py-2 px-4')
        .text('Download results as JSON');

    downloadPlotButton.on('click', () => {
        const svgElements = select(chartContainer).selectAll('svg');
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Convert SVG to Image
        function svgToImage(svgString) {
            return new Promise((resolve) => {
                const image = new Image();
                const svgBlob = new Blob([svgString], {type: 'image/svg+xml;charset=utf-8'});
                const svgUrl = URL.createObjectURL(svgBlob);

                image.onload = () => {
                    resolve(image);
                };

                image.src = svgUrl;
            });
        }

        // Get all SVG elements as strings
        const svgStrings = svgElements.nodes().map(node => new XMLSerializer().serializeToString(node));

        // Convert SVG strings to Images
        Promise.all(svgStrings.map(svgString => svgToImage(svgString)))
            .then(images => {
                let yOffset = 0;
                canvas.width = Math.max(...images.map(image => image.width));
                canvas.height = images.reduce((totalHeight, image) => totalHeight + image.height, 0);
                context.fillStyle = 'white';
                context.fillRect(0, 0, canvas.width, canvas.height);

                // Draw images on the canvas
                for (const image of images) {
                    context.drawImage(image, 0, yOffset);
                    yOffset += image.height;
                }

                // Save the combined canvas as PNG
                const pngUrl = canvas.toDataURL('image/png');
                const downloadLink = document.createElement('a');
                downloadLink.href = pngUrl;
                downloadLink.download = `icare-lit_risk_plot_${profileName}.png`;
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            });
    });

    downloadDataButton.on('click', () => {
        const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(results, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute('href', dataStr);
        downloadAnchorNode.setAttribute('download', `icare-lit_output_${profileName}.json`);
        document.body.appendChild(downloadAnchorNode); // for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    });
}

icareLitApp.addEventListener('submit', (event) => {
    event.preventDefault();
    submitButton.innerHTML = `<svg class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1-1.647z"></path>
      </svg>Calculating...`;
    submitButton.classList.add("cursor-not-allowed");
    submitButton.disabled = true;

    const formData = new FormData(event.target);
    const query = preprocessUserData(formData);

    pyodideWorker.postMessage(query);
    pyodideWorker.onmessage = (event) => {
        const results = event.data;

        plotResults(resultsDiv, results, query);
        resultsDiv.scrollIntoView({behavior: 'smooth', block: 'start'});
    };

    submitButton.innerHTML = "Estimate risk";
    submitButton.classList.remove("cursor-not-allowed");
    submitButton.disabled = false;
});
