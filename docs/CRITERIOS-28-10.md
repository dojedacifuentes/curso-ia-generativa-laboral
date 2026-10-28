# Criterios de corrección del 28-10-2026

Cambio pedido por el usuario y corregido por Natalia en la planilla (hoja «Léeme», fila Audiencia): el curso es **solo para
personas que están trabajando**, y está orientado a quienes usan IA en **tareas administrativas y de productividad** en su trabajo.
Ya no es para personas cesantes ni para quienes buscan empleo.

Estos criterios mandan sobre lo que digan `FORMATO-CONTENIDO-BASE.md`, `BRIEF-REDACCION.md`, `FORMATO-QUIZ.md`,
`FORMATO-INFOGRAFIA.md` y `FORMATO-CASO.md` en lo que se contradigan. Se aplican a todo: contenido base de los 22 AE, quiz,
infografías, casos, guiones de video y documentos que van a Drive. Control: `node scripts/revisar-criterios.mjs`.

## 1. Audiencia

- Quien estudia **tiene un trabajo hoy**. Se le habla de *su* cargo, *su* jefatura, *sus* tareas, *su* equipo. Nada de «si buscas
  trabajo», «el cargo al que aspiras», «si hoy no trabajas», avisos de empleo, cartas de presentación, postular, entrevistas de trabajo
  ni portafolio «para empleadores».
- Las tareas de los ejemplos son administrativas y de productividad: correos, minutas, informes, planillas, registro de documentos,
  agenda, reportes, avisos internos, atención de clientes y proveedores.
- Herramientas: se mantienen las gratuitas y usables desde el celular (siguen en la planilla). Se puede decir que en su trabajo quizá
  tenga otra herramienta, pero sin agregar temas que la planilla no trae.
- Datos de la empresa: como la persona trabaja con información real, las prácticas se hacen con **copias sin datos sensibles** o con
  datos de prueba, y se respeta lo que diga su empresa (esto ya lo trabaja M3-AE4).
- Excepción: los textos que vienen igual de la planilla (el texto del AE de M6-AE1 dice «su cargo actual o uno al que aspira»; el H1 de
  M5-AE1 dice «el que ejerce o al que aspira») se dejan tal cual porque el validador exige el texto exacto. Se avisó al usuario para que
  Natalia los corrija en la planilla. El resto del texto de esas pantallas habla solo del cargo actual.
- Que RR. HH. reciba postulaciones o currículums **de otras personas** sí puede ser un ejemplo de tarea de oficina (M1-AE1, M5-AE1,
  M5-AE3). Lo que no va es que quien estudia sea postulante.

## 2. Personajes

| Personaje | Antes | Ahora |
|---|---|---|
| **Camila Soto** | Buscaba trabajo de asistente administrativa | **Asistente administrativa en la oficina de una constructora mediana.** Lleva dos años en el cargo; antes trabajó en atención de público y en una oficina de cobranza. Responde correos de proveedores y clientes, lleva la agenda de su jefatura (la gerenta de administración), prepara minutas y **registra facturas, órdenes de compra y contratos** en una planilla. |
| Andrés | Encargado de bodega en una distribuidora | Igual. |
| Rosa | Recepcionista de un centro médico | Igual. |
| Paula | Ejecutiva de atención al cliente | Igual. |

Equivalencias para Camila (para que todos los módulos digan lo mismo):

| Antes (buscaba empleo) | Ahora (trabaja) |
|---|---|
| Carta de presentación con sus apuntes de experiencia | Correo de respuesta a un proveedor o a un cliente, a partir de sus apuntes |
| Resumen de un aviso de empleo; requisito inventado «disponibilidad para viajar» | Resumen de un **instructivo interno** (por ejemplo, de rendición de gastos); el asistente agrega un requisito que el documento no trae (por ejemplo, «firma del gerente general») |
| Guarda un aviso de empleo para el proyecto | Guarda una copia, sin datos sensibles, de un documento real de su trabajo |
| Biblioteca v1: «Resumir aviso de empleo», «Adaptar carta a un aviso», «Correo de seguimiento», «Ordenar avisos en tabla» | Biblioteca v1: «Resumir instructivo», «Responder a proveedor», «Correo de seguimiento de pago», «Ordenar facturas en tabla» |
| Correos de postulación y de seguimiento de postulación | Correos a proveedores: consulta por el estado de una factura o de un pedido, y seguimiento de pago |
| Correo de agradecimiento tras una entrevista | Correo de agradecimiento tras una reunión con un proveedor o un cliente |
| Presentación para un proceso de selección | Presentación para su jefatura: cómo organizar el archivo de documentos de la oficina (mismo mensaje clave) |
| Investiga qué piden los avisos de asistente administrativa | Investiga buenas prácticas para registrar y archivar documentos digitales en una oficina |
| Planilla de deudores de su trabajo anterior | Planilla de clientes con deuda de la constructora |
| Su CV sin RUN ni dirección | Una ficha de proveedor o una nómina con RUT: qué quitar antes de usarla |
| Campaña «para la oficina donde le gustaría trabajar» | Campaña interna real de su oficina |
| Cuenta de Gmail de práctica porque no tiene trabajo | Cuenta de práctica para **probar sin exponer datos de la empresa** |
| En una entrevista propone automatizar solo el registro de postulaciones | En una reunión, su jefatura quiere automatizar la revisión de currículums de una vacante de la constructora; ella propone automatizar solo el registro |
| Proyecto con 30 documentos ficticios | Proyecto sobre su registro real de documentos; prueba primero con copias sin datos sensibles. Línea base y metas de M6 iguales (4 min → meta 2 min; resultado 2,5 min; 3 de 30 mal clasificados) |
| Pitch para una entrevista; portafolio para empleadores | Pitch para su jefatura; portafolio para su desarrollo profesional y su evaluación de desempeño |
| Indicador mal elegido: «conseguir trabajo» | Indicador mal elegido: «sentirme más ordenada» (no se puede medir) |

## 3. Casos de empresas reales

- Los 11 casos (M1-C1 … M5-C2) son un **recurso aparte**. Ni el contenido base, ni los quiz, ni las infografías, ni los guiones de
  video, ni el glosario los nombran: ni la empresa, ni el hecho, ni el id. Así, si un caso cambia, solo se corrige el caso.
- Se puede decir en general «en la actividad de análisis de casos vas a ver situaciones reales», sin detalles.
- Se quitan los recuadros `:::ejemplo Caso real: …` del contenido (M1-AE4, M3-AE2, M3-AE4, M4-AE3, M5-AE3) y las fuentes
  `F-M<n>C<n>-nn` que traían. La idea que ilustraban se cuenta con un personaje ficticio.
- En «Conexión con el proyecto» va solo el hito del proyecto, no el caso.
- En los quiz, la «Siguiente parada» y el «Cuándo» apuntan al Rise o al hito siguiente, nunca a un caso.

## 4. Fuentes

- **Máximo 2 fuentes por pantalla** (línea `fuentes:`). Se dejan las más fuertes: organismo público o normativa, y si no,
  documentación oficial del proveedor.
- Si al quitar una fuente una afirmación queda sin respaldo, se reescribe para que la respalde una de las dos que quedan, o se saca.
  No se inventan fuentes, cifras ni funciones.
- La sección «Fuentes» lista solo las que se citan.
- En infografías, cada bloque remite a pantallas (`ver`), no a fuentes. En guiones de video, máximo 2 fuentes por guion.

## 5. Estilo: menos «hecho por IA»

El texto tiene que leerse como lo escribiría una buena profesora: párrafos que fluyen, no una ficha llena de etiquetas.

Por pantalla:
- **Prosa primero:** 2 a 4 párrafos. Las ideas se conectan con frases, no con viñetas.
- **Máximo 1 recuadro** (`:::ejemplo`, `:::error`, `:::clave`, `:::actividad` o `:::comprueba`). Lo demás va dentro del texto.
- **Máximo 1 lista**, solo si es una secuencia de pasos o hay 4 o más elementos que de verdad se enumeran. Sin etiquetas en negrita
  al comienzo de cada viñeta («**Resumir:** …»).
- **Máximo 1 tabla**, solo cuando compara de verdad.
- **Negritas:** solo el término clave cuando se define, 2 como máximo.
- Sin subtítulos dentro de la pantalla, sin rótulos tipo «**Aprendizaje esperado:**», «Al terminar, deberías poder:», «Tip:»,
  «Importante:», y sin instrucciones sueltas de una línea.
- Sin muletillas de IA: «En este tema exploraremos», «es fundamental», «clave» repetido, «¡Vamos!», preguntas retóricas en cadena,
  tríadas de adjetivos.

Por AE:
- Al menos 2 `:::comprueba` y las `:::actividad` que pida la técnica de la planilla (cada una ocupa el recuadro de su pantalla).
- Los errores frecuentes (que alimentan el quiz) pueden ir en el texto: «Un error común es…».
- Se mantienen: número de pantallas, numeración P01…Pnn, títulos de pantalla (se pueden ajustar si cambian por la audiencia),
  `cubre:`, `bloque:`, y las secciones finales (Ideas clave, Glosario, Conexión con el proyecto, Fuentes). `bloque:` debe calzar con
  el texto nuevo (si ya no hay pestañas ni tabla, que no lo sugiera).
- Extensión: 120 a 420 palabras por pantalla, como antes.

### Ejemplo (M1-AE1 P01)

Antes: párrafo + «**Aprendizaje esperado:**» + lista «Al terminar, deberías poder:» + presentación de personajes + recuadro `:::clave`.

Ahora:

> En este tema vas a conocer la herramienta con la que trabajarás todo el curso. Antes de pedirle algo a una inteligencia artificial
> conviene saber qué es, cómo produce sus respuestas, qué tipos existen y dónde se equivoca. Con eso vas a poder decidir cuándo te
> ahorra tiempo en tu trabajo y cuándo no.
>
> El aprendizaje esperado es este: Explicar el funcionamiento general, los tipos y los límites de la IA generativa, ejemplificando sus
> usos en tareas laborales cotidianas. Al final deberías poder explicarlo con tus palabras y dar al menos tres usos y dos límites
> pensando en las tareas de tu propio cargo.
>
> En los ejemplos te van a acompañar dos personas. Camila es asistente administrativa en una constructora: responde correos de
> proveedores, lleva la agenda de su jefatura y registra facturas y contratos. Andrés es encargado de bodega en una distribuidora y
> cada semana entrega un reporte de stock. Son ficticias, pero sus tareas se parecen a las de cualquier oficina. No necesitas saber
> programar ni pagar una licencia: todo lo que veas se puede probar con asistentes gratuitos, también desde el celular.
