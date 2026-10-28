---
name: curso-quiz-infografias
description: Genera y valida los quiz formativos tipo juego (SCORM 1.2, HTML sin LMS y GIFT de Moodle; 8 preguntas con acción remedial a una pantalla) y las infografías HTML/PNG por módulo del curso «IA generativa para entornos laborales». Úsala cuando el usuario pida crear, corregir o regenerar un quiz, cambiar preguntas o remisiones, o hacer o ajustar una infografía.
---

# Quiz juego SCORM e infografías

## Quiz formativo por AE (22)

- **Fuente:** `quiz/M<n>-AE<k>.md`. Formato: `docs/FORMATO-QUIZ.md`. Plantilla: `scripts/lib/quiz-juego.html`, que viene de la
  licitación TD 2026 y aquí tiene 8 niveles.
- **Encabezado:** `**Misión:**`, `**Cuándo:**`, `**Insignia:**`, `**Estilo:**` (acentos, fondo y lema) e `**Ilustración:**`.
- **Preguntas:** 8, cada una con su etiqueta `*(S1 · C1 · P03)*`:
  - los códigos del AE y la pantalla `Pnn` a la que remite quien falla («Repasa: pantalla Pnn», que es la acción remedial);
  - de 2 a 4 alternativas, con una sola correcta y en negrita, y `*Retroalimentación:*`;
  - cada criterio C del AE aparece al menos una vez;
  - los distractores salen de los recuadros `:::error` del contenido, y no se copian los `:::comprueba`.

```bash
node scripts/quiz-juego.mjs --solo-validar M2-AE3   # revisa sin escribir
node scripts/quiz-juego.mjs                         # todos
node scripts/quiz-juego.mjs M2-AE3                  # uno
```

Escribe en `entregables/quiz/<AE>/`:
- `<AE>-Quiz-Juego-SCORM.zip`: SCORM 1.2, nota de 0 a 100 y finalización;
- `<AE>-Quiz-Juego.html`: funciona sin internet;
- `<AE>-Quiz-Moodle.gift`: para el banco de preguntas.

Si el script se detiene, corrige la fuente, no el script. En Drive, cada formato va en su subcarpeta de «3 Quiz juego SCORM».
Cada zip pesa menos de 10 MB, así que se sube con `file_upload`.

## Infografía por módulo (6)

- **Fuente:** `infografias/M<n>.json`. Formato: `docs/FORMATO-INFOGRAFIA.md`.
- **Tipos:** `anatomia`, `pasos`, `matriz`, `mapa` y `ciclo`.
- **Bloques:** cada uno lleva un ícono Lucide (`scripts/lib/iconos-lucide/`, el nombre sin «.svg»), título, texto y «ver», que
  remite a «M1-AE2 P04».
- **Contenido:** sale solo de las «Ideas clave» y de las pantallas de los AE del módulo. Nada de cifras de planes ni nombres de
  modelos que cambian rápido.

```bash
node scripts/infografias.mjs            # todas: HTML + PNG de 1080 px (Chrome headless, fuera del sandbox) + interactiva
node scripts/infografias.mjs M4         # una
node scripts/infografias.mjs --sin-png  # solo HTML
```

Salida: `entregables/infografias/M<n>-Infografia.{html,png}` (estática, para imprimir o insertar como imagen) y
`M<n>-Infografia-interactiva.html` (28-10, pedido del usuario: animada, con botones y microinteracciones). Paleta neutra con
un acento por módulo, IBM Plex Sans (`scripts/fuentes/`, licencia OFL), contraste WCAG AA.

**Versión interactiva** (plantilla `scripts/lib/infografia-interactiva.mjs`, mismos datos del JSON): un solo HTML sin
dependencias externas, que funciona sin internet y en el celular. Tarjetas que se abren, anillo de avance, «Recorrido guiado»
(botones y flechas del teclado), «Abrir todo», «Reiniciar», idea clave que se desbloquea al explorarlo todo, y un efecto por
tipo: `anatomia` arma el prompt con los ejemplos, `pasos` llena la línea, `matriz` enfoca el cuadrante, `mapa` enciende el
semáforo y `ciclo` hace girar la rueda. Respeta «reducir movimiento»; sin JavaScript se ve todo abierto. «ver» se muestra como
«Lo ves en «tema» · pantalla n». **SCORM 1.2** (`M<n>-Infografia-SCORM.zip`, mismo HTML como `index.html`): si hay LMS,
registra «incompleto» al abrir, puntaje = % explorado (guarda el mejor), «completado» al explorarlo todo y las partes vistas en
`cmi.suspend_data` para retomar; sin LMS no hace nada. Aún no probado en un LMS real (el usuario lo probará). Para probarla: preview `infografias` de `.claude/launch.json` (carpeta de la sesión).

## Verificación

- El quiz y las infografías no pueden ser anteriores a su fuente: la capa C3/C4 de `node scripts/auditar.mjs` avisa si lo son.
- Abre un HTML del quiz y juega una partida: las 8 preguntas, la remisión «Repasa» al fallar y la medalla final.
- En la infografía, comprueba que cada «ver» apunte a una pantalla que existe.
