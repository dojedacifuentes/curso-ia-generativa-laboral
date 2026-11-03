// Auditoría de la guía técnica del SENCE: desde data/sence/guia-tecnica.json arma el Word con la tabla de verdad y su versión
// en Markdown para el repositorio y el panel. El resultado de medir el curso con esa vara está en data/sence/comparacion.json.
//
//   node scripts/sence-auditoria.mjs     escribe entregables/sence/Auditoria-Guia-Tecnica-SENCE.docx y docs/SENCE-TABLA-DE-VERDAD.md
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import JSZip from 'jszip';
import {
  AlignmentType, Bookmark, BorderStyle, Document, Footer, Header, HeadingLevel, ImageRun, InternalHyperlink, LevelFormat, Packer, PageNumber,
  PageOrientation, Paragraph, ShadingType, Tab, Table, TableCell, TableLayoutType, TableRow, TabStopType, TextRun, VerticalAlign, WidthType,
} from 'docx';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rel = (...p) => path.join(RAIZ, ...p);
const G = JSON.parse(fs.readFileSync(rel('data', 'sence', 'guia-tecnica.json'), 'utf8'));
const K = JSON.parse(fs.readFileSync(rel('data', 'sence', 'comparacion.json'), 'utf8'));
const SALIDA = rel('entregables', 'sence', 'Auditoria-Guia-Tecnica-SENCE.docx');

// Marca Empoderatech (scripts/lib/marca.mjs), sin el # que no lleva Word
const C = { noche: '00060F', frambuesa: 'BE3455', grafito: '40444B', celeste: '3D9BE9', grisClaro: 'BFC1C3', grisMedio: '808387', linea: 'DADCDE',
  frambuesaSuave: 'FBEFF2', celesteSuave: 'EEF5FD', grafitoSuave: 'F2F3F4', blanco: 'FFFFFF' };
const TITULAR = 'Varela Round', TEXTO = 'Montserrat';

// Carta, como la guía: vertical con márgenes de 0,75" y horizontal con 0,5"
const ANCHO_V = 12240 - 2 * 1080, ANCHO_H = 15840 - 2 * 720;

const dictamen = f => { const d = K.filas[f.id]; return d ? { resultado: d.r, hallazgo: d.h, arreglos: d.c } : {}; };
G.bloques.forEach(b => { b.filas = b.filas.map(f => ({ ...f, ...dictamen(f) })); });
const FILAS = G.bloques.flatMap(b => b.filas.map(f => ({ ...f, bloque: b.id })));
const comparable = f => !['Afirmación', 'Aclaración'].includes(f.tipo);
const RESULTADOS = ['V', 'P', 'F', 'SD'];
const conteo = filas => Object.fromEntries(RESULTADOS.map(r => [r, filas.filter(f => f.resultado === r).length]));
const COMPARADAS = FILAS.filter(comparable);
const EXCLUYENTES = COMPARADAS.filter(f => f.falso === 'Inadmisible');
const cierra = id => FILAS.filter(f => f.arreglos?.includes(id)).map(f => f.id);
const paginas = s => s.split(/,\s*/).flatMap(p => { const [a, b] = p.split('-').map(Number); return b ? Array.from({ length: b - a + 1 }, (_, i) => a + i) : [a]; });
// «AL-01, AL-02, AL-03» → «AL-01 a AL-03»
function rangos(ids) {
  const out = [];
  let ini = null, fin = null;
  const cerrar = () => { if (ini) out.push(ini === fin ? ini : `${ini} a ${fin}`); };
  for (const id of ids) {
    const [p, n] = id.split('-'), previo = fin?.split('-');
    if (previo && previo[0] === p && Number(previo[1]) + 1 === Number(n)) fin = id;
    else { cerrar(); ini = fin = id; }
  }
  cerrar();
  return out.join(', ');
}
const filasDeSeccion = n => FILAS.filter(f => f.sec.split(/,\s*|\s+y\s+/).includes(n)).map(f => f.id);
const filasDePagina = p => FILAS.filter(f => paginas(f.pag).includes(p)).map(f => f.id);
const seccionesDePagina = p => G.secciones.filter(s => paginas(s.pag).includes(p)).map(s => s.n);
const cuenta = (k, v) => FILAS.filter(f => f[k] === v).length;
const CIFRAS = [
  ['21', 'páginas revisadas'], ['20', 'secciones'], [String(FILAS.length), 'enunciados'], [String(cuenta('falso', 'Inadmisible')), 'excluyentes'],
  [String(G.modelos.length), 'modelos'], [String(G.observaciones.length), `hallazgos (${G.observaciones.filter(o => o.gravedad === 'Alta').length} de gravedad alta)`],
];

// ---------- piezas del Word ----------
const t = (text, o = {}) => new TextRun({ text, ...o });
const p = (text, o = {}) => new Paragraph({ children: [t(text, o.run)], ...o.par });
const parrafo = (children, o = {}) => new Paragraph({ children, ...o });
const h1 = (text, id) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new Bookmark({ id, children: [t(text)] })] });
const h2 = text => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [t(text)] });
const h3 = text => new Paragraph({ heading: HeadingLevel.HEADING_3, children: [t(text)] });
const vineta = (children, ref = 'vinetas') => new Paragraph({ children, numbering: { reference: ref, level: 0 } });
const borde = (color = C.linea, size = 4) => ({ style: BorderStyle.SINGLE, size, color });
const sinBorde = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const bordes = { top: borde(), bottom: borde(), left: borde(), right: borde() };
const bordesNulos = { top: sinBorde, bottom: sinBorde, left: sinBorde, right: sinBorde };

function celda(contenido, ancho, o = {}) {
  const { fondo, tam = 16, color, bold, alinear, vAlign } = o;
  const lineas = Array.isArray(contenido) ? contenido : [contenido];
  return new TableCell({
    width: { size: ancho, type: WidthType.DXA }, borders: o.borders || bordes, columnSpan: o.span,
    margins: { top: 50, bottom: 50, left: 70, right: 70 }, verticalAlign: vAlign,
    shading: fondo ? { type: ShadingType.CLEAR, color: 'auto', fill: fondo } : undefined,
    children: lineas.map(x => x instanceof Paragraph ? x : new Paragraph({
      alignment: alinear, keepNext: o.keepNext, spacing: { after: 0, line: 250 }, children: [t(String(x ?? ''), { size: tam, color, bold })],
    })),
  });
}
function tabla(anchos, cabecera, filas, o = {}) {
  const total = anchos.reduce((s, x) => s + x, 0);
  return new Table({
    width: { size: total, type: WidthType.DXA }, columnWidths: anchos, layout: TableLayoutType.FIXED,
    rows: [
      ...(cabecera ? [new TableRow({ tableHeader: true, cantSplit: true, children: cabecera.map((c, i) => celda(c, anchos[i], { fondo: C.noche, color: C.blanco, bold: true, tam: o.tamCab || 15, keepNext: true })) })] : []),
      ...filas.map(f => new TableRow({ cantSplit: true, children: f })),
    ],
  });
}
const aire = (after = 120) => new Paragraph({ spacing: { after, line: 120 }, children: [] });

function imagen(archivo, ancho) {
  const data = fs.readFileSync(rel('scripts', 'lib', 'marca', archivo));
  const w = data.readUInt32BE(16), h = data.readUInt32BE(20);
  return new ImageRun({ type: 'png', data, transformation: { width: ancho, height: Math.round(ancho * h / w) }, altText: { name: 'Logo e-tech', title: 'Logo e-tech', description: 'Logo de Empoderatech' } });
}

const pie = ancho => new Footer({ children: [new Paragraph({
  tabStops: [{ type: TabStopType.RIGHT, position: ancho }], spacing: { after: 0 },
  // sin el total de páginas: el visor de Drive no lo calcula
  children: [t('e-tech | empoderatech', { size: 14, color: C.grisMedio }), new TextRun({ children: [new Tab(), 'Página ', PageNumber.CURRENT], size: 14, color: C.grisMedio })],
})] });
const cabecera = ancho => new Header({ children: [new Paragraph({
  tabStops: [{ type: TabStopType.RIGHT, position: ancho }], spacing: { after: 120 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: C.linea, space: 4 } },
  children: [t('Guía técnica del SENCE · Auditoría, tabla de verdad y comparación', { size: 14, color: C.grisMedio }), new TextRun({ children: [new Tab(), `Versión ${K.version} · ${K.fecha}`], size: 14, color: C.grisMedio })],
})] });

// ---------- contenido ----------
const INDICE = [['resultado', '1. Resultado de la comparación'], ['decisiones', '2. Decisiones que abren el trabajo'], ['plan', '3. Plan de corrección'], ['fichas', '4. Ficha por aprendizaje esperado'],
  ['metodo', '5. Cómo se comparó'], ['esencial', '6. Lo esencial de la guía'], ['documento', '7. El documento auditado'], ['revision', '8. Cómo revisa el SENCE'], ['destacados', '9. Enunciados destacados'],
  ['modelos', '10. Modelos de la guía'], ['tabla', '11. Tabla de verdad'], ['hallazgos', '12. Hallazgos de la auditoría'], ['cruce', '13. Cruce con la RE 2.484'],
  ['seguimos', '14. Cómo seguimos'], ['anexo', 'Anexo. Cobertura de la auditoría']];

function portada() {
  const banda = new Table({
    width: { size: ANCHO_V, type: WidthType.DXA }, columnWidths: [ANCHO_V], layout: TableLayoutType.FIXED,
    rows: [new TableRow({ children: [new TableCell({
      width: { size: ANCHO_V, type: WidthType.DXA }, borders: bordesNulos, shading: { type: ShadingType.CLEAR, color: 'auto', fill: C.noche },
      margins: { top: 420, bottom: 480, left: 420, right: 420 },
      children: [
        new Paragraph({ spacing: { after: 700 }, children: [imagen('etech-logo-sobre-oscuro-600.png', 150)] }),
        new Paragraph({ spacing: { after: 160, line: 288 }, children: [t('Guía técnica del SENCE', { font: TITULAR, size: 64, color: C.blanco })] }),
        new Paragraph({ spacing: { after: 240, line: 288 }, children: [t('Auditoría, tabla de verdad y comparación con el curso', { font: TITULAR, size: 36, color: C.grisClaro })] }),
        new Paragraph({ spacing: { after: 0 }, children: [t(G.subtitulo, { size: 20, color: C.blanco })] }),
      ],
    })] })],
  });
  return [
    aire(600), banda, aire(240),
    parrafo([t(`Versión ${K.version} · ${K.fecha}`, { bold: true, color: C.frambuesa })], { spacing: { after: 120 } }),
    p(G.aviso, { run: { color: C.grafito } }),
    aire(240),
    parrafo([t('Contenido', { font: TITULAR, size: 28, color: C.noche })], { spacing: { after: 120 } }),
    ...INDICE.map(([id, texto]) => new Paragraph({ spacing: { after: 50 }, children: [new InternalHyperlink({ anchor: id, children: [t(texto, { color: C.grafito })] })] })),
  ];
}

function esencial() {
  const r = G.resumen;
  const ancho = ANCHO_V / CIFRAS.length;
  const cifras = new Table({
    width: { size: ANCHO_V, type: WidthType.DXA }, columnWidths: CIFRAS.map(() => ancho), layout: TableLayoutType.FIXED,
    rows: [new TableRow({ children: CIFRAS.map(([n, txt]) => new TableCell({
      width: { size: ancho, type: WidthType.DXA }, borders: bordesNulos, shading: { type: ShadingType.CLEAR, color: 'auto', fill: C.grafitoSuave },
      margins: { top: 90, bottom: 90, left: 80, right: 50 },
      children: [new Paragraph({ spacing: { after: 20 }, children: [t(n, { font: TITULAR, size: 40, color: C.frambuesa })] }),
        new Paragraph({ spacing: { after: 0, line: 240 }, children: [t(txt, { size: 14, color: C.grafito })] })],
    })) })],
  });
  return [
    h1('6. Lo esencial de la guía', 'esencial'),
    p(r.que_es), p(r.por_que), aire(60), cifras, aire(160),
    h2('Cinco ideas que ordenan todo'),
    ...r.ideas.map(i => vineta([t(`${i.titulo}. `, { bold: true }), t(i.texto)], 'numeros-ideas')),
    aire(60),
    parrafo([t('Alcance. ', { bold: true }), t(r.alcance)]),
  ];
}

function documento() {
  const a = [2300, ANCHO_V - 2300];
  return [
    h1('7. El documento auditado', 'documento'),
    tabla(a, null, G.ficha.map(f => [celda(f.dato, a[0], { bold: true, fondo: C.grafitoSuave }), celda(f.detalle, a[1])])),
    aire(160),
    h2('Lo que la guía no cubre'),
    p('La guía se ocupa de cómo se revisa una solicitud. Estos temas de la RE 2.484 quedan fuera de ella y siguen vigentes; se resumen según la planilla del curso.'),
    tabla([2300, ANCHO_V - 2300], ['Tema', 'Qué anota la planilla'], G.fuera_de_la_guia.map(f => [celda(f.tema, 2300, { bold: true }), celda(f.detalle, ANCHO_V - 2300)])),
  ];
}

function revision() {
  const cel = 2160, fl = 480;
  const fila = (fn, o) => new TableRow({ cantSplit: true, children: G.etapas.flatMap((e, i) => [
    celda(fn(e), cel, { ...o(i), tam: 15, borders: bordesNulos }), ...(i < G.etapas.length - 1 ? [celda(o(i).flecha || '', fl, { borders: bordesNulos, alinear: AlignmentType.CENTER, tam: 28, color: C.frambuesa, vAlign: VerticalAlign.CENTER })] : [])]) });
  const anchos = G.etapas.flatMap((e, i) => i < G.etapas.length - 1 ? [cel, fl] : [cel]);
  const flujo = new Table({
    width: { size: ANCHO_V, type: WidthType.DXA }, columnWidths: anchos, layout: TableLayoutType.FIXED,
    rows: [
      fila(e => e.nombre, () => ({ fondo: C.noche, color: C.blanco, bold: true, flecha: '→' })),
      fila(e => e.pregunta, () => ({ fondo: C.grafitoSuave })),
      fila(e => `Si falla: ${e.si_falla}`, () => ({ fondo: C.frambuesaSuave, color: C.frambuesa, bold: true })),
      fila(e => e.secciones, () => ({ fondo: C.grafitoSuave, color: C.grisMedio })),
    ],
  });
  const d = [1900, 2340, 2500, ANCHO_V - 6740];
  const m = [800, 700, 4380, 1800, ANCHO_V - 7680];
  return [
    h1('8. Cómo revisa el SENCE', 'revision'),
    p('La guía tiene dos etapas: admisibilidad y evaluación técnica. Aquí se muestran en cuatro pasos porque cada uno hace una pregunta distinta, se prepara distinto y falla de forma distinta.'),
    flujo, aire(160),
    h2('Tabla de decisión'),
    p('Es la versión corta de la lógica de la guía: qué ocurre según el resultado de cada bloque de la tabla de verdad.', { par: { keepNext: true } }),
    tabla(d, ['Admisibilidad legal', 'Admisibilidad formal', 'Evaluación técnica', 'Qué ocurre, según la guía'],
      G.decision.map(x => [celda(x.legal, d[0]), celda(x.formal, d[1]), celda(x.tecnica, d[2]), celda(x.resultado, d[3], { bold: true })])),
    new Paragraph({ heading: HeadingLevel.HEADING_2, pageBreakBefore: true, children: [t('Mapa de la guía')] }),
    p('Las 20 secciones y sus subsecciones, con su página, su etapa y las filas de la tabla de verdad que las recogen.'),
    tabla(m, ['Sec.', 'Página', 'Título y tema', 'Etapa', 'Filas'], G.secciones.map(s => [
      celda(s.n, m[0], { bold: true }), celda(s.pag, m[1]),
      celda([new Paragraph({ spacing: { after: 0, line: 250 }, children: [t(s.titulo, { size: 16, bold: true })] }), new Paragraph({ spacing: { after: 0, line: 250 }, children: [t(s.trata, { size: 15, color: C.grafito })] })], m[2]),
      celda(s.etapa, m[3], { tam: 15 }), celda(rangos(filasDeSeccion(s.n)), m[4], { tam: 15 }),
    ])),
  ];
}

function destacados() {
  const tarjeta = (d, i) => new Table({
    width: { size: ANCHO_V, type: WidthType.DXA }, columnWidths: [ANCHO_V], layout: TableLayoutType.FIXED,
    rows: [new TableRow({ cantSplit: true, children: [new TableCell({
      width: { size: ANCHO_V, type: WidthType.DXA }, margins: { top: 110, bottom: 110, left: 170, right: 130 },
      shading: { type: ShadingType.CLEAR, color: 'auto', fill: C.frambuesaSuave },
      borders: { ...bordesNulos, left: { style: BorderStyle.SINGLE, size: 36, color: C.frambuesa } },
      children: [
        new Paragraph({ spacing: { after: 80, line: 270 }, children: [t(`${i + 1}. `, { bold: true, color: C.frambuesa, size: 22 }), t(d.enunciado, { bold: true, size: 22, color: C.noche })] }),
        new Paragraph({ spacing: { after: 60, line: 262 }, children: [t('Por qué importa. ', { bold: true, size: 18 }), t(d.por_que, { size: 18 })] }),
        new Paragraph({ spacing: { after: 60, line: 262 }, children: [t('Qué lo prueba. ', { bold: true, size: 18 }), t(d.prueba, { size: 18 })] }),
        new Paragraph({ spacing: { after: 0 }, children: [t(`Guía, ${d.ref} · Filas ${d.filas}`, { size: 15, color: C.grisMedio })] }),
      ],
    })] })],
  });
  return [
    h1('9. Enunciados destacados', 'destacados'),
    p('Son las afirmaciones que más pesan en la revisión, dichas con palabras propias. Cada una remite a su página de la guía y a sus filas de la tabla de verdad.'),
    ...G.destacados.flatMap((d, i) => [tarjeta(d, i), aire(90)]),
  ];
}

function modelos() {
  const a = [620, 1850, 3560, 2950, ANCHO_V - 8980];
  return [
    h1('10. Modelos de la guía', 'modelos'),
    p('Los ejemplos de la guía, reducidos a su patrón. Sirven para escribir la solicitud y para corregir el aula. La guía aclara que son referenciales: orientan lo que el revisor espera ver, sin ser una obligación literal.'),
    tabla(a, ['N.°', 'Modelo', 'Lo que sí', 'Lo que no', 'Guía'], G.modelos.map(m => [celda(m.id, a[0], { bold: true, color: C.frambuesa }), celda(m.nombre, a[1], { bold: true }), celda(m.formula, a[2]), celda(m.contra, a[3], { color: C.grafito }), celda(m.ref, a[4], { tam: 14, color: C.grisMedio })])),
  ];
}

const LEYENDA = [
  ['Tipo', 'Requisito: lo que debe existir o decirse. Criterio: lo que el SENCE analizará. Límite: lo que no basta o no cuenta. Modelo: patrón tomado de un ejemplo de la guía, que orienta sin obligar al pie de la letra. Aclaración y Afirmación: precisan cómo se lee la guía y no se comparan. Lo que sale solo de un ejemplo va como Modelo si muestra lo que sí y como Límite si muestra lo que no.'],
  ['Dónde', 'Dónde se comprueba. Solicitud: el formulario del SENCE, que hoy se alimenta de la planilla. Aula: Moodle. Ambas: debe estar declarado y además existir en el aula.'],
  ['Si es falso', 'Inadmisible: la revisión termina. Observada, Debe corregirse, Insuficiente, Puede observarse, No se acredita y Faltan antecedentes: las palabras con que la guía lo dice. No lo dice: la guía no escribe la consecuencia; se trata como riesgo de observación.'],
  ['V/F', 'V: verdadero, con evidencia que se pueda abrir. P: parcial. F: falso. SD: sin datos para juzgar. La sección 5 trae las reglas.'],
  ['Arreglo', 'Código de la corrección que cierra la fila, en el plan de la sección 3.'],
];
const colorResultado = r => ({ V: { fondo: C.celesteSuave, color: C.celeste }, P: { fondo: C.grafitoSuave, color: C.grafito }, F: { fondo: C.frambuesaSuave, color: C.frambuesa }, SD: { color: C.grisMedio } })[r] || {};
function tablaBloque(b) {
  if (b.id === 'PR') {
    const a = [760, 1100, ANCHO_H - 1860];
    return tabla(a, ['Fila', 'Sección · pág.', 'Afirmación'], b.filas.map(f => [celda(f.id, a[0], { bold: true, color: C.frambuesa, tam: 15 }), celda(`${f.sec} · p. ${f.pag}`, a[1], { tam: 14 }), celda(f.enunciado, a[2])]));
  }
  const a = [720, 900, 3620, 760, 760, 1000, 500, 5300, 840];
  const consecuencia = f => {
    if (f.falso === 'Inadmisible') return { fondo: C.frambuesaSuave, color: C.frambuesa, bold: true };
    if (f.falso === 'No lo dice' || f.falso === '—') return { color: C.grisMedio };
    return { color: C.noche, bold: true };
  };
  return tabla(a, ['Fila', 'Sección · pág.', 'Enunciado que debe ser verdadero', 'Tipo', 'Dónde', 'Si es falso', 'V/F', 'Hallazgo y evidencia', 'Arreglo'],
    b.filas.map(f => [
      celda(f.id, a[0], { bold: true, color: C.frambuesa, tam: 15 }), celda(`${f.sec} · p. ${f.pag}`, a[1], { tam: 14 }), celda(f.enunciado, a[2], { tam: 15 }), celda(f.tipo, a[3], { tam: 14 }),
      celda(f.donde, a[4], { tam: 14 }), celda(f.falso, a[5], { tam: 14, ...consecuencia(f) }),
      celda(comparable(f) ? (f.resultado || '') : '—', a[6], { alinear: AlignmentType.CENTER, bold: true, ...(comparable(f) ? colorResultado(f.resultado) : { fondo: C.grafitoSuave }) }),
      celda(f.hallazgo || '', a[7], { tam: 15, fondo: comparable(f) ? undefined : C.grafitoSuave }),
      celda((f.arreglos || []).join(', '), a[8], { tam: 13, color: C.grafito, fondo: comparable(f) ? undefined : C.grafitoSuave }),
    ]));
}
function tablaVerdad() {
  const a = [1500, ANCHO_H - 1500];
  return [
    h1('11. Tabla de verdad', 'tabla'),
    p(`Cada fila es una afirmación que debe ser verdadera para que el curso resista la revisión del SENCE: ${FILAS.length} enunciados en ${G.bloques.length} bloques, con su sección y página. ${COMPARADAS.length} se compararon con el curso el ${K.fecha}; los demás explican cómo leer la guía. Lo que prueba cada fila está en la versión del repositorio.`),
    tabla(a, null, LEYENDA.map(([k, v]) => [celda(k, a[0], { bold: true, fondo: C.grafitoSuave, tam: 15 }), celda(v, a[1], { tam: 15 })])),
    aire(120),
    ...G.bloques.flatMap(b => [
      h2(`${b.id} · ${b.titulo}`),
      parrafo([t(`Secciones ${b.secciones} · ${b.filas.length} filas. `, { size: 16, color: C.grisMedio }), t('Por qué importa. ', { bold: true, size: 17 }), t(b.por_que, { size: 17 })], { keepNext: true, spacing: { after: 90, line: 262 } }),
      tablaBloque(b), aire(140),
    ]),
  ];
}

function hallazgos() {
  const a = [600, 880, 4760, ANCHO_V - 6240];
  const color = g => ({ Alta: { fondo: C.frambuesaSuave, color: C.frambuesa, bold: true }, Media: { bold: true }, Baja: { color: C.grisMedio } })[g];
  return [
    h1('12. Hallazgos de la auditoría', 'hallazgos'),
    p('Lo que la guía deja abierto, lo que no calza dentro de ella y lo que conviene confirmar. No son fallas del curso: son puntos donde la vara misma necesita una decisión o una consulta.'),
    tabla(a, ['N.°', 'Gravedad', 'Hallazgo', 'Qué hacer'], G.observaciones.map(o => [
      celda(o.id, a[0], { bold: true, color: C.frambuesa }), celda(o.gravedad, a[1], { tam: 15, ...color(o.gravedad) }),
      celda([new Paragraph({ spacing: { after: 30, line: 250 }, children: [t(o.tema, { size: 16, bold: true })] }), new Paragraph({ spacing: { after: 30, line: 250 }, children: [t(o.hallazgo, { size: 16 })] }),
        new Paragraph({ spacing: { after: 0 }, children: [t(o.ref, { size: 14, color: C.grisMedio })] })], a[2]),
      celda(o.accion, a[3]),
    ])),
  ];
}

function cruce() {
  const a = [1000, 1800, 900, ANCHO_V - 3700];
  return [
    h1('13. Cruce con la RE 2.484', 'cruce'),
    p('La guía sigue casi uno a uno la resolución. Este cruce se armó con la hoja «Cumplimiento RE 2484» de la planilla, que resume la resolución: para esta auditoría no se volvió a leer su texto completo. Sirve para actualizar esa hoja después de comparar.'),
    tabla(a, ['Guía', 'RE 2.484', 'Fila de la hoja', 'Qué agrega la guía a lo que teníamos anotado'], G.cruce.map(c => [celda(c.guia, a[0], { bold: true }), celda(c.re, a[1]), celda(c.fila, a[2]), celda(c.agrega, a[3])])),
  ];
}

function seguimos() {
  return [
    h1('14. Cómo seguimos', 'seguimos'),
    p('La tabla de verdad es la vara. El curso ya se midió con ella: lo que sigue es decidir, corregir y volver a medir.'),
    ...G.pasos.map(x => vineta([t(`${x.titulo}. `, { bold: true }), t(x.texto), ...(K.pasos_hechos.includes(x.titulo) ? [t(` Hecho el ${K.fecha}.`, { bold: true, color: C.frambuesa })] : [])], 'numeros-pasos')),
    aire(120),
    h2('La ficha por aprendizaje esperado'),
    p('Reúne en un solo lugar lo que la guía pide reconstruir. Sale de los modelos M-07, M-09, M-11 y M-12.'),
    ...G.ficha_ae.map(x => vineta([t(x)])),
  ];
}

function anexo() {
  const a = [800, 2000, ANCHO_V - 2800];
  return [
    h1('Anexo. Cobertura de la auditoría', 'anexo'),
    p('Comprobación de que la auditoría recorrió toda la guía: cada página con sus secciones y sus filas. Antes de cerrarla, la tabla se contrastó de forma independiente con el texto de la guía, y esa revisión agregó filas y corrigió consecuencias y matices.'),
    tabla(a, ['Página', 'Secciones', 'Filas'], Array.from({ length: 21 }, (_, i) => i + 1).map(n => [
      celda(String(n), a[0], { bold: true }), celda(n < 3 ? 'Índice' : seccionesDePagina(n).join(', '), a[1]), celda(n < 3 ? 'Revisado: ver O-16 y O-18' : rangos(filasDePagina(n)), a[2], { tam: 15 }),
    ])),
  ];
}

// ---------- comparación con el curso ----------
function resultado() {
  const total = conteo(COMPARADAS), excl = conteo(EXCLUYENTES);
  const cifras = [[String(total.V), 'verdaderas'], [String(total.P), 'parciales'], [String(total.F), 'falsas'], [String(total.SD), 'sin datos'], [`${excl.F} de ${EXCLUYENTES.length}`, 'excluyentes falsas']];
  const ancho = ANCHO_V / cifras.length;
  const tarjetas = new Table({
    width: { size: ANCHO_V, type: WidthType.DXA }, columnWidths: cifras.map(() => ancho), layout: TableLayoutType.FIXED,
    rows: [new TableRow({ children: cifras.map(([n, txt]) => new TableCell({
      width: { size: ancho, type: WidthType.DXA }, borders: bordesNulos, shading: { type: ShadingType.CLEAR, color: 'auto', fill: C.grafitoSuave },
      margins: { top: 90, bottom: 90, left: 80, right: 50 },
      children: [new Paragraph({ spacing: { after: 20 }, children: [t(n, { font: TITULAR, size: 40, color: C.frambuesa })] }),
        new Paragraph({ spacing: { after: 0, line: 240 }, children: [t(txt, { size: 15, color: C.grafito })] })],
    })) })],
  });
  const a = [3700, 900, 900, 900, 900, ANCHO_V - 7300];
  const bloques = G.bloques.filter(b => b.filas.some(comparable)).map(b => {
    const filas = b.filas.filter(comparable), c = conteo(filas);
    const num = (r, o) => celda(c[r] ? String(c[r]) : '·', o, { alinear: AlignmentType.CENTER, bold: !!c[r], ...(c[r] ? colorResultado(r) : { color: C.grisClaro }) });
    return [celda(`${b.id} · ${b.titulo}`, a[0], { bold: true }), num('V', a[1]), num('P', a[2]), num('F', a[3]), num('SD', a[4]), celda(String(filas.length), a[5], { alinear: AlignmentType.CENTER })];
  });
  const f = [2300, 5300, ANCHO_V - 7600];
  const g = [460, 2500, 4560, 1180, ANCHO_V - 8700];
  const color = c => c === 'Inadmisible' ? { fondo: C.frambuesaSuave, color: C.frambuesa, bold: true } : {};
  return [
    h1('1. Resultado de la comparación', 'resultado'),
    new Paragraph({ spacing: { after: 140, line: 288 }, children: [t(K.resumen.titular, { font: TITULAR, size: 28, color: C.noche })] }),
    ...K.resumen.lectura.map(x => p(x)),
    aire(60), tarjetas, aire(160),
    p(`Resultado de medir el curso con las ${COMPARADAS.length} filas comparables de la tabla de verdad, con el aula tal como estaba el ${K.fecha}. Moodle no se modificó: esto es un diagnóstico.`),
    h2('Resultado por bloque'),
    tabla(a, ['Bloque', 'V', 'P', 'F', 'SD', 'Filas'], bloques),
    aire(160),
    h2('Las diez brechas'),
    p('Ordenadas por lo que más arriesga la aprobación. Cada una remite a sus filas de la tabla de verdad y a su corrección.', { par: { keepNext: true } }),
    tabla(g, ['N.°', 'Brecha', 'Qué pasa', 'Si es falso', 'Filas y arreglo'], K.resumen.brechas.map(x => [
      celda(String(x.n), g[0], { bold: true, color: C.frambuesa }), celda(x.tema, g[1], { bold: true }), celda(x.detalle, g[2]), celda(x.consecuencia, g[3], { tam: 14, ...color(x.consecuencia) }),
      celda([new Paragraph({ spacing: { after: 30, line: 240 }, children: [t(x.filas, { size: 14, color: C.grafito })] }), new Paragraph({ spacing: { after: 0, line: 240 }, children: [t(x.arreglo, { size: 15, bold: true, color: C.frambuesa })] })], g[4]),
    ])),
    aire(160),
    h2('Lo que ya está bien'),
    tabla(f, ['Tema', 'Qué se comprobó', 'Filas'], K.resumen.fortalezas.map(x => [celda(x.tema, f[0], { bold: true }), celda(x.detalle, f[1]), celda(x.filas, f[2], { tam: 14, color: C.grafito })])),
  ];
}

function decisiones() {
  const a = [640, 3000, 4480, ANCHO_V - 8120];
  return [
    h1('2. Decisiones que abren el trabajo', 'decisiones'),
    p('Ninguna corrección de fondo se puede cerrar sin estas decisiones. Cada una trae una recomendación para discutir con Natalia.', { par: { keepNext: true } }),
    tabla(a, ['N.°', 'Pregunta', 'Recomendación', 'Abre'], K.decisiones.map(d => [
      celda(d.id, a[0], { bold: true, color: C.frambuesa }),
      celda([new Paragraph({ spacing: { after: 30, line: 250 }, children: [t(d.tema, { size: 16, bold: true })] }), new Paragraph({ spacing: { after: 0, line: 250 }, children: [t(d.pregunta, { size: 16 })] })], a[1]),
      celda([new Paragraph({ spacing: { after: 30, line: 250 }, children: [t(d.recomendacion, { size: 16 })] }), new Paragraph({ spacing: { after: 0 }, children: [t(`Quién: ${d.quien} · ${d.ref}`, { size: 14, color: C.grisMedio })] })], a[2]),
      celda(d.abre, a[3], { tam: 15, bold: true }),
    ])),
  ];
}

function plan() {
  const a = [640, 620, 5280, ANCHO_V - 6540];
  const grupos = [...new Set(K.correcciones.map(c => c.grupo))];
  return [
    h1('3. Plan de corrección', 'plan'),
    p('Es el plan para corregir el aula y la solicitud. Nada de esto está aplicado. Prioridad 1: frena la admisibilidad o de ella depende el resto. Prioridad 2: pesa en la evaluación técnica. Prioridad 3: orden.'),
    parrafo([t('Orden de trabajo. ', { bold: true }), t(`${K.orden.join(' → ')}. El resto se puede hacer en paralelo.`)]),
    ...grupos.flatMap(grupo => [
      h2(grupo),
      tabla(a, ['N.°', 'Prior.', 'Qué hacer', 'Dónde y qué cierra'], K.correcciones.filter(c => c.grupo === grupo).map(c => [
        celda(c.id, a[0], { bold: true, color: C.frambuesa }), celda(String(c.prioridad), a[1], { alinear: AlignmentType.CENTER, bold: true, ...(c.prioridad === 1 ? { fondo: C.frambuesaSuave, color: C.frambuesa } : {}) }),
        celda([new Paragraph({ spacing: { after: 30, line: 250 }, children: [t(c.tema, { size: 16, bold: true })] }), new Paragraph({ spacing: { after: 0, line: 250 }, children: [t(c.que, { size: 16 })] })], a[2]),
        celda([new Paragraph({ spacing: { after: 30, line: 240 }, children: [t(c.donde, { size: 14 })] }),
          ...(c.depende ? [new Paragraph({ spacing: { after: 30, line: 240 }, children: [t(`Depende de: ${c.depende}`, { size: 14, bold: true })] })] : []),
          new Paragraph({ spacing: { after: 0, line: 240 }, children: [t(`Cierra: ${rangos(cierra(c.id))}`, { size: 14, color: C.grafito })] })], a[3]),
      ])),
      aire(120),
    ]),
  ];
}

// La ficha reconstruye, para cada aprendizaje esperado, qué lo mide y cuánto pesa, desde los archivos del curso
function fichaAE() {
  const J = (...r) => JSON.parse(fs.readFileSync(rel(...r), 'utf8'));
  const curso = J('data', 'curso.json');
  const finales = J('evaluaciones', 'Final.json').casos.flatMap(x => x.items);
  const casos = fs.readdirSync(rel('casos')).filter(f => /^M\d-C\d\.md$/.test(f)).map(f => {
    const linea = /\*\*Aprendizajes esperados que trabaja:\*\*\s*(.+)/.exec(fs.readFileSync(rel('casos', f), 'utf8'))?.[1] || '';
    return { id: f.slice(0, 5), aes: [...linea.matchAll(/M\d-AE\d/g)].map(x => x[0]) };
  });
  return curso.modulos.flatMap(m => {
    const items = J('evaluaciones', `M${m.n}.json`).items, deModulo = casos.filter(c => c.id.startsWith(`M${m.n}`));
    return m.aes.map(a => {
      const enCaso = casos.filter(c => c.aes.includes(a.id));
      const nMod = items.filter(i => i.ae === a.id).length, nFin = finales.filter(i => i.ae === a.id).length;
      const rubrica = m.n === 6 ? 5 / m.aes.length : enCaso.reduce((s, c) => s + (5 / deModulo.length) / c.aes.length, 0);
      return { id: a.id, verbo: a.texto.split(' ')[0], bloom: a.bloom, nMod, nFin, seleccion: 5 * nMod / items.length + 40 * nFin / finales.length, rubrica, minutos: a.pantallas * 7.5 + 15, ...K.ae.find(x => x.id === a.id) };
    });
  });
}
const FICHA = fichaAE();
const pct = n => `${n.toFixed(1).replace('.', ',')} %`;

function fichas() {
  const a = [860, 1560, 800, 900, 900, 880, 1520, 860, ANCHO_H - 8280];
  const llega = { No: { fondo: C.frambuesaSuave, color: C.frambuesa, bold: true }, 'En parte': { fondo: C.grafitoSuave, bold: true } };
  return [
    h1('4. Ficha por aprendizaje esperado', 'fichas'),
    p(`La guía pide poder reconstruir, para cada aprendizaje esperado, su evidencia, instrumento, criterio, ponderación y aprobación. Esta ficha lo hace con lo que existe hoy. En ${K.ae.filter(x => x.llega === 'No').length} de 22 el producto que pide el verbo no llega al docente y en ${K.ae.filter(x => x.llega === 'En parte').length} llega en parte. El peso sale de repartir cada evaluación por sus ítems y cada caso por sus aprendizajes; los minutos directos son Rise y quiz de la planilla.`),
    tabla(a, ['AE', 'Verbo y nivel', 'Ítems con nota', 'Peso selección', 'Peso rúbrica', '¿Llega el producto?', 'Docente interviene en', 'Min. directos', 'Qué falta'], FICHA.map(x => [
      celda(x.id, a[0], { bold: true, color: C.frambuesa, tam: 15 }), celda(`${x.verbo} · ${x.bloom}`, a[1], { tam: 15 }), celda(`${x.nMod} + ${x.nFin}`, a[2], { alinear: AlignmentType.CENTER }),
      celda(pct(x.seleccion), a[3], { alinear: AlignmentType.CENTER, tam: 15 }), celda(pct(x.rubrica), a[4], { alinear: AlignmentType.CENTER, tam: 15 }), celda(x.llega, a[5], { alinear: AlignmentType.CENTER, tam: 15, ...llega[x.llega] }),
      celda(x.facilitador, a[6], { tam: 15, ...(x.facilitador === 'No' ? { color: C.frambuesa, bold: true } : {}) }), celda(String(x.minutos).replace('.', ','), a[7], { alinear: AlignmentType.CENTER, tam: 15 }), celda(x.falta, a[8], { tam: 15 }),
    ])),
  ];
}

function metodo() {
  const a = [2700, 3500, ANCHO_V - 6200];
  const h = [800, 1000, 1400, ANCHO_V - 3200];
  return [
    h1('5. Cómo se comparó', 'metodo'),
    h2('Fuentes'), ...K.metodo.fuentes.map(x => vineta([t(x)])),
    h2('Reglas de la comparación'), ...K.metodo.reglas.map(x => vineta([t(x)], 'numeros-reglas')),
    h2('Horas por módulo'),
    p('La planilla sigue sumando 88 horas. Sin el caso que salió del aula su suma da 86,5 h, pero ese no es el tiempo real del curso: faltan minutos en prácticas, infografías, diagnósticas y foro general, y el Rise usa una tarifa plana sin piloto.'),
    tabla(h, ['Módulo', 'Planilla', 'Sin M4-C3', 'Qué no cuadra'], K.horas.map(x => [celda(x.modulo, h[0], { bold: true }), celda(String(x.planilla), h[1], { alinear: AlignmentType.CENTER }),
      celda(String(x.sin_caso_retirado), h[2], { alinear: AlignmentType.CENTER, ...(x.planilla !== x.sin_caso_retirado ? { fondo: C.frambuesaSuave, color: C.frambuesa, bold: true } : {}) }), celda(x.nota, h[3])])),
    aire(140),
    h2('Anotaciones nuestras que esta comparación corrige'),
    tabla(a, ['Dónde', 'Qué decía', 'Qué es cierto'], K.anotaciones_corregidas.map(x => [celda(x.donde, a[0], { tam: 15 }), celda(x.decia, a[1]), celda(x.real, a[2], { bold: true })])),
  ];
}

// ---------- documento ----------
const pagina = (orientacion, margen) => ({ page: { size: { width: 12240, height: 15840, orientation: orientacion }, margin: { top: margen === 720 ? 860 : 1080, bottom: 800, left: margen, right: margen, header: 400, footer: 360 } } });
const seccion = (children, orientacion, margen, ancho) => ({ properties: pagina(orientacion, margen), headers: { default: cabecera(ancho) }, footers: { default: pie(ancho) }, children });
const numerada = reference => ({ reference, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 360 } } } }] });

const doc = new Document({
  creator: 'Empoderatech', title: `${G.titulo} · ${G.subtitulo}`, description: 'Auditoría de la guía técnica del SENCE y tabla de verdad para la fase 2 del curso',
  styles: {
    default: {
      document: { run: { font: TEXTO, size: 20, color: C.noche }, paragraph: { spacing: { after: 120, line: 276 } } },
      heading1: { run: { font: TITULAR, size: 36, color: C.frambuesa }, paragraph: { spacing: { before: 360, after: 140 }, keepNext: true } },
      heading2: { run: { font: TITULAR, size: 26, color: C.noche }, paragraph: { spacing: { before: 200, after: 90 }, keepNext: true } },
      heading3: { run: { font: TEXTO, size: 21, bold: true, color: C.grafito }, paragraph: { spacing: { before: 140, after: 60 }, keepNext: true } },
    },
  },
  numbering: { config: [
    { reference: 'vinetas', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 340, hanging: 240 } } } }] },
    numerada('numeros-ideas'), numerada('numeros-pasos'), numerada('numeros-reglas'),
  ] },
  sections: [
    seccion([...portada()], PageOrientation.PORTRAIT, 1080, ANCHO_V),
    seccion([...resultado(), ...decisiones(), ...plan()], PageOrientation.PORTRAIT, 1080, ANCHO_V),
    seccion(fichas(), PageOrientation.LANDSCAPE, 720, ANCHO_H),
    seccion([...metodo(), ...esencial(), ...documento(), ...revision(), ...destacados(), ...modelos()], PageOrientation.PORTRAIT, 1080, ANCHO_V),
    seccion(tablaVerdad(), PageOrientation.LANDSCAPE, 720, ANCHO_H),
    seccion([...hallazgos(), ...cruce(), ...seguimos(), ...anexo()], PageOrientation.PORTRAIT, 1080, ANCHO_V),
  ],
});

// Tres ajustes al paquete: Word sin Montserrat o Varela Round debe caer en Arial y no en una serifa (tabla de fuentes); cada marcador
// necesita su propio id (docx los repite); y Word 2007, el de este PC, no abre un documento con el atributo title en la imagen
async function ajustarPaquete(buffer) {
  const zip = await JSZip.loadAsync(buffer);
  let n = 0;
  const cuerpo = (await zip.file('word/document.xml').async('string'))
    .replace(/(<wp:docPr [^>]*?) title="[^"]*"/g, '$1')
    .replace(/(<w:bookmarkStart [^>]*?w:id=")\d+("\/>)(.*?<w:bookmarkEnd w:id=")\d+("\/>)/g, (m, i, f, medio, fin) => { n++; return `${i}${n}${f}${medio}${n}${fin}`; });
  zip.file('word/document.xml', cuerpo);
  const fuente = n => `<w:font w:name="${n}"><w:altName w:val="Arial"/><w:panose1 w:val="020B0604020202020204"/><w:charset w:val="00"/><w:family w:val="swiss"/><w:pitch w:val="variable"/></w:font>`;
  const archivo = zip.file('word/fontTable.xml');
  const xml = archivo ? await archivo.async('string') : '';
  const fuentes = fuente(TEXTO) + fuente(TITULAR);
  zip.file('word/fontTable.xml', /<\/w:fonts>/.test(xml) ? xml.replace('</w:fonts>', `${fuentes}</w:fonts>`)
    : xml.replace(/<w:fonts([^>]*)\/>/, `<w:fonts$1>${fuentes}</w:fonts>`));
  return zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
}

fs.mkdirSync(path.dirname(SALIDA), { recursive: true });
fs.writeFileSync(SALIDA, await ajustarPaquete(await Packer.toBuffer(doc)));

// ---------- versión en Markdown (repositorio y panel) ----------
const celdaMd = s => String(s ?? '').replace(/\|/g, '/');
const fila = c => `| ${c.map(celdaMd).join(' | ')} |`;
const tablaMd = (cab, filas) => [fila(cab), fila(cab.map(() => '---')), ...filas.map(fila)].join('\n');
const md = [
  `# ${G.titulo}`, '',
  `> Versión ${K.version} del ${K.fecha}. Generado con \`node scripts/sence-auditoria.mjs\` desde \`data/sence/guia-tecnica.json\` y \`data/sence/comparacion.json\`: se corrige allá, no aquí. El Word está en \`entregables/sence/\`.`, '',
  G.aviso, '',
  '## Resultado de la comparación', '', `**${K.resumen.titular}**`, '', ...K.resumen.lectura.flatMap(x => [x, '']),
  `De ${COMPARADAS.length} filas comparables: ${conteo(COMPARADAS).V} verdaderas, ${conteo(COMPARADAS).P} parciales, ${conteo(COMPARADAS).F} falsas y ${conteo(COMPARADAS).SD} sin datos. De las ${EXCLUYENTES.length} excluyentes, ${conteo(EXCLUYENTES).F} son falsas. Moodle no se modificó.`, '',
  tablaMd(['Bloque', 'V', 'P', 'F', 'SD', 'Filas'], G.bloques.filter(b => b.filas.some(comparable)).map(b => { const l = b.filas.filter(comparable), c = conteo(l); return [`${b.id} · ${b.titulo}`, c.V, c.P, c.F, c.SD, l.length]; })), '',
  '### Las diez brechas', '', tablaMd(['N.°', 'Brecha', 'Qué pasa', 'Si es falso', 'Filas', 'Arreglo'], K.resumen.brechas.map(x => [x.n, x.tema, x.detalle, x.consecuencia, x.filas, x.arreglo])), '',
  '### Lo que ya está bien', '', tablaMd(['Tema', 'Qué se comprobó', 'Filas'], K.resumen.fortalezas.map(x => [x.tema, x.detalle, x.filas])), '',
  '## Decisiones que abren el trabajo', '', tablaMd(['N.°', 'Tema', 'Pregunta', 'Recomendación', 'Quién', 'Abre', 'Referencia'], K.decisiones.map(d => [d.id, d.tema, d.pregunta, d.recomendacion, d.quien, d.abre, d.ref])), '',
  '## Plan de corrección', '', 'Nada de esto está aplicado.', '', `**Orden de trabajo:** ${K.orden.join(' → ')}.`, '',
  tablaMd(['N.°', 'Grupo', 'Prior.', 'Tema', 'Qué hacer', 'Dónde', 'Depende de', 'Cierra'], K.correcciones.map(c => [c.id, c.grupo, c.prioridad, c.tema, c.que, c.donde, c.depende || ' ', rangos(cierra(c.id)) || ' '])), '',
  '## Ficha por aprendizaje esperado', '', tablaMd(['AE', 'Verbo', 'Nivel', 'Ítems', 'Peso selección', 'Peso rúbrica', '¿Llega el producto?', 'Docente interviene en', 'Min. directos', 'Qué falta'], FICHA.map(x => [x.id, x.verbo, x.bloom, `${x.nMod} + ${x.nFin}`, pct(x.seleccion), pct(x.rubrica), x.llega, x.facilitador, x.minutos, x.falta])), '',
  '## Cómo se comparó', '', ...K.metodo.fuentes.map(x => `- ${x}`), '', ...K.metodo.reglas.map((x, i) => `${i + 1}. ${x}`), '',
  '### Anotaciones nuestras que esta comparación corrige', '', tablaMd(['Dónde', 'Qué decía', 'Qué es cierto'], K.anotaciones_corregidas.map(x => [x.donde, x.decia, x.real])), '',
  '## La guía', '', G.resumen.que_es, '', G.resumen.por_que, '', `**Alcance.** ${G.resumen.alcance}`, '',
  `${FILAS.length} enunciados en ${G.bloques.length} bloques: ${FILAS.filter(comparable).length} se comparan con el curso y ${cuenta('falso', 'Inadmisible')} son excluyentes. ${G.modelos.length} modelos y ${G.observaciones.length} hallazgos.`, '',
  '## Cómo leer la tabla', '', ...LEYENDA.map(([k, v]) => `- **${k}.** ${v}`), '',
  '## Enunciados destacados', '',
  ...G.destacados.flatMap((d, i) => [`${i + 1}. **${d.enunciado}** ${d.por_que} *Qué lo prueba:* ${d.prueba} *(Guía, ${d.ref}; filas ${d.filas}.)*`]), '',
  '## Tabla de verdad', '',
  ...G.bloques.flatMap(b => [`### ${b.id} · ${b.titulo}`, '', `Secciones ${b.secciones}. ${b.por_que}`, '',
    tablaMd(['Fila', 'Sección', 'Pág.', 'Enunciado que debe ser verdadero', 'Tipo', 'Dónde', 'Si es falso', 'Qué lo prueba', 'V/F', 'Hallazgo y evidencia', 'Arreglo'],
      b.filas.map(f => [f.id, f.sec, f.pag, f.enunciado, f.tipo, f.donde, f.falso, f.prueba, comparable(f) ? (f.resultado || ' ') : '—', f.hallazgo || ' ', (f.arreglos || []).join(', ') || ' '])), '']),
  '## Modelos de la guía', '', tablaMd(['N.°', 'Modelo', 'Lo que sí', 'Lo que no', 'Guía'], G.modelos.map(m => [m.id, m.nombre, m.formula, m.contra, m.ref])), '',
  '## Hallazgos de la auditoría', '', tablaMd(['N.°', 'Gravedad', 'Tema', 'Hallazgo', 'Qué hacer', 'Referencia'], G.observaciones.map(o => [o.id, o.gravedad, o.tema, o.hallazgo, o.accion, o.ref])), '',
  '## Cruce con la RE 2.484', '', 'Armado con la hoja «Cumplimiento RE 2484» de la planilla, que resume la resolución.', '',
  tablaMd(['Guía', 'RE 2.484', 'Fila de la hoja', 'Qué agrega la guía'], G.cruce.map(c => [c.guia, c.re, c.fila, c.agrega])), '',
].join('\n');
fs.writeFileSync(rel('docs', 'SENCE-TABLA-DE-VERDAD.md'), md);

console.log(`✓ ${path.relative(RAIZ, SALIDA)} (${Math.round(fs.statSync(SALIDA).size / 1024)} KB) y docs/SENCE-TABLA-DE-VERDAD.md · ${FILAS.length} enunciados, ${G.modelos.length} modelos, ${G.observaciones.length} hallazgos`);
