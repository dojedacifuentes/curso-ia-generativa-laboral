// Registro único de referencias en APA 7: investigacion/referencias-apa.json (id → cita en el texto y referencia con enlace).
// Lo usan el contenido base, los casos, las actividades y los compiladores, para que todos citen igual (criterios del 29-10).
//
//   node scripts/referencias-apa.mjs --borrador   crea o completa el registro con un borrador para cada fuente citada que falte
//   node scripts/referencias-apa.mjs              revisa el registro: que cada fuente citada tenga su entrada completa
//   node scripts/referencias-apa.mjs --escribir   reescribe «## Referencias bibliográficas» de contenidos, casos y actividades
//
// Campos de cada entrada: autor (como va en la lista), autorCita (como va en el texto: «UNESCO», «Miao y Holmes»), anio ("2024",
// "2024, 14 de marzo" o "s. f."), titulo, sitio (se omite si es igual al autor), url y revisada (true cuando quedó en APA 7).
// En el texto se cita con marcas que resuelve citas() al compilar: [@F-M1-02] → (UNESCO, 2024); [@F-M1-02; @F-H-12] → dos
// citas; [n@F-M1-02] → UNESCO (2024). Las letras de APA para mismo autor y año (s. f.-a, s. f.-b) se asignan por documento.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ARCHIVO = path.join(RAIZ, 'investigacion', 'referencias-apa.json');
const leer = f => fs.readFileSync(f, 'utf8');
const listar = d => fs.existsSync(d) ? fs.readdirSync(d).filter(f => f.endsWith('.md')).map(f => path.join(d, f)) : [];

// Fuentes citadas en lo que ve el estudiante
export function citadas() {
  const ids = new Set();
  const textos = [
    ...fs.readdirSync(path.join(RAIZ, 'contenido')).flatMap(m => listar(path.join(RAIZ, 'contenido', m))),
    ...listar(path.join(RAIZ, 'casos')), ...listar(path.join(RAIZ, 'actividades')),
  ];
  for (const f of textos) {
    const t = leer(f);
    for (const m of t.matchAll(/^fuentes:[ \t]*(.+)$/gm)) m[1].split(/,\s*/).filter(Boolean).forEach(i => ids.add(i.trim()));
    for (const m of t.matchAll(/\[n?@([^\]]+)\]/g)) m[1].split(/;\s*@?/).forEach(i => ids.add(i.replace(/^@/, '').trim()));
  }
  return [...ids].sort();
}

// Lo que dice el registro de investigación sobre cada fuente
function registro() {
  const out = {};
  for (const f of [...listar(path.join(RAIZ, 'investigacion')), ...listar(path.join(RAIZ, 'investigacion', 'casos'))]) {
    for (const b of leer(f).split(/^### /m).slice(1)) {
      const m = /^(F-[A-Z0-9]+-\d+)\s+·\s+(.+)$/m.exec(b);
      if (!m) continue;
      const campo = n => new RegExp(`^- ${n}:\\s*(.+)$`, 'mi').exec(b)?.[1]?.trim() || '';
      out[m[1]] = { cabecera: m[2].trim(), url: (campo('URL').match(/https?:\/\/\S+/) || [''])[0].replace(/[).,;]+$/, ''), fecha: campo('Fecha de publicación') || campo('Fecha de la página \\(si la tiene\\)') };
    }
  }
  return out;
}

const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
function borrador(id, r) {
  // «Autor (año) — Título (nota)» o «Autor — Título»
  const [izq, ...der] = r.cabecera.split(' — ');
  let titulo = der.join(' — ').replace(/\s*\((comunicado de prensa|historia de cliente|página[^)]*|nota[^)]*|sentencia[^)]*)\)\s*$/i, '').trim() || izq;
  const anio = /\((\d{2})-(\d{2})-(\d{4})\)/.exec(izq);
  const soloAnio = /\((?:[^)]*?)(\d{4})/.exec(izq) || /(\d{4})/.exec(r.fecha);
  const autor = izq.replace(/\s*\(.*$/, '').trim();
  const a = anio ? `${anio[3]}, ${Number(anio[1])} de ${MESES[Number(anio[2]) - 1]}` : (soloAnio ? soloAnio[1] : 's. f.');
  const autorCita = autor.split(/[;,]| y /)[0].trim();
  return { autor, autorCita, anio: a, titulo, sitio: '', url: r.url, revisada: false };
}

// «UNESCO. (2024). *Guía…*. Sitio. https://…» con el título en cursiva (marcado con *…*)
export function referencia(e) {
  const fin = e.autor.endsWith('.') ? '' : '.';
  const sitio = e.sitio && e.sitio !== e.autor ? ` ${e.sitio}.` : '';
  // APA: si el título termina en «?» o «!», no lleva punto después
  const titulo = e.titulo.replace(/\.$/, '');
  return `${e.autor}${fin} (${e.anio}). *${titulo}*${/[?!]$/.test(titulo) ? '' : '.'}${sitio} ${e.url}`.trim();
}
export const cargar = () => (fs.existsSync(ARCHIVO) ? JSON.parse(leer(ARCHIVO)) : {});

// Resuelve las marcas de un documento: devuelve el texto con las citas APA y la lista ordenada de referencias.
// Las letras (2024a, s. f.-b) van cuando el documento cita dos fuentes distintas con el mismo autorCita y año.
export function resolverCitas(texto, apa) {
  const ids = [...new Set([...texto.matchAll(/\[(?:n)?@([^\]]+)\]/g)].flatMap(m => m[1].split(/;\s*@?/).map(x => x.replace(/^@/, '').trim())))];
  const falta = ids.filter(i => !apa[i]);
  const corto = e => e.anio.split(',')[0];
  const grupos = new Map();
  for (const i of ids.filter(i => apa[i])) { const k = `${apa[i].autorCita}|${corto(apa[i])}`; grupos.set(k, [...(grupos.get(k) || []), i]); }
  const letra = {};
  for (const lista of grupos.values()) if (lista.length > 1) lista.sort((a, b) => apa[a].titulo.localeCompare(apa[b].titulo, 'es')).forEach((i, k) => { letra[i] = String.fromCharCode(97 + k); });
  const anioCita = i => { const a = corto(apa[i]); return letra[i] ? (a === 's. f.' ? `s. f.-${letra[i]}` : `${a}${letra[i]}`) : a; };
  const out = texto.replace(/\[(n)?@([^\]]+)\]/g, (_, n, cuerpo) => {
    const lista = cuerpo.split(/;\s*@?/).map(x => x.replace(/^@/, '').trim()).filter(i => apa[i]);
    if (n) return lista.map(i => `${apa[i].autorCita} (${anioCita(i)})`).join(' y ');
    return `(${lista.map(i => `${apa[i].autorCita}, ${anioCita(i)}`).join('; ')})`;
  });
  // Orden APA 7: por autor; dentro del mismo autor, primero «s. f.» y luego por año (y letra)
  const orden = i => `${apa[i].autor}\u0000${corto(apa[i]) === 's. f.' ? '0000' : corto(apa[i])}${letra[i] || ''}`;
  const refs = ids.filter(i => apa[i]).sort((a, b) => orden(a).localeCompare(orden(b), 'es'))
    .map(i => ({ id: i, texto: referencia({ ...apa[i], anio: letra[i] ? anioCita(i) + (apa[i].anio.includes(',') ? apa[i].anio.slice(apa[i].anio.indexOf(',')) : '') : apa[i].anio }), url: apa[i].url }));
  return { texto: out, refs, falta };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const reg = registro(), apa = cargar(), ids = citadas();
  if (process.argv.includes('--escribir')) {
    // Reescribe «## Referencias bibliográficas» de cada contenido, caso y actividad con la lista APA de las fuentes que cita
    const archivos = [
      ...fs.readdirSync(path.join(RAIZ, 'contenido')).flatMap(m => listar(path.join(RAIZ, 'contenido', m))),
      ...listar(path.join(RAIZ, 'casos')), ...listar(path.join(RAIZ, 'actividades')),
    ];
    let n = 0;
    for (const f of archivos) {
      const md = leer(f).replace(/\r\n/g, '\n');
      const cuerpo = md.replace(/^## (Referencias bibliográficas|Fuentes)\b[\s\S]*?(?=^## |(?![\s\S]))/m, '');
      const { refs, falta } = resolverCitas(cuerpo, apa);
      if (falta.length) console.log(`⚠ ${path.basename(f)}: sin entrada APA para ${falta.join(', ')}`);
      const seccion = refs.length ? `## Referencias bibliográficas\n\n${refs.map(r => `- ${r.texto}`).join('\n')}\n` : '';
      const nuevo = (/^## (Referencias bibliográficas|Fuentes)\b/m.test(md)
        ? md.replace(/^## (Referencias bibliográficas|Fuentes)\b[\s\S]*?(?=^## |(?![\s\S]))/m, seccion)
        : md.trimEnd() + (seccion ? `\n\n${seccion}` : '\n')).replace(/\n{3,}/g, '\n\n');
      if (nuevo !== md) { fs.writeFileSync(f, nuevo); n++; }
    }
    console.log(`${n} archivos con «Referencias bibliográficas» al día`);
  } else if (process.argv.includes('--borrador')) {
    let nuevas = 0;
    for (const id of ids) if (!apa[id]) { if (!reg[id]) { console.log(`✗ ${id}: no está en investigacion/`); continue; } apa[id] = borrador(id, reg[id]); nuevas++; }
    fs.writeFileSync(ARCHIVO, JSON.stringify(Object.fromEntries(Object.entries(apa).sort()), null, 1) + '\n');
    console.log(`${nuevas} borradores nuevos · ${Object.keys(apa).length} entradas en investigacion/referencias-apa.json`);
  } else {
    let mal = 0;
    for (const id of ids) {
      const e = apa[id];
      const falta = !e ? ['entrada'] : ['autor', 'autorCita', 'anio', 'titulo', 'url'].filter(k => !e[k]);
      if (falta.length || !e.revisada) { mal++; console.log(`✗ ${id}: ${falta.length ? 'falta ' + falta.join(', ') : 'sin revisar'}`); }
      else if (!/^https?:\/\//.test(e.url)) { mal++; console.log(`✗ ${id}: URL inválida`); }
    }
    console.log(`${ids.length} fuentes citadas · ${mal} con problemas`);
    process.exit(mal ? 1 : 0);
  }
}
