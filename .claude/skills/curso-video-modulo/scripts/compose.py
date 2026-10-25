"""Compone el video final: graphics.mp4 + avatar HeyGen (intro y cierre) + clips de Flow + voz.

Uso:  python compose.py ruta/config.json

Todo se define en config.json (ver ejemplo_M1/config.json). Rutas relativas a la carpeta del config.
Cada overlay usa slots.json (generado por render_graphics.py) para posición y tamaño, y una
máscara con esquinas redondeadas.
"""
import json, pathlib, subprocess, sys
from PIL import Image, ImageDraw

CFG_PATH = pathlib.Path(sys.argv[1]).resolve()
ROOT = CFG_PATH.parent
cfg = json.loads(CFG_PATH.read_text(encoding="utf-8"))
FPS = 30
DUR = cfg['duracion']
slots = {s['name']: s for s in json.loads((ROOT / 'slots.json').read_text(encoding="utf-8"))}
R = lambda p: str((ROOT / p).resolve())

def mask(w, h, r):
    path = ROOT / f'mask_{w}x{h}_r{r}.png'
    if not path.exists():
        s = 4
        im = Image.new('L', (w * s, h * s), 0)
        ImageDraw.Draw(im).rounded_rectangle([0, 0, w * s - 1, h * s - 1], radius=r * s, fill=255)
        im.resize((w, h), Image.LANCZOS).save(path)
    return path

ov = []
av = cfg.get('avatar')
if av:
    off, crop = av['offset'], av.get('crop', 'auto')
    # intro: el clip HeyGen empieza en t=0 del master
    ov.append(dict(slot='avatar_intro', src=av['video'], ss=off, d=av['intro_out'] + 0.25, speed=1.0,
                   t0=0.0, fin=None, fout=av['intro_out'], fid=0.4, fod=0.25, crop=crop))
    # cierre: master t  <->  clip t - cierre_master_t + cierre_clip_t
    ss = av['cierre_in'] - av['cierre_master_t'] + av['cierre_clip_t'] + off
    ov.append(dict(slot='avatar_cierre', src=av['video'], ss=ss, d=min(DUR - av['cierre_in'], av['clip_dur'] - 0.02 - ss),
                   speed=1.0, t0=av['cierre_in'], fin=av['cierre_in'] + 0.2, fout=None, fid=0.3, fod=0.25,
                   crop=crop, hold_to=DUR))
for c in cfg.get('clips', []):
    vis = c['visible_hasta'] - c['visible_desde']
    src_d = c.get('src_dur', 8.0)
    ov.append(dict(slot=c['slot'], src=c['video'], ss=c.get('src_start', 0.0), d=src_d,
                   speed=vis / src_d if c.get('estirar', True) else 1.0, t0=c['visible_desde'],
                   fin=c['visible_desde'], fout=c['fade_out'], fid=0.4, fod=c.get('fade_out_d', 0.25), crop=None))

cmd = ['ffmpeg', '-hide_banner', '-loglevel', 'error', '-stats', '-y', '-i', R('graphics.mp4')]
fc, n, last = [], 1, '[0:v]'
for i, o in enumerate(ov):
    s = slots[o['slot']]
    w, h, r = s['w'], s['h'], int(round(s['radius']))
    out_d = (o['hold_to'] - o['t0']) if o.get('hold_to') else o['d'] * o['speed']
    cmd += ['-ss', f"{o['ss']:.3f}", '-t', f"{o['d']:.3f}", '-i', R(o['src'])]; vi = n; n += 1
    cmd += ['-framerate', str(FPS), '-loop', '1', '-t', f'{out_d + 0.2:.3f}', '-i', str(mask(w, h, r))]; mi = n; n += 1
    ch = f'[{vi}:v]setpts=PTS-STARTPTS'
    if abs(o['speed'] - 1) > 1e-3:
        ch += f",setpts={o['speed']:.5f}*PTS"
    ch += f',tpad=stop_mode=clone:stop_duration=0.3,fps={FPS}'
    if o['crop'] == 'auto':
        # recorte centrado a la proporción del recuadro, sea cual sea el tamaño que entregue HeyGen
        ch += f",crop='min(iw,ih*{w}/{h})':'min(ih,iw*{h}/{w})'"
    elif o['crop']:
        cr = o['crop']; ch += f",crop={cr['w']}:{cr['h']}:{cr['x']}:{cr['y']}"
    ch += f',scale={w}:{h}:flags=lanczos,format=yuva420p[v{i}];[{mi}:v]format=gray,scale={w}:{h}[m{i}];'
    ch += f"[v{i}][m{i}]alphamerge,trim=duration={out_d:.3f},setpts=PTS-STARTPTS+{o['t0']:.3f}/TB"
    if o['fin'] is not None: ch += f",fade=t=in:st={o['fin']:.3f}:d={o['fid']}:alpha=1"
    if o['fout'] is not None: ch += f",fade=t=out:st={o['fout']:.3f}:d={o['fod']}:alpha=1"
    ch += f"[o{i}];{last}[o{i}]overlay=x={s['x']}:y={s['y']}:eof_action=pass:format=auto[b{i}]"
    fc.append(ch); last = f'[b{i}]'
fc.append(f'{last}format=yuv420p[vout]')
cmd += ['-i', R(cfg['voz'])]
tmp = ROOT / '_sin_normalizar.mp4'
cmd += ['-filter_complex', ';'.join(fc), '-map', '[vout]', '-map', f'{n}:a', '-c:v', 'libx264', '-preset', 'veryfast',
        '-crf', '18', '-r', str(FPS), '-c:a', 'aac', '-b:a', '192k', '-t', f'{DUR}', str(tmp)]
subprocess.run(cmd, check=True)

# normalización de volumen a -16 LUFS (estándar de video en línea), sin recodificar la imagen.
# Dos pasadas: una pasada sola deja la voz ~1 dB bajo la meta.
LN = 'loudnorm=I=-16:TP=-1.5:LRA=11'
med = subprocess.run(['ffmpeg', '-hide_banner', '-nostats', '-i', str(tmp), '-vn', '-af', LN + ':print_format=json', '-f', 'null', '-'],
                     capture_output=True, text=True).stderr
m = json.loads(med[med.rindex('{'):med.rindex('}') + 1])
LN += (f":measured_I={m['input_i']}:measured_TP={m['input_tp']}:measured_LRA={m['input_lra']}"
       f":measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true")
out = R(cfg['salida'])
subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', str(tmp), '-map', '0:v', '-map', '0:a',
                '-c:v', 'copy', '-af', LN, '-ar', '44100', '-c:a', 'aac', '-b:a', '192k',
                '-movflags', '+faststart', out], check=True)
tmp.unlink()
print('listo ->', out)
