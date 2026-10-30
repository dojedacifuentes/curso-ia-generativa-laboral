"""Arma video.html con la marca Empoderatech: estilos + cuerpo de la carpeta + motor + tiempos de palabra.

Uso:  python armar_html.py videos/M<n>-<tipo>

Lee <carpeta>/cuerpo.html (título, escenas y `const SUBS = [...]`) y, si existe, <carpeta>/palabras.json (karaoke).
Escribe <carpeta>/video.html, autocontenido salvo fonts/ (copiar las de scripts/fuentes) y el logo del repo.
Volver a correrlo cada vez que cambie el cuerpo o la voz.
"""
import json, pathlib, re, sys

SK = pathlib.Path(__file__).resolve().parent.parent / 'plantilla' / 'marca'
d = pathlib.Path(sys.argv[1]).resolve()
cuerpo = (d / 'cuerpo.html').read_text(encoding='utf-8')
titulo = re.search(r'<title>(.*?)</title>', cuerpo).group(1)
cuerpo = re.sub(r'<title>.*?</title>\s*', '', cuerpo)
subs = re.search(r'const SUBS = \[.*?\];', cuerpo, flags=re.S).group(0)
cuerpo = cuerpo.replace(subs, '').replace('<script></script>', '').rstrip()
pj = d / 'palabras.json'
words = 'const WORDS = [' + (','.join(f'[{p["s"]},{p["e"]}]' for p in json.loads(pj.read_text(encoding='utf-8'))) if pj.exists() else '') + '];'
html = f'''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>{titulo}</title>
<style>
{(SK / 'estilos.css').read_text(encoding='utf-8')}</style>
</head>
<body>
<div id="stage">
<div id="glow"></div>
<div id="progress"></div>
{cuerpo}
<div id="subs"><div></div></div>
</div>
<script>
{subs}
{words}
{(SK / 'motor.js').read_text(encoding='utf-8')}</script>
</body>
</html>
'''
(d / 'video.html').write_text(html, encoding='utf-8')
print('listo ->', d / 'video.html')
