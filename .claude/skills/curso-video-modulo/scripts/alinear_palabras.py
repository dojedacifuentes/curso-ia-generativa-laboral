"""Tiempos de cada palabra del guion en la voz, y revisión de pronunciación.

Uso:  python alinear_palabras.py audio/voz.mp3 voz.txt palabras.json [--modelo small]

- Transcribe la voz con faster-whisper (tiempos por palabra) y la alinea con el texto que se mandó a la voz
  (voz.txt, con sus <break …/>). Cada palabra del guion queda con su inicio y fin, con la ortografía del guion.
- palabras.json alimenta los subtítulos karaoke y el retiming de las slides.
- Imprime los tramos donde lo que se oye no calza con lo escrito: ahí revisar la pronunciación
  (nombres en inglés, siglas) y, si suena mal, escribirlo como se dice en voz.txt y regenerar la voz.
"""
import json, re, sys, subprocess, unicodedata, difflib
import numpy as np
from faster_whisper import WhisperModel

audio, texto, salida = sys.argv[1], sys.argv[2], sys.argv[3]
modelo = sys.argv[sys.argv.index('--modelo') + 1] if '--modelo' in sys.argv else 'small'

guion = re.sub(r'<break[^>]*>', ' ', open(texto, encoding='utf-8').read())
pal = guion.split()
norm = lambda w: re.sub(r'[^a-z0-9ñ]', '', unicodedata.normalize('NFD', w.lower()).encode('ascii', 'ignore').decode()
                        if 'ñ' not in w.lower() else w.lower().replace('ñ', 'n'))

wm = WhisperModel(modelo, device='cpu', compute_type='int8')
# el audio se decodifica con ffmpeg (el decodificador interno choca con algunas versiones de PyAV)
pcm = np.frombuffer(subprocess.run(['ffmpeg', '-v', 'error', '-i', audio, '-ac', '1', '-ar', '16000', '-f', 'f32le', '-'],
                                   capture_output=True, check=True).stdout, np.float32)
segs, _ = wm.transcribe(pcm, language='es', word_timestamps=True, initial_prompt=guion[:800], vad_filter=False)
oidas = [(w.word.strip(), w.start, w.end) for s in segs for w in s.words]

a, b = [norm(w) for w in pal], [norm(w) for w, _, _ in oidas]
tiempos = [None] * len(pal)
dudas = []
sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
for op, i1, i2, j1, j2 in sm.get_opcodes():
    if op == 'equal':
        for k in range(i2 - i1):
            tiempos[i1 + k] = (oidas[j1 + k][1], oidas[j1 + k][2])
    elif op == 'replace' and j2 > j1:
        s, e = oidas[j1][1], oidas[j2 - 1][2]
        n = i2 - i1
        for k in range(n):  # reparte el tramo oído entre las palabras escritas
            tiempos[i1 + k] = (s + (e - s) * k / n, s + (e - s) * (k + 1) / n)
        dudas.append((' '.join(pal[i1:i2]), ' '.join(w for w, _, _ in oidas[j1:j2]), round(s, 2)))
    elif op == 'delete':
        dudas.append((' '.join(pal[i1:i2]), '(no se oye)', None))

# palabras sin tiempo: se interpolan entre vecinas
for k, t in enumerate(tiempos):
    if t is None:
        prev = next((tiempos[j][1] for j in range(k - 1, -1, -1) if tiempos[j]), 0.0)
        nxt = next((tiempos[j][0] for j in range(k + 1, len(tiempos)) if tiempos[j]), prev + 0.3)
        tiempos[k] = (prev, max(prev + 0.05, nxt))

json.dump([{'w': w, 's': round(s, 3), 'e': round(e, 3)} for w, (s, e) in zip(pal, tiempos)],
          open(salida, 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
print(f'{len(pal)} palabras -> {salida}  ({len(oidas)} oídas)')
print('Revisar pronunciación (escrito → oído):' if dudas else 'Sin diferencias entre lo escrito y lo oído.')
for esc, oid, t in dudas:
    print(f'  {t if t is not None else "-":>7}  «{esc}» → «{oid}»')
