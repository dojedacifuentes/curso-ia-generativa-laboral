import fs from 'node:fs';
const f = process.argv[2];
let s = fs.readFileSync(f, 'utf8');
const cambios = [
  ['Plantilla del quiz gamificado del módulo 2 (npm run quiz-juego).', 'Plantilla del quiz juego formativo por aprendizaje esperado (node scripts/quiz-juego.mjs).'],
  ['Mecánica: 5 niveles,', 'Mecánica: un nivel por pregunta (8),'],
  ['Misión · ${esc(D.curso)} · Módulo 2 · Quiz ${D.quiz}', 'Misión · Módulo ${D.modulo} · ${esc(D.curso)}'],
  ['de oro con ${N} estrellas, de plata con 3 o 4, de bronce con menos.', 'de oro con ${N} estrellas, de plata con ${PLATA} o más, de bronce con menos.'],
  ["const medalla = e === N ? 'oro' : e >= 3 ? 'plata' : 'bronce';", "const medalla = e === N ? 'oro' : e >= PLATA ? 'plata' : 'bronce';"],
  ['  const N = D.preguntas.length;', '  const N = D.preguntas.length;\n  const PLATA = Math.ceil(N * 0.6);       // plata desde el 60 % de estrellas'],
  ['      <p class="retro-texto">${esc(p.retro)}</p>\n      <div class="acciones">',
   '      <p class="retro-texto">${esc(p.retro)}</p>\n      ${p.remite ? `<p class="retro-lbl">// ${acierto ? \'Para profundizar\' : \'Repasa\'}</p><p class="retro-texto">${esc(p.remite)}</p>` : \'\'}\n      <div class="acciones">'],
  ['${D.curso} · ${D.cursoNombre} · Módulo 2 · Quiz formativo, sin nota', '${D.cursoNombre} · Módulo ${D.modulo} · ${D.curso} · Quiz formativo, sin nota'],
  ['<text x="78" y="27" text-anchor="middle" class="h-sub" style="fill:var(--acento2)">DEPURAR</text>', '<text x="78" y="27" text-anchor="middle" class="h-sub" style="fill:var(--acento2)">${esc((H.sello || \'REVISAR\').toUpperCase())}</text>'],
];
for (const [a, b] of cambios) { if (!s.includes(a)) throw new Error('No encontré: ' + a.slice(0, 70)); s = s.replace(a, b); }
fs.writeFileSync(f, s);
console.log(cambios.length + ' cambios');
