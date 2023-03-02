import './style.css'
import roseIcon from './rose.svg'
import githubIcon from './github.svg'

const icareLitApp = document.querySelector('#app');

icareLitApp.innerHTML = `
  <div id="header" class="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8 bg-cyan-700 rounded-b-lg">
    <div class="flex items-center justify-between">
      <div class="flex justify-start gap-2">
        <div class="grid place-content-center">
          <img src="${roseIcon}" class="h-12 w-12 sm:h-16 sm:w-16 gap-2 logo vanilla grayscale" alt="rose icon" />
        </div>
        <div class="min-w-0 flex-1">
          <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:tracking-tight">iCARE-Lit</h2>
          <p class="py-2 pr-2 text-sm sm:text-base text-white">An individualized coherent absolute risk estimator of breast cancer</p>
        </div>
      </div>
      
      <div class="flex md:mt-0 md:ml-4">
        <a href="https://github.com/jeyabbalas/icare-lit">
          <img src="${githubIcon}" class="h-8 w-8 sm:h-12 sm:w-12 flex-no-shrink fill-current" alt="github icon" />
        </a>
      </div>
    </div>
  </div>
  
  <div id="info" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
  </div>
  
  <div id="form" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <form id="icare-lit-form" class="space-y-8 divide-y divide-gray-200">
      <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <label for="name">Please enter a name or an alias:</label>
        <div>
          <input name="name" type="text" value="Jane Doe">
        </div>
    </div>

    <div class="pt-6 pb-6">
        <div class="flex justify-center gap-2 ml-2 mr-2">
          <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">Estimate risk</button>
          <button type="reset" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">Reset</button>
        </div>
      </div>
    </form>
  </div>
  
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300 ml-2 mr-2"></div>
    </div>
    <div class="relative flex justify-center">
      <span class="bg-white px-2 text-sm text-gray-500">iCARE-Lit results</span>
    </div>
  </div>
  
  <div id="results" class="mx-auto max-w-7xl mt-4 px-4 sm:px-6 lg:px-8">
    <h1>The estimated 5-year risk is: </h1>
  </div>
`

icareLitApp.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  // const name = formData.get('name');
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  console.log(data.name);
});
