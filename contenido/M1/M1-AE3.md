# M1-AE3 · Parámetros de generación

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M1-03, F-M1-13
bloque: Texto + lista con viñetas

En el primer tema viste que el modelo genera su respuesta fragmento a fragmento y que esa elección tiene algo de azar. En el segundo
aprendiste a escribir prompts con rol, contexto, tarea y formato. Ahora vas a ver qué más influye en la respuesta, además de tus
palabras, y cómo manejarlo según lo que necesitas.

**Aprendizaje esperado:** Ajustar parámetros de generación (temperatura, longitud, iteración) para adecuar las respuestas a distintos
objetivos de una tarea.

Al terminar, deberías poder:
- elegir un ajuste adecuado al objetivo de una tarea y explicar por qué;
- comparar varias respuestas a una misma consigna y elegir la mejor con fundamento.

Trabajarás tres ideas:
- **Temperatura:** cuánta variación hay en la forma de responder.
- **Longitud:** cuánto escribe el modelo.
- **Iteración:** pedir otra respuesta y compararla.

:::ejemplo El mismo pedido, dos respuestas
Camila pide dos veces a Gemini «tres frases para abrir mi carta de presentación». Las dos listas son distintas. No es un error: es
parte de cómo funcionan estos modelos, y en este tema aprenderás a aprovecharlo.
:::

:::clave
Aquí vas a experimentar. Lo importante no es memorizar números, sino comparar con método: cambiar una cosa, mirar qué pasa y anotarlo.
:::

## P02 · Qué es un parámetro de generación
cubre: S1
fuentes: F-M1-15, F-M1-16, F-H-38
bloque: Texto + tabla

Un **parámetro de generación** es un ajuste que cambia cómo el modelo produce la respuesta, sin cambiar tu prompt. Es parecido a los
controles de una cámara: la escena es la misma, pero el resultado cambia según cómo la configures.

Las documentaciones de Google y OpenAI describen varios parámetros. Los más comunes son estos:

| Parámetro | Qué controla | Efecto |
|---|---|---|
| **Temperatura** | Cuánto azar hay al elegir cada fragmento | Baja: respuestas más predecibles. Alta: más variadas |
| **Top-p** | Entre cuántas opciones probables elige | Valores bajos limitan la elección a las opciones más probables |
| **Máximo de tokens de salida** | Hasta cuánto puede escribir | Pone un tope al largo de la respuesta |

En este tema trabajarás sobre todo con la **temperatura** y la **longitud**, y con un tercer recurso que siempre tienes a mano: la
**iteración**, es decir, pedir otra respuesta o ajustar el pedido.

:::error «El parámetro más importante es el prompt»
El prompt es lo principal y lo que más controlas. Pero no es lo único: con el mismo prompt, la configuración del modelo y el azar
también cambian el resultado. Por eso dos personas con el mismo pedido pueden obtener respuestas distintas.
:::

## P03 · Temperatura: por qué varían las respuestas
cubre: S1, S2
fuentes: F-M1-03, F-M1-15, F-M1-16, F-H-08
bloque: Texto + imagen (dial o termómetro de baja a alta)

Recuerda cómo genera texto el modelo: en cada paso estima qué continuaciones son probables y **elige una**. Esa elección no siempre
recae en la opción más probable: tiene algo de azar. La **temperatura** regula cuánto azar hay.

- **Temperatura baja:** el modelo se inclina por las opciones más probables. Las respuestas son más enfocadas y parecidas entre sí.
  Según la documentación de Google y OpenAI, con temperatura 0 la respuesta es la más consistente y repetible.
- **Temperatura alta:** el modelo da más espacio a opciones menos probables. Las respuestas son más diversas y, a veces, más
  originales. OpenAI indica, por ejemplo, que 0,8 da salidas más aleatorias y 0,2 más enfocadas.

En la API de OpenAI la temperatura va de 0 a 2. Más alto no es «mejor»: más azar también trae más opciones que no te sirven, y te
toca elegir.

:::ejemplo Andrés y el nombre de la campaña
Andrés necesita un nombre para la campaña de orden en la bodega. Con temperatura baja, el modelo propone nombres seguros y parecidos:
«Bodega ordenada», «Orden en bodega». Con temperatura alta aparecen ideas más variadas, algunas buenas y otras que no calzan con la campaña.
Para una lluvia de ideas, esa variedad le sirve. Para el informe de stock, no.
:::

:::clave
La temperatura no cambia lo que el modelo «sabe». Cambia cuánto se arriesga al elegir las palabras.
:::

## P04 · Top-p y dónde están estos controles
cubre: S1
fuentes: F-M1-15, F-M1-16, F-H-08, F-H-37
bloque: Texto + acordeón

**Top-p** es otro parámetro relacionado con el azar. En vez de regular cuánto se arriesga el modelo, limita **entre qué opciones
elige**: solo considera las más probables hasta sumar cierta probabilidad. Con un top-p bajo, la elección se reduce a pocas opciones.
La guía de Google indica que su valor predeterminado es 0,95.

OpenAI recomienda ajustar la temperatura **o** el top-p, pero no los dos a la vez: ambos influyen en la variación y es difícil saber
cuál causó el cambio.

**¿Dónde se ajustan?** Estos parámetros aparecen en entornos para desarrolladores: la API, el Playground de OpenAI o **Google AI
Studio**, que tiene un panel llamado «Configuración de ejecución» para cambiar los parámetros del modelo. En las aplicaciones de chat
gratuitas, como Gemini o ChatGPT en el celular, no encontrarás un control de temperatura ni de top-p.

:::comprueba
Quieres que el modelo varíe menos sus respuestas. Según OpenAI, ¿qué conviene?
- a) Subir la temperatura y bajar el top-p al mismo tiempo
- **b) Ajustar uno de los dos, por ejemplo bajar la temperatura**
- c) Subir el top-p a su máximo
Retroalimentación: Los dos parámetros afectan la variación. Se recomienda mover solo uno para saber qué produjo el cambio.
:::

## P05 · En los modelos más nuevos, la temperatura la fija el proveedor
cubre: S1, S3
fuentes: F-M1-15, F-M1-17, F-M1-18, F-H-38
bloque: Texto + recuadro destacado

Hay algo importante que saber en 2026: los proveedores están **dejando de permitir que cambies la temperatura y el top-p** en sus
modelos más recientes.

- **Google:** los modelos Gemini 4 y Gemini 3.6 en adelante ignoran los valores de temperatura y top-p que les envíes.
- **Anthropic:** los modelos Claude desde la versión 4.7 solo aceptan los valores predeterminados, y desde la versión de la API del
  21 de octubre de 2026 una solicitud con temperatura o top-p da error.
- **OpenAI:** en los modelos GPT-6, cuando usan razonamiento, la temperatura y el top-p no se admiten.

¿Qué significa para ti? Que en los modelos nuevos la temperatura **sigue existiendo**, pero la fija el proveedor. El concepto te sirve
igual: explica por qué el mismo pedido da respuestas distintas y por qué a veces conviene pedir otra versión. Lo que sí controlas
siempre es tu prompt, la longitud que pides y cuántas veces iteras.

:::error «Subiendo la temperatura en cualquier herramienta cambia la respuesta»
En muchos modelos recientes el valor que pongas se ignora o da error. Antes de comparar, revisa si el modelo que usas respeta ese
ajuste.
:::

:::clave
Que un control desaparezca no hace inútil el concepto. Saber que hay azar en la generación te ayuda a no confiar en una sola respuesta
y a comparar antes de elegir.
:::

## P06 · Longitud: cuánto escribe el modelo
cubre: S1, S3
fuentes: F-M1-15, F-M1-16, F-M1-18, F-M1-13
bloque: Texto + comparación de dos respuestas

La **longitud** se puede manejar de dos maneras.

**1. Con el parámetro de tokens máximos de salida.** En la API y en AI Studio puedes fijar cuántos tokens puede escribir el modelo
como máximo. Es un tope: el modelo no escribe más allá de ese número y puede terminar antes. Si el tope es muy bajo, la respuesta
puede quedar incompleta.

**2. Pidiéndola en el prompt.** En cualquier app de chat puedes indicar la extensión: «en 50 palabras», «en tres viñetas», «en un
párrafo». Microsoft recomienda justamente dar expectativas de extensión y restricciones concretas, como un límite de palabras.

Las dos formas son distintas. El tope corta; la instrucción orienta. Cuando pides «en 50 palabras», el asistente intenta ajustarse,
pero puede pasarse o quedarse corto, así que conviene revisar.

| Objetivo | Longitud que conviene |
|---|---|
| Aviso para un grupo de WhatsApp | Muy breve: 2 o 3 líneas |
| Resumen de un reglamento para el equipo | Media: 5 a 8 viñetas |
| Borrador de un procedimiento | Más larga, por secciones |

:::ejemplo Camila ajusta el largo
Camila pide un resumen de su experiencia para el portal de empleo, que admite 300 caracteres. Primero pide «un resumen» y recibe tres
párrafos. Luego pide «un resumen de máximo 45 palabras, en una sola frase». Cuenta, ajusta una palabra y lo pega.
:::

## P07 · Iteración: pedir otra versión
cubre: S1, S3, H1
fuentes: F-M1-13, F-M1-12, F-M1-15
bloque: Texto + proceso en 2 caminos

La **iteración** es el tercer recurso del tema. Ya la usaste en el tema anterior para mejorar un prompt. Aquí la miras como una forma de
**obtener varias salidas y compararlas**. Hay dos maneras de iterar:

**Regenerar con el mismo prompt.** Como la generación tiene azar, el mismo pedido puede dar una respuesta distinta en cada intento,
como advierte Microsoft. Si tu app tiene una opción para volver a generar la respuesta, úsala. Si no, pega el mismo prompt en una
conversación nueva. Así obtienes varias versiones sin cambiar nada y puedes elegir la mejor.

**Iterar con un ajuste.** Cambias una parte del prompt (el largo, el tono, una restricción) y vuelves a pedir. Es la iteración que
practicaste con los ejemplos antes y después.

| | Qué cambias | Para qué sirve |
|---|---|---|
| Regenerar | Nada | Ver la variación natural y elegir entre opciones |
| Iterar con ajuste | Una parte del prompt | Corregir algo que no te sirvió |

:::ejemplo Andrés regenera
Andrés tiene un buen prompt para el aviso de inventario. Regenera dos veces y obtiene tres versiones parecidas, con distinto orden. Se
queda con la que pone la hora en la primera línea, porque su equipo lee el grupo en el celular.
:::

:::comprueba
¿Qué diferencia hay entre regenerar e iterar con un ajuste?
- a) No hay diferencia: las dos cambian el prompt
- **b) Regenerar repite el mismo prompt; iterar con ajuste cambia una parte del prompt**
- c) Regenerar siempre da la misma respuesta
Retroalimentación: Al regenerar no cambias nada y aprovechas la variación del modelo. Al iterar con ajuste corriges el pedido.
:::

## P08 · Creatividad y precisión
cubre: S2
fuentes: F-M1-15, F-M1-16
bloque: Texto + tabla o escala de dos extremos

Hay una relación entre **creatividad** y **precisión**. Mientras más variación permites, más ideas distintas aparecen, pero también
más riesgo de que algo se salga del pedido. Mientras menos variación, más consistentes son las respuestas, pero también más parecidas
entre sí.

Las guías de Google y OpenAI lo resumen así: valores bajos de temperatura para tareas con una respuesta acotada, y valores altos para
resultados diversos o creativos.

| Tarea | Qué necesitas | Hacia dónde ajustar |
|---|---|---|
| Extraer las fechas de una minuta | Precisión | Baja variación |
| Clasificar solicitudes en categorías fijas | Precisión | Baja variación |
| Resumir un reglamento que pegaste | Precisión | Baja variación |
| Ideas para el nombre de una campaña | Creatividad | Más variación |
| Frases distintas para abrir una carta | Creatividad | Más variación |
| Preguntas posibles para una entrevista | Variedad | Más variación, y luego eliges |

:::error «Para que sea creativo, basta con subir la temperatura»
Más variación no garantiza buenas ideas: también trae opciones que no sirven. La creatividad útil sale de un buen prompt,
varias salidas y tu criterio para elegir.
:::

:::clave
Ninguna tarea laboral necesita «máxima creatividad» en los datos. Si la respuesta incluye cifras, fechas o nombres, el objetivo es la
precisión, aunque el resto del texto sea creativo.
:::

## P09 · En el celular: instrucciones contrastadas
cubre: S2, S3
fuentes: F-M1-13, F-M1-12, F-M1-15
bloque: Comparación en dos columnas

Si tu app no tiene control de temperatura, puedes orientar la respuesta hacia la precisión o la creatividad **con la instrucción**. A
esto le llamamos **instrucciones contrastadas**: la misma consigna, con dos indicaciones opuestas.

**Hacia la precisión:**
«Responde solo con la información del texto que te pego. Si algo no aparece, escribe "no indica". Usa frases cortas y no agregues
ejemplos.»

**Hacia la creatividad:**
«Propón cinco opciones muy distintas entre sí. Usa enfoques diferentes: una formal, una cercana, una con humor, una muy breve y una
sorprendente.»

La guía de Google sugiere limitar al modelo al contexto que le entregas para que no agregue información de otra parte. Eso es lo que
hace la instrucción de precisión.

Ojo con la diferencia: la instrucción **no cambia la temperatura**. Cambia lo que le pides. El efecto se parece, y por eso te sirve en
el celular, pero no es el mismo ajuste.

:::comprueba
Rosa, la recepcionista del centro médico, necesita clasificar mensajes en cuatro categorías fijas. ¿Qué instrucción conviene?
- a) «Sé creativa e inventa las categorías que te parezcan»
- **b) «Usa solo estas cuatro categorías; si un mensaje no calza, ponlo en Otro»**
- c) «Propón cinco formas distintas de clasificar»
Retroalimentación: Clasificar en categorías fijas es una tarea de precisión. La instrucción b limita las opciones y hace la
clasificación consistente.
:::

## P10 · Configuración según la tarea
cubre: S3, C1
fuentes: F-M1-15, F-M1-16
bloque: Escenario con decisiones (scenario block)

Configurar según la tarea es decidir, antes de pedir, **qué necesita tu objetivo**: precisión o variedad, un texto corto o largo, una
respuesta o varias para elegir. Google recomienda experimentar con los valores hasta encontrar los adecuados para cada tarea.

Hazte tres preguntas:
1. **¿Hay una respuesta correcta?** Si la hay (datos, categorías, fechas), busca precisión: baja variación e instrucción de usar solo
   el texto entregado.
2. **¿Cuánto espacio tengo?** Define la longitud según dónde se usará: un mensaje, un correo, un documento.
3. **¿Me sirve elegir entre opciones?** Si sí, regenera o pide varias versiones.

Y **justifica** tu elección en una frase: qué ajuste elegiste y por qué calza con el objetivo.

:::ejemplo La justificación de Andrés
«Para resumir el reporte de stock usé una instrucción de precisión ("solo con los datos de la planilla") y un máximo de seis viñetas,
porque las cifras tienen que ser exactas y mi jefatura lo lee en el celular. No regeneré: necesito una sola versión correcta.»
:::

:::actividad Elige y justifica
Para cada tarea, indica si buscas precisión o creatividad, qué longitud pedirías y si regenerarías. Justifica en una frase.
1. Redactar la respuesta a un reclamo de un cliente.
2. Proponer ideas para una publicación de la tienda en redes sociales.
3. Pasar a una tabla los datos de cinco guías de despacho.
:::

## P11 · Comparar salidas con rigor
cubre: H1, A1, C2
fuentes: F-M1-15, F-M1-13
bloque: Texto + lista de verificación (checklist)

Comparar salidas no es elegir la que «suena mejor» a primera vista. El **rigor** está en comparar con método, para que tu elección se
pueda explicar.

Reglas para una buena comparación:
- **La misma consigna.** Usa exactamente el mismo prompt en todas las versiones, salvo lo que quieres probar.
- **Un cambio a la vez.** Si cambias el largo y el tono juntos, no sabrás qué produjo la diferencia.
- **Al menos tres salidas.** Con dos es difícil ver qué varía y qué se mantiene.
- **Criterios definidos antes de leer.** Decide qué hace buena a la respuesta para tu objetivo.

Criterios útiles para tareas de oficina:
- [ ] **Exactitud:** ¿los datos coinciden con el texto o la planilla de origen?
- [ ] **Cumple la tarea:** ¿hace lo que se pidió, sin agregar cosas?
- [ ] **Formato y longitud:** ¿respeta el largo y la forma pedidos?
- [ ] **Tono:** ¿es adecuado para quien lo va a leer?
- [ ] **Utilidad:** ¿lo podrías usar con pocos cambios?

:::error Comparar sin anotar
Si no registras qué prompt y qué ajuste usaste, después no podrás repetir el resultado que te gustó ni explicar por qué lo elegiste.
:::

:::clave
Una comparación rigurosa se puede repetir: otra persona, con tu registro, debería poder llegar a algo parecido.
:::

## P12 · Práctica A (opcional): temperatura en Google AI Studio
cubre: H1, S1, C1
fuentes: F-H-37, F-H-38, F-H-39, F-H-40, F-H-41, F-H-42
bloque: Proceso paso a paso (process block)

Esta práctica es **opcional**. Es para mayores de 18 años, con computador o navegador web, que quieran ver el efecto de la temperatura.
Si no cumples esas condiciones, pasa a la práctica B: con ella cumples lo que pide el tema.

**Google AI Studio** es un entorno gratuito de Google para probar modelos e instrucciones. Está disponible en Chile, pero exige tener
18 años o más, con la fecha de nacimiento configurada en tu cuenta de Google.

1. **Entra a AI Studio** con tu cuenta de Google.
2. **Elige un modelo que todavía respete la temperatura.** Los modelos Gemini 4 y Gemini 3.6 en adelante la ignoran. Elige uno
   anterior que aparezca en la lista, como Gemini 3.5 Flash-Lite o 3.1 Flash-Lite.
3. **Abre el panel «Configuración de ejecución»** y ubica la temperatura y la cantidad máxima de tokens de salida.
4. **Escribe un prompt creativo**, por ejemplo: «Propón tres nombres para una campaña de orden en una bodega».
5. **Prueba con temperatura baja** (por ejemplo, 0,2) tres veces y luego con **temperatura alta** (por ejemplo, 1,5) tres veces.
6. **Prueba la longitud:** baja la cantidad máxima de tokens de salida y mira qué pasa con la respuesta.
7. **Registra** todo en la tabla de la pantalla 14.

:::clave
AI Studio sin pago es un servicio no pagado: Google usa lo que envías y lo que genera el modelo para mejorar sus productos. Usa solo
datos ficticios, como los de Camila y Andrés.
:::

## P13 · Práctica B: comparar salidas en el celular
cubre: H1, C1, C2, A1
fuentes: F-M1-13, F-M1-12, F-H-14
bloque: Proceso paso a paso + actividad

Esta práctica la puede hacer cualquier persona con la app de Gemini (o la alternativa que uses). Trabajarás los tres recursos del tema
con la **misma tarea**. Elige una tarea del cargo de tu aviso, por ejemplo redactar un aviso, resumir un procedimiento o responder a un
cliente. Usa datos públicos o ficticios.

**Experimento 1 · Longitud.** Envía tu prompt pidiendo «máximo 40 palabras». Luego, en una conversación nueva, el mismo prompt con
«máximo 120 palabras». Compara: ¿qué se perdió en la versión corta?, ¿qué sobra en la larga?

**Experimento 2 · Iteración.** Envía el mismo prompt tres veces: regenera la respuesta o pégalo en tres conversaciones nuevas. Compara:
¿qué cambia entre las tres?, ¿qué se mantiene?

**Experimento 3 · Precisión o creatividad.** Envía la misma consigna con la instrucción de precisión y luego con la de creatividad que
viste en la pantalla 9. Compara cuál sirve mejor para el objetivo de tu tarea.

Al final, elige la mejor salida de cada experimento con los criterios de la pantalla 11.

:::actividad Tus tres experimentos
Haz los tres experimentos y anota cada salida en tu tabla de registro (pantalla 14). Para cada uno, escribe una frase: «Elijo la
versión __ porque __».
:::

:::clave
Haz cada experimento en una conversación nueva cuando cambies algo. Así la respuesta anterior no influye en la siguiente.
:::

## P14 · Tu tabla de registro
cubre: A1, H1, C2
fuentes: F-M1-15
bloque: Tabla descargable (plantilla de registro)

El **registro** es lo que convierte una prueba en un experimento. La guía de Google recomienda experimentar con los ajustes según la
tarea; anotar lo que pruebas te permite aprender de cada intento. Usa esta tabla en un documento, una planilla o las notas del
celular:

| N.º | Herramienta y modelo | Prompt (igual en todas) | Qué cambié | Salida (resumen) | Exactitud | Formato y largo | Tono | Utilidad | Elegida |
|---|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | | |
| 2 | | | | | | | | | |
| 3 | | | | | | | | | |

Evalúa cada criterio con una escala simple: **bien**, **regular** o **mal**. Anota la fecha de la prueba.

:::ejemplo El registro de Andrés
Andrés prueba el aviso de inventario con tres largos. La versión de 40 palabras queda «mal» en utilidad: le faltó la hora de cierre.
La de 120 queda «regular» en formato: es muy larga para el grupo. La de 60 sale «bien» en todo. Anota: «Elegida la de 60 palabras:
tiene fecha, hora y motivo, y se lee en el celular sin bajar».
:::

:::error Anotar solo la versión ganadora
Las salidas descartadas también enseñan: te muestran qué ajuste no sirvió para esa tarea. Regístralas todas.
:::

## P15 · Elegir la mejor salida con fundamento
cubre: C2, C1, S2
fuentes: F-M1-15, F-M1-16, F-M1-13
bloque: Escenario + knowledge check

Elegir con fundamento es decir **qué versión elegiste, con qué criterio y por qué las otras no**. Camila pidió tres veces una frase de
apertura para su carta, con el mismo prompt:

- **A:** «Me dirijo a ustedes para postular al cargo de asistente administrativa publicado en su sitio.»
- **B:** «Con cinco años en atención de público y manejo de agenda, quiero aportar orden y buen trato a su clínica como asistente
  administrativa.»
- **C:** «¡Soy la persona que su clínica necesita para revolucionar la administración!»

Camila elige la **B** y lo justifica: «Menciona mi experiencia real y el cargo, y tiene un tono cordial. La A es correcta pero genérica.
La C exagera y no dice nada concreto».

:::comprueba
Andrés compara tres resúmenes del reporte semanal. Uno es el más largo y detallado, pero cambia una cifra de stock. ¿Cuál conviene
elegir?
- a) El más largo, porque tiene más información
- **b) Uno que tenga las cifras correctas, aunque sea más breve**
- c) Cualquiera, porque los tres vienen del mismo prompt
Retroalimentación: En un reporte, la exactitud manda. Una versión con una cifra errada no sirve, aunque esté mejor escrita.
:::

:::error «La respuesta más larga es la mejor»
Más texto no significa más útil. La mejor salida es la que cumple el objetivo, con los datos correctos y el largo que el lector
necesita.
:::

## P16 · Cierre: ajustar según el objetivo
cubre: C1, C2, S3, A1
fuentes: F-M1-15, F-M1-13, F-M1-17, F-M1-18
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema viste que la **temperatura** regula cuánto azar hay en la respuesta, que la **longitud** se maneja con un tope o con la
instrucción, y que la **iteración** te da varias salidas para comparar. También viste que en los modelos más nuevos la temperatura la
fija el proveedor: lo que siempre controlas es tu prompt, el largo que pides y cuántas versiones generas.

La regla práctica: **primero define el objetivo, después elige el ajuste**. Precisión para datos y categorías; variedad para ideas;
longitud según dónde se leerá; varias salidas cuando te sirve elegir.

:::actividad Tu regla de configuración
Mira tus tres experimentos y escribe:
1. Para la tarea que elegiste, ¿qué configuración funcionó mejor? (instrucción de precisión o de creatividad, largo, cuántas
   versiones).
2. ¿Por qué? Justifica con lo que viste en tu tabla de registro.
3. Agrega esa regla como nota en la plantilla correspondiente de tu biblioteca de prompts.
:::

Que el mismo pedido dé respuestas distintas tiene otra consecuencia: no puedes dar por buena una respuesta solo porque se ve bien. En
el próximo tema aprenderás a **validar** lo que genera la IA, contrastándolo con fuentes confiables.

## Ideas clave

1. Un parámetro de generación cambia cómo el modelo produce la respuesta sin cambiar el prompt.
2. La temperatura regula cuánto azar hay al elegir cada fragmento: baja da respuestas más predecibles y alta, más variadas.
3. En los modelos más recientes de Google, Anthropic y OpenAI la temperatura la fija el proveedor; el concepto sigue explicando por qué
   varían las respuestas.
4. La longitud se maneja con un tope de tokens de salida o pidiéndola en el prompt; el tope corta y la instrucción orienta.
5. Iterar es regenerar con el mismo prompt o ajustar una parte de él; las dos formas te dan salidas para comparar.
6. Para datos y categorías conviene precisión; para ideas, variedad; y la elección se justifica con criterios definidos.
7. Comparar con rigor es usar la misma consigna, cambiar una cosa a la vez y registrar todas las salidas.

## Glosario

- **Parámetro de generación**: ajuste que cambia cómo el modelo produce la respuesta sin modificar el prompt.
- **Temperatura**: parámetro que regula cuánto azar hay al elegir cada fragmento de la respuesta.
- **Top-p**: parámetro que limita la elección a las opciones más probables hasta sumar cierta probabilidad.
- **Tokens máximos de salida**: tope de tokens que el modelo puede escribir en una respuesta.
- **Valor predeterminado**: valor que el proveedor asigna a un parámetro cuando la persona no lo cambia o no puede cambiarlo.
- **Regenerar**: pedir una nueva respuesta al mismo prompt, sin cambiarlo.
- **Instrucción contrastada**: la misma consigna con dos indicaciones opuestas, una hacia la precisión y otra hacia la creatividad.
- **Precisión**: cualidad de una respuesta que se ajusta a los datos y al pedido, sin agregar ni cambiar información.
- **Google AI Studio**: entorno gratuito de Google para probar modelos e instrucciones y ajustar sus parámetros; exige 18 años o más.
- **Registro de resultados**: tabla donde se anotan el prompt, el ajuste, cada salida y su evaluación.

## Conexión con el proyecto

Tu regla de configuración (P16) queda como nota en una de las plantillas de tu **biblioteca de prompts**, la del **Hito 1 del proyecto
aplicado**. En el **caso M1-C1** analizarás cómo una empresa controla la calidad de las respuestas de un asistente de IA y qué
instrucciones usa; tu tabla de registro te servirá para comparar ese caso con tu propia forma de trabajar.

## Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M1.md` e `investigacion/HERRAMIENTAS-1.md` (consultadas el 24-10-2026).

- F-M1-03 · Google for Developers (2026). Introducción a los modelos de lenguaje grandes. https://developers.google.com/machine-learning/crash-course/llm?hl=es-419
- F-M1-12 · Google Workspace (2026). Cómo escribir instrucciones eficaces. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- F-M1-13 · Microsoft Support (2026). Introducción a la escritura de indicaciones en Copilot. https://support.microsoft.com/es-es/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot
- F-M1-15 · Google AI for Developers (2026). Estrategias de diseño de instrucciones. https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419
- F-M1-16 · OpenAI (2026). API Reference: Create chat completion. https://developers.openai.com/api/reference/resources/chat/subresources/completions/methods/create
- F-M1-17 · OpenAI (2026). Using GPT-6. https://developers.openai.com/api/docs/guides/latest-model
- F-M1-18 · Anthropic (2026). Migrating to API version 2026-10-21. https://platform.claude.com/docs/en/api/migration-2026-10-21
- F-H-08 · OpenAI (2026). ¿Por qué obtengo respuestas generadas diferentes en Playground y la API? https://help.openai.com/es-419/articles/6643200-why-am-i-getting-different-completions-on-playground-vs-the-api
- F-H-14 · Google (s. f.). Empezar a usar la aplicación móvil Gemini. https://support.google.com/gemini/answer/14554984?hl=es
- F-H-37 · Google (2026). Guía de inicio rápido de Google AI Studio. https://ai.google.dev/gemini-api/docs/ai-studio-quickstart?hl=es-419
- F-H-38 · Google (2026). Estrategias de diseño de instrucciones (Prompt design strategies). https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419
- F-H-39 · Google (2026). Models | Gemini API. https://ai.google.dev/gemini-api/docs/models?hl=en
- F-H-40 · Google (2026). Gemini API Additional Terms of Service. https://ai.google.dev/gemini-api/terms?hl=en
- F-H-41 · Google (2026). Regiones disponibles para Google AI Studio y la API de Gemini. https://ai.google.dev/gemini-api/docs/available-regions?hl=es-419
- F-H-42 · Google (2026). Solucionar problemas de Google AI Studio. https://ai.google.dev/gemini-api/docs/troubleshoot-ai-studio?hl=es-419

Recomendaciones del curso, sin fuente: las tres preguntas para configurar según la tarea (P10), las reglas y criterios de comparación
(P11), la tabla de registro con escala bien/regular/mal (P14) y los textos de las instrucciones contrastadas (P09). Que las apps de
chat gratuitas no muestran control de temperatura se deduce de las páginas de planes y funciones; ningún proveedor lo dice de forma
expresa (ver Alertas de HERRAMIENTAS-1).

**Antes de publicar:** pilotear la práctica A en Google AI Studio (P12). No se pudo revisar por dentro: falta confirmar qué modelos
aparecen en la lista, que Gemini 3.5 Flash-Lite o 3.1 Flash-Lite respeten la temperatura, qué controles muestra «Configuración de
ejecución» para cada modelo y si funciona en el navegador del celular. Los valores 0,2 y 1,5 son de ejemplo y hay que comprobar que el
panel los admita.
