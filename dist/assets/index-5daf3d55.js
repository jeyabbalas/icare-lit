(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n="/icare-lit/assets/rose-ed9a43c9.svg",l=document.querySelector("#app");l.innerHTML=`
  <div id="header" class="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8 bg-cyan-700 rounded-b-lg">
    <div class="flex items-center justify-between">
      <div class="flex justify-start gap-2">
        <div class="grid place-content-center">
          <img src="${n}" class="h-12 w-12 sm:h-16 sm:w-16 gap-2 logo vanilla grayscale" alt="rose icon" />
        </div>
        <div class="min-w-0 flex-1">
          <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:tracking-tight">iCARE-Lit</h2>
          <p class="py-2 pr-2 text-sm sm:text-base text-white">An individualized coherent absolute risk estimator of breast cancer</p>
        </div>
      </div>
      
      <div class="flex md:mt-0 md:ml-4">
        <a href="https://github.com/jeyabbalas/icare-lit">
          <svg class="h-8 w-8 sm:h-12 sm:w-12 flex-no-shrink fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 100 100">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/>
          </svg>
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
`;l.addEventListener("submit",r=>{r.preventDefault();const s=new FormData(r.target),i=Object.fromEntries(s.entries());console.log(i),console.log(i.name)});
