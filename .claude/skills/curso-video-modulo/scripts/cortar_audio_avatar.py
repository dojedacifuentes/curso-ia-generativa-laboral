"""Une intro + 1 s de silencio + cierre en un solo MP3 para hacer UN render de avatar en HeyGen.

Uso:  python cortar_audio_avatar.py voz.mp3 FIN_INTRO INICIO_CIERRE salida.mp3

  FIN_INTRO     = segundo donde termina la intro (fin de la pausa tras la intro)
  INICIO_CIERRE = segundo donde empieza el bloque de cierre (unos 0.1 s antes de la voz)

Imprime los datos que necesita config.json:
  avatar.intro_dur        = FIN_INTRO
  avatar.cierre_master_t  = INICIO_CIERRE
  avatar.cierre_clip_t    = FIN_INTRO + 1.0   (dónde arranca el cierre dentro del clip HeyGen)
"""
import subprocess, sys

src, fin_intro, ini_cierre, out = sys.argv[1], float(sys.argv[2]), float(sys.argv[3]), sys.argv[4]
dur = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', src],
                           capture_output=True, text=True).stdout)
fc = (f'[0:a]atrim=0:{fin_intro},asetpts=PTS-STARTPTS[a1];'
      f'[0:a]atrim={ini_cierre}:{dur},asetpts=PTS-STARTPTS[a2];'
      f'anullsrc=r=44100:cl=mono,atrim=0:1.0[s];[a1][s][a2]concat=n=3:v=0:a=1[o]')
subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', src, '-filter_complex', fc,
                '-map', '[o]', '-ar', '44100', '-ac', '1', '-c:a', 'libmp3lame', '-b:a', '192k', out], check=True)
print(f'OK -> {out}')
print(f'"intro_dur": {fin_intro}, "cierre_master_t": {ini_cierre}, "cierre_clip_t": {fin_intro + 1.0:.2f}')
