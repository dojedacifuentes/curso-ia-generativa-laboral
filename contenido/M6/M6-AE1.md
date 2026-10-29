# M6-AE1 · Oportunidad de mejora con IA

## P01 · Qué vas a lograr en este taller
cubre: C1, C2
fuentes: F-M6-04
bloque: Texto + línea de tiempo (los cuatro hitos del módulo)

Este módulo es un taller. No trae temas nuevos que estudiar: aquí juntas lo que construiste desde el módulo 1 y lo conviertes en un
proyecto terminado, medido y presentado, con una tarea de tu trabajo como centro. Por eso las pantallas son pocas. El trabajo lo
haces tú, con tu proyecto al lado.

El aprendizaje esperado de este tema es este:
Diagnosticar una oportunidad de mejora en un contexto laboral real (su cargo actual o uno al que aspira) que pueda abordarse con IA, definiendo situación inicial y metas.
Al terminar vas a tener descrita con datos la situación inicial de una tarea de tu cargo, una meta con indicadores medibles y una
justificación de por qué usar IA en ella es viable.

El taller avanza en cuatro hitos. En este tema entregas el Hito 6a, con el diagnóstico, la meta y el plan de medición. En el segundo
tema implementas y documentas el flujo (Hito 6b), y en el tercero mides los resultados (Hito 6c) y preparas un pitch de tres minutos
y tu portafolio final (Hito 6d). Un método de mejora muy usado se ordena con tres preguntas: qué quieres lograr, cómo sabrás que un
cambio es una mejora y qué cambio vas a probar [@F-M6-04]. Este tema responde las dos primeras, porque sin un punto de partida medido no hay
forma de saber, al final, si tu proyecto funcionó.

:::ejemplo Dos proyectos que se cierran
Camila es asistente administrativa en una constructora y registra facturas, órdenes de compra y contratos en una planilla. Su
proyecto es ese registro: quiere hacerlo más rápido y sin errores de clasificación. Como trabaja con documentos reales, primero
prueba con copias sin datos sensibles. Andrés, encargado de bodega en una distribuidora, sigue con los despachos atrasados: su
jefatura aprobó la reserva de cajas que propuso en el módulo 2, y ahora él trabaja los avisos a los clientes cuando un despacho igual
se atrasa. Los dos te acompañan hasta el pitch final.
:::

## P02 · Reúne lo que ya construiste
cubre: S1, A1
fuentes: F-M6-04
bloque: Texto + tabla + actividad

Tu proyecto no parte de cero. Cada módulo dejó una pieza, y el diagnóstico se apoya en todas ellas.

| Hito | Lo que tienes | Para qué te sirve ahora |
|---|---|---|
| 1 | Desafío laboral real y biblioteca de prompts v1 | Define la tarea que vas a mejorar |
| 2 | Brief y presentación de 6 láminas | Objetivo, audiencia y mensaje ya escritos |
| 3 | Informe breve con fuentes | Datos y contexto sobre el problema |
| 4 | Pieza multimedia con ficha de uso ético | Material para comunicar la solución |
| 5 | Prototipo de un paso automatizado, con supervisión | La base del flujo que implementarás |

Antes de redactar, junta todo en una sola carpeta, en el celular o en el computador, y revisa cada pieza con una pregunta: ¿sigue
apuntando al mismo desafío? Es normal que el problema se haya afinado en el camino. Si cambió, escribe en una línea qué cambió y por
qué. Si un hito quedó incompleto, no lo rehagas entero: anota qué le falta y úsalo igual, porque en este tema importa la situación
inicial y no la perfección de lo anterior.

Tener a la vista lo que ya hiciste es parte de la **orientación a resultados**: mirar el proyecto como un todo que tiene que producir
una mejora en tu trabajo, y no como una lista de tareas sueltas del curso [@F-M6-04].

:::actividad Arma tu carpeta del proyecto
Crea una carpeta llamada «Proyecto IA · [tu nombre]» y guarda en ella una copia de cada hito, del 1 al 5, junto con la
retroalimentación que te dio tu tutor en cada uno. Si alguna pieza tiene datos de tu empresa, guarda solo la versión sin datos
sensibles. Después escribe en un documento nuevo, en dos líneas, tu desafío tal como lo entiendes hoy.
:::

## P03 · Diagnóstico: cómo se hace la tarea hoy
cubre: S1, H1
fuentes: F-M6-01, F-M6-04
bloque: Texto + escenario (el diagnóstico de Andrés)

Un **diagnóstico** describe la situación actual de la tarea que quieres mejorar: cómo se hace, cuánto cuesta en tiempo o en errores
y qué la complica [@F-M6-01]. Es la foto del «antes», y para tomarla conviene responder cinco preguntas en orden:

1. ¿Cuál es la tarea? Una sola, con un verbo: registrar, responder, resumir, avisar.
2. ¿Cómo se hace hoy? Los pasos, en orden, y quién hace cada uno.
3. ¿Cuánto se repite? Veces por día o por semana.
4. ¿Qué sale mal? Demoras, errores, retrabajo, reclamos.
5. ¿Cómo lo sabes? Un registro, una planilla, tu propia medición.

La quinta pregunta es la que más se olvida. Un error común es escribir «me demoro mucho» o «hay muchos errores». ¿Cuánto es mucho?
Sin datos, el diagnóstico es una impresión y al final no podrás demostrar que algo mejoró [@F-M6-04]. Con datos, se convierte en una situación
inicial contra la que vas a comparar después.

Como tu proyecto es sobre una tarea de tu cargo, el diagnóstico lo escribes desde lo que ves cada semana. Si la tarea pasa por varias
personas, describe con detalle la parte que haces tú, que es la que vas a medir, y nombra en una línea lo que hacen las demás.

:::ejemplo El diagnóstico de Andrés
«Cuando un despacho se atrasa, aviso al cliente por correo. Reviso la planilla de despachos, busco el contacto y escribo el aviso
desde cero. Pasa unas siete veces por semana. Muchas veces el aviso sale al día siguiente, y algunos clientes reclaman porque nadie
les avisó. Lo sé por mi bandeja de enviados y por los reclamos que anota ventas.»
:::

## P04 · La línea base: tu punto de partida
cubre: S1, C1
fuentes: F-M6-01, F-M6-02
bloque: Texto + tabla de registro descargable + pregunta de verificación

La **línea base** es el valor de un indicador en el punto de partida [@F-M6-02]. Informa la situación inicial y es la referencia para saber, más
adelante, si tus esfuerzos dieron resultado. Sin línea base no se puede fijar una meta con sentido [@F-M6-01].

Si no tienes datos, lo recomendable es levantarlos en un primer periodo, antes de cambiar nada [@F-M6-01]. Para tu proyecto basta con registrar
la tarea durante una o dos semanas, tal como la haces hoy. Una tabla simple funciona bien:

| Fecha | Caso | Minutos | Errores | Observación |
|---|---|---|---|---|
| 03-11 | Aviso pedido 412 | 14 | 0 | Busqué el contacto en dos lugares |
| 04-11 | Aviso pedido 415 | 11 | 1 | Fecha de llegada equivocada |

Camila hizo lo mismo con su registro de documentos. Tomó 30 documentos de la oficina, entre facturas, órdenes de compra y contratos,
hizo copias sin datos sensibles y los registró a mano en una planilla de prueba, cronometrando cada uno. En promedio le tomó 4 minutos
por documento, y 3 de los 30 quedaron mal clasificados. Además, encontrar un documento pedido le tomó 2 minutos en promedio. Esa es su
línea base, y es la que va a usar hasta el final del proyecto.

:::comprueba
Andrés quiere medir si su proyecto mejora los avisos. ¿Qué debe hacer primero?
- a) Activar el flujo con IA y medir cómo funciona
- **b) Registrar cómo hace los avisos hoy, durante un periodo, sin cambiar nada**
- c) Preguntarle al asistente cuánto se demora una persona promedio
Retroalimentación: La línea base se toma antes del cambio. Si mides solo después, no tienes contra qué comparar. Y un promedio
inventado por un asistente no describe tu situación.
:::

## P05 · Indicadores: qué vas a medir
cubre: S2, C1
fuentes: F-M6-02, F-M6-05
bloque: Texto + tabla (las cuatro partes de un indicador) + actividad

Un **indicador** es la medida que te dice si avanzas. No basta con nombrarlo: se define con cuatro partes, que en el caso de Andrés
quedan así [@F-M6-02].

| Parte | Pregunta | Ejemplo de Andrés |
|---|---|---|
| Fórmula | ¿Cómo se calcula? | Avisos enviados el mismo día ÷ avisos totales × 100 |
| Fuente | ¿De dónde sale el dato? | Bandeja de enviados y planilla de despachos |
| Frecuencia | ¿Cada cuánto se mide? | Cada viernes |
| Línea base | ¿Cuánto vale hoy? | 45 % (9 de 20 en tres semanas) |

Los indicadores pueden mirar cosas distintas. Algunos miden el proceso, como cuánto tiempo toma la tarea; otros, el producto, como
cuántos avisos salen bien hechos; y otros, el resultado, como si bajan los reclamos. También se distinguen por lo que cuidan: la
eficiencia, que es tiempo y recursos, o la calidad, que es errores y claridad. En un flujo con IA puedes combinar medidas numéricas,
como el tiempo o la cantidad de tareas completadas, con escalas de calidad, como una rúbrica simple de 1 a 4 para la claridad de un
texto [@F-M6-05]. En la mayoría de los casos conviene usar varios indicadores a la vez.

Un error común es elegir algo que no se puede medir. Camila pensó primero en «sentirme más ordenada». Es una buena aspiración, pero
no tiene fórmula ni fuente: nadie podría decir cuánto vale hoy ni cuánto al final. Le sirve mucho más medir lo que su flujo cambia,
que son los minutos por documento y los errores de clasificación. Algo parecido pasa con lo que depende de muchos factores fuera de
tu proyecto, como las ventas del mes: puede ir como contexto, pero no como meta.

:::actividad Elige tus indicadores
Escoge dos o tres indicadores para tu desafío, al menos uno de tiempo y uno de calidad. Para cada uno, escribe la fórmula, la fuente,
la frecuencia y la línea base.
:::

## P06 · La meta: qué cambio esperas y cuándo
cubre: S2, A2, C1
fuentes: F-M6-03, F-M6-05
bloque: Texto + comparación antes y después + pregunta de verificación

La **meta** dice cuánto esperas que cambie un indicador y en qué plazo. Una forma clásica de revisarla es el criterio **SMART**, por
sus iniciales en inglés. Una meta SMART es específica, porque dice quién hace qué con un solo verbo de acción y evita verbos vagos
como «mejorar» o «entender». Es medible, porque dice cuánto cambio esperas desde un punto de referencia, que es tu línea base. Es
alcanzable con el tiempo y los recursos que tienes, realista para el tamaño del problema y tiene un plazo, que es cuándo vas a medir [@F-M6-03].
Algunas guías leen la R como «relevante» [@F-M6-05]; en este curso usamos «realista», porque pide lo mismo que el realismo al fijar metas.

Mira cómo cambian dos metas cuando pasan por ese filtro:

| Antes | Después |
|---|---|
| «Quiero ser más rápida con los documentos usando IA.» | «En tres semanas, bajaré el tiempo de registro de 4 a 2 minutos por documento, sin errores de clasificación en el registro final.» |
| «Mejorar los avisos de atraso.» | «En cuatro semanas, enviaré el mismo día el 90 % de los avisos de atraso (hoy, 45 %).» |

La versión de la derecha tiene número, unidad, línea base y plazo. Eso permite saber, sin discusión, si se cumplió. La de la
izquierda puede darse por cumplida o por fallida según el ánimo de quien la lea.

:::comprueba
¿Cuál de estas metas es medible?
- a) Usar la IA para trabajar mejor en la bodega
- **b) En cuatro semanas, bajar de 12 a 5 minutos el tiempo promedio por aviso de atraso**
- c) Lograr que los clientes queden más contentos
Retroalimentación: Solo la b dice cuánto cambia, desde dónde y en qué plazo. La a y la c no tienen número ni forma de medirse.
:::

## P07 · Realismo: metas posibles, pero no fáciles
cubre: A2, S3, C1
fuentes: F-M6-01, F-M6-03
bloque: Texto + escenario (Andrés ajusta su meta) + actividad

Una meta tiene que ser **realista y retadora** a la vez [@F-M6-01]. Realista, porque se puede cumplir con las personas, el tiempo y las
herramientas que tienes [@F-M6-03]. Retadora, porque no se cumple sola, sin hacer nada distinto. Una meta demasiado fácil no demuestra nada, y
una imposible desanima y empuja a maquillar los resultados al final.

Para calibrarla, mira tres cosas. La primera es tu línea base: si hoy haces 45 %, saltar a 100 % en dos semanas es poco probable. La
segunda son tus pruebas: en el módulo 5 probaste un paso automatizado, y lo que pasó ahí es tu mejor referencia. La tercera es el
tiempo que de verdad tienes, con las semanas del módulo, el resto de las tareas de tu cargo y los límites del plan gratuito de tu
herramienta.

Andrés escribió primero «100 % de avisos el mismo día en dos semanas». Al revisar su prototipo del módulo 5 vio que el borrador salía
bien, pero que él no siempre alcanzaba a revisarlo antes de las cinco de la tarde. Cambió la meta a 90 % en cuatro semanas: sigue
siendo exigente, pero puede cumplirla.

El error contrario también ocurre. Fijar una meta que ya cumples, o casi, hace que el proyecto parezca exitoso sin haber mejorado
nada, y quien evalúa lo nota apenas compara la meta con tu línea base.

:::actividad Calibra tu meta
Escribe tu meta en formato SMART. Después revísala contra tu línea base, tus pruebas del módulo 5 y el tiempo que de verdad tienes, y
ajústala si alguna de las tres te hace dudar.
:::

## P08 · ¿Es viable usar IA en este desafío?
cubre: S3, C2
fuentes: F-M6-06, F-M6-07
bloque: Texto + lista de verificación (checklist)

Antes de implementar conviene tomar una decisión explícita: seguir o no seguir con la IA en este desafío. Esa decisión se apoya en lo
que sabes del contexto, de los beneficios que esperas y de los daños posibles [@F-M6-06]. Que la herramienta pueda hacer la tarea no basta: sin
datos para medir, sin permiso o con datos personales expuestos, el proyecto no pasa la prueba aunque la IA funcione [@F-M6-07].

Revisa tu desafío con estos criterios de **viabilidad**:

- [ ] Hay datos para medir: tus indicadores salen de una fuente que existe y que puedes revisar.
- [ ] La meta es alcanzable con tu herramienta, tu tiempo y tus recursos, según tus pruebas y no según expectativas.
- [ ] La herramienta es accesible: gratuita o disponible en tu trabajo, en el computador o en el celular.
- [ ] El riesgo está controlado: no ingresas datos personales ni información confidencial, y respetas lo que permite tu empresa.
- [ ] Tu jefatura está de acuerdo, porque el flujo toca un proceso de tu trabajo.
- [ ] La necesidad es real: usas IA porque la tarea lo pide, no solo porque se puede.

Si un criterio falla, no siempre hay que abandonar. A veces basta con cambiar el alcance: probar con copias sin datos sensibles, usar
códigos en vez de nombres o dejar fuera un paso riesgoso.

:::ejemplo La justificación de Camila
«Es viable: registrar documentos se repite mucho y sigue reglas claras. Pruebo con copias sin datos sensibles, y mi jefatura está de
acuerdo con que lo pruebe así. En el módulo 5 el asistente propuso bien el tipo y la fecha en casi todos los casos, y yo reviso cada
registro antes de guardarlo.»
:::

## P09 · El plan de medición
cubre: H1, C1, A1
fuentes: F-M6-02, F-M6-04
bloque: Texto + tabla descargable (plantilla del plan) + pregunta de verificación

El **plan de medición** reúne en una tabla lo que decidiste: qué indicador, cómo se calcula, de dónde sale el dato, cada cuánto se
mide, cuánto vale hoy y cuánto debería valer al final [@F-M6-02]. Es tu respuesta a la pregunta «¿cómo sabré que el cambio es una mejora?» [@F-M6-04]. Este
es el de Andrés:

| Indicador | Fórmula | Fuente | Frecuencia | Línea base | Meta (4 semanas) |
|---|---|---|---|---|---|
| Avisos el mismo día | Avisos del día ÷ atrasos del día × 100 | Enviados y planilla de despachos | Cada viernes | 45 % | 90 % |
| Tiempo por aviso | Minutos totales ÷ avisos | Registro propio | Cada aviso | 12 min | 5 min |
| Avisos con error | Avisos con dato equivocado ÷ avisos × 100 | Revisión propia y reclamos | Cada viernes | 10 % | 0 % |
| Claridad | Rúbrica de 1 a 4 aplicada por ventas | Rúbrica | Quincenal | 2,5 | 3,5 |

Fíjate en tres detalles. Cada indicador tiene una sola fuente que se puede revisar. La frecuencia es posible de cumplir: no es diaria
si no hay tiempo para eso. Y junto al tiempo hay medidas de calidad, para no ganar velocidad a costa de errores. Copia la tabla y
complétala con tus indicadores; si alguien de tu equipo te va a ayudar con los datos, agrega una columna «Quién mide».

Decide cómo vas a medir antes de implementar. Si cambias la fórmula a mitad de camino, la comparación con la línea base deja de
valer. Eso es la orientación a resultados llevada a la práctica: saber desde el principio cómo vas a reconocer una mejora.

:::comprueba
Camila anota en su plan: «Indicador: errores de clasificación. Meta: 0». ¿Qué le falta para que sea medible?
- a) Nada, ya tiene una meta
- **b) La fórmula, la fuente, la frecuencia y la línea base**
- c) El nombre de la herramienta de IA que usará
Retroalimentación: Sin fórmula ni fuente no se sabe cómo se calcula ni de dónde sale el dato, y sin línea base no hay contra qué
comparar. La herramienta va en el flujo, no en el indicador.
:::

## P10 · Tu Hito 6a y cómo se evalúa
cubre: H1, C1, C2, A1
fuentes: F-M6-01, F-M6-03
bloque: Texto + tabla de la rúbrica + lista de verificación

Ya tienes todas las piezas. El Hito 6a, diagnóstico, meta y plan de medición, es un documento breve, de una o dos páginas. Parte con
el diagnóstico de la tarea (P03) y la línea base, explicando cómo obtuviste los datos (P04) [@F-M6-01]. Sigue con la meta SMART [@F-M6-03] y sus
indicadores (P05 a P07), la justificación de viabilidad con los criterios de P08 y, al final, la tabla del plan de medición (P09).

Tu tutor lo revisa con la rúbrica general de hitos del curso y te responde en un plazo de 72 horas como máximo. Cada criterio se
califica como logrado, parcial o no logrado:

| Criterio | Peso | Qué mira en el Hito 6a |
|---|---|---|
| Pertinencia al problema real | 25 % | El diagnóstico describe una tarea real de tu cargo |
| Uso verificado de IA | 25 % | La viabilidad se apoya en pruebas que hiciste y documentaste |
| Calidad del entregable | 20 % | Las cinco partes están completas y los números cuadran |
| Ética, privacidad y licencias | 15 % | No expones datos personales ni información confidencial de tu empresa |
| Comunicación | 15 % | Se entiende sin explicaciones adicionales |

Los hitos 6a, 6b y 6c no ponderan en la nota: sirven para recibir retroalimentación y alimentan el pitch y el portafolio final del
Hito 6d. Aprovéchalos para corregir ahora lo que después costaría más.

:::actividad Revisa antes de entregar
- [ ] Mi meta tiene número, unidad, línea base y plazo.
- [ ] Cada indicador tiene fórmula, fuente y frecuencia.
- [ ] Expliqué cómo obtuve la línea base.
- [ ] Justifiqué la viabilidad con al menos tres criterios.
- [ ] El documento no trae datos personales ni información confidencial de mi empresa.
:::

## Ideas clave

1. El módulo 6 es un taller: integra los hitos 1 a 5 en un proyecto sobre una tarea de tu cargo, que se diagnostica, se implementa,
   se mide y se presenta.
2. Un diagnóstico describe cómo se hace la tarea hoy y se apoya en datos, no en impresiones.
3. La línea base es el valor de partida de un indicador; si no hay datos, se levantan en un primer periodo, antes de cambiar nada.
4. Un indicador se define con fórmula, fuente, frecuencia y línea base; conviene combinar uno de tiempo con uno de calidad.
5. Una meta SMART dice cuánto cambia un indicador y en qué plazo, y debe ser realista y retadora a la vez.
6. Usar IA es viable cuando hay datos para medir, la meta es alcanzable, la herramienta es accesible, el riesgo está controlado y tu
   jefatura está de acuerdo; si falla un criterio, a veces basta con cambiar el alcance.
7. El plan de medición se decide antes de implementar, para que la comparación final sea válida.

## Referencias bibliográficas

- Anthropic. (s. f.). *Define success criteria and build evaluations*. Claude Docs. https://platform.claude.com/docs/en/test-and-evaluate/develop-tests
- CDC. (2018). *Writing SMART objectives (Evaluation Brief n.º 3b)*. https://spice.unc.edu/wp-content/uploads/2023/11/CDC-SMART.pdf
- CIPPEC. (2019). *Guía n.º 5: cómo construir indicadores*. https://www.cippec.org/wp-content/uploads/2019/06/PP-ME-Guia-5.pdf
- CONEVAL. (2019). *Guía para el establecimiento y cálculo de líneas base y metas*. https://www.coneval.org.mx/InformesPublicaciones/Documents/Guia_lineas_base_metas.pdf
- Institute for Healthcare Improvement. (s. f.). *Model for improvement*. https://www.ihi.org/library/model-for-improvement
- National Institute of Standards and Technology. (2023). *Artificial intelligence risk management framework (AI RMF 1.0) (NIST AI 100-1)*. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- University of Bath. (s. f.). *Automation standards for Microsoft Power Automate*. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
