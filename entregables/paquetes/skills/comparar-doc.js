// Compara, palabra por palabra, un Google Doc con el HTML local del que salió (detecta errores de copia al subirlo).
// 1. Abre cualquier Doc en docs.google.com (la comparación usa /mobilebasic, que es del mismo sitio).
// 2. Ejecuta este archivo con javascript_tool.
// 3. Busca el input con find «cc-cmp comparar» y pásale con file_upload el HTML local (entregables/.../docs/<id>.html).
// 4. Ejecuta: await ccComparar('<id del Doc>')  →  { N, M, D, ops }. D = 0 quiere decir idénticos.
//    Si D > 0, «ops» trae cada palabra sobrante (-) o faltante (+) con su contexto.
// Se puede reutilizar la misma pestaña para varios Docs: subir el HTML siguiente y llamar de nuevo con otro id.
(() => {
  let inp = document.getElementById('cc-cmp');
  if (!inp) {
    inp = document.createElement('input');
    inp.type = 'file'; inp.id = 'cc-cmp';
    inp.setAttribute('aria-label', 'cc-cmp comparar');
    inp.style.cssText = 'position:fixed;top:0;left:0;z-index:99999';
    document.body.appendChild(inp);
  }
  // Docs exige TrustedHTML para DOMParser: el texto se saca con expresiones regulares
  const texto = h => h.replace(/<head[\s\S]*?<\/head>/i, '').replace(/<(style|script)[\s\S]*?<\/\1>/gi, '')
    .replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#(\d+);/g, (m, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (m, n) => String.fromCodePoint(parseInt(n, 16)));
  const palabras = t => t.toLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
  window.ccComparar = async docId => {
    const a = palabras(texto(await inp.files[0].text()));
    const b = palabras(texto(await (await fetch(`/document/d/${docId}/mobilebasic`, { credentials: 'include' })).text()));
    // Diferencia mínima (Myers), con tope de 400 cambios
    const N = a.length, M = b.length, max = N + M, v = new Int32Array(2 * max + 2), traza = [];
    let D;
    fuera: for (D = 0; D <= max; D++) {
      traza.push(v.slice());
      for (let k = -D; k <= D; k += 2) {
        let x = (k === -D || (k !== D && v[k - 1 + max] < v[k + 1 + max])) ? v[k + 1 + max] : v[k - 1 + max] + 1, y = x - k;
        while (x < N && y < M && a[x] === b[y]) { x++; y++; }
        v[k + max] = x;
        if (x >= N && y >= M) break fuera;
      }
      if (D > 400) return { N, M, D: '>400' };
    }
    const ops = []; let x = N, y = M;
    for (let d = D; d > 0; d--) {
      const vv = traza[d], k = x - y;
      const pk = (k === -d || (k !== d && vv[k - 1 + max] < vv[k + 1 + max])) ? k + 1 : k - 1;
      const px = vv[pk + max], py = px - pk;
      while (x > px && y > py) { x--; y--; }
      if (x === px) ops.push(['+', y - 1, b[y - 1]]); else ops.push(['-', x - 1, a[x - 1]]);
      x = px; y = py;
    }
    ops.reverse();
    return { N, M, D, ops: ops.slice(0, 40).map(([t, i, w]) => `${t}${w} @${i} «${(t === '-' ? a : b).slice(Math.max(0, i - 4), i + 4).join(' ')}»`) };
  };
  return 'listo';
})();
