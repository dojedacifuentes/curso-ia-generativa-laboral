# Actividades de aplicación práctica · M6-AE2 · Implementar el flujo

## Actividad 1 · Un ciclo de prueba con documentos inventados
cubre: H1, C1, C2
fuentes: F-M6-04, F-M6-08
entrega: tarea

### Instrucción general

Vas a hacer con Camila una ronda completa de prueba de su flujo de registro: definir quién revisa, probar con cinco documentos
inventados, ajustar la plantilla y dejar registro de la decisión. Así practicas la implementación con supervisión y la documentación
que pide tu propio flujo. Es una actividad formativa: no lleva nota. La subes como tarea en el aula, con tu planilla, las plantillas,
la tabla de versiones y la bitácora como capturas o archivos adjuntos, y, antes de enviarla, revisas tu trabajo con la rúbrica de
autoevaluación del final.

### Situación

Camila quiere probar en pequeño su flujo de registro antes de usarlo en su tarea de todos los días, y te pide que la ayudes con una
ronda de prueba. Para no tocar ningún documento de la constructora, van a usar cinco documentos inventados, escritos como texto. El
primero es una factura clara: «Factura n.º 1187, emitida el 3 de noviembre de 2026 por el Proveedor A, por 40 sacos de cemento, total
$412.000». El segundo es una orden de compra con la fecha en números: «Orden de compra 2051, del 04/11/2026, de la oficina de
administración al Proveedor B, por 10 cajas de guantes». El tercero es un contrato sin fecha: «Contrato de arriendo de una bodega
entre la constructora y el Proveedor C, por doce meses». El cuarto es una factura sin fecha ni detalle: «Factura 1190, Proveedor A,
total $98.500». El quinto no es de ningún tipo del registro: «Guía de despacho 330, Proveedor B, 25 sacos de cemento».

La plantilla v1 de Camila dice: «Lee este documento y devuélveme una fila de tabla con tipo (factura, orden de compra o contrato),
fecha, emisor, número y monto». Es una buena base, pero todavía no dice qué hacer cuando falta un dato o cuando el documento no calza
con ninguno de los tres tipos.

### Lo que vas a hacer

Usa Gemini gratis, en el celular o en el computador, y una planilla de Google para anotar. Los cambios se prueban primero a pequeña
escala, se estudia qué pasó y recién después se adoptan, así que esta ronda es un ciclo completo con pocos casos [@F-M6-04].

1. Antes de correr nada, define el punto de supervisión de Camila respondiendo por escrito quién revisa, cuándo, qué revisa, con qué
   criterio y qué hace si algo falla.
2. Escribe qué esperas que pase con cada uno de los cinco documentos.
3. Corre la plantilla v1 con los cinco documentos, en conversaciones separadas, y compara cada campo de la respuesta con el texto
   original. Anota en la planilla los campos correctos, los errores y cualquier dato que el asistente haya agregado sin que estuviera
   en el documento.
4. Estudia la diferencia entre lo que esperabas y lo que pasó, y ubica la causa de cada error en la plantilla, en el dato de entrada o
   en tu revisión.
5. Ajusta la plantilla para corregir la causa y guárdala como v2 sin borrar la v1. Vuelve a probarla con los mismos cinco documentos.
6. Registra el ajuste en una tabla de versiones, con versión, fecha, herramienta, qué cambió y cuántos de los cinco casos salieron sin
   errores.
7. Escribe una entrada en la bitácora de decisiones con fecha, título, contexto, decisión, consecuencias y estado. Si después cambias
   de idea, no reescribas esa entrada: agrega una nueva y marca la anterior como reemplazada [@F-M6-08].

### Lo que entregas

Subes en la tarea la planilla con los resultados de las dos rondas, el punto de supervisión por escrito, las plantillas
v1 y v2, la tabla de versiones y la entrada de la bitácora. Agrega un párrafo breve sobre qué error habría llegado a la planilla de
registro si nadie hubiera revisado. Suma tu autoevaluación: el nivel que marcaste en cada criterio de la rúbrica, con una línea que lo
justifique.

### Rúbrica de autoevaluación

Antes de entregar, revisa tu trabajo con esta rúbrica y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Define el punto de supervisión | Antes de la primera prueba respondiste quién revisa, cuándo, qué, con qué criterio y qué hace si algo falla. | Respondiste las cinco preguntas, pero alguna de forma vaga o después de las pruebas. | No definiste el punto de supervisión. |
| Implementa y revisa la prueba | Cada documento tiene lo esperado y su comparación campo por campo, cada error tiene su causa ubicada, detectaste los datos agregados por el asistente y no los copiaste, y tu párrafo final nombra un error concreto. | La comparación está, pero en algún documento no es campo por campo, te falta la causa de un error o un dato agregado pasó al resultado. | No comparaste la respuesta con los documentos, o copiaste los resultados sin revisar. |
| Versiona la plantilla | Tu v1 sigue guardada, la v2 corrige la causa y tu tabla de versiones muestra las dos probadas con los mismos cinco casos. | Tienes v1 y v2, pero la tabla no muestra los resultados de ambas o probaste la v2 con otros casos. | Tienes una sola versión, o reemplazaste la v1. |
| Documenta la decisión | Tu entrada de la bitácora tiene fecha, título, contexto, decisión, consecuencias buenas y malas, y estado. | La entrada está, pero le falta uno de sus elementos o solo nombra consecuencias buenas. | No hay entrada de bitácora. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de entregar.

## Actividad 2 · Implementa y documenta tu propio flujo
cubre: H1, C1, C2
fuentes: F-M6-07, F-M5-12
entrega: tarea

### Instrucción general

Vas a llevar tu prototipo a un flujo completo que funcione en tu trabajo, con supervisión humana, pruebas y registro de cada
decisión. Es el Hito 6b de tu proyecto del curso. Es una actividad formativa: no lleva nota. La subes como tarea en el aula, en un
documento o con el enlace a tu carpeta compartida, y, antes de enviarla, revisas tu trabajo con la rúbrica de autoevaluación del
final. Solo lo ven tú y el facilitador, porque trabajas con tu flujo real.

### Situación

Ya tienes el diagnóstico, la meta y el plan de medición de tu Hito 6a, y en el Hito 5 automatizaste un paso de tu tarea. Ahora toca
llevar ese prototipo a un flujo completo que funcione en tu trabajo, con supervisión humana y con registro de cada decisión. Esta actividad es tu Hito 6b. Mientras pruebas, usa copias sin datos sensibles, una cuenta de práctica si tu herramienta lo
necesita y solo lo que tu empresa permite.

### Lo que vas a hacer

1. Escribe tu flujo en tres a cinco pasos y marca cada uno como disparador, herramienta, IA, revisión humana o registro. Anota los
   límites del plan gratuito de tu herramienta.
2. Define cada punto de supervisión respondiendo quién revisa, cuándo, qué revisa, con qué criterio y qué hace si algo falla, y di qué nivel aplicas: participación humana en cada decisión,
   control humano sobre el diseño y el funcionamiento, o mando humano sobre si usar el sistema, cuándo y cómo [@F-M5-12].
3. Arma tu tabla con al menos cuatro riesgos y su control. Uno de ellos tiene que ser el plan de contingencia, que no puede depender de
   la misma herramienta.
4. Escribe la ficha del flujo antes de la primera prueba, con sus ocho campos: nombre, propósito, entradas, salidas, dependencias, supervisión, contingencia, y responsable y fecha, con una convención de nombres que uses en el flujo, las
   plantillas, las planillas y los archivos.
5. Prepara diez casos de prueba con copias sin datos sensibles, al menos tres difíciles, y prueba la mayor cantidad de escenarios
   posibles antes de usar el flujo en serio [@F-M6-07]. Anota el resultado de cada caso.
6. Haz al menos un ajuste: ubica el paso que falló, corrige la causa, crea una versión nueva de la plantilla y vuelve a probar con los
   mismos diez casos.
7. Registra en tu bitácora al menos tres decisiones: la herramienta, el punto de supervisión y un riesgo que decidiste controlar.
8. Comparte la ficha con tu jefatura o tu tutor y pregúntale si, solo leyéndola, entiende qué hace el flujo y quién lo revisa.

### Lo que entregas

Subes en la tarea un documento, o el enlace a una carpeta compartida, con el flujo en pasos, la ficha, la tabla de riesgos,
la tabla de versiones de tu plantilla principal, la bitácora con al menos tres entradas y la evidencia de las pruebas, con capturas
que no muestren datos personales ni información de tu empresa. Suma tu autoevaluación: el nivel que marcaste en cada criterio de la
rúbrica, con una línea que lo justifique.

### Rúbrica de autoevaluación

Antes de entregar, revisa tu trabajo con esta rúbrica y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Implementa el flujo con supervisión | Tu flujo tiene de tres a cinco pasos marcados por tipo, con los límites del plan gratuito, y cada punto de supervisión dice quién, cuándo, qué y con qué criterio se revisa, qué se hace si falla y qué nivel aplica. | El flujo y la supervisión están, pero a un punto le falta una de las respuestas o el nivel. | No hay punto de supervisión, o tu flujo no está descrito en pasos. |
| Controla riesgos y contingencia | Tienes al menos cuatro riesgos con su control, y tu plan de contingencia no depende de la misma herramienta. | Tienes menos de cuatro riesgos o algún riesgo sin control. | No hay tabla de riesgos, o tu plan de contingencia depende de la misma herramienta. |
| Prueba y ajusta | Tus diez casos, con al menos tres difíciles, tienen su resultado, y hiciste al menos un ajuste con su causa y una versión nueva probada con los mismos diez casos. | Las pruebas están, pero tienes menos de diez casos o de tres difíciles, o probaste la versión nueva con otros casos. | No hay evidencia de pruebas ni de ajustes. |
| Documenta decisiones y ajustes | Tu ficha tiene sus ocho campos, una convención de nombres y el último ajuste; tu bitácora tiene al menos tres entradas con fecha, contexto, decisión y consecuencias, y ninguna evidencia muestra datos personales. | La ficha o la bitácora están incompletas, o la ficha no refleja el último ajuste. | No hay ficha ni bitácora, o tu evidencia muestra datos personales o de la empresa. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de entregar.

## Referencias bibliográficas

- Government Digital Service. (2026, 5 de marzo). *The GDS Way: Architecture decisions*. https://gds-way.digital.cabinet-office.gov.uk/standards/architecture-decisions.html
- Grupo independiente de expertos de alto nivel sobre inteligencia artificial. (2019). *Directrices éticas para una IA fiable*. Comisión Europea. https://ec.europa.eu/newsroom/dae/document.cfm?doc_id=60423
- Institute for Healthcare Improvement. (s. f.). *Model for improvement*. https://www.ihi.org/library/model-for-improvement
- University of Bath. (s. f.). *Automation standards for Microsoft Power Automate*. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
