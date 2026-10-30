"""Arma los subtítulos (const SUBS) desde palabras.json, sin escribirlos a mano.

Uso:  python subs_auto.py videos/M<n>-<tipo>          (reemplaza `const SUBS = [...]` en cuerpo.html)
      python subs_auto.py videos/M<n>-<tipo> --ver    (solo los muestra)

Reglas (las de la skill, §4): cues de máximo 2 líneas y ~50 caracteres por línea, cortados en el fin de frase, en las
pausas largas o en una coma cuando la línea ya es larga; «Módulo uno» pasa a «Módulo 1». Cada cue dura desde la primera
palabra hasta la última + 0,15 s, sin pisar al siguiente.
"""
import json, pathlib, re, sys

d = pathlib.Path(sys.argv[1])
P = json.loads((d / 'palabras.json').read_text(encoding='utf-8'))
NUM = {'uno': '1', 'dos': '2', 'tres': '3', 'cuatro': '4', 'cinco': '5', 'seis': '6'}
for k in range(1, len(P)):  # números en cifras después de «Módulo»
    base = re.sub(r'[^\wáéíóúñ]', '', P[k]['w'].lower())
    if P[k - 1]['w'].lower().strip('¡¿') == 'módulo' and base in NUM:
        P[k]['w'] = P[k]['w'].lower().replace(base, NUM[base])

MAXL, MAXC = 50, 96
cues, cur = [], []
largo = lambda ws: len(' '.join(w['w'] for w in ws))
for k, w in enumerate(P):
    cur.append(w)
    gap = P[k + 1]['s'] - w['e'] if k + 1 < len(P) else 9
    fin = w['w'][-1] in '.!?»' or (w['w'].endswith(':') and largo(cur) > 30)
    coma = w['w'][-1] in ',;:' and largo(cur) > 62
    nxt = largo(cur + [P[k + 1]]) if k + 1 < len(P) else 0
    if fin or coma or gap > 0.55:
        cues.append(cur); cur = []
    elif nxt > MAXC:  # demasiado largo: se corta en la última coma, no a mitad de frase
        j = max((i for i, x in enumerate(cur[:-1]) if x['w'][-1] in ',;:' and i >= 2), default=len(cur) - 1)
        cues.append(cur[:j + 1]); cur = cur[j + 1:]
if cur:
    cues.append(cur)
# un cue muy corto («¡Hola!») se une al siguiente si la pausa es breve
k = 0
while k + 1 < len(cues):
    if largo(cues[k]) < 12 and cues[k + 1][0]['s'] - cues[k][-1]['e'] < 1.0 and largo(cues[k] + cues[k + 1]) <= MAXC:
        cues[k:k + 2] = [cues[k] + cues[k + 1]]
    else:
        k += 1
DEBIL = {'lo', 'la', 'el', 'los', 'las', 'un', 'una', 'de', 'del', 'en', 'y', 'o', 'a', 'que', 'con', 'por', 'para',
         'al', 'se', 'tu', 'su', 'como', 'sin', 'e', 'ni', 'le', 'te', 'mi', 'más'}


def lineas(ws):
    t = ' '.join(w['w'] for w in ws)
    if len(t) <= MAXL + 4:
        return t
    mejor, pb = None, 1e9
    for i in range(1, len(ws)):  # corte más parejo, con premio si cae después de una coma
        a, b = ' '.join(w['w'] for w in ws[:i]), ' '.join(w['w'] for w in ws[i:])
        pen = (abs(len(a) - len(b)) - (14 if ws[i - 1]['w'][-1] in ',;:' else 0) + (80 if max(len(a), len(b)) > MAXL + 4 else 0)
               + (16 if ws[i - 1]['w'].lower() in DEBIL else 0))
        if pen < pb:
            mejor, pb = (a, b), pen
    return mejor[0] + '<br>' + mejor[1]


subs = []
for i, ws in enumerate(cues):
    a = ws[0]['s']
    b = ws[-1]['e'] + 0.15
    if i + 1 < len(cues):
        b = min(b, cues[i + 1][0]['s'] - 0.03)
    subs.append([round(a, 2), round(b, 2), lineas(ws)])
linea = 'const SUBS = [' + ','.join(f'[{a:.2f},{b:.2f},{json.dumps(t, ensure_ascii=False)}]' for a, b, t in subs) + '];'
if '--ver' in sys.argv:
    for a, b, t in subs:
        print(f'{a:7.2f} {b:7.2f}  {t}')
else:
    c = (d / 'cuerpo.html').read_text(encoding='utf-8')
    c = re.sub(r'const SUBS = \[.*?\];', lambda m: linea, c, count=1, flags=re.S)
    (d / 'cuerpo.html').write_text(c, encoding='utf-8')
    print(len(subs), 'subtítulos ->', d / 'cuerpo.html')
