// Junta los 22 contenidos base en un solo documento: entregables/Contenidos-completos.md y .html
// Uso: node scripts/compilar-contenidos.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const curso = JSON.parse(fs.readFileSync(path.join(RAIZ, 'data', 'curso.json'), 'utf8'));
const SALIDA = path.join(RAIZ, 'entregables');
fs.mkdirSync(SALIDA, { recursive: true });

const leer = id => fs.readFileSync(path.join(RAIZ, 'contenido', id.split('-')[0], `${id}.md`), 'utf8').replace(/\r\n/g, '\n');
const hoy = new Date().toISOString().slice(0, 10);

// ---------- Markdown completo ----------
let md = `# ${curso.titulo} · Contenidos base\n\nGenerado el ${hoy} desde \`contenido/\`. ${curso.modulos.length} módulos · `
  + `${curso.modulos.reduce((s, m) => s + m.aes.length, 0)} aprendizajes esperados.\n\n`;
for (const m of curso.modulos) {
  md += `\n---\n\n# Módulo ${m.n} · ${m.nombre}\n\n**Competencia:** ${m.competencia}\n\n`;
  for (const ae of m.aes) md += '\n' + leer(ae.id).replace(/^# /m, '## ').replace(/^## (?!M\d)/gm, '### ') + '\n';
}
fs.writeFileSync(path.join(SALIDA, 'Contenidos-completos.md'), md);

// ---------- HTML ----------
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const enLinea = s => esc(s)
  .replace(/`([^`]+)`/g, '<code>$1</code>')
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<em>$2</em>')
  .replace(/https?:\/\/[^\s<]+/g, url => {
    // Cierra en un «)» solo si no tiene su «(» en la URL (las de LibreTexts llevan «(Lumen)»)
    let fin = '';
    while (/[.,;:)]$/.test(url) && !(url.endsWith(')') && (url.match(/\(/g) || []).length >= (url.match(/\)/g) || []).length)) { fin = url.slice(-1) + fin; url = url.slice(0, -1); }
    return `<a href="${url}">${url}</a>${fin}`;
  });

const ETIQUETAS = { ejemplo: 'Ejemplo', error: 'Error frecuente', clave: 'Clave', actividad: 'Actividad', comprueba: 'Comprueba' };

// Colores de los recuadros en modo Docs (Google Docs no respeta clases: todo va en línea)
const COLOR_DOCS = { ejemplo: ['#E6F4F7', '#0E7490'], error: ['#FDECEC', '#B91C1C'], clave: ['#FEF3E2', '#B45309'], actividad: ['#E7F6EF', '#047857'], comprueba: ['#F0EBFB', '#6D28D9'] };
let DOCS = false;
const META = /^(cubre:\s*([SHAC]\d|M\d-AE\d)|fuentes:\s*F-|bloque:)/;

function bloques(texto) {
  const lineas = texto.split('\n');
  let html = '', i = 0;
  const parrafo = [];
  // Las líneas «**Etiqueta:** valor» seguidas (encabezado de los casos) van cada una en su renglón
  const cerrarParrafo = () => {
    if (!parrafo.length) return;
    const renglones = [];
    for (const p of parrafo) if (/^\*\*[^*]+:\*\*/.test(p) && renglones.length) renglones.push(p); else if (renglones.length) renglones[renglones.length - 1] += ' ' + p; else renglones.push(p);
    html += `<p>${renglones.map(enLinea).join('<br>')}</p>\n`; parrafo.length = 0;
  };
  while (i < lineas.length) {
    const l = lineas[i];
    if (/^>\s?/.test(l)) {
      cerrarParrafo();
      const cita = [];
      for (; i < lineas.length && /^>\s?/.test(lineas[i]); i++) cita.push(lineas[i].replace(/^>\s?/, ''));
      html += DOCS ? `<table style="border-collapse:collapse;width:100%"><tr><td style="background:#F1F5F9;border-left:4px solid #64748B;padding:8px 12px">${bloques(cita.join('\n'))}</td></tr></table>\n`
        : `<blockquote class="aviso">${bloques(cita.join('\n'))}</blockquote>\n`;
      continue;
    }
    if (/^```/.test(l)) {
      cerrarParrafo();
      const cod = [];
      for (i++; i < lineas.length && !/^```/.test(lineas[i]); i++) cod.push(lineas[i]);
      html += `<pre><code>${esc(cod.join('\n'))}</code></pre>\n`; i++; continue;
    }
    if (/^:::(\w+)/.test(l)) {
      cerrarParrafo();
      const [, tipo, titulo = ''] = /^:::(\w+)\s*(.*)$/.exec(l);
      const dentro = [];
      for (i++; i < lineas.length && lineas[i].trim() !== ':::'; i++) dentro.push(lineas[i]);
      const etq = `${ETIQUETAS[tipo] || tipo}${titulo ? ' · ' + enLinea(titulo) : ''}`;
      if (DOCS) {
        const [fondo, borde] = COLOR_DOCS[tipo] || ['#F1F5F9', '#334155'];
        html += `<table style="border-collapse:collapse;width:100%"><tr><td style="background:${fondo};border:1px solid ${borde};padding:8px 12px">`
          + `<p style="color:${borde};font-weight:bold">${etq}</p>${bloques(dentro.join('\n'))}</td></tr></table>\n`;
      } else html += `<aside class="caja ${tipo}"><div class="etq">${etq}</div>${bloques(dentro.join('\n'))}</aside>\n`;
      i++; continue;
    }
    if (/^\|/.test(l)) {
      cerrarParrafo();
      const filas = [];
      for (; i < lineas.length && /^\|/.test(lineas[i]); i++) filas.push(lineas[i]);
      const celdas = f => f.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      const cuerpo = filas.filter((_, k) => k !== 1 || !/^\|[\s:|-]+\|$/.test(filas[1]));
      const td = DOCS ? ' style="border:1px solid #94A3B8;padding:4px 8px"' : '';
      const th = DOCS ? ' style="border:1px solid #94A3B8;padding:4px 8px;background:#E2E8F0"' : '';
      html += `<div class="tabla"><table${DOCS ? ' style="border-collapse:collapse"' : ''}><thead><tr>` + celdas(cuerpo[0]).map(c => `<th${th}>${enLinea(c)}</th>`).join('') + '</tr></thead><tbody>'
        + cuerpo.slice(1).map(f => '<tr>' + celdas(f).map(c => `<td${td}>${enLinea(c)}</td>`).join('') + '</tr>').join('') + '</tbody></table></div>\n';
      continue;
    }
    const li = /^(\s*)(-|\d+\.)\s+(.*)$/.exec(l);
    if (li) {
      cerrarParrafo();
      const ordenada = /\d/.test(li[2]);
      const items = [];
      for (; i < lineas.length; i++) {
        const m = /^(\s*)(-|\d+\.)\s+(.*)$/.exec(lineas[i]);
        if (m) items.push(m[3]);
        else if (/^\s{2,}\S/.test(lineas[i]) && items.length) items[items.length - 1] += ' ' + lineas[i].trim();
        else break;
      }
      const tag = ordenada ? 'ol' : 'ul';
      html += `<${tag}>` + items.map(t => {
        const chk = /^\[( |x)\]\s*(.*)$/.exec(t);
        return chk ? `<li class="chk">☐ ${enLinea(chk[2])}</li>` : `<li>${enLinea(t)}</li>`;
      }).join('') + `</${tag}>\n`;
      continue;
    }
    // Metadatos de pantalla: solo con su forma exacta («fuentes: F-…»), para no confundir prosa que empieza con «fuentes:»
    if (META.test(l)) {
      cerrarParrafo();
      const meta = [];
      for (; i < lineas.length && META.test(lineas[i]); i++) {
        const [, k, v] = /^(\w+):\s*(.*)$/.exec(lineas[i]);
        meta.push(`<span><b>${k === 'bloque' ? 'Bloque Rise' : k === 'cubre' ? 'Cubre' : 'Fuentes'}:</b> ${esc(v)}</span>`);
      }
      html += DOCS ? `<p style="color:#64748B;font-size:9pt">${meta.join(' · ')}</p>\n` : `<div class="meta">${meta.join('')}</div>\n`;
      continue;
    }
    if (/^#{1,4} /.test(l)) {
      cerrarParrafo();
      const n = /^(#+)/.exec(l)[1].length;
      const t = l.replace(/^#+\s*/, '');
      const id = /^P\d\d/.test(t) ? '' : '';
      html += `<h${n + 1}${id}>${enLinea(t)}</h${n + 1}>\n`; i++; continue;
    }
    if (!l.trim()) { cerrarParrafo(); i++; continue; }
    parrafo.push(l.trim()); i++;
  }
  cerrarParrafo();
  return html;
}

let indice = '', cuerpo = '';
for (const m of curso.modulos) {
  indice += `<li><a href="#m${m.n}">Módulo ${m.n} · ${esc(m.nombre)}</a><ul>`;
  cuerpo += `<section class="modulo" id="m${m.n}"><h1>Módulo ${m.n} · ${esc(m.nombre)}</h1><p class="comp"><b>Competencia:</b> ${esc(m.competencia)}</p>`;
  for (const ae of m.aes) {
    const texto = leer(ae.id).replace(/^# .*\n/, '');
    indice += `<li><a href="#${ae.id}">${ae.id} · ${esc(ae.tema)}</a></li>`;
    cuerpo += `<article id="${ae.id}"><h2 class="ae">${ae.id} · ${esc(ae.tema)}</h2><p class="aetxt">${esc(ae.texto)}</p>${bloques(texto)}</article>`;
  }
  indice += '</ul></li>';
  cuerpo += '</section>';
}

const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Contenidos base · IA generativa laboral</title>
<style>
:root{--tx:#1f2937;--mu:#64748b;--bg:#f8fafc;--pa:#fff;--li:#e2e8f0;--az:#0f3d5e;--tq:#0e7490;--am:#b45309;--ro:#b91c1c;--ve:#047857;--vi:#6d28d9}
@media (prefers-color-scheme:dark){:root{--tx:#e5e7eb;--mu:#94a3b8;--bg:#0b1220;--pa:#111a2b;--li:#23324a;--az:#7cc4f0;--tq:#5fd0e0;--am:#f5b056;--ro:#f08a8a;--ve:#5fd3a5;--vi:#b9a2f5}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--tx);font:16px/1.6 "Segoe UI",Roboto,Arial,sans-serif}
.wrap{display:grid;grid-template-columns:300px 1fr;max-width:1300px;margin:0 auto}
nav{position:sticky;top:0;height:100vh;overflow:auto;padding:24px 16px;border-right:1px solid var(--li);font-size:14px}
nav ul{list-style:none;padding-left:12px;margin:4px 0}nav>ul{padding:0}nav a{color:var(--tx);text-decoration:none}nav a:hover{color:var(--tq)}
main{padding:24px 40px;min-width:0}h1{color:var(--az);border-bottom:3px solid var(--tq);padding-bottom:6px;margin-top:48px}
h2.ae{color:var(--az);margin-top:40px;font-size:1.5em}.aetxt{background:var(--pa);border-left:4px solid var(--tq);padding:10px 14px;font-weight:600}
h3{margin-top:32px;color:var(--tq)}h4{margin:18px 0 6px}
.meta{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:12.5px;color:var(--mu);background:var(--pa);border:1px solid var(--li);border-radius:6px;padding:6px 10px;margin:4px 0 12px}
.caja{background:var(--pa);border:1px solid var(--li);border-left:5px solid var(--tq);border-radius:8px;padding:10px 14px;margin:14px 0}
.caja .etq{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--tq);margin-bottom:4px}
.caja.error{border-left-color:var(--ro)}.caja.error .etq{color:var(--ro)}.caja.clave{border-left-color:var(--am)}.caja.clave .etq{color:var(--am)}
.caja.actividad{border-left-color:var(--ve)}.caja.actividad .etq{color:var(--ve)}.caja.comprueba{border-left-color:var(--vi)}.caja.comprueba .etq{color:var(--vi)}
.caja p:last-child{margin-bottom:0}.tabla{overflow-x:auto}table{border-collapse:collapse;margin:10px 0;font-size:14.5px}
th,td{border:1px solid var(--li);padding:6px 10px;text-align:left;vertical-align:top}th{background:var(--pa)}
code{background:var(--pa);border:1px solid var(--li);border-radius:4px;padding:0 4px;font-size:.92em}pre{background:var(--pa);border:1px solid var(--li);padding:10px;overflow:auto;white-space:pre-wrap}
pre code{border:0;padding:0}blockquote.aviso{background:var(--pa);border-left:4px solid var(--mu);margin:14px 0;padding:8px 14px}blockquote.aviso p:last-child{margin-bottom:0}li.chk{list-style:none;margin-left:-18px}a{color:var(--tq);word-break:break-all}.comp{color:var(--mu)}
header.top{padding:8px 0 0}header.top p{color:var(--mu)}
@media (max-width:900px){.wrap{display:block}nav{position:static;height:auto;border-right:0;border-bottom:1px solid var(--li)}main{padding:16px}}
@media print{nav{display:none}.wrap{display:block}article{break-before:page}}
</style></head><body><div class="wrap">
<nav><b>${esc(curso.titulo)}</b><ul>${indice}</ul></nav>
<main><header class="top"><h1 style="margin-top:0">${esc(curso.titulo)} · Contenidos base</h1>
<p>Generado el ${hoy} desde <code>contenido/</code>. Cada pantalla indica qué contenido de la planilla cubre, las fuentes que la respaldan
(detalle en <code>investigacion/</code>) y el bloque de Rise sugerido.</p></header>
${cuerpo}</main></div></body></html>`;
fs.writeFileSync(path.join(SALIDA, 'Contenidos-completos.html'), html);
console.log('entregables/Contenidos-completos.md y .html');

// ---------- Un archivo por AE: HTML para PDF y HTML para Google Docs ----------
const CSS = html.match(/<style>[\s\S]*?<\/style>/)[0].replace(/@media \(prefers-color-scheme:dark\)\{.*?\}\}/, '');
const DIR_AE = path.join(SALIDA, 'por-ae'), DIR_DOCS = path.join(SALIDA, 'docs'), DIR_PDF = path.join(SALIDA, 'pdf');
for (const d of [DIR_AE, DIR_DOCS, DIR_PDF]) fs.mkdirSync(d, { recursive: true });
const archivos = [];
for (const m of curso.modulos) for (const ae of m.aes) {
  const texto = leer(ae.id).replace(/^# .*\n/, '');
  const titulo = `${ae.id} · ${ae.tema}`;
  const cabecera = `<p class="comp">Módulo ${m.n} · ${esc(m.nombre)}</p><h1 style="margin-top:0">${esc(titulo)}</h1>`
    + `<p class="aetxt"><b>Aprendizaje esperado:</b> ${esc(ae.texto)}</p>`;
  DOCS = false;
  fs.writeFileSync(path.join(DIR_AE, `${ae.id}.html`), `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${esc(titulo)}</title>${CSS}`
    + `<style>@page{size:A4;margin:16mm 15mm}main{padding:0;max-width:none}h3{break-after:avoid}.caja,table{break-inside:avoid}</style></head>`
    + `<body><main>${cabecera}${bloques(texto)}</main></body></html>`);
  DOCS = true;
  fs.writeFileSync(path.join(DIR_DOCS, `${ae.id}.html`), `<html><head><meta charset="utf-8"></head><body style="font-family:Arial">`
    + `<p style="color:#64748B">Módulo ${m.n} · ${esc(m.nombre)}</p><h1>${esc(titulo)}</h1>`
    + `<p style="background:#E6F4F7"><b>Aprendizaje esperado:</b> ${esc(ae.texto)}</p>${bloques(texto)}</body></html>`);
  DOCS = false;
  archivos.push(ae.id);
}
console.log(`${archivos.length} AE en entregables/por-ae y entregables/docs`);

// ---------- Casos de aplicación (casos/<id>.md), si existen ----------
const DIR_CASOS = path.join(RAIZ, 'casos');
const casos = fs.existsSync(DIR_CASOS) ? fs.readdirSync(DIR_CASOS).filter(f => /^M\d-C\d\.md$/.test(f)).map(f => f.slice(0, -3)).sort() : [];
const DIR_CASOS_HTML = path.join(SALIDA, 'casos', 'html'), DIR_CASOS_DOCS = path.join(SALIDA, 'casos', 'docs'), DIR_CASOS_PDF = path.join(SALIDA, 'casos', 'pdf');
if (casos.length) for (const d of [DIR_CASOS_HTML, DIR_CASOS_DOCS, DIR_CASOS_PDF]) fs.mkdirSync(d, { recursive: true });
for (const id of casos) {
  const md = fs.readFileSync(path.join(DIR_CASOS, `${id}.md`), 'utf8').replace(/\r\n/g, '\n');
  const titulo = (/^# (.+)$/m.exec(md)?.[1] || id).trim();
  const texto = md.replace(/^# .*\n/, '');
  const m = curso.modulos.find(x => x.n === Number(id[1]));
  DOCS = false;
  fs.writeFileSync(path.join(DIR_CASOS_HTML, `${id}.html`), `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${esc(titulo)}</title>${CSS}`
    + `<style>@page{size:A4;margin:16mm 15mm}main{padding:0;max-width:none}h3{break-after:avoid}.caja,table{break-inside:avoid}</style></head>`
    + `<body><main><p class="comp">Módulo ${m.n} · ${esc(m.nombre)} · Caso de aplicación</p><h1 style="margin-top:0">${esc(titulo)}</h1>${bloques(texto)}</main></body></html>`);
  DOCS = true;
  fs.writeFileSync(path.join(DIR_CASOS_DOCS, `${id}.html`), `<html><head><meta charset="utf-8"></head><body style="font-family:Arial">`
    + `<p style="color:#64748B">Módulo ${m.n} · ${esc(m.nombre)} · Caso de aplicación</p><h1>${esc(titulo)}</h1>${bloques(texto)}</body></html>`);
  DOCS = false;
}
if (casos.length) console.log(`${casos.length} casos en entregables/casos`);

// ---------- Documentos de proceso, investigación y LEEME de Drive (entregables/documentos/) ----------
// Prefijo numérico para que Drive los ordene; el título del Doc sale del «# » de cada archivo.
const DOCUMENTOS = {
  proceso: ['docs/PROCESO.md', 'PLAYBOOK-PRODUCCION.md', 'WORKFLOW.md', 'FORMATO-CONTENIDO-BASE.md', 'docs/FORMATO-QUIZ.md',
    'docs/FORMATO-INFOGRAFIA.md', 'docs/FORMATO-CASO.md', 'docs/BRIEF-REDACCION.md', 'docs/PERSONAJES.md', 'docs/CORRESPONDENCIA.md',
    'docs/CORRESPONDENCIA-FONDO.md', 'docs/AUDITORIA.md', 'docs/PENDIENTES-VERIFICACION.md', 'docs/CRITERIOS-28-10.md'],
  investigacion: ['investigacion/M1.md', 'investigacion/M2.md', 'investigacion/M3.md', 'investigacion/M4.md', 'investigacion/M5.md',
    'investigacion/M6.md', 'investigacion/HERRAMIENTAS-1.md', 'investigacion/HERRAMIENTAS-2.md'],
  'fichas-casos': casos.map(id => `investigacion/casos/${id}.md`).filter(f => fs.existsSync(path.join(RAIZ, f))),
};
const documentos = [];
for (const [grupo, lista] of Object.entries(DOCUMENTOS)) lista.forEach((rel, k) => {
  const md = fs.readFileSync(path.join(RAIZ, rel), 'utf8').replace(/\r\n/g, '\n');
  const titulo = (/^# (.+)$/m.exec(md)?.[1] || path.basename(rel, '.md')).trim();
  const nombre = grupo === 'fichas-casos' ? `Ficha-${path.basename(rel, '.md')}` : `${String(k + 1).padStart(2, '0')}-${path.basename(rel, '.md')}`;
  const texto = md.replace(/^# .*\n/, '');
  const dirHtml = path.join(SALIDA, 'documentos', grupo, 'html'), dirDocs = path.join(SALIDA, 'documentos', grupo, 'docs');
  for (const d of [dirHtml, dirDocs, path.join(SALIDA, 'documentos', grupo, 'pdf')]) fs.mkdirSync(d, { recursive: true });
  DOCS = false;
  fs.writeFileSync(path.join(dirHtml, `${nombre}.html`), `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${esc(titulo)}</title>${CSS}`
    + `<style>@page{size:A4;margin:16mm 15mm}main{padding:0;max-width:none}h3{break-after:avoid}.caja,table{break-inside:avoid}pre{font-size:11px}</style></head>`
    + `<body><main><p class="comp">${esc(curso.titulo)} · <code>${esc(rel)}</code></p><h1 style="margin-top:0">${esc(titulo)}</h1>${bloques(texto)}</main></body></html>`);
  DOCS = true;
  fs.writeFileSync(path.join(dirDocs, `${nombre}.html`), `<html><head><meta charset="utf-8"></head><body style="font-family:Arial">`
    + `<p style="color:#64748B">${esc(curso.titulo)} · ${esc(rel)}</p><h1>${esc(titulo)}</h1>${bloques(texto)}</body></html>`);
  DOCS = false;
  documentos.push({ grupo, nombre, titulo });
});
{
  const md = fs.readFileSync(path.join(RAIZ, 'docs', 'LEEME-DRIVE.md'), 'utf8').replace(/\r\n/g, '\n');
  DOCS = true;
  fs.mkdirSync(path.join(SALIDA, 'documentos', 'leeme'), { recursive: true });
  fs.writeFileSync(path.join(SALIDA, 'documentos', 'leeme', 'LEEME.html'), `<html><head><meta charset="utf-8"></head><body style="font-family:Arial">`
    + `<h1>${esc(/^# (.+)$/m.exec(md)[1])}</h1>${bloques(md.replace(/^# .*\n/, ''))}</body></html>`);
  DOCS = false;
}
fs.writeFileSync(path.join(SALIDA, 'documentos', 'indice.json'), JSON.stringify(documentos, null, 2));
console.log(`${documentos.length} documentos en entregables/documentos`);

// ---------- PDF con Edge o Chrome headless ----------
if (!process.argv.includes('--sin-pdf')) {
  const { execFileSync } = await import('node:child_process');
  const { pathToFileURL } = await import('node:url');
  // Chrome primero: desde el 28-10 Edge headless deja de abrir archivos locales en este equipo (ERR_FILE_NOT_FOUND)
  const nav = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe'].find(c => fs.existsSync(c));
  if (!nav) throw new Error('No encontré Edge ni Chrome para imprimir PDF');
  const imprimir = (html, pdf) => {
    if (fs.existsSync(pdf)) fs.unlinkSync(pdf);
    execFileSync(nav, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--generate-pdf-document-outline',
      `--print-to-pdf=${pdf}`, pathToFileURL(html).href], { stdio: 'ignore', timeout: 180000 });
    if (!fs.existsSync(pdf)) throw new Error(`No se generó ${pdf}`);
  };
  const solo = process.argv.find(a => /^--solo-(casos|documentos)$/.test(a));
  if (!solo) {
    for (const id of archivos) imprimir(path.join(DIR_AE, `${id}.html`), path.join(DIR_PDF, `${id}.pdf`));
    imprimir(path.join(SALIDA, 'Contenidos-completos.html'), path.join(DIR_PDF, 'Contenidos-completos.pdf'));
    console.log(`${archivos.length + 1} PDF en entregables/pdf`);
  }
  if (solo !== '--solo-documentos') for (const id of casos) imprimir(path.join(DIR_CASOS_HTML, `${id}.html`), path.join(DIR_CASOS_PDF, `${id}.pdf`));
  if (solo !== '--solo-casos') {
    for (const d of documentos) imprimir(path.join(SALIDA, 'documentos', d.grupo, 'html', `${d.nombre}.html`), path.join(SALIDA, 'documentos', d.grupo, 'pdf', `${d.nombre}.pdf`));
    console.log(`${documentos.length} PDF en entregables/documentos`);
  }
}
