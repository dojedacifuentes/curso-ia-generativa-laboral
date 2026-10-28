# Playbook de producción · IA generativa para entornos laborales

Qué reutilizamos de la licitación TD 2026 (repo `licitacion-td-2026` y chats del 22-09 al 08-10-2026) para producir los recursos
de la planilla «Estructura_inicial_contenido_IA_generativa» (6 módulos · 22 AE · 101 recursos · 88 h).

Fecha: 24-10-2026 · Equipo: PC 1.

---

## 1. Lo que pide el proyecto nuevo (hoja «Recursos»)

| Tipo | Cantidad | Detalle en la planilla |
|---|---|---|
| Rise por AE | 22 | 338 pantallas en total (9 a 18 por AE), 7,5 min por pantalla |
| Quiz formativo por AE | 22 | 8 ítems, retroalimentación por ítem + **acción remedial** (volver a pantallas concretas del Rise) |
| Video de bienvenida y de resumen | 12 | 3 min cada uno, «video con avatar/locución», uno de cada por módulo |
| Inducción (M1) | 1 | Video de inducción tecnológica y metodológica + guía del participante (PDF) + evaluación diagnóstica |
| Casos de aplicación | 11 | **Empresas reales** (Morgan Stanley, Air Canada, Samsung, Klarna…): todos «por verificar» |
| Hitos del proyecto | 9 | P1–P5 y P6a–P6d, rúbrica general de 5 criterios, retroalimentación del tutor en 72 h o menos |
| Foros | 6 | Uno por módulo, el tutor responde en menos de 24 h hábiles |
| Resumen y glosario | 6 | Página de Moodle por módulo |
| Infografías | 6 | Una por módulo (anatomía del prompt, flujo de redacción, ruta de investigación…) |
| Evaluaciones sumativas | 6 | Cuestionario de Moodle con retroalimentación automática; la de M6 es la final integradora (los 22 AE) |

**LMS:** Moodle. **Normativa:** RE 2.484, cuyo Anexo Técnico aún no se publica (pendiente 3 de la planilla).

---

## 2. Cómo se hizo cada recurso antes y qué cambia ahora

### 2.1 Fuente de verdad
- **Antes:** SIPFOR → `npm run sipfor` → `data/planes/<PF>.json` → `npm run ficha`. Los generadores se detenían si un AE, un criterio
  o un contenido no estaba igual que en el plan.
- **Ahora:** el plan es diseño propio y la fuente es **la planilla**: hojas Estructura, Matriz coherencia, Recursos y Casos. Hay que
  escribir un importador planilla → `data/curso.json` con el mismo formato que `data/planes/<PF>.json` (módulos → AE → criterios →
  contenidos). Así los validadores de cobertura (`lib/plan.mjs`, `lib/lectura.mjs`, `infografias.mjs`) sirven sin cambios.

### 2.2 Rise por AE (el grueso: 338 pantallas)
- **Antes:**
  1. El usuario generó los 8 Rise con la IA de Rise, que cambió títulos y redacción.
  2. Claude los corrigió en su Chrome editando los bloques por JavaScript, contra una ficha canónica (`npm run canonico`).
  3. Se duplicaron por cliente, se aplicó la marca con Theme → Apply a brand (solo colores) y Labels → Spanish.
  4. Se exportaron en SCORM 1.2.

  Guías: `modulo-2/GUIA-RISE.md`, `modulo-2/REVISION-RISE.md` y `.scratch/prompt-rise-contenido-y-marcas.md`.
- **Lección aprendida:** dejar que la IA de Rise redacte y después corregir costó más que escribir bien desde el principio.
- **Propuesta:**
  1. Claude escribe un **guion de Rise por AE** en Markdown, una sección por pantalla con el tipo de bloque de Rise (texto, accordion,
     tabs, process, flashcards, knowledge check, escenario).
  2. Se valida la cobertura de saber, saber hacer y saber ser del AE.
  3. Se monta en Rise desde el Chrome del usuario.

  Base: el formato de `contenidos/PF1822/modulo-2/lecturas/AEn.md` (secciones `plan:`, recuadros `:::ejemplo` y `:::error`,
  autocomprobación y glosario). Su validador `verificarLectura()` se adapta a «pantallas».
- **Por definir:**
  - Qué es una «pantalla»: ¿una lección de Rise o un bloque? Esa definición fija las 338 pantallas y los 7,5 min.
  - Si el montaje en Rise lo hace Claude bloque a bloque en Chrome o el usuario pega el guion. Editar bloques ya está probado; crear
    cursos completos desde cero por JavaScript no se ha probado.

### 2.3 Quiz formativo (22) y evaluaciones sumativas (6)
- **Antes:**
  - Fuente `R-quiz-canva.md`: misión, «Quiz n», preguntas con la correcta en negrita y retroalimentación.
  - De ahí salía un GIFT, y `npm run quiz-juego` generaba el juego en HTML y en SCORM 1.2 (plantilla `scripts/lib/quiz-juego.html`:
    5 niveles, XP, 50:50, medalla, modo compacto para el marco del LMS).
  - La prueba objetiva iba a GIFT para el banco de preguntas de Moodle.
- **Ahora:**
  - Se reutiliza tal cual para los formativos, pero hay que pasar de 5 a **8 ítems**, admitir V/F con justificación, ordenar y
    emparejar, y agregar a cada ítem la **pantalla del Rise a la que remite** si se falla (la acción remedial).
  - Las sumativas van como **cuestionario de Moodle por GIFT**: el lector `lib/quiz-gift.mjs` ya existe.
  - Para la final integradora (los 22 AE) conviene un banco con categorías por AE.

### 2.4 Videos de bienvenida y de resumen (12) y video de inducción
- **Antes:**
  - Fuente `R-videos-curso.md`, con una tabla Tiempo | Imagen | Locución.
  - `npm run produccion` generaba un PPTX 16:9 con la narración en las notas del orador y el tercio derecho libre para el avatar.
  - El usuario lo importaba en HeyGen (un avatar, voz en español latinoamericano, subtítulos) y exportaba en MP4 1080p.
  - Hubo además un pase de PowerShell con imágenes verticales (`build_*.ps1`) y un rediseño por COM (`redesign_ppts*.ps1`).
  - **No reutilizar el contenido de esos PPT:** dicen «190 horas», «100 % online» y «sesiones en vivo».
- **Ahora:**
  - El mismo formato de guion y de PPTX (`scripts/lib/pptx.mjs`, `lib/oracion.mjs`, para que la voz no deletree mayúsculas).
  - **Opción nueva:** esta sesión tiene el conector de HeyGen, así que Claude puede generar el video con avatar directamente
    (`create_video_from_avatar`) desde el guion, sin pasar por el PPTX. Hay que elegir avatar, voz y si va la imagen de marca.
  - Guion de 3 min: unas 400 palabras.

### 2.5 Videocápsulas
- La planilla **no trae cápsulas por AE**: solo bienvenida, resumen e inducción.
- En la licitación se hicieron cápsulas por AE (PPTX de 10 a 12 láminas a partir de `R-capsulas.md`), pero las sacaron del aula el
  02-10.
- Si este cliente las quiere, el generador `videoCapsula` sirve tal cual. Hay que sumarlas a la hoja «Recursos» y al cálculo de horas,
  porque la RE 2.484 exige que el desglose cuadre.

### 2.6 Infografías (6)
- **Antes:** `npm run infografias`, que toma `R-infografias.json` y genera HTML y luego PNG con Edge headless. Usa íconos Lucide y
  valida la cobertura del plan y las palabras prohibidas. Hay además una versión anterior por prompts para Canva o Genially.
- **Ahora:** el mismo script con un JSON por módulo. Solo hay que cambiar la paleta y la fuente por la marca del cliente.

### 2.7 Casos de aplicación (11): recurso nuevo
- En la licitación **todos los casos eran ficticios** (Nube Sur, Mercado Austral). Aquí la planilla exige empresas reales, con la fuente
  primaria citada con fecha y sin inventar cifras.
- **Propuesta:**
  1. Una ficha de verificación por caso: fuente primaria, fecha, hechos citables, qué no se puede afirmar. Se hace con investigación
     web y se descartan los que no se puedan respaldar.
  2. Recién después, el guion del caso: contexto → hechos → preguntas guiadas → aplicación al proyecto.
- La regla «no inventar» de `AGENTS.md` vale tal cual.

### 2.8 Hitos del proyecto (9) y rúbrica
- **Antes:** `R-abp-abpro.md` → `npm run abp` → HTML y PDF. La versión final por cliente salía con `generar-abp.mjs` como HTML y se
  convertía en Google Doc (157 Docs). Reglas: solo el enunciado, sin duración, trabajo en equipo explícito en los ABPRO.
- **Ahora:**
  - El mismo formato (Contexto / Qué tienes que hacer / Entrega), pero con **un solo proyecto que crece** de P1 a P6d sobre el
    «desafío laboral real» de cada participante, sin empresa ficticia.
  - La rúbrica general de 5 criterios de la hoja «Evaluación» va adjunta a cada hito.

### 2.9 Inducción, diagnóstica, glosario y foros
- `npm run evaluacion` ya generaba la diagnóstica (ítems D1–D12 y pauta), el glosario integrador (PDF, CSV y XML de Moodle), la
  autoevaluación y la coevaluación. Sirve para la diagnóstica del M1 y para los 6 glosarios.
- La guía del participante y los enunciados de los foros son texto nuevo, con la plantilla `templates/encargo-entregable.md`.

### 2.10 Aula Moodle
- La skill `armar-aula-moodle` y los armadores de `privado/*-moodle/builder*.js` se cargan en la pestaña del usuario y construyen
  secciones, etiquetas con tarjetas, SCORM, tareas y foros. Hay que adaptarlos al Moodle del cliente nuevo.
- La planilla agrega **trazabilidad** (pendiente 8): finalización de actividades, libro de calificaciones y participación del tutor.

---

## 3. Lo que NO se traspasa (reglas propias de la licitación)

| Regla de la licitación | En este proyecto |
|---|---|
| Sin horas ni minutos (R27) | **Se invierte:** la RE 2.484 exige el desglose horario. Falta decidir si el estudiante ve la duración de cada recurso. |
| Sin nombrar la modalidad | El curso se declara «asincrónico». Se puede nombrar. |
| AE con el texto exacto de SIPFOR | Los AE son de diseño propio. Manda el texto de la planilla una vez que lo valide Naty (pendiente 1). |
| Marca por 4 clientes | Una sola marca, aún sin definir: colores, logo y tipografía. |
| Repo `naty.proyecto01` público | **No poner aquí contenido de este cliente:** usar un repo nuevo y privado. |

Lo que **sí** se traspasa:
- fuente única y nada editado a mano;
- máximo 2 fuentes y contraste WCAG AA;
- español de Chile, sin «oficial» ni «textual» en los textos para el estudiante;
- no inventar;
- preguntar antes de publicar;
- trabajar en el Chrome del usuario (Rise, Drive, Moodle).

---

## 4. Motor reutilizable (copiar al repo nuevo)

| Pieza | Para qué sirve |
|---|---|
| `scripts/lib/` (`pptx`, `zip`, `xlsx`, `pdf`, `html`, `lectura`, `plan`, `oracion`, `quiz-gift`, `quiz-juego.html`) | Node 18 o más, sin dependencias; PDF con Edge headless |
| `scripts/quiz-juego.mjs`, `infografias.mjs`, `abp-abpro.mjs`, `evaluacion-modulo.mjs` | Generadores: hay que cambiar las constantes `CURSOS` y `ESTILOS` |
| `scripts/produccion.mjs` (funciones `videoPresentador`, `videoCapsula`, `quizGift`, glosario) | PPTX para HeyGen, GIFT y glosario |
| `scripts/fuentes/` (IBM Plex) y `scripts/lib/iconos-lucide/` | Fuentes con licencia OFL e íconos con licencia ISC |
| `templates/encargo-entregable.md`, `marca.json`, `qa.md` | Encargo de redacción, marca y control de calidad |
| `AGENTS.md`, `npm run sesion`, `state/` | Protocolo de sesión y coordinación entre el PC 1 y el PC 2 |
| Skills `reglas-aula`, `subir-scorm`, `armar-aula-moodle` | Como método; las reglas se reescriben para la RE 2.484 |

---

## 5. Orden de producción propuesto

1. **Repo privado nuevo y datos.** Importar la planilla a `data/curso.json`. Reglas nuevas desde la RE 2.484 y las decisiones de la
   hoja «Léeme».
2. **Piloto M1-AE1 completo:**
   - guion de Rise (16 pantallas) y montaje en Rise;
   - quiz de 8 ítems con acción remedial, en SCORM;
   - video de bienvenida del M1 en HeyGen;
   - infografía del M1;
   - ficha de verificación del caso M1-C2.

   Sirve para fijar el formato y medir tiempos (pendiente 13).
3. **Casos:** verificar las 11 fuentes antes de guionar (pendiente 2).
4. **Producción por módulo**, del M1 al M6, con el formato del piloto.
5. **Sumativas y final integradora** en GIFT, y montaje del aula Moodle con trazabilidad.

---

## 6. Decisiones tomadas (24-10)

- Quiz formativos: juego SCORM como en la licitación.
- Infografías: HTML, que luego se pasa a PNG.
- Los Rise los arma Natalia a partir del contenido base.
- Paleta neutra por ahora; la marca del cliente se aplica después.
- Primero el contenido base por AE, estrictamente desde la planilla. El formato está en `FORMATO-CONTENIDO-BASE.md` y la muestra en
  `contenido/M1/M1-AE1.md`.

## 7. Decisiones abiertas

1. Qué es una «pantalla» de Rise: ¿lección o bloque?
2. Marca: colores, logo y tipografía del cliente (¿Accenture u OTEC?), y en qué Moodle se monta.
3. Videos: ¿HeyGen directo con avatar o PPTX + HeyGen como antes? ¿Qué avatar y qué voz?
4. ¿Se agregan videocápsulas por AE? No están en la planilla y cambian el cálculo de horas.
5. Quiz formativo: ¿juego SCORM gamificado como en la licitación o cuestionario nativo de Moodle?
6. ¿El estudiante ve la duración de cada recurso?

## 8. Casos de aplicación: hecho (24-10)

- Formato en `docs/FORMATO-CASO.md`: ficha `investigacion/casos/<id>.md` (fuentes leídas, hechos verificados, lo que no se puede
  afirmar, ajustes) y caso para el estudiante `casos/<id>.md`. Control: `node scripts/validar-casos.mjs` (11 ✓).
- Salidas: `node scripts/compilar-contenidos.mjs --solo-casos` → `entregables/casos/{html,docs,pdf}`. En Drive: «5 Casos de
  aplicación» (Docs + PDF + «00 · Resumen de verificación»).
- Estados: 9 «Verificado con ajustes», 1 «Verificado» (M4-C2), 1 «Descartado» (M3-C2 Samsung, solo prensa) reemplazado por la
  Municipalidad de Eindhoven (2025), mismo AE.
- Títulos que cambian respecto de la planilla: M3-C1 (sin afirmar que la IA creó las referencias), M3-C2 (reemplazo); M1-C2 con título
  sugerido (Air Canada no informó qué tecnología usaba su chatbot).
- Caso en evolución: M4-C3 (apelación en el Reino Unido; juicio en EE. UU. el 18-01-2028). Revisar antes de publicar.
- Hecho (24-10): los 4 AE «Parcial» (M1-AE4, M3-AE4, M4-AE3, M5-AE3) resumen ahora casos reales en un recuadro `:::ejemplo Caso
  real: …`, citando las fuentes de la ficha del caso (F-M1C2-01, F-M3C1-02…). `validar-contenido.mjs` y `auditar.mjs` aceptan esas
  fuentes de `investigacion/casos/`. Pantallas: M1-AE4 P02, P13 y P16 (Mata v. Avianca, Air Canada); M3-AE4 P05 y P06 (Deloitte,
  Eindhoven); M4-AE3 P12 (voz Sky); M5-AE3 P06 y P13 (Klarna, Duolingo). Correspondencia de fondo sin ningún Parcial.
- **Cambio 28-10:** se quitaron esos recuadros. Los casos ya no se nombran fuera de `casos/` (criterios en
  `docs/CRITERIOS-28-10.md`); la técnica «casos reales» la cubre la actividad de análisis de cada caso.
