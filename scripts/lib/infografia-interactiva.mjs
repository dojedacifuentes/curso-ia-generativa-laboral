// Versión interactiva de la infografía del módulo: un solo HTML, sin dependencias externas, que funciona sin internet y en el
// celular. Usa los mismos datos que la estática (infografias/M<n>.json). Tarjetas que se abren, avance con anillo, recorrido
// guiado (botones y flechas del teclado), idea clave que se desbloquea al explorar todo y un efecto propio de cada tipo:
// anatomia arma el prompt, pasos llena la línea, matriz enfoca un cuadrante, mapa enciende el semáforo y ciclo hace girar la rueda.
// Respeta «reducir movimiento». Sin JavaScript se ve todo abierto.

export function htmlInteractivo(j, m, { curso, ac, semaforo, icono, esc, negrita, fuentes }) {
  const temas = Object.fromEntries(m.aes.map(a => [a.id, a.tema]));
  // «M1-AE2 P03», «M1-AE2 P10» → «Prompts efectivos»: pantallas 3 y 10
  const dondeVer = refs => {
    const porAE = new Map();
    for (const r of refs || []) { const [ae, p] = r.split(' '); porAE.set(ae, [...(porAE.get(ae) || []), Number(p.slice(1))]); }
    const y = l => l.length > 1 ? `${l.slice(0, -1).join(', ')} y ${l.at(-1)}` : `${l[0]}`;
    return [...porAE].map(([ae, ps]) => `<span class="chip">«${esc(temas[ae])}» · ${ps.length > 1 ? 'pantallas' : 'pantalla'} ${y(ps)}</span>`).join(' ');
  };

  const items = j.bloques.map((x, i) => ({ ...x, i }));
  const luces = j.tipo === 'mapa' ? j.semaforo.map((s, k) => ({ ...s, i: items.length + k })) : [];
  const total = items.length + luces.length;
  const numerado = ['pasos', 'ciclo'].includes(j.tipo);

  const tarjeta = (x, extra = '') => `<article class="tarjeta" data-i="${x.i}" style="--d:${x.i}" ${extra}>
  <button class="cab" type="button" aria-expanded="false" aria-controls="det${x.i}" id="cab${x.i}">
    ${x.icono ? `<span class="ico" aria-hidden="true">${icono(x.icono, 26)}</span>` : ''}
    <span class="tit">${numerado ? `<span class="num">${x.i + 1}</span>` : ''}${esc(x.titulo)}</span>
    <span class="estado" aria-hidden="true"><span class="mas">+</span><span class="ok">✓</span></span>
  </button>
  <div class="det" id="det${x.i}" role="region" aria-labelledby="cab${x.i}"><div class="det-in">
    <p>${negrita(x.texto)}</p>
    ${x.ejemplo ? `<p class="ej"><b>Ejemplo:</b> ${negrita(x.ejemplo)}</p>` : ''}
    ${x.ver?.length ? `<p class="ver"><span>Lo ves en</span> ${dondeVer(x.ver)}</p>` : ''}
  </div></div>
</article>`;

  let cuerpo;
  if (j.tipo === 'anatomia') {
    cuerpo = `<div class="prompt" role="group" aria-label="Partes">${items.map((x, k) => `<button class="pieza" type="button" data-ir="${x.i}" style="--k:${k}">${esc(x.titulo)}</button>${k < items.length - 1 ? '<span class="mas-p" aria-hidden="true">+</span>' : ''}`).join('')}</div>
<div class="armar"><button class="btn sec" type="button" id="btnArmar">✦ Arma el prompt completo</button>
<div class="armado" id="armado" aria-live="polite"></div></div>
<div class="grilla">${items.map(x => tarjeta(x)).join('')}</div>`;
  } else if (j.tipo === 'pasos') {
    cuerpo = `<div class="linea"><div class="riel" aria-hidden="true"><div class="relleno"></div></div>${items.map(x => tarjeta(x)).join('')}</div>`;
  } else if (j.tipo === 'matriz') {
    cuerpo = `<div class="matriz"><div class="eje y" aria-hidden="true"><span>${esc(j.ejes.y)}</span></div>
<div class="cuad">${items.map(x => tarjeta(x, `data-q="${x.i}"`)).join('')}</div>
<div class="eje x" aria-hidden="true"><span>${esc(j.ejes.x)}</span></div></div>
<p class="leyenda">Los ejes van de menos a más: abajo y a la izquierda, menos ${esc(j.ejes.y.toLowerCase())} y menos ${esc(j.ejes.x.toLowerCase())}.</p>`;
  } else if (j.tipo === 'mapa') {
    cuerpo = `<div class="grilla">${items.map(x => tarjeta(x)).join('')}</div>
<h2 class="sub">${esc(j.semaforoTitulo || 'Semáforo')}</h2>
<div class="semaforo"><div class="poste" role="group" aria-label="Luces del semáforo">${luces.map(s => `<button class="luz ${s.nivel}" type="button" data-i="${s.i}" aria-pressed="false" aria-label="${esc(s.titulo)}" style="--c:${semaforo[s.nivel]}"></button>`).join('')}</div>
<div class="paneles">${luces.map(s => `<article class="panel" data-i="${s.i}" style="--c:${semaforo[s.nivel]}"><h3>${esc(s.titulo)}</h3><p>${negrita(s.texto)}</p></article>`).join('')}
<p class="pista-luz">Toca cada luz para ver qué significa.</p></div></div>`;
  } else {
    const n = items.length;
    cuerpo = `<div class="rueda" style="--n:${n}"><svg class="aro" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="38"/><circle class="orbita" cx="50" cy="12" r="2.4"/></svg>
<div class="centro">${esc(j.centro || j.titulo)}</div>
${items.map(x => { const a = (x.i / n) * 2 * Math.PI - Math.PI / 2; return `<button class="nodo" type="button" data-ir="${x.i}" style="left:${(50 + 38 * Math.cos(a)).toFixed(2)}%;top:${(50 + 38 * Math.sin(a)).toFixed(2)}%;--k:${x.i}"><span class="num">${x.i + 1}</span><span class="nt">${esc(x.titulo)}</span></button>`; }).join('')}</div>
<p class="vuelta">↻ ${esc(j.vuelta || 'El ciclo vuelve a empezar con lo aprendido')}</p>
<div class="lista">${items.map(x => tarjeta(x)).join('')}</div>`;
  }

  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Infografía M${m.n} · ${esc(j.titulo)}</title><style>${fuentes}
:root{--ac:${ac};--ac-s:color-mix(in srgb,${ac} 12%,#fff);--ac-m:color-mix(in srgb,${ac} 30%,#fff);--tx:#0F172A;--tx2:#475569;--bd:#E2E8F0;--bg:#F8FAFC}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--tx);font:400 17px/1.5 "Plex",system-ui,Arial,sans-serif}
button{font:inherit;color:inherit;cursor:pointer}:focus-visible{outline:3px solid var(--ac);outline-offset:3px;border-radius:12px}
.hero{background:var(--ac);color:#fff;padding:40px 20px 34px;position:relative;overflow:hidden}
.hero .in,.barra .in,main,.clave,footer{max-width:960px;margin:0 auto}
.hero .mod{font:600 13px/1 "Plex";letter-spacing:.12em;text-transform:uppercase;opacity:.9}
.hero h1{font:700 clamp(30px,5vw,46px)/1.1 "Plex";margin:12px 0 10px;max-width:760px}.hero p{margin:0;max-width:720px;font-size:18px;opacity:.95}
.burbuja{position:absolute;border-radius:50%;background:rgba(255,255,255,.09);animation:flota 9s ease-in-out infinite alternate}
.b1{width:320px;height:320px;right:-90px;top:-120px}.b2{width:140px;height:140px;right:180px;bottom:-70px;animation-delay:-3s}.b3{width:60px;height:60px;right:90px;top:120px;animation-delay:-6s}
@keyframes flota{to{transform:translate(-18px,14px) scale(1.06)}}
.barra{position:sticky;top:0;z-index:5;background:rgba(248,250,252,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--bd)}
.barra .in{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;padding:10px 20px}
.progreso{display:flex;align-items:center;gap:10px;font-weight:600;font-size:15px;white-space:nowrap}
.anillo{width:40px;height:40px;transform:rotate(-90deg)}.anillo circle{fill:none;stroke-width:5}.anillo .f{stroke:var(--bd)}
.anillo .v{stroke:var(--ac);stroke-linecap:round;stroke-dasharray:100;stroke-dashoffset:100;transition:stroke-dashoffset .6s cubic-bezier(.2,.8,.2,1)}
.botones{display:flex;gap:8px;flex-wrap:wrap}
.btn{white-space:nowrap;border:0;border-radius:999px;padding:9px 16px;font-weight:600;font-size:15px;background:var(--ac);color:#fff;transition:transform .15s,box-shadow .2s,background .2s;box-shadow:0 2px 0 color-mix(in srgb,var(--ac) 60%,#000)}
.btn:hover{transform:translateY(-1px);box-shadow:0 4px 12px color-mix(in srgb,var(--ac) 35%,transparent)}.btn:active{transform:translateY(1px) scale(.97);box-shadow:none}
.btn.sec{background:#fff;color:var(--ac);border:2px solid var(--ac-m);box-shadow:none}.btn.sec:hover{background:var(--ac-s)}
main{padding:26px 20px 10px}
.tarjeta{background:#fff;border:2px solid var(--bd);border-radius:18px;transition:transform .2s,box-shadow .25s,border-color .25s,opacity .3s;position:relative}
.tarjeta:hover{transform:translateY(-3px);box-shadow:0 10px 24px rgba(15,23,42,.08)}
.tarjeta.abierta{border-color:var(--ac-m)}.tarjeta.vista .cab .tit{color:var(--tx)}
.cab{width:100%;display:flex;align-items:center;gap:14px;background:none;border:0;padding:16px 18px;text-align:left}
.ico{flex:none;width:46px;height:46px;border-radius:14px;background:var(--ac-s);color:var(--ac);display:grid;place-items:center;transition:transform .3s}
.tarjeta:hover .ico{transform:rotate(-6deg) scale(1.06)}
.tit{flex:1;font:700 19px/1.25 "Plex";display:flex;align-items:center;gap:10px}
.num{flex:none;width:30px;height:30px;border-radius:50%;background:var(--ac);color:#fff;display:inline-grid;place-items:center;font:700 15px/1 "Plex"}
.estado{flex:none;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:var(--bg);font-weight:700;position:relative}
.estado>span{grid-area:1/1;transition:transform .3s,opacity .3s}.estado .mas{color:var(--ac);font-size:20px}.estado .ok{opacity:0;transform:scale(.3);color:#fff}
.abierta .estado .mas{transform:rotate(45deg)}
.vista .estado{background:var(--ac)}.vista .estado .mas{opacity:0}.vista .estado .ok{opacity:1;transform:scale(1);animation:pop .4s}
@keyframes pop{50%{transform:scale(1.35)}}
.det{display:grid;grid-template-rows:0fr;transition:grid-template-rows .35s cubic-bezier(.2,.8,.2,1)}.det-in{overflow:hidden;padding:0 18px}
.abierta .det{grid-template-rows:1fr}.abierta .det-in{padding-bottom:18px}
.no-js .det{grid-template-rows:1fr}.no-js .det-in{padding-bottom:18px}
.det p{margin:0 0 10px}.ej{background:var(--bg);border-left:4px solid var(--ac);padding:8px 12px;border-radius:8px;font-size:16px;color:#334155}
.ver{font-size:14px;color:var(--tx2);display:flex;flex-wrap:wrap;gap:6px;align-items:center}.ver>span:first-child{font-weight:600}
.chip{background:var(--ac-s);color:color-mix(in srgb,var(--ac) 80%,#000);border-radius:999px;padding:3px 10px;font-weight:600}
.grilla{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr));gap:16px;align-items:start}
.entra{opacity:0;transform:translateY(18px)}.entra.ya{opacity:1;transform:none;transition:opacity .6s calc(var(--d,0)*90ms),transform .6s cubic-bezier(.2,.8,.2,1) calc(var(--d,0)*90ms)}
.foco{box-shadow:0 0 0 4px var(--ac-m),0 14px 30px rgba(15,23,42,.12)!important}
body.guiando .tarjeta:not(.foco),body.guiando .panel:not(.foco){opacity:.45}
/* anatomía */
.prompt{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:8px;border:3px dashed var(--ac-m);border-radius:20px;padding:18px;background:#fff;margin-bottom:14px}
.pieza{border:0;border-radius:12px;padding:10px 16px;font:700 18px/1 "Plex";color:#fff;background:color-mix(in srgb,var(--ac) calc(100% - var(--k)*12%),#0F172A);transition:transform .2s;animation:cae .5s backwards calc(var(--k)*120ms + .2s)}
.pieza:hover{transform:translateY(-3px) rotate(-2deg)}.pieza.on{outline:3px solid var(--ac-m)}
.mas-p{font:700 22px/1 "Plex";color:#94A3B8}@keyframes cae{from{opacity:0;transform:translateY(-24px) scale(.8)}}
.armar{text-align:center;margin-bottom:22px}.armado{margin:12px auto 0;max-width:820px;text-align:left;background:#0F172A;color:#E2E8F0;border-radius:16px;padding:0 18px;font-size:16px;min-height:0;transition:padding .3s}
.armado:not(:empty){padding:16px 18px}.armado .p{border-radius:6px;padding:1px 4px}.cursor{display:inline-block;width:8px;height:1.1em;background:var(--ac-m);vertical-align:text-bottom;animation:parpadea 1s steps(1) infinite}
@keyframes parpadea{50%{opacity:0}}
/* pasos */
.linea{position:relative;display:flex;flex-direction:column;gap:14px;padding-left:34px}
.riel{position:absolute;left:12px;top:10px;bottom:10px;width:6px;border-radius:6px;background:var(--bd);overflow:hidden}
.relleno{width:100%;height:calc(var(--av,0)*100%);background:var(--ac);border-radius:6px;transition:height .6s cubic-bezier(.2,.8,.2,1)}
.linea .tarjeta:before{content:"";position:absolute;left:-30px;top:26px;width:14px;height:14px;border-radius:50%;background:#fff;border:3px solid var(--bd);transition:border-color .3s,background .3s}
.linea .tarjeta.vista:before{border-color:var(--ac);background:var(--ac)}
/* matriz */
.matriz{display:grid;grid-template-columns:34px 1fr;grid-template-rows:1fr 34px;gap:10px}
.eje{display:flex;align-items:center;justify-content:center;font:700 14px/1 "Plex";color:var(--tx2);letter-spacing:.06em;text-transform:uppercase;position:relative}
.eje.y{writing-mode:vertical-rl;transform:rotate(180deg)}.eje.x{grid-column:2}
.eje.y:after,.eje.x:after{content:"";position:absolute;background:var(--ac-m);border-radius:3px}
.eje.y:after{width:4px;top:0;bottom:0;right:4px;transform-origin:bottom;animation:crecey 1s .3s backwards}
.eje.x:after{height:4px;left:0;right:0;top:4px;transform-origin:left;animation:crecex 1s .3s backwards}
.eje span{background:var(--bg);padding:6px;position:relative;z-index:1}
@keyframes crecey{from{transform:scaleY(0)}}@keyframes crecex{from{transform:scaleX(0)}}
.cuad{display:grid;grid-template-columns:1fr 1fr;gap:12px}.cuad .tarjeta{min-height:120px}
.cuad .tarjeta[data-q="3"]{background:var(--ac-s)}.cuad.enfoque .tarjeta:not(.abierta){opacity:.5;transform:scale(.97)}
.leyenda{font-size:14px;color:var(--tx2);text-align:center;margin:12px 0 0}
/* mapa */
.sub{font:700 24px/1.2 "Plex";margin:30px 0 14px}
.semaforo{display:grid;grid-template-columns:auto 1fr;gap:20px;align-items:start}
.poste{background:#1E293B;border-radius:28px;padding:14px;display:flex;flex-direction:column;gap:12px;box-shadow:inset 0 -4px 0 #0F172A}
.luz{width:58px;height:58px;border-radius:50%;border:0;background:color-mix(in srgb,var(--c) 30%,#334155);transition:background .3s,box-shadow .3s,transform .15s}
.luz:hover{transform:scale(1.06)}.luz[aria-pressed="true"]{background:var(--c);box-shadow:0 0 0 4px rgba(255,255,255,.15),0 0 26px 6px color-mix(in srgb,var(--c) 70%,transparent)}
.paneles{display:flex;flex-direction:column;gap:12px}
.panel{background:#fff;border:2px solid var(--bd);border-left:8px solid var(--c);border-radius:16px;padding:14px 18px;display:none}
.panel.on{display:block;animation:desliza .4s cubic-bezier(.2,.8,.2,1)}.no-js .panel{display:block}
.panel h3{margin:0 0 6px;font:700 18px/1.25 "Plex"}.panel p{margin:0}
.pista-luz{color:var(--tx2);font-size:15px;margin:0}@keyframes desliza{from{opacity:0;transform:translateX(-12px)}}
/* ciclo */
.rueda{position:relative;width:min(100%,520px);aspect-ratio:1;margin:0 auto}
.aro{position:absolute;inset:0;width:100%;height:100%}.aro circle{fill:none;stroke:var(--ac-m);stroke-width:1.2;stroke-dasharray:3 3}
.aro .orbita{fill:var(--ac);stroke:none;transform-origin:50px 50px;animation:gira 8s linear infinite}
@keyframes gira{to{transform:rotate(360deg)}}
.centro{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:44%;text-align:center;font:700 clamp(15px,2.6vw,21px)/1.25 "Plex";color:var(--ac);background:#fff;border:3px solid var(--ac-m);border-radius:50%;aspect-ratio:1;display:grid;place-items:center;padding:12px}
.nodo{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:6px;background:none;border:0;width:min(34%,170px);animation:aparece .5s backwards calc(var(--k)*150ms + .2s)}
.nodo .num{width:46px;height:46px;font-size:20px;box-shadow:0 0 0 6px var(--bg);transition:transform .2s}
.nodo:hover .num{transform:scale(1.12)}.nodo.on .num{box-shadow:0 0 0 6px var(--ac-m)}
.nodo .nt{font:700 14px/1.2 "Plex";background:#fff;border:1px solid var(--bd);border-radius:10px;padding:4px 8px;text-align:center}
.nodo.vista .num{background:#0F172A}@keyframes aparece{from{opacity:0;transform:translate(-50%,-50%) scale(.5)}}
.vuelta{text-align:center;font:700 17px/1.3 "Plex";color:var(--ac);margin:8px 0 18px}
.lista{display:flex;flex-direction:column;gap:12px}.js .lista .tarjeta:not(.abierta){display:none}
.js .lista:not(:has(.abierta)):before{content:"Toca una etapa de la rueda para ver qué se hace en ella.";text-align:center;color:var(--tx2);font-size:15px;padding:14px;border:2px dashed var(--bd);border-radius:16px}
/* idea clave */
.clave{margin:26px auto 0;padding:0 20px}
.caja{position:relative;background:#0F172A;color:#fff;border-radius:20px;padding:24px 26px;font:600 20px/1.4 "Plex";overflow:hidden}
.caja b{color:color-mix(in srgb,var(--ac) 45%,#fff)}
.js .clave.cerrada .texto{filter:blur(7px);opacity:.35;user-select:none}
.velo{display:none}.js .clave.cerrada .velo{display:flex;position:absolute;inset:0;align-items:center;justify-content:center;flex-direction:column;gap:10px;text-align:center;font-size:16px;padding:16px}
.js .clave.abierta .texto{animation:revela .8s cubic-bezier(.2,.8,.2,1)}@keyframes revela{from{filter:blur(7px);opacity:.3;transform:scale(.98)}}
.chispa{position:absolute;width:8px;height:12px;border-radius:2px;top:50%;left:50%;animation:chispa 1.2s ease-out forwards}
@keyframes chispa{to{transform:translate(var(--x),var(--y)) rotate(var(--r));opacity:0}}
/* recorrido guiado */
.guia{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:10;background:#0F172A;color:#fff;border-radius:999px;padding:8px;display:flex;align-items:center;gap:8px;box-shadow:0 12px 30px rgba(15,23,42,.3);animation:sube .35s cubic-bezier(.2,.8,.2,1)}
.guia[hidden]{display:none}.guia .btn{box-shadow:none}.guia .cuenta{font-size:14px;padding:0 6px;white-space:nowrap}
.guia .salir{background:transparent;border:0;color:#CBD5E1;padding:8px 12px}@keyframes sube{from{opacity:0;transform:translate(-50%,20px)}}
footer{padding:22px 20px 90px;font-size:13px;color:#64748B}
@media (max-width:640px){.barra .in{padding:8px 12px;flex-wrap:nowrap}.largo{display:none}.btn{padding:7px 12px;font-size:14px}.progreso{font-size:13px;gap:6px}.anillo{width:32px;height:32px}.botones{gap:6px;flex-wrap:nowrap}.guia{width:calc(100% - 24px);justify-content:space-between}.guia .btn{padding:7px 10px}.guia .cuenta{font-size:13px;padding:0}.guia .salir{padding:6px}.semaforo{grid-template-columns:1fr}.poste{flex-direction:row;justify-content:center}.nodo .nt{font-size:12px}.hero{padding-top:30px}.cuad{grid-template-columns:1fr}.matriz{grid-template-columns:1fr}.eje{display:none}}
@media (prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important}html{scroll-behavior:auto}.entra{opacity:1;transform:none}}
</style></head>
<body class="no-js t-${j.tipo}">
<header class="hero"><span class="burbuja b1"></span><span class="burbuja b2"></span><span class="burbuja b3"></span>
<div class="in"><div class="mod">Módulo ${m.n} · ${esc(m.nombre)}</div><h1>${esc(j.titulo)}</h1><p>${negrita(j.bajada)}</p></div></header>
<nav class="barra" aria-label="Controles de la infografía"><div class="in">
<div class="progreso"><svg class="anillo" viewBox="0 0 40 40" aria-hidden="true"><circle class="f" cx="20" cy="20" r="15.9"/><circle class="v" cx="20" cy="20" r="15.9" pathLength="100"/></svg>
<span id="txtProg" aria-live="polite">Exploraste 0 de ${total}</span></div>
<div class="botones"><button class="btn" type="button" id="btnGuia" aria-label="Recorrido guiado">▶<span class="largo"> Recorrido</span> guiado</button><button class="btn sec" type="button" id="btnTodo">Abrir todo</button><button class="btn sec" type="button" id="btnReset" aria-label="Reiniciar">↺<span class="largo"> Reiniciar</span></button></div>
</div></nav>
<main>${cuerpo}</main>
<section class="clave cerrada" id="clave" aria-label="Idea clave"><div class="caja"><div class="texto">${negrita(j.clave)}</div>
<div class="velo"><span>🔒 Explora todas las partes para descubrir la idea clave</span><button class="btn sec" type="button" id="btnClave">Verla ahora</button></div></div></section>
<div class="guia" id="guia" hidden role="group" aria-label="Recorrido guiado"><button class="btn sec" type="button" id="gAnt">‹ Anterior</button><span class="cuenta" id="gCuenta"></span><button class="btn" type="button" id="gSig">Siguiente ›</button><button class="salir" type="button" id="gSalir">Salir</button></div>
<footer>${esc(curso.titulo)} · Infografía interactiva del módulo ${m.n}${j.pie ? ` · ${esc(j.pie)}` : ''}</footer>
<script>
(() => {
const TOTAL = ${total}, TIPO = ${JSON.stringify(j.tipo)}, PARTES = ${JSON.stringify(items.map(x => ({ t: x.titulo, e: (x.ejemplo || '').replace(/^«|»\.?$/g, '') })))};
const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
document.body.classList.replace('no-js', 'js');
const vistos = new Set();
let retomando = false;
const tarjetas = $$('.tarjeta'), paneles = $$('.panel'), luces = $$('.luz');
const anillo = $('.anillo .v');

// SCORM 1.2 (solo si hay un LMS; fuera de él no hace nada): incompleto al abrir, puntaje = % explorado (se guarda el mejor),
// completado al explorar todo, y las partes vistas quedan en suspend_data para retomar.
const lms = (() => {
  let api = null, activo = false, mejor = 0, completo = false;
  const buscar = w => {
    for (let n = 0; w && n < 12; n++) {
      try { if (w.API) return w.API; } catch (e) { return null; }
      if (!w.parent || w.parent === w) break;
      w = w.parent;
    }
    return null;
  };
  try { api = buscar(window) || (window.opener ? buscar(window.opener) : null); } catch (e) { api = null; }
  const llamar = (f, ...a) => { try { return String(api[f](...a)); } catch (e) { return ''; } };
  return {
    iniciar() {
      if (!api || llamar('LMSInitialize', '') !== 'true') return [];
      activo = true;
      mejor = Number(llamar('LMSGetValue', 'cmi.core.score.raw')) || 0;
      const estado = llamar('LMSGetValue', 'cmi.core.lesson_status');
      completo = estado === 'completed' || estado === 'passed';
      if (!estado || estado === 'not attempted') llamar('LMSSetValue', 'cmi.core.lesson_status', 'incomplete');
      llamar('LMSCommit', '');
      try { return JSON.parse(llamar('LMSGetValue', 'cmi.suspend_data') || '[]').filter(i => i >= 0 && i < TOTAL); } catch (e) { return []; }
    },
    guardar(lista) {
      if (!activo) return;
      mejor = Math.max(mejor, Math.round((lista.length / TOTAL) * 100));
      llamar('LMSSetValue', 'cmi.suspend_data', JSON.stringify(lista));
      llamar('LMSSetValue', 'cmi.core.score.min', '0');
      llamar('LMSSetValue', 'cmi.core.score.max', '100');
      llamar('LMSSetValue', 'cmi.core.score.raw', String(mejor));
      if (lista.length === TOTAL) completo = true;
      llamar('LMSSetValue', 'cmi.core.lesson_status', completo ? 'completed' : 'incomplete');
      llamar('LMSCommit', '');
    },
    cerrar() { if (!activo) return; activo = false; llamar('LMSFinish', ''); },
  };
})();
addEventListener('pagehide', () => lms.cerrar());

function avance() {
  anillo.style.strokeDashoffset = 100 - (vistos.size / TOTAL) * 100;
  $('#txtProg').innerHTML = vistos.size === TOTAL ? '¡Listo!<span class="largo"> Exploraste todo</span>' : '<span class="largo">Exploraste </span>' + vistos.size + ' de ' + TOTAL;
  if (TIPO === 'pasos') {
    const ult = Math.max(-1, ...[...vistos]);
    $('.linea').style.setProperty('--av', (ult + 1) / tarjetas.length);
  }
  $$('.nodo').forEach(n => n.classList.toggle('vista', vistos.has(+n.dataset.ir)));
  if (vistos.size === TOTAL) abrirClave(!retomando);
}
function marcar(i) { if (!vistos.has(i)) { vistos.add(i); avance(); lms.guardar([...vistos]); } }

function abrir(i, solo) {
  const t = tarjetas[i]; if (!t) return;
  if (solo) tarjetas.forEach(x => x !== t && cerrar(x));
  t.classList.remove('entra', 'ya');
  t.classList.add('abierta'); t.querySelector('.cab').setAttribute('aria-expanded', 'true');
  t.classList.add('vista'); marcar(i);
  $$('[data-ir]').forEach(b => b.classList.toggle('on', +b.dataset.ir === i));
  if (TIPO === 'matriz') $('.cuad').classList.add('enfoque');
}
function cerrar(t) { t.classList.remove('abierta'); t.querySelector('.cab').setAttribute('aria-expanded', 'false'); }

tarjetas.forEach(t => t.querySelector('.cab').addEventListener('click', () => {
  const i = +t.dataset.i;
  if (t.classList.contains('abierta') && TIPO !== 'ciclo') { cerrar(t); if (TIPO === 'matriz' && !$('.cuad .abierta')) $('.cuad').classList.remove('enfoque'); }
  else abrir(i, TIPO === 'matriz' || TIPO === 'ciclo');
}));
$$('[data-ir]').forEach(b => b.addEventListener('click', () => {
  const i = +b.dataset.ir; abrir(i, TIPO === 'ciclo');
  tarjetas[i].scrollIntoView({ behavior: quieto ? 'auto' : 'smooth', block: 'nearest' });
}));

function encender(i) {
  luces.forEach(l => l.setAttribute('aria-pressed', String(+l.dataset.i === i)));
  paneles.forEach(p => p.classList.toggle('on', +p.dataset.i === i));
  const pista = $('.pista-luz'); if (pista) pista.hidden = true;
  marcar(i);
}
luces.forEach(l => l.addEventListener('click', () => encender(+l.dataset.i)));

// Anatomía: escribe el prompt con los ejemplos de cada parte
let escribiendo = 0;
const btnArmar = $('#btnArmar');
if (btnArmar) btnArmar.addEventListener('click', async () => {
  const yo = ++escribiendo, caja = $('#armado'); caja.innerHTML = '';
  for (const [k, p] of PARTES.entries()) {
    if (!p.e) continue;
    const s = document.createElement('span'); s.className = 'p'; s.title = p.t;
    s.style.background = 'color-mix(in srgb, ${ac} ' + (55 - k * 8) + '%, transparent)';
    caja.append(s, ' ');
    abrir(k);
    for (const ch of p.e) { if (yo !== escribiendo) return; s.textContent += ch; if (!quieto) await new Promise(r => setTimeout(r, 14)); }
  }
  const c = document.createElement('span'); c.className = 'cursor'; caja.append(c);
});

function chispas(el) {
  if (quieto) return;
  const colores = ['${ac}', '#F59E0B', '#10B981', '#F43F5E', '#38BDF8'];
  for (let k = 0; k < 28; k++) {
    const s = document.createElement('span'); s.className = 'chispa';
    const ang = Math.random() * Math.PI * 2, d = 90 + Math.random() * 160;
    s.style.cssText = '--x:' + Math.cos(ang) * d + 'px;--y:' + Math.sin(ang) * d + 'px;--r:' + (Math.random() * 720 - 360) + 'deg;background:' + colores[k % colores.length];
    el.append(s); setTimeout(() => s.remove(), 1300);
  }
}
function abrirClave(festejo = true) {
  const c = $('#clave'); if (c.classList.contains('abierta')) return;
  c.classList.replace('cerrada', 'abierta');
  if (festejo) chispas(c.querySelector('.caja'));
}
$('#btnClave').addEventListener('click', () => abrirClave(false));

$('#btnTodo').addEventListener('click', () => {
  if (TIPO === 'ciclo') { tarjetas.forEach((t, i) => { t.classList.add('abierta', 'vista'); marcar(i); }); }
  else tarjetas.forEach((t, i) => abrir(i));
  luces.forEach(l => marcar(+l.dataset.i)); paneles.forEach(p => p.classList.add('on'));
  if (TIPO === 'matriz') $('.cuad').classList.remove('enfoque');
});
$('#btnReset').addEventListener('click', () => {
  salirGuia(); vistos.clear(); escribiendo++;
  tarjetas.forEach(t => { cerrar(t); t.classList.remove('vista'); });
  luces.forEach(l => l.setAttribute('aria-pressed', 'false')); paneles.forEach(p => p.classList.remove('on'));
  const pista = $('.pista-luz'); if (pista) pista.hidden = false;
  const arm = $('#armado'); if (arm) arm.innerHTML = '';
  $$('[data-ir]').forEach(b => b.classList.remove('on')); $('.cuad')?.classList.remove('enfoque');
  $('#clave').classList.replace('abierta', 'cerrada'); avance();
  scrollTo({ top: 0, behavior: quieto ? 'auto' : 'smooth' });
});

// Recorrido guiado: una parte a la vez, con botones o flechas
let paso = -1;
const guia = $('#guia');
function irA(k) {
  paso = Math.max(0, Math.min(TOTAL - 1, k));
  $$('.foco').forEach(x => x.classList.remove('foco'));
  let el;
  if (paso < tarjetas.length) { abrir(paso, true); el = tarjetas[paso]; }
  else { encender(paso); el = paneles.find(p => +p.dataset.i === paso); }
  el.classList.add('foco');
  (TIPO === 'ciclo' ? $('.rueda') : el).scrollIntoView({ behavior: quieto ? 'auto' : 'smooth', block: 'center' });
  $('#gCuenta').textContent = 'Parte ' + (paso + 1) + ' de ' + TOTAL;
  $('#gAnt').disabled = paso === 0;
  $('#gSig').textContent = paso === TOTAL - 1 ? 'Terminar ✓' : 'Siguiente ›';
}
function salirGuia() { guia.hidden = true; document.body.classList.remove('guiando'); $$('.foco').forEach(x => x.classList.remove('foco')); paso = -1; }
$('#btnGuia').addEventListener('click', () => { guia.hidden = false; document.body.classList.add('guiando'); irA(0); $('#gSig').focus(); });
$('#gAnt').addEventListener('click', () => irA(paso - 1));
$('#gSig').addEventListener('click', () => {
  if (paso === TOTAL - 1) { salirGuia(); abrirClave(); $('#clave').scrollIntoView({ behavior: quieto ? 'auto' : 'smooth', block: 'center' }); }
  else irA(paso + 1);
});
$('#gSalir').addEventListener('click', salirGuia);
addEventListener('keydown', e => {
  if (guia.hidden) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); $('#gSig').click(); }
  if (e.key === 'ArrowLeft' && paso > 0) { e.preventDefault(); irA(paso - 1); }
  if (e.key === 'Escape') salirGuia();
});

// Entrada escalonada al aparecer en pantalla
const anima = [...tarjetas, ...$$('.semaforo, .rueda, .prompt')];
if (!quieto && 'IntersectionObserver' in window) {
  anima.forEach(el => el.classList.add('entra'));
  // al terminar la entrada se quitan las clases, para que el hover no herede el retraso escalonado
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const t = e.target; t.classList.add('ya'); io.unobserve(t); setTimeout(() => t.classList.remove('entra', 'ya'), 1400); } }), { threshold: .12 });
  anima.forEach(el => io.observe(el));
}
// Retoma lo que ya exploró en el LMS: quedan marcadas, cerradas
retomando = true;
for (const i of lms.iniciar()) { vistos.add(i); tarjetas[i]?.classList.add('vista'); }
avance();
retomando = false;
})();
</script></body></html>`;
}
