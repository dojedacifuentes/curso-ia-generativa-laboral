// Compila con la marca Empoderatech (scripts/lib/marca.mjs) lo que lee el estudiante y el equipo:
//   - contenidos base (22 AE) → entregables/por-ae (HTML para PDF), entregables/docs (HTML para Google Docs), entregables/pdf
//   - casos (11) → entregables/casos/{html,docs,pdf}
//   - actividades de aplicación práctica (2 por AE) → entregables/actividades/{html,docs,pdf}
//   - glosario (un documento para el curso) → entregables/glosario/{Glosario.html, Glosario-docs.html, Glosario.pdf, Glosario-Moodle.xml}
//   - documentos de proceso, investigación y LEEME → entregables/documentos/
//   - todo junto → entregables/Contenidos-completos.{md,html,pdf}
// Las marcas de cita [@F-…] se resuelven en APA 7 (scripts/referencias-apa.mjs) y cada documento cierra con «Referencias bibliográficas».
// Uso: node scripts/compilar-contenidos.mjs [--sin-pdf | --solo-casos | --solo-documentos]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { C, CSS_DOCUMENTO, FIRMA, LOGO_DOCS, logoDataURI, arcos, bordeRasgado, CHEVRON } from './lib/marca.mjs';
import { cargar as cargarAPA, resolverCitas } from './referencias-apa.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const curso = JSON.parse(fs.readFileSync(path.join(RAIZ, 'data', 'curso.json'), 'utf8'));
const SALIDA = path.join(RAIZ, 'entregables');
const APA = cargarAPA();
fs.mkdirSync(SALIDA, { recursive: true });

const leerMd = rel => fs.readFileSync(path.join(RAIZ, rel), 'utf8').replace(/\r\n/g, '\n');
const leer = id => leerMd(path.join('contenido', id.split('-')[0], `${id}.md`));
const hoy = new Date().toISOString().slice(0, 10);
const faltanAPA = new Set();

// ---------- Markdown completo ----------
let md = `# ${curso.titulo} · Contenidos base\n\nGenerado el ${hoy} desde \`contenido/\`. ${curso.modulos.length} módulos · `
  + `${curso.modulos.reduce((s, m) => s + m.aes.length, 0)} aprendizajes esperados.\n\n`;
for (const m of curso.modulos) {
  md += `\n---\n\n# Módulo ${m.n} · ${m.nombre}\n\n**Competencia:** ${m.competencia}\n\n`;
  for (const ae of m.aes) md += '\n' + leer(ae.id).replace(/^# /m, '## ').replace(/^## (?!M\d)/gm, '### ') + '\n';
}
fs.writeFileSync(path.join(SALIDA, 'Contenidos-completos.md'), md);

// ---------- Texto en línea ----------
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
let DOCS = false;
const enlace = (url, texto = url) => `<a href="${url}"${DOCS ? ` style="color:${C.enlace}"` : ''}>${texto}</a>`;
const enLinea = s => esc(s)
  .replace(/`([^`]+)`/g, '<code>$1</code>')
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<em>$2</em>')
  .replace(/https?:\/\/[^\s<]+/g, url => {
    // Cierra en un «)» solo si no tiene su «(» en la URL (las de LibreTexts llevan «(Lumen)»)
    let fin = '';
    while (/[.,;:)]$/.test(url) && !(url.endsWith(')') && (url.match(/\(/g) || []).length >= (url.match(/\)/g) || []).length)) { fin = url.slice(-1) + fin; url = url.slice(0, -1); }
    return enlace(url) + fin;
  });

// ---------- Bloques ----------
const ETIQUETAS = { ejemplo: 'Ejemplo', error: 'Error frecuente', clave: 'Clave', actividad: 'Actividad', comprueba: 'Comprueba' };
// Recuadros en modo Docs (Google Docs no respeta clases: todo va en línea): [fondo, borde, color de la etiqueta, color del texto]
const CAJA_DOCS = {
  ejemplo: [C.frambuesaSuave, C.frambuesa, C.frambuesa, C.noche], error: [C.grafitoSuave, C.grafito, C.grafito, C.noche],
  clave: [C.noche, C.fucsia, C.celeste, C.blanco], actividad: [C.blanco, C.frambuesa, C.frambuesa, C.noche],
  comprueba: [C.celesteSuave, C.enlace, C.enlace, C.noche],
};
const D = {
  h2: `font-family:'Varela Round';color:${C.frambuesa};font-weight:normal;font-size:16pt`,
  h3: `font-family:'Varela Round';color:${C.noche};font-weight:normal;font-size:13pt`,
  etq: c => `font-family:'Varela Round';color:${c};font-size:10pt`,
  th: `border:1px solid ${C.grisClaro};padding:4px 8px;background:${C.noche};color:${C.blanco};font-family:'Varela Round';font-weight:normal`,
  td: `border:1px solid ${C.grisClaro};padding:4px 8px`,
};
const META = /^(cubre:\s*([SHAC]\d|M\d-AE\d)|fuentes:\s*\(|bloque:|entrega:)/;
// Vista del estudiante (criterios 30-10): actividades, casos, glosario, foros y guía no muestran códigos ni metadatos internos
let VISTA = 'interna';

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
      html += DOCS ? `<table style="border-collapse:collapse;width:100%"><tr><td style="background:${C.grafitoSuave};border-left:4px solid ${C.grisMedio};padding:8px 12px">${bloques(cita.join('\n'))}</td></tr></table>\n`
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
        const [fondo, borde, cEtq, cTx] = CAJA_DOCS[tipo] || CAJA_DOCS.ejemplo;
        html += `<table style="border-collapse:collapse;width:100%"><tr><td style="background:${fondo};border-left:6px solid ${borde};padding:10px 14px;color:${cTx}">`
          + `<p style="${D.etq(cEtq)}">${etq}</p>${bloques(dentro.join('\n'))}</td></tr></table>\n`;
      } else html += `<aside class="caja ${tipo}"><div class="etq">${etq}</div>${bloques(dentro.join('\n'))}</aside>\n`;
      i++; continue;
    }
    if (/^\|/.test(l)) {
      cerrarParrafo();
      const filas = [];
      for (; i < lineas.length && /^\|/.test(lineas[i]); i++) filas.push(lineas[i]);
      const celdas = f => f.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      const cuerpo = filas.filter((_, k) => k !== 1 || !/^\|[\s:|-]+\|$/.test(filas[1]));
      const td = DOCS ? ` style="${D.td}"` : '', th = DOCS ? ` style="${D.th}"` : '';
      html += `<div class="tabla"><table${DOCS ? ' style="border-collapse:collapse;width:100%"' : ''}><thead><tr>` + celdas(cuerpo[0]).map(c => `<th${th}>${enLinea(c)}</th>`).join('') + '</tr></thead><tbody>'
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
    // Metadatos de pantalla para quien arma el Rise: qué cubre, qué cita y qué bloque usar
    if (META.test(l)) {
      cerrarParrafo();
      if (VISTA === 'estudiante') { while (i < lineas.length && META.test(lineas[i])) i++; continue; }
      const meta = [];
      for (; i < lineas.length && META.test(lineas[i]); i++) {
        const [, k, v] = /^(\w+):\s*(.*)$/.exec(lineas[i]);
        meta.push(`<span><b>${k === 'bloque' ? 'Bloque Rise' : k === 'cubre' ? 'Cubre' : 'Cita'}:</b> ${esc(v)}</span>`);
      }
      html += DOCS ? `<p style="color:${C.grisMedio};font-size:8pt">${meta.join(' · ')}</p>\n` : `<div class="meta">${meta.join('')}</div>\n`;
      continue;
    }
    if (/^#{1,4} /.test(l)) {
      cerrarParrafo();
      const n = /^(#+)/.exec(l)[1].length;
      const t = enLinea(l.replace(/^#+\s*/, ''));
      if (DOCS && n === 2) html += `<h2 style="${D.h2}"><span style="color:${C.frambuesa}">${CHEVRON}</span> ${t}</h2>\n`;
      else if (DOCS && n >= 3) html += `<h${n} style="${D.h3}">${t}</h${n}>\n`;
      else html += `<h${n}>${t}</h${n}>\n`;
      i++; continue;
    }
    if (!l.trim()) { cerrarParrafo(); i++; continue; }
    parrafo.push(l.trim()); i++;
  }
  cerrarParrafo();
  return html;
}

// ---------- Citas APA y referencias ----------
// «fuentes: F-a, F-b» pasa a «fuentes: [@F-a; @F-b]» para que la línea de metadatos muestre la cita APA del documento
const conCitas = texto => {
  const sinRefs = texto.replace(/^## (Referencias bibliográficas|Fuentes)\b[\s\S]*?(?=^## |(?![\s\S]))/m, '');
  const marcado = sinRefs.replace(/^fuentes:[ \t]*(F-.+)$/gm, (_, ids) => `fuentes: [${ids.split(/,\s*/).map(x => '@' + x.trim()).join('; ')}]`);
  const r = resolverCitas(marcado, APA);
  r.falta.forEach(f => faltanAPA.add(f));
  return r;
};
const refHTML = refs => refs.length ? (DOCS
  ? `<h2 style="${D.h2}"><span style="color:${C.frambuesa}">${CHEVRON}</span> Referencias bibliográficas</h2>`
    + refs.map(r => `<p style="margin-left:24pt">${refTexto(r)}</p>`).join('\n')
  : `<h2>Referencias bibliográficas</h2><div class="refs">${refs.map(r => `<p>${refTexto(r)}</p>`).join('\n')}</div>`) : '';
const refTexto = r => {
  const sinUrl = r.texto.replace(r.url, '').trim();
  return `${enLinea(sinUrl)} ${enlace(r.url)}`;
};

// ---------- Plantillas con la marca ----------
const LOGO_OSCURO = logoDataURI('logo-sobre-oscuro'), ISOTIPO = logoDataURI('isotipo');
const documentoPDF = ({ titulo, etiqueta, subtitulo = '', cuerpo }) => `<!doctype html><html lang="es"><head><meta charset="utf-8">
<title>${esc(titulo)}</title><style>${CSS_DOCUMENTO}</style></head><body>
<header class="portada"><img class="logo" src="${LOGO_OSCURO}" alt="e-tech">${arcos(440, 220)}
<p class="mod"><span class="punto"></span>${esc(etiqueta)}</p><h1>${esc(titulo)}</h1>${subtitulo}</header>
<main>${cuerpo}</main>
<section class="cierre">${bordeRasgado()}<div class="banda"><img src="${LOGO_OSCURO}" alt="e-tech"><span>empoderatech.com · ${esc(curso.titulo)}</span></div></section>
<footer class="pie"><span><img class="iso" src="${ISOTIPO}" alt="">${FIRMA}</span><span>${esc(curso.titulo)}</span></footer>
</body></html>`;
const documentoDocs = ({ titulo, etiqueta, subtitulo = '', cuerpo }) => `<html><head><meta charset="utf-8"></head><body style="font-family:Arial;color:${C.noche}">`
  + `<table style="border-collapse:collapse;width:100%"><tr><td style="background:${C.noche};padding:18px 22px">`
  + `<img src="${LOGO_DOCS.oscuro}" width="160" height="44" alt="e-tech">`
  + `<p style="font-family:'Varela Round';color:${C.celeste};font-size:10pt">${esc(etiqueta)}</p>`
  + `<p style="font-family:'Varela Round';color:${C.blanco};font-size:22pt">${esc(titulo)}</p>${subtitulo}</td></tr></table>`
  + `${cuerpo}<p style="color:${C.grisMedio};font-size:8pt;margin-top:24pt">${FIRMA} · empoderatech.com · ${esc(curso.titulo)}</p></body></html>`;
const textoAE = (ae, docs) => docs
  ? `<p style="color:${C.grisClaro};font-size:10pt"><b style="color:${C.blanco}">Aprendizaje esperado:</b> ${esc(ae.texto)}</p>`
  : `<p class="ae"><b>Aprendizaje esperado:</b> ${esc(ae.texto)}</p>`;

// Escribe la versión PDF (HTML imprimible) y la versión Docs de un documento con citas
function escribir(dirHtml, dirDocs, nombre, { titulo, etiqueta, subtitulo, subtituloDocs, texto, vista = 'interna' }) {
  VISTA = vista;
  const { texto: t, refs } = conCitas(texto);
  DOCS = false;
  fs.writeFileSync(path.join(dirHtml, `${nombre}.html`), documentoPDF({ titulo, etiqueta, subtitulo, cuerpo: bloques(t) + refHTML(refs) }));
  DOCS = true;
  fs.writeFileSync(path.join(dirDocs, `${nombre}.html`), documentoDocs({ titulo, etiqueta, subtitulo: subtituloDocs, cuerpo: bloques(t) + refHTML(refs) }));
  DOCS = false;
  VISTA = 'interna';
}
// «M5-AE1 (Potencial de automatización)» → «Potencial de automatización»; sin código de caso ni de AE en los títulos
const sinCodigos = t => t.replace(/\*\*Aprendizajes esperados que trabaja:\*\*/g, '**Temas que trabaja:**')
  .replace(/\bM\d-AE\d \(([^)]+)\)/g, '$1').replace(/^(#+ )M\d-(?:C|AE)\d · /gm, '$1')
  .replace(/(\d) %/g, '$1 %'); // «30 %» no se corta en dos renglones (columna «Peso» de las rúbricas)
const carpetas = (...p) => { const ds = ['html', 'docs', 'pdf'].map(x => path.join(SALIDA, ...p, x)); ds.forEach(d => fs.mkdirSync(d, { recursive: true })); return ds; };

// ---------- Contenidos base: un archivo por AE ----------
const DIR_AE = path.join(SALIDA, 'por-ae'), DIR_DOCS = path.join(SALIDA, 'docs'), DIR_PDF = path.join(SALIDA, 'pdf');
for (const d of [DIR_AE, DIR_DOCS, DIR_PDF]) fs.mkdirSync(d, { recursive: true });
const archivos = [];
let cuerpoCompleto = '', indice = '';
for (const m of curso.modulos) {
  indice += `<li><a href="#m${m.n}">Módulo ${m.n} · ${esc(m.nombre)}</a><ul>`;
  cuerpoCompleto += `<section id="m${m.n}"><h1 class="modulo">Módulo ${m.n} · ${esc(m.nombre)}</h1><p class="comp"><b>Competencia:</b> ${esc(m.competencia)}</p>`;
  for (const ae of m.aes) {
    const texto = leer(ae.id).replace(/^# .*\n/, '');
    const datos = { titulo: `${ae.id} · ${ae.tema}`, etiqueta: `Módulo ${m.n} · ${m.nombre}`, subtitulo: textoAE(ae, false), subtituloDocs: textoAE(ae, true), texto };
    escribir(DIR_AE, DIR_DOCS, ae.id, datos);
    const { texto: t, refs } = conCitas(texto);
    indice += `<li><a href="#${ae.id}">${ae.id} · ${esc(ae.tema)}</a></li>`;
    cuerpoCompleto += `<article id="${ae.id}"><h1 class="ae">${ae.id} · ${esc(ae.tema)}</h1><p class="aetxt"><b>Aprendizaje esperado:</b> ${esc(ae.texto)}</p>${bloques(t)}${refHTML(refs)}</article>`;
    archivos.push(ae.id);
  }
  indice += '</ul></li>';
  cuerpoCompleto += '</section>';
}
fs.writeFileSync(path.join(SALIDA, 'Contenidos-completos.html'), `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Contenidos base · ${esc(curso.titulo)}</title><style>${CSS_DOCUMENTO}
body{max-width:none;box-shadow:none}.wrap{display:grid;grid-template-columns:280px 1fr;max-width:1240px;margin:0 auto}
nav{position:sticky;top:0;height:100vh;overflow:auto;padding:20px 14px;border-right:1px solid #E6E7E8;font-size:13px;background:${C.noche}}
nav a{color:${C.grisClaro}}nav a:hover{color:${C.celeste}}nav ul{list-style:none;padding-left:12px}nav>ul{padding:0}nav img{height:34px;margin-bottom:14px}
h1.modulo{font:400 24pt/1.2 "Varela Round",Arial;color:${C.noche};border-bottom:1mm solid ${C.frambuesa};padding-bottom:2mm;margin-top:14mm}
h1.ae{font:400 19pt/1.2 "Varela Round",Arial;color:${C.frambuesa};margin-top:12mm}.aetxt{background:${C.frambuesaSuave};border-left:1.6mm solid ${C.frambuesa};padding:3mm 4mm}
.comp{color:${C.grafito}}@media (max-width:900px){.wrap{display:block}nav{position:static;height:auto}}@media print{nav{display:none}.wrap{display:block}article{break-before:page}}
</style></head><body><div class="wrap"><nav><img src="${LOGO_OSCURO}" alt="e-tech"><ul>${indice}</ul></nav>
<main><header class="portada" style="margin:0 -18mm"><img class="logo" src="${LOGO_OSCURO}" alt="e-tech">${arcos(440, 220)}<p class="mod"><span class="punto"></span>Contenidos base</p><h1>${esc(curso.titulo)}</h1>
<p class="ae">${curso.modulos.length} módulos · ${archivos.length} aprendizajes esperados. Generado el ${hoy}.</p></header>${cuerpoCompleto}</main></div>
<footer class="pie"><span><img class="iso" src="${ISOTIPO}" alt="">${FIRMA}</span><span>${esc(curso.titulo)}</span></footer></body></html>`);
console.log(`entregables/Contenidos-completos.md y .html · ${archivos.length} AE en entregables/por-ae y entregables/docs`);

// ---------- Casos de aplicación ----------
const casos = fs.existsSync(path.join(RAIZ, 'casos')) ? fs.readdirSync(path.join(RAIZ, 'casos')).filter(f => /^M\d-C\d\.md$/.test(f)).map(f => f.slice(0, -3)).sort() : [];
const [DIR_CASOS_HTML, DIR_CASOS_DOCS, DIR_CASOS_PDF] = carpetas('casos');
// Vista del estudiante (30-10): sin autocorrección (la respuesta va en el foro y la revisa el facilitador; las respuestas esperadas
// pasan a la guía del facilitador) y sin la línea del hito del proyecto, que es una remisión
const AUTOCORRECCION = /^## 5\. Autocorrecci[óo]n\n([\s\S]*?)(?=^## )/m;
const casoEstudiante = md => md.replace(/^\*\*Hito del proyecto con el que conecta:\*\*.*\n\n?/m, '').replace(AUTOCORRECCION, '').replace(/^## 6\. Para el foro/m, '## 5. Para el foro');
const tituloCaso = md => (/^# (.+)$/m.exec(md)?.[1] || '').trim().replace(/^M\d-C\d · /, '');
const autocorrecciones = (n, nivel) => casos.filter(id => id[1] === String(n)).map(id => { const md = leerMd(path.join('casos', `${id}.md`)); const x = AUTOCORRECCION.exec(md); return x ? `${'#'.repeat(nivel + 1)} ${tituloCaso(md)}\n\n${x[1].trim()}\n` : ''; }).filter(Boolean);
for (const id of casos) {
  const mdc = leerMd(path.join('casos', `${id}.md`));
  const m = curso.modulos.find(x => x.n === Number(id[1]));
  escribir(DIR_CASOS_HTML, DIR_CASOS_DOCS, id, { titulo: tituloCaso(mdc) || id, etiqueta: `Módulo ${m.n} · ${m.nombre} · Caso de aplicación`, texto: sinCodigos(casoEstudiante(mdc.replace(/^# .*\n/, ''))), vista: 'estudiante' });
}
if (casos.length) console.log(`${casos.length} casos en entregables/casos`);

// ---------- Actividades de aplicación práctica (2 por AE) ----------
const actividades = fs.existsSync(path.join(RAIZ, 'actividades')) ? fs.readdirSync(path.join(RAIZ, 'actividades')).filter(f => /^M\d-AE\d\.md$/.test(f)).map(f => f.slice(0, -3)).sort() : [];
const [DIR_ACT_HTML, DIR_ACT_DOCS, DIR_ACT_PDF] = carpetas('actividades');
for (const id of actividades) {
  const mda = leerMd(path.join('actividades', `${id}.md`));
  const m = curso.modulos.find(x => x.n === Number(id[1])), ae = m.aes.find(a => a.id === id);
  escribir(DIR_ACT_HTML, DIR_ACT_DOCS, id, { titulo: ae.tema, etiqueta: `Módulo ${m.n} · Actividades de aplicación práctica`, subtitulo: textoAE(ae, false), subtituloDocs: textoAE(ae, true), texto: sinCodigos(mda.replace(/^# .*\n/, '')), vista: 'estudiante' });
}
if (actividades.length) console.log(`${actividades.length} documentos de actividades en entregables/actividades`);

// ---------- Glosario (un documento para todo el curso) ----------
const DIR_GLO = path.join(SALIDA, 'glosario');
fs.mkdirSync(DIR_GLO, { recursive: true });
const glosario = curso.modulos.filter(m => fs.existsSync(path.join(RAIZ, 'glosario', `M${m.n}.md`))).map(m => {
  const g = leerMd(path.join('glosario', `M${m.n}.md`));
  const aes = g.split(/^## /m).slice(1).map(b => ({ titulo: b.split('\n')[0].trim().replace(/^M\d-AE\d · /, ''), terminos: [...b.matchAll(/^- \*\*(.+?)\*\*:\s*([\s\S]*?)(?=^- \*\*|(?![\s\S]))/gm)].map(x => ({ t: x[1], d: x[2].replace(/\s+/g, ' ').trim() })) }));
  return { m, aes };
});
if (glosario.length) {
  const total = glosario.reduce((s, g) => s + g.aes.reduce((a, b) => a + b.terminos.length, 0), 0);
  const cuerpoGlo = docs => glosario.map(({ m, aes }) => (docs ? `<h2 style="${D.h2}"><span style="color:${C.frambuesa}">${CHEVRON}</span> Módulo ${m.n} · ${esc(m.nombre)}</h2>` : `<h2>Módulo ${m.n} · ${esc(m.nombre)}</h2>`)
    + aes.map(a => (docs ? `<h3 style="${D.h3}">${esc(a.titulo)}</h3>` : `<h3>${esc(a.titulo)}</h3>`)
      + (docs ? a.terminos.map(x => `<p><b style="font-family:'Varela Round';font-weight:normal;color:${C.frambuesa}">${enLinea(x.t)}</b>: ${enLinea(x.d)}</p>`).join('')
        : `<dl class="glosario">${a.terminos.map(x => `<dt>${enLinea(x.t)}</dt><dd>${enLinea(x.d)}</dd>`).join('')}</dl>`)).join('')).join('');
  const sub = docs => docs ? `<p style="color:${C.grisClaro};font-size:10pt">${total} términos del curso, ordenados por módulo y tema.</p>` : `<p class="ae">${total} términos del curso, ordenados por módulo y tema.</p>`;
  DOCS = false;
  fs.writeFileSync(path.join(DIR_GLO, 'Glosario.html'), documentoPDF({ titulo: 'Glosario', etiqueta: curso.titulo, subtitulo: sub(false), cuerpo: cuerpoGlo(false) }));
  DOCS = true;
  fs.writeFileSync(path.join(DIR_GLO, 'Glosario-docs.html'), documentoDocs({ titulo: 'Glosario', etiqueta: curso.titulo, subtitulo: sub(true), cuerpo: cuerpoGlo(true) }));
  DOCS = false;
  // XML de glosario de Moodle (Glosario → Importar entradas)
  const x = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const entradas = glosario.flatMap(({ m, aes }) => aes.flatMap(a => a.terminos.map(t => `    <ENTRY><CONCEPT>${x(t.t)}</CONCEPT><DEFINITION>${x(`<p>${t.d.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</p>`)}</DEFINITION><FORMAT>1</FORMAT><USEDYNALINK>0</USEDYNALINK><CASESENSITIVE>0</CASESENSITIVE><FULLMATCH>0</FULLMATCH><TEACHERENTRY>1</TEACHERENTRY><CATEGORIES><CATEGORY><NAME>Módulo ${m.n}</NAME><USEDYNALINK>0</USEDYNALINK></CATEGORY></CATEGORIES></ENTRY>`)));
  fs.writeFileSync(path.join(DIR_GLO, 'Glosario-Moodle.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<GLOSSARY>\n  <INFO>\n    <NAME>Glosario · ${x(curso.titulo)}</NAME>\n    <INTRO></INTRO>\n    <INTROFORMAT>1</INTROFORMAT>\n    <ENTRIES>\n${entradas.join('\n')}\n    </ENTRIES>\n  </INFO>\n</GLOSSARY>\n`);
  console.log(`Glosario: ${total} términos en entregables/glosario (HTML, Docs, XML de Moodle)`);
}

// ---------- Guía del facilitador y foros (criterios 30-10): un documento cada uno, con la marca ----------
const combinados = [];
{
  const leerSi = rel => (fs.existsSync(path.join(RAIZ, rel)) ? leerMd(rel) : '');
  const bajar = md => md.replace(/^# .*\n/, '').replace(/^(#{2,3}) /gm, '#$1 ');
  // Guía: introducción, foros y luego cada tema, en orden de módulo
  let guia = '';
  const gForos = leerSi('guia-facilitador/Foros.md');
  if (gForos) guia += '## Foros\n\n' + bajar(gForos) + '\n';
  for (const m of curso.modulos) {
    const partes = m.aes.map(a => leerSi(`guia-facilitador/${a.id}.md`)).filter(Boolean);
    if (!partes.length) continue;
    guia += `## Módulo ${m.n} · ${m.nombre}\n\n` + partes.map(p => '### ' + /^# (?:Guía del facilitador · )?(.+)$/m.exec(p)[1] + '\n\n' + bajar(bajar(p))).join('\n') + '\n';
    const ac = autocorrecciones(m.n, 3);
    if (ac.length) guia += `### Casos de aplicación · respuestas esperadas\n\n${ac.join('\n')}\n`;
  }
  let foros = '';
  const fGen = leerSi('foros/General.md');
  if (fGen) foros += '## ' + /^# (.+)$/m.exec(fGen)[1] + '\n\n' + bajar(fGen) + '\n';
  for (const m of curso.modulos) { const fm = leerSi(`foros/M${m.n}.md`); if (fm) foros += '## ' + /^# (.+)$/m.exec(fm)[1] + '\n\n' + bajar(fm) + '\n'; }
  const intro = leerSi('guia-facilitador/LEEME.md');
  const docsComb = [
    ['guia-facilitador', 'Guia-del-facilitador', 'Guía del facilitador', 'Uso docente, no visible para estudiantes', (intro ? bajar(intro) + '\n' : '') + guia],
    ['foros', 'Foros-del-curso', 'Foros del curso', 'Foro general y foros de cada módulo', foros],
    ['guia-facilitador', 'Mapa-del-aula-Moodle', 'Mapa del aula Moodle', 'Estructura del curso en el aula', bajar(leerSi('docs/MAPA-AULA-MOODLE.md')).replace(/^### /gm, '## ').replace(/^#### /gm, '### ')],
  ];
  for (const [dir, nombre, titulo, etiqueta, texto] of docsComb) {
    if (!texto.trim()) continue;
    const [dh, dd] = carpetas(dir);
    escribir(dh, dd, nombre, { titulo, etiqueta: `${etiqueta} · ${curso.titulo}`, texto: sinCodigos(texto), vista: 'estudiante' });
    combinados.push({ dir, nombre });
  }
  // La guía completa pesa demasiado para un solo Google Doc: en Drive va también partida (introducción y foros + un Doc por módulo)
  {
    const [dh, dd] = carpetas('guia-facilitador', 'partes');
    escribir(dh, dd, 'Guia-0-introduccion-y-foros', { titulo: 'Guía del facilitador · Introducción y foros', etiqueta: `Uso docente, no visible para estudiantes · ${curso.titulo}`, texto: sinCodigos((intro ? bajar(intro) + '\n' : '') + (gForos ? '## Foros\n\n' + bajar(gForos) : '')), vista: 'estudiante' });
    for (const m of curso.modulos) {
      const partes = m.aes.map(a => leerSi(`guia-facilitador/${a.id}.md`)).filter(Boolean);
      if (!partes.length) continue;
      const ac = autocorrecciones(m.n, 2);
      const tx = partes.map(p => '## ' + /^# (?:Guía del facilitador · )?(.+)$/m.exec(p)[1] + '\n\n' + bajar(p)).join('\n') + (ac.length ? `\n## Casos de aplicación · respuestas esperadas\n\n${ac.join('\n')}` : '');
      escribir(dh, dd, `Guia-M${m.n}`, { titulo: `Guía del facilitador · Módulo ${m.n}`, etiqueta: `${m.nombre} · uso docente`, texto: sinCodigos(tx), vista: 'estudiante' });
    }
  }
  if (combinados.length) console.log(`${combinados.map(c => c.nombre).join(' y ')} en entregables/`);
}

// ---------- Documentos de proceso, investigación y LEEME de Drive (entregables/documentos/) ----------
// Prefijo numérico para que Drive los ordene; el título del Doc sale del «# » de cada archivo.
const DOCUMENTOS = {
  proceso: ['docs/PROCESO.md', 'PLAYBOOK-PRODUCCION.md', 'WORKFLOW.md', 'FORMATO-CONTENIDO-BASE.md', 'docs/FORMATO-QUIZ.md',
    'docs/FORMATO-INFOGRAFIA.md', 'docs/FORMATO-CASO.md', 'docs/BRIEF-REDACCION.md', 'docs/PERSONAJES.md', 'docs/CORRESPONDENCIA.md',
    'docs/CORRESPONDENCIA-FONDO.md', 'docs/AUDITORIA.md', 'docs/PENDIENTES-VERIFICACION.md', 'docs/CRITERIOS-28-10.md', 'docs/CRITERIOS-29-10.md'],
  investigacion: ['investigacion/M1.md', 'investigacion/M2.md', 'investigacion/M3.md', 'investigacion/M4.md', 'investigacion/M5.md',
    'investigacion/M6.md', 'investigacion/HERRAMIENTAS-1.md', 'investigacion/HERRAMIENTAS-2.md'],
  'fichas-casos': casos.map(id => `investigacion/casos/${id}.md`).filter(f => fs.existsSync(path.join(RAIZ, f))),
};
const documentos = [];
for (const [grupo, lista] of Object.entries(DOCUMENTOS)) lista.forEach((rel, k) => {
  const mdd = leerMd(rel);
  const titulo = (/^# (.+)$/m.exec(mdd)?.[1] || path.basename(rel, '.md')).trim();
  const nombre = grupo === 'fichas-casos' ? `Ficha-${path.basename(rel, '.md')}` : `${String(k + 1).padStart(2, '0')}-${path.basename(rel, '.md')}`;
  const [dirHtml, dirDocs] = carpetas('documentos', grupo);
  // Los documentos internos no resuelven citas: muestran el registro tal cual
  DOCS = false;
  fs.writeFileSync(path.join(dirHtml, `${nombre}.html`), documentoPDF({ titulo, etiqueta: `${curso.titulo} · ${rel}`, cuerpo: bloques(mdd.replace(/^# .*\n/, '')) }));
  DOCS = true;
  fs.writeFileSync(path.join(dirDocs, `${nombre}.html`), documentoDocs({ titulo, etiqueta: `${curso.titulo} · ${rel}`, cuerpo: bloques(mdd.replace(/^# .*\n/, '')) }));
  DOCS = false;
  documentos.push({ grupo, nombre, titulo });
});
{
  const mdl = leerMd('docs/LEEME-DRIVE.md');
  DOCS = true;
  fs.mkdirSync(path.join(SALIDA, 'documentos', 'leeme'), { recursive: true });
  fs.writeFileSync(path.join(SALIDA, 'documentos', 'leeme', 'LEEME.html'), documentoDocs({ titulo: /^# (.+)$/m.exec(mdl)[1], etiqueta: curso.titulo, cuerpo: bloques(mdl.replace(/^# .*\n/, '')) }));
  DOCS = false;
}
fs.writeFileSync(path.join(SALIDA, 'documentos', 'indice.json'), JSON.stringify(documentos, null, 2));
console.log(`${documentos.length} documentos en entregables/documentos`);
if (faltanAPA.size) console.log(`⚠ ${faltanAPA.size} fuentes citadas sin entrada en investigacion/referencias-apa.json: ${[...faltanAPA].join(', ')} (correr: node scripts/referencias-apa.mjs --borrador)`);

// ---------- PDF con Chrome headless ----------
if (!process.argv.includes('--sin-pdf')) {
  const { execFileSync } = await import('node:child_process');
  const { pathToFileURL } = await import('node:url');
  // Chrome primero: desde el 28-10 Edge headless deja de abrir archivos locales en este equipo (ERR_FILE_NOT_FOUND)
  const nav = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe'].find(c => fs.existsSync(c));
  if (!nav) throw new Error('No encontré Edge ni Chrome para imprimir PDF');
  const imprimir = (html, pdf) => {
    if (fs.existsSync(pdf)) fs.unlinkSync(pdf);
    execFileSync(nav, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--generate-pdf-document-outline', '--virtual-time-budget=2000',
      `--print-to-pdf=${pdf}`, pathToFileURL(html).href], { stdio: 'ignore', timeout: 180000 });
    if (!fs.existsSync(pdf)) throw new Error(`No se generó ${pdf}`);
  };
  const solo = process.argv.find(a => /^--solo-(casos|documentos)$/.test(a));
  if (!solo) {
    for (const id of archivos) imprimir(path.join(DIR_AE, `${id}.html`), path.join(DIR_PDF, `${id}.pdf`));
    imprimir(path.join(SALIDA, 'Contenidos-completos.html'), path.join(DIR_PDF, 'Contenidos-completos.pdf'));
    for (const id of actividades) imprimir(path.join(DIR_ACT_HTML, `${id}.html`), path.join(DIR_ACT_PDF, `${id}.pdf`));
    if (glosario.length) imprimir(path.join(DIR_GLO, 'Glosario.html'), path.join(DIR_GLO, 'Glosario.pdf'));
    for (const c of combinados) imprimir(path.join(SALIDA, c.dir, 'html', `${c.nombre}.html`), path.join(SALIDA, c.dir, 'pdf', `${c.nombre}.pdf`));
    console.log(`${archivos.length + 1} PDF de contenidos, ${actividades.length} de actividades${glosario.length ? ' y el glosario' : ''}`);
  }
  if (solo !== '--solo-documentos') for (const id of casos) imprimir(path.join(DIR_CASOS_HTML, `${id}.html`), path.join(DIR_CASOS_PDF, `${id}.pdf`));
  if (solo !== '--solo-casos') {
    for (const d of documentos) imprimir(path.join(SALIDA, 'documentos', d.grupo, 'html', `${d.nombre}.html`), path.join(SALIDA, 'documentos', d.grupo, 'pdf', `${d.nombre}.pdf`));
    console.log(`${documentos.length} PDF en entregables/documentos`);
  }
}
