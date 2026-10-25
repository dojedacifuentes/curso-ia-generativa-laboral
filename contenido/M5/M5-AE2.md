# M5-AE2 · Flujos simples con IA

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M5-09, F-H-94
bloque: Texto + lista con viñetas

En el tema anterior elegiste una tarea para automatizar. Ahora la vas a convertir en un **flujo**: una cadena de pasos que se pone en
marcha sola y que conecta la IA con tu correo, una planilla o tu calendario. No necesitas programar. Vas a usar herramientas
**no-code**, que se arman eligiendo bloques.

**Aprendizaje esperado:** Construir un flujo simple con una herramienta no-code que conecte IA con correo, planillas o calendario.

Al terminar, deberías poder:
- construir un flujo que funcione, de 3 a 5 pasos;
- probarlo con datos de práctica, encontrar sus fallas y corregirlas.

Este tema es un **laboratorio**. Tienes dos caminos:
- **Con computador** (el tuyo, uno prestado o el de una biblioteca): usarás **Make**, que en su plan gratuito permite flujos de varios
  pasos.
- **Solo con el celular:** usarás las **acciones programadas de Gemini**, conectadas a Gmail y Calendar, o las tareas programadas de
  ChatGPT.

En los dos caminos vas a trabajar con **datos ficticios**: correos y planillas inventados para practicar. Así puedes equivocarte sin
que le pase nada a nadie.

:::clave
Un flujo que funciona a la primera es raro. Probar, ver qué falló y corregir es parte del trabajo, no una señal de que lo hiciste mal.
:::

## P02 · Anatomía de un flujo: disparador, acciones y datos
cubre: S1
fuentes: F-M5-07, F-M5-09
bloque: Proceso (process block) en 3 partes

Todo flujo automatizado tiene tres elementos. Las plataformas les dan nombres un poco distintos, pero la idea es la misma.

1. **Disparador.** Es el evento que inicia el flujo. Por ejemplo: «llega un correo nuevo a la bandeja de entrada». Microsoft lo
   llama *desencadenador*; Zapier, *trigger*.
2. **Acciones.** Son lo que el flujo hace después, una o varias. Por ejemplo: «resumir el correo con IA» y «agregar una fila a la
   planilla».
3. **Datos.** Es la información que pasa de un paso al siguiente: el remitente, el asunto y el texto del correo viajan hasta la IA,
   y lo que responde la IA viaja hasta la planilla.

Zapier llama a sus flujos *Zaps* y los define así: un disparador seguido de una o más acciones, que conectan aplicaciones distintas.

:::ejemplo El flujo que Andrés tiene en la cabeza
Andrés quiere que, cada vez que marque un despacho como «atrasado» en su planilla de despachos (**disparador**), la IA redacte el
aviso al cliente con su plantilla (**acción 1**) y lo deje en la columna «Borrador» de esa fila (**acción 2**). Los **datos** son el
pedido, la empresa cliente y la nueva fecha, y el borrador que escribe la IA.
:::

:::actividad Encuentra las tres partes
Lee este flujo y marca cuál es el disparador, cuáles las acciones y cuáles los datos: «Cuando alguien completa el formulario de
consultas, la IA clasifica la consulta y se agrega una fila con el nombre, la consulta y la categoría».
:::

## P03 · Tres tipos de disparador
cubre: S1, S2
fuentes: F-M5-07, F-H-55, F-H-61
bloque: Pestañas (tabs) con los tres tipos

La documentación de Power Automate distingue tres tipos de flujo según su disparador. Sirven para cualquier herramienta:

| Tipo | Cuándo se inicia | Ejemplo |
|---|---|---|
| **Automatizado** | Cuando ocurre un evento | Llega un correo, se agrega una fila |
| **Instantáneo o manual** | Cuando alguien aprieta un botón, también desde el teléfono | Apretar «registrar» al terminar una tarea |
| **Programado** | En una fecha, hora y frecuencia | Todos los días a las 8:00 |

Elegir bien el disparador es la primera decisión de diseño. Si tu tarea depende de que llegue algo, como un correo o un formulario, te
sirve uno automatizado. Si se hace siempre a la misma hora, como un resumen diario, te sirve uno programado.

Los dos caminos del celular usan disparadores **programados**. Las acciones programadas de Gemini preparan, por ejemplo, un resumen
de tus correos o de tu calendario a la hora que elijas. Las tareas programadas de ChatGPT, en la cuenta gratuita, se repiten como
máximo una vez al día y en franjas amplias (mañana, tarde o noche), sin hora exacta.

:::comprueba
Camila quiere, cada mañana, una lista de los correos con documentos nuevos de su cuenta de práctica. ¿Qué disparador le sirve?
- a) Automatizado: cuando llega un correo
- **b) Programado: todos los días a una hora**
- c) Manual: cuando aprieta un botón
Retroalimentación: La lista se hace a una hora fija, todos los días. Eso es un disparador programado.
:::

## P04 · Condiciones y datos entre pasos
cubre: S1, A1
fuentes: F-M5-08, F-M5-09, F-M5-10
bloque: Texto + imagen (flujo con dos ramas)

Dos piezas más completan el flujo.

**La condición.** Hace que el flujo siga, o haga algo distinto, solo si se cumple una regla. En Power Automate una condición tiene dos
ramas, una si la regla es verdadera y otra si es falsa. Para armarla se elige un dato de un paso anterior, un operador (por ejemplo
«contiene» o «es mayor o igual que») y un valor. Zapier tiene **filtros**, que dejan seguir el flujo solo si se cumple la condición, y
**rutas**, que hacen acciones distintas según el caso.

**El mapeo de datos.** Para que un dato pase de un paso a otro, se **mapea**: en el campo del paso siguiente eliges el dato que viene
del paso anterior. Si en vez de mapear escribes un texto a mano, ese texto se repetirá igual en cada ejecución. Si mapeas, el flujo
usa el dato real de cada evento. El mapeo solo va de pasos anteriores a posteriores.

:::ejemplo Condición y mapeo en el flujo de Andrés
Andrés pone una condición: seguir solo si la columna «Estado» **contiene** «atrasado». En la instrucción para la IA, el número de
pedido lo mapea desde la fila de la planilla. Así cada borrador trae el pedido que corresponde.
:::

:::error Escribir el dato a mano en vez de mapearlo
Si en el campo «Remitente» escribes el correo de un cliente de prueba, todas las filas dirán lo mismo, aunque escriban personas
distintas. El dato que cambia en cada ejecución se mapea desde el paso anterior.
:::

## P05 · Herramientas no-code: cuál sirve gratis
cubre: S2
fuentes: F-H-93, F-H-94, F-H-95, F-H-96, F-H-97, F-H-98, F-H-99, F-H-55, F-H-61
bloque: Tabla comparativa + texto

Las plataformas **no-code** arman flujos eligiendo disparadores y acciones ya hechos, sin programar. Hay muchas, pero en su versión
gratuita no todas permiten un flujo de 3 a 5 pasos con IA:

| Herramienta | Plan gratuito | ¿Sirve para este laboratorio? |
|---|---|---|
| **Make** | 1.000 créditos al mes; varios pasos; la IA gasta más créditos | **Sí, con computador** |
| **Acciones programadas de Gemini** | Hasta 10 activas, con Gmail y Calendar conectados | **Sí, en el celular** (se está habilitando de a poco) |
| **Tareas programadas de ChatGPT** | 3 tareas, como máximo una vez al día | Plan B en el celular |
| Zapier | 100 tareas al mes, solo 2 pasos | No: los flujos de más pasos son de pago |
| IFTTT | 2 applets, sin varios pasos ni IA | No |
| Power Automate (nube) | Ya no acepta cuentas personales de Gmail u Outlook | No |
| n8n | En la nube, solo planes pagados; gratis si lo instalas en un servidor propio | No, para este curso |
| Google Apps Script | Gratis con cuenta Gmail, con cuotas diarias | Solo como opción avanzada: es código |

Los planes gratuitos cambian seguido. Antes de empezar, revisa qué ofrece hoy la herramienta que elijas.

:::error «Si es gratis, sirve para cualquier flujo»
Varias plataformas son gratis, pero con límites que importan: Zapier gratis solo permite un disparador y una acción, e IFTTT gratis no
tiene IA. Revisa el límite de pasos antes de diseñar.
:::

## P06 · Conectar servicios sin exponer tus datos
cubre: S3, A1
fuentes: F-M5-07, F-M5-09, F-H-62, F-H-61, F-H-15
bloque: Texto + recuadro destacado

Un flujo conecta servicios distintos: tu correo, una planilla, el calendario y la IA. Esa conexión se hace con **conectores**: cada
servicio ofrece sus propios disparadores y acciones ya preparados. Para usarlos, la plataforma te pide **iniciar sesión en el
servicio y darle permiso** para leer o escribir en tu cuenta.

En el camino del celular, Gemini usa sus **aplicaciones conectadas**: con ellas puede resumir correos de Gmail y crear eventos en
Google Calendar. Las acciones programadas exigen una cuenta personal y tener la actividad guardada. Si la apagas, las aplicaciones
conectadas quedan limitadas.

Esto tiene un costo en privacidad. Según Google, con la actividad guardada, revisores humanos pueden leer conversaciones para mejorar
sus servicios. Lo viste en el módulo 3.

Por eso, para este laboratorio, el curso te recomienda:
- usar, si puedes, una **cuenta de Gmail solo para practicar**;
- trabajar con **correos y planillas ficticios**, sin nombres, RUT ni teléfonos reales;
- leer qué permisos pide cada conexión antes de aceptar.

:::clave
Conectar un servicio es darle llaves de tu cuenta a otra herramienta. Hazlo con una cuenta de práctica y con datos inventados hasta que
el flujo esté probado.
:::

:::ejemplo Los correos de prueba de Camila
Camila crea una cuenta de Gmail para el curso. Se envía tres correos inventados de «clientes» con asunto «[PRUEBA] Consulta», sin
datos de personas reales. Esos serán sus datos de práctica.
:::

## P07 · Diseña el flujo antes de construirlo
cubre: H1, A1
fuentes: F-M5-06, F-M5-10
bloque: Tabla + ordenar pasos (sorting activity)

Antes de abrir una herramienta, **dibuja el flujo en una tabla**. La guía de la Universidad de Bath pide documentar el propósito de
cada flujo, sus entradas, sus salidas y sus dependencias. Hacerlo antes te evita armar pasos que después no encajan.

Este es el flujo del laboratorio, «Registro de consultas»:

| N.º | Tipo | Servicio | Recibe | Entrega |
|---|---|---|---|---|
| 1 | Disparador | Gmail | Correo nuevo | Remitente, asunto, texto, fecha |
| 2 | Condición | — | Asunto | Sigue solo si contiene «[PRUEBA]» |
| 3 | Acción con IA | IA | Asunto y texto | Categoría y resumen en una línea |
| 4 | Acción | Google Sheets | Fecha, remitente, respuesta de la IA | Una fila nueva |

Son cuatro pasos. Si quieres un quinto, agrega uno que te avise cuando la categoría sea «reclamo».

Fíjate en el orden: cada paso solo puede usar datos de los pasos **anteriores**. La IA no puede trabajar con un correo que todavía no
llegó, y la planilla no puede anotar una categoría que la IA aún no escribió.

:::actividad Ordena los pasos
Ordena este flujo de Andrés: (a) escribir el borrador en la columna «Borrador»; (b) Andrés marca un despacho en la planilla; (c) la
IA redacta el aviso con la plantilla; (d) seguir solo si el estado contiene «atrasado». → Orden correcto: b, d, c, a.
:::

:::clave
Pide ayuda a Gemini para el diseño: describe tu tarea y pídele la tabla de pasos con lo que recibe y entrega cada uno. Después revisa
que el orden de los datos tenga sentido.
:::

## P08 · Laboratorio con Make (1): preparar y crear el disparador
cubre: H1, S2, S3
fuentes: F-H-94, F-M5-09
bloque: Proceso paso a paso

Este camino necesita un computador con navegador. Make llama **escenarios** a sus flujos y **módulos** a sus pasos. El plan gratuito
da **1.000 créditos al mes**: cada acción de un módulo, como leer un correo o escribir una fila en Google Sheets, suele gastar un
crédito, y las funciones de IA pueden gastar más. Si se acaban, los escenarios se detienen. Para probar, alcanza de sobra.

1. **Prepara los datos ficticios.** Crea en Google Sheets una planilla «Registro de consultas (prueba)» con cuatro columnas: Fecha,
   Remitente, Asunto y Análisis de la IA. Envíate tres correos inventados con asunto «[PRUEBA] …»: un pedido, un reclamo y una
   consulta general.
2. **Crea tu cuenta gratuita en Make** y un escenario nuevo.
3. **Ponle un nombre claro:** «M5 · Registro de consultas · v1». Así sabrás qué hace y qué versión es.
4. **Agrega el primer módulo: Gmail.** Elige leer los correos nuevos de tu bandeja de entrada.
5. **Conecta tu cuenta de práctica.** Make te pedirá permiso para acceder a Gmail. Lee qué pide y acepta.
6. **Trae un correo de prueba.** Al configurar el disparador, las plataformas no-code suelen traer un registro existente para
   armar los pasos siguientes; así lo hace Zapier, por ejemplo. Verifica que aparezca uno de tus correos «[PRUEBA]».

:::error Probar con la bandeja de entrada real
Si conectas tu correo personal sin condición, el flujo podría mandar a la IA correos con datos tuyos o de otras personas. Usa la
cuenta de práctica y agrega la condición «[PRUEBA]» antes de la IA (siguiente pantalla).
:::

## P09 · Laboratorio con Make (2): condición, IA y planilla
cubre: H1, S1, S3, C1
fuentes: F-M5-08, F-M5-10, F-H-94
bloque: Proceso paso a paso

Ahora completas los pasos 2 a 4 del diseño de P07.

7. **Agrega la condición** entre Gmail y el paso siguiente: que el flujo siga solo si el **asunto contiene** «[PRUEBA]». Elige el
   asunto desde los datos del módulo de Gmail, el operador «contiene» y el valor «[PRUEBA]».
8. **Agrega el módulo de IA.** Escribe la instrucción y mapea los datos del correo donde corresponde:
   «Clasifica esta consulta en una sola categoría: pedido, reclamo u otra. Luego resúmela en una línea. Responde así:
   Categoría: … · Resumen: … No agregues datos que no estén en el correo. Asunto: [asunto] · Texto: [texto del correo]».
   Donde dice [asunto] y [texto del correo], **mapea** los campos de Gmail; no los escribas a mano.
9. **Agrega el módulo de Google Sheets** para agregar una fila en tu planilla de prueba. Mapea Fecha, Remitente y Asunto desde Gmail,
   y Análisis de la IA desde la respuesta del módulo de IA.
10. **Guarda el escenario** con su nombre.

Ya tienes un flujo de **cuatro pasos**: disparador, condición, IA y planilla.

:::ejemplo La primera fila de Camila
Camila ejecuta el escenario con su correo «[PRUEBA] Pedido de 20 resmas». En la planilla aparece: la fecha, su correo de práctica, el
asunto y «Categoría: pedido · Resumen: solicita 20 resmas de papel para el lunes». El flujo funciona.
:::

:::clave
Puedes pedirle a Gemini que mejore la instrucción del paso 8. Pégale tu versión y pregúntale qué ambigüedades tiene.
:::

## P10 · Camino en el celular: acciones programadas de Gemini
cubre: H1, S2, S3
fuentes: F-H-61, F-H-62, F-H-55
bloque: Proceso paso a paso + recuadro

Si no tienes computador, puedes armar un flujo **programado** con Gemini. La app permite hasta **10 acciones programadas** activas en
Android, iPhone o la web, con una cuenta personal y la actividad guardada. Google la está habilitando de a poco, así que puede que
todavía no aparezca en tu cuenta: si no la ves, usa el plan B de abajo.

1. **Conecta Gmail y Calendar** en las aplicaciones conectadas de Gemini.
2. **Pide a Gemini que programe una acción diaria**, con un texto como este: «Todos los días a las 8:00, revisa los correos de Gmail
   de las últimas 24 horas cuyo asunto empiece con [PRUEBA]. Para cada uno, dame su categoría (pedido, reclamo u otra) y un resumen de
   una línea. Si alguno menciona una fecha de entrega o de reunión, propónme un evento con título, fecha y hora. No crees eventos sin
   que yo lo confirme».
3. **Revisa el resultado** cuando llegue y, si está bien, pide a Gemini que **cree el evento** en Calendar.

Son cinco pasos: disparador programado, datos de Gmail filtrados por asunto, IA que clasifica y resume, entrega del resultado y
evento en Calendar después de tu revisión.

**Plan B: tareas programadas de ChatGPT.** La cuenta gratuita permite 3 tareas activas, que se repiten como máximo una vez al día, y
avisa por notificación o por correo. No puede activarse con un correo de Gmail. Sirve para un flujo más simple: cada mañana, la IA te
prepara por correo una lista de seguimiento a partir de datos ficticios que dejas escritos en la tarea.

## P11 · Prueba tu flujo como si fuera a fallar
cubre: S4, C2, A2
fuentes: F-M5-06, F-M5-09
bloque: Tabla + actividad

Que el flujo funcione con un correo no significa que esté listo. La guía de Bath pide probar **la mayor cantidad posible de
escenarios** antes de poner un flujo en marcha. Probar es buscar a propósito los casos en que podría fallar.

Arma un **plan de pruebas** con datos ficticios. Para cada caso, anota qué esperas y qué pasó:

| Caso de prueba | Resultado esperado | Resultado obtenido |
|---|---|---|
| Correo «[PRUEBA]» con un pedido | Fila con categoría «pedido» | |
| Correo «[PRUEBA]» con un reclamo | Fila con categoría «reclamo» | |
| Correo **sin** «[PRUEBA]» en el asunto | No pasa nada: la condición lo detiene | |
| Correo «[PRUEBA]» casi vacío | La IA responde «otra» y no inventa | |
| Dos correos «[PRUEBA]» seguidos | Dos filas, cada una con sus datos | |

El tercer caso es clave: comprueba que tu condición protege los correos que no son de prueba. El cuarto revisa si la IA inventa
contenido cuando le falta información. Si usas el camino del celular, adapta el resultado esperado: en vez de filas, revisa que el
resumen de Gemini traiga cada correo «[PRUEBA]» con su categoría, deje fuera el que no lo tiene y no cree eventos sin tu confirmación.

:::actividad Corre tu plan de pruebas
Envía los cinco correos de prueba y completa la tabla. Marca con una X cada caso en que lo obtenido no coincide con lo esperado.
Esas son las fallas que corregirás en la pantalla siguiente.
:::

:::clave
Cada prueba gasta créditos o usos del plan gratuito. Cinco casos bien elegidos valen más que cincuenta iguales.
:::

## P12 · Lee el error y corrige
cubre: S4, C2, A2
fuentes: F-M5-11, F-M5-10, F-H-94
bloque: Texto + escenario de diagnóstico

Cuando un flujo falla, no adivines: **busca dónde falló**. Las plataformas guardan un historial de ejecuciones. En Zapier, por ejemplo,
se abre la ejecución con error, se ubica el paso que falló y se leen su diagnóstico y el mensaje de error. Busca la opción equivalente
en la herramienta que uses. Una vez corregida la causa, Zapier permite **volver a ejecutar** lo que falló para no perder datos.

Fallas frecuentes y qué revisar:
- **Todas las filas dicen lo mismo:** un campo quedó escrito a mano en vez de mapeado.
- **Un campo aparece vacío:** el mapeo se rompió. Reordenar o duplicar pasos, o cambiar de aplicación, puede romperlo; Zapier lo marca
  con una advertencia amarilla.
- **El flujo no corre:** el disparador no detectó el correo, o la condición está mal escrita.
- **El escenario se detuvo:** en Make, se acabaron los créditos del mes.

Después de cada corrección, **vuelve a correr la prueba** que falló.

:::comprueba
En la planilla de Andrés, todos los borradores dicen «pedido 412», aunque los despachos atrasados son distintos. ¿Cuál es el error
más probable?
- a) La IA está inventando el número de pedido
- **b) El número se escribió a mano en vez de mapearlo desde la fila**
- c) Se acabaron los créditos
Retroalimentación: Un texto fijo se repite en cada ejecución. El pedido debe mapearse desde el dato de la planilla.
:::

:::error «Si falló, la herramienta no sirve»
La mayoría de las fallas están en la configuración: un mapeo, una condición, un permiso. Leer el error y corregir es la parte normal
del trabajo con flujos.
:::

## P13 · Prolijidad: documenta tu flujo
cubre: A1, C1
fuentes: F-M5-06, F-M5-09, F-M5-10
bloque: Texto + lista de verificación (checklist)

Un flujo que solo entiende quien lo armó es frágil. Si mañana falla, o si otra persona tiene que revisarlo, la documentación hace la
diferencia. La guía de Bath pide documentar el propósito, las entradas, las salidas y las dependencias, usar nombres claros y
monitorear los flujos: apaga los que fallan una y otra vez o los que llevan 30 días sin activarse.

Arma una **ficha del flujo** con esta lista:
- [ ] **Nombre** con una convención: módulo, propósito y versión (por ejemplo, «M5 · Registro de consultas · v2»).
- [ ] **Propósito:** qué tarea resuelve y para quién.
- [ ] **Disparador:** qué lo inicia.
- [ ] **Pasos:** la tabla de P07, actualizada.
- [ ] **Datos que entran y que salen** de cada paso.
- [ ] **Dependencias:** cuentas conectadas, planilla, créditos o límites del plan.
- [ ] **Pruebas:** tu tabla de P11, con lo que corregiste.

Un flujo es **funcional** cuando el disparador se activa y cada acción recibe los datos correctos del paso anterior. Tu tabla de
pruebas es la evidencia.

:::comprueba
¿Cuándo puedes decir que tu flujo es funcional?
- a) Cuando lo guardaste sin errores
- **b) Cuando el disparador se activa y cada paso recibe los datos correctos del anterior, comprobado con pruebas**
- c) Cuando la IA responde algo
Retroalimentación: Guardar no es probar. Funciona cuando cada paso hace lo que debe con los datos reales de cada ejecución, y lo
compruebas con tu plan de pruebas.
:::

## P14 · Cierre: tu prototipo de flujo
cubre: H1, C1, C2, A2
fuentes: F-M5-06, F-M5-11
bloque: Texto + actividad de cierre (entrega)

En este tema armaste un flujo con sus tres elementos: **disparador, acciones y datos**, más una **condición**. Elegiste una
herramienta según lo que permite su plan gratuito, conectaste servicios con una cuenta de práctica, y lo **probaste y corregiste** con
datos ficticios.

:::actividad Tu flujo para el proyecto
Toma la tarea que marcaste en tu matriz del tema 1:
1. **Diseña** su flujo en una tabla, como en P07, con 3 a 5 pasos. Al menos uno debe usar IA y otro, correo, planilla o calendario.
2. **Constrúyelo** en Make o con las acciones programadas de Gemini. Usa datos ficticios.
3. **Pruébalo** con al menos cuatro casos, incluido uno que debería detenerse.
4. **Corrige** lo que falló y anota qué cambiaste.
5. **Documenta** el flujo con la ficha de P13.

Guarda capturas de pantalla del flujo y de tu tabla de pruebas, sin datos reales.
:::

:::clave
Tu flujo todavía funciona sin control humano. En el próximo tema vas a decidir dónde debe revisar una persona y qué hacer si algo sale
mal.
:::

## Ideas clave

1. Un flujo automatizado tiene un disparador que lo inicia, una o más acciones y datos que pasan de un paso al siguiente.
2. Los disparadores pueden ser automatizados (tras un evento), manuales (con un botón) o programados (fecha, hora y frecuencia).
3. Una condición hace que el flujo siga solo si se cumple una regla; los datos se mapean desde pasos anteriores, porque un texto
   escrito a mano se repite igual siempre.
4. En planes gratuitos, Make permite flujos de varios pasos con IA desde un computador; en el celular, las acciones programadas de
   Gemini o las tareas programadas de ChatGPT. Zapier e IFTTT gratis no alcanzan para 3 a 5 pasos.
5. Conectar servicios es dar permisos sobre una cuenta: practica con una cuenta de prueba y datos ficticios.
6. Probar es buscar los casos en que el flujo podría fallar; ante un error, se revisa el historial, se corrige la causa y se vuelve a
   probar.
7. Documentar nombre, propósito, pasos, datos, dependencias y pruebas hace que el flujo se pueda revisar y mantener.

## Glosario

- **Flujo automatizado**: cadena de pasos que se ejecuta sola cuando ocurre un evento o llega una hora definida.
- **No-code**: forma de crear flujos o aplicaciones eligiendo bloques ya hechos, sin escribir código.
- **Disparador**: evento que inicia un flujo, como la llegada de un correo o una hora programada.
- **Acción**: lo que hace el flujo después del disparador, como resumir un texto o agregar una fila.
- **Condición**: regla que decide si el flujo sigue o qué camino toma, según un dato de un paso anterior.
- **Filtro (en un flujo)**: condición que deja seguir el flujo solo si se cumple una regla.
- **Mapear un campo**: conectar un dato que sale de un paso con un campo de un paso posterior.
- **Conector**: componente que une una plataforma con un servicio, como Gmail o Google Sheets, y ofrece sus disparadores y acciones.
- **Datos de prueba**: datos ficticios o de ejemplo que se usan para armar y probar un flujo sin arriesgar información real.
- **Plan de pruebas**: lista de casos con su resultado esperado, para comprobar si un flujo funciona.
- **Historial de ejecuciones**: registro de cada vez que corrió un flujo, con los pasos que funcionaron y los que fallaron.
- **Escenario**: nombre que Make da a un flujo; sus pasos se llaman módulos.
- **Crédito**: unidad con que Make cuenta el uso del plan; cada acción de un módulo suele gastar uno.
- **Acción programada**: pedido a Gemini que se ejecuta solo, en un día y hora definidos.

## Conexión con el proyecto

El flujo que construiste y probaste en la actividad de cierre (P14) es el **prototipo del Hito 5 del proyecto aplicado: prototipo de
automatización de un paso del proceso, con supervisión humana**. Automatiza el paso que elegiste con tu matriz del tema 1, dentro del
desafío laboral que vienes trabajando desde el Hito 1. Tu ficha (P13) y tu tabla de pruebas (P11) son parte de la entrega. En el tema 3
le agregarás los puntos de supervisión humana y el plan de contingencia que exige el hito.

## Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M5.md` y `investigacion/HERRAMIENTAS-2.md` (consultadas el 24-10-2026).

- F-M5-06 · University of Bath (s. f.). Automation standards for Microsoft Power Automate. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
- F-M5-07 · Microsoft Learn (2026). Desencadenadores (Triggers) - Power Automate. https://learn.microsoft.com/es-es/power-automate/triggers-introduction
- F-M5-08 · Microsoft Learn (2022). Agregar una condición a un flujo de nube en Power Automate. https://learn.microsoft.com/es-es/power-automate/add-condition
- F-M5-09 · Zapier Help Center (2026). Learn key concepts in Zap workflows. https://help.zapier.com/hc/en-us/articles/8496181725453-Learn-key-concepts-in-Zapier
- F-M5-10 · Zapier Help Center (2026). Send data between steps by mapping fields. https://help.zapier.com/hc/en-us/articles/8496343026701
- F-M5-11 · Zapier Help Center (2026). How to troubleshoot errors in Zap workflows. https://help.zapier.com/hc/en-us/articles/8496037690637
- F-H-15 · Google (s. f.). Centro de Privacidad de las Aplicaciones de Gemini. https://support.google.com/gemini/answer/13594961?hl=es
- F-H-55 · OpenAI (2026). Scheduled tasks in ChatGPT. https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt
- F-H-61 · Google (s. f.). Acciones programadas en las aplicaciones de Gemini (Android). https://support.google.com/gemini/answer/16316416?hl=es&co=GENIE.Platform%3DAndroid
- F-H-62 · Google (s. f.). Utilizar y gestionar Aplicaciones conectadas en Gemini. https://support.google.com/gemini/answer/13695044?hl=es
- F-H-93 · Zapier (2026). Plans & Pricing. https://zapier.com/pricing
- F-H-94 · Make (s. f.). Pricing. https://www.make.com/pricing
- F-H-95 · n8n (s. f.). Pricing. https://n8n.io/pricing/
- F-H-96 · n8n (s. f.). Community edition features. https://docs.n8n.io/hosting/community-edition-features/
- F-H-97 · Microsoft (2026). Cambios importantes (retiradas) en Power Platform. https://learn.microsoft.com/en-us/power-platform/important-changes-coming
- F-H-98 · IFTTT (s. f.). Plans. https://ifttt.com/plans
- F-H-99 · Google (2026). Apps Script: cuotas de los servicios de Google. https://developers.google.com/apps-script/guides/services/quotas

Pendiente de probar a mano antes de publicar:
- **Acciones programadas de Gemini (P10):** la ayuda en español no exige plan (F-H-61), pero la tabla de límites (F-H-60) parece
  dejarlas en planes de pago. **Pilotear con una cuenta gratuita en Chile antes de publicar.** Comprobar también si se crean con un
  pedido en lenguaje natural, si filtran por asunto y si pueden proponer eventos de Calendar.
- **Tareas programadas de ChatGPT (P10):** la página de precios (F-H-54) las muestra como función de Plus, pero la ayuda (F-H-55) da 3
  tareas a las cuentas Free. Confirmar en la app.
- **Make (P08, P09, P12):** las fuentes confirman el plan gratuito, los créditos y los módulos que leen correos y escriben filas en
  Google Sheets (F-H-94). No confirman los nombres exactos de los módulos de Gmail e IA, la forma de poner la condición (filtro) entre
  módulos, el historial de ejecuciones ni si el editor funciona en el celular. Recorrer el laboratorio completo con una cuenta
  gratuita y ajustar los pasos.
