// Uso: node xlsx2tsv.mjs <json-descarga> <dir-salida>
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const [, , src, out] = process.argv;
const j = JSON.parse(fs.readFileSync(src, 'utf8'));
const buf = Buffer.from(j.content, 'base64');
fs.mkdirSync(out, { recursive: true });

// Leer el zip (directorio central)
const eocd = buf.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
const n = buf.readUInt16LE(eocd + 10);
let p = buf.readUInt32LE(eocd + 16);
const files = {};
for (let i = 0; i < n; i++) {
  const comp = buf.readUInt16LE(p + 10);
  const csize = buf.readUInt32LE(p + 20);
  const nl = buf.readUInt16LE(p + 28), el = buf.readUInt16LE(p + 30), cl = buf.readUInt16LE(p + 32);
  const off = buf.readUInt32LE(p + 42);
  const name = buf.slice(p + 46, p + 46 + nl).toString();
  const lnl = buf.readUInt16LE(off + 26), lel = buf.readUInt16LE(off + 28);
  const data = buf.slice(off + 30 + lnl + lel, off + 30 + lnl + lel + csize);
  files[name] = comp === 8 ? zlib.inflateRawSync(data).toString('utf8') : data.toString('utf8');
  p += 46 + nl + el + cl;
}

const dec = s => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d)).replace(/&amp;/g, '&');
const shared = [];
const ss = files['xl/sharedStrings.xml'] || '';
for (const m of ss.matchAll(/<si>([\s\S]*?)<\/si>/g)) {
  shared.push(dec([...m[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map(x => x[1]).join('')));
}
const wb = files['xl/workbook.xml'];
const rels = files['xl/_rels/workbook.xml.rels'];
const relMap = {};
for (const m of rels.matchAll(/<Relationship [^>]*?Id="([^"]+)"[^>]*?Target="([^"]+)"/g)) relMap[m[1]] = m[2];
for (const m of rels.matchAll(/<Relationship [^>]*?Target="([^"]+)"[^>]*?Id="([^"]+)"/g)) relMap[m[2]] = m[1];
const colIdx = ref => { let c = 0; for (const ch of ref.replace(/\d+/g, '')) c = c * 26 + ch.charCodeAt(0) - 64; return c - 1; };
for (const m of wb.matchAll(/<sheet [^>]*?name="([^"]+)"[^>]*?r:id="([^"]+)"/g)) {
  const name = dec(m[1]);
  let target = relMap[m[2]];
  target = target.startsWith('/') ? target.slice(1) : 'xl/' + target;
  const xml = files[target];
  const rows = [];
  for (const r of xml.matchAll(/<row [^>]*?r="(\d+)"[^>]*>([\s\S]*?)<\/row>/g)) {
    const row = [];
    for (const c of r[2].matchAll(/<c ([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
      const attrs = c[1];
      const ref = /r="([A-Z]+\d+)"/.exec(attrs)[1];
      const t = /t="([^"]+)"/.exec(attrs)?.[1];
      const body = c[2] || '';
      let v = /<v>([\s\S]*?)<\/v>/.exec(body)?.[1] ?? '';
      if (t === 's') v = shared[+v] ?? '';
      else if (t === 'inlineStr') v = [...body.matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map(x => x[1]).join('');
      v = dec(v).replace(/\t/g, ' ').replace(/\r?\n/g, ' ⏎ ');
      row[colIdx(ref)] = v;
    }
    rows[+r[1] - 1] = row;
  }
  const tsv = rows.map(r => (r || []).map(x => x ?? '').join('\t')).join('\n');
  fs.writeFileSync(path.join(out, name.replace(/[^\wáéíóúñÁÉÍÓÚÑ .-]/g, '_') + '.tsv'), tsv);
  console.log(name, rows.length, 'filas');
}
