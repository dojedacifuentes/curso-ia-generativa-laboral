// Insignias del aula Moodle con la marca Empoderatech: una por módulo y una de curso completado (PNG 512×512).
// Uso: node scripts/moodle-insignias.mjs → entregables/moodle/insignias/M<n>.png y curso.png
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { logoDataURI } from './lib/marca.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const curso = JSON.parse(fs.readFileSync(path.join(RAIZ, 'data', 'curso.json'), 'utf8'));
const fuente = (f) => `data:font/woff2;base64,${fs.readFileSync(path.join(RAIZ, 'scripts', 'fuentes', f)).toString('base64')}`;
const dir = path.join(RAIZ, 'entregables', 'moodle', 'insignias');
fs.mkdirSync(dir, { recursive: true });
const nav = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find((p) => fs.existsSync(p));

// Nombres cortos de cada módulo para la cinta
const CORTO = { 1: 'Prompt básico', 2: 'Redacción', 3: 'Investigación', 4: 'Multimedia', 5: 'Automatización', 6: 'Proyecto aplicado' };
const insignia = (arriba, grande, cinta, color) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Varela;src:url(${fuente('varela-round-latin-400-normal.woff2')})}
@font-face{font-family:Mont;font-weight:700;src:url(${fuente('montserrat-latin-700-normal.woff2')})}
*{margin:0;box-sizing:border-box}html,body{width:512px;height:512px;background:transparent;overflow:hidden}
.b{position:absolute;left:16px;top:16px;width:480px;height:480px;border-radius:50%;overflow:hidden;background:radial-gradient(circle at 35% 30%,#1b2333 0%,#00060F 70%);border:10px solid ${color};box-shadow:inset 0 0 0 6px #00060F,inset 0 0 0 9px rgba(255,255,255,.18)}
.arco{position:absolute;border-radius:50%;border:3px solid #BE3455}
.logo{position:absolute;left:50%;top:92px;transform:translateX(-50%);height:44px}
.k{position:absolute;width:100%;top:152px;text-align:center;font:700 22px Mont;letter-spacing:.16em;text-transform:uppercase;color:#ED1566}
.n{position:absolute;width:100%;top:178px;text-align:center;font:400 150px/1 Varela;color:#fff}
.c{position:absolute;left:50%;top:352px;transform:translateX(-50%);background:${color};color:#fff;font:700 24px Mont;padding:10px 26px;border-radius:999px;white-space:nowrap;box-shadow:0 6px 16px rgba(0,0,0,.35)}
</style></head><body><div class="b"><div class="arco" style="width:560px;height:560px;left:150px;top:190px;opacity:.55"></div><div class="arco" style="width:700px;height:700px;left:150px;top:190px;opacity:.3"></div></div>
<img class="logo" src="${logoDataURI('logo-sobre-oscuro')}"><div class="k">${arriba}</div><div class="n">${grande}</div><div class="c">${cinta}</div></body></html>`;

const piezas = [...curso.modulos.map((m) => [`M${m.n}`, insignia('Módulo', m.n, CORTO[m.n], '#BE3455')]), ['curso', insignia('Curso', '★', 'IA generativa', '#ED1566')]];
for (const [nombre, html] of piezas) {
  const tmp = path.join(dir, `${nombre}.html`);
  fs.writeFileSync(tmp, html);
  execFileSync(nav, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--default-background-color=00000000', '--window-size=512,512', `--screenshot=${path.join(dir, `${nombre}.png`)}`, `file:///${tmp.replace(/\\/g, '/')}`], { stdio: 'ignore' });
  fs.unlinkSync(tmp);
}
console.log(`${piezas.length} insignias en ${path.relative(RAIZ, dir)}`);
