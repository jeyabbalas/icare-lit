importScripts("https://cdn.jsdelivr.net/pyodide/v0.23.0/full/pyodide.js");


async function loadICare() {
  let response = await fetch('https://raw.githubusercontent.com/jeyabbalas/py-icare/master/dist/icare.zip')
  let buffer = await response.arrayBuffer();
  await self.pyodide.unpackArchive(buffer, 'zip');
  await self.pyodide.loadPackage(['numpy', 'pandas', 'patsy']);

  return self.pyodide.pyimport('icare');
}

async function loadPyodideAndPackages() {
    self.pyodide = await loadPyodide();
    self.icare = await loadICare();
}
