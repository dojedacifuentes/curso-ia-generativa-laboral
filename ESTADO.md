# Estado del proyecto

**Al 03-11-2026:** la versión 1 del curso tiene el **primer visto bueno del cliente (Accenture)** en el contenido, las secciones y
la estructura. **Ahora empieza la fase 2:** ajustar el curso a la nueva **guía técnica del SENCE** con que se revisan y aprueban
las solicitudes de cursos por franquicia tributaria.

## Fases

| Fase | Estado | Fechas | Qué es | Referencia |
|---|---|---|---|---|
| 1 · Versión 1 | Cerrada con visto bueno del cliente | 24-10-2026 al 03-11-2026 | Producción completa del curso y aula Moodle armada en formacion.empoderatech.com | Etiqueta [`v1.0-visto-bueno-cliente`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/tree/v1.0-visto-bueno-cliente) |
| 2 · Guía técnica del SENCE | En curso | Desde el 03-11-2026 | Revisar la versión 1 contra la guía, acordar los cambios con Natalia y aplicarlos | [Auditoría y tabla de verdad](docs/SENCE-TABLA-DE-VERDAD.md) |

## Fase 1 · Versión 1 con visto bueno del cliente

El 02-11-2026 se le mostró al cliente el curso armado en el aula Moodle de Empoderatech y el 03-11-2026 quedó registrado su primer
visto bueno al contenido, las secciones y la estructura. Lo que vio queda congelado en la etiqueta de git
[`v1.0-visto-bueno-cliente`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/tree/v1.0-visto-bueno-cliente)
(commit [`1b4f6ea`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/commit/1b4f6ea), el último del 02-11): desde ahí se
puede abrir cualquier archivo tal como estaba y
[comparar con lo que cambie en la fase 2](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/compare/v1.0-visto-bueno-cliente...main).

### Qué tiene la versión 1

| Pieza | Versión 1 | Dónde |
|---|---|---|
| Estructura | 6 módulos, 22 aprendizajes esperados y 88 horas (16 h los módulos 1 a 4; 12 h el 5 y el 6) | [Planilla de origen](data/planilla/) y `data/curso.json` |
| Contenido | 338 pantallas con 212 fuentes leídas y citas APA 7 (177 referencias revisadas), armadas en 22 Rise exportados en SCORM 1.2 | [contenido/](contenido/), [investigacion/](investigacion/), [Rise](entregables/rise/LEEME.md) |
| Práctica | 22 quiz juego (176 preguntas), 44 prácticas autoevaluadas con respuesta modelo y 10 casos reales verificados en fuente primaria | [quiz/](quiz/), [actividades/](actividades/), [casos/](casos/) |
| Práctica evaluada | Entrega y revisión docente de los casos (módulos 1 a 5) y del pitch del proyecto (módulo 6), con rúbrica, nota y retroalimentación del docente | [Rúbrica de casos](casos/RUBRICA.md), [pitch](pitch/Pitch-del-proyecto.md) |
| Evaluación | 6 diagnósticas sin nota, 6 evaluaciones de módulo (58 preguntas) y la evaluación final (4 casos, 22 preguntas); escala 1,0 a 7,0, aprueba con 60 % | [evaluaciones/](evaluaciones/) |
| Nota del curso | Evaluación final 40 % y cada módulo 10 %, mitad evaluación del módulo y mitad práctica evaluada | [Criterios del 02-11](docs/CRITERIOS-02-11.md) |
| Interacción | Un foro por módulo, un foro de interacción del curso y la guía del facilitador con pautas por tema | [foros/](foros/), [guia-facilitador/](guia-facilitador/) |
| Resumen | 6 infografías (estática e interactiva) y un glosario por módulo (279 términos) | [infografias/](infografias/), [glosario/](glosario/) |
| Videos | 12 videos de bienvenida y resumen de módulo y el video de inducción, con la marca Empoderatech | [Entrega de videos](videos/ENTREGA-VIDEOS.md) |
| Aula Moodle | Curso 2 en formacion.empoderatech.com (Moodle 5.3) con libro de calificaciones, finalización, insignias y cuentas de docente y de estudiante de prueba | [Aula Moodle](docs/AULA-MOODLE.md), [mapa del aula](docs/MAPA-AULA-MOODLE.md) |
| Control | Auditoría de 108 chequeos al 03-11 (0 errores, 11 avisos) y 100 de los 101 recursos de la planilla con su pieza | [Auditoría](docs/AUDITORIA.md) |

## Fase 2 · Ajustes por la guía técnica del SENCE

**Qué llegó.** El 03-11-2026 OTIC SOFOFA envió a sus proveedores la «Guía técnica para organismos ejecutores de capacitación ·
Revisión de solicitudes de cursos financiables mediante Franquicia Tributaria del SENCE» y Natalia la reenvió al equipo. Desarrolla
los criterios de admisibilidad legal, admisibilidad formal y evaluación técnica de la RE 2.484 de 2026, la misma resolución de la
hoja «Cumplimiento RE 2484» de la planilla, y dice que en un curso e-learning el SENCE comprobará en el aula todo lo que declare la
solicitud. Falta confirmar si es la Guía Técnica que cita la resolución: el Anexo Técnico con indicadores y estándares, que la planilla
también tenía por obtener, no llegó con ella.

**Auditoría completa (03-11).** La guía se revisó página por página y quedó convertida en una tabla de verdad: 147 enunciados, entre
requisitos, criterios, límites y modelos, cada uno como una afirmación verificable con su sección y su página, más 18 modelos y 18
hallazgos, 5 de gravedad alta. Está en [docs/SENCE-TABLA-DE-VERDAD.md](docs/SENCE-TABLA-DE-VERDAD.md) y en
[Word en Drive](https://drive.google.com/file/d/1RXuNMKpa2p4UPAWcvIAoRMvql_Kn4E1B/view), carpeta «16 Fase 2 · Guía técnica SENCE». Es la
vara para comparar el aula y la solicitud, y se contrastó de forma independiente con la guía. Lo primero es confirmar con OTIC SOFOFA o el SENCE si esta es la versión oficial y si hay un Anexo Técnico.

**Comparación con el aula (03-11).** Las 133 filas comparables se midieron contra Moodle, en solo lectura, y contra la planilla, el contenido y nuestras
anotaciones: 25 verdaderas, 69 parciales, 28 falsas y 11 sin datos. De las 26 excluyentes, 7 son falsas: 6 son textos de la solicitud que nadie ha
escrito y la séptima es una falla real del aula, porque hoy se puede finalizar el curso sin revisión docente y con 3,3 % de la nota. En 12 de los 22
aprendizajes esperados el producto que pide el verbo no llega al docente. Tres revisiones independientes intentaron rebatir los dictámenes y sus
reparos ya están incorporados. El resultado, 9 decisiones y el plan de 24 correcciones están en [la tabla de verdad](docs/SENCE-TABLA-DE-VERDAD.md) y en el
[Word en Drive](https://drive.google.com/file/d/1RXuNMKpa2p4UPAWcvIAoRMvql_Kn4E1B/view). La foto del aula queda en `data/sence/foto-aula-03-11.json`. **Moodle no se modificó.** Las modificaciones, por dimensión y con 25 pantallazos señalados, están en el
[Google Doc para el equipo](https://docs.google.com/document/d/1Q1dY4ieGM2z7ZZC5bSUYjW72TA6CdnLLeiEC0Cxe5s4/edit), en la carpeta 16 de Drive.

**Primera lectura (03-11).** La guía quedó agrupada en 17 puntos y cuatro son brechas probables: la duración y su desglose por aprendizaje
esperado, la función del facilitador por aprendizaje esperado, una evaluación que verifique la aplicación (hoy pesa más la selección
múltiple) y las contradicciones entre la planilla y el aula (ponderación y nombre del curso). El detalle, punto por punto, está en
[docs/SENCE-GUIA-TECNICA-FT.md](docs/SENCE-GUIA-TECNICA-FT.md).

**Cómo vamos a trabajar.** Comparar el curso contra la tabla de verdad con evidencia del repo y del aula, acordar los cambios con Natalia
y aplicarlos con el método de la fase 1: criterios fechados en `docs/CRITERIOS-<fecha>.md`, commits que los nombran, una fila en la bitácora y la
auditoría y el panel al día.

### Pendientes que vienen de la versión 1

- Rise del tema «Resultados y aprendizajes» (M6-AE3): todavía dice que el pitch se comparte en el foro; corregir, rearmar en Rise EU y
  reexportar el SCORM.
- Insignia del módulo 6: revisar que sus criterios incluyan la tarea del pitch.
- Drive al día: video de inducción en la carpeta 15; Docs de actividades, casos, foros y guía desde el 31-10; quiz y PDF del módulo 6
  (avisos C6 y C8 de la auditoría).
- Cuenta del evaluador SENCE: ya existe, con rol de profesor sin edición y de estudiante; definir qué cuenta recibe el SENCE (corrección C-07).
- Planilla de Natalia (ver C-21 y C-23: sacar M4-C3 abre un descuadre de 90 minutos): sacar el caso M4-C3 (Getty, fuera del aula desde el 02-11), reemplazar M3-C2 (Samsung por Eindhoven), quitar
  «uno al que aspira» de M6-AE1 y poner la ponderación del 02-11; luego volver a importarla al repo.
- `scripts/revisar-criterios.mjs` todavía espera los nombres anteriores de las prácticas y no admite «caso real» en los foros de
  casos: actualizar el control.

## Bitácora

| Fecha | Hito | Qué se hizo | Documento | Commit |
|---|---|---|---|---|
| 24-10-2026 | Contenido base | Investigación con 212 fuentes, los 22 aprendizajes esperados en 338 pantallas, 22 quiz juego, 6 infografías y 11 casos verificados en fuente primaria; carpeta del curso en Drive | [Workflow](WORKFLOW.md) | [`17e3b55`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/commit/17e3b55) |
| 25-10-2026 | Repositorio y panel | Repositorio público, panel en Vercel y la planilla de origen en el repo, en Drive y en el panel; primer video de módulo | [README](README.md) | [`e66aa44`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/commit/e66aa44) |
| 28-10-2026 | Audiencia | Solo personas que trabajan, en tareas administrativas y de productividad; los casos no se nombran fuera de su recurso; infografías interactivas en SCORM | [Criterios del 28-10](docs/CRITERIOS-28-10.md) | [`bcbf0eb`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/commit/bcbf0eb) |
| 29-10-2026 | Marca y Rise | Marca Empoderatech y APA 7 en todo, glosario aparte y 44 actividades; los 22 Rise armados y exportados en SCORM 1.2 | [Criterios del 29-10](docs/CRITERIOS-29-10.md) | [`ffe3f11`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/commit/ffe3f11) |
| 30-10-2026 | Estructura SENCE y aula | Estructura de curso asincrónico (rúbricas, guía del facilitador y foros), aula Moodle armada en formacion.empoderatech.com y 12 videos de módulo | [Plan SENCE del 30-10](docs/PLAN-SENCE-30-10.md) | [`d23f587`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/commit/d23f587) |
| 31-10-2026 | Observaciones de Natalia | Prácticas autoevaluadas, casos como práctica evaluada con revisión docente, evaluaciones de módulo y final, 88 h en el aula; diseño inspirado en un curso ya aprobado por el SENCE | [Observaciones del 31-10](docs/OBSERVACIONES-NATALIA-31-10.md) | [`d3c8944`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/commit/d3c8944) |
| 01-11-2026 | Revisión de Natalia | «Práctica autoevaluada» en los nombres, 6 diagnósticas sin nota, quiz juego con alternativas parejas y apertura de los foros | [Revisión del 01-11](docs/OBSERVACIONES-NATALIA-01-11.md) | [`a952a35`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/commit/a952a35) |
| 02-11-2026 | Presentación al cliente | Ponderación por módulo, pitch como práctica evaluada del módulo 6, módulo 4 con dos casos, inducción con guía y video, cuentas de docente y de estudiante; el aula se le mostró a Accenture | [Criterios del 02-11](docs/CRITERIOS-02-11.md) | [`1b4f6ea`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/commit/1b4f6ea) |
| 03-11-2026 | Visto bueno del cliente | Primer visto bueno del cliente al contenido, las secciones y la estructura; la versión 1 queda en la etiqueta `v1.0-visto-bueno-cliente`, con la auditoría y el panel al día | [Estado del proyecto](ESTADO.md) | [`v1.0-visto-bueno-cliente`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/tree/v1.0-visto-bueno-cliente) |
| 03-11-2026 | Guía técnica del SENCE | Llega la guía técnica del SENCE para revisar las solicitudes de cursos por franquicia tributaria y empieza la fase 2, con una primera lectura punto por punto | [Guía técnica SENCE](docs/SENCE-GUIA-TECNICA-FT.md) | [`c9f3c12`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/commit/c9f3c12) |
| 03-11-2026 | Auditoría de la guía | Auditoría completa de las 21 páginas: tabla de verdad de 147 enunciados con su Word en Drive, 18 modelos y 18 hallazgos, entre ellos que el Anexo Técnico no llegó; falta comparar el curso | [Tabla de verdad](docs/SENCE-TABLA-DE-VERDAD.md) | [`6cb923b`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/commit/6cb923b) |
| 03-11-2026 | Comparación con el aula | Las 133 filas medidas contra Moodle en solo lectura: 25 V, 69 P, 28 F y 11 sin datos; 10 brechas, 9 decisiones y 24 correcciones; Moodle sin cambios | [Tabla de verdad](docs/SENCE-TABLA-DE-VERDAD.md) | [`59fe2a2`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/commit/59fe2a2) |
| 03-11-2026 | Modificaciones en Google Doc | Doc colorido por dimensión con 25 pantallazos señalados de lo que hay que cambiar, en la carpeta 16 de Drive | [Google Doc](https://docs.google.com/document/d/1Q1dY4ieGM2z7ZZC5bSUYjW72TA6CdnLLeiEC0Cxe5s4/edit) | — |

## Cómo se registra cada cambio

- **Lo aprobado no se pierde:** la etiqueta `v1.0-visto-bueno-cliente` no se mueve. Lo que cambie en la fase 2 se ve comparándola con
  `main` en GitHub.
- **Cada decisión tiene su documento:** `docs/CRITERIOS-<fecha>.md` cuando la pide el equipo, `docs/OBSERVACIONES-NATALIA-<fecha>.md`
  cuando viene de Natalia. Si dos se contradicen, prima el más nuevo y lo dice.
- **Cada cambio aplicado suma una fila a la bitácora** de este documento, con su documento y su commit.
- **El panel se regenera solo** en cada push: https://curso-ia-generativa-laboral.vercel.app (vista «Estado»).
