# Auditoría del curso «IA generativa para entornos laborales»

Generado con `node scripts/auditar.mjs` el 25-10-26, 2:23 a. m.. Solo lee: no corrige nada.
Fuente de verdad: planilla «Estructura_inicial_contenido_IA_generativa» (Drive 1v_NCRQGZnajDLesIw8haIMrw4551q6C8Om6AOM8RoHM).

**Resultado:** 84 chequeos · ✓ 70 sin observaciones · ! 12 con avisos · ✗ 0 con errores · … 2 pendientes.

- **✗ error:** algo no calza con la planilla o con el formato, o falta un archivo que debería existir.
- **! aviso:** funciona, pero conviene mirarlo (un derivado desactualizado, una pantalla corta, un «Parcial» de fondo).
- **… pendiente:** todavía no se produce; no es un defecto.

## Cómo está armado el proyecto

```
Planilla (Drive) ──xlsx2tsv──► data/planilla/*.tsv ──importar-planilla──► data/curso.json   (C0)
                                                                              │
investigacion/M<n>.md, HERRAMIENTAS-*.md  (fuentes F-…, abiertas y leídas)    │   (C1)
                                   │                                          │
                                   ▼                                          ▼
                     contenido/M<n>/M<n>-AE<k>.md  ◄── validar-contenido ── códigos S/H/A/C   (C2)
                                   │
        ┌──────────────┬───────────┼──────────────┬──────────────────────┐
        ▼              ▼           ▼              ▼                      ▼
   quiz/*.md     infografias/  compilar-     «Conexión con el     investigacion/casos/ → casos/
   quiz-juego    infografias   contenidos    proyecto» (hitos)    validar-casos            (C5)
   (C3)          (C4)          (C6)
        │              │           │                                     │
        └──────────────┴───────────┴──────────── Google Drive ───────────┘                 (C8)
```

| Carpeta | Qué contiene |
|---|---|
| `data/planilla/` | Las 10 hojas de la planilla en TSV |
| `data/curso.json` | Módulos → AE → saber (S), saber hacer (H), saber ser (A), criterios (C), pantallas, quiz, recursos y casos |
| `investigacion/` | 212 fuentes con id F-…, qué respaldan y para qué AE sirven; `casos/` = fichas de verificación |
| `contenido/` | 22 contenidos base, 338 pantallas |
| `quiz/` | 22 quiz de 8 preguntas |
| `infografias/` | 6 infografías (JSON) |
| `casos/` | 11 de 11 casos redactados |
| `entregables/` | Lo generado: docs/, por-ae/, pdf/, quiz/, infografias/, casos/ |
| `docs/` | Formatos, correspondencias, pendientes y esta auditoría |

## Avance frente a la hoja «Recursos»

| Estado | Recursos | Horas |
|---|---|---|
| Pendiente | 18 | 9.8 |
| En curso | 1 | 0.1 |
| Insumo listo | 43 | 56.2 |
| Hecho | 39 | 22.0 |

| Tipo | Hecho | Insumo listo | En curso | Pendiente |
|---|---|---|---|---|
| Inducción/Diagnóstica |  |  |  | 1 |
| Video |  | 6 | 1 | 5 |
| Rise |  | 22 |  |  |
| Quiz formativo | 22 |  |  |  |
| Hito proyecto |  | 9 |  |  |
| Caso de aplicación | 11 |  |  |  |
| Foro |  |  |  | 6 |
| Resumen y glosario |  | 6 |  |  |
| Complemento | 6 |  |  |  |
| Evaluación sumativa |  |  |  | 6 |

## C0 · Planilla → data/curso.json

La planilla «Estructura_inicial_contenido_IA_generativa» es la fuente de verdad. Se descargó como TSV por hoja (data/planilla/) y scripts/importar-planilla.mjs la convierte en data/curso.json, que leen todos los generadores y validadores. Esta capa comprueba que esa copia esté completa, que calce con la planilla y que los totales de la planilla cuadren entre sí.

| | Chequeo | Resultado |
|---|---|---|
| ✓ | C0.1 Las hojas de la planilla están descargadas | Léeme.tsv · Parámetros.tsv |
| ✓ | C0.2 data/curso.json repite la hoja «Estructura» sin cambios | 22 AE comparados en texto, tema, pantallas, saberes y criterios |
| ✓ | C0.3 Totales del curso: 6 módulos, 22 AE, 338 pantallas, 101 recursos | 6 módulos · 22 AE |
| ✓ | C0.4 Las horas cuadran: recursos de cada módulo = horas objetivo (RE 2.484 IV.2.2 c) | M1: 960 min = 16 h · M2: 960 min = 16 h |
| ✓ | C0.5 Cada recurso y caso apunta a AE que existen | 101 recursos y 20 casos e hitos revisados |

## C1 · Investigación y fuentes

Antes de redactar, cada módulo tuvo una investigación con fuentes abiertas y leídas (investigacion/M<n>.md y HERRAMIENTAS-*.md). Cada fuente tiene un id F-… que luego se cita en las pantallas. Esta capa revisa que el registro esté completo y que lo citado exista.

| | Chequeo | Resultado |
|---|---|---|
| ✓ | C1.1 Cada fuente tiene URL, tipo, fecha, qué respalda y para qué sirve | investigacion/HERRAMIENTAS-1.md: 49 fuentes · investigacion/HERRAMIENTAS-2.md: 50 fuentes |
| ✓ | C1.2 «Sirve para» nombra AE y códigos que existen | 720 referencias AE·código revisadas |
| ! | C1.3 Fuentes registradas que nadie cita |  1 avisos |

<details><summary>Detalle</summary>

- **C1.3 Fuentes registradas que nadie cita**
  - ! 12 sin citar: F-H-01, F-H-05, F-H-06, F-H-09, F-H-11, F-H-22, F-H-25, F-H-28, F-H-34, F-H-36, F-H-43, F-H-89

</details>

## C2 · Contenido base por AE (22)

contenido/M<n>/M<n>-AE<k>.md es la fuente única de cada AE: de ahí salen el Rise (lo arma Natalia), el quiz, la infografía, los Docs y los PDF. El formato está en FORMATO-CONTENIDO-BASE.md. Esta capa repite las reglas de validar-contenido.mjs y suma las reglas del WORKFLOW que ese validador no mira.

| | Chequeo | Resultado |
|---|---|---|
| ! | C2.M1-AE1 M1-AE1 · Fundamentos de IA generativa |  1 avisos |
| ✓ | C2.M1-AE2 M1-AE2 · Prompts efectivos | 16 pantallas, como pide la planilla · 9/9 códigos cubiertos |
| ✓ | C2.M1-AE3 M1-AE3 · Parámetros de generación | 16 pantallas, como pide la planilla · 7/7 códigos cubiertos |
| ✓ | C2.M1-AE4 M1-AE4 · Validación de resultados | 17 pantallas, como pide la planilla · 8/8 códigos cubiertos |
| ✓ | C2.M2-AE1 M2-AE1 · Redacción y comunicación con IA | 18 pantallas, como pide la planilla · 8/8 códigos cubiertos |
| ✓ | C2.M2-AE2 M2-AE2 · Prompting avanzado para textos | 18 pantallas, como pide la planilla · 6/6 códigos cubiertos |
| ✓ | C2.M2-AE3 M2-AE3 · Presentaciones con IA | 17 pantallas, como pide la planilla · 8/8 códigos cubiertos |
| ✓ | C2.M2-AE4 M2-AE4 · Planillas de cálculo con IA | 18 pantallas, como pide la planilla · 8/8 códigos cubiertos |
| ✓ | C2.M3-AE1 M3-AE1 · Herramientas de IA para investigar | 18 pantallas, como pide la planilla · 7/7 códigos cubiertos |
| ✓ | C2.M3-AE2 M3-AE2 · Recopilar, validar y sintetizar | 18 pantallas, como pide la planilla · 8/8 códigos cubiertos |
| ✓ | C2.M3-AE3 M3-AE3 · Organizar y presentar información | 17 pantallas, como pide la planilla · 7/7 códigos cubiertos |
| ✓ | C2.M3-AE4 M3-AE4 · Análisis crítico y privacidad | 18 pantallas, como pide la planilla · 9/9 códigos cubiertos |
| ! | C2.M4-AE1 M4-AE1 · Ecosistema multimedia con IA |  1 avisos |
| ! | C2.M4-AE2 M4-AE2 · Imágenes y gráficos |  1 avisos |
| ✓ | C2.M4-AE3 M4-AE3 · Audio y música | 14 pantallas, como pide la planilla · 7/7 códigos cubiertos |
| ✓ | C2.M4-AE4 M4-AE4 · Clips y video breve | 15 pantallas, como pide la planilla · 8/8 códigos cubiertos |
| ✓ | C2.M5-AE1 M5-AE1 · Potencial de automatización | 15 pantallas, como pide la planilla · 8/8 códigos cubiertos |
| ✓ | C2.M5-AE2 M5-AE2 · Flujos simples con IA | 14 pantallas, como pide la planilla · 9/9 códigos cubiertos |
| ✓ | C2.M5-AE3 M5-AE3 · Supervisión humana y riesgos | 14 pantallas, como pide la planilla · 8/8 códigos cubiertos |
| ✓ | C2.M6-AE1 M6-AE1 · Oportunidad de mejora con IA | 10 pantallas, como pide la planilla · 8/8 códigos cubiertos |
| ✓ | C2.M6-AE2 M6-AE2 · Implementar el flujo | 10 pantallas, como pide la planilla · 9/9 códigos cubiertos |
| ✓ | C2.M6-AE3 M6-AE3 · Resultados y aprendizajes | 9 pantallas, como pide la planilla · 8/8 códigos cubiertos |

<details><summary>Detalle</summary>

- **C2.M1-AE1 M1-AE1 · Fundamentos de IA generativa**
  - ! 1 marcas de «pilotear / revisar antes de publicar» en el texto (ver docs/PENDIENTES-VERIFICACION.md)
- **C2.M4-AE1 M4-AE1 · Ecosistema multimedia con IA**
  - ! 1 marcas de «pilotear / revisar antes de publicar» en el texto (ver docs/PENDIENTES-VERIFICACION.md)
- **C2.M4-AE2 M4-AE2 · Imágenes y gráficos**
  - ! 1 marcas de «pilotear / revisar antes de publicar» en el texto (ver docs/PENDIENTES-VERIFICACION.md)

</details>

## C3 · Quiz formativo juego SCORM (22)

quiz/M<n>-AE<k>.md tiene las 8 preguntas de cada AE; scripts/quiz-juego.mjs genera el juego HTML, el paquete SCORM 1.2 y el GIFT (entregables/quiz/<AE>/). Formato en docs/FORMATO-QUIZ.md. Cada pregunta remite a una pantalla del contenido base: es la «acción remedial» que pide la planilla.

| | Chequeo | Resultado |
|---|---|---|
| ✓ | C3.M1-AE1 Quiz M1-AE1 | 8 preguntas · evalúa C1, C2 |
| ✓ | C3.M1-AE2 Quiz M1-AE2 | 8 preguntas · evalúa C1, C2 |
| ✓ | C3.M1-AE3 Quiz M1-AE3 | 8 preguntas · evalúa C1, C2 |
| ! | C3.M1-AE4 Quiz M1-AE4 |  3 avisos |
| ✓ | C3.M2-AE1 Quiz M2-AE1 | 8 preguntas · evalúa C1, C2 |
| ✓ | C3.M2-AE2 Quiz M2-AE2 | 8 preguntas · evalúa C1, C2 |
| ✓ | C3.M2-AE3 Quiz M2-AE3 | 8 preguntas · evalúa C1, C2 |
| ✓ | C3.M2-AE4 Quiz M2-AE4 | 8 preguntas · evalúa C1, C2 |
| ✓ | C3.M3-AE1 Quiz M3-AE1 | 8 preguntas · evalúa C1, C2 |
| ✓ | C3.M3-AE2 Quiz M3-AE2 | 8 preguntas · evalúa C1, C2 |
| ✓ | C3.M3-AE3 Quiz M3-AE3 | 8 preguntas · evalúa C1, C2 |
| ! | C3.M3-AE4 Quiz M3-AE4 |  3 avisos |
| ✓ | C3.M4-AE1 Quiz M4-AE1 | 8 preguntas · evalúa C1, C2 |
| ✓ | C3.M4-AE2 Quiz M4-AE2 | 8 preguntas · evalúa C1, C2 |
| ! | C3.M4-AE3 Quiz M4-AE3 |  3 avisos |
| ✓ | C3.M4-AE4 Quiz M4-AE4 | 8 preguntas · evalúa C1, C2 |
| ✓ | C3.M5-AE1 Quiz M5-AE1 | 8 preguntas · evalúa C1, C2 |
| ✓ | C3.M5-AE2 Quiz M5-AE2 | 8 preguntas · evalúa C1, C2 |
| ! | C3.M5-AE3 Quiz M5-AE3 |  3 avisos |
| ✓ | C3.M6-AE1 Quiz M6-AE1 | 8 preguntas · evalúa C1, C2 |
| ✓ | C3.M6-AE2 Quiz M6-AE2 | 8 preguntas · evalúa C1, C2 |
| ✓ | C3.M6-AE3 Quiz M6-AE3 | 8 preguntas · evalúa C1, C2 |

<details><summary>Detalle</summary>

- **C3.M1-AE4 Quiz M1-AE4**
  - ! M1-AE4-Quiz-Juego.html es anterior a su fuente: volver a correr quiz-juego.mjs
  - ! M1-AE4-Quiz-Juego-SCORM.zip es anterior a su fuente: volver a correr quiz-juego.mjs
  - ! M1-AE4-Quiz-Moodle.gift es anterior a su fuente: volver a correr quiz-juego.mjs
- **C3.M3-AE4 Quiz M3-AE4**
  - ! M3-AE4-Quiz-Juego.html es anterior a su fuente: volver a correr quiz-juego.mjs
  - ! M3-AE4-Quiz-Juego-SCORM.zip es anterior a su fuente: volver a correr quiz-juego.mjs
  - ! M3-AE4-Quiz-Moodle.gift es anterior a su fuente: volver a correr quiz-juego.mjs
- **C3.M4-AE3 Quiz M4-AE3**
  - ! M4-AE3-Quiz-Juego.html es anterior a su fuente: volver a correr quiz-juego.mjs
  - ! M4-AE3-Quiz-Juego-SCORM.zip es anterior a su fuente: volver a correr quiz-juego.mjs
  - ! M4-AE3-Quiz-Moodle.gift es anterior a su fuente: volver a correr quiz-juego.mjs
- **C3.M5-AE3 Quiz M5-AE3**
  - ! M5-AE3-Quiz-Juego.html es anterior a su fuente: volver a correr quiz-juego.mjs
  - ! M5-AE3-Quiz-Juego-SCORM.zip es anterior a su fuente: volver a correr quiz-juego.mjs
  - ! M5-AE3-Quiz-Moodle.gift es anterior a su fuente: volver a correr quiz-juego.mjs

</details>

## C4 · Infografías por módulo (6)

infografias/M<n>.json es la fuente de cada infografía (recursos «Complemento» de la planilla); scripts/infografias.mjs la convierte en HTML y PNG. Cada bloque remite con «ver» a las pantallas donde se desarrolla.

| | Chequeo | Resultado |
|---|---|---|
| ✓ | C4.M1 Infografía M1 | recurso R017 · título «Anatomía de un prompt efectivo» igual que en la planilla |
| ✓ | C4.M2 Infografía M2 | recurso R034 · título «Flujo de redacción aumentada» igual que en la planilla |
| ✓ | C4.M3 Infografía M3 | recurso R051 · título «Ruta de una investigación verificada» igual que en la planilla |
| ✓ | C4.M4 Infografía M4 | recurso R069 · título «Mapa del ecosistema multimedia con IA y semáforo de licencias» igual que en la planilla |
| ✓ | C4.M5 Infografía M5 | recurso R084 · título «Matriz impacto–riesgo para priorizar tareas a automatizar» igual que en la planilla |
| ✓ | C4.M6 Infografía M6 | recurso R100 · título «Ciclo del proyecto aplicado» igual que en la planilla |

## C5 · Casos de aplicación con empresas reales (11)

Cada caso de la hoja «Casos y proyecto» tiene una ficha de verificación (investigacion/casos/<id>.md, con fuentes primarias y «lo que NO se puede afirmar») y el caso redactado para el estudiante (casos/<id>.md). Formato en docs/FORMATO-CASO.md.

| | Chequeo | Resultado |
|---|---|---|
| ✓ | C5.M1-C1 M1-C1 · Asistente de IA para asesores financieros (Morgan Stanley) | estado: Verificado con ajustes · 4 fuentes, 4 primarias |
| ✓ | C5.M1-C2 M1-C2 · Cuando la IA inventa: abogados y jurisprudencia inexistente (Mata v. Avianca, 2023) y chatbot de Air Canada (2024) | estado: Verificado con ajustes · 3 fuentes, 3 primarias |
| ✓ | C5.M2-C1 M2-C1 · Comunicación con clientes redactada con apoyo de IA (Octopus Energy) | estado: Verificado con ajustes · 5 fuentes, 4 primarias |
| ✓ | C5.M2-C2 M2-C2 · Asistente de IA en herramientas de oficina para equipos (Vodafone y Microsoft 365 Copilot) | estado: Verificado con ajustes · 7 fuentes, 7 primarias |
| ✓ | C5.M3-C1 M3-C1 · Informe con referencias inexistentes generadas por IA (Deloitte Australia, 2025) | estado: Verificado con ajustes · 6 fuentes, 5 primarias |
| ! | C5.M3-C2 M3-C2 · Información confidencial ingresada a una herramienta de IA (Samsung, 2023) |  1 avisos |
| ✓ | C5.M4-C1 M4-C1 · Campañas de marca hechas con IA generativa (Coca-Cola, 2023 y 2024) | estado: Verificado con ajustes · 9 fuentes, 4 primarias |
| ✓ | C5.M4-C2 M4-C2 · Voz sintética y consentimiento (disputa Scarlett Johansson – OpenAI, 2024) | estado: Verificado · 3 fuentes, 1 primarias |
| ✓ | C5.M4-C3 M4-C3 · Licencias y datos de entrenamiento (Getty Images v. Stability AI) | estado: Verificado con ajustes · 10 fuentes, 9 primarias |
| ✓ | C5.M5-C1 M5-C1 · Automatización de la atención al cliente con IA (Klarna) | estado: Verificado con ajustes · 7 fuentes, 6 primarias |
| ✓ | C5.M5-C2 M5-C2 · Estrategia «AI-first» y sus efectos sobre el trabajo (Duolingo, 2025) | estado: Verificado con ajustes · 10 fuentes, 7 primarias |

<details><summary>Detalle</summary>

- **C5.M3-C2 M3-C2 · Información confidencial ingresada a una herramienta de IA (Samsung, 2023)**
  - ! caso descartado: hay que reemplazarlo en la planilla

</details>

## C6 · Documentos compilados (Docs y PDF)

scripts/compilar-contenidos.mjs arma, desde el contenido base, un HTML por AE para Google Docs (entregables/docs), un HTML de lectura (entregables/por-ae), un PDF por AE y el documento completo. Esta capa revisa que estén todos y que no sean anteriores al contenido.

| | Chequeo | Resultado |
|---|---|---|
| ✓ | C6.1 Un Doc, una página y un PDF por AE, al día con el contenido | Contenidos-completos.md · Contenidos-completos.html |
| ✓ | C6.2 El documento completo trae los 22 AE | 22 AE presentes |

## C7 · Correspondencia de fondo y pendientes declarados

Lo que un script no puede juzgar (si un código está trabajado de verdad, si el Bloom calza, si la técnica es la que pide la planilla) se revisó a mano en docs/CORRESPONDENCIA-FONDO.md. Lo que hay que probar en las aplicaciones o en la normativa está en docs/PENDIENTES-VERIFICACION.md. Esta capa los resume para que no se pierdan.

| | Chequeo | Resultado |
|---|---|---|
| ✓ | C7.1 Revisión cualitativa: 6 preguntas por AE | 22 AE revisados a mano |
| … | C7.2 Pendientes de verificación abiertos |  3 pendientes |

<details><summary>Detalle</summary>

- **C7.2 Pendientes de verificación abiertos**
  - … 1. Herramientas que hay que probar a mano: 11
  - … 2. Normativa: 3
  - … 3. Fuentes que no se abrieron, que se contradicen o que no dicen exactamente lo que afirma el texto: 7

</details>

## C8 · Google Drive

Los entregables se subieron a la carpeta «Curso IA generativa para entornos laborales · Recursos». La auditoría no entra a Drive: lee data/drive-inventario.json, una foto de la carpeta tomada con el conector de Drive. Compara qué hay arriba con lo local, busca duplicados y avisa si lo subido es anterior a la última versión local.

| | Chequeo | Resultado |
|---|---|---|
| ✓ | C8.0 Foto de Drive | tomada el 25-10-26, 2:20 a. m. · 28 carpetas · Curso IA generativa para entornos laborales · Recursos: 11 elementos |
| ✓ | C8.Docs-del-contenido-base Docs del contenido base en Drive | 22 archivos en la carpeta |
| ✓ | C8.PDF-del-contenido-base PDF del contenido base en Drive | 23 archivos en la carpeta |
| ! | C8.Quiz-SCORM Quiz SCORM en Drive |  4 avisos |
| ! | C8.Quiz-HTML Quiz HTML en Drive |  4 avisos |
| ! | C8.Quiz-GIFT Quiz GIFT en Drive |  4 avisos |
| ✓ | C8.planilla La planilla de origen está en Drive | copia en Google Sheets · copia .xlsx |
| ✓ | C8.ids Los ids de data/drive.json existen en Drive | 22 Docs registrados |
| ✓ | C8.info Infografías en Drive | 12 archivos |
| ✓ | C8.casos Casos de aplicación en Drive | 11 elementos en «Fichas de verificación de casos» |

<details><summary>Detalle</summary>

- **C8.Quiz-SCORM Quiz SCORM en Drive**
  - ! M1-AE4: lo de Drive (24-10-26, 12:14 p. m.) es anterior al último cambio de su fuente (24-10-26, 6:29 p. m.)
  - ! M3-AE4: lo de Drive (24-10-26, 12:14 p. m.) es anterior al último cambio de su fuente (24-10-26, 6:30 p. m.)
  - ! M4-AE3: lo de Drive (24-10-26, 12:14 p. m.) es anterior al último cambio de su fuente (24-10-26, 6:30 p. m.)
  - ! M5-AE3: lo de Drive (24-10-26, 6:33 p. m.) es anterior al último cambio de su fuente (24-10-26, 7:47 p. m.)
- **C8.Quiz-HTML Quiz HTML en Drive**
  - ! M1-AE4: lo de Drive (24-10-26, 12:14 p. m.) es anterior al último cambio de su fuente (24-10-26, 6:29 p. m.)
  - ! M3-AE4: lo de Drive (24-10-26, 12:14 p. m.) es anterior al último cambio de su fuente (24-10-26, 6:30 p. m.)
  - ! M4-AE3: lo de Drive (24-10-26, 12:14 p. m.) es anterior al último cambio de su fuente (24-10-26, 6:30 p. m.)
  - ! M5-AE3: lo de Drive (24-10-26, 6:35 p. m.) es anterior al último cambio de su fuente (24-10-26, 7:47 p. m.)
- **C8.Quiz-GIFT Quiz GIFT en Drive**
  - ! M1-AE4: lo de Drive (24-10-26, 12:15 p. m.) es anterior al último cambio de su fuente (24-10-26, 6:29 p. m.)
  - ! M3-AE4: lo de Drive (24-10-26, 12:15 p. m.) es anterior al último cambio de su fuente (24-10-26, 6:30 p. m.)
  - ! M4-AE3: lo de Drive (24-10-26, 12:15 p. m.) es anterior al último cambio de su fuente (24-10-26, 6:30 p. m.)
  - ! M5-AE3: lo de Drive (24-10-26, 6:36 p. m.) es anterior al último cambio de su fuente (24-10-26, 7:47 p. m.)

</details>

## C9 · Avance frente a los 101 recursos de la planilla

Cruza cada fila de la hoja «Recursos» con lo producido. «Hecho» = el entregable existe y pasa sus chequeos. «Insumo listo» = el contenido base trae lo que ese recurso necesita, pero el recurso en sí (Rise, página de Moodle, guion de video) aún no se arma. «Pendiente» = no se ha empezado. Los Rise los arma Natalia a partir del contenido base.

| | Chequeo | Resultado |
|---|---|---|
| … | C9.1 Estado de cada recurso |  1 pendientes |

<details><summary>Detalle</summary>

- **C9.1 Estado de cada recurso**
  - … 18 recursos sin empezar (Inducción/Diagnóstica, Foro, Evaluación sumativa, Video)

</details>

## Anexo · Detalle de los 101 recursos

| ID | Módulo | Tipo | Recurso | Min | Estado | Nota |
|---|---|---|---|---|---|---|
| R001 | M1 | Inducción/Diagnóstica | Inducción tecnológica-metodológica (video) + Guía del participante + Evaluación diagnóstica | 45 | Pendiente | Falta video de inducción, guía del participante y diagnóstica |
| R002 | M1 | Video | Video de bienvenida M1 (3 min): qué aprenderás, cómo se evalúa, hito del proyecto | 3 | En curso | Guion en videos/M1-bienvenida; falta el video |
| R003 | M1 | Rise | Rise M1-T1 · Fundamentos de IA generativa | 120 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R004 | M1 | Quiz formativo | Quiz formativo M1-AE1 · Fundamentos de IA generativa | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R005 | M1 | Rise | Rise M1-T2 · Prompts efectivos | 120 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R006 | M1 | Quiz formativo | Quiz formativo M1-AE2 · Prompts efectivos | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R007 | M1 | Rise | Rise M1-T3 · Parámetros de generación | 120 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R008 | M1 | Quiz formativo | Quiz formativo M1-AE3 · Parámetros de generación | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R009 | M1 | Rise | Rise M1-T4 · Validación de resultados | 127.5 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R010 | M1 | Quiz formativo | Quiz formativo M1-AE4 · Validación de resultados | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R011 | M1 | Hito proyecto | Proyecto aplicado · Hito 1: problema u oportunidad real + biblioteca de prompts v1 | 90 | Insumo listo | «Conexión con el proyecto» en el contenido; faltan enunciado y rúbrica del hito |
| R012 | M1 | Caso de aplicación | Caso M1-C1 · Asistente de IA para asesores financieros (Morgan Stanley) | 90 | Hecho | Caso verificado (Verificado con ajustes) |
| R013 | M1 | Caso de aplicación | Caso M1-C2 · Cuando la IA inventa: abogados y jurisprudencia inexistente (Mata v. Avianca, 2023) y chatbot de Air Canada (2024) | 90 | Hecho | Caso verificado (Verificado con ajustes) |
| R014 | M1 | Foro | Foro M1: discusión guiada del módulo (tutor responde en <24 h hábiles) | 30 | Pendiente | Falta la consigna del foro (los casos traen «Para el foro») |
| R015 | M1 | Video | Video de resumen M1 (3 min): ideas clave y conexión con el siguiente módulo | 3 | Insumo listo | Ideas clave disponibles; falta el guion y el video |
| R016 | M1 | Resumen y glosario | Resumen y glosario del módulo M1 (página; lectura 1,5 min) | 1.5 | Insumo listo | Ideas clave y glosario en el contenido base; falta la página de Moodle |
| R017 | M1 | Complemento | Infografía M1: Anatomía de un prompt efectivo (rol · contexto · tarea · formato) | 0 | Hecho | Infografía HTML + PNG |
| R018 | M1 | Evaluación sumativa | Evaluación sumativa M1 | 60 | Pendiente | Falta el banco GIFT por criterios |
| R019 | M2 | Video | Video de bienvenida M2 (3 min): qué aprenderás, cómo se evalúa, hito del proyecto | 3 | Pendiente | Falta el guion y el video |
| R020 | M2 | Rise | Rise M2-T1 · Redacción y comunicación con IA | 135 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R021 | M2 | Quiz formativo | Quiz formativo M2-AE1 · Redacción y comunicación con IA | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R022 | M2 | Rise | Rise M2-T2 · Prompting avanzado para textos | 135 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R023 | M2 | Quiz formativo | Quiz formativo M2-AE2 · Prompting avanzado para textos | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R024 | M2 | Rise | Rise M2-T3 · Presentaciones con IA | 127.5 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R025 | M2 | Quiz formativo | Quiz formativo M2-AE3 · Presentaciones con IA | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R026 | M2 | Rise | Rise M2-T4 · Planillas de cálculo con IA | 135 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R027 | M2 | Quiz formativo | Quiz formativo M2-AE4 · Planillas de cálculo con IA | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R028 | M2 | Hito proyecto | Proyecto aplicado · Hito 2: brief del proyecto + presentación de 6 láminas | 90 | Insumo listo | «Conexión con el proyecto» en el contenido; faltan enunciado y rúbrica del hito |
| R029 | M2 | Caso de aplicación | Caso M2-C1 · Comunicación con clientes redactada con apoyo de IA (Octopus Energy) | 90 | Hecho | Caso verificado (Verificado con ajustes) |
| R030 | M2 | Caso de aplicación | Caso M2-C2 · Asistente de IA en herramientas de oficina para equipos (Vodafone y Microsoft 365 Copilot) | 90 | Hecho | Caso verificado (Verificado con ajustes) |
| R031 | M2 | Foro | Foro M2: discusión guiada del módulo (tutor responde en <24 h hábiles) | 30 | Pendiente | Falta la consigna del foro (los casos traen «Para el foro») |
| R032 | M2 | Video | Video de resumen M2 (3 min): ideas clave y conexión con el siguiente módulo | 3 | Insumo listo | Ideas clave disponibles; falta el guion y el video |
| R033 | M2 | Resumen y glosario | Resumen y glosario del módulo M2 (página; lectura 1,5 min) | 1.5 | Insumo listo | Ideas clave y glosario en el contenido base; falta la página de Moodle |
| R034 | M2 | Complemento | Infografía M2: Flujo de redacción aumentada (borrador → ajuste → verificación) | 0 | Hecho | Infografía HTML + PNG |
| R035 | M2 | Evaluación sumativa | Evaluación sumativa M2 | 60 | Pendiente | Falta el banco GIFT por criterios |
| R036 | M3 | Video | Video de bienvenida M3 (3 min): qué aprenderás, cómo se evalúa, hito del proyecto | 3 | Pendiente | Falta el guion y el video |
| R037 | M3 | Rise | Rise M3-T1 · Herramientas de IA para investigar | 135 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R038 | M3 | Quiz formativo | Quiz formativo M3-AE1 · Herramientas de IA para investigar | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R039 | M3 | Rise | Rise M3-T2 · Recopilar, validar y sintetizar | 135 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R040 | M3 | Quiz formativo | Quiz formativo M3-AE2 · Recopilar, validar y sintetizar | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R041 | M3 | Rise | Rise M3-T3 · Organizar y presentar información | 127.5 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R042 | M3 | Quiz formativo | Quiz formativo M3-AE3 · Organizar y presentar información | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R043 | M3 | Rise | Rise M3-T4 · Análisis crítico y privacidad | 135 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R044 | M3 | Quiz formativo | Quiz formativo M3-AE4 · Análisis crítico y privacidad | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R045 | M3 | Hito proyecto | Proyecto aplicado · Hito 3: investigación validada con fuentes (informe breve) | 90 | Insumo listo | «Conexión con el proyecto» en el contenido; faltan enunciado y rúbrica del hito |
| R046 | M3 | Caso de aplicación | Caso M3-C1 · Informe con referencias inexistentes generadas por IA (Deloitte Australia, 2025) | 90 | Hecho | Caso verificado (Verificado con ajustes) |
| R047 | M3 | Caso de aplicación | Caso M3-C2 · Información confidencial ingresada a una herramienta de IA (Samsung, 2023) | 90 | Hecho | Caso verificado (Descartado) |
| R048 | M3 | Foro | Foro M3: discusión guiada del módulo (tutor responde en <24 h hábiles) | 30 | Pendiente | Falta la consigna del foro (los casos traen «Para el foro») |
| R049 | M3 | Video | Video de resumen M3 (3 min): ideas clave y conexión con el siguiente módulo | 3 | Insumo listo | Ideas clave disponibles; falta el guion y el video |
| R050 | M3 | Resumen y glosario | Resumen y glosario del módulo M3 (página; lectura 1,5 min) | 1.5 | Insumo listo | Ideas clave y glosario en el contenido base; falta la página de Moodle |
| R051 | M3 | Complemento | Infografía M3: Ruta de una investigación verificada (buscar · contrastar · sintetizar · citar) | 0 | Hecho | Infografía HTML + PNG |
| R052 | M3 | Evaluación sumativa | Evaluación sumativa M3 | 60 | Pendiente | Falta el banco GIFT por criterios |
| R053 | M4 | Video | Video de bienvenida M4 (3 min): qué aprenderás, cómo se evalúa, hito del proyecto | 3 | Pendiente | Falta el guion y el video |
| R054 | M4 | Rise | Rise M4-T1 · Ecosistema multimedia con IA | 112.5 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R055 | M4 | Quiz formativo | Quiz formativo M4-AE1 · Ecosistema multimedia con IA | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R056 | M4 | Rise | Rise M4-T2 · Imágenes y gráficos | 112.5 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R057 | M4 | Quiz formativo | Quiz formativo M4-AE2 · Imágenes y gráficos | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R058 | M4 | Rise | Rise M4-T3 · Audio y música | 105 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R059 | M4 | Quiz formativo | Quiz formativo M4-AE3 · Audio y música | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R060 | M4 | Rise | Rise M4-T4 · Clips y video breve | 112.5 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R061 | M4 | Quiz formativo | Quiz formativo M4-AE4 · Clips y video breve | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R062 | M4 | Hito proyecto | Proyecto aplicado · Hito 4: pieza multimedia que comunica la solución | 90 | Insumo listo | «Conexión con el proyecto» en el contenido; faltan enunciado y rúbrica del hito |
| R063 | M4 | Caso de aplicación | Caso M4-C1 · Campañas de marca hechas con IA generativa (Coca-Cola, 2023 y 2024) | 90 | Hecho | Caso verificado (Verificado con ajustes) |
| R064 | M4 | Caso de aplicación | Caso M4-C2 · Voz sintética y consentimiento (disputa Scarlett Johansson – OpenAI, 2024) | 90 | Hecho | Caso verificado (Verificado) |
| R065 | M4 | Caso de aplicación | Caso M4-C3 · Licencias y datos de entrenamiento (Getty Images v. Stability AI) | 90 | Hecho | Caso verificado (Verificado con ajustes) |
| R066 | M4 | Foro | Foro M4: discusión guiada del módulo (tutor responde en <24 h hábiles) | 30 | Pendiente | Falta la consigna del foro (los casos traen «Para el foro») |
| R067 | M4 | Video | Video de resumen M4 (3 min): ideas clave y conexión con el siguiente módulo | 3 | Insumo listo | Ideas clave disponibles; falta el guion y el video |
| R068 | M4 | Resumen y glosario | Resumen y glosario del módulo M4 (página; lectura 1,5 min) | 1.5 | Insumo listo | Ideas clave y glosario en el contenido base; falta la página de Moodle |
| R069 | M4 | Complemento | Infografía M4: Mapa del ecosistema multimedia con IA y semáforo de licencias | 0 | Hecho | Infografía HTML + PNG |
| R070 | M4 | Evaluación sumativa | Evaluación sumativa M4 | 60 | Pendiente | Falta el banco GIFT por criterios |
| R071 | M5 | Video | Video de bienvenida M5 (3 min): qué aprenderás, cómo se evalúa, hito del proyecto | 3 | Pendiente | Falta el guion y el video |
| R072 | M5 | Rise | Rise M5-T1 · Potencial de automatización | 112.5 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R073 | M5 | Quiz formativo | Quiz formativo M5-AE1 · Potencial de automatización | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R074 | M5 | Rise | Rise M5-T2 · Flujos simples con IA | 105 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R075 | M5 | Quiz formativo | Quiz formativo M5-AE2 · Flujos simples con IA | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R076 | M5 | Rise | Rise M5-T3 · Supervisión humana y riesgos | 105 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R077 | M5 | Quiz formativo | Quiz formativo M5-AE3 · Supervisión humana y riesgos | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R078 | M5 | Hito proyecto | Proyecto aplicado · Hito 5: prototipo de automatización de un paso del proceso, con supervisión humana | 90 | Insumo listo | «Conexión con el proyecto» en el contenido; faltan enunciado y rúbrica del hito |
| R079 | M5 | Caso de aplicación | Caso M5-C1 · Automatización de la atención al cliente con IA (Klarna) | 90 | Hecho | Caso verificado (Verificado con ajustes) |
| R080 | M5 | Caso de aplicación | Caso M5-C2 · Estrategia «AI-first» y sus efectos sobre el trabajo (Duolingo, 2025) | 90 | Hecho | Caso verificado (Verificado con ajustes) |
| R081 | M5 | Foro | Foro M5: discusión guiada del módulo (tutor responde en <24 h hábiles) | 30 | Pendiente | Falta la consigna del foro (los casos traen «Para el foro») |
| R082 | M5 | Video | Video de resumen M5 (3 min): ideas clave y conexión con el siguiente módulo | 3 | Insumo listo | Ideas clave disponibles; falta el guion y el video |
| R083 | M5 | Resumen y glosario | Resumen y glosario del módulo M5 (página; lectura 1,5 min) | 1.5 | Insumo listo | Ideas clave y glosario en el contenido base; falta la página de Moodle |
| R084 | M5 | Complemento | Infografía M5: Matriz impacto–riesgo para priorizar tareas a automatizar | 0 | Hecho | Infografía HTML + PNG |
| R085 | M5 | Evaluación sumativa | Evaluación sumativa M5 | 45 | Pendiente | Falta el banco GIFT por criterios |
| R086 | M6 | Video | Video de bienvenida M6 (3 min): qué aprenderás, cómo se evalúa, hito del proyecto | 3 | Pendiente | Falta el guion y el video |
| R087 | M6 | Rise | Rise M6-T1 · Oportunidad de mejora con IA | 75 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R088 | M6 | Quiz formativo | Quiz formativo M6-AE1 · Oportunidad de mejora con IA | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R089 | M6 | Rise | Rise M6-T2 · Implementar el flujo | 75 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R090 | M6 | Quiz formativo | Quiz formativo M6-AE2 · Implementar el flujo | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R091 | M6 | Rise | Rise M6-T3 · Resultados y aprendizajes | 67.5 | Insumo listo | Contenido base validado; el Rise lo arma Natalia |
| R092 | M6 | Quiz formativo | Quiz formativo M6-AE3 · Resultados y aprendizajes | 15 | Hecho | Juego HTML + SCORM 1.2 + GIFT |
| R093 | M6 | Hito proyecto | Proyecto aplicado · Hito 6a: diagnóstico, meta y plan de medición | 90 | Insumo listo | «Conexión con el proyecto» en el contenido; faltan enunciado y rúbrica del hito |
| R094 | M6 | Hito proyecto | Proyecto aplicado · Hito 6b: implementación del flujo | 90 | Insumo listo | «Conexión con el proyecto» en el contenido; faltan enunciado y rúbrica del hito |
| R095 | M6 | Hito proyecto | Proyecto aplicado · Hito 6c: medición de resultados y ajustes | 90 | Insumo listo | «Conexión con el proyecto» en el contenido; faltan enunciado y rúbrica del hito |
| R096 | M6 | Hito proyecto | Proyecto aplicado · Hito 6d: pitch y portafolio final (insumo del Demo Day) | 90 | Insumo listo | «Conexión con el proyecto» en el contenido; faltan enunciado y rúbrica del hito |
| R097 | M6 | Foro | Foro M6: discusión guiada del módulo (tutor responde en <24 h hábiles) | 30 | Pendiente | Falta la consigna del foro (los casos traen «Para el foro») |
| R098 | M6 | Video | Video de resumen M6 (3 min): ideas clave y conexión con el siguiente módulo | 3 | Insumo listo | Ideas clave disponibles; falta el guion y el video |
| R099 | M6 | Resumen y glosario | Resumen y glosario del módulo M6 (página; lectura 1,5 min) | 1.5 | Insumo listo | Ideas clave y glosario en el contenido base; falta la página de Moodle |
| R100 | M6 | Complemento | Infografía M6: Ciclo del proyecto aplicado (oportunidad → flujo → medición → pitch) | 0 | Hecho | Infografía HTML + PNG |
| R101 | M6 | Evaluación sumativa | Evaluación sumativa M6 (evaluación final integradora del curso) | 60 | Pendiente | Falta el banco GIFT por criterios |
