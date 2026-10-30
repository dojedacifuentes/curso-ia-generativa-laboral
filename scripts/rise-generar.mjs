// Genera el curso Rise de un AE directamente desde el contenido base (fuente única), con los criterios del 28 y 29-10:
// solo contenido (quiz, actividades de aplicación, infografía y glosario van aparte), sin códigos a la vista (M1-AE1, P01…),
// portada con «Competencia del módulo» y «Aprendizaje esperado» textuales, citas APA 7 y lección «Referencias bibliográficas».
// Uso: node scripts/rise-generar.mjs M1-AE3 [M1-AE4 …] → entregables/rise/<AE>/rise-curso.json
// Lo arma en el editor scripts/lib/rise-armar.js (ver entregables/rise/LEEME.md).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cargar, resolverCitas } from './referencias-apa.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const curso = JSON.parse(fs.readFileSync(path.join(RAIZ, 'data', 'curso.json'), 'utf8'));
const apa = cargar();
const POR_LECCION = 3; // pantallas por lección; el cierre y las ideas clave van en la última

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const enLinea = s => esc(s.trim()).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, '$1<em>$2</em>')
  .replace(/(https?:\/\/[^\s<]+[^\s<.,;)»])/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
const p = s => `<p>${enLinea(s)}</p>`;

// Bloques de Rise (sin ids: los pone el armador)
const AJ = { markerColorContrast: 'AUTO', paddingBottom: 3, paddingLinked: true, paddingTop: 3, snippetColorContrast: 'AUTO', audioPosition: 'bottom' };
const B = {
  texto: (titulo, html) => ({ type: 'text', family: 'text', variant: titulo ? 'heading paragraph' : 'paragraph', settings: { ...AJ },
    items: [{ ...(titulo ? { heading: esc(titulo) } : {}), paragraph: html }] }),
  titulo: t => ({ type: 'text', family: 'text', variant: 'heading', settings: { ...AJ }, items: [{ heading: esc(t) }] }),
  nota: html => ({ type: 'text', family: 'impact', variant: 'note', settings: {}, items: [{ paragraph: html }] }),
  tabla: filas => ({ type: 'text', family: 'text', variant: 'table', settings: { ...AJ }, items: [{ paragraph:
    `<div class="rise-table-wrap"><table style="width: 100%"><tbody>${filas.map((f, i) => `<tr>${f.map(c => (i === 0
      ? `<th colspan="1" rowspan="1" scope="col"><p>${enLinea(c)}</p></th>` : `<td colspan="1" rowspan="1"><p>${enLinea(c)}</p></td>`)).join('')}</tr>`).join('')}</tbody></table></div>` }] }),
  proceso: (titulo, pasos) => ({ type: 'interactive', family: 'interactive-fullscreen', variant: 'process',
    settings: { v: 2, paddingTop: 0, zoomOnClick: true, audioPosition: 'bottom', paddingBottom: 3, paddingLinked: true, markerColorContrast: 'AUTO', snippetColorContrast: 'AUTO' },
    items: [{ type: 'intro', title: esc(titulo), isHidden: true, description: '' }, { type: 'summary', title: esc(titulo), isHidden: true, description: '' },
      ...pasos.map(t => {
        // Paso corto: va entero como título; si es largo, el título es lo anterior a «:» y el resto va en la descripción
        const m = t.length > 90 && /^([^:]{8,70}):\s+(.+)$/.exec(t);
        return { type: 'step', isHidden: false, title: enLinea(m ? m[1] : t), description: m ? p(m[2]) : '' };
      })] }),
  pregunta: (titulo, opciones, retro) => ({ type: 'knowledgeCheck', family: 'knowledgeCheck', variant: 'multiple choice', settings: {},
    items: [{ type: 'MULTIPLE_CHOICE', title: enLinea(titulo), feedbackType: 'CHOICE',
      answers: opciones.map(o => ({ title: enLinea(o.texto), correct: o.correcta, feedback: p(retro) })) }] }),
  continuar: () => ({ type: 'divider', family: 'continue', variant: 'continue', settings: { v: 2 },
    items: [{ type: '', title: 'Continuar', buttonColor: 'brand', completeHint: 'Completa el contenido anterior para seguir.' }] }),
};

const ROTULO = { ejemplo: 'Ejemplo', error: 'Error frecuente', clave: 'Idea clave', actividad: 'Actividad' };

// Una pantalla del contenido base → bloques de Rise
function pantalla(titulo, cuerpo, conTitulo) {
  const bloque = (/^bloque:\s*(.+)$/m.exec(cuerpo) || [])[1] || '';
  const lineas = cuerpo.split('\n').filter(l => !/^(cubre|fuentes|bloque):/.test(l));
  const out = [];
  let prosa = [], tituloPendiente = conTitulo ? titulo : '';
  const volcar = () => {
    if (!prosa.length) return;
    out.push(B.texto(tituloPendiente, prosa.join('')));
    prosa = []; tituloPendiente = '';
  };
  for (let i = 0; i < lineas.length;) {
    const l = lineas[i];
    if (!l.trim()) { i++; continue; }
    // Recuadros :::tipo Título … :::
    const caja = /^:::(\w+)\s*(.*)$/.exec(l);
    if (caja) {
      let j = i + 1; const dentro = [];
      while (j < lineas.length && !/^:::\s*$/.test(lineas[j])) dentro.push(lineas[j++]);
      i = j + 1;
      if (caja[1] === 'comprueba') {
        volcar();
        const t = dentro.join('\n');
        const pregunta = t.split(/\n- /)[0].replace(/\s+/g, ' ').trim();
        const opciones = [...t.matchAll(/^- (\*\*)?[a-d]\)\s*(.+?)(\*\*)?$/gm)].map(m => ({ texto: m[2].replace(/\*\*$/, ''), correcta: !!m[1] }));
        const retro = ((/Retroalimentación:\s*([\s\S]+)$/.exec(t) || [])[1] || '').replace(/\s+/g, ' ').trim();
        if (opciones.length < 2 || !opciones.some(o => o.correcta)) throw new Error(`Pregunta mal formada en «${titulo}»`);
        out.push(B.pregunta(pregunta, opciones, retro));
      } else {
        volcar();
        const rotulo = `${ROTULO[caja[1]] || caja[1]}${caja[2] ? ' · ' + caja[2].trim() : ''}`;
        out.push(B.nota(`<p><strong>${enLinea(rotulo)}</strong></p>${parrafos(dentro)}`));
      }
      continue;
    }
    // Tabla
    if (/^\|/.test(l)) {
      const filas = [];
      while (i < lineas.length && /^\|/.test(lineas[i])) {
        if (!/^\|[\s|:-]+\|$/.test(lineas[i])) filas.push(lineas[i].replace(/^\||\|$/g, '').split('|').map(c => c.trim()));
        i++;
      }
      volcar(); out.push(B.tabla(filas)); continue;
    }
    // Cita en bloque (prompts de ejemplo)
    if (/^> /.test(l)) {
      const q = [];
      while (i < lineas.length && /^>/.test(lineas[i])) q.push(lineas[i++].replace(/^>\s?/, ''));
      volcar(); out.push(B.nota(parrafos(q))); continue;
    }
    // Lista numerada: proceso si la pantalla lo pide; si no, lista dentro del texto
    if (/^\d+\.\s/.test(l)) {
      const items = [];
      while (i < lineas.length && (/^\d+\.\s/.test(lineas[i]) || /^\s{2,}\S/.test(lineas[i]))) {
        if (/^\d+\.\s/.test(lineas[i])) items.push(lineas[i].replace(/^\d+\.\s/, '')); else items[items.length - 1] += ' ' + lineas[i].trim();
        i++;
      }
      if (/proceso/i.test(bloque)) { volcar(); out.push(B.proceso(titulo, items)); }
      else prosa.push(`<ol>${items.map(t => `<li>${p(t)}</li>`).join('')}</ol>`);
      continue;
    }
    // Lista con viñetas o de verificación
    if (/^- /.test(l)) {
      const items = [];
      while (i < lineas.length && (/^- /.test(lineas[i]) || /^\s{2,}\S/.test(lineas[i]))) {
        if (/^- /.test(lineas[i])) items.push(lineas[i].slice(2)); else items[items.length - 1] += ' ' + lineas[i].trim();
        i++;
      }
      prosa.push(`<ul>${items.map(t => `<li>${p(t.replace(/^\[ \]\s*/, '☐ '))}</li>`).join('')}</ul>`);
      continue;
    }
    // Párrafo
    const par = [];
    while (i < lineas.length && lineas[i].trim() && !/^(:::|\||> |\d+\.\s|- )/.test(lineas[i])) par.push(lineas[i++]);
    prosa.push(p(par.join(' ')));
  }
  volcar();
  return out;
}
function parrafos(lineas) {
  return lineas.join('\n').split(/\n\s*\n/).map(b => {
    const ls = b.split('\n').filter(x => x.trim());
    if (!ls.length) return '';
    if (ls.every(x => /^\d+\.\s/.test(x))) return `<ol>${ls.map(x => `<li>${p(x.replace(/^\d+\.\s/, ''))}</li>`).join('')}</ol>`;
    if (ls.every(x => /^- /.test(x))) return `<ul>${ls.map(x => `<li>${p(x.slice(2))}</li>`).join('')}</ul>`;
    // Lista numerada que sigue a una línea de introducción
    const k = ls.findIndex(x => /^\d+\.\s/.test(x));
    if (k > 0 && ls.slice(k).every(x => /^\d+\.\s/.test(x)))
      return p(ls.slice(0, k).join(' ')) + `<ol>${ls.slice(k).map(x => `<li>${p(x.replace(/^\d+\.\s/, ''))}</li>`).join('')}</ol>`;
    return p(ls.join(' '));
  }).join('');
}

function generar(AE) {
  const modulo = curso.modulos.find(m => m.aes.some(a => a.id === AE));
  const ae = modulo.aes.find(a => a.id === AE);
  const md = fs.readFileSync(path.join(RAIZ, 'contenido', `M${modulo.n}`, `${AE}.md`), 'utf8').replace(/\r\n/g, '\n');
  const sinRefs = md.replace(/^## Referencias bibliográficas\b[\s\S]*$/m, '');
  const { texto, refs, falta } = resolverCitas(sinRefs, apa);
  if (falta.length) throw new Error(`${AE}: sin entrada APA para ${falta.join(', ')}`);

  // En el Rise no hay números de pantalla: «la pantalla 14» pasa a «la sección «Tu tabla de registro»»
  const nombres = Object.fromEntries([...texto.matchAll(/^## P(\d\d) · (.+)$/gm)].map(m => [Number(m[1]), m[2].trim()]));
  const sec = n => (nombres[n] ? `«${nombres[n]}»` : null);
  const datosConP = /c[óo]digos?\s+P\d\d/i.test(texto);
  const sinNumeros = texto.replace(/\b(la|las)\s+pantallas\s+(\d+)\s+y\s+(\d+)\b/gi, (m, a, x, y) => (sec(+x) && sec(+y) ? `${a === 'la' ? 'la' : 'las'} secciones ${sec(+x)} y ${sec(+y)}` : m))
    .replace(/\b(la|esta)\s+pantalla\s+(\d+)\b/gi, (m, a, n) => (sec(+n) ? `${a} sección ${sec(+n)}` : m))
    .replace(/\(pantalla\s+(\d+)\)/gi, (m, n) => (sec(+n) ? `(sección ${sec(+n)})` : m))
    // «como verás en P09», «(P07)», «la regla de P13», «en P07 y P11», «(P04 a P06)»; no si P01… son datos del ejemplo
    // (códigos de producto en M2-AE4)
    .replace(/(\(|\b(?:en|de|a)\s+)?P(\d\d) (y|a) P(\d\d)\b/g, (m, antes, x, nexo, y) => (datosConP || !sec(+x) || !sec(+y) ? m
      : `${antes === '(' ? '(' : antes || ''}${antes === '(' ? '' : 'las '}secciones ${nexo === 'a' ? 'de ' : ''}${sec(+x)} ${nexo} ${sec(+y)}`))
    .replace(/(\(|\b(?:en|de|a)\s+)P(\d\d)\b(\))?/g, (m, antes, n, cierra) => (datosConP || !sec(+n) ? m
      : antes === '(' ? `(sección ${sec(+n)}${cierra || ''}` : `${antes}la sección ${sec(+n)}${cierra || ''}`));

  const secciones = sinNumeros.split(/^## /m).slice(1);
  const pant = secciones.filter(s => /^P\d\d · /.test(s)).map(s => {
    const [cab, ...resto] = s.split('\n');
    return { titulo: cab.replace(/^P\d\d · /, '').trim(), cuerpo: resto.join('\n') };
  });
  const ideas = (secciones.find(s => /^Ideas clave/.test(s)) || '').split('\n').slice(1).join('\n');

  // P01 (qué vas a lograr) abre la primera lección; el título de la lección es el de su primera pantalla de contenido
  const grupos = [];
  const cuerpo = pant.slice(0, -1), cierre = pant[pant.length - 1];
  for (let i = 0; i < cuerpo.length; i += POR_LECCION) grupos.push(cuerpo.slice(i, i + POR_LECCION));
  if (grupos.length > 1 && grupos[grupos.length - 1].length === 1) grupos[grupos.length - 2].push(...grupos.pop());
  grupos.push([cierre]);

  const lecciones = grupos.map((g, gi) => {
    const tituloLeccion = (gi === 0 && g.length > 1 ? g[1] : g[0]).titulo;
    const bloques = [];
    g.forEach((s, si) => {
      if (si) bloques.push(B.continuar());
      let bl = pantalla(s.titulo, s.cuerpo, true);
      // P01: la competencia del módulo y el aprendizaje esperado van textuales, en vez de «El aprendizaje esperado es este: …»
      if (gi === 0 && si === 0) {
        const comp = `<p><strong>Competencia del módulo:</strong> ${esc(modulo.competencia)}</p><p><strong>Aprendizaje esperado:</strong> ${esc(ae.texto)}</p>`;
        const html = bl[0].items[0].paragraph;
        const re = new RegExp(`El aprendizaje esperado es este:\\s*${ae.texto.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*`);
        bl[0].items[0].paragraph = re.test(html) ? html.replace(re, `</p>${comp}<p>`).replace(/<p>\s*<\/p>/g, '') : comp + html;
      }
      bloques.push(...bl);
    });
    if (gi === grupos.length - 1 && ideas.trim()) {
      bloques.push(B.continuar(), B.titulo('Ideas clave'), B.texto('', parrafos(ideas.split('\n').map(l => l.replace(/^\s{2,}/, '   ')).reduce((a, l) => {
        if (/^\s{2,}\S/.test(l) && a.length) a[a.length - 1] += ' ' + l.trim(); else a.push(l);
        return a;
      }, []))));
    }
    return { titulo: tituloLeccion, bloques };
  });
  lecciones.push({ titulo: 'Referencias bibliográficas', bloques: [B.texto('',
    p('Estas son las fuentes citadas en este tema, en formato APA 7. Los enlaces se abren en una pestaña nueva.') + refs.map(r => p(r.texto)).join(''))] });

  // Intro de la portada: primer párrafo de P01, sin citas
  const intro = pant[0].cuerpo.split(/\n\s*\n/).map(x => x.trim()).find(x => x && !/^(cubre|fuentes|bloque):/m.test(x)) || '';
  const descripcion = `<p><strong>Competencia del módulo:</strong> ${esc(modulo.competencia)}</p><p><strong>Aprendizaje esperado:</strong> ${esc(ae.texto)}</p>`
    + p(intro.replace(/\s*\([^()]*(\d{4}[a-z]?|s\. f\.[^()]*)\)/g, '').replace(/\s+/g, ' '));

  const salida = { ae: AE, titulo: ae.tema, descripcion, lecciones };
  // Control: nada de códigos a la vista del estudiante
  const visible = JSON.stringify(salida.lecciones) + salida.titulo + salida.descripcion;
  const codigos = [...new Set(visible.match(datosConP ? /\bM\d-(?:AE|T|C)\d\b|\bF-[A-Z0-9-]+\b|\[@|\bpantallas? \d+/gi
    : /\bM\d-(?:AE|T|C)\d\b|\bP\d\d\b|\bF-[A-Z0-9-]+\b|\[@|\bpantallas? \d+/gi) || [])];
  if (codigos.length) console.log(`⚠ ${AE}: quedan códigos a la vista: ${codigos.join(' ')}`);
  const dir = path.join(RAIZ, 'entregables', 'rise', AE);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'rise-curso.json'), JSON.stringify(salida, null, 1));
  const n = lecciones.reduce((s, l) => s + l.bloques.length, 0);
  console.log(`${AE} «${ae.tema}»: ${pant.length} pantallas → ${lecciones.length} lecciones, ${n} bloques, ${refs.length} referencias`);
}

for (const AE of process.argv.slice(2)) generar(AE);
