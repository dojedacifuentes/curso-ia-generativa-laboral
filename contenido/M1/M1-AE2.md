# M1-AE2 · Prompts efectivos

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M1-12, F-M1-13, F-H-14, F-H-12, F-H-02, F-H-17, F-H-23
bloque: Texto + lista con viñetas

En el tema anterior viste que la calidad de lo que recibes depende mucho de lo que pides. Ahora vas a aprender a pedir bien: a
escribir instrucciones claras, revisar la respuesta y ajustar el pedido hasta que te sirva.

**Aprendizaje esperado:** Formular prompts efectivos con rol, contexto, tarea y formato para obtener respuestas útiles en tareas
laborales simples.

Al terminar, deberías poder:
- escribir un prompt que incluya rol, contexto, tarea y formato;
- mejorar una respuesta iterando al menos una vez, hasta que sea útil para tu tarea.

En este curso usarás **Gemini** como asistente principal: tiene aplicación gratuita para Android y iPhone, y funciona con tu cuenta de
Google. Si prefieres otro, sirven también **ChatGPT** o **Microsoft Copilot**, que tienen versión gratuita y aplicación para el
celular. **Claude** es otra alternativa, pero exige ser mayor de 18 años.

Vuelven Camila y Andrés. **Camila** sigue postulando a cargos de asistente administrativa. **Andrés** quiere que sus reportes de
bodega le tomen menos tiempo. Los dos van a pasar de pedidos vagos a prompts que funcionan.

:::clave
Un buen prompt no es una fórmula mágica. Es una instrucción clara, como la que le darías a una persona que recién llega a tu equipo,
y casi siempre necesita una segunda vuelta.
:::

## P02 · Anatomía de un prompt
cubre: S1, C1
fuentes: F-M1-12, F-M1-13, F-M1-14, F-M1-15
bloque: Texto + tabla o imagen con etiquetas (labeled graphic)

Las guías de Google, Microsoft y Anthropic proponen estructuras parecidas para escribir prompts. Con distintos nombres, todas hablan de
lo mismo: quién responde, qué necesita saber, qué tiene que hacer y cómo entregarlo. En este curso usamos cinco componentes.

| Componente | Pregunta que responde | Ejemplo |
|---|---|---|
| **Rol** | ¿Desde qué perspectiva responde? | «Actúa como asistente administrativa con experiencia en atención de público» |
| **Contexto** | ¿Cuál es la situación, para quién y por qué? | «Postulo a un cargo en una clínica; la carta la leerá la jefa de recursos humanos» |
| **Tarea** | ¿Qué tiene que hacer? | «Redacta el primer párrafo de mi carta de presentación» |
| **Formato** | ¿Cómo lo entrega? | «Un párrafo de no más de 80 palabras, tono cordial» |
| **Restricciones** | ¿Qué límites debe respetar? | «Usa solo la experiencia que te doy; no inventes logros» |

No es obligatorio usar los cinco en cada prompt. Un pedido muy simple puede funcionar con tarea y formato. Pero mientras más depende
la respuesta de tu situación, más componentes conviene incluir. En este tema, la meta mínima es que tus prompts tengan **rol,
contexto, tarea y formato**.

:::ejemplo El prompt completo de Camila
«Actúa como asistente administrativa con experiencia en atención de público. Postulo a un cargo en una clínica y la carta la leerá la
jefa de recursos humanos. Redacta el primer párrafo de mi carta de presentación. Entrégalo en un párrafo de no más de 80 palabras, con
tono cordial. Usa solo la experiencia que te doy a continuación y no inventes logros.»
:::

## P03 · Rol y contexto: ponerlo al día
cubre: S1, C1
fuentes: F-M1-12, F-M1-14, F-M1-13
bloque: Texto + pestañas (tabs): rol / contexto

La guía de Anthropic propone una prueba sencilla: imagina que el asistente es una persona nueva en tu trabajo, inteligente pero sin
ningún antecedente. Si un colega no entendería tu pedido, el modelo tampoco.

**El rol** le indica desde qué perspectiva responder. No le da conocimientos que no tiene, pero orienta el vocabulario, el tono y lo
que considera importante. Ejemplos útiles para oficina:
- «Actúa como encargado de bodega que escribe a su jefatura».
- «Actúa como asistente de recursos humanos que revisa una carta».
- «Actúa como ejecutiva de atención al cliente».

**El contexto** explica la situación: para quién es el texto, para qué se usará y qué antecedentes importan. Google y Microsoft
coinciden en que el contexto mejora mucho la respuesta. También ayuda explicar el **motivo** de una instrucción: «escríbelo corto
porque se leerá en el celular» funciona mejor que solo «escríbelo corto».

:::ejemplo Andrés pone al día al asistente
Sin contexto: «Escribe un aviso sobre el inventario».
Con rol y contexto: «Actúa como encargado de bodega. El viernes cerramos a las 15:00 para hacer inventario y el equipo de ventas no
podrá retirar productos esa tarde. El aviso lo leerán vendedores que suelen pasar a buscar mercadería».
La segunda versión le permite al asistente saber a quién le habla y qué es lo importante.
:::

:::error «El asistente ya sabe a qué me refiero»
El modelo solo trabaja con lo que está en su contexto, como viste en el tema anterior. No conoce tu empresa, tu cargo ni tu jefatura
si no se lo dices.
:::

## P04 · Tarea, formato y restricciones
cubre: S1, C1
fuentes: F-M1-13, F-M1-14, F-M1-15, F-M1-12
bloque: Texto + lista + knowledge check

**La tarea** es lo que quieres que haga. Conviene empezar con un verbo claro: resume, reescribe, clasifica, redacta, ordena, compara.
Si la tarea tiene varios pasos y el orden importa, numéralos.

**El formato** es cómo quieres recibir el resultado. Las guías recomiendan ser específico:
- **Forma:** viñetas, tabla, párrafo, correo con asunto.
- **Extensión:** «en tres viñetas», «máximo 100 palabras».
- **Tono:** formal, cordial, directo.

**Las restricciones** son los límites que debe respetar: qué incluir, qué dejar fuera y de qué información sacar la respuesta. Por
ejemplo: «usa solo el texto que te pego», «no agregues datos que no estén en el reporte».

Un consejo de la guía de Anthropic: di **qué hacer** en vez de solo qué no hacer. «Escribe en frases cortas y simples» orienta mejor
que «no uses palabras difíciles».

:::comprueba
En el prompt «Resume este reglamento en cinco viñetas para trabajadores nuevos, sin agregar información externa», ¿qué parte es una
restricción?
- a) «Resume este reglamento»
- b) «en cinco viñetas»
- **c) «sin agregar información externa»**
Retroalimentación: «Resume» es la tarea y «en cinco viñetas» es el formato. «Sin agregar información externa» limita de dónde puede
sacar la respuesta: es una restricción.
:::

:::comprueba
¿Cuál de estos prompts incluye rol, contexto, tarea y formato?
- a) «Escribe un correo para un proveedor»
- **b) «Actúa como encargado de bodega. Un proveedor atrasó una entrega dos días. Redacta un correo para pedirle una nueva fecha, en
  cinco líneas y tono cordial»**
- c) «Redacta un correo cordial de cinco líneas»
Retroalimentación: La opción b dice quién escribe (rol), qué pasó (contexto), qué hacer (tarea) y cómo entregarlo (formato).
:::

## P05 · Ejemplos y datos dentro del prompt
cubre: S1, H1
fuentes: F-M1-14, F-M1-15, F-M1-02
bloque: Texto + ejemplo destacado

A veces la manera más rápida de explicar lo que quieres es **mostrar un ejemplo**. Si le das un modelo del formato o del tono que
buscas, el asistente tiende a seguirlo. Las guías de Google, Anthropic y la UNESCO recomiendan incluir ejemplos cuando ayudan.

Dos cuidados:
- **Pocos y variados.** La guía de Google advierte que demasiados ejemplos pueden hacer que el modelo los copie de más y pierda
  flexibilidad.
- **Que sean del tipo que quieres.** Si tu ejemplo es largo, la respuesta también lo será.

Otra práctica útil es **separar las instrucciones de los datos**. Cuando pegas un texto para trabajar (un aviso, unas notas, un
correo), deja claro dónde empieza y dónde termina. Por ejemplo, escribe primero la instrucción y luego «Texto:», o pon el texto entre
comillas. Así el asistente no confunde tus indicaciones con el contenido.

:::ejemplo Camila muestra el formato
«Ordena estos avisos de empleo en una tabla con estas columnas, como en el ejemplo:
Cargo | Empresa | Jornada | Requisito principal
Asistente administrativa | Clínica del Sur | Completa | Excel intermedio
Avisos: "…"»
Con una sola fila de ejemplo, el asistente entiende qué va en cada columna.
:::

:::error «Mientras más ejemplos, mejor»
Uno o dos ejemplos bien elegidos orientan el formato. Muchos ejemplos parecidos pueden hacer que el asistente copie su contenido en
vez de trabajar con tus datos.
:::

## P06 · Errores frecuentes al escribir prompts
cubre: S2
fuentes: F-M1-14, F-M1-12, F-M1-15, F-M1-02
bloque: Pestañas o acordeón (un error por pestaña)

Las guías de los proveedores coinciden en varios errores que hacen que la respuesta no sirva:

1. **Pedido vago o ambiguo.** «Hazme algo para el cliente» admite mil interpretaciones. Di qué necesitas exactamente.
2. **Falta de contexto.** Sin saber para quién ni para qué, el asistente entrega algo genérico.
3. **Jerga o redacción enredada.** Las guías recomiendan lenguaje natural, en oraciones completas, y evitar siglas internas que el
   modelo no conoce.
4. **Varias tareas mezcladas.** «Resume el acta, escribe el correo para el gerente y arma la lista de pendientes» en un solo pedido
   suele dar un resultado a medias. La guía de Google sugiere dividir las tareas complejas en varios prompts.
5. **No indicar formato ni restricciones.** Si no dices el largo ni la forma, el asistente decide por ti.
6. **Decir solo lo que no quieres.** «No lo hagas largo ni formal» deja abierto qué sí quieres.

La UNESCO agrega un cuidado: evitar prompts que pidan o refuercen contenido sesgado, por ejemplo suponer que un cargo es «de hombres» o
«de mujeres».

:::error Pedir todo en un solo mensaje
Juntar tres tareas en un prompt parece más rápido, pero suele salir peor. Pide una cosa a la vez y usa la respuesta anterior como base
para la siguiente.
:::

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

Resumir es una de las tareas de oficina que mejor delega un asistente, siempre que tú le entregues el texto. Mira cómo cambia el
resultado al agregar componentes.

**Antes:** «Resume esta minuta».
El asistente entrega un párrafo largo, mezcla temas y no destaca lo que Andrés necesita: los compromisos.

**Después:**
«Actúa como encargado de bodega **[rol]**. Esta es la minuta de la reunión semanal con ventas; la leerá mi equipo de tres personas,
que no estuvo en la reunión **[contexto]**. Resume los acuerdos y los compromisos con su responsable y su fecha **[tarea]**. Entrégalo
en una lista de máximo seis viñetas, con el formato "Compromiso – Responsable – Fecha" **[formato]**. Usa solo la información de la
minuta; si falta un responsable o una fecha, escribe "sin definir" **[restricción]**.
Minuta: "…"»

El resultado es una lista corta que el equipo puede leer en el celular, y los vacíos quedan a la vista en vez de rellenarse con datos
inventados.

:::actividad Mejora tú el prompt
Toma este pedido: «Resume el reglamento interno». Reescríbelo agregando rol, contexto, tarea, formato y una restricción. Piensa en un
lector concreto, por ejemplo una persona que entra a trabajar el lunes.
:::

:::clave
La restricción «si falta, escribe "sin definir"» es muy útil: le da al asistente una salida honesta cuando no tiene el dato.
:::

## P08 · Antes y después: reescribir
cubre: H1, C1
fuentes: F-M1-12, F-M1-13, F-M1-14
bloque: Comparación antes/después (dos columnas o flashcards)

Reescribir es cambiar el tono, el largo o el destinatario de un texto que ya tienes. Camila escribió un mensaje para preguntar por una
postulación, pero le salió muy informal.

**Su borrador:** «Hola! Postulé hace como dos semanas y nadie me dice nada, quería saber si todavía está el puesto o no».

**Antes:** «Mejora este mensaje».
El asistente lo deja más formal, pero le agrega frases que Camila nunca diría y lo alarga al triple.

**Después:**
«Actúa como asistente de recursos humanos con experiencia en selección **[rol]**. Postulé hace dos semanas a un cargo de asistente
administrativa y quiero preguntar por el estado del proceso sin sonar insistente **[contexto]**. Reescribe mi mensaje en tono cordial y
profesional **[tarea]**. Entrégalo como correo, con asunto y un máximo de 70 palabras **[formato]**. Mantén la información que doy y no
agregues logros ni datos nuevos **[restricción]**.
Mensaje: "…"»

Ahora el correo es breve, respetuoso y sigue sonando a ella.

:::ejemplo El mismo texto, otro destinatario
Si Camila quiere enviar la misma consulta por WhatsApp, basta con cambiar el formato: «Entrégalo como mensaje de WhatsApp de dos
líneas». El resto del prompt sirve igual. Esa es la idea que usarás más adelante para armar plantillas.
:::

:::comprueba
Camila quiere que el texto conserve su forma de hablar. ¿Qué parte del prompt la protege mejor?
- a) El rol
- **b) La restricción «mantén la información que doy y no agregues datos nuevos»**
- c) El asunto del correo
Retroalimentación: La restricción le pone límites al asistente para que no cambie el contenido ni invente.
:::

## P09 · Antes y después: clasificar
cubre: H1, C1, S1
fuentes: F-M1-12, F-M1-15, F-M1-14
bloque: Comparación antes/después + tabla

Clasificar es ordenar información en categorías: correos por tema, solicitudes por urgencia, gastos por tipo. Aquí aparece **Rosa**,
recepcionista en un centro médico, que cada mañana revisa los mensajes que dejan los pacientes.

**Antes:** «Ordena estos mensajes».
El asistente los ordena por largo, o los resume uno por uno. No era lo que Rosa necesitaba.

**Después:**
«Actúa como recepcionista de un centro médico **[rol]**. Estos son mensajes de pacientes que debo derivar a distintas áreas antes de
las 9:00 **[contexto]**. Clasifica cada mensaje en una de estas categorías: Agendar hora, Cambiar o anular hora, Resultados de
exámenes, Otro **[tarea]**. Entrega una tabla con las columnas "N.º", "Resumen en cinco palabras" y "Categoría" **[formato]**. Usa solo
esas cuatro categorías; si un mensaje no calza, ponlo en Otro **[restricción]**.
Mensajes: 1. "…" 2. "…"»

Con las categorías definidas de antemano, la clasificación sale pareja y Rosa puede revisarla rápido.

:::clave
Al clasificar, **tú defines las categorías**. Si dejas que el asistente las invente, cada vez puede usar otras distintas. Además, no
pegues nombres, RUT ni datos de salud reales: para practicar, usa mensajes ficticios. Qué datos no compartir se profundiza en el
módulo 3.
:::

:::actividad Arma tu clasificación
Escribe cinco solicitudes ficticias que podrían llegar en el cargo de tu aviso de empleo. Define tres o cuatro categorías y escribe un
prompt con rol, contexto, tarea, formato y restricción para clasificarlas.
:::

## P10 · Iterar: la segunda vuelta
cubre: S3, C2
fuentes: F-M1-12, F-M1-13, F-M1-15, F-M1-02
bloque: Proceso (process block) en 4 pasos

Casi nunca la primera respuesta es la definitiva. Microsoft lo describe como un ida y vuelta; Google, como una conversación; la UNESCO
recomienda refinar e iterar. A ese ciclo se le llama **iteración**:

1. **Pides** con tu mejor prompt.
2. **Revisas** la respuesta: ¿sirve para lo que necesitas?
3. **Ajustas**: corriges el prompt o haces una pregunta de seguimiento.
4. **Repites** hasta que la respuesta sea útil.

Formas de iterar que proponen las guías:
- **Agregar contexto** que faltaba: «es para un cliente molesto».
- **Precisar el formato**: «más corto, en tres viñetas».
- **Reformular** la tarea con otras palabras.
- **Dividir** la tarea en pasos: primero el resumen, después el correo.
- **Cambiar el orden** del prompt, por ejemplo poner el texto antes de la instrucción.
- **Pedirle al asistente que mejore tu prompt**: la guía de Google lo sugiere como recurso.

Puedes iterar dentro de la misma conversación («ahora hazlo más formal») o editar tu prompt y volver a enviarlo.

:::ejemplo Andrés itera una vez
Primera respuesta: un aviso correcto, pero largo. Andrés escribe: «Acórtalo a tres líneas y pon la hora de cierre al principio». La
segunda versión ya la puede pegar en el grupo del equipo.
:::

## P11 · Leer la respuesta para saber qué ajustar
cubre: S3, H1, C2
fuentes: F-M1-12, F-M1-15, F-M1-13
bloque: Tabla + escenario

Iterar no es probar al azar. Mira qué falla en la respuesta y ajusta el componente que corresponde.

| Si la respuesta… | Probablemente faltó… | Ajuste posible |
|---|---|---|
| Es genérica, podría servirle a cualquiera | Contexto | «Es para un cliente que reclama por un despacho atrasado» |
| Tiene un tono que no corresponde | Rol o formato (tono) | «Escríbelo como encargado que habla con su jefatura, tono formal» |
| Es demasiado larga o desordenada | Formato | «Máximo cinco viñetas» |
| Agrega datos que no diste | Restricción | «Usa solo el texto que te pegué» |
| Hace otra cosa de lo que pediste | Tarea | Reformula con un verbo claro: «clasifica», no «revisa» |
| Mezcla varios temas | División en pasos | Pide una tarea a la vez |

:::ejemplo Camila diagnostica
Camila pidió un resumen de un aviso y recibió un texto bonito, pero con un requisito que el aviso no menciona. No pierde tiempo
reescribiendo todo: agrega una restricción («usa solo la información del aviso y marca con "no indica" lo que falte») y vuelve a
pedir.
:::

:::comprueba
La respuesta del asistente está bien escrita, pero es tan general que serviría para cualquier empresa. ¿Qué conviene agregar?
- a) Un límite de palabras
- **b) Contexto sobre la situación, el destinatario y el propósito**
- c) Otra tarea en el mismo mensaje
Retroalimentación: Una respuesta genérica suele indicar falta de contexto. El límite de palabras cambia el largo, no lo específico.
:::

## P12 · Perseverancia en la iteración
cubre: A1, S3
fuentes: F-M1-02, F-M1-13, F-H-12
bloque: Texto + recuadro destacado

La **perseverancia** es no rendirse con la primera respuesta, y tampoco quedarse dando vueltas sin rumbo. La UNESCO y Microsoft
coinciden en que llegar al resultado suele requerir varias iteraciones. Es normal, no es señal de que lo hiciste mal.

Algunas actitudes que ayudan:
- **Mirar cada respuesta como información.** Lo que salió mal te dice qué faltaba en el prompt.
- **Cambiar una cosa a la vez.** Si cambias todo de golpe, no sabrás qué funcionó.
- **Empezar de nuevo cuando conviene.** Si la conversación se llenó de intentos o cambiaste de tema, abre una nueva y pega tu mejor
  versión del prompt. La ayuda de Gemini también recomienda abrir una conversación nueva al cambiar de tema, para aprovechar mejor el
  uso disponible.
- **Saber cuándo parar.** Si después de varios intentos la tarea no sale, quizás no conviene delegarla. Recuerda el semáforo del tema
  anterior.

:::error «Si la primera respuesta es mala, la herramienta no sirve»
La primera respuesta es un punto de partida. Muchas veces basta una iteración con más contexto o un formato más preciso para que sea
útil.
:::

:::ejemplo Rosa no se rinde
La primera clasificación de Rosa mezcló «cambiar hora» con «agendar hora». En vez de dejarlo, agrega un ejemplo de cada categoría. En
la segunda vuelta la tabla sale bien, y Rosa guarda ese prompt mejorado para el día siguiente.
:::

## P13 · Laboratorio de prompts
cubre: H1, C1, C2, A1
fuentes: F-M1-12, F-H-14, F-H-15
bloque: Proceso paso a paso + actividad

Ahora te toca. Vas a escribir, probar e iterar un prompt para una tarea real del cargo que elegiste en el tema anterior.

1. **Abre Gemini** en la app del celular o en el navegador (o la alternativa que uses).
2. **Elige una tarea** de tu aviso de empleo que sea de resumir, reescribir o clasificar. Por ejemplo: resumir un procedimiento,
   reescribir una respuesta a un cliente o clasificar solicitudes.
3. **Prepara los datos** con información pública o ficticia. No pegues datos personales tuyos ni de otras personas.
4. **Escribe la versión 1** con rol, contexto, tarea y formato. Si puedes, agrega una restricción.
5. **Envíala y revisa** la respuesta con la tabla de la pantalla anterior.
6. **Itera al menos una vez:** ajusta el componente que falló y vuelve a enviar.
7. **Anota en tu bitácora** las dos versiones del prompt, qué cambiaste y por qué la segunda respuesta es más útil.

:::actividad Tu laboratorio
Completa este registro:
- Tarea elegida:
- Prompt versión 1:
- Qué falló en la respuesta 1:
- Prompt versión 2 (qué cambiaste):
- Por qué la respuesta 2 es útil:
:::

:::clave
Gemini puede guardar tu actividad, y revisores humanos pueden leer algunas conversaciones si ese ajuste está encendido. Por eso, para
practicar, usa datos ficticios. Cómo configurar la privacidad lo verás en el módulo 3.
:::

## P14 · De prompt a plantilla
cubre: H2, A2
fuentes: F-M1-12
bloque: Texto + ejemplo con resaltado de las partes variables

Si un prompt te funcionó, no lo pierdas. Conviértelo en una **plantilla**: un prompt reutilizable donde las partes que cambian cada vez
quedan entre **[corchetes]**. La guía de Google para Gemini ofrece una biblioteca de prompts de ejemplo por cargo, con corchetes para
personalizar, y entre ellos hay ejemplos para asistencia administrativa y para bodega.

Para armar una plantilla:
1. Toma tu mejor versión, la que obtuviste después de iterar.
2. Marca lo que cambiará la próxima vez: nombres, fechas, textos pegados, destinatarios.
3. Reemplaza cada parte por un corchete que diga qué va ahí.

:::ejemplo La plantilla de Andrés
«Actúa como encargado de bodega. El [día] cerramos a las [hora] por [motivo] y [quién se ve afectado] no podrá [qué no podrá hacer].
Redacta un aviso para [destinatarios]. Entrégalo en un máximo de [número] líneas, con la fecha y la hora al principio y tono
[tono]. No agregues información que no esté en este mensaje.»
La próxima vez, Andrés solo llena los corchetes y envía.
:::

:::error Dejar datos reales dentro de la plantilla
Si tu plantilla quedó con el nombre de un cliente o un número de teléfono, cámbialo por un corchete. Una plantilla se comparte y se
reutiliza: debe quedar limpia de datos personales.
:::

## P15 · Tu biblioteca personal de prompts
cubre: H2, A2
fuentes: F-M1-12
bloque: Texto + tabla descargable (plantilla de la biblioteca)

Una **biblioteca personal de prompts** es tu colección ordenada de plantillas que funcionan, agrupadas por tarea. Es la misma lógica
de las bibliotecas que publican los proveedores, pero hecha para tu cargo y con tus aprendizajes.

Te proponemos este formato. Puedes llevarlo en un documento, una planilla o las notas del celular:

| Campo | Qué anotar |
|---|---|
| Nombre | Un título corto: «Aviso de cierre de bodega» |
| Tarea | Resumir, reescribir, clasificar u otra |
| Plantilla | El prompt con sus [corchetes] |
| Cuándo usarla | La situación en que sirve |
| Notas de iteración | Qué ajuste la hizo funcionar: «agregar el destinatario mejoró el tono» |
| Herramienta y fecha | En qué asistente la probaste y cuándo |

**Orden y documentación** del propio trabajo no es burocracia. Te ahorra rehacer lo que ya resolviste, te permite mostrar cómo
trabajas en una entrevista y facilita compartir una plantilla con tu equipo.

:::ejemplo La biblioteca de Camila
Camila tiene cuatro plantillas: «Resumir aviso de empleo», «Adaptar carta a un aviso», «Correo de seguimiento» y «Ordenar avisos en
tabla». En cada una anotó qué ajuste la hizo funcionar. Cuando aparece un aviso nuevo, prepara su postulación en la mitad del tiempo.
Para su proyecto eligió una tarea del aviso que guardó: registrar y clasificar los documentos que llegan a la oficina.
:::

:::actividad Empieza tu biblioteca
Abre un documento o una nota y crea la tabla con los seis campos. Agrega la plantilla de tu laboratorio como primera entrada.
:::

## P16 · Cierre: tu primera biblioteca
cubre: C1, C2, H2, A2
fuentes: F-M1-12, F-M1-13
bloque: Texto + lista de verificación (checklist) + actividad de cierre

En este tema viste que un prompt efectivo tiene **rol, contexto, tarea, formato** y, cuando hace falta, **restricciones**. Conociste
los errores más comunes, practicaste resumir, reescribir y clasificar con ejemplos antes y después, y aprendiste a **iterar** mirando
qué falló en la respuesta.

Antes de guardar una plantilla en tu biblioteca, revísala con esta lista:
- [ ] Tiene rol, contexto, tarea y formato.
- [ ] Incluye al menos una restricción cuando hay riesgo de que invente o se alargue.
- [ ] La probé y la mejoré al menos una vez.
- [ ] Las partes variables están entre [corchetes].
- [ ] No tiene datos personales ni confidenciales.
- [ ] Anoté qué ajuste la hizo funcionar.

:::actividad Tres plantillas para tu cargo
Vuelve a los tres usos que escribiste al cierre del tema anterior. Para cada uno, escribe una plantilla, pruébala en Gemini, itera al
menos una vez y guárdala en tu biblioteca con sus notas. Esa será tu **biblioteca de prompts v1**.
:::

En el próximo tema verás por qué el mismo prompt puede dar respuestas distintas y cómo ajustar la longitud y la variación según lo que
necesitas.

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
del proyecto aplicado: problema u oportunidad real + biblioteca de prompts v1**. La armas para resolver la tarea del cargo que elegiste
en el tema anterior, a partir de tu aviso de empleo. En el **caso M1-C1** analizarás cómo una empresa usa instrucciones y fuentes en
un asistente de IA, y aplicarás lo aprendido a tu biblioteca.

## Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M1.md` e `investigacion/HERRAMIENTAS-1.md` (consultadas el 24-10-2026).

- F-M1-02 · UNESCO; Miao y Holmes (2024). Guía para el uso de IA generativa en educación e investigación. https://unesdoc.unesco.org/ark:/48223/pf0000389227_spa
- F-M1-12 · Google Workspace (2026). Cómo escribir instrucciones eficaces. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- F-M1-13 · Microsoft Support (2026). Introducción a la escritura de indicaciones en Copilot. https://support.microsoft.com/es-es/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot
- F-M1-14 · Anthropic (2026). Mejores prácticas de prompting. https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/claude-prompting-best-practices
- F-M1-15 · Google AI for Developers (2026). Estrategias de diseño de instrucciones. https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419
- F-H-02 · OpenAI (s. f.). Planes y precios de ChatGPT. https://chatgpt.com/es-419/pricing/
- F-H-12 · Google (s. f.). Límites de las aplicaciones de Gemini y cambios a planes superiores. https://support.google.com/gemini/answer/16275805?hl=es
- F-H-14 · Google (s. f.). Empezar a usar la aplicación móvil Gemini. https://support.google.com/gemini/answer/14554984?hl=es
- F-H-15 · Google (s. f.). Centro de Privacidad de las Aplicaciones de Gemini. https://support.google.com/gemini/answer/13594961?hl=es
- F-H-17 · Microsoft (2026). Microsoft Copilot para personas: sus controles y opciones de privacidad. https://support.microsoft.com/es-es/privacy/microsoft-copilot/privacy-controls
- F-H-23 · Anthropic (2025). Consumer Terms of Service. https://www.anthropic.com/legal/consumer-terms

Recomendaciones del curso, sin fuente: el formato de seis campos de la biblioteca (P15), la tabla de diagnóstico de P11 como
organización didáctica y la lista de verificación de P16.
