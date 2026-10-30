// Motor de animación de los videos de módulo (versión con la marca Empoderatech).
// Lo usa armar_html.py: el cuerpo de cada video define SUBS (y WORDS sale de palabras.json).
// Atributos: data-span="entra,sale" (escenas y paneles), clase .a + data-in/data-out/data-d/data-fx
// (rise, fade, pop, grow, draw, lin), data-on (segmentos del encabezado y temas del riel), data-focus="t0,t1,zoom",
// data-check="t", data-hl="t" (subrayado), data-sel="t" (marca de elegido), data-keys="t:pos,t:pos" (perilla, % de left),
// data-slot="nombre" (recuadro de video que llena compose.py).
window.SUBS = SUBS;
const CUEW = SUBS.map(c=>WORDS.filter(w=>w[0]>=c[0]-0.05 && w[0]<c[1]));

const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
const ease=p=>1-Math.pow(1-p,3);
const prog=(t,s,d)=>clamp((t-s)/d);
const FADE=0.4;
const r3=x=>Math.round(x*1000)/1000;
const pares=s=>s.split(',').map(Number);

const spans=[...document.querySelectorAll('[data-span]')].map(el=>{const [a,b]=pares(el.dataset.span);return {el,a,b};});
const anims=[...document.querySelectorAll('.a')].map(el=>({el,s:+el.dataset.in,d:+(el.dataset.d||0.5),fx:el.dataset.fx||'rise',o:el.dataset.out?+el.dataset.out:null,len:+(el.dataset.len||400)}));
const segs=[...document.querySelectorAll('.seg')].map(el=>{const [a,b]=pares(el.dataset.on);return {el,a,b,on:el.querySelector('.on'),tx:el.querySelector('span')};});
const topics=[...document.querySelectorAll('.topic')].map(el=>{const [a,b]=pares(el.dataset.on);return {el,a,b,bg:el.querySelector('.bgc'),nf:el.querySelector('.nf'),tx:el.querySelector('.tx')};});
const T0=topics.length?Math.min(...topics.map(k=>k.a)):0, T1=topics.length?Math.max(...topics.map(k=>k.b)):0;
const toks=[...document.querySelectorAll('.tok')].map(el=>({el,s:+el.dataset.in}));
const checks=[...document.querySelectorAll('[data-check]')].map(el=>({el,s:+el.dataset.check}));
const hls=[...document.querySelectorAll('[data-hl]')].map(el=>({el,s:+el.dataset.hl}));
const sels=[...document.querySelectorAll('[data-sel]')].map(el=>({el,s:+el.dataset.sel}));
const knobs=[...document.querySelectorAll('[data-keys]')].map(el=>({el,k:el.dataset.keys.split(',').map(p=>p.split(':').map(Number))}));
const subEl=document.querySelector('#subs div');
const DUR=SUBS[SUBS.length-1][1];
const stage=document.getElementById('stage'), glow=document.getElementById('glow'), bar=document.getElementById('progress');
// cámara: todo lo que no es recuadro de video va en una capa que se acerca, entra con zoom y se enfoca en lo que se nombra
const cams=[...document.querySelectorAll('section.scene')].map(sc=>{
  const w=document.createElement('div'); w.className='camwrap';
  [...sc.children].filter(c=>!c.matches('[data-slot]')).forEach(c=>w.appendChild(c));
  sc.insertBefore(w,sc.firstChild);
  const [a,b]=pares(sc.dataset.span);
  const focus=[...w.querySelectorAll('[data-focus]')].map(el=>{const [f0,f1,z]=pares(el.dataset.focus);
    const r=el.getBoundingClientRect(); return {f0,f1,z,cx:r.left+r.width/2,cy:r.top+r.height/2};});
  return {w,a,b:Math.min(b,DUR),focus};
});

function renderAt(t){
  const sig=[];
  stage.style.backgroundPosition=`${(18+t*6).toFixed(1)}px ${(18+t*3).toFixed(1)}px`;
  glow.style.setProperty('--gx',(30+12*Math.sin(t/9)).toFixed(2)+'%'); glow.style.setProperty('--gy',(32+10*Math.cos(t/11)).toFixed(2)+'%');
  glow.style.setProperty('--hx',(72+10*Math.cos(t/8)).toFixed(2)+'%'); glow.style.setProperty('--hy',(68+12*Math.sin(t/10)).toFixed(2)+'%');
  bar.style.transform=`scaleX(${clamp(t/DUR).toFixed(4)})`;
  sig.push(t.toFixed(3));
  for(const c of cams){
    if(t<c.a-0.05||t>c.b+0.6){ continue; }
    const pin=c.a<=0.001?1:ease(prog(t,c.a,0.7)), pout=ease(prog(t,c.b,0.4));
    let S=(1+0.03*clamp((t-c.a)/Math.max(1,c.b-c.a)))*(1+0.06*(1-pin))*(1-0.02*pout);
    let blur=(1-pin)*9+pout*6, ox=960, oy=540;
    for(const f of c.focus){
      const k=ease(prog(t,f.f0,0.8))*(1-ease(prog(t,f.f1,0.8)));
      if(k>0){ S*=1+(f.z-1)*k; ox=960+(f.cx-960)*0.5; oy=540+(f.cy-540)*0.5; }
    }
    c.w.style.transformOrigin=`${ox.toFixed(1)}px ${oy.toFixed(1)}px`;
    c.w.style.transform=`scale(${S.toFixed(4)})`;
    c.w.style.filter=blur>0.05?`blur(${blur.toFixed(2)}px)`:'none';
  }
  for(const s of spans){
    const pin = s.a<=0.001 ? 1 : prog(t,s.a+0.2,0.3);
    const pout = prog(t,s.b,0.25);
    const o = r3(pin*(1-pout));
    s.el.style.opacity=o; s.el.style.visibility=o<=0?'hidden':'visible'; sig.push(o);
  }
  for(const a of anims){
    let p;
    if(a.fx==='lin'){ const dl=+(a.el.dataset.d||FADE); p = a.s<=0.001?1:prog(t,a.s,dl); if(a.o!==null) p*=1-prog(t,a.o,FADE); }
    else { p=ease(prog(t,a.s,a.d)); if(a.o!==null) p*=1-ease(prog(t,a.o,0.35)); }
    p=r3(p); sig.push(p);
    const st=a.el.style;
    switch(a.fx){
      case 'rise': st.opacity=p; st.transform=p>=1?'none':`translateY(${((1-p)*22).toFixed(2)}px)`; st.filter=p>=1?'none':`blur(${((1-p)*6).toFixed(2)}px)`; break;
      case 'fade': case 'lin': st.opacity=p; break;
      case 'pop': st.opacity=p; st.transform=p>=1?'none':`scale(${(0.82+0.18*p).toFixed(3)})`; st.filter=p>=1?'none':`blur(${((1-p)*4).toFixed(2)}px)`; break;
      case 'grow': st.transform=`scaleX(${p})`; st.transformOrigin='left'; break;
      case 'draw': st.strokeDashoffset=((1-p)*a.len).toFixed(1); st.opacity=p>0?1:0; break;
    }
  }
  for(const g of segs){
    const on = r3(prog(t,g.a,0.3)*(1-prog(t,g.b,0.3)));
    g.on.style.opacity=on; g.tx.style.color = on>0.5?'#fff':''; sig.push(on);
  }
  const anyActive = t>=T0 && t<T1;
  for(const k of topics){
    const act=r3(prog(t,k.a,0.35)*(1-prog(t,k.b,0.35)));
    k.bg.style.opacity=act; k.nf.style.opacity=act;
    k.tx.style.opacity = r3(1-0.55*(anyActive ? 1-act : 0));
    sig.push(act);
  }
  for(const k of toks){ const hot = t<k.s ? 0 : r3(1-prog(t,k.s+0.12,0.45)); k.el.style.setProperty('--hot',hot); sig.push(hot); }
  for(const h of hls){ const p=r3(ease(prog(t,h.s,0.45))); h.el.style.setProperty('--p',p); sig.push(p); }
  for(const s of sels){ const p=r3(ease(prog(t,s.s,0.4))); s.el.style.opacity=p; sig.push(p); }
  for(const n of knobs){
    let v=n.k[0][1];
    for(let i=1;i<n.k.length;i++){ const [ta,va]=n.k[i-1], [tb,vb]=n.k[i]; if(t>=ta) v=va+(vb-va)*ease(prog(t,ta,Math.max(0.01,tb-ta))); }
    n.el.style.left=v.toFixed(2)+'%'; sig.push(v.toFixed(2));
  }
  for(const c of checks){ const p=r3(ease(prog(t,c.s,0.3))); c.el.style.opacity=p; c.el.style.transform=p>=1?'none':`scale(${(0.6+0.4*p).toFixed(3)})`; sig.push(p); }
  let cue='';
  for(let q=0;q<SUBS.length;q++){ const [a,b,txt]=SUBS[q]; if(t>=a && t<b){
    const ws=CUEW[q], k=ws.filter(w=>w[0]<=t).length, vivo=k>0 && t<ws[k-1][1]+0.1; let i=0;
    cue=txt.split('<br>').map(l=>l.split(' ').map(p=>{const c=i<k?((i===k-1&&vivo)?'cur':'dic'):'pen'; i++; return `<span class="${c}">${p}</span>`;}).join(' ')).join('<br>');
    break; } }
  if(subEl.innerHTML!==cue) subEl.innerHTML=cue; sig.push(cue);
  return sig.join('|');
}
window.renderAt=renderAt;
window.slotInfo=()=>[...document.querySelectorAll('[data-slot]')].map(el=>{
  const r=el.getBoundingClientRect(); const sc=el.closest('[data-span]');
  const [sa,sb]=pares(sc.dataset.span);
  return {name:el.dataset.slot,x:Math.round(r.left),y:Math.round(r.top),w:Math.round(r.width),h:Math.round(r.height),
    radius:parseFloat(getComputedStyle(el).borderRadius),in:+el.dataset.in,out:el.dataset.out?+el.dataset.out:null,sceneIn:sa,sceneOut:sb};
});
if(location.search.includes('preview')) document.body.classList.add('preview');
const m=location.search.match(/t=([\d.]+)/); renderAt(m?+m[1]:0);
