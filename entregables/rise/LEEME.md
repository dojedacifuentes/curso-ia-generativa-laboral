# Rise del curso (29-10)

M1-AE1 y M1-AE2 son duplicados corregidos de los Rise de Natalia; los otros 20 se generaron desde el contenido base (29-10). Todos en borrador, sin publicar ni compartir.
En Rise 360 (cuenta de Natalia, equipo Universidad Carlos Tercero). Son duplicados de los Rise que armó Natalia, que quedan
intactos. Están como borrador, sin publicar ni compartir.

| AE | Curso (título que ve el estudiante) | Editor |
|---|---|---|
| M1-AE1 | Fundamentos de IA generativa (corregido) | https://rise.eu.articulate.com/authoring/P9GpNxk2sfvKnwyJIZ4QlejNK_Bbitvq |
| M1-AE2 | Prompts efectivos (corregido) | https://rise.eu.articulate.com/authoring/OMzllulso49uQ8q6ARWMjTTv_rJty8xz |
| M1-AE3 | Parámetros de generación | https://rise.eu.articulate.com/authoring/bKbPkTP7XqxlNM4J0tuG5Xhu2rwruSzf |
| M1-AE4 | Validación de resultados | https://rise.eu.articulate.com/authoring/PPmtFP9ufBQ0_UPcbmXZV1yE8_EN_MvB |
| M2-AE1 | Redacción y comunicación con IA | https://rise.eu.articulate.com/authoring/uChTWiOxSXBkNzgYosqU2g_j7V7snZ0X |
| M2-AE2 | Prompting avanzado para textos | https://rise.eu.articulate.com/authoring/K1RsxsDgEOGMtRsXQIOWamaS7H8L21X9 |
| M2-AE3 | Presentaciones con IA | https://rise.eu.articulate.com/authoring/8IAODi1juVjbg38rp9qWjujvnkopmNtt |
| M2-AE4 | Planillas de cálculo con IA | https://rise.eu.articulate.com/authoring/P3OHQcMVesodpW1-pL1UwCtQQ74FAq0X |
| M3-AE1 | Herramientas de IA para investigar | https://rise.eu.articulate.com/authoring/qXYy-dcXCbm6QoCMqMmigkBtXneW6Faw |
| M3-AE2 | Recopilar, validar y sintetizar | https://rise.eu.articulate.com/authoring/2bClHADS2Sdz6DXtEzjCDLRN09SYJY4D |
| M3-AE3 | Organizar y presentar información | https://rise.eu.articulate.com/authoring/8ilZ2wrvXZhMJ6b6yfflylgj6ezwD7pm |
| M3-AE4 | Análisis crítico y privacidad | https://rise.eu.articulate.com/authoring/Gx9_kKeVqKAi3oOe3pYCQTN8iQTxaR-O |
| M4-AE1 | Ecosistema multimedia con IA | https://rise.eu.articulate.com/authoring/m4X-ho9ZnnjXE95wT_GXa2JOTvCrm0u2 |
| M4-AE2 | Imágenes y gráficos | https://rise.eu.articulate.com/authoring/UPZ2dltcAP2p-IkrhJAUS43ZJsPoZpJ3 |
| M4-AE3 | Audio y música | https://rise.eu.articulate.com/authoring/c-q1wrQPBqNJDjwk_uYdNNcksbQj8eMj |
| M4-AE4 | Clips y video breve | https://rise.eu.articulate.com/authoring/eJ5JEvEmEViXbjqAq685kpbq1cQxQNAo |
| M5-AE1 | Potencial de automatización | https://rise.eu.articulate.com/authoring/D-NMWP6s8RmIeeKGbUy36QfR8ZuSrfqe |
| M5-AE2 | Flujos simples con IA | https://rise.eu.articulate.com/authoring/8qpp2ZjrQAprHda25YjUQ0CS92NrUJoQ |
| M5-AE3 | Supervisión humana y riesgos | https://rise.eu.articulate.com/authoring/top75KiobR3ThppOPocIg9AA30ypV0nZ |
| M6-AE1 | Oportunidad de mejora con IA | https://rise.eu.articulate.com/authoring/NuSFxQn8LQrl_zhaty6KsOXTlPZBvbJE |
| M6-AE2 | Implementar el flujo | https://rise.eu.articulate.com/authoring/nUm-eIaU7djyewMCtuszP0kBIeLNTanA |
| M6-AE3 | Resultados y aprendizajes | https://rise.eu.articulate.com/authoring/Svt__y_DhwaUay1WZ-IcRfXE-iDtP2O8 |

Los 22 se verificaron el 29-10 (título, lecciones, competencia y AE, referencias, sin lecciones vacías ni códigos). Ids también en `ids.json`.

## Reglas (pedidos del usuario del 29-10)

- El Rise lleva **solo el contenido**. El quiz interactivo, las actividades de aplicación, la infografía y el glosario son
  recursos aparte y no van dentro.
- Sin códigos a la vista del estudiante (M1-AE1, M1-T2, P01…): la franquicia es comercial. El título es el tema del AE.
- Portada y primera lección: «Competencia del módulo: …» y «Aprendizaje esperado: …», textuales de la planilla.
- Citas APA 7 en el texto y lección final «Referencias bibliográficas», como en el Doc del AE.
- Sin «Conexión con el proyecto».
- El texto sale del contenido base. Si el Rise de origen trae pasos reescritos con IA, se vuelve al texto del contenido base
  (en M1-AE2 pasó en «Iterar» y en «Laboratorio de prompts»).

## Cómo se genera un Rise nuevo (desde M1-AE3)

1. `node scripts/rise-generar.mjs M1-AE4 M2-AE1 …` → `entregables/rise/<AE>/rise-curso.json` (avisa si queda algún código
   a la vista). Commit y push.
2. En la biblioteca de Rise, duplicar un Rise ya armado (cualquiera sirve de plantilla: trae la marca, el tema y las fotos) y
   ponerle el nombre del tema. Con el script: abrir el menú ⋯ con un clic real, ubicar «Duplicate» con find y hacer clic por
   referencia (el clic por coordenadas a veces cae en otra fila); verificar que se abrió «Duplicate Course» antes de escribir.
3. En el editor del duplicado, cargar `scripts/lib/rise-armar.js` desde raw.githubusercontent y correr
   `riseArmar(courseId, datos)`: borra las lecciones de la plantilla y crea las del AE (unos segundos).
4. Revisar en la vista previa.

Qué hace el generador: P01 con la competencia y el AE textuales; lecciones de 3 pantallas (la primera con P01 y la última con
el cierre y las ideas clave), con el nombre de su primera pantalla; cada pantalla con su título, el texto con citas APA, las
tablas como tabla, los recuadros (ejemplo, error frecuente, idea clave, actividad) y los prompts de ejemplo como nota, las
preguntas «comprueba» como pregunta de opción múltiple y las listas numeradas como proceso cuando la pantalla lo pide. Las
remisiones «pantalla 14» o «P09» pasan al nombre de la sección. Al final, la lección «Referencias bibliográficas».

## Cómo se corrigió un Rise existente (M1-AE1 y M1-AE2)

1. `node scripts/rise-preparar.mjs M1-AE2` → `entregables/rise/M1-AE2/rise-datos.json`; commit y push.
2. Duplicar el Rise de origen en la biblioteca (menú ⋯ › Duplicate).
3. En el editor, cargar `scripts/lib/rise-aplicar.js` desde raw.githubusercontent y correr
   `riseAplicar(courseId, datos, { probar: true })`. Si todas las citas se ubican, correrlo sin `probar`.
4. Revisar en la vista previa y comparar frase por frase con el contenido base.

Los zips `M1-AE1/M1-AE1-Quiz-Rise.zip` y `M1-AE1/M1-Infografia-Rise.zip` (index.html en la raíz) sirven si algún día se quiere
un bloque Código › Upload project, pero por ahora el quiz y la infografía van fuera del Rise.

## SCORM para Moodle (29-10)

Los 22 se exportaron desde Rise (Publish › LMS) con la misma configuración: **SCORM 1.2**, **paquete estándar** (el zip trae todo
el curso y no depende de la cuenta de Articulate), seguimiento por **finalización del curso al 100 %**, informe
**Completo/Incompleto**, sin enlace de salida, con portada y **sin recolección de datos de uso**. La configuración quedó guardada en
cada curso (`exportSettings`), así que una nueva exportación sale igual.

Zips en Drive: carpeta «12 Rise · SCORM 1.2 para Moodle» (`1i4yhVYsRz4Yk6YJUGM-H8fFfWgKZIW43`), con el nombre
«M1-AE1 Fundamentos de IA generativa (Rise SCORM 1.2).zip». Copia local en `entregables/rise/scorm/` (fuera de git por tamaño).
Cada zip tiene `imsmanifest.xml` SCORM 1.2 con el título del tema. En Moodle se suben como actividad «Paquete SCORM».
