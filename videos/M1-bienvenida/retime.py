"""Reajusta los tiempos de video.html (voz Catalina, 160.21 s) a la voz de EVA (157.07 s).
Anclas: inicio de cada subtítulo en la voz vieja -> inicio de su primera palabra en la nueva (timestamps de HeyGen)."""
import re, bisect
NEW = [(0.0,2.56),(2.64,5.68),(6.08,9.12),(9.68,12.48),(12.96,17.28),(18.457,20.96),(21.886,25.28),(25.68,29.68),
 (30.08,33.44),(33.8,38.72),(39.76,41.84),(42.24,46.0),(46.36,48.48),(48.52,50.64),(51.669,53.92),(54.4,56.8),
 (57.2,61.6),(62.55,64.16),(64.72,67.36),(67.707,72.08),(73.177,74.96),(75.16,77.44),(77.8,79.68),(80.08,84.24),
 (85.24,86.16),(86.56,90.56),(90.88,94.08),(94.44,97.6),(98.64,101.36),(101.8,105.28),(105.64,110.24),
 (110.72,114.32),(114.72,117.44),(118.606,121.6),(122.04,126.32),(126.8,131.44),(131.84,134.64),(135.0,136.88),
 (137.32,140.64),(141.76,144.16),(144.56,149.36),(149.76,151.04),(151.52,155.12),(155.58,156.8)]
OLD_DUR, NEW_DUR = 160.21, 157.074
h = open('video.html', encoding='utf-8').read()
i = h.index('const SUBS = ['); j = h.index('];', i)
subs = re.findall(r'\[([\d.]+),([\d.]+),"(.*?)"\]', h[i:j])
assert len(subs) == len(NEW), (len(subs), len(NEW))
xs = [0.0] + [float(s[0]) for s in subs[1:]] + [OLD_DUR]
ys = [0.0] + [n[0] for n in NEW[1:]] + [NEW_DUR]
def f(t):
    if t >= xs[-1]: return t - xs[-1] + ys[-1]
    k = max(1, bisect.bisect_right(xs, t)); k = min(k, len(xs) - 1)
    x0, x1, y0, y1 = xs[k-1], xs[k], ys[k-1], ys[k]
    return y0 + (t - x0) * (y1 - y0) / (x1 - x0)
r = lambda t: f'{max(0.0, f(float(t))):.2f}'
body = h[:i]
body = re.sub(r'data-in="([\d.]+)"', lambda m: f'data-in="{r(m[1])}"', body)
body = re.sub(r'data-span="([\d.]+),([\d.]+)"', lambda m: f'data-span="{r(m[1])},{r(m[2])}"', body)
# subtítulos nuevos: desde la primera palabra hasta la última + 0.35 s, sin pisar el siguiente
cues = []
for k, ((a, b), (_, _, txt)) in enumerate(zip(NEW, subs)):
    st = max(0.05, a - 0.05)
    nxt = NEW[k+1][0] - 0.08 if k + 1 < len(NEW) else NEW_DUR
    cues.append(f'[{st:.2f},{min(b + 0.35, nxt):.2f},"{txt}"]')
out = body + 'const SUBS = [' + ','.join(cues) + h[j:]
# otros tiempos sueltos en el script (DUR, etc.)
open('video.html', 'w', encoding='utf-8').write(out)
print('ok', len(cues), 'subtítulos; data-in', len(re.findall('data-in=', body)), 'data-span', len(re.findall('data-span=', body)))

# segunda pasada: data-out, data-on y tiempos escritos en el script (siguen en la voz vieja)
h = open('video.html', encoding='utf-8').read()
i = h.index('const SUBS = ['); j = h.index('];', i)
def pasada(a):
    a = re.sub(r'data-out="([\d.]+)"', lambda m: f'data-out="{r(m[1])}"', a)
    a = re.sub(r'data-on="([\d.]+),([\d.]+)"', lambda m: f'data-on="{r(m[1])},{m[2] if m[2]=="999" else r(m[2])}"', a)
    a = re.sub(r"\['(h\d)',([\d.]+)\]", lambda m: f"['{m[1]}',{r(m[2])}]", a)
    a = re.sub(r'prog\(t,(\d[\d.]*),', lambda m: f'prog(t,{r(m[1])},', a)
    a = re.sub(r't>=([\d.]+) && t<([\d.]+)', lambda m: f't>={r(m[1])} && t<{r(m[2])}', a)
    return a
open('video.html', 'w', encoding='utf-8').write(pasada(h[:i]) + h[i:j] + pasada(h[j:]))
print('segunda pasada ok')
