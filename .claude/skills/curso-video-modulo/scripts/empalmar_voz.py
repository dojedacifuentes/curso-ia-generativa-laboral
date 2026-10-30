"""Inserta o reemplaza tramos de la voz sin regenerarla entera, y deja el mapa de tiempos para correr el resto.

Uso:  python empalmar_voz.py videos/M<n>-<tipo>/empalme.json

empalme.json:
  {"fuente": "audio/voz.mp3", "salida": "audio/voz.wav",
   "ops": [{"t0": 18.05, "t1": 18.05, "archivo": "../_voz30/m1.wav", "ini": 0.0, "fin": 12.10, "gain": -1.5, "pausa": 0.5}]}
  - t0 = t1: inserta en t0 (elegirlo dentro de una pausa). t0 < t1: reemplaza ese tramo de la voz original.
  - archivo/ini/fin: el tramo nuevo (otra toma de la misma voz); gain en dB para igualar el volumen (medir con ebur128);
    pausa: silencio que se agrega después del tramo nuevo.
Sale la voz nueva (también en .mp3) y mapa.json con los tramos [t0, t1, largo_nuevo] para desplazar_tiempos.py.
"""
import json, pathlib, subprocess, sys
import numpy as np

cfg_path = pathlib.Path(sys.argv[1]).resolve()
D = cfg_path.parent
cfg = json.loads(cfg_path.read_text(encoding='utf-8'))
SR = 44100
leer = lambda f: np.frombuffer(subprocess.run(['ffmpeg', '-v', 'error', '-i', str(D / f), '-ac', '1', '-ar', str(SR), '-f', 'f32le', '-'],
                                              capture_output=True, check=True).stdout, np.float32)
voz = leer(cfg['fuente'])
partes, pos, mapa = [], 0, []
for op in sorted(cfg['ops'], key=lambda o: o['t0']):
    a, b = int(op['t0'] * SR), int(op['t1'] * SR)
    x = leer(op['archivo'])[int(op['ini'] * SR):int(op['fin'] * SR)] * 10 ** (op.get('gain', 0) / 20)
    n = int(SR * 0.02)  # rampas cortas para que no haya clics en las uniones
    x = x.copy(); x[:n] *= np.linspace(0, 1, n); x[-n:] *= np.linspace(1, 0, n)
    nuevo = np.concatenate([x, np.zeros(int(op.get('pausa', 0) * SR), np.float32)])
    partes += [voz[pos:a], nuevo]; pos = b
    mapa.append([op['t0'], op['t1'], round(len(nuevo) / SR, 4)])
partes.append(voz[pos:])
out = np.concatenate(partes)
sal = D / cfg.get('salida', 'audio/voz.wav')
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'f32le', '-ar', str(SR), '-ac', '1', '-i', '-', '-c:a', 'pcm_s16le', str(sal)],
               input=out.tobytes(), check=True)
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(sal), '-c:a', 'libmp3lame', '-b:a', '192k', str(sal.with_suffix('.mp3'))], check=True)
(D / 'mapa.json').write_text(json.dumps(mapa), encoding='utf-8')
print(f'{len(voz) / SR:.2f} s -> {len(out) / SR:.2f} s  ({sal.name}); mapa: {mapa}')
