"""Arma el audio de EVA a cámara (intro + momento clave + cierre) de un video y su mapa de tiempos, sin medir a mano.

Uso:  python audio_eva.py videos/M<n>-<tipo>

Lee guion.md (párrafos hablados entre el primer y el segundo `---`; el momento clave es el párrafo que empieza con
`**Momento clave`), busca en audio/voz.wav las pausas largas entre párrafos (los `<break time="0.8s"/>`) y escribe:
  heygen/eva.mp3        intro + 1 s + momento clave + 1 s + cierre (para un solo render de HeyGen)
  heygen/eva_mapa.json  inicio y fin de cada párrafo en la voz, y dónde cae cada tramo dentro del clip de EVA:
                        intro_fin, momento [ini, fin], momento_clip_ini, cierre_ini, cierre_clip_ini, parrafos
"""
import json, pathlib, re, subprocess, sys
import numpy as np

d = pathlib.Path(sys.argv[1])
lines = (d / 'guion.md').read_text(encoding='utf-8').replace('\r', '').split('\n')
seps = [i for i, l in enumerate(lines) if l.strip() == '---']
pars = [l for l in lines[seps[0] + 1:seps[1]] if l.strip() and not l.startswith(('#', '>'))]
k_mom = next(i for i, l in enumerate(pars) if l.startswith('**Momento clave'))
SR = 16000
x = np.frombuffer(subprocess.run(['ffmpeg', '-v', 'error', '-i', str(d / 'audio/voz.wav'), '-ac', '1', '-ar', str(SR), '-f', 'f32le', '-'],
                                 capture_output=True, check=True).stdout, np.float32)
dur = len(x) / SR
win = int(0.02 * SR)
rms = np.sqrt(np.convolve(x ** 2, np.ones(win) / win, mode='same'))
quiet = rms < 10 ** (-40 / 20)
sil, i = [], 0
while i < len(quiet):  # tramos de silencio: (inicio, fin)
    if quiet[i]:
        j = i
        while j < len(quiet) and quiet[j]: j += 1
        if (j - i) / SR > 0.25: sil.append((i / SR, j / SR))
        i = j
    else:
        i += 1
sil = [s for s in sil if s[0] > 0.3 and s[1] < dur - 0.3]
largos = sorted(sorted(sil, key=lambda s: s[1] - s[0], reverse=True)[:len(pars) - 1])
if len(largos) != len(pars) - 1:
    sys.exit(f'esperaba {len(pars) - 1} pausas largas y encontré {len(largos)}')
ini = [0.0] + [s[1] - 0.05 for s in largos]
fin = [s[0] + 0.12 for s in largos] + [dur]
P = list(zip(ini, fin))
mi, mf = P[k_mom]
ci = P[-1][0]
cortes = [(0.0, P[0][1]), (mi, mf), (ci, dur)]
seg = lambda a, b: x[int(a * SR):int(b * SR)]
uno = np.zeros(SR, np.float32)
eva = np.concatenate([seg(*cortes[0]), uno, seg(*cortes[1]), uno, seg(*cortes[2])])
(d / 'heygen').mkdir(exist_ok=True)
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'f32le', '-ar', str(SR), '-ac', '1', '-i', '-', '-ar', '44100',
                '-c:a', 'libmp3lame', '-b:a', '192k', str(d / 'heygen/eva.mp3')], input=eva.tobytes(), check=True)
m = {'intro_fin': round(P[0][1], 3), 'momento': [round(mi, 3), round(mf, 3)],
     'momento_clip_ini': round(P[0][1] + 1.0, 3), 'cierre_ini': round(ci, 3),
     'cierre_clip_ini': round(P[0][1] + 1.0 + (mf - mi) + 1.0, 3), 'eva_dur': round(len(eva) / SR, 3),
     'parrafos': [[round(a, 2), round(b, 2)] for a, b in P]}
(d / 'heygen/eva_mapa.json').write_text(json.dumps(m, indent=1), encoding='utf-8')
print(d.name, 'EVA', m['eva_dur'], 's | intro hasta', m['intro_fin'], '| momento', m['momento'], '| cierre desde', m['cierre_ini'])
