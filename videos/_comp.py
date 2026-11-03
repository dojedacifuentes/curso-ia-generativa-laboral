import json, re
ARCOS = '<svg class="arcos" viewBox="0 0 560 280" style="right:-40px;bottom:-30px;width:560px;height:280px;opacity:.55"><circle cx="560" cy="280" r="154" fill="none" stroke="#BE3455" stroke-width="3"/><circle cx="560" cy="280" r="244" fill="none" stroke="#BE3455" stroke-width="2.5" opacity=".8"/><circle cx="560" cy="280" r="333" fill="none" stroke="#BE3455" stroke-width="2" opacity=".6"/><circle cx="560" cy="280" r="423" fill="none" stroke="#BE3455" stroke-width="1.5" opacity=".4"/></svg>'
def escena(a, b, o, mod, texto):
    return f'''
<!-- ===== competencia del módulo, textual ({a:.1f}–{b:.1f}) ===== -->
<section class="scene" data-span="{a:.2f},{b:.2f}">
  {ARCOS}
  <div class="left-col" style="top:250px;width:1680px">
    <span class="tag a" data-in="{o+0.10:.2f}">Competencia del módulo</span>
    <p class="sub1 a" data-in="{o+0.40:.2f}" style="margin-top:22px">{mod}</p>
    <p class="comp a" data-in="{o+2.50:.2f}">{texto}</p>
  </div>
</section>
'''
C = json.load(open('../data/curso.json', encoding='utf-8'))
AE = {a['id']: a['texto'] for m in C['modulos'] for a in m['aes']}
def aecards(ids, ons):
    return ''.join(f'\n  <div class="aecard a" data-in="{a+0.4:.2f}" data-out="{b-0.15:.2f}" data-fx="fade"><small>Aprendizaje esperado</small><p>{AE[i]}</p></div>' for i, (a, b) in zip(ids, ons))
