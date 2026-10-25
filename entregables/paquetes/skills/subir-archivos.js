// Subir archivos (PDF, zip, png, html, md) a la carpeta de Drive abierta en la pestaña, sin diálogo de archivos.
// 1. Abre la carpeta: https://drive.google.com/drive/folders/<id>
// 2. Ejecuta este archivo con javascript_tool (Claude in Chrome).
// 3. Busca el input con find «cc-up subir archivos» y pásale los archivos con file_upload (menos de 10 MB por llamada).
// 4. El cambio del input dispara un «drop» sobre la lista de la carpeta: Drive sube los archivos ahí.
// Comprueba después con search_files (parentId = '<id>' and createdTime > '<hora>') que estén todos y con el tamaño local.
(() => {
  let inp = document.getElementById('cc-up');
  if (inp) return 'ya estaba';
  inp = document.createElement('input');
  inp.type = 'file'; inp.id = 'cc-up'; inp.multiple = true;
  inp.setAttribute('aria-label', 'cc-up subir archivos');
  inp.style.cssText = 'position:fixed;top:0;left:0;z-index:99999';
  document.body.appendChild(inp);
  inp.addEventListener('change', () => {
    const dt = new DataTransfer();
    for (const f of inp.files) dt.items.add(f);
    const destino = document.elementFromPoint(innerWidth * 0.55, innerHeight * 0.45);
    for (const t of ['dragenter', 'dragover', 'drop']) destino.dispatchEvent(new DragEvent(t, { bubbles: true, cancelable: true, dataTransfer: dt }));
    window.__ccSubidos = inp.files.length;
  });
  return 'listo';
})();
