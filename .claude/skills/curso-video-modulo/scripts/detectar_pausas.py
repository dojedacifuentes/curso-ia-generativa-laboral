"""Detecta las pausas de la locución para sincronizar slides y subtítulos.

Uso:  python detectar_pausas.py voz.mp3 [umbral_dB=-32] [min_pausa_s=0.16]

Imprime la duración total y cada pausa (inicio-fin). El final de una pausa
(«silence_end») es el instante en que empieza la frase siguiente: úsalo como
ancla de tiempo para slides (entrar ~0.15 s antes) y para cortar subtítulos.
Las pausas largas (>0.6 s) suelen marcar cambio de párrafo/bloque del guion.
"""
import re, subprocess, sys

audio = sys.argv[1]
noise = sys.argv[2] if len(sys.argv) > 2 else '-32'
mind = sys.argv[3] if len(sys.argv) > 3 else '0.16'
dur = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration',
                            '-of', 'csv=p=0', audio], capture_output=True, text=True).stdout)
log = subprocess.run(['ffmpeg', '-hide_banner', '-nostats', '-i', audio, '-af',
                      f'silencedetect=noise={noise}dB:d={mind}', '-f', 'null', '-'],
                     capture_output=True, text=True).stderr
starts = [float(x) for x in re.findall(r'silence_start: ([\d.]+)', log)]
ends = re.findall(r'silence_end: ([\d.]+) \| silence_duration: ([\d.]+)', log)
print(f'duracion_total = {dur:.2f} s ({int(dur//60)}:{dur%60:05.2f})')
print('pausa_inicio  pausa_fin(=inicio frase)  duracion   marca')
for s, (e, d) in zip(starts, ends):
    mark = '<== cambio de bloque' if float(d) >= 0.6 else ''
    print(f'{s:9.2f}  {float(e):9.2f}               {float(d):5.2f}   {mark}')
