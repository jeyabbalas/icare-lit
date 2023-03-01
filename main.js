import './style.css'


const icareLitApp = document.querySelector('#app');

icareLitApp.innerHTML = `
  <div>
    <h1 class="pl-2 pt-2 text-2xl font-bold underline">iCARE-Lit</h1>
    
    <form id="icare-lit-form" class="space-y-8 divide-y divide-gray-200">
    
        <input name="name" type="text" value="Jane Doe">
    
        <div class="pt-5">
            <div class="flex justify-center">
                <button type="submit" class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Estimate risk</button>
                <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Reset</button>
            </div>
        </div>
    </form>
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
