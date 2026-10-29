# M5-AE1 · Potencial de automatización

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M5-01, F-M5-05
bloque: Texto

En los módulos anteriores usaste la IA generativa para redactar, investigar y crear piezas. En este módulo das un paso más: hacer que
algunas tareas se hagan solas, con un flujo que las repite cada vez que hace falta. Pero antes de automatizar hay que elegir bien qué
automatizar, y de eso se trata este tema.

El aprendizaje esperado es este: Identificar tareas repetitivas con potencial de automatización, priorizándolas según impacto y riesgo.
Al final deberías poder nombrar al menos tres tareas automatizables de tu cargo, ordenarlas en una matriz de impacto y riesgo y explicar
por qué cada una quedó donde quedó.

Vas a mirar el trabajo como lo miran los estudios de la Organización Internacional del Trabajo (OIT): tarea por tarea, no cargo por
cargo [@F-M5-01]. Y vas a usar una herramienta simple, la **matriz de priorización**, que ayuda a decidir qué conviene probar primero [@F-M5-05]. Automatizar
no es un fin en sí mismo. Lo que buscas es ganar tiempo y calidad en lo que importa sin crear riesgos nuevos, y a veces la mejor
decisión es dejar una tarea como está.

Te acompañan otra vez Camila, asistente administrativa en la oficina de una constructora, que responde correos de proveedores y
registra facturas, órdenes de compra y contratos, y Andrés, encargado de bodega en una distribuidora. Sus tareas te van a servir de
modelo para analizar las tuyas.

## P02 · Un cargo es un conjunto de tareas
cubre: S1, A1
fuentes: F-M5-01, F-M5-02
bloque: Texto + imagen (un cargo dividido en tareas) + ejemplo

Cuando se habla de IA y trabajo, la primera pregunta que aparece es si tu trabajo va a desaparecer. Los estudios serios no parten de
ahí. La OIT mide la exposición a la IA generativa tarea por tarea, porque dentro de un mismo cargo hay tareas muy expuestas y otras que
siguen necesitando a una persona [@F-M5-01].

La **exposición** no es lo mismo que el reemplazo. Que una tarea esté expuesta significa que la IA generativa podría hacer una parte o
ayudar a hacerla. El estudio de la OIT de 2023 concluye que el efecto principal será aumentar el trabajo, es decir, automatizar algunas
tareas y dejar tiempo para otras, más que eliminar ocupaciones completas [@F-M5-01]. La actualización de 2025 confirma que las ocupaciones
administrativas siguen siendo las más expuestas y llega a una conclusión parecida: como la mayoría de las ocupaciones tiene tareas que
requieren intervención humana, lo más probable es que los empleos se transformen [@F-M5-02].

Mirar tu cargo así tiene una ventaja práctica. En vez de una pregunta que angustia, tienes una lista que puedes analizar: qué tareas
haces en una semana, cuáles se repiten igual cada vez y cuáles necesitan tu criterio, tu trato con las personas o tus manos.

:::ejemplo El cargo de Andrés, por partes
Andrés no se pregunta si la IA puede «ser encargado de bodega». Se pregunta si puede ayudarle con tareas concretas: escribir el reporte
semanal de stock, registrar la mercadería que llega, avisar cuando un producto baja del mínimo. Revisar una caja dañada o resolver un
problema con un transportista sigue siendo tarea suya.
:::

## P03 · Qué dicen los estudios sobre la exposición
cubre: S1, S2, A2
fuentes: F-M5-01, F-M5-03
bloque: Texto + recuadro de error

Dos estudios ayudan a entender dónde está el potencial de automatización. Cada uno usa su propio método, así que sus cifras no se
comparan entre sí.

El primero es el de la OIT de 2023. Según ese estudio, el trabajo administrativo es el único grupo de ocupaciones muy expuesto: el 24 %
de sus tareas tiene exposición alta y el 58 %, exposición media [@F-M5-01]. En los demás grupos, las tareas muy expuestas van del 1 % al 4 %. La
exposición es más del doble en las mujeres. El mismo estudio advierte que la calidad del empleo, como la intensidad del trabajo y la
autonomía, puede importar más que las cifras.

El segundo es un documento de la OCDE de 2024. Explica que la IA avanzó sobre todo en tareas cognitivas no rutinarias, como redactar o
resumir, y que por eso los cargos más expuestos son de oficina [@F-M5-03]. Los que dependen de destrezas manuales y de fuerza, como el aseo o
ayudar en una cocina, tienen baja exposición.

Si trabajas en una oficina, estas cifras hablan de ti. Lo que muestran no es que tu cargo vaya a desaparecer, sino que buena parte de
lo que haces con correos, planillas y documentos puede cambiar de forma, y que conviene que participes en decidir cómo.

:::error «Si mi cargo está expuesto, lo voy a perder»
Exposición no es pérdida del empleo. Significa que algunas tareas pueden hacerse con IA. Según la OIT, lo más probable es que el
trabajo cambie: menos tiempo en lo repetitivo y más en lo que necesita a una persona.
:::

## P04 · Anatomía de una tarea automatizable
cubre: S1, C1
fuentes: F-M5-04, F-M5-06
bloque: Proceso (process block) en 5 partes + ejemplo

Desde hace décadas se sabe que los computadores funcionan bien con reglas. Un estudio clásico de Autor, Levy y Murnane mostró que la
tecnología sustituye sobre todo las **tareas rutinarias**, las que se repiten y siguen pasos claros, y que en cambio complementa las
tareas de resolver problemas y tratar con personas [@F-M5-04]. La IA generativa, como viste en el módulo 1, agrega algo a esa historia: también
trabaja con texto, así que puede resumir un correo o clasificar una consulta.

Para saber si una tarea es candidata, conviene descomponerla en cinco partes. Esta lista es del curso y se inspira en lo que la guía de
automatización de la Universidad de Bath pide documentar de cada flujo: su propósito, sus entradas, sus salidas y sus dependencias [@F-M5-06].

1. Qué la inicia: llega un correo, es lunes, alguien completa un formulario.
2. Con qué datos trabaja: un correo, una fila de planilla, una fecha.
3. Qué pasos sigue, y si son siempre los mismos o se pueden escribir como reglas.
4. Qué entrega: un registro, un aviso, un resumen, un evento en el calendario.
5. Cada cuánto se repite: varias veces al día, cada semana, una vez al año.

:::ejemplo Una tarea de Camila, descompuesta
Una de las tareas de Camila es registrar las facturas que llegan a la constructora. Se inicia cuando entra una factura por correo (1);
trabaja con el número, el proveedor, la fecha y el monto (2); los pasos son siempre los mismos (3); entrega una fila en la planilla
(4); y se repite varias veces por semana (5). Es una buena candidata.
:::

## P05 · Señales de una buena candidata
cubre: S1, C1
fuentes: F-M5-01, F-M5-03
bloque: Texto + ordenar o clasificar (sorting activity)

Con la anatomía de la pantalla anterior puedes reconocer señales rápidas. Una buena candidata se hace igual muchas veces, sus pasos se
pueden escribir y trabaja con información, como correos, planillas o fechas. Una mala candidata cambia en cada caso, depende del
criterio del momento, trabaja con objetos o con el cuerpo, o decide algo importante sobre una persona.

Las tareas de manejo de información son justamente las típicas del trabajo administrativo, y por eso ese grupo aparece como el más
expuesto en el estudio de la OIT [@F-M5-01]. En cambio, como explica la OCDE, las tareas que dependen de las manos y de la fuerza tienen baja
exposición [@F-M5-03]. Si tu trabajo combina las dos cosas, como el de Andrés, que pasa parte del día en la planilla y parte entre las cajas, lo
más probable es que tus candidatas estén en la primera mitad.

La última señal merece una pausa. Una tarea puede repetirse y seguir reglas, y aun así ser mala candidata si decide algo sobre alguien,
como a quién se le renueva un contrato o a quién se le asigna un turno. Ahí el problema no es técnico, y lo vas a ver con más detalle
al hablar de riesgo y en el tema 3.

:::actividad ¿Candidata o no?
Arrastra cada tarea a «Buena candidata» o «Mala candidata»:
1. Copiar en una planilla los datos de cada pedido que llega por correo. → Buena candidata
2. Calmar a un cliente molesto en el mesón. → Mala candidata
3. Enviar cada viernes el mismo recordatorio de entrega de reportes. → Buena candidata
4. Revisar si una caja llegó dañada. → Mala candidata
5. Resumir los correos de proveedores del día. → Buena candidata
6. Decidir a qué trabajador se le renueva el contrato. → Mala candidata
:::

## P06 · Mapea las tareas de tu cargo
cubre: H1, A1, C1
fuentes: F-H-14
bloque: Proceso paso a paso + recuadro de error

Ahora vas a hacer tu propio **mapa de tareas**: la lista de lo que haces en tu cargo actual, escrita tarea por tarea. Para armarlo no
necesitas ningún documento de la empresa. Te basta tu descripción de cargo, si la tienes, o tus propias notas de lo que haces en una
semana normal.

Gemini puede acelerar la primera versión. La app es gratuita y funciona en el celular, en Android y en iPhone [@F-H-14]. Estos son los pasos:

1. Escribe en una nota lo que haces en una semana, con tus palabras, sin nombres de clientes ni datos de la empresa.
2. Pega esa nota en Gemini y escribe: «Lista las tareas concretas de esta persona. Escribe cada una con un verbo y un objeto, por ejemplo "registrar facturas". No agregues tareas que mis notas no permitan suponer».
3. Revisa la lista: quita lo que no corresponde y agrega lo que falta, porque conoces tu trabajo mejor que la herramienta.
4. Deja entre 8 y 12 tareas, una por línea.
5. Marca cada una con la anatomía de P04: qué la inicia, qué datos usa, si sigue reglas, qué entrega y cada cuánto se repite.

El mapa es tuyo. Gemini acelera la primera lista, pero quien decide qué tareas existen y cómo se hacen es la persona que hace el
trabajo. Si en tu empresa ya usan otro asistente, puedes hacer lo mismo con él, siempre que respetes lo que diga tu empresa sobre su
uso.

:::error Pegar documentos internos con datos de personas
Para mapear tareas bastan tus propias notas. No pegues planillas con nombres, RUT o teléfonos de clientes, proveedores o compañeros, ni
documentos internos de la empresa. Qué datos no compartir lo viste en el módulo 3.
:::

## P07 · Ejemplo guiado: el mapa de Camila
cubre: H1, C1, A1
fuentes: F-M5-04, F-M5-01
bloque: Tabla + texto + actividad

Camila armó su mapa a partir de sus notas de una semana en la oficina de la constructora. Con ayuda de Gemini y su propia revisión, le
quedó así:

| Tarea | ¿Se repite? | ¿Sigue reglas? | ¿Información o personas? | ¿Candidata? |
|---|---|---|---|---|
| Registrar facturas, órdenes de compra y contratos en la planilla | Sí, varias por semana | Sí | Información | Sí |
| Agendar las reuniones de su jefatura | Sí, a diario | En parte | Información | Sí |
| Responder consultas frecuentes de proveedores por correo | Sí, a diario | En parte | Información y personas | Sí, con revisión |
| Preparar la minuta de cada reunión | Sí, cada semana | En parte | Información | Sí, con revisión |
| Atender a proveedores que llegan a la oficina | Sí | No | Personas | No |
| Ordenar el archivo físico | Sí, cada mes | Sí | Objetos | No |
| Preseleccionar currículums cuando hay una vacante | A veces | No | Decide sobre personas | No |

Camila encontró cuatro tareas candidatas, más que las tres que pide el tema. En su mapa hay dos cosas que vale la pena mirar. La
primera es que «sigue reglas» no siempre es sí o no. Las consultas de proveedores tienen una parte fija, porque las preguntas se
repiten, y otra que exige criterio, porque cada caso es distinto [@F-M5-04]. Esas tareas se pueden automatizar en parte, con revisión.

La segunda es que Camila descartó preseleccionar currículums, aunque se lo piden cada vez que la constructora abre una vacante. Es una
tarea que decide algo importante sobre otras personas, y eso pesa más que la repetición.

:::actividad Revisa tu mapa
Compara tu mapa con el de Camila. ¿Tienes al menos tres tareas candidatas? Si no, busca las que trabajan con correo, planillas o
agenda, que suelen ser las más repetitivas [@F-M5-01].
:::

## P08 · Antes de automatizar: eliminar y simplificar
cubre: S2, A2
fuentes: F-M5-06
bloque: Proceso (process block) en 3 pasos + ejemplo

La guía de automatización de la Universidad de Bath da un consejo que ahorra mucho trabajo: partir de la necesidad y no automatizar algo
solo porque se puede [@F-M5-06]. Para eso propone una secuencia en tres pasos.

1. Eliminar: preguntarse si la tarea es necesaria, porque a veces se hace por costumbre y nadie usa el resultado.
2. Simplificar: ver si se puede hacer con menos pasos; un formulario bien hecho puede ahorrar tres correos de ida y vuelta.
3. Automatizar: solo lo que queda, ya simplificado, pasa a un flujo.

El orden importa. Si automatizas una tarea mal diseñada, obtienes una tarea mal diseñada que se repite sola, más rápido y más veces. Un
error común es pensar que hay que automatizar todo lo que se pueda. Que una tarea se pueda automatizar no significa que convenga:
primero hay que saber si es necesaria y si se puede simplificar, y después decidir con criterios si vale la pena.

:::ejemplo El reporte que nadie leía
Andrés pensaba automatizar el reporte diario de movimientos de bodega. Antes le preguntó a su jefatura qué parte usaba, y la respuesta
fue que solo el resumen del viernes. Eliminó el reporte diario y simplificó el semanal a cinco datos. Recién ahí tuvo sentido pensar en
automatizarlo.
:::

## P09 · Primer criterio: el impacto
cubre: S2, A2
fuentes: F-M5-06
bloque: Texto + lista de verificación (checklist) + ejemplo

Para elegir qué automatizar, la guía de Bath recomienda mirar la frecuencia de la tarea, su complejidad, el ahorro de tiempo y costo, y
el efecto en la experiencia de las personas [@F-M5-06]. En este curso los juntamos en un solo criterio, el **impacto**: cuánto mejora el trabajo
si la tarea se automatiza.

Para estimarlo, responde tres preguntas con sí o no:
- [ ] ¿Se repite seguido, cada día o cada semana?
- [ ] ¿Me quita tiempo que podría usar en algo más valioso?
- [ ] ¿Mejora algo para otras personas, como clientes, proveedores, equipo o jefatura, si se hace más rápido o sin errores?

Si respondes sí a dos o tres, el impacto es alto; si respondes sí a una o a ninguna, es bajo. Esta regla de conteo es una propuesta del
curso para decidir rápido. Lo que importa es que puedas explicar tu respuesta.

La tercera pregunta es la que más se olvida. Una tarea puede ahorrarte poco tiempo a ti y hacer una gran diferencia para otra persona:
un cliente que recibe en el momento la confirmación de su pedido, o un compañero que ya no tiene que esperar tu planilla para avanzar.

:::ejemplo El impacto de una tarea de Andrés
«Avisar a los vendedores cuando un producto baja del mínimo» se repite a diario (sí), le quita tiempo revisando la planilla (sí) y
evita que un vendedor ofrezca algo que no hay (sí). Impacto alto.
:::

## P10 · Segundo criterio: el riesgo
cubre: S2, A2
fuentes: F-M5-06, F-M5-16
bloque: Texto + lista de verificación (checklist) + recuadro de error

El **riesgo** es lo que puede salir mal si la tarea se hace sola. Una tarea automatizada no se cansa, pero tampoco duda: si el flujo
tiene un error, lo repite cada vez. Por eso conviene pensar el riesgo antes de construir nada.

Hay dos factores que lo suben mucho. Uno son los datos personales, cuya protección la guía de Bath pide cuidar en cada flujo [@F-M5-06]; en tu
trabajo eso incluye los datos de clientes, proveedores y compañeros. El otro son las decisiones que afectan a personas. La Ley 21.719,
que según su texto rige en Chile desde el 1 de diciembre de 2026, reconoce el derecho a no ser objeto de decisiones basadas en el
tratamiento automatizado de los datos que afecten significativamente a una persona [@F-M5-16]. Lo vas a ver en el tema 3.

Para estimar el riesgo, responde otras tres preguntas con sí o no:
- [ ] ¿La tarea usa datos personales o información confidencial?
- [ ] Si sale mal, ¿afecta a una persona, a dinero o a un plazo importante?
- [ ] ¿Sería difícil darse cuenta del error a tiempo?

Igual que con el impacto, dos o tres sí indican riesgo alto. La tercera pregunta conecta con lo que viste en el módulo 1: si la
respuesta está mal, quién se da cuenta y cuánto cuesta el error.

:::error «Una tarea pequeña no tiene riesgo»
Mandar un recordatorio parece inofensivo. Pero si el flujo toma la fecha equivocada y lo envía a cuarenta clientes, el error se
multiplica. El riesgo no depende del tamaño de la tarea, sino de lo que pasa si falla.
:::

## P11 · La matriz de priorización
cubre: S3
fuentes: F-M5-05
bloque: Imagen (matriz 2×2) + texto + comprueba

Una **matriz de priorización** es una cuadrícula de 2 × 2 que cruza dos criterios para ver qué conviene hacer primero. En su versión
más conocida, la que usa por ejemplo el equipo de mejora continua del sistema de salud de Lothian, en Escocia, cruza impacto y
esfuerzo, y busca las «victorias rápidas»: mucho impacto con poco esfuerzo [@F-M5-05].

En este curso la adaptamos. Cambiamos el esfuerzo por el riesgo, porque al automatizar lo que más importa es qué pasa si algo falla.
Así queda:

| | Riesgo bajo | Riesgo alto |
|---|---|---|
| Impacto alto | Empieza aquí: automatiza primero. | Con supervisión: automatiza solo una parte y pon un control humano. |
| Impacto bajo | Si sobra tiempo: puede esperar. | No automatices: no vale la pena el riesgo. |

El cuadrante «Con supervisión» no es un no. Es una tarea valiosa que exige cuidado: puedes automatizar la parte de menor riesgo y dejar
la decisión a una persona, y en el tema 3 vas a ver cómo hacerlo. El esfuerzo tampoco desaparece. Si dos tareas quedan en el mismo
cuadrante, elige la que te cueste menos poner en marcha.

:::comprueba
Una tarea tiene impacto alto y riesgo alto. ¿Qué indica la matriz del curso?
- a) Automatizarla completa, porque vale la pena
- **b) Automatizar solo una parte y poner un control humano**
- c) Descartarla siempre
Retroalimentación: Impacto alto con riesgo alto queda en «Con supervisión». Se aprovecha el valor, pero una persona revisa lo
delicado.
:::

## P12 · Ejemplo guiado: Andrés ubica sus tareas
cubre: S3, H1, C2
fuentes: F-M5-05, F-M5-06
bloque: Tabla + escenario + clasificar

Andrés eligió cinco tareas candidatas de su mapa y respondió las preguntas de impacto y riesgo. Así le quedaron:

| Tarea | Impacto | Riesgo | Cuadrante |
|---|---|---|---|
| Registrar en la planilla la mercadería recibida | Alto (3 sí) | Bajo (1 sí: un error descuadra el stock) | Empieza aquí |
| Avisar a vendedores cuando un producto baja del mínimo | Alto (3 sí) | Bajo (0 sí) | Empieza aquí |
| Avisar a clientes cuando un despacho se atrasa | Alto (3 sí) | Alto (2 sí: plazos, error difícil de ver) | Con supervisión |
| Enviar el reporte semanal a la jefatura | Bajo (1 sí) | Bajo (0 sí) | Si sobra tiempo |
| Armar los turnos del equipo | Bajo (1 sí) | Alto (3 sí: datos y efecto en personas) | No automatices |

El reporte semanal quedó con impacto bajo porque, después de simplificarlo (P08), ya le toma poco tiempo [@F-M5-06]. Los turnos quedaron fuera:
tocan la vida de sus compañeros, usan datos personales y un error se nota tarde.

Andrés tiene dos tareas en «Empieza aquí». La guía de Lothian sugiere que, si hay muchas opciones en el cuadrante prioritario, se elija
entre ellas en conjunto, por ejemplo votando [@F-M5-05]. Andrés lo conversó con su jefatura y, para su proyecto, eligió otra: el aviso de atraso a
clientes, que es la parte de su problema, los despachos atrasados, que más reclamos trae. Como quedó en «Con supervisión», le pondrá un
control humano en el tema 3.

:::actividad Clasifica según impacto y riesgo
Ubica cada tarea en un cuadrante:
1. Copiar a la planilla los pedidos que llegan por formulario (diario, sin datos sensibles). → Empieza aquí
2. Enviar cada semana a clientes el cobro de sus facturas vencidas, con montos y datos de contacto. → Con supervisión
3. Cambiar el color de las pestañas de una planilla cada mes. → Si sobra tiempo
4. Decidir solo con un puntaje a quién se le aprueba un anticipo de sueldo. → No automatices
:::

## P13 · Fundamenta tu priorización
cubre: C2, A1
fuentes: F-M5-05, F-M5-06
bloque: Texto + ejemplo de respuesta + comprueba

Ubicar una tarea en la matriz no basta: tienes que poder explicar por qué quedó ahí. Un **fundamento** sirve para que otra persona, como
tu jefatura o tu equipo, entienda tu decisión y la pueda discutir.

Un buen fundamento nombra el cuadrante y da una razón para cada criterio [@F-M5-05; @F-M5-06]. Andrés, por ejemplo, escribió: «Ubico esta tarea en Empieza
aquí porque se repite a diario y evita que los vendedores ofrezcan productos sin stock, y su riesgo es bajo porque no usa datos
personales y, si falla, el error se nota el mismo día». El impacto y el riesgo llevan cada uno su razón. Los fundamentos vagos, como
«porque es importante» o «porque es fácil», no sirven, porque no dicen en qué criterio te basas ni qué dato lo respalda.

Antes de mostrar tu matriz a alguien, puedes ponerla a prueba con Gemini. Pégale la matriz con tus fundamentos y escribe: «Actúa como
una jefatura exigente. Para cada tarea, hazme una pregunta que ponga a prueba si el impacto y el riesgo que asigné son correctos. No
cambies mi clasificación: solo pregunta». Responde las preguntas y ajusta lo que haga falta. La decisión final sigue siendo tuya.

:::comprueba
¿Cuál es el mejor fundamento para ubicar una tarea en «No automatices»?
- a) «Porque es complicada»
- b) «Porque no me gusta hacerla»
- **c) «Porque se hace una vez al mes y, si falla, afecta el sueldo de una persona»**
Retroalimentación: El fundamento nombra los dos criterios con datos: impacto bajo (una vez al mes) y riesgo alto (afecta a una
persona y a dinero).
:::

## P14 · El valor para las personas
cubre: A2, A1
fuentes: F-M5-01, F-M5-03
bloque: Texto + cita destacada + ejemplo

Si la respuesta a para qué automatizar es solo «para hacer más en menos tiempo», falta algo. La OIT advierte que el efecto de la IA
sobre la calidad del trabajo, como la intensidad y la autonomía, puede importar más que las cifras de empleo [@F-M5-01]. Automatizar mal puede
hacer que el trabajo sea más acelerado y no mejor.

Por eso la pregunta de impacto incluye a otras personas. Una buena automatización libera tiempo para lo que necesita a alguien:
atender mejor a un cliente, resolver un problema con un proveedor, enseñarle algo a un compañero. Vale la pena hacerse siempre la misma
pregunta: si esta tarea se automatiza, quién gana y qué hago yo con el tiempo que queda.

Hay otra razón para aprender esto en tu trabajo. Un documento de la OCDE señala que el principal riesgo para las personas sin estudios
superiores, las mujeres y las personas mayores es quedar atrás por tener menos acceso a herramientas de IA que aumentan la
productividad [@F-M5-03]. Saber identificar qué automatizar, y hacerlo con cuidado, es una forma de no quedarse atrás.

:::ejemplo Lo que hace Camila con el tiempo ganado
Camila calcula que, si el registro de facturas se hiciera solo, recuperaría un buen rato cada semana. Lo usaría para responder con
calma a los proveedores que preguntan por el estado de sus pagos, antes de que la consulta se convierta en reclamo. El tiempo ganado se
notaría en el trato con las personas.
:::

## P15 · Cierre: tu matriz de impacto y riesgo
cubre: C1, C2, H1, A1
fuentes: F-M5-05, F-M5-06
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema miraste el trabajo tarea por tarea. Aprendiste a reconocer una tarea automatizable por su anatomía: se repite, sigue
reglas y trabaja con información. Viste que antes de automatizar conviene eliminar y simplificar [@F-M5-06], y que la decisión se toma con dos
criterios, impacto y riesgo, ordenados en una matriz [@F-M5-05].

Ahora te toca armar la tuya con las tareas de tu cargo. Si la tarea que más te interesa quedó en «Con supervisión», no la descartes: en
el tema 3 vas a aprender a ponerle puntos de control humano. Y si ninguna tarea te convence, vuelve a tu mapa y busca las que trabajan
con correo, planillas o agenda.

:::actividad Tu matriz
Usa el mapa de tareas que armaste en P06:
1. Elige al menos tres tareas candidatas, y si puedes, cinco.
2. Para cada una, responde las tres preguntas de impacto (P09) y las tres de riesgo (P10).
3. Ubícalas en la matriz (P11). Puedes dibujarla en una hoja o en una planilla.
4. Escribe un fundamento de una o dos líneas por tarea, como en P13.
5. Marca la tarea que elegirías para automatizar primero y explica por qué.

Guarda tu matriz. En el próximo tema vas a construir un flujo simple para la tarea que marcaste.
:::

## Ideas clave

1. La exposición a la IA generativa se analiza tarea por tarea: dentro de un mismo cargo hay tareas expuestas y otras que siguen
   necesitando a una persona.
2. Exposición no es reemplazo: según la OIT, lo más probable es que los empleos se transformen, y el trabajo administrativo es el más
   expuesto.
3. Una tarea es buena candidata cuando se repite, sigue reglas claras y trabaja con información, como correos, planillas o agenda.
4. Antes de automatizar, elimina lo innecesario y simplifica lo que queda.
5. El impacto mira la frecuencia, el tiempo ganado y la mejora para las personas; el riesgo mira los datos personales, el efecto de un
   error y qué tan fácil es detectarlo.
6. La matriz de impacto y riesgo ordena las tareas en cuatro cuadrantes: empieza aquí, con supervisión, si sobra tiempo y no
   automatices.
7. Una priorización se fundamenta nombrando cada criterio y el dato que lo respalda.

## Referencias bibliográficas

- Autor, D. H., Levy, F. y Murnane, R. J. (2001). *The skill content of recent technological change: An empirical exploration (NBER Working Paper 8337)*. NBER. https://www.nber.org/papers/w8337
- Gmyrek, P., Berg, J. y Bescond, D. (2023). *Generative AI and jobs: A global analysis of potential effects on job quantity and quality (ILO Working Paper 96)*. OIT. https://doi.org/10.54394/FHEM8239
- Google. (s. f.). *Empezar a usar la aplicación móvil Gemini*. https://support.google.com/gemini/answer/14554984?hl=es
- Lane, M. (2024). *Who will be the workers most affected by AI? A closer look at the impact of AI on women, low-skilled workers and other groups (OECD Artificial Intelligence Papers n.º 26)*. OCDE. https://doi.org/10.1787/14dc6f89-en
- Ley 21.719. (2024, 13 de diciembre). *Regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idLey=21719
- NHS Lothian. (s. f.). *Prioritisation matrix*. Lothian Quality. https://qilothian.scot.nhs.uk/pc-resources-prioritisation-matrix
- OIT y NASK. (2025). *Generative AI and jobs: A refined global index of occupational exposure (ILO Working Paper 140)*. https://doi.org/10.54394/HETP0387
- University of Bath. (s. f.). *Automation standards for Microsoft Power Automate*. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
