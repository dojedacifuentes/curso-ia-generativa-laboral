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
// Horas por módulo y del curso (hoja «Resumen horas» de la planilla); van en el nombre del curso y de cada módulo (Natalia, 31-10)
const HORAS = Object.fromEntries(leer('data', 'planilla', 'Resumen horas.tsv').split('\n').map((l) => l.split('\t')).filter((c) => /^\d(\.0)?$/.test(c[0]) && Number(c[2])).map((c) => [Number(c[0]), Number(c[2])]));
const HORAS_CURSO = Object.values(HORAS).reduce((a, b) => a + b, 0);
if (curso.modulos.some((m) => !HORAS[m.n]) || HORAS_CURSO !== 88) throw new Error(`horas: ${JSON.stringify(HORAS)} = ${HORAS_CURSO}`);
const DOCENTE = { nombre: 'Natalia Hernández', correo: 'natalia@empoderatech.cl' };
// Diseño del 31-10 (ideas del curso de referencia aprobado por SENCE): reto del personaje y «lo que te llevas» en cada módulo
// (data/retos.json), banner con foto de los clips de Flow, video embebido, encabezados de bloque con ícono y cierre del curso
const RETOS = JSON.parse(leer('data', 'retos.json'));
const IMAGENES = Object.fromEntries(fs.readdirSync(rel('entregables', 'moodle', 'banners')).filter((f) => f.endsWith('.jpg')).map((f) => [f, fs.readFileSync(rel('entregables', 'moodle', 'banners', f)).toString('base64')]));
const icono = (n, color = '#fff', tam = 22) => leer('scripts', 'lib', 'iconos-lucide', `${n}.svg`).replace(/<!--[\s\S]*?-->/g, '').replace(/\s+/g, ' ').trim().replace(/ class="[^"]*"/, '').replace(/width="\d+"/, `width="${tam}"`).replace(/height="\d+"/, `height="${tam}"`).replace(/stroke="currentColor"/, `stroke="${color}"`).replace(/<svg /, '<svg aria-hidden="true" style="display:block;flex:none;" ').replace(/ >/g, '>').replace(/> </g, '><');
// Videos de bienvenida y resumen en Drive (videos/ENTREGA-VIDEOS.md): se ven dentro de la sección con el reproductor de Drive
const VIDEOS = (() => {
  const md = leer('videos', 'ENTREGA-VIDEOS.md'); const v = {};
  for (const [, tipo, n, id] of md.matchAll(/^\| \d+ · (bienvenida|resumen) M(\d) \| https:\/\/drive\.google\.com\/file\/d\/([\w-]+)\/view \|/gm)) (v[n] ||= {})[tipo] = id;
  return v;
})();
const videoDrive = (id, titulo) => `<div style="position:relative;width:100%;max-width:880px;aspect-ratio:16/9;border-radius:18px;overflow:hidden;background:${'#00060F'};box-shadow:0 10px 30px rgba(0,6,15,.18);margin:6px 0 4px;"><iframe src="https://drive.google.com/file/d/${id}/preview" title="${titulo.replace(/"/g, '&quot;')}" allow="autoplay; fullscreen" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe></div>`;

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
// Cambio 31-10 (Natalia): «Aplica» y «En tu trabajo» van juntos (las dos actividades formativas, autoevaluables, sin nota)
const PASOS = [['Aprende', 'Recorre el contenido interactivo del tema.'], ['Practica', 'Pon a prueba lo aprendido con el quiz juego.'], ['Aplica en tu trabajo', 'Resuelve las dos actividades formativas y revísalas con su rúbrica de autoevaluación.']];
const pasos = (chico) => `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:${chico ? 14 : 4}px;">${PASOS.map(([t, d], i) => `<div style="flex:1 1 150px;display:flex;gap:10px;align-items:flex-start;background:${chico ? C.grs : '#fff'};border:1px solid ${C.linea};border-radius:14px;padding:10px 12px;">${num(i + 1, chico ? 26 : 30, i < 2 ? C.noche : C.fr)}<div><div style="font-weight:700;color:${C.noche};font-size:${chico ? 13.5 : 14.5}px;">${t}</div>${chico ? '' : `<div style="font-size:13px;color:${C.gr};line-height:1.4;">${d}</div>`}</div></div>`).join('')}</div>`;

const portada = () => heroFoto(RETOS.curso.banner, `${pill('Curso · Empoderatech', true)}
<div style="font-size:30px;font-weight:700;line-height:1.15;margin:14px 0 10px;max-width:640px;">${esc(curso.titulo)}</div>
<div style="font-size:16px;line-height:1.6;max-width:640px;opacity:.95;">Aprende a usar la IA generativa en las tareas de tu trabajo: pedir bien, revisar lo que te entrega y aplicarla en correos, informes, presentaciones, planillas, contenidos y flujos simples, cuidando los datos y la ética.</div>
<div style="margin-top:14px;">${pill(`${HORAS_CURSO} horas · ${curso.modulos.length} módulos`, true)}</div>`)
  + `<div style="margin:6px 0 4px;"><div style="font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.fr};margin-bottom:8px;">Ruta del curso</div>
<div style="display:flex;flex-wrap:wrap;gap:10px;">${curso.modulos.map((m) => `<div style="flex:1 1 200px;background:#fff;border:1px solid ${C.linea};border-top:4px solid ${C.fr};border-radius:14px;padding:12px 14px;"><div style="display:flex;gap:10px;align-items:center;">${num(m.n, 30, C.noche)}<div style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${C.fr};">Módulo ${m.n} · ${HORAS[m.n]} horas</div></div><div style="font-weight:700;color:${C.noche};margin-top:8px;line-height:1.3;">${esc(m.nombre)}</div></div>`).join('')}</div></div>`;

const comoAvanzar = () => `<div style="background:${C.grs};border-radius:18px;padding:18px 20px;margin:8px 0;">
<div style="font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.fr};">Cómo avanzas en cada tema</div>
<div style="font-size:15px;color:${C.noche};margin:6px 0 10px;line-height:1.5;">Cada módulo abre con un <b>video de bienvenida</b> y una evaluación diagnóstica. Después tiene varios temas, y cada tema sigue los mismos tres pasos. Tu avance se marca solo a medida que completas cada recurso.</div>
${pasos(false)}
<div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px;font-size:14px;color:${C.noche};line-height:1.5;">
<div style="flex:1 1 260px;background:#fff;border-radius:12px;padding:10px 14px;"><b style="color:${C.fr};">Práctica evaluada.</b> Al cierre de cada módulo resuelves los casos de aplicación con empresas reales y los entregas como tarea. El facilitador te pone la nota y te deja su retroalimentación.</div>
<div style="flex:1 1 260px;background:#fff;border-radius:12px;padding:10px 14px;"><b style="color:${C.fr};">Conversa.</b> En el foro de casos del módulo compartes tus resultados y haces tus consultas. El facilitador responde en menos de 24 horas hábiles.</div>
<div style="flex:1 1 260px;background:#fff;border-radius:12px;padding:10px 14px;"><b style="color:${C.fr};">Repasa.</b> El resumen del módulo trae la infografía animada, el <b>video de resumen</b> y el glosario del módulo, donde puedes buscar cada término.</div>
<div style="flex:1 1 260px;background:#fff;border-radius:12px;padding:10px 14px;"><b style="color:${C.fr};">Demuestra.</b> Cada módulo cierra con su evaluación, y el curso, con una evaluación final que integra todo lo aprendido.</div>
<div style="flex:1 1 100%;background:${C.noche};color:#fff;border-radius:12px;padding:12px 16px;"><b style="color:${C.fu};">Tu proyecto del curso.</b> En el módulo 1 eliges una tarea de tu cargo y en cada módulo la mejoras con IA: la presentas, la investigas, comunicas tu propuesta, automatizas un paso con supervisión y, al final, mides sus resultados y los cuentas en un pitch. Cada paso es un hito: lo reconoces en las actividades formativas 2 marcadas con su número.</div></div></div>`;

// Insignias del curso (creadas en Moodle el 30-10, ids 1 a 7; imágenes de scripts/moodle-insignias.mjs)
const INSIGNIA = (id) => `https://formacion.empoderatech.com/pluginfile.php/16/badges/badgeimage/${id}/f1`;
const insignias = () => `<div style="background:#fff;border:1px solid ${C.linea};border-radius:18px;padding:18px 20px;margin:8px 0;">
<div style="font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.fr};">Insignias que puedes ganar</div>
<div style="font-size:15px;color:${C.noche};margin:6px 0 12px;line-height:1.5;">Al completar cada módulo ganas su insignia, y al terminar el curso con nota de aprobación, la insignia del curso. Las ves en tu perfil.</div>
<div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;">${curso.modulos.map((m) => `<img src="${INSIGNIA(m.n)}" alt="Insignia del módulo ${m.n}" width="92" height="92" style="width:92px;height:92px;">`).join('')}<img src="${INSIGNIA(7)}" alt="Insignia de curso completado" width="116" height="116" style="width:116px;height:116px;margin-left:6px;"></div></div>`;

// Hero con foto (31-10): la imagen va en el área de archivos del resumen de la sección (@@PLUGINFILE@@) y un degradado oscuro
// deja legible el texto a la izquierda; abajo, «Lo que te llevas» y la competencia, como la «herramienta desbloqueada» de referencia
const heroFoto = (archivo, contenido, alto = 340) => `<div style="position:relative;overflow:hidden;border-radius:22px;margin:4px 0 14px;color:#fff;min-height:${alto}px;background-color:${C.noche};background-image:linear-gradient(90deg,rgba(0,6,15,.97) 0%,rgba(0,6,15,.9) 42%,rgba(0,6,15,.45) 75%,rgba(0,6,15,.2) 100%),url(@@PLUGINFILE@@/${archivo});background-size:cover;background-position:center right;">${arcos}<div style="position:relative;padding:30px 32px 28px;max-width:640px;">${contenido}</div></div>`;
const heroModulo = (m) => { const r = RETOS.modulos[m.n]; return heroFoto(r.banner, `<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;"><span style="display:inline-flex;width:40px;height:40px;border-radius:12px;background:${C.fr};align-items:center;justify-content:center;">${icono(r.icono, '#fff', 22)}</span>${pill(`Módulo ${m.n} de ${curso.modulos.length} · ${HORAS[m.n]} horas`, true)}</div>
<div style="font-size:28px;font-weight:700;line-height:1.18;margin:14px 0 12px;">${esc(m.nombre)}</div>
<div style="font-size:12.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${C.fu};">El reto de ${esc(r.personaje)}</div>
<div style="font-size:15.5px;line-height:1.6;margin-top:6px;opacity:.97;">${esc(r.reto)} <b style="color:#fff;">${esc(r.pregunta)}</b></div>
<div style="display:flex;gap:6px;margin-top:16px;max-width:420px;" aria-label="Módulo ${m.n} de ${curso.modulos.length}">${curso.modulos.map((x) => `<span style="flex:1;height:6px;border-radius:999px;background:${x.n < m.n ? C.fr : x.n === m.n ? C.fu : 'rgba(255,255,255,.22)'};"></span>`).join('')}</div>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:16px;">${m.aes.map((a, i) => `<span style="display:inline-flex;gap:8px;align-items:center;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:999px;padding:5px 14px 5px 6px;font-size:13.5px;">${num(i + 1, 22)}${esc(a.tema)}</span>`).join('')}</div>`)
  + `<div style="display:flex;flex-wrap:wrap;gap:12px;margin:0 0 6px;">
<div style="flex:1 1 300px;display:flex;gap:14px;align-items:flex-start;background:${C.fr};background:linear-gradient(135deg,${C.fr} 0%,${C.fu} 100%);color:#fff;border-radius:18px;padding:18px 20px;"><span style="display:inline-flex;width:44px;height:44px;border-radius:12px;background:rgba(255,255,255,.18);align-items:center;justify-content:center;flex:none;">${icono('package-open', '#fff', 24)}</span><div><div style="font-size:12.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.9;">Lo que te llevas</div><div style="font-size:16px;font-weight:700;line-height:1.4;margin-top:4px;">${esc(r.llevas)}</div></div></div>
<div style="flex:1 1 300px;display:flex;gap:14px;align-items:flex-start;background:${C.grs};color:${C.noche};border-radius:18px;padding:18px 20px;"><span style="display:inline-flex;width:44px;height:44px;border-radius:12px;background:#fff;align-items:center;justify-content:center;flex:none;">${icono('target', C.fr, 24)}</span><div><div style="font-size:12.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${C.fr};">Competencia del módulo</div><div style="font-size:14.5px;line-height:1.5;margin-top:4px;">${esc(m.competencia)}</div></div></div></div>`; };

// Encabezado de cada bloque de la sección (31-10): franja con ícono, como en el curso de referencia, con la marca Empoderatech
const encabezado = (ic, t, d) => `<div style="position:relative;overflow:hidden;display:flex;gap:16px;align-items:center;margin-top:22px;border-radius:18px;padding:16px 20px;background:${C.noche};background:linear-gradient(90deg,${C.noche} 0%,#1B2236 60%,${C.fr} 140%);color:#fff;"><div aria-hidden="true" style="position:absolute;right:-40px;top:-60px;width:180px;height:180px;border-radius:50%;border:2px solid ${C.fr};opacity:.5;"></div><span style="position:relative;display:inline-flex;width:46px;height:46px;border-radius:14px;background:${C.fr};align-items:center;justify-content:center;flex:none;">${icono(ic, '#fff', 24)}</span><div style="position:relative;"><div style="font-size:18px;font-weight:700;line-height:1.25;">${esc(t)}</div>${d ? `<div style="font-size:14px;line-height:1.45;opacity:.88;margin-top:2px;">${esc(d)}</div>` : ''}</div></div>`;

const bandaTema = (m, a, i) => `<div style="background:#fff;border:1px solid ${C.linea};border-left:6px solid ${C.fr};border-radius:18px;padding:18px 22px;margin-top:18px;">
<div style="display:flex;gap:14px;align-items:center;">${num(i + 1, 44)}<div><div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.fr};">Tema ${i + 1} de ${m.aes.length}</div><div style="font-size:21px;font-weight:700;color:${C.noche};line-height:1.25;">${esc(a.tema)}</div></div></div>
<div style="font-size:15px;line-height:1.6;color:${C.noche};margin-top:12px;"><b>Aprendizaje esperado:</b> ${esc(a.texto)}</div>
${pasos(true)}${HITO[a.id] ? `<div style="margin-top:12px;display:inline-flex;gap:8px;align-items:center;background:${C.noche};color:#fff;border-radius:999px;padding:6px 16px 6px 8px;font-size:13.5px;">${num('★', 22, C.fu)}<span>La actividad formativa 2 de este tema es el <b>${HITO[a.id]}</b> de tu proyecto del curso</span></div>` : ''}</div>`;

const subtitulo = (t, d) => `<div style="margin-top:22px;"><div style="display:flex;align-items:center;gap:10px;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${C.fr};"></span><span style="font-size:14px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.noche};">${esc(t)}</span></div>${d ? `<div style="font-size:14.5px;color:${C.gr};margin:4px 0 0 20px;line-height:1.5;">${esc(d)}</div>` : ''}</div>`;

const reservado = (t) => `<div style="border:2px dashed ${C.fr};background:${C.frs};border-radius:14px;padding:16px 18px;color:${C.noche};"><b>Espacio reservado.</b> ${esc(t)} Este recurso está en producción y se mostrará a los estudiantes cuando esté listo.</div>`;

// ---------- armado ----------
const foros = partirH2(main('entregables/foros/html/Foros-del-curso.html'));
const foroDe = (t) => foros.find((f) => f.titulo.startsWith(t));

// Evaluaciones (31-10): cuestionarios de Moodle desde evaluaciones/M<n>.json y Final.json, importados en formato GIFT, con
// retroalimentación en cada alternativa. El caso de la evaluación final va como «descripción» antes de sus preguntas.
const gesc = (s) => esc(s).replace(/[~=#{}:\\]/g, (c) => `\\${c}`);
const gp = (s) => `<p>${gesc(s).replace(/\n\n+/g, '</p><p>').replace(/\n/g, ' ')}</p>`;
const giftItem = (it, k, pref) => {
  const ok = it.opciones.filter((o) => o.correcta).length;
  if (it.opciones.length !== 4 || ok !== 1 || it.opciones.some((o) => !o.retro?.trim())) throw new Error(`${it.id}: 4 opciones, 1 correcta y retro en todas`);
  return `::${pref} · ${String(k).padStart(2, '0')}::[html]${gp(it.enunciado)}{\n${it.opciones.map((o) => `\t${o.correcta ? '=' : '~'}${gp(o.texto)}#${gp(o.retro)}`).join('\n')}\n}\n`;
};
const faltan = [];
const evaluacion = (archivo, nombre, pref) => {
  if (!fs.existsSync(rel('evaluaciones', archivo))) { faltan.push(archivo); return null; }
  const e = JSON.parse(leer('evaluaciones', archivo));
  let k = 0; let gift = `// ${nombre} · generado por scripts/moodle-aula.mjs\n\n`;
  if (e.casos) for (const [i, c] of e.casos.entries()) { gift += `::${pref} · caso ${i + 1}::[html]<h4>${gesc(`Caso ${i + 1}: ${c.titulo}`)}</h4>${gp(c.texto)}{}\n\n`; for (const it of c.items) gift += giftItem(it, ++k, pref) + '\n'; }
  else for (const it of e.items) gift += giftItem(it, ++k, pref) + '\n';
  const ruta = `entregables/moodle/evaluaciones/${archivo.replace('.json', '.gift')}`;
  fs.mkdirSync(rel('entregables', 'moodle', 'evaluaciones'), { recursive: true });
  fs.writeFileSync(rel(ruta), gift);
  return { name: nombre, intro: `<p>${esc(e.instruccion)}</p>`, gift: ruta, giftTexto: gift, preguntas: k + (e.casos ? e.casos.length : 0) };
};

const modulos = curso.modulos.map((m) => {
  const aes = m.aes.map((a, i) => {
    const partes = partirH2(main(`entregables/actividades/html/${a.id}.html`));
    const refs = partes.find((p) => /^Referencias/.test(p.titulo))?.cuerpo || '';
    const acts = partes.filter((p) => /^Actividad \d/.test(p.titulo));
    if (acts.length !== 2) throw new Error(`${a.id}: se esperaban 2 actividades`);
    // Cambio 31-10 (Natalia): las dos actividades son formativas y autoevaluables: tarea con entrega, sin nota, rúbrica de autoevaluación en el enunciado
    const act = (k) => {
      const titulo = acts[k].titulo.replace(/^Actividad \d · /, '');
      return { titulo, name: `Actividad formativa ${k + 1}: ${titulo}${k === 1 && HITO[a.id] ? ` · ${HITO[a.id]} del proyecto` : ''}`, intro: estilar(conRefs(acts[k].cuerpo, refs)) };
    };
    const id = a.id;
    return {
      id, tema: a.tema, banda: bandaTema(m, a, i),
      rise: { name: `Contenido: ${a.tema}`, intro: `<p>Contenido interactivo del tema. Avanza por las secciones a tu ritmo; se marca completo al recorrerlo entero.</p>`, zip: `entregables/rise/scorm/${fs.readdirSync(rel('entregables', 'rise', 'scorm')).find((f) => f.startsWith(`${id} `))}` },
      quiz: { name: `Quiz: ${a.tema}`, intro: `<p>Juego de preguntas para poner a prueba lo aprendido. Cada respuesta trae su retroalimentación y puedes intentarlo las veces que quieras.</p>`, zip: `entregables/quiz/${id}/${id}-Quiz-Juego-SCORM.zip` },
      act1: act(0), act2: act(1),
    };
  });
  // Cambio 31-10 (Natalia): los casos son la práctica evaluada del módulo: tarea con entrega, nota del facilitador y rúbrica (casos/RUBRICA.md)
  const rubCaso = leer('casos', 'RUBRICA.md');
  const casos = fs.readdirSync(rel('casos')).filter((f) => new RegExp(`^M${m.n}-C\\d\\.md$`).test(f)).sort().map((f) => {
    const id = f.replace('.md', ''); const h = leer('entregables', 'casos', 'html', `${id}.html`);
    const titulo = /<h1>([^<]+)<\/h1>/.exec(h)[1].trim();
    return { id, titulo, name: `Caso de aplicación: ${titulo}`, html: estilar(main(`entregables/casos/html/${id}.html`)), rubrica: rubrica(rubCaso, `Rúbrica · Caso de aplicación: ${titulo}`) };
  });
  const conCasos = casos.length > 0;
  const f = foroDe(conCasos ? `Foro de casos del módulo ${m.n} ` : `Foro del módulo ${m.n} `);
  if (!f) throw new Error(`sin foro del módulo ${m.n}`);
  return {
    n: m.n, nombre: m.nombre, horas: HORAS[m.n], seccion: `Módulo ${m.n}: ${m.nombre} (${HORAS[m.n]} horas)`, resumen: heroModulo(m), banner: RETOS.modulos[m.n].banner,
    reservados: { bienvenida: { name: `Video de bienvenida del módulo ${m.n}` }, diagnostica: { name: `Evaluación diagnóstica del módulo ${m.n}`, html: reservado('Aquí va la evaluación diagnóstica del módulo.') }, resumenVideo: { name: `Video de resumen del módulo ${m.n}` } },
    // los videos se ven en la sección: la descripción de la página lleva el reproductor de Drive
    videos: {
      bienvenida: VIDEOS[m.n]?.bienvenida && videoDrive(VIDEOS[m.n].bienvenida, `Video de bienvenida del módulo ${m.n}`),
      resumen: VIDEOS[m.n]?.resumen && videoDrive(VIDEOS[m.n].resumen, `Video de resumen del módulo ${m.n}`),
    },
    aes, casos,
    etiquetas: {
      empieza: encabezado('play', 'Empieza aquí', 'Mira el video de bienvenida y responde la evaluación diagnóstica para ver desde dónde partes.'),
      casos: encabezado('badge-check', 'Práctica evaluada', 'Casos de aplicación con empresas reales. Cada caso se entrega como tarea: el facilitador te pone la nota y te deja su retroalimentación.'),
      foro: encabezado('users', conCasos ? 'Foro de casos' : 'Foro del módulo', conCasos ? 'Comparte los resultados de tus casos, conversa con tus compañeros y haz tus consultas.' : 'Comparte los avances de tu proyecto, conversa con tus compañeros y haz tus consultas.'),
      resumen: encabezado('layers', 'Resumen del módulo', 'Las ideas clave en una infografía animada y un video, y el glosario del módulo para buscar cada término.'),
      evaluacion: encabezado('list-checks', 'Evaluación del módulo', 'Preguntas con casos y alternativas, con retroalimentación en cada respuesta. Lleva nota.'),
    },
    foro: { name: conCasos ? `Foro de casos del módulo ${m.n}` : `Foro del módulo ${m.n}`, intro: estilar(f.cuerpo) },
    infografia: { name: `Infografía del módulo ${m.n}`, intro: '<p>Las ideas clave del módulo. Abre cada tarjeta y sigue el recorrido guiado.</p>', zip: `entregables/infografias/M${m.n}-Infografia-SCORM.zip` },
    glosario: { name: `Glosario del módulo ${m.n}`, intro: '<p>Los términos del módulo con su definición. Usa el buscador para encontrar uno.</p>', xml: `entregables/glosario/Glosario-M${m.n}-Moodle.xml`, xmlTexto: fs.existsSync(rel('entregables', 'glosario', `Glosario-M${m.n}-Moodle.xml`)) ? leer('entregables', 'glosario', `Glosario-M${m.n}-Moodle.xml`) : '' },
    evaluacion: evaluacion(`M${m.n}.json`, `Evaluación del módulo ${m.n}`, `Evaluación del módulo ${m.n}`),
  };
});

const general = foroDe('Foro de interacción');
const aula = {
  generado: new Date().toISOString(),
  curso: { fullname: `${curso.titulo} (${HORAS_CURSO} horas)`, shortname: 'IA-GENERATIVA-LABORAL', resumen: `<p>Curso práctico de ${HORAS_CURSO} horas para usar la IA generativa en las tareas de tu trabajo, de forma verificada, ética y segura.</p>` },
  inicio: {
    portada: portada(), comoAvanzar: comoAvanzar(), insignias: insignias(),
    avisos: { intro: `<div style="border:1px solid ${C.linea};border-left:6px solid ${C.fr};border-radius:14px;padding:12px 16px;background:#fff;color:${C.noche};"><b>Docente:</b> ${esc(DOCENTE.nombre)} · <a href="mailto:${DOCENTE.correo}" style="color:#116DFF;">${DOCENTE.correo}</a></div>` },
    foro: { name: 'Foro de interacción del curso', intro: estilar(general.cuerpo) },
    reservados: { induccion: { name: 'Inducción al curso', html: reservado('Aquí van el video de inducción y la guía del participante.') } },
    quitar: ['Evaluación diagnóstica del curso', 'Glosario del curso'],
  },
  modulos,
  // Cierre (31-10): la evaluación final y, debajo, lo que la persona se lleva del curso, módulo por módulo
  final: { seccion: 'Evaluación final', resumen: heroBox(`${pill('Cierre del curso', true)}<div style="font-size:28px;font-weight:700;line-height:1.2;margin:12px 0 10px;">Llegaste al final del recorrido</div><div style="font-size:15.5px;line-height:1.6;max-width:680px;opacity:.96;">Empezaste pidiéndole a la IA un resumen y revisando lo que inventaba. Hoy tienes una tarea de tu cargo mejorada, medida y lista para presentar. La evaluación final te pide usar todo eso en cuatro casos de organizaciones distintas: lleva nota y se aprueba con 60 %.</div>`)
      + `<div style="background:#fff;border:1px solid ${C.linea};border-radius:18px;padding:18px 20px;margin:4px 0 6px;"><div style="font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.fr};">Lo que te llevas del curso</div><div style="font-size:15px;color:${C.noche};margin:6px 0 12px;line-height:1.5;">Seis módulos, seis piezas de tu proyecto. Guárdalas y vuelve a usarlas cada vez que quieras mejorar otra tarea con IA.</div><div style="display:flex;flex-wrap:wrap;gap:10px;">${curso.modulos.map((m) => `<div style="flex:1 1 250px;display:flex;gap:12px;align-items:flex-start;background:${C.grs};border-radius:14px;padding:12px 14px;"><span style="display:inline-flex;width:38px;height:38px;border-radius:11px;background:${C.fr};align-items:center;justify-content:center;flex:none;">${icono(RETOS.modulos[m.n].icono, '#fff', 20)}</span><div><div style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${C.fr};">Módulo ${m.n}</div><div style="font-size:14.5px;color:${C.noche};line-height:1.4;margin-top:2px;">${esc(RETOS.modulos[m.n].llevas)}</div></div></div>`).join('')}</div><div style="margin-top:14px;background:${C.noche};color:#fff;border-radius:14px;padding:14px 18px;font-size:15px;line-height:1.5;"><b style="color:${C.fu};">Y ahora, tu siguiente tarea.</b> Elige otra tarea de tu cargo y repite el camino: pide bien, revisa, investiga, comunica, automatiza con supervisión y mide.</div></div>`,
    evaluacion: evaluacion('Final.json', 'Evaluación final del curso', 'Evaluación final') },
  imagenes: IMAGENES,
  facilitador: {
    nombre: 'Para el facilitador',
    resumen: `<div style="border:1px solid ${C.linea};border-left:6px solid ${C.noche};border-radius:14px;padding:14px 18px;background:${C.grs};color:${C.noche};"><b>Sección del equipo docente.</b> Los estudiantes no la ven. Trae la guía del facilitador, con la pauta de corrección de los casos de aplicación, la pauta de las evaluaciones, la referencia de las actividades formativas y la moderación de los foros, y el mapa del aula.</div>`,
    archivos: [
      { name: 'Guía del facilitador (completa)', pdf: 'entregables/guia-facilitador/pdf/Guia-del-facilitador.pdf' },
      ...fs.readdirSync(rel('entregables', 'guia-facilitador', 'partes', 'pdf')).sort().map((f) => ({ name: f.startsWith('Guia-0') ? 'Guía del facilitador · Introducción y foros' : f.startsWith('Guia-E') ? 'Guía del facilitador · Evaluaciones' : `Guía del facilitador · Módulo ${/M(\d)/.exec(f)[1]}`, pdf: `entregables/guia-facilitador/partes/pdf/${f}` })),
      { name: 'Mapa del aula', pdf: 'entregables/guia-facilitador/pdf/Mapa-del-aula-Moodle.pdf' },
    ],
  },
};

// control: archivos y textos sin códigos internos ni remisiones a pantallas
const errores = [];
for (const m of modulos) for (const x of [...m.aes.flatMap((a) => [a.rise, a.quiz]), m.infografia]) if (!fs.existsSync(rel(x.zip))) errores.push(`falta ${x.zip}`);
for (const m of modulos) if (!fs.existsSync(rel(m.glosario.xml))) errores.push(`falta ${m.glosario.xml}`);
for (const x of aula.facilitador.archivos) if (!fs.existsSync(rel(x.pdf))) errores.push(`falta ${x.pdf}`);
const texto = JSON.stringify({ ...aula, facilitador: null, imagenes: null }).replace(/"(zip|xml|pdf|id|gift)":"[^"]*"/g, '');
for (const re of [/\bM\d-(AE|C|T)\d\b/, /\bP\d{2}\b/, /pantalla \d/i]) { const x = re.exec(texto); if (x) errores.push(`código o remisión: «${texto.slice(Math.max(0, x.index - 60), x.index + 40)}»`); }
for (const f of fs.readdirSync(rel('entregables', 'moodle', 'evaluaciones'))) { const g = leer('entregables', 'moodle', 'evaluaciones', f).replace(/^::[^:]*::/gm, ''); for (const re of [/\bM\d-(AE|C|T|E)\d+\b/, /\bP\d{2}\b/, /pantalla \d/i]) if (re.test(g)) errores.push(`${f}: código o remisión ${re}`); }
// actividades formativas (31-10): sin foro, sin nota
const NOTA = /foro de la actividad|se aprueba con|\b\d+ ?% del peso/i;
for (const m of modulos) for (const a of m.aes) for (const k of ['act1', 'act2']) { const t = a[k].intro.replace(/<[^>]+>/g, ' '); if (NOTA.test(t)) errores.push(`${a.id} ${k}: menciona foro o nota («${NOTA.exec(t)[0]}»)`); }
if (errores.length) { console.error(errores.join('\n')); process.exit(1); }
fs.mkdirSync(rel('entregables', 'moodle'), { recursive: true });
fs.writeFileSync(rel('entregables', 'moodle', 'aula.json'), JSON.stringify(aula, null, 1));
const n = modulos.reduce((s, m) => s + m.aes.length, 0);
console.log(`aula.json: ${modulos.length} módulos (${HORAS_CURSO} h), ${n} temas, ${n * 2} actividades formativas, ${modulos.reduce((s, m) => s + m.casos.length, 0)} casos evaluados con rúbrica, ${modulos.reduce((s, m) => s + (m.evaluacion?.preguntas || 0), 0)} ítems de evaluación de módulo y ${aula.final.evaluacion?.preguntas || 0} de la final${faltan.length ? ` (faltan ${faltan.join(', ')})` : ''}, ${aula.facilitador.archivos.length} archivos del facilitador`);
