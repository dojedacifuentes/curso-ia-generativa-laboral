// Corre en el editor de Rise 360 (rise.eu.articulate.com/authoring/<curso>) con la sesión iniciada, usando la API interna del editor
// («ducks»: GET_COURSE, UPDATE_BLOCK_DEBOUNCE, DELETE_BLOCKS, CREATE_LESSON, CREATE_BLOCKS, UPDATE_COURSE_FIELD_THROTTLE).
// Datos: entregables/rise/<AE>/rise-datos.json (scripts/rise-preparar.mjs). El Rise lleva SOLO el contenido: el quiz, las
// actividades, la infografía y el glosario son recursos aparte. Títulos sin códigos (M1-AE1, P01…).
// Uso: await riseAplicar(courseId, datos, { probar: true }) y luego sin «probar». Después, recargar la página del editor.
window.riseAplicar = async function (courseId, d, { probar = false } = {}) {
  const api = async (tipo, payload) => {
    const r = await fetch(`/api/rise-runtime/ducks/rise/${tipo}`, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ type: `rise/${tipo}`, payload, meta: { colorIntents: [] } }),
    });
    if (!r.ok) throw new Error(`${tipo} ${r.status} ${(await r.text()).slice(0, 300)}`);
    return r.json();
  };
  const uuid = () => crypto.randomUUID();
  // payload.lessons no viene en orden: el orden es el de course.lessons
  const { lessons: crudas, course } = (await api('courses/GET_COURSE', { courseId })).payload;
  const lessons = course.lessons.map(id => crudas.find(l => l.id === id)).filter(Boolean);
  const log = [], cambiados = new Map();
  const marcar = (l, b) => cambiados.set(b.id, { lessonId: l.id, block: b });

  // 0. Párrafo repetido (el texto del bloque con título se copió al inicio del bloque siguiente)
  for (const l of lessons) (l.items || []).forEach((b, i) => {
    const sig = l.items[i + 1];
    if (b.variant !== 'heading paragraph' || !sig || sig.variant !== 'paragraph') return;
    const plano = h => (h || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    const p1 = plano(b.items[0].paragraph), m = /^<p>[\s\S]*?<\/p>/.exec(sig.items[0].paragraph);
    if (m && p1 && plano(m[0]) === p1) { sig.items[0].paragraph = sig.items[0].paragraph.slice(m[0].length); marcar(l, sig); log.push(`repetido quitado en «${l.title}»`); }
  });

  // 1. Citas APA: cada ancla se busca en orden de lectura, desde donde quedó la anterior; entre letras puede haber etiquetas HTML
  const campos = [];
  for (const l of lessons) for (const b of l.items || []) {
    if (!['text', 'impact'].includes(b.type) && b.family !== 'text') continue;
    for (const it of b.items || []) if (typeof it.paragraph === 'string') campos.push({ l, b, it });
  }
  const patron = a => new RegExp([...a].map(c => (c === ' ' ? '(?:\\s|&nbsp;|<[^>]+>)+' : c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))).join('(?:<[^>]+>)*'));
  let desde = 0, faltan = [];
  for (const { ancla, cita } of d.anclas) {
    let ok = false;
    for (let i = desde; i < campos.length && !ok; i++) {
      const c = campos[i], m = patron(ancla).exec(c.it.paragraph);
      if (!m) continue;
      const fin = m.index + m[0].length;
      // Cierra las etiquetas que terminan justo en el ancla (p. ej. </strong>) antes de poner la cita
      const cola = /^(?:<\/[^>]+>)*/.exec(c.it.paragraph.slice(fin))[0];
      if (c.it.paragraph.slice(fin + cola.length).startsWith(' (')) { ok = true; desde = i; break; }
      c.it.paragraph = c.it.paragraph.slice(0, fin + cola.length) + ' ' + cita + c.it.paragraph.slice(fin + cola.length);
      marcar(c.l, c.b); ok = true; desde = i;
    }
    if (!ok) faltan.push(ancla);
  }
  log.push(`citas: ${d.anclas.length - faltan.length}/${d.anclas.length}` + (faltan.length ? ` · sin ubicar: ${faltan.join(' | ')}` : ''));

  // 2. Competencia del módulo y aprendizaje esperado textuales en el primer bloque de texto
  const primero = campos[0];
  const ae = d.aprendizaje.replace(/\.$/, '');
  const reAE = new RegExp(`El aprendizaje esperado es este:\\s*${ae.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\.\\s*`);
  if (primero && reAE.test(primero.it.paragraph) && !primero.it.paragraph.includes('Competencia del módulo')) {
    primero.it.paragraph = primero.it.paragraph.replace(reAE,
      `</p><p><strong>Competencia del módulo:</strong> ${d.competencia}</p><p><strong>Aprendizaje esperado:</strong> ${d.aprendizaje}</p><p>`)
      .replace(/<p>\s*<\/p>/g, '');
    marcar(primero.l, primero.b); log.push('competencia y AE: ok');
  } else log.push('competencia y AE: NO (revisar a mano)');

  // 3. Fuera del Rise (criterios 29-10): «Conexión con el proyecto», el glosario (documento aparte) y nada de quiz, actividades
  // ni infografía, que son recursos distintos
  const plano = h => (h || '').replace(/<[^>]+>/g, '').replace(/s+/g, ' ').trim();
  const borrar = [];
  for (const l of lessons) (l.items || []).forEach((b, i) => {
    const t = plano(b.items?.[0]?.heading);
    if (/^Conexión con el proyecto/i.test(t)) borrar.push({ l, ids: [b.id], que: 'Conexión' });
    if (/^Glosario$/i.test(t)) borrar.push({ l, ids: [b.id, ...(l.items[i + 1]?.variant === 'accordion' ? [l.items[i + 1].id] : [])], que: 'Glosario' });
  });
  log.push(`a quitar: ${borrar.map(x => x.que + ' en «' + x.l.title + '»').join(', ') || 'nada'}`);
  const ajenas = lessons.filter(l => /actividad|quiz|ponte a prueba|pon a prueba|infograf/i.test(l.title));
  if (ajenas.length) log.push(`OJO, lecciones que parecen recursos aparte: ${ajenas.map(l => l.title).join(', ')}`);

  // 4. Título del curso sin código (la franquicia es comercial) y portada con competencia y AE textuales
  const titulo = d.tema;
  const descripcion = `<p><strong>Competencia del módulo:</strong> ${d.competencia}</p><p><strong>Aprendizaje esperado:</strong> ${d.aprendizaje}</p>`
    + (d.intro ? `<p>${d.intro}</p>` : '');

  // 5. Códigos que no debe ver el estudiante: M1-AE1, M1-T2, M1-C1, P01…
  const codigos = l => [...new Set((JSON.stringify(l.items) + l.title).match(/Md-(?:AE|T|C)d|Pdd/g) || [])];
  const conCodigos = lessons.map(l => [l.title, codigos(l)]).filter(x => x[1].length);
  if (conCodigos.length) log.push(`códigos a revisar: ${conCodigos.map(x => x[0] + ': ' + x[1].join(' ')).join(' · ')}`);

  if (probar) return { log, cambiados: [...cambiados.values()].map(x => x.block.id), borrar: borrar.map(x => x.ids) };

  for (const { lessonId, block } of cambiados.values()) await api('lessons/UPDATE_BLOCK_DEBOUNCE', { id: block.id, courseId, lessonId, item: block });
  for (const { l, ids } of borrar) await api('lessons/DELETE_BLOCKS', { blockIds: ids, courseId, lessonId: l.id });
  await api('courses/UPDATE_COURSE_FIELD_THROTTLE', { course: { id: courseId, title: titulo, description: descripcion } });

  // 6. Lección final «Referencias bibliográficas» (se crea si no está)
  let ref = lessons.find(l => /^Referencias bibliográficas$/i.test(l.title));
  const htmlRef = `<p>Estas son las fuentes citadas en este tema, en formato APA 7. Los enlaces se abren en una pestaña nueva.</p>${d.referencias}`;
  if (!ref) {
    const r = await api('lessons/CREATE_LESSON', { author: course.author, courseId, position: lessons.length, selectedAuthorId: 'none', title: 'Referencias bibliográficas' });
    const id = r.payload.id;
    await api('lessons/UPDATE_LESSON', { icon: 'Article', id, type: 'blocks', updatedAt: new Date().toISOString(), courseId, bulkUpdateBlocks: { deletes: [], creates: [], updates: [], moves: [] } });
    await api('lessons/CREATE_BLOCKS', { courseId, lessonId: id, previousBlockId: null, blocks: [{ family: 'text', id: uuid(), type: 'text', variant: 'paragraph',
      items: [{ id: uuid(), paragraph: htmlRef }], settings: { markerColorContrast: 'AUTO', paddingBottom: 3, paddingLinked: true, paddingTop: 3, snippetColorContrast: 'AUTO', audioPosition: 'bottom' } }] });
    log.push('lección Referencias bibliográficas creada');
  }
  log.push(`bloques actualizados: ${cambiados.size} · bloques quitados: ${borrar.length} · título: «${titulo}»`);
  return log;
};
