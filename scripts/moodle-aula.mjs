// Datos del aula Moodle (formacion.empoderatech.com, Moodle 5.3) para el armador scripts/lib/moodle-armador.js.
// Sale de data/curso.json y de lo compilado para el estudiante (entregables/actividades, casos, foros), así que antes corre
// node scripts/compilar-contenidos.mjs --sin-pdf. Lo que ve el estudiante va sin códigos ni remisiones (criterios 29-10 y 30-10);
// las etiquetas llevan la marca Empoderatech con estilos en línea, porque Moodle quita los <style>.
// Uso: node scripts/moodle-aula.mjs → entregables/moodle/aula.json
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rel = (...p) => path.join(RAIZ, ...p);
const leer = (...p) => fs.readFileSync(rel(...p), 'utf8').replace(/\r\n/g, '\n');
const curso = JSON.parse(leer('data', 'curso.json'));
// Hitos del proyecto del curso: la actividad 2 de estos AE (data/hitos.json, opción 1 del 30-10)
const HITO = Object.fromEntries(Object.entries(JSON.parse(leer('data', 'hitos.json'))).filter(([k]) => !k.startsWith('_')).map(([, v]) => [v.ae, v.hito]));

// ---------- marca (manual e-tech; scripts/lib/marca.mjs) ----------
const C = { noche: '#00060F', fr: '#BE3455', gr: '#40444B', fu: '#ED1566', ce: '#3D9BE9', frs: '#FBEFF2', ces: '#EEF5FD', grs: '#F2F3F4', linea: '#E6E7E8' };
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pill = (t, oscuro) => `<span style="display:inline-block;border-radius:999px;padding:4px 14px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;${oscuro ? `background:rgba(255,255,255,.14);color:#fff;` : `background:${C.frs};color:${C.fr};`}">${esc(t)}</span>`;
const num = (n, tam = 34, fondo = C.fr) => `<span style="display:inline-block;width:${tam}px;height:${tam}px;line-height:${tam}px;border-radius:50%;background:${fondo};color:#fff;font-weight:700;font-size:${Math.round(tam * 0.45)}px;text-align:center;flex:none;">${n}</span>`;
const arcos = `<div aria-hidden="true" style="position:absolute;right:-70px;bottom:-110px;width:300px;height:300px;border-radius:50%;border:3px solid ${C.fr};opacity:.9;"></div><div aria-hidden="true" style="position:absolute;right:-130px;bottom:-170px;width:420px;height:420px;border-radius:50%;border:2px solid ${C.fr};opacity:.55;"></div><div aria-hidden="true" style="position:absolute;right:-190px;bottom:-230px;width:540px;height:540px;border-radius:50%;border:1.5px solid ${C.fr};opacity:.3;"></div>`;
const heroBox = (contenido) => `<div style="position:relative;overflow:hidden;background:${C.noche};background:linear-gradient(135deg,${C.noche} 0%,#141B2B 100%);color:#fff;border-radius:22px;padding:30px 32px 28px;margin:4px 0 14px;">${arcos}<div style="position:relative;">${contenido}</div></div>`;

// ---------- contenido compilado → HTML con estilos en línea ----------
const main = (f) => { const s = leer(f); return s.slice(s.indexOf('<main>') + 6, s.indexOf('</main>')); };
const estilar = (h) => h
  .replace(/<h2>/g, `<h3 style="font-size:1.3rem;color:${C.noche};margin:1.2em 0 .5em;">`).replace(/<\/h2>/g, '</h3>')
  .replace(/<h3>/g, `<h4 style="font-size:1.08rem;color:${C.noche};margin:1.4em 0 .5em;padding-left:10px;border-left:4px solid ${C.fr};">`).replace(/<\/h3>/g, '</h4>')
  .replace(/<h4>/g, `<h5 style="font-size:1rem;color:${C.gr};margin:1.1em 0 .4em;">`).replace(/<\/h4>/g, '</h5>')
  .replace(/<p>/g, '<p style="line-height:1.65;">')
  .replace(/<li>/g, '<li style="line-height:1.6;margin:.25em 0;">')
  .replace(/<div class="tabla">/g, '<div style="overflow-x:auto;margin:.8em 0 1em;">')
  .replace(/<table>/g, `<table style="width:100%;border-collapse:collapse;font-size:.92rem;border:1px solid ${C.linea};">`)
  .replace(/<th>/g, `<th style="background:${C.noche};color:#fff;text-align:left;padding:9px 11px;vertical-align:top;font-weight:600;">`)
  .replace(/<td>/g, `<td style="border-top:1px solid ${C.linea};padding:9px 11px;vertical-align:top;">`)
  .replace(/<div class="refs">/g, `<div style="font-size:.88rem;color:${C.gr};">`)
  .replace(/<a href=/g, `<a target="_blank" rel="noopener" style="color:#116DFF;word-break:break-word;" href=`);
const partirH2 = (h) => h.split(/(?=<h2>)/).filter((x) => x.startsWith('<h2>')).map((x) => ({ titulo: /<h2>([^<]+)<\/h2>/.exec(x)[1].trim(), cuerpo: x.replace(/<h2>[^<]+<\/h2>/, '') }));
// referencias citadas en el texto: «Apellido» y año de la entrada aparecen en la cita
const refsCitadas = (texto, refs) => {
  const ps = refs.match(/<p>[\s\S]*?<\/p>/g) || [];
  const plano = texto.replace(/<[^>]+>/g, ' ');
  const usadas = ps.filter((p) => { const t = p.replace(/<[^>]+>/g, ''); const autor = t.split(/[,.(]/)[0].trim(); const año = /\((\d{4}|s\.\s?f\.)[a-z]?[,)]/.exec(t)?.[1]; return autor && año && plano.includes(autor) && plano.includes(año); });
  return usadas.length ? `<div class="refs">${usadas.join('\n')}</div>` : '';
};
const conRefs = (cuerpo, refs) => { const r = refsCitadas(cuerpo, refs); return r ? `${cuerpo}<h3>Referencias bibliográficas</h3>${r}` : cuerpo; };

// rúbrica de la tabla Markdown: criterio, peso y tres niveles (100 %, 60 %, 0 %)
const rubrica = (md, nombre) => {
  const i = md.indexOf('### Rúbrica'); if (i < 0) throw new Error(`sin rúbrica: ${nombre}`);
  const filas = md.slice(i).split('\n').filter((l) => /^\|/.test(l) && !/^\|\s*Criterio|^\|\s*-/.test(l));
  const criterios = filas.map((l) => { const c = l.split('|').slice(1, -1).map((x) => x.trim()); const peso = Number(c[1].replace(/[^\d,.]/g, '').replace(',', '.')); return { descripcion: c[0], peso, niveles: [{ score: 0, definicion: c[4] }, { score: Math.round(peso * 0.6 * 100) / 100, definicion: c[3] }, { score: peso, definicion: c[2] }] }; });
  const total = criterios.reduce((a, c) => a + c.peso, 0);
  if (Math.abs(total - 100) > 0.01) throw new Error(`${nombre}: los pesos suman ${total}`);
  return { nombre, criterios };
};

// ---------- etiquetas del aula ----------
const PASOS = [['Aprende', 'Recorre el contenido interactivo del tema.'], ['Practica', 'Pon a prueba lo aprendido con el quiz juego.'], ['Aplica', 'Resuelve la actividad 1 y compártela en su foro.'], ['En tu trabajo', 'Lleva el tema a tu cargo en la actividad 2.']];
const pasos = (chico) => `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:${chico ? 14 : 4}px;">${PASOS.map(([t, d], i) => `<div style="flex:1 1 150px;display:flex;gap:10px;align-items:flex-start;background:${chico ? C.grs : '#fff'};border:1px solid ${C.linea};border-radius:14px;padding:10px 12px;">${num(i + 1, chico ? 26 : 30, i < 2 ? C.noche : C.fr)}<div><div style="font-weight:700;color:${C.noche};font-size:${chico ? 13.5 : 14.5}px;">${t}</div>${chico ? '' : `<div style="font-size:13px;color:${C.gr};line-height:1.4;">${d}</div>`}</div></div>`).join('')}</div>`;

const portada = () => heroBox(`${pill('Curso · Empoderatech', true)}
<div style="font-size:30px;font-weight:700;line-height:1.15;margin:14px 0 10px;max-width:640px;">${esc(curso.titulo)}</div>
<div style="font-size:16px;line-height:1.6;max-width:640px;opacity:.95;">Aprende a usar la IA generativa en las tareas de tu trabajo: pedir bien, revisar lo que te entrega y aplicarla en correos, informes, presentaciones, planillas, contenidos y flujos simples, cuidando los datos y la ética.</div>`)
  + `<div style="margin:6px 0 4px;"><div style="font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.fr};margin-bottom:8px;">Ruta del curso</div>
<div style="display:flex;flex-wrap:wrap;gap:10px;">${curso.modulos.map((m) => `<div style="flex:1 1 200px;background:#fff;border:1px solid ${C.linea};border-top:4px solid ${C.fr};border-radius:14px;padding:12px 14px;"><div style="display:flex;gap:10px;align-items:center;">${num(m.n, 30, C.noche)}<div style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${C.fr};">Módulo ${m.n}</div></div><div style="font-weight:700;color:${C.noche};margin-top:8px;line-height:1.3;">${esc(m.nombre)}</div></div>`).join('')}</div></div>`;

const comoAvanzar = () => `<div style="background:${C.grs};border-radius:18px;padding:18px 20px;margin:8px 0;">
<div style="font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.fr};">Cómo avanzas en cada tema</div>
<div style="font-size:15px;color:${C.noche};margin:6px 0 10px;line-height:1.5;">Cada módulo tiene varios temas y cada tema sigue los mismos cuatro pasos. Tu avance se marca solo a medida que completas cada recurso.</div>
${pasos(false)}
<div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px;font-size:14px;color:${C.noche};line-height:1.5;">
<div style="flex:1 1 260px;background:#fff;border-radius:12px;padding:10px 14px;"><b style="color:${C.fr};">Conversa.</b> Cada módulo tiene un foro para contar qué aprendiste, por qué importa y para qué lo vas a usar. El facilitador responde en menos de 24 horas hábiles.</div>
<div style="flex:1 1 260px;background:#fff;border-radius:12px;padding:10px 14px;"><b style="color:${C.fr};">Repasa.</b> Al final de cada módulo están los casos de aplicación con empresas reales y la infografía animada con las ideas clave.</div>
<div style="flex:1 1 100%;background:${C.noche};color:#fff;border-radius:12px;padding:12px 16px;"><b style="color:${C.fu};">Tu proyecto del curso.</b> En el módulo 1 eliges una tarea de tu cargo y en cada módulo la mejoras con IA: la presentas, la investigas, comunicas tu propuesta, automatizas un paso con supervisión y, al final, mides sus resultados y los cuentas en un pitch. Cada paso es un hito: lo reconoces en las actividades 2 marcadas con su número.</div></div></div>`;

// Insignias del curso (creadas en Moodle el 30-10, ids 1 a 7; imágenes de scripts/moodle-insignias.mjs)
const INSIGNIA = (id) => `https://formacion.empoderatech.com/pluginfile.php/16/badges/badgeimage/${id}/f1`;
const insignias = () => `<div style="background:#fff;border:1px solid ${C.linea};border-radius:18px;padding:18px 20px;margin:8px 0;">
<div style="font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.fr};">Insignias que puedes ganar</div>
<div style="font-size:15px;color:${C.noche};margin:6px 0 12px;line-height:1.5;">Al completar cada módulo ganas su insignia, y al terminar el curso con nota de aprobación, la insignia del curso. Las ves en tu perfil.</div>
<div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;">${curso.modulos.map((m) => `<img src="${INSIGNIA(m.n)}" alt="Insignia del módulo ${m.n}" width="92" height="92" style="width:92px;height:92px;">`).join('')}<img src="${INSIGNIA(7)}" alt="Insignia de curso completado" width="116" height="116" style="width:116px;height:116px;margin-left:6px;"></div></div>`;

const heroModulo = (m) => heroBox(`${pill(`Módulo ${m.n} de ${curso.modulos.length}`, true)}
<div style="font-size:26px;font-weight:700;line-height:1.2;margin:12px 0 10px;max-width:680px;">${esc(m.nombre)}</div>
<div style="font-size:15.5px;line-height:1.6;max-width:680px;opacity:.96;"><b style="color:#fff;">Competencia del módulo:</b> ${esc(m.competencia)}</div>
<div style="display:flex;gap:6px;margin-top:14px;max-width:420px;" aria-label="Módulo ${m.n} de ${curso.modulos.length}">${curso.modulos.map((x) => `<span style="flex:1;height:6px;border-radius:999px;background:${x.n < m.n ? C.fr : x.n === m.n ? C.fu : 'rgba(255,255,255,.18)'};"></span>`).join('')}</div>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:16px;">${m.aes.map((a, i) => `<span style="display:inline-flex;gap:8px;align-items:center;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:5px 14px 5px 6px;font-size:13.5px;">${num(i + 1, 22)}${esc(a.tema)}</span>`).join('')}</div>`);

const bandaTema = (m, a, i) => `<div style="background:#fff;border:1px solid ${C.linea};border-left:6px solid ${C.fr};border-radius:18px;padding:18px 22px;margin-top:18px;">
<div style="display:flex;gap:14px;align-items:center;">${num(i + 1, 44)}<div><div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.fr};">Tema ${i + 1} de ${m.aes.length}</div><div style="font-size:21px;font-weight:700;color:${C.noche};line-height:1.25;">${esc(a.tema)}</div></div></div>
<div style="font-size:15px;line-height:1.6;color:${C.noche};margin-top:12px;"><b>Aprendizaje esperado:</b> ${esc(a.texto)}</div>
${pasos(true)}${HITO[a.id] ? `<div style="margin-top:12px;display:inline-flex;gap:8px;align-items:center;background:${C.noche};color:#fff;border-radius:999px;padding:6px 16px 6px 8px;font-size:13.5px;">${num('★', 22, C.fu)}<span>La actividad 2 de este tema es el <b>${HITO[a.id]}</b> de tu proyecto del curso</span></div>` : ''}</div>`;

const subtitulo = (t, d) => `<div style="margin-top:22px;"><div style="display:flex;align-items:center;gap:10px;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${C.fr};"></span><span style="font-size:14px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.noche};">${esc(t)}</span></div>${d ? `<div style="font-size:14.5px;color:${C.gr};margin:4px 0 0 20px;line-height:1.5;">${esc(d)}</div>` : ''}</div>`;

const reservado = (t) => `<div style="border:2px dashed ${C.fr};background:${C.frs};border-radius:14px;padding:16px 18px;color:${C.noche};"><b>Espacio reservado.</b> ${esc(t)} Este recurso está en producción y se mostrará a los estudiantes cuando esté listo.</div>`;

// ---------- armado ----------
const foros = partirH2(main('entregables/foros/html/Foros-del-curso.html'));
const foroDe = (t) => foros.find((f) => f.titulo.startsWith(t));
const rubricaForo = (archivo, nombre) => rubrica(leer('foros', archivo), nombre);

const modulos = curso.modulos.map((m) => {
  const aes = m.aes.map((a, i) => {
    const md = leer('actividades', `${a.id}.md`);
    const partes = partirH2(main(`entregables/actividades/html/${a.id}.html`));
    const refs = partes.find((p) => /^Referencias/.test(p.titulo))?.cuerpo || '';
    const acts = partes.filter((p) => /^Actividad \d/.test(p.titulo));
    const mds = md.split(/(?=^## Actividad \d)/m).filter((x) => x.startsWith('## Actividad'));
    if (acts.length !== 2 || mds.length !== 2) throw new Error(`${a.id}: se esperaban 2 actividades`);
    const act = (k) => {
      const titulo = acts[k].titulo.replace(/^Actividad \d · /, '');
      return { titulo, name: `Actividad ${k + 1}: ${titulo}${k === 1 && HITO[a.id] ? ` · ${HITO[a.id]} del proyecto` : ''}`, intro: estilar(conRefs(acts[k].cuerpo, refs)), rubrica: rubrica(mds[k], `Rúbrica · Actividad ${k + 1}: ${titulo}`) };
    };
    const id = a.id;
    return {
      id, tema: a.tema, banda: bandaTema(m, a, i),
      rise: { name: `Contenido: ${a.tema}`, intro: `<p>Contenido interactivo del tema. Avanza por las secciones a tu ritmo; se marca completo al recorrerlo entero.</p>`, zip: `entregables/rise/scorm/${fs.readdirSync(rel('entregables', 'rise', 'scorm')).find((f) => f.startsWith(`${id} `))}` },
      quiz: { name: `Quiz: ${a.tema}`, intro: `<p>Juego de preguntas para poner a prueba lo aprendido. Cada respuesta trae su retroalimentación y puedes intentarlo las veces que quieras.</p>`, zip: `entregables/quiz/${id}/${id}-Quiz-Juego-SCORM.zip` },
      act1: act(0), act2: act(1),
    };
  });
  const casos = fs.readdirSync(rel('casos')).filter((f) => new RegExp(`^M${m.n}-C\\d\\.md$`).test(f)).sort().map((f) => {
    const id = f.replace('.md', ''); const h = leer('entregables', 'casos', 'html', `${id}.html`);
    const titulo = /<h1>([^<]+)<\/h1>/.exec(h)[1].trim();
    const cuerpo = main(`entregables/casos/html/${id}.html`);
    return { id, name: `Caso: ${titulo}`, html: estilar(cuerpo.replace(/<h2>6\. Para el foro<\/h2>/, '<h2>6. Para el foro</h2>')) };
  });
  const f = foroDe(`Foro del módulo ${m.n} `);
  return {
    n: m.n, nombre: m.nombre, resumen: heroModulo(m),
    reservados: { bienvenida: { name: `Video de bienvenida del módulo ${m.n}`, html: reservado('Aquí va el video de bienvenida del módulo.') }, diagnostica: { name: `Evaluación diagnóstica del módulo ${m.n}`, html: reservado('Aquí va la evaluación diagnóstica del módulo.') }, resumenVideo: { name: `Video de resumen del módulo ${m.n}`, html: reservado('Aquí va el video de resumen del módulo.') }, evaluacion: { name: `Evaluación del módulo ${m.n}`, html: reservado('Aquí va la evaluación del módulo.') } },
    aes, casos,
    etiquetas: {
      casos: subtitulo('Casos de aplicación', 'Empresas reales que usaron la IA generativa, con lo que salió bien y lo que no. Cada caso cierra con una pregunta para el foro del módulo.'),
      foro: subtitulo('Conversa', 'Cuenta qué aprendiste, por qué importa en tu trabajo y para qué lo vas a usar.'),
      resumen: subtitulo('Resumen del módulo', 'Las ideas clave del módulo en una infografía animada: explora cada parte.'),
      evaluacion: subtitulo('Evaluación del módulo'),
    },
    foro: { name: `Foro del módulo ${m.n}: qué, por qué y para qué`, intro: estilar(f.cuerpo), rubrica: rubricaForo(`M${m.n}.md`, `Rúbrica de participación · Foro del módulo ${m.n}`) },
    infografia: { name: `Infografía del módulo ${m.n}`, intro: '<p>Las ideas clave del módulo. Abre cada tarjeta y sigue el recorrido guiado.</p>', zip: `entregables/infografias/M${m.n}-Infografia-SCORM.zip` },
  };
});

const general = foroDe('Foro de interacción');
const aula = {
  generado: new Date().toISOString(),
  curso: { fullname: curso.titulo, shortname: 'IA-GENERATIVA-LABORAL', resumen: `<p>Curso práctico para usar la IA generativa en las tareas de tu trabajo, de forma verificada, ética y segura.</p>` },
  inicio: {
    portada: portada(), comoAvanzar: comoAvanzar(), insignias: insignias(),
    foro: { name: 'Foro de interacción del curso', intro: estilar(general.cuerpo) },
    glosario: { name: 'Glosario del curso', intro: '<p>Los términos del curso con su definición, para consultar cuando lo necesites.</p>', xml: 'entregables/glosario/Glosario-Moodle.xml' },
    reservados: { induccion: { name: 'Inducción al curso', html: reservado('Aquí van el video de inducción y la guía del participante.') }, diagnostica: { name: 'Evaluación diagnóstica del curso', html: reservado('Aquí va la evaluación diagnóstica.') } },
  },
  modulos,
  facilitador: {
    nombre: 'Para el facilitador',
    resumen: `<div style="border:1px solid ${C.linea};border-left:6px solid ${C.noche};border-radius:14px;padding:14px 18px;background:${C.grs};color:${C.noche};"><b>Sección del equipo docente.</b> Los estudiantes no la ven. Trae la guía del facilitador, con la pauta de corrección de cada actividad y la moderación de los foros, y el mapa del aula.</div>`,
    archivos: [
      { name: 'Guía del facilitador (completa)', pdf: 'entregables/guia-facilitador/pdf/Guia-del-facilitador.pdf' },
      ...fs.readdirSync(rel('entregables', 'guia-facilitador', 'partes', 'pdf')).sort().map((f) => ({ name: f.startsWith('Guia-0') ? 'Guía del facilitador · Introducción y foros' : `Guía del facilitador · Módulo ${/M(\d)/.exec(f)[1]}`, pdf: `entregables/guia-facilitador/partes/pdf/${f}` })),
      { name: 'Mapa del aula', pdf: 'entregables/guia-facilitador/pdf/Mapa-del-aula-Moodle.pdf' },
    ],
  },
};

// control: archivos y textos sin códigos internos ni remisiones a pantallas
const errores = [];
for (const m of modulos) for (const x of [...m.aes.flatMap((a) => [a.rise, a.quiz]), m.infografia]) if (!fs.existsSync(rel(x.zip))) errores.push(`falta ${x.zip}`);
for (const x of aula.facilitador.archivos) if (!fs.existsSync(rel(x.pdf))) errores.push(`falta ${x.pdf}`);
const texto = JSON.stringify({ ...aula, facilitador: null }).replace(/"(zip|xml|pdf|id)":"[^"]*"/g, '');
for (const re of [/\bM\d-(AE|C|T)\d\b/, /\bP\d{2}\b/, /pantalla \d/i]) { const x = re.exec(texto); if (x) errores.push(`código o remisión: «${texto.slice(Math.max(0, x.index - 60), x.index + 40)}»`); }
// la actividad 1 se publica en su propio foro, no en el del módulo
for (const m of modulos) for (const a of m.aes) for (const k of ['act1', 'act2']) if (/foro del módulo/i.test(a[k].intro)) errores.push(`${a.id} ${k}: dice «foro del módulo»`);
if (errores.length) { console.error(errores.join('\n')); process.exit(1); }
fs.mkdirSync(rel('entregables', 'moodle'), { recursive: true });
fs.writeFileSync(rel('entregables', 'moodle', 'aula.json'), JSON.stringify(aula, null, 1));
const n = modulos.reduce((s, m) => s + m.aes.length, 0);
console.log(`aula.json: ${modulos.length} módulos, ${n} temas, ${n * 2} actividades con rúbrica, ${modulos.reduce((s, m) => s + m.casos.length, 0)} casos, ${aula.facilitador.archivos.length} archivos del facilitador`);
