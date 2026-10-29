// Corre en el editor de Rise 360 (rise.eu.articulate.com/authoring/<curso>) con la sesión iniciada, usando la API interna del editor
// («ducks»: GET_COURSE, UPDATE_BLOCK_DEBOUNCE, CREATE_BLOCKS, DELETE_BLOCKS). Datos: entregables/rise/<AE>/rise-datos.json
// (scripts/rise-preparar.mjs). Uso en la consola: await riseAplicar(courseId, datos, { probar: true }) y luego sin «probar».
// Después de aplicar, recargar la página: el editor no ve los cambios hechos por la API hasta recargar.
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

  // 3. Párrafo repetido (el texto del bloque con título se copió al inicio del bloque siguiente)
  for (const l of lessons) (l.items || []).forEach((b, i) => {
    const sig = l.items[i + 1];
    if (b.variant !== 'heading paragraph' || !sig || sig.variant !== 'paragraph') return;
    const plano = h => (h || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    const p1 = plano(b.items[0].paragraph), m = /^<p>[\s\S]*?<\/p>/.exec(sig.items[0].paragraph);
    if (m && p1 && plano(m[0]) === p1) { sig.items[0].paragraph = sig.items[0].paragraph.slice(m[0].length); marcar(l, sig); log.push(`repetido quitado en «${l.title}»`); }
  });

  // 4. Glosario: va en un documento aparte; en su lugar, un enlace
  const borrar = [];
  for (const l of lessons) (l.items || []).forEach((b, i) => {
    if (b.variant === 'heading' && /^Glosario$/.test((b.items[0].heading || '').replace(/<[^>]+>/g, '').trim())) {
      borrar.push({ l, ids: [b.id, ...(l.items[i + 1]?.variant === 'accordion' ? [l.items[i + 1].id] : [])], prev: l.items[i - 1]?.id });
    }
  });

  if (probar) return { log, cambiados: [...cambiados.values()].map(x => x.block.id), borrar: borrar.map(x => x.ids) };

  for (const { lessonId, block } of cambiados.values()) await api('lessons/UPDATE_BLOCK_DEBOUNCE', { id: block.id, courseId, lessonId, item: block });
  for (const { l, ids, prev } of borrar) {
    await api('lessons/DELETE_BLOCKS', { blockIds: ids, courseId, lessonId: l.id });
    await api('lessons/CREATE_BLOCKS', { courseId, lessonId: l.id, previousBlockId: prev, blocks: [bloqueTexto('Glosario',
      `<p>Los términos de este tema están reunidos, con los de todo el curso, en el documento <a href="${d.glosario}" target="_blank" rel="noopener">Glosario</a>.</p>`)] });
  }
  log.push(`bloques actualizados: ${cambiados.size} · glosario reemplazado: ${borrar.length}`);
  return log;

  function bloqueTexto(titulo, html) {
    return { family: 'text', id: uuid(), type: 'text', variant: 'heading paragraph',
      items: [{ id: uuid(), heading: titulo, paragraph: html }],
      settings: { markerColorContrast: 'AUTO', paddingBottom: 3, paddingLinked: true, paddingTop: 3, snippetColorContrast: 'AUTO', audioPosition: 'bottom' } };
  }
};

// Agrega bloques al final de una lección (vacía o no): actividades o referencias
window.riseAgregar = async function (courseId, lessonId, bloques) {
  const api = async (tipo, payload) => {
    const r = await fetch(`/api/rise-runtime/ducks/rise/${tipo}`, { method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ type: `rise/${tipo}`, payload, meta: { colorIntents: [] } }) });
    if (!r.ok) throw new Error(`${tipo} ${r.status} ${(await r.text()).slice(0, 300)}`);
    return r.json();
  };
  const { lessons } = (await api('courses/GET_COURSE', { courseId })).payload;
  const l = lessons.find(x => x.id === lessonId);
  const prev = l.items?.length ? l.items[l.items.length - 1].id : null;
  return api('lessons/CREATE_BLOCKS', { courseId, lessonId, previousBlockId: prev, blocks: bloques });
};

// Bloques de Rise a partir de rise-datos.json
window.riseBloques = {
  ajustes: { markerColorContrast: 'AUTO', paddingBottom: 3, paddingLinked: true, paddingTop: 3, snippetColorContrast: 'AUTO', audioPosition: 'bottom' },
  texto(titulo, html) {
    return { family: 'text', id: crypto.randomUUID(), type: 'text', variant: titulo ? 'heading paragraph' : 'paragraph',
      items: [{ id: crypto.randomUUID(), ...(titulo ? { heading: titulo } : {}), paragraph: html }], settings: { ...this.ajustes } };
  },
  titulo(t) {
    return { family: 'text', id: crypto.randomUUID(), type: 'text', variant: 'heading', items: [{ id: crypto.randomUUID(), heading: t }], settings: { ...this.ajustes } };
  },
  nota(html) {
    return { family: 'impact', id: crypto.randomUUID(), type: 'text', variant: 'note', items: [{ id: crypto.randomUUID(), paragraph: html }], settings: {} };
  },
  continuar() {
    return { family: 'continue', id: crypto.randomUUID(), type: 'divider', variant: 'continue', settings: { v: 2 },
      items: [{ id: crypto.randomUUID(), type: '', title: 'Continuar', buttonColor: 'brand', completeHint: 'Completa el contenido anterior para seguir.' }] };
  },
  actividades(d) {
    const out = [this.texto('', '<p>Estas dos actividades te ayudan a aplicar lo que viste en el tema. La primera es una práctica guiada en una oficina de ejemplo; la segunda la haces con una tarea real de tu propio cargo, siempre con copias sin datos sensibles.</p>')];
    d.actividades.forEach((a, i) => {
      if (i) out.push(this.continuar());
      out.push(this.titulo(a.titulo));
      for (const s of a.secciones) out.push(s.titulo === 'Cómo se revisa' ? this.nota(`<p><strong>Cómo se revisa</strong></p>${s.html}`) : this.texto(s.titulo, s.html));
    });
    return out;
  },
};
