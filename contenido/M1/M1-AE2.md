# M1-AE2 · Prompts efectivos

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-H-14, F-H-02
bloque: Texto + imagen de portada

En el tema anterior viste que la calidad de lo que recibes depende mucho de lo que pides. Ahora vas a aprender a pedir bien: a
escribir instrucciones claras, revisar la respuesta y ajustar el pedido hasta que te sirva.

El aprendizaje esperado es este: Formular prompts efectivos con rol, contexto, tarea y formato para obtener respuestas útiles en
tareas laborales simples. Al terminar deberías poder escribir un prompt con esos cuatro componentes y mejorar una respuesta iterando al
menos una vez, hasta que de verdad te sirva en tu trabajo.

En este curso vas a usar **Gemini** como asistente principal. Tiene aplicación para Android y para iPhone, y funciona con una cuenta de
Google personal. Si prefieres otro, ChatGPT también tiene un plan gratuito que funciona en el navegador y en el celular. Y si en tu
empresa ya usan un asistente, como Copilot, puedes practicar con ese, respetando lo que tu empresa permita.

Vuelven Camila y Andrés. Camila responde todos los días correos de proveedores y clientes, y quiere dejar de escribirlos desde cero.
Andrés quiere que sus reportes y avisos de bodega le tomen menos tiempo. Los dos van a pasar de pedidos vagos a prompts que funcionan,
y vas a ver que un buen prompt no tiene nada de fórmula mágica: es una instrucción clara, como la que le darías a alguien que recién
llega a tu equipo.

## P02 · Anatomía de un prompt
cubre: S1, C1
fuentes: F-M1-12, F-M1-13
bloque: Texto + tabla o imagen con etiquetas (labeled graphic)

Las guías de Google y de Microsoft proponen estructuras parecidas para escribir prompts. Con distintos nombres, las dos hablan de lo
mismo: quién responde, qué necesita saber, qué tiene que hacer y cómo entregarlo. En este curso usamos cinco componentes, con un
ejemplo de Camila en cada uno.

| Componente | Pregunta que responde | Ejemplo |
|---|---|---|
| Rol | ¿Desde qué perspectiva responde? | «Actúa como asistente administrativa de una constructora» |
| Contexto | ¿Cuál es la situación, para quién y por qué? | «Un proveedor pregunta por el pago de su factura de octubre; el pago está programado para el día 15» |
| Tarea | ¿Qué tiene que hacer? | «Redacta la respuesta a su correo» |
| Formato | ¿Cómo lo entrega? | «Un correo de no más de 80 palabras, tono cordial» |
| Restricciones | ¿Qué límites debe respetar? | «Usa solo los datos que te doy; no prometas nada que no esté aquí» |

No es obligatorio usar los cinco en cada prompt. Un pedido muy simple puede funcionar solo con tarea y formato. Pero mientras más
depende la respuesta de tu situación, más componentes conviene incluir, y en este tema la meta mínima es que tus prompts tengan
**rol, contexto, tarea y formato**.

:::ejemplo El prompt completo de Camila
«Actúa como asistente administrativa de una constructora. Un proveedor pregunta por el pago de su factura de octubre; el pago está
programado para el día 15 y el correo lo leerá su encargada de cobranza. Redacta la respuesta a su correo. Entrégala como un correo de
no más de 80 palabras, con tono cordial. Usa solo los datos que te doy y no prometas nada que no esté aquí.»
:::

## P03 · Rol y contexto: ponerlo al día
cubre: S1, C1
fuentes: F-M1-14, F-M1-12
bloque: Texto + pestañas (tabs): rol / contexto

La guía de Anthropic propone una prueba sencilla: imagina que el asistente es una persona nueva en tu trabajo, inteligente pero sin
ningún antecedente. Si un colega recién llegado no entendería tu pedido, el modelo tampoco. Un error común es pensar que el asistente
ya sabe a qué te refieres; como viste en el tema anterior, solo trabaja con lo que está en su contexto y no conoce tu empresa, tu
cargo ni tu jefatura si no se lo dices.

El **rol** le indica desde qué perspectiva responder. No le da conocimientos que no tiene, pero orienta el vocabulario, el tono y lo
que considera importante. En una oficina sirven roles como «encargado de bodega que escribe a su jefatura», «asistente de recursos
humanos que redacta un aviso interno» o «ejecutiva de atención al cliente».

El **contexto** explica la situación: para quién es el texto, para qué se usará y qué antecedentes importan. Ayuda mucho explicar
también el motivo de una instrucción. «Escríbelo corto porque se leerá en el celular» funciona mejor que solo «escríbelo corto»,
porque el asistente entiende qué busca y puede decidir mejor.

:::ejemplo Andrés pone al día al asistente
Sin contexto, Andrés escribía: «Escribe un aviso sobre el inventario». Ahora escribe: «Actúa como encargado de bodega. El viernes
cerramos a las 15:00 para hacer inventario y el equipo de ventas no podrá retirar productos esa tarde. El aviso lo leerán vendedores
que suelen pasar a buscar mercadería». Con la segunda versión, el asistente sabe a quién le habla y qué es lo importante.
:::

## P04 · Tarea, formato y restricciones
cubre: S1, C1
fuentes: F-M1-13, F-M1-14
bloque: Texto + knowledge check

La tarea es lo que quieres que haga. Conviene empezar con un verbo claro: resume, reescribe, clasifica, redacta, ordena, compara. Si
la tarea tiene varios pasos y el orden importa, numéralos.

El formato es cómo quieres recibir el resultado, y las guías recomiendan ser específico en tres cosas: la forma (viñetas, tabla,
párrafo o correo con asunto), la extensión («en tres viñetas», «máximo 100 palabras») y el tono (formal, cordial, directo). Si no lo
dices, el asistente decide por ti.

Las **restricciones** son los límites que la respuesta debe respetar: qué incluir, qué dejar fuera y de qué información sacar la
respuesta. Por ejemplo, «usa solo el texto que te pego» o «no agregues datos que no estén en el reporte». La guía de Anthropic suma un
consejo útil: di qué hacer en vez de decir solo lo que no quieres. «Escribe en frases cortas y simples» orienta mejor que «no uses
palabras difíciles».

:::comprueba
En el prompt «Resume este reglamento en cinco viñetas para trabajadores nuevos, sin agregar información externa», ¿qué parte es una
restricción?
- a) «Resume este reglamento»
- b) «en cinco viñetas»
- **c) «sin agregar información externa»**
Retroalimentación: «Resume» es la tarea y «en cinco viñetas» es el formato. «Sin agregar información externa» limita de dónde puede
sacar la respuesta: es una restricción.
:::

## P05 · Ejemplos y datos dentro del prompt
cubre: S1, H1
fuentes: F-M1-14, F-M1-15
bloque: Texto + ejemplo destacado

A veces la manera más rápida de explicar lo que quieres es mostrar un ejemplo. Si le das un modelo del formato o del tono que buscas,
el asistente tiende a seguirlo. Las guías de Anthropic y de Google recomiendan incluir ejemplos cuando ayudan, con dos cuidados.
El primero es que sean pocos: la guía de Google advierte que demasiados ejemplos pueden hacer que el modelo los copie de más y pierda
flexibilidad. El segundo es que se parezcan a lo que quieres, porque si tu ejemplo es largo, la respuesta también lo será.

Otra práctica útil es separar las instrucciones de los datos. Cuando pegas un texto para trabajar, como unas notas, un correo o el
detalle de unas facturas, deja claro dónde empieza y dónde termina. Escribe primero la instrucción y luego «Texto:», o pon el texto
entre comillas. Así el asistente no confunde tus indicaciones con el contenido.

:::ejemplo Camila muestra el formato
«Ordena estas facturas en una tabla con estas columnas, como en el ejemplo:
N.º | Proveedor | Fecha | Monto total
1520 | Áridos del Sur | 03-10-2026 | $1.250.000
Facturas: "…"»
Con una sola fila de ejemplo, inventada, el asistente entiende qué va en cada columna.
:::

## P06 · Errores frecuentes al escribir prompts
cubre: S2
fuentes: F-M1-14, F-M1-15
bloque: Pestañas o acordeón (un error por pestaña)

Las guías de los proveedores coinciden en varios errores que hacen que la respuesta no sirva. Casi todos nacen de lo mismo: escribir
como si el asistente supiera lo que tú sabes.

1. Pedido vago o ambiguo: «hazme algo para el cliente» admite mil interpretaciones.
2. Falta de contexto: sin saber para quién ni para qué, el asistente entrega algo genérico.
3. Jerga o siglas internas que un colega nuevo no entendería, y el modelo tampoco.
4. Varias tareas mezcladas en un solo mensaje.
5. No indicar formato ni restricciones, de modo que el asistente decide el largo y la forma.
6. Decir solo lo que no quieres: «no lo hagas largo ni formal» deja abierto qué sí quieres.

El cuarto merece una explicación, porque es tentador. Escribir «resume el acta, redacta el correo para el gerente y arma la lista de
pendientes» parece más rápido, pero suele dar un resultado a medias en las tres cosas. La guía de Google recomienda dividir las tareas
complejas en varios prompts: pides una cosa a la vez y usas cada respuesta como base para la siguiente.

:::comprueba
Andrés escribe: «Revisa esto y mejóralo». ¿Cuál es el error principal?
- a) Tiene demasiadas restricciones
- **b) Es vago: no dice qué es «esto», para quién es ni qué significa «mejorar»**
- c) Le falta un ejemplo
Retroalimentación: El pedido no tiene contexto, tarea precisa ni formato. El asistente tendrá que adivinar.
:::

## P07 · Antes y después: resumir
cubre: H1, C1
fuentes: F-M1-12, F-M1-13
bloque: Comparación antes/después (dos columnas o flashcards)

Resumir es una de las tareas de oficina que mejor delega un asistente, siempre que tú le entregues el texto. Andrés lo ve con la minuta
de la reunión semanal con ventas. Cuando escribía solo «Resume esta minuta», recibía un párrafo largo que mezclaba temas y no
destacaba lo que él necesitaba: los compromisos. Ahora agrega los componentes que faltaban:

> «Actúa como encargado de bodega [rol]. Esta es la minuta de la reunión semanal con ventas; la leerá mi equipo de tres personas, que
> no estuvo en la reunión [contexto]. Resume los acuerdos y los compromisos con su responsable y su fecha [tarea]. Entrégalo en una
> lista de máximo seis viñetas, con el formato "Compromiso – Responsable – Fecha" [formato]. Usa solo la información de la minuta; si
> falta un responsable o una fecha, escribe "sin definir" [restricción]. Minuta: "…"»

El resultado es una lista corta que el equipo puede leer en el celular. Además, los vacíos quedan a la vista en vez de rellenarse con
datos inventados. Esa última restricción, «si falta, escribe "sin definir"», sirve en muchos prompts: le da al asistente una salida
honesta cuando no tiene el dato.

:::actividad Mejora tú el prompt
Toma este pedido: «Resume el reglamento interno». Reescríbelo agregando rol, contexto, tarea, formato y una restricción. Piensa en un
lector concreto, por ejemplo una persona que entra a trabajar el lunes a tu área.
:::

## P08 · Antes y después: reescribir
cubre: H1, C1
fuentes: F-M1-12, F-M1-13
bloque: Comparación antes/después (dos columnas o flashcards)

Reescribir es cambiar el tono, el largo o el destinatario de un texto que ya tienes. Camila escribió rápido un mensaje para un
proveedor que no ha confirmado la entrega de un pedido, y le salió demasiado informal: «Hola! Les escribimos hace como dos semanas por
los sacos de cemento y nadie nos dice nada, ¿llegan o no?».

Primero pidió solo «Mejora este mensaje». El asistente lo dejó más formal, pero le agregó frases que Camila nunca diría y lo alargó al
triple. Entonces escribió un prompt completo:

> «Actúa como asistente administrativa de una constructora [rol]. Hace dos semanas hicimos un pedido de cemento a este proveedor y no
> ha confirmado la fecha de entrega; necesito saberla sin sonar molesta [contexto]. Reescribe mi mensaje en tono cordial y profesional
> [tarea]. Entrégalo como correo, con asunto y un máximo de 70 palabras [formato]. Mantén la información que doy y no agregues datos
> nuevos [restricción]. Mensaje: "…"»

Ahora el correo es breve, firme y sigue sonando a ella. Si quisiera mandar la misma consulta por WhatsApp, le bastaría con cambiar el
formato: «Entrégalo como mensaje de dos líneas». El resto del prompt sirve igual, y esa es la idea que usarás más adelante para armar
plantillas.

:::comprueba
Camila quiere que el texto conserve su información y no sume nada. ¿Qué parte del prompt la protege mejor?
- a) El rol
- **b) La restricción «mantén la información que doy y no agregues datos nuevos»**
- c) El asunto del correo
Retroalimentación: La restricción le pone límites al asistente para que no cambie el contenido ni invente.
:::

## P09 · Antes y después: clasificar
cubre: H1, C1, S1
fuentes: F-M1-12, F-M1-15
bloque: Comparación antes/después + tabla

Clasificar es ordenar información en categorías: correos por tema, solicitudes por urgencia, gastos por tipo. Aquí aparece Rosa,
recepcionista en un centro médico, que cada mañana revisa los mensajes que dejan los pacientes. Cuando pedía «Ordena estos mensajes»,
el asistente los ordenaba por largo o los resumía uno por uno, y eso no le servía. Ahora escribe:

> «Actúa como recepcionista de un centro médico [rol]. Estos son mensajes de pacientes que debo derivar a distintas áreas antes de las
> 9:00 [contexto]. Clasifica cada mensaje en una de estas categorías: Agendar hora, Cambiar o anular hora, Resultados de exámenes,
> Otro [tarea]. Entrega una tabla con las columnas "N.º", "Resumen en cinco palabras" y "Categoría" [formato]. Usa solo esas cuatro
> categorías; si un mensaje no calza, ponlo en Otro [restricción]. Mensajes: 1. "…" 2. "…"»

Con las categorías definidas de antemano, la clasificación sale pareja y Rosa la revisa rápido. Al clasificar, **tú defines las
categorías**: si dejas que el asistente las invente, cada vez puede usar otras distintas. Y para practicar no pegues nombres, RUT ni
datos de salud reales; usa mensajes de prueba. Qué datos no compartir lo vas a ver a fondo en el módulo 3.

:::actividad Arma tu clasificación
Escribe cinco solicitudes de prueba parecidas a las que llegan en tu trabajo. Define tres o cuatro categorías y escribe un prompt con
rol, contexto, tarea, formato y restricción para clasificarlas.
:::

## P10 · Iterar: la segunda vuelta
cubre: S3, C2
fuentes: F-M1-12, F-M1-15
bloque: Proceso (process block) en 4 pasos

Casi nunca la primera respuesta es la definitiva. Las guías de los proveedores proponen tratar el trabajo con el asistente como una
conversación, y a ese ciclo de pedir, mirar y corregir se le llama **iteración**:

1. Pides con tu mejor prompt.
2. Revisas la respuesta: ¿sirve para lo que necesitas?
3. Ajustas: corriges el prompt o haces una pregunta de seguimiento.
4. Repites hasta que la respuesta sea útil.

Hay varias formas de ajustar. Puedes agregar el contexto que faltaba («es para un cliente molesto»), precisar el formato («más corto,
en tres viñetas») o reformular la tarea con otras palabras. También puedes dividirla en pasos, primero el resumen y después el correo,
o cambiar el orden del prompt y poner el texto antes de la instrucción. Y la guía de Google sugiere un recurso más: pedirle al propio
asistente que mejore tu prompt. Puedes iterar dentro de la misma conversación («ahora hazlo más formal») o editar tu prompt y volver a
enviarlo.

:::ejemplo Andrés itera una vez
La primera respuesta de Andrés fue un aviso correcto, pero largo. Escribió: «Acórtalo a tres líneas y pon la hora de cierre al
principio». La segunda versión ya la pudo pegar en el grupo del equipo.
:::

## P11 · Leer la respuesta para saber qué ajustar
cubre: S3, H1, C2
fuentes: F-M1-12, F-M1-13
bloque: Tabla + escenario

Iterar no es probar al azar. Lo que falla en la respuesta te dice qué faltó en el prompt, así que conviene mirarla primero y ajustar
el componente que corresponde.

| Si la respuesta… | Probablemente faltó… | Ajuste posible |
|---|---|---|
| Es genérica, podría servirle a cualquiera | Contexto | «Es para un cliente que reclama por un despacho atrasado» |
| Tiene un tono que no corresponde | Rol o formato (tono) | «Escríbelo como encargado que habla con su jefatura, tono formal» |
| Es demasiado larga o desordenada | Formato | «Máximo cinco viñetas» |
| Agrega datos que no diste | Restricción | «Usa solo el texto que te pegué» |
| Hace otra cosa de lo que pediste | Tarea | Reformula con un verbo claro: «clasifica», no «revisa» |
| Mezcla varios temas | División en pasos | Pide una tarea a la vez |

Camila usó esta lógica con el instructivo de rendición de gastos. Su resumen venía bien escrito, pero traía la firma del gerente
general, que el instructivo no pide. No reescribió todo: agregó una restricción («usa solo la información del instructivo y marca con
"no indica" lo que falte») y volvió a pedir.

:::comprueba
La respuesta del asistente está bien escrita, pero es tan general que serviría para cualquier empresa. ¿Qué conviene agregar?
- a) Un límite de palabras
- **b) Contexto sobre la situación, el destinatario y el propósito**
- c) Otra tarea en el mismo mensaje
Retroalimentación: Una respuesta genérica suele indicar falta de contexto. El límite de palabras cambia el largo, no lo específico.
:::

## P12 · Perseverancia en la iteración
cubre: A1, S3
fuentes: F-M1-13, F-H-12
bloque: Texto + recuadro destacado

La **perseverancia** es no rendirse con la primera respuesta, y tampoco quedarse dando vueltas sin rumbo. La guía de Microsoft advierte
que llegar al resultado suele requerir un ida y vuelta. Es normal, no es señal de que lo hiciste mal. Un error común es concluir que la
herramienta no sirve porque la primera respuesta salió mala, cuando muchas veces basta una iteración con más contexto o un formato más
preciso.

Ayuda mirar cada respuesta como información: lo que salió mal te dice qué faltaba. Ayuda también cambiar una cosa a la vez, porque si
cambias todo de golpe no sabrás qué funcionó. A veces conviene empezar de nuevo: si la conversación se llenó de intentos o cambiaste de
tema, abre una nueva y pega tu mejor versión del prompt. La ayuda de Gemini lo recomienda al cambiar de tema, para aprovechar mejor el
uso disponible.

Perseverar también es saber cuándo parar. Si después de varios intentos la tarea no sale, quizás no conviene delegarla; recuerda el
semáforo del tema anterior.

:::ejemplo Rosa no se rinde
La primera clasificación de Rosa mezcló «Cambiar o anular hora» con «Agendar hora». En vez de dejarlo, agregó un ejemplo de cada
categoría. En la segunda vuelta la tabla salió bien, y Rosa guardó ese prompt mejorado para el día siguiente.
:::

## P13 · Laboratorio de prompts
cubre: H1, C1, C2, A1
fuentes: F-H-14, F-H-15
bloque: Proceso paso a paso + actividad

Ahora te toca. Vas a escribir, probar e iterar un prompt para una tarea real de tu cargo. Antes de empezar, una advertencia sobre los
datos: con el ajuste de actividad encendido, Gemini guarda tus conversaciones y revisores humanos pueden leer algunas. Por eso aquí se
trabaja con copias sin datos sensibles o con datos de prueba, y se respeta lo que diga tu empresa. Cómo configurar la privacidad lo
verás en el módulo 3.

1. Abre Gemini en la app del celular o en el navegador, o el asistente que uses.
2. Elige una tarea de tu trabajo que sea de resumir, reescribir o clasificar: un procedimiento, una respuesta a un cliente, solicitudes que llegan a tu correo.
3. Prepara los datos con una copia sin nombres, RUT ni montos reales, o con datos de prueba.
4. Escribe la versión 1 con rol, contexto, tarea y formato; si puedes, agrega una restricción.
5. Envíala y revisa la respuesta con la tabla de la pantalla anterior.
6. Itera al menos una vez: ajusta el componente que falló y vuelve a enviar.

:::actividad Tu laboratorio
Anota en tu bitácora la tarea que elegiste, las dos versiones del prompt, qué falló en la primera respuesta, qué cambiaste en la
segunda versión y por qué la segunda respuesta te sirve más.
:::

## P14 · De prompt a plantilla
cubre: H2, A2
fuentes: F-M1-12
bloque: Texto + ejemplo con resaltado de las partes variables

Si un prompt te funcionó, no lo pierdas. Conviértelo en una **plantilla**: un prompt reutilizable donde las partes que cambian cada vez
quedan entre [corchetes]. La guía de Google para Gemini ofrece una biblioteca de prompts de ejemplo por cargo, con corchetes para
personalizar, y entre ellos hay ejemplos para asistencia administrativa y para bodega.

Armarla es simple. Tomas tu mejor versión, la que obtuviste después de iterar, y marcas lo que cambiará la próxima vez: nombres,
fechas, textos pegados, destinatarios. Luego reemplazas cada una de esas partes por un corchete que diga qué va ahí.

Un error común es dejar datos reales dentro de la plantilla. Si quedó con el nombre de un cliente, un local o un número de teléfono,
cámbialo por un corchete como [cliente] o [teléfono]. Una plantilla se reutiliza y se comparte con el equipo, así que tiene que quedar
limpia de datos personales.

:::ejemplo La plantilla de Andrés
«Actúa como encargado de bodega. El [día] cerramos a las [hora] por [motivo] y [quién se ve afectado] no podrá [qué no podrá hacer].
Redacta un aviso para [destinatarios]. Entrégalo en un máximo de [número] líneas, con la fecha y la hora al principio y tono
[tono]. No agregues información que no esté en este mensaje.»
La próxima vez, Andrés solo llena los corchetes y envía.
:::

## P15 · Tu biblioteca personal de prompts
cubre: H2, A2
fuentes: F-M1-12
bloque: Texto + tabla descargable (plantilla de la biblioteca)

Una **biblioteca personal de prompts** es tu colección ordenada de plantillas que funcionan, agrupadas por tarea. Sigue la misma lógica
de las bibliotecas que publican los proveedores, pero hecha para tu cargo y con lo que tú aprendiste. Puedes llevarla en un documento,
en una planilla o en las notas del celular, con este formato:

| Campo | Qué anotar |
|---|---|
| Nombre | Un título corto: «Aviso de cierre de bodega» |
| Tarea | Resumir, reescribir, clasificar u otra |
| Plantilla | El prompt con sus [corchetes] |
| Cuándo usarla | La situación en que sirve |
| Notas de iteración | Qué ajuste la hizo funcionar: «agregar el destinatario mejoró el tono» |
| Herramienta y fecha | En qué asistente la probaste y cuándo |

Ordenar y documentar tu propio trabajo no es burocracia. Te ahorra rehacer lo que ya resolviste, te permite mostrarle a tu jefatura
cómo trabajas y facilita compartir una plantilla con tu equipo. La biblioteca de Camila, por ejemplo, tiene cuatro plantillas:
«Resumir instructivo», «Responder a proveedor», «Correo de seguimiento de pago» y «Ordenar facturas en tabla». En cada una anotó qué
ajuste la hizo funcionar, y cuando llega un correo parecido parte de la plantilla en vez de escribir desde cero. Para su proyecto
eligió una tarea que le toma tiempo todas las semanas: registrar y clasificar los documentos que llegan a la oficina.

:::actividad Empieza tu biblioteca
Abre un documento o una nota y crea la tabla con los seis campos. Agrega la plantilla de tu laboratorio como primera entrada.
:::

## P16 · Cierre: tu primera biblioteca
cubre: C1, C2, H2, A2
fuentes: F-M1-12, F-M1-13
bloque: Texto + lista de verificación (checklist) + actividad de cierre

En este tema viste que un prompt efectivo tiene rol, contexto, tarea y formato y, cuando hace falta, restricciones. Conociste los
errores más comunes, practicaste resumir, reescribir y clasificar con ejemplos de antes y después, y aprendiste a iterar mirando qué
falló en la respuesta. Antes de guardar una plantilla en tu biblioteca, revísala con esta lista:

- [ ] Tiene rol, contexto, tarea y formato.
- [ ] Incluye al menos una restricción cuando hay riesgo de que invente o se alargue.
- [ ] La probé y la mejoré al menos una vez.
- [ ] Las partes variables están entre [corchetes].
- [ ] No tiene datos personales ni confidenciales.
- [ ] Anoté qué ajuste la hizo funcionar.

En el próximo tema verás por qué el mismo prompt puede dar respuestas distintas y cómo ajustar la longitud y la variación según lo que
necesitas.

:::actividad Tres plantillas para tu cargo
Vuelve a los tres usos que escribiste al cierre del tema anterior. Para cada uno, escribe una plantilla, pruébala en Gemini, itera al
menos una vez y guárdala en tu biblioteca con sus notas. Esa será tu **biblioteca de prompts v1**.
:::

## Ideas clave

1. Un prompt efectivo tiene rol, contexto, tarea y formato; las restricciones agregan límites cuando hay riesgo de que invente o se
   alargue.
2. Escribe como si le hablaras a una persona nueva en tu equipo: si un colega no entendería el pedido, el asistente tampoco.
3. Los errores más frecuentes son pedidos vagos, falta de contexto, varias tareas mezcladas, no indicar formato y decir solo lo que no
   quieres.
4. Uno o dos ejemplos orientan el formato; separa siempre las instrucciones de los datos que pegas.
5. Iterar es normal: revisa la respuesta, identifica qué componente falló y ajústalo, una cosa a la vez.
6. Un prompt que funciona se convierte en plantilla con [corchetes] y se guarda, con sus notas, en tu biblioteca personal.

## Glosario

- **Rol**: perspectiva desde la que se le pide al asistente que responda, por ejemplo «encargado de bodega».
- **Contexto (en un prompt)**: parte del prompt que explica la situación, para quién es la respuesta y para qué se usará.
- **Tarea**: lo que se le pide hacer al asistente, expresado con un verbo claro, como resumir o clasificar.
- **Formato**: forma, extensión y tono en que se pide la respuesta.
- **Restricción**: límite que la respuesta debe respetar, como qué información usar o qué no agregar.
- **Ejemplo en el prompt**: muestra del resultado esperado que se incluye para orientar el formato o el tono.
- **Iteración**: ciclo de pedir, revisar, ajustar y volver a pedir hasta obtener una respuesta útil.
- **Pregunta de seguimiento**: mensaje que se envía en la misma conversación para corregir o precisar la respuesta anterior.
- **Plantilla de prompt**: prompt reutilizable con las partes variables entre [corchetes].
- **Biblioteca de prompts**: colección ordenada de plantillas probadas, con notas sobre cuándo y cómo usarlas.

## Conexión con el proyecto

Tus tres plantillas de la actividad de cierre (P16), con sus notas de iteración, forman la **biblioteca de prompts v1** del **Hito 1
del proyecto aplicado: problema u oportunidad real + biblioteca de prompts v1**. La armas para resolver tareas de tu propio cargo, y
en el hito eliges entre ellas el desafío laboral en que vas a trabajar durante el curso.

## Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M1.md` e `investigacion/HERRAMIENTAS-1.md` (consultadas el 24-10-2026).

- F-M1-12 · Google Workspace (2026). Cómo escribir instrucciones eficaces. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- F-M1-13 · Microsoft Support (2026). Introducción a la escritura de indicaciones en Copilot. https://support.microsoft.com/es-es/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot
- F-M1-14 · Anthropic (2026). Mejores prácticas de prompting. https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/claude-prompting-best-practices
- F-M1-15 · Google AI for Developers (2026). Estrategias de diseño de instrucciones. https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419
- F-H-02 · OpenAI (s. f.). Planes y precios de ChatGPT. https://chatgpt.com/es-419/pricing/
- F-H-12 · Google (s. f.). Límites de las aplicaciones de Gemini y cambios a planes superiores. https://support.google.com/gemini/answer/16275805?hl=es
- F-H-14 · Google (s. f.). Empezar a usar la aplicación móvil Gemini. https://support.google.com/gemini/answer/14554984?hl=es
- F-H-15 · Google (s. f.). Centro de Privacidad de las Aplicaciones de Gemini. https://support.google.com/gemini/answer/13594961?hl=es

Recomendaciones del curso, sin fuente: el formato de seis campos de la biblioteca (P15), la tabla de diagnóstico de P11 como
organización didáctica y la lista de verificación de P16.
