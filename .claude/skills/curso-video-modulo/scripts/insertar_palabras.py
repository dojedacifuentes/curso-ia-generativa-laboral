"""Copia los tiempos de palabra (palabras.json) dentro de video.html para los subtítulos karaoke.

Uso:  python insertar_palabras.py videos/…/video.html palabras.json

Reemplaza (o crea, justo después de SUBS) la línea `const WORDS = [[inicio, fin], …];`. El motor de la plantilla
ilumina en cada subtítulo las palabras ya dichas (blanco), la que se está diciendo (celeste) y deja tenues las que vienen.
Volver a correrlo cada vez que cambie la voz.
"""
import json, re, sys, pathlib

html, palabras = pathlib.Path(sys.argv[1]), json.load(open(sys.argv[2], encoding='utf-8'))
h = html.read_text(encoding='utf-8')
linea = 'const WORDS = [' + ','.join(f'[{p["s"]},{p["e"]}]' for p in palabras) + '];'
if re.search(r'^const WORDS = \[.*\];$', h, flags=re.M):
    h = re.sub(r'^const WORDS = \[.*\];$', lambda m: linea, h, count=1, flags=re.M)
else:
    i = h.index('const SUBS = ['); j = h.index('];', i) + 2
    h = h[:j] + '\n' + linea + h[j:]
html.write_text(h, encoding='utf-8')
print(f'{len(palabras)} palabras -> {html}')
