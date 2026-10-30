// Imagen del curso para el catálogo de Moodle (tarjeta del curso y «Cursos a la venta»), con la marca Empoderatech: noche,
// arcos frambuesa, logo e-tech, Varela Round y Montserrat. Uso: node scripts/moodle-imagen.mjs → entregables/moodle/curso-imagen.png
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { logoDataURI, arcos } from './lib/marca.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const curso = JSON.parse(fs.readFileSync(path.join(RAIZ, 'data', 'curso.json'), 'utf8'));
const fuente = (f) => `data:font/woff2;base64,${fs.readFileSync(path.join(RAIZ, 'scripts', 'fuentes', f)).toString('base64')}`;
const [W, H] = [1200, 675];
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Varela;src:url(${fuente('varela-round-latin-400-normal.woff2')})}
@font-face{font-family:Mont;font-weight:500;src:url(${fuente('montserrat-latin-500-normal.woff2')})}
@font-face{font-family:Mont;font-weight:700;src:url(${fuente('montserrat-latin-700-normal.woff2')})}
*{margin:0;box-sizing:border-box}body{width:${W}px;height:${H}px;overflow:hidden;background:#00060F;color:#fff;font-family:Mont,sans-serif}
.arcos{position:absolute;right:-40px;bottom:-40px;width:760px;height:380px}
.logo{position:absolute;left:80px;top:70px;height:58px}
.k{position:absolute;left:80px;top:205px;font:700 20px Mont;letter-spacing:.14em;text-transform:uppercase;color:#ED1566}
h1{position:absolute;left:80px;top:250px;width:760px;font:400 72px/1.08 Varela,sans-serif}
.m{position:absolute;left:80px;bottom:70px;display:flex;gap:10px}
.m span{border:2px solid rgba(255,255,255,.25);border-radius:999px;padding:8px 18px;font:500 19px Mont}
</style></head><body>${arcos(760, 380)}
<img class="logo" src="${logoDataURI('logo-sobre-oscuro')}"><div class="k">Curso · ${curso.modulos.length} módulos</div><h1>${curso.titulo}</h1>
<div class="m"><span>Prompts</span><span>Redacción</span><span>Investigación</span><span>Multimedia</span><span>Automatización</span></div></body></html>`;

const dir = path.join(RAIZ, 'entregables', 'moodle'); fs.mkdirSync(dir, { recursive: true });
const tmp = path.join(dir, 'curso-imagen.html'); fs.writeFileSync(tmp, html);
const nav = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find((p) => fs.existsSync(p));
const png = path.join(dir, 'curso-imagen.png');
execFileSync(nav, ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--window-size=${W},${H}`, `--screenshot=${png}`, `file:///${tmp.replace(/\\/g, '/')}`], { stdio: 'ignore' });
fs.unlinkSync(tmp);
console.log(`${path.relative(RAIZ, png)} (${W}×${H})`);
