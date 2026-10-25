// Infografía por módulo: infografias/M<n>.json → entregables/infografias/M<n>-Infografia.html y .png (1080 px de ancho).
// Formato de la fuente en docs/FORMATO-INFOGRAFIA.md. Íconos Lucide (ISC) de scripts/lib/iconos-lucide/.
//
//   node scripts/infografias.mjs               todas
//   node scripts/infografias.mjs M1 M4          solo esas
//   node scripts/infografias.mjs --sin-png      solo HTML
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const curso = JSON.parse(fs.readFileSync(path.join(RAIZ, 'data', 'curso.json'), 'utf8'));
const DIR_ICO = path.join(RAIZ, 'scripts', 'lib', 'iconos-lucide');
const SALIDA = path.join(RAIZ, 'entregables', 'infografias');
const TIPOS = ['anatomia', 'pasos', 'matriz', 'mapa', 'ciclo'];
// Un acento por módulo (contraste AA sobre blanco y con texto blanco encima)
const ACENTO = { 1: '#0E7490', 2: '#4F46E5', 3: '#B45309', 4: '#BE185D', 5: '#047857', 6: '#6D28D9' };
const SEMAFORO = { verde: '#15803D', amarillo: '#B45309', rojo: '#B91C1C' };
const NAV = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe'].find(c => fs.existsSync(c));

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const negrita = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
function icono(nombre, tam = 34, color = 'currentColor') {
  const f = path.join(DIR_ICO, `${nombre}.svg`);
  if (!fs.existsSync(f)) throw new Error(`ícono «${nombre}» no existe en scripts/lib/iconos-lucide`);
  return fs.readFileSync(f, 'utf8').replace(/<!--.*?-->/s, '').replace(/class="[^"]*"/, '')
    .replace(/width="24"/, `width="${tam}"`).replace(/height="24"/, `height="${tam}"`).replace(/stroke="currentColor"/, `stroke="${color}"`).trim();
}
const fuente = (peso, f) => `@font-face{font-family:"Plex";font-weight:${peso};src:url(data:font/woff2;base64,${fs.readFileSync(path.join(RAIZ, 'scripts', 'fuentes', f)).toString('base64')}) format("woff2")}`;
const FUENTES = [fuente(400, 'ibm-plex-sans-latin-400-normal.woff2'), fuente(600, 'ibm-plex-sans-latin-600-normal.woff2'), fuente(700, 'ibm-plex-sans-latin-700-normal.woff2')].join('');

function validar(j, archivo) {
  const err = m => { throw new Error(`${archivo}: ${m}`); };
  const m = curso.modulos.find(x => x.n === j.modulo) || err('«modulo» no existe');
  const rec = m.recursos.find(r => r.id === j.recurso) || err(`el recurso ${j.recurso} no es del módulo ${j.modulo}`);
  if (!/Infografía/.test(rec.titulo)) err(`${j.recurso} no es una infografía en la planilla`);
  if (!TIPOS.includes(j.tipo)) err(`tipo «${j.tipo}» (usa ${TIPOS.join(', ')})`);
  for (const k of ['titulo', 'bajada', 'clave']) if (!j[k]) err(`falta «${k}»`);
  if (j.bajada.length > 170) err('la bajada pasa de 170 caracteres');
  const b = j.bloques || err('faltan «bloques»');
  const rango = { anatomia: [4, 5], pasos: [3, 6], matriz: [4, 4], mapa: [4, 6], ciclo: [4, 5] }[j.tipo];
  if (b.length < rango[0] || b.length > rango[1]) err(`${j.tipo} lleva entre ${rango[0]} y ${rango[1]} bloques`);
  const aes = new Set(m.aes.map(a => a.id));
  for (const [i, x] of b.entries()) {
    if (!x.titulo || !x.texto) err(`bloque ${i + 1}: falta título o texto`);
    if (x.texto.length > 190) err(`bloque ${i + 1}: el texto pasa de 190 caracteres`);
    if (x.icono) icono(x.icono);
    for (const ref of x.ver || []) { const [ae, p] = ref.split(' '); if (!aes.has(ae) || !/^P\d\d$/.test(p)) err(`bloque ${i + 1}: «ver» mal escrito (${ref})`); }
  }
  if (j.tipo === 'mapa') for (const s of j.semaforo || err('el mapa lleva «semaforo»')) if (!SEMAFORO[s.nivel]) err(`nivel de semáforo «${s.nivel}»`);
  if (j.tipo === 'matriz' && !(j.ejes?.x && j.ejes?.y)) err('la matriz lleva «ejes»: {x, y}');
  return m;
}

const bloque = (x, n, ac) => `<div class="blq">${x.icono ? `<div class="ico" style="color:${ac}">${icono(x.icono)}</div>` : ''}
  <div><h3>${n ? `<span class="num" style="background:${ac}">${n}</span>` : ''}${esc(x.titulo)}</h3><p>${negrita(x.texto)}</p>
  ${x.ejemplo ? `<p class="ej"><b>Ejemplo:</b> ${negrita(x.ejemplo)}</p>` : ''}</div></div>`;

function cuerpo(j, ac) {
  const b = j.bloques;
  if (j.tipo === 'anatomia') return `<div class="prompt" style="border-color:${ac}">${b.map((x, i) => `<span class="pieza" style="--c:${ac}">${esc(x.titulo)}</span>${i < b.length - 1 ? '<span class="mas">+</span>' : ''}`).join('')}</div>
    <div class="grid2">${b.map(x => bloque(x, 0, ac)).join('')}</div>`;
  if (j.tipo === 'pasos') return `<div class="pasos">${b.map((x, i) => `${bloque(x, i + 1, ac)}${i < b.length - 1 ? `<div class="flecha" style="color:${ac}">↓</div>` : ''}`).join('')}</div>`;
  if (j.tipo === 'matriz') return `<div class="matriz"><div class="ejey">${esc(j.ejes.y)} ↑</div><div class="cuad">${b.map((x, i) => `<div class="q q${i}" style="--c:${ac}">${bloque(x, 0, ac)}</div>`).join('')}</div><div class="ejex">${esc(j.ejes.x)} →</div></div>`;
  if (j.tipo === 'mapa') return `<div class="grid2">${b.map(x => bloque(x, 0, ac)).join('')}</div>
    <h2 class="sub">${esc(j.semaforoTitulo || 'Semáforo')}</h2><div class="semaforo">${j.semaforo.map(s => `<div class="luz"><span class="foco" style="background:${SEMAFORO[s.nivel]}"></span><div><h3>${esc(s.titulo)}</h3><p>${negrita(s.texto)}</p></div></div>`).join('')}</div>`;
  // ciclo: nodos alrededor de un centro
  return `<div class="ciclo"><div class="centro" style="border-color:${ac}">${esc(j.centro || j.titulo)}</div>${b.map((x, i) => `${bloque(x, i + 1, ac)}`).join('')}</div>
    <p class="vuelta" style="color:${ac}">↻ ${esc(j.vuelta || 'El ciclo vuelve a empezar con lo aprendido')}</p>`;
}

function html(j, m) {
  const ac = ACENTO[m.n];
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=1080">
<title>Infografía M${m.n} · ${esc(j.titulo)}</title><style>${FUENTES}
*{box-sizing:border-box}html,body{margin:0;background:#F8FAFC}body{width:1080px;font:400 25px/1.4 "Plex",Arial,sans-serif;color:#0F172A}
header{background:${ac};color:#fff;padding:56px 64px 48px;position:relative;overflow:hidden}
header:after{content:"";position:absolute;right:-120px;top:-120px;width:380px;height:380px;border-radius:50%;background:rgba(255,255,255,.08)}
.mod{font:600 22px/1 "Plex";letter-spacing:.12em;text-transform:uppercase;opacity:.9}
h1{font:700 60px/1.08 "Plex";margin:18px 0 16px;max-width:900px}.bajada{font-size:27px;margin:0;max-width:900px;opacity:.95}
main{padding:44px 56px 20px}h3{font:700 27px/1.2 "Plex";margin:0 0 6px;display:flex;align-items:center;gap:12px}p{margin:0}
.blq{display:flex;gap:18px;background:#fff;border:2px solid #E2E8F0;border-radius:22px;padding:24px 26px}
.ico{flex:none;width:58px;height:58px;border-radius:16px;background:#F1F5F9;display:grid;place-items:center}
.num{flex:none;width:40px;height:40px;border-radius:50%;color:#fff;display:inline-grid;place-items:center;font:700 22px/1 "Plex"}
.ej{margin-top:8px;font-size:22px;color:#334155;background:#F8FAFC;border-left:4px solid ${ac};padding:6px 12px;border-radius:6px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:20px}.grid2>.blq:last-child:nth-child(odd),.ciclo>.blq:last-child:nth-child(even){grid-column:1/-1}
.prompt{display:flex;flex-wrap:wrap;align-items:center;gap:10px;justify-content:center;border:3px dashed;border-radius:24px;padding:26px;margin-bottom:28px;background:#fff}
.pieza{font:700 28px/1 "Plex";color:#fff;background:var(--c);padding:14px 20px;border-radius:14px}.mas{font:700 34px/1 "Plex";color:#94A3B8}
.pasos{display:flex;flex-direction:column;gap:0}.flecha{text-align:center;font:700 40px/1.1 "Plex"}
.matriz{display:grid;grid-template-columns:50px 1fr;grid-template-rows:1fr auto;gap:10px}
.ejey{writing-mode:vertical-rl;transform:rotate(180deg);text-align:center;font:700 24px/1 "Plex";color:#475569}
.ejex{grid-column:2;text-align:center;font:700 24px/1 "Plex";color:#475569}
.cuad{display:grid;grid-template-columns:1fr 1fr;gap:16px}.q .blq{height:100%;border-color:color-mix(in srgb,var(--c) 35%,#E2E8F0)}
.q3 .blq{background:color-mix(in srgb,var(--c) 10%,#fff)}
.sub{font:700 32px/1.2 "Plex";margin:34px 0 16px}
.semaforo{display:flex;flex-direction:column;gap:14px}.luz{display:flex;gap:18px;align-items:flex-start;background:#fff;border:2px solid #E2E8F0;border-radius:18px;padding:18px 22px}
.foco{flex:none;width:34px;height:34px;border-radius:50%;margin-top:2px;box-shadow:0 0 0 6px #F1F5F9}
.ciclo{display:grid;grid-template-columns:1fr 1fr;gap:20px;position:relative}
.centro{grid-column:1/-1;justify-self:center;font:700 30px/1.2 "Plex";border:4px solid;border-radius:999px;padding:16px 34px;background:#fff;text-align:center}
.vuelta{text-align:center;font:700 26px/1.3 "Plex";margin-top:18px}
.clave{margin:30px 56px 0;background:#0F172A;color:#fff;border-radius:22px;padding:28px 32px;font:600 28px/1.35 "Plex"}
.clave b{color:color-mix(in srgb,${ac} 40%,#fff)}
footer{padding:22px 56px 40px;font-size:18px;color:#64748B}
</style></head><body><header><div class="mod">Módulo ${m.n} · ${esc(m.nombre)}</div><h1>${esc(j.titulo)}</h1><p class="bajada">${negrita(j.bajada)}</p></header>
<main>${cuerpo(j, ac)}</main><div class="clave">${negrita(j.clave)}</div>
<footer>${esc(curso.titulo)} · Infografía del módulo ${m.n}${j.pie ? ` · ${esc(j.pie)}` : ''}</footer>
<script>document.fonts.ready.then(() => { document.body.dataset.alto = Math.ceil(document.body.getBoundingClientRect().height) })</script></body></html>`;
}

const args = process.argv.slice(2);
const pedidos = args.filter(a => !a.startsWith('--'));
const conPng = !args.includes('--sin-png');
fs.mkdirSync(SALIDA, { recursive: true });
const ids = pedidos.length ? pedidos : fs.readdirSync(path.join(RAIZ, 'infografias')).filter(f => /^M\d\.json$/.test(f)).map(f => f.slice(0, -5)).sort();
let fallas = 0;
for (const id of ids) {
  const archivo = `infografias/${id}.json`;
  try {
    const j = JSON.parse(fs.readFileSync(path.join(RAIZ, archivo), 'utf8'));
    const m = validar(j, archivo);
    const salida = path.join(SALIDA, `${id}-Infografia.html`);
    fs.writeFileSync(salida, html(j, m));
    let info = '';
    if (conPng) {
      if (!NAV) throw new Error('No encontré Edge ni Chrome para el PNG');
      const dom = execFileSync(NAV, ['--headless=new', '--disable-gpu', '--virtual-time-budget=3000', '--window-size=1080,1920', '--dump-dom', pathToFileURL(salida).href], { encoding: 'utf8', timeout: 120000 });
      const alto = Number(/data-alto="(\d+)"/.exec(dom)?.[1]);
      if (!alto) throw new Error(`${archivo}: no pude medir el alto`);
      const png = path.join(SALIDA, `${id}-Infografia.png`);
      if (fs.existsSync(png)) fs.unlinkSync(png);
      execFileSync(NAV, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--virtual-time-budget=3000', `--window-size=1080,${alto}`, `--screenshot=${png}`, pathToFileURL(salida).href], { stdio: 'ignore', timeout: 120000 });
      info = ` · PNG 1080×${alto}`;
    }
    console.log(`✓ ${id} · ${j.tipo} · ${j.bloques.length} bloques${info}`);
  } catch (e) { console.log(`✗ ${e.message}`); fallas++; }
}
if (fallas) process.exit(1);
