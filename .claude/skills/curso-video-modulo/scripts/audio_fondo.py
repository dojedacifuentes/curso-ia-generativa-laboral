"""Música de fondo y efectos de sonido generados por código (sin licencias ni créditos).

Uso:  python audio_fondo.py videos/…/video.html DURACION carpeta_salida [--semilla 1] [--estilo claro|oscuro]

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

# ---------- música ----------
# «claro» (por defecto desde el 30-10, pedido del usuario: «más normal, no tan oscura, sin exagerar, en loop»):
# un loop de 8 compases en Do mayor (Do–Sol–La m–Fa) a 96 bpm, piano suave + arpegio pulsado + bajo + shaker muy bajo,
# que se repite idéntico. «oscuro» = la base ambiental en La menor de los primeros videos.
ESTILO = sys.argv[sys.argv.index('--estilo') + 1] if '--estilo' in sys.argv else 'claro'
L = np.zeros(N); R = np.zeros(N)
if ESTILO == 'claro':
    BPM = 96; beat = 60 / BPM; LP = int(32 * beat * SR)
    lo_L, lo_R = np.zeros(LP), np.zeros(LP)
    def evento(ts, x, pan=0.5):  # suma con vuelta al inicio: el loop empalma sin corte
        i0 = int(ts * SR) % LP; n = len(x)
        idx = (np.arange(n) + i0) % LP
        np.add.at(lo_L, idx, x * (1 - pan)); np.add.at(lo_R, idx, x * pan)
    prog = [[60, 64, 67], [55, 59, 62], [57, 60, 64], [53, 57, 60]]   # Do, Sol, La m, Fa (2 compases cada uno)
    for c in range(4):
        notas = prog[c]
        for b in range(8):  # 8 tiempos por acorde
            ts = (c * 8 + b) * beat
            if b in (0, 4):  # piano suave: acorde en los tiempos 1 y 3 del compás
                n = int(2.2 * SR); tt = np.arange(n) / SR
                x = sum(np.exp(-tt * 1.6) * (np.sin(2 * np.pi * hz(m) * tt) + 0.25 * np.sin(4 * np.pi * hz(m) * tt)) for m in notas)
                evento(ts, 0.05 * x, 0.45)
                nb = int(1.2 * SR); tb = np.arange(nb) / SR      # bajo
                evento(ts, 0.10 * np.exp(-tb * 2.2) * np.sin(2 * np.pi * hz(notas[0] - 24) * tb), 0.5)
            for h in range(2):  # arpegio en corcheas, una octava arriba
                m = notas[(b * 2 + h) % 3] + 12
                n = int(0.3 * SR); tt = np.arange(n) / SR
                x = 0.018 * np.exp(-tt * 11) * (2 / np.pi) * np.arcsin(np.sin(2 * np.pi * hz(m) * tt))
                evento(ts + h * beat / 2, x, 0.3 + 0.4 * ((b + h) % 2))
            n = int(0.06 * SR)  # shaker suave en el contratiempo
            ruido = rng.standard_normal(n); ruido = ruido - lp(ruido, 5000)
            evento(ts + beat / 2, 0.012 * np.exp(-np.arange(n) / SR * 60) * ruido, 0.6)
    reps = N // LP + 1
    L, R = np.tile(lo_L, reps)[:N], np.tile(lo_R, reps)[:N]
else:
    acordes = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]]
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
L, R = lp(L, 6000 if ESTILO == 'claro' else 3800), lp(R, 6000 if ESTILO == 'claro' else 3800)
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
