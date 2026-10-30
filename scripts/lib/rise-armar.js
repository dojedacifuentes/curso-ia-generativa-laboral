// Arma en Rise 360 un curso generado por scripts/rise-generar.mjs (entregables/rise/<AE>/rise-curso.json).
// Corre en el editor (rise.eu.articulate.com/authoring/<curso>) con la sesión iniciada, con la API interna del editor («ducks»).
// El curso de destino es un duplicado de la plantilla (un Rise ya corregido, con la marca y el tema): se reutilizan sus imágenes
// de cabecera, se borran sus lecciones y se crean las del AE.
// Uso: await riseArmar(courseId, datos)  (con { probar: true } solo informa qué haría)
window.riseArmar = async function (courseId, d, { probar = false } = {}) {
  const api = async (tipo, payload) => {
    const r = await fetch(`/api/rise-runtime/ducks/rise/${tipo}`, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ type: `rise/${tipo}`, payload, meta: { colorIntents: [] } }),
    });
    if (!r.ok) throw new Error(`${tipo} ${r.status} ${(await r.text()).slice(0, 300)}`);
    return r.json();
  };
  const leer = async () => {
    const { lessons, course } = (await api('courses/GET_COURSE', { courseId })).payload;
    return { course, lessons: course.lessons.map(id => lessons.find(l => l.id === id)).filter(Boolean), todas: lessons };
  };
  const conIds = b => {
    const x = JSON.parse(JSON.stringify(b));
    x.id = crypto.randomUUID();
    for (const it of x.items || []) { it.id = crypto.randomUUID(); for (const a of it.answers || []) a.id = crypto.randomUUID(); }
    return x;
  };

  const { course, lessons } = await leer();
  // Imágenes de cabecera de la plantilla, sin ids ni marcas de bloque global
  const cabeceras = lessons.flatMap(l => (l.items || []).filter(b => b.type === 'image' && b.variant === 'banner'))
    .map(b => { const x = JSON.parse(JSON.stringify(b)); delete x.globalBlockId; delete x.createdAt; delete x.updatedAt; return x; });
  const plan = `${lessons.length} lecciones a borrar · ${d.lecciones.length} a crear · ${cabeceras.length} cabeceras · título «${d.titulo}»`;
  if (probar) return plan;
  if (!cabeceras.length) throw new Error('El curso de destino no tiene imágenes de cabecera: duplica primero la plantilla');

  for (const l of lessons) await api('lessons/DELETE_LESSON', { id: l.id, courseId });
  await api('courses/UPDATE_COURSE_FIELD_THROTTLE', { course: { id: courseId, title: d.titulo, description: d.descripcion } });

  const hechas = [];
  for (const [i, lec] of d.lecciones.entries()) {
    const r = await api('lessons/CREATE_LESSON', { author: course.author, courseId, position: i, selectedAuthorId: 'none', title: lec.titulo });
    // La respuesta no siempre trae el id: se busca la lección nueva (sin tipo) con ese título
    let id = r.payload?.id || r.payload?.lesson?.id;
    if (!id) id = (await leer()).todas.find(l => l.title === lec.titulo && !l.type && !hechas.includes(l.id))?.id;
    if (!id) throw new Error(`No encontré la lección creada «${lec.titulo}»`);
    hechas.push(id);
    await api('lessons/UPDATE_LESSON', { icon: 'Article', id, type: 'blocks', updatedAt: new Date().toISOString(), courseId,
      bulkUpdateBlocks: { deletes: [], creates: [], updates: [], moves: [] } });
    // La lección de referencias va sin imagen de cabecera
    const bloques = [...(/^Referencias/.test(lec.titulo) ? [] : [cabeceras[i % cabeceras.length]]), ...lec.bloques].map(conIds);
    await api('lessons/CREATE_BLOCKS', { courseId, lessonId: id, previousBlockId: null, blocks: bloques });
  }
  const fin = await leer();
  return `${plan} → listo: ${fin.lessons.length} lecciones, ${fin.lessons.reduce((s, l) => s + (l.items || []).length, 0)} bloques`;
};

// Duplica la plantilla desde la biblioteca (rise.eu.articulate.com/manage/all-content) y devuelve el id del curso nuevo.
// Rise no tiene una llamada conocida para duplicar: se usa el menú ⋯ › Duplicate de la fila de la plantilla.
window.riseDuplicar = async function (plantillaId, nombre) {
  const espera = ms => new Promise(r => setTimeout(r, ms));
  const hasta = async (f, ms = 15000) => { for (let t = 0; t < ms; t += 300) { const x = f(); if (x) return x; await espera(300); } return null; };
  window.open = () => null; // que no se abra una pestaña con el curso nuevo
  const ids = () => new Set([...document.querySelectorAll('a[href*="/authoring/"]')].map(a => a.getAttribute('href').split('/').pop()));
  const antes = ids();
  const enlace = await hasta(() => document.querySelector(`a[href*="${plantillaId}"]`));
  if (!enlace) throw new Error('No veo la plantilla en la biblioteca');
  let fila = enlace; while (fila && !fila.querySelector('button[aria-label*="Content menu" i]')) fila = fila.parentElement;
  fila.querySelector('button[aria-label*="Content menu" i]').click();
  const item = await hasta(() => [...document.querySelectorAll('[role=menuitem], button, li')].find(x => x.textContent.trim() === 'Duplicate'));
  item.click();
  const input = await hasta(() => [...document.querySelectorAll('input')].find(i => /^Copy of /.test(i.value)));
  Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), 'value').set.call(input, nombre);
  input.dispatchEvent(new Event('input', { bubbles: true }));
  await espera(300);
  [...document.querySelectorAll('button')].find(b => b.textContent.trim() === 'Duplicate').click();
  const nuevo = await hasta(() => [...ids()].find(i => !antes.has(i)), 30000);
  if (!nuevo) throw new Error(`No apareció el duplicado «${nombre}»`);
  return nuevo;
};
