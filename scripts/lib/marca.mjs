// Marca Empoderatech (manual de marca e-tech v1.0, octubre 2026; resumen en docs/CRITERIOS-29-10.md §5).
// Colores, tipografías incrustadas, logos y elementos gráficos para todos los generadores del curso.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const DIR = path.join(RAIZ, 'scripts', 'lib', 'marca');

export const C = {
  noche: '#00060F', frambuesa: '#BE3455', grafito: '#40444B', blanco: '#FFFFFF', fucsia: '#ED1566', celeste: '#3D9BE9',
  enlace: '#116DFF', grisClaro: '#BFC1C3', grisMedio: '#808387',
  // tintes claros para fondos de recuadros sobre blanco (derivados de la paleta)
  frambuesaSuave: '#FBEFF2', celesteSuave: '#EEF5FD', grafitoSuave: '#F2F3F4', fucsiaSuave: '#FDEEF4',
};
export const FIRMA = 'e-tech | empoderatech';
export const MARCA = 'Empoderatech';

// Logos en archivo (nunca se reescriben con una fuente): SVG para HTML y PDF; PNG publicado para Google Docs
export const logoSVG = v => fs.readFileSync(path.join(DIR, `etech-${v}.svg`), 'utf8').replace(/<\?xml[^>]*>/, '').replace(/<title>.*?<\/title>/s, '').trim();
export const logoDataURI = v => `data:image/svg+xml;base64,${Buffer.from(logoSVG(v)).toString('base64')}`;
// Google Docs descarga la imagen al importar el HTML; queda incrustada en el Doc
export const LOGO_DOCS = {
  claro: 'https://raw.githubusercontent.com/dojedacifuentes/curso-ia-generativa-laboral/main/scripts/lib/marca/etech-logo-sobre-claro-600.png',
  oscuro: 'https://raw.githubusercontent.com/dojedacifuentes/curso-ia-generativa-laboral/main/scripts/lib/marca/etech-logo-sobre-oscuro-600.png',
};

// Varela Round (titulares, un solo peso) y Montserrat (texto), OFL, incrustadas para que funcionen sin internet
const ff = (familia, peso, archivo, estilo = 'normal') =>
  `@font-face{font-family:"${familia}";font-style:${estilo};font-weight:${peso};font-display:swap;src:url(data:font/woff2;base64,${fs.readFileSync(path.join(RAIZ, 'scripts', 'fuentes', archivo)).toString('base64')}) format("woff2")}`;
export const FUENTES_CSS = [
  ff('Varela Round', 400, 'varela-round-latin-400-normal.woff2'),
  ff('Montserrat', 400, 'montserrat-latin-400-normal.woff2'), ff('Montserrat', 400, 'montserrat-latin-400-italic.woff2', 'italic'),
  ff('Montserrat', 500, 'montserrat-latin-500-normal.woff2'), ff('Montserrat', 600, 'montserrat-latin-600-normal.woff2'),
  ff('Montserrat', 700, 'montserrat-latin-700-normal.woff2'),
].join('');
export const TITULAR = '"Varela Round",Arial,sans-serif';
export const TEXTO = 'Montserrat,Arial,sans-serif';

// Arcos concéntricos frambuesa que suben desde el borde, como un horizonte
export const arcos = (ancho = 360, alto = 180, color = C.frambuesa, n = 4) =>
  `<svg class="arcos" viewBox="0 0 ${ancho} ${alto}" width="${ancho}" height="${alto}" aria-hidden="true">${Array.from({ length: n }, (_, k) => {
    const r = alto * (0.55 + k * 0.32);
    return `<circle cx="${ancho}" cy="${alto}" r="${r.toFixed(1)}" fill="none" stroke="${color}" stroke-width="${(3 - k * 0.5).toFixed(1)}" opacity="${(1 - k * 0.2).toFixed(2)}"/>`;
  }).join('')}</svg>`;

// Borde rasgado (blanco → noche): uno por pieza, para cerrar
export const bordeRasgado = (color = C.noche) =>
  `<svg class="rasgado" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true"><path fill="${color}" d="M0 40V22l40-6 38 9 44-12 36 7 52-10 30 8 48-9 40 11 46-13 34 9 50-7 42 10 36-12 48 8 40-6 44 11 38-9 52 7 30-10 46 12 40-8 36 6 50-11 42 9 34-7 48 10V40z"/></svg>`;

// Chevrón que abre cada título de sección
export const CHEVRON = '›';

// Estilos base de los documentos imprimibles (PDF): contenido, casos, actividades, glosario y proceso
export const CSS_DOCUMENTO = `${FUENTES_CSS}
:root{--noche:${C.noche};--fr:${C.frambuesa};--gr:${C.grafito};--fu:${C.fucsia};--ce:${C.celeste};--en:${C.enlace};--gc:${C.grisClaro};--gm:${C.grisMedio};--frs:${C.frambuesaSuave};--ces:${C.celesteSuave};--grs:${C.grafitoSuave}}
*{box-sizing:border-box}html,body{margin:0;background:#fff;color:var(--noche);font:400 10.5pt/1.6 ${TEXTO}}
@page{size:A4;margin:0}
.portada{position:relative;background:var(--noche);color:#fff;padding:22mm 18mm 16mm;overflow:hidden}
.portada .logo{height:13mm;display:block;margin-bottom:12mm}
.portada .arcos{position:absolute;right:-30mm;bottom:-6mm;width:110mm;height:55mm}
.portada .mod{font:400 10pt/1.3 ${TITULAR};color:var(--ce);margin:0 0 4mm;position:relative}
.portada h1{font:400 26pt/1.15 ${TITULAR};margin:0 0 6mm;max-width:150mm;position:relative}
.portada .ae{font-size:10.5pt;color:var(--gc);max-width:150mm;margin:0;position:relative}
.portada .ae b{color:#fff;font-weight:600}
.portada .punto{display:inline-block;width:2.2mm;height:2.2mm;border-radius:50%;background:var(--fr);margin-right:2mm;vertical-align:middle}
main{padding:10mm 18mm 22mm}
h2{font:400 15pt/1.25 ${TITULAR};color:var(--fr);margin:9mm 0 2mm;break-after:avoid}
h2:before{content:"${CHEVRON} ";font-weight:700}
h3{font:400 12pt/1.3 ${TITULAR};color:var(--noche);margin:6mm 0 2mm;break-after:avoid}
h4{font:600 10.5pt/1.3 ${TEXTO};margin:4mm 0 1mm}
p{margin:0 0 2.6mm}a{color:var(--en);text-decoration:none;word-break:break-word}strong{font-weight:700}
.meta{display:flex;flex-wrap:wrap;gap:1mm 5mm;font-size:7.8pt;color:var(--gm);border-top:1px solid #E6E7E8;padding-top:1.2mm;margin:0 0 3mm}
.meta b{color:var(--gr);font-weight:600}
.caja{border-radius:4mm;padding:3.4mm 4.2mm;margin:4mm 0;break-inside:avoid;background:var(--frs);border-left:1.6mm solid var(--fr)}
.caja .etq{font:400 9pt/1.2 ${TITULAR};color:var(--fr);margin-bottom:1.4mm;letter-spacing:.02em}
.caja p:last-child{margin-bottom:0}
.caja.error{background:var(--grs);border-left-color:var(--gr)}.caja.error .etq{color:var(--gr)}
.caja.clave{background:var(--noche);color:#fff;border-left-color:var(--fu)}.caja.clave .etq{color:var(--ce)}.caja.clave a{color:var(--ce)}
.caja.actividad{background:#fff;border:1px solid var(--gc);border-left:1.6mm solid var(--fr)}
.caja.comprueba{background:var(--ces);border-left-color:var(--en)}.caja.comprueba .etq{color:var(--en)}
ul,ol{margin:0 0 3mm;padding-left:6mm}li{margin:.6mm 0}li::marker{color:var(--fr);font-weight:700}
.tabla{margin:3mm 0;break-inside:avoid}table{border-collapse:collapse;width:100%;font-size:9pt}
th{background:var(--noche);color:#fff;font:400 9pt/1.3 ${TITULAR};text-align:left;padding:2mm 2.6mm}
td{border-bottom:1px solid #E6E7E8;padding:2mm 2.6mm;vertical-align:top}tr:nth-child(even) td{background:#FAFAFB}
code{font-family:Consolas,monospace;font-size:.9em;background:var(--grs);border-radius:1mm;padding:0 1mm}
pre{background:var(--grs);border-radius:2mm;padding:3mm;white-space:pre-wrap;font-size:8.5pt}pre code{background:none;padding:0}
blockquote.aviso{border-left:1.2mm solid var(--gm);background:var(--grs);margin:3mm 0;padding:2mm 4mm;border-radius:0 2mm 2mm 0}
.refs p{padding-left:10mm;text-indent:-10mm;font-size:9.5pt}
.cierre{margin-top:10mm;break-inside:avoid}.cierre .rasgado{display:block;width:100%;height:9mm}
.cierre .banda{background:var(--noche);color:var(--gc);padding:6mm 18mm;display:flex;justify-content:space-between;align-items:center;font-size:8.5pt}
.cierre .banda img{height:9mm}
.pie{position:fixed;bottom:0;left:0;right:0;height:10mm;display:flex;align-items:center;justify-content:space-between;padding:0 18mm;font-size:7.5pt;color:var(--gm);border-top:.3mm solid #E6E7E8;background:#fff}
.pie .iso{height:5mm;vertical-align:middle;margin-right:2mm}
.glosario dt{font:400 11pt/1.3 ${TITULAR};color:var(--fr);margin-top:3mm}.glosario dd{margin:0 0 1mm 0}
@media screen{body{max-width:820px;margin:0 auto;box-shadow:0 0 0 1px #E6E7E8}.pie{position:static}}
`;
