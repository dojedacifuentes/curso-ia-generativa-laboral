// Revisa que respondan las URL de investigacion/referencias-apa.json (APA 7, «bien linkeadas»). Lee la red; no cambia nada.
// Uso: node scripts/revisar-enlaces.mjs   → entregables/auditoria/enlaces.json
// Algunos sitios bloquean las consultas automáticas (403 de Canva, UNESCO, W3C, OCDE; error de conexión de ai.google.dev y
// chatgpt.com): esas URL se revisan a mano en un navegador. El 29-10 todas abrían.
import fs from 'node:fs';
const apa = JSON.parse(fs.readFileSync('investigacion/referencias-apa.json', 'utf8'));
const entradas = Object.entries(apa);
const res = [];
const ua = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36', 'Accept-Language': 'es-CL,es;q=0.9' };
async function probar([id, e]) {
  for (const metodo of ['HEAD', 'GET']) {
    try {
      const r = await fetch(e.url, { method: metodo, redirect: 'follow', headers: ua, signal: AbortSignal.timeout(20000) });
      if (r.ok || metodo === 'GET') return res.push({ id, estado: r.status, url: e.url, final: r.url !== e.url ? r.url : '' });
    } catch (err) { if (metodo === 'GET') return res.push({ id, estado: 'ERR ' + (err.cause?.code || err.name), url: e.url }); }
  }
}
for (let i = 0; i < entradas.length; i += 10) await Promise.all(entradas.slice(i, i + 10).map(probar));
const mal = res.filter(r => r.estado !== 200);
fs.writeFileSync('entregables/auditoria/enlaces.json', JSON.stringify(res, null, 1));
console.log(res.length, 'probados ·', res.length - mal.length, 'con 200 ·', mal.length, 'con otro estado');
for (const r of mal) console.log(r.estado, r.id, r.url.slice(0, 110));
