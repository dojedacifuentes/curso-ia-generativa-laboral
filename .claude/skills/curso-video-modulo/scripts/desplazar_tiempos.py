"""Corre los tiempos de un video después de empalmar_voz.py (insertar o reemplazar tramos de voz).

Uso:  python desplazar_tiempos.py videos/M<n>-<tipo>/mapa.json ARCHIVO [ARCHIVO …]

Cambia data-in, data-out, data-span, data-on, data-focus, data-check, data-hl, data-sel, data-keys y SUBS en
cuerpo.html o video.html, y los tiempos de config.json (avatar.*_t, intro_out, cierre_in, duracion y la ventana de cada
clip). Un tiempo antes de un tramo queda igual; uno después se corre lo que cambió el largo; uno dentro de un tramo
reemplazado se reparte en proporción. Lo que deba quedar en el borde exacto de un tramo (p. ej. la escena que empieza
con la frase insertada) hay que revisarlo a mano.
"""
import json, pathlib, re, sys

mapa = json.loads(pathlib.Path(sys.argv[1]).read_text(encoding='utf-8'))


def f(t):
    d = 0.0
    for t0, t1, n in mapa:
        if t < t0 or (t == t0 and t1 > t0):
            break
        if t1 > t0 and t < t1:  # dentro de un tramo reemplazado
            return round(t0 + d + (t - t0) * n / (t1 - t0), 2)
        d += n - (t1 - t0)
    return round(t + d, 2)


fmt = lambda x: f'{f(float(x)):.2f}'
for arch in map(pathlib.Path, sys.argv[2:]):
    s = arch.read_text(encoding='utf-8')
    if arch.suffix == '.json':
        c = json.loads(s)
        av = c.get('avatar', {})
        for k in ('intro_out', 'cierre_in', 'cierre_master_t'):
            if k in av:
                av[k] = f(av[k])
        for cl in c.get('clips', []):
            for k in ('visible_desde', 'visible_hasta', 'fade_out'):
                cl[k] = f(cl[k])
        c['duracion'] = f(c['duracion'])
        arch.write_text(json.dumps(c, ensure_ascii=False, indent=2), encoding='utf-8')
    else:
        s = re.sub(r'(data-(?:in|out|check|hl|sel)=")([\d.]+)"', lambda m: m.group(1) + fmt(m.group(2)) + '"', s)
        s = re.sub(r'(data-(?:span|on)=")([\d.]+),([\d.]+)"', lambda m: f'{m.group(1)}{fmt(m.group(2))},{fmt(m.group(3))}"', s)
        s = re.sub(r'(data-focus=")([\d.]+),([\d.]+),([\d.]+)"', lambda m: f'{m.group(1)}{fmt(m.group(2))},{fmt(m.group(3))},{m.group(4)}"', s)
        s = re.sub(r'(data-keys=")([^"]+)"', lambda m: m.group(1) + ','.join(f'{fmt(p.split(":")[0])}:{p.split(":")[1]}' for p in m.group(2).split(',')) + '"', s)
        s = re.sub(r'const SUBS = \[.*?\];', lambda m: re.sub(r'\[([\d.]+),([\d.]+),"', lambda q: f'[{fmt(q.group(1))},{fmt(q.group(2))},"', m.group(0)), s, flags=re.S)
        arch.write_text(s, encoding='utf-8')
    print('ok', arch)
