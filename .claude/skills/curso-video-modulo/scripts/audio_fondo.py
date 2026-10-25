"""Música de fondo y efectos de sonido generados por código (sin licencias ni créditos).

Uso:  python audio_fondo.py videos/…/video.html DURACION carpeta_salida [--semilla 1]

Sale:
  musica.wav  base ambiental suave y «tecnológica» (pad + bajo + arpegio liviano), normalizada a -30 LUFS:
              compose.py la baja aún más mientras habla la voz (ducking).
  sfx.wav     efectos sincronizados con el HTML: «whoosh» en cada cambio de escena y de panel, un roce corto cuando
              entra un clip, «pop» suave en los elementos con data-fx="pop" (no en los tokens) y un «tick» en cada data-check.
"""
import re, sys, subprocess, pathlib, wave
import numpy as np

html, DUR, out = pathlib.Path(sys.argv[1]), float(sys.argv[2]), pathlib.Path(sys.argv[3])
seed = int(sys.argv[sys.argv.index('--semilla') + 1]) if '--semilla' in sys.argv else 1
rng = np.random.default_rng(seed)
SR = 44100
N = int(DUR * SR)
t = np.arange(N) / SR

def guardar(nombre, x):
    x = np.clip(x, -1, 1)
    y = (x * 32767).astype(np.int16)
    with wave.open(str(out / nombre), 'wb') as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(y.T.copy().tobytes() if y.ndim == 2 else y.tobytes())

def lp(x, fc):  # paso bajo de un polo
    a = np.exp(-2 * np.pi * fc / SR); y = np.empty_like(x); z = 0.0
    for i, v in enumerate(x): z = (1 - a) * v + a * z; y[i] = z
    return y

hz = lambda m: 440 * 2 ** ((m - 69) / 12)

# ---------- música: La m – Fa – Do – Sol, un acorde cada 6 s, con cruces suaves ----------
acordes = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]]
L = np.zeros(N); R = np.zeros(N)
seg = 6.0
for k in range(int(DUR // seg) + 2):
    t0 = k * seg - 1.0
    i0, i1 = max(0, int(t0 * SR)), min(N, int((t0 + seg + 2.0) * SR))
    if i0 >= i1: continue
    tt = t[i0:i1] - t0
    env = np.clip(tt / 1.6, 0, 1) * np.clip((seg + 2.0 - tt) / 1.6, 0, 1)
    for m in acordes[k % 4]:
        for det, canal in ((-0.08, L), (0.08, R)):
            f = hz(m + 12) * (1 + det / 100)
            onda = np.sin(2 * np.pi * f * tt) + 0.35 * np.sin(2 * np.pi * 2 * f * tt) + 0.12 * np.sin(2 * np.pi * 3 * f * tt)
            canal[i0:i1] += 0.05 * env * onda
    bajo = 0.09 * env * np.sin(2 * np.pi * hz(acordes[k % 4][0] - 12) * tt)
    L[i0:i1] += bajo; R[i0:i1] += bajo
# arpegio liviano en corcheas (80 bpm), notas del acorde que suena
paso = 60 / 80 / 2
for j in range(int(DUR / paso)):
    ts = j * paso; k = int((ts + 1.0) // seg) % 4
    m = acordes[k][j % 3] + 24
    i0 = int(ts * SR); n = int(0.35 * SR)
    if i0 + n > N: break
    tt = np.arange(n) / SR
    nota = 0.022 * np.exp(-tt * 9) * (2 / np.pi) * np.arcsin(np.sin(2 * np.pi * hz(m) * tt))
    pan = 0.5 + 0.35 * np.sin(j * 0.7)
    L[i0:i0 + n] += nota * (1 - pan); R[i0:i0 + n] += nota * pan
L, R = lp(L, 3800), lp(R, 3800)
fade = np.clip(t / 2.0, 0, 1) * np.clip((DUR - t) / 3.0, 0, 1)
mus = np.stack([L * fade, R * fade])
mus /= np.abs(mus).max() + 1e-9
out.mkdir(parents=True, exist_ok=True)
guardar('_musica_cruda.wav', mus * 0.8)
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(out / '_musica_cruda.wav'), '-af', 'loudnorm=I=-30:TP=-6:LRA=11',
                '-ar', str(SR), str(out / 'musica.wav')], check=True)
(out / '_musica_cruda.wav').unlink()

# ---------- efectos, desde los tiempos del HTML ----------
h = html.read_text(encoding='utf-8')
escenas = [float(a) for a in re.findall(r'<section class="scene" data-span="([\d.]+),', h) if float(a) > 0.5]
pops = [float(x) for x in re.findall(r'class="(?![^"]*\btok\b)[^"]*\ba\b[^"]*" data-in="([\d.]+)" data-fx="pop"', h)]
pops += [float(x) for x in re.findall(r'class="(?![^"]*\btok\b)[^"]*\ba\b[^"]*"[^>]*?data-fx="pop"[^>]*?data-in="([\d.]+)"', h)]
checks = [float(x) for x in re.findall(r'data-check="([\d.]+)"', h)]
paneles = [float(a) for a in re.findall(r'<div class="panel" data-span="([\d.]+),', h)]
slots = [float(x) for x in re.findall(r'class="slot a" data-in="([\d.]+)"', h) if float(x) > 0.5]
S = np.zeros((2, N))

def poner(ts, x, pan=0.5):
    i0 = int(ts * SR)
    if i0 < 0 or i0 >= N: return
    n = min(len(x), N - i0)
    S[0, i0:i0 + n] += x[:n] * (1 - pan) * 2 * 0.5; S[1, i0:i0 + n] += x[:n] * pan * 2 * 0.5

def whoosh():
    n = int(0.6 * SR); tt = np.arange(n) / SR
    ruido = rng.standard_normal(n)
    env = np.sin(np.pi * np.clip(tt / 0.6, 0, 1)) ** 2
    x = lp(ruido, 900) - lp(ruido, 250)           # banda media
    return 0.22 * env * x / (np.abs(x).max() + 1e-9)

def pop():
    n = int(0.09 * SR); tt = np.arange(n) / SR
    f = 950 - 350 * tt / 0.09
    return 0.16 * np.exp(-tt * 45) * np.sin(2 * np.pi * np.cumsum(f) / SR)

def tick():
    n = int(0.12 * SR); tt = np.arange(n) / SR
    return 0.14 * np.exp(-tt * 38) * (np.sin(2 * np.pi * 1320 * tt) + 0.5 * np.sin(2 * np.pi * 1980 * tt))

for ts in escenas: poner(ts - 0.25, whoosh(), 0.5)
for ts in paneles: poner(ts - 0.2, 0.55 * whoosh(), 0.5)
for ts in slots: poner(ts - 0.1, 0.45 * whoosh()[: int(0.35 * SR)], 0.55)
for ts in sorted(set(round(p, 2) for p in pops)): poner(ts, pop(), 0.6)
for ts in checks: poner(ts, tick(), 0.45)
guardar('sfx.wav', S)
print(f'musica.wav + sfx.wav -> {out}  (escenas {len(escenas)}, paneles {len(paneles)}, clips {len(slots)}, pops {len(set(pops))}, checks {len(checks)})')
