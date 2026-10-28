# M5-AE2 · Flujos simples con IA

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-H-94, F-H-61
bloque: Texto

En el tema anterior elegiste una tarea para automatizar. Ahora la vas a convertir en un **flujo**: una cadena de pasos que se pone en
marcha sola y que conecta la IA con tu correo, una planilla o tu calendario. No necesitas programar, porque vas a usar herramientas
no-code, que se arman eligiendo bloques ya hechos.

El aprendizaje esperado es este: Construir un flujo simple con una herramienta no-code que conecte IA con correo, planillas o calendario.
Al final deberías tener un flujo de 3 a 5 pasos que funcione, y haberlo probado hasta encontrar sus fallas y corregirlas.

Este tema es un laboratorio y tiene dos caminos. Si tienes un computador con navegador, vas a usar Make, que en su plan gratuito
permite flujos de varios pasos; Andrés, por ejemplo, arma el suyo en el computador de la bodega. Si solo tienes el celular, vas a usar
las acciones programadas de Gemini, conectadas a tu correo, como hace Camila. En tu empresa quizá ya exista otra herramienta de
automatización; si es así, pregunta antes si puedes usarla para este proyecto.

En los dos caminos vas a practicar con una cuenta de prueba y con datos ficticios o copias sin datos sensibles, nunca con la bandeja de
entrada real de tu trabajo. Así puedes equivocarte sin exponer información de la empresa ni de nadie. Y cuenta con equivocarte: un
flujo que funciona a la primera es raro, y probar, ver qué falló y corregir es parte del trabajo.

## P02 · Anatomía de un flujo: disparador, acciones y datos
cubre: S1
fuentes: F-M5-07, F-M5-09
bloque: Proceso (process block) en 3 partes + actividad

Todo flujo automatizado tiene tres elementos. Las plataformas les dan nombres un poco distintos, pero la idea es la misma. El
**disparador** es el evento que inicia el flujo, por ejemplo «llega un correo nuevo a la bandeja de entrada»; Microsoft lo llama
desencadenador y Zapier, trigger. Las acciones son lo que el flujo hace después, una o varias, como resumir el correo con IA y agregar
una fila a una planilla. Y los datos son la información que pasa de un paso al siguiente: el remitente, el asunto y el texto del correo
viajan hasta la IA, y lo que responde la IA viaja hasta la planilla.

Zapier llama a sus flujos Zaps y los define justamente así: un disparador seguido de una o más acciones, que conectan aplicaciones
distintas.

Andrés ya tiene su flujo en la cabeza. Cada vez que marque un despacho como «atrasado» en su planilla de despachos, ese será el
disparador. La IA redactará el aviso al cliente con su plantilla y lo dejará en la columna «Borrador» de esa fila: esas son las dos
acciones. Los datos son el número de pedido, la empresa cliente, la nueva fecha y el borrador que escribe la IA.

:::actividad Encuentra las tres partes
Lee este flujo y marca cuál es el disparador, cuáles las acciones y cuáles los datos: «Cuando un proveedor completa el formulario de
consultas, la IA clasifica la consulta y se agrega una fila con el nombre del proveedor, la consulta y la categoría».
:::

## P03 · Tres tipos de disparador
cubre: S1, S2
fuentes: F-M5-07, F-H-61
bloque: Tabla + comprueba

La documentación de Power Automate distingue tres tipos de flujo según su disparador, y la distinción sirve para cualquier
herramienta:

| Tipo | Cuándo se inicia | Ejemplo |
|---|---|---|
| Automatizado | Cuando ocurre un evento | Llega un correo, se agrega una fila |
| Instantáneo o manual | Cuando alguien aprieta un botón, también desde el teléfono | Apretar «registrar» al terminar una tarea |
| Programado | En una fecha, hora y frecuencia | Todos los días a las 8:00 |

Elegir el disparador es la primera decisión de diseño. Si tu tarea depende de que llegue algo, como un correo o un formulario, te sirve
uno automatizado. Si se hace siempre a la misma hora, como un resumen diario, te sirve uno programado. Y si quieres decidir tú el
momento, uno manual.

El camino del celular usa disparadores programados. Las acciones programadas de Gemini preparan, por ejemplo, un resumen de tus correos
o de tu calendario a la hora que elijas, siempre que la aplicación correspondiente esté conectada.

:::comprueba
Camila quiere, cada mañana, una lista de los correos con documentos nuevos de su cuenta de práctica. ¿Qué disparador le sirve?
- a) Automatizado: cuando llega un correo
- **b) Programado: todos los días a una hora**
- c) Manual: cuando aprieta un botón
Retroalimentación: La lista se hace a una hora fija, todos los días. Eso es un disparador programado.
:::

## P04 · Condiciones y datos entre pasos
cubre: S1, A1
fuentes: F-M5-08, F-M5-10
bloque: Texto + imagen (flujo con dos ramas) + recuadro de error

Dos piezas más completan el flujo. La primera es la **condición**, que hace que el flujo siga, o haga algo distinto, solo si se cumple
una regla. En Power Automate una condición tiene dos ramas, una para cuando la regla es verdadera y otra para cuando es falsa. Para
armarla se elige un dato de un paso anterior, un operador, como «contiene» o «es mayor o igual que», y un valor. Otras plataformas
tienen piezas parecidas con otros nombres, como los filtros, que dejan seguir el flujo solo si se cumple la regla.

La segunda pieza es el **mapeo de datos**. Para que un dato pase de un paso a otro, en el campo del paso siguiente eliges el dato que
viene del paso anterior. Si en vez de mapear escribes un texto a mano, ese texto se repetirá igual en cada ejecución; si mapeas, el
flujo usa el dato real de cada evento. El mapeo solo va de pasos anteriores a posteriores.

En el flujo de Andrés las dos piezas trabajan juntas. La condición deja seguir solo las filas cuya columna «Estado» contiene
«atrasado», y en la instrucción para la IA el número de pedido va mapeado desde la fila de la planilla. Así cada borrador trae el
pedido que corresponde.

:::error Escribir el dato a mano en vez de mapearlo
Si en el campo «Remitente» escribes el correo de un proveedor de prueba, todas las filas dirán lo mismo, aunque escriban personas
distintas. El dato que cambia en cada ejecución se mapea desde el paso anterior.
:::

## P05 · Herramientas no-code: cuál sirve gratis
cubre: S2
fuentes: F-H-94, F-H-93
bloque: Texto + recuadro de error

Las plataformas **no-code** arman flujos con disparadores y acciones ya hechos, sin programar. Hay muchas, pero en su versión gratuita no
todas permiten un flujo de 3 a 5 pasos con IA, que es lo que pide este laboratorio. Por eso, antes de diseñar, conviene mirar dos
límites: cuántos pasos permite el plan gratuito y si incluye IA.

Make cumple con las dos cosas. Su plan gratuito da 1.000 créditos al mes y permite escenarios de varios pasos. Cada acción de un
módulo, como leer un correo o escribir una fila en Google Sheets, suele gastar un crédito, y las funciones de IA pueden gastar más. Si
los créditos se acaban, los escenarios se detienen. Para practicar alcanzan de sobra, siempre que no los gastes en pruebas repetidas.

Zapier, en cambio, da en su plan gratuito 100 tareas al mes y solo permite flujos de dos pasos: un disparador y una acción. Los flujos
de varios pasos y los campos de IA están en los planes de pago. Sirve para conectar dos servicios, pero no para este laboratorio.

En el celular, el camino son las acciones programadas de Gemini, que vas a ver en P10. Y si en tu empresa usan otra plataforma con una
cuenta del trabajo, puede servirte, siempre que tu empresa lo autorice. Ten presente que los planes gratuitos cambian seguido: antes de
empezar, revisa qué ofrece hoy la herramienta que elijas.

:::error «Si es gratis, sirve para cualquier flujo»
Varias plataformas son gratis, pero con límites que importan. Zapier gratis, por ejemplo, solo permite un disparador y una acción.
Revisa el límite de pasos y si el plan incluye IA antes de diseñar.
:::

## P06 · Conectar servicios sin exponer datos de tu empresa
cubre: S3, A1
fuentes: F-M5-07, F-H-15
bloque: Texto + ejemplo

Un flujo conecta servicios distintos: el correo, una planilla, el calendario y la IA. Para eso las plataformas usan **conectores**,
piezas listas que cada servicio ofrece con sus propios disparadores y acciones. Al usar un conector, la plataforma te pide iniciar
sesión en el servicio y darle permiso para leer o escribir en tu cuenta. En la práctica, conectar un servicio es entregarle a otra
herramienta llaves de tu cuenta.

En el camino del celular pasa algo parecido: Gemini se conecta con tu correo, y para las acciones programadas necesita la actividad
guardada, como verás en P10. Ese ajuste tiene un costo en privacidad que ya viste en el módulo 3. Según Google, con la actividad
guardada, revisores humanos pueden leer conversaciones para mejorar sus servicios.

Como en tu trabajo manejas información real, el curso te recomienda practicar con una cuenta de Gmail creada solo para el laboratorio,
enviarte correos inventados o copias de documentos sin nombres, RUT ni teléfonos reales, y leer qué permisos pide cada conexión antes de
aceptar. Cuando el flujo esté probado y tenga sus controles, será tu empresa la que decida si se puede usar con los datos reales.

:::ejemplo La cuenta de práctica de Camila
Camila crea una cuenta de Gmail para el curso, para probar sin exponer datos de la constructora. Se envía tres correos inventados de
proveedores con asunto «[PRUEBA] Consulta», sin datos de personas reales. Esos serán sus datos de práctica.
:::

## P07 · Diseña el flujo antes de construirlo
cubre: H1, A1
fuentes: F-M5-06, F-M5-10
bloque: Tabla + ordenar pasos (sorting activity)

Antes de abrir una herramienta, dibuja el flujo en una tabla. La guía de la Universidad de Bath pide documentar de cada flujo su
propósito, sus entradas, sus salidas y sus dependencias, y hacerlo antes de construir te evita armar pasos que después no encajan. Este
es el flujo del laboratorio, «Registro de consultas»:

| N.º | Tipo | Servicio | Recibe | Entrega |
|---|---|---|---|---|
| 1 | Disparador | Gmail | Correo nuevo | Remitente, asunto, texto, fecha |
| 2 | Condición | — | Asunto | Sigue solo si contiene «[PRUEBA]» |
| 3 | Acción con IA | IA | Asunto y texto | Categoría y resumen en una línea |
| 4 | Acción | Google Sheets | Fecha, remitente, respuesta de la IA | Una fila nueva |

Son cuatro pasos. Si quieres un quinto, agrega uno que te avise cuando la categoría sea «reclamo». Fíjate en el orden: cada paso solo
puede usar datos de los pasos anteriores. La IA no puede trabajar con un correo que todavía no llegó, y la planilla no puede anotar una
categoría que la IA aún no escribió.

Gemini también puede ayudarte con el diseño. Descríbele tu tarea y pídele la tabla de pasos con lo que recibe y entrega cada uno;
después revisa tú que el orden de los datos tenga sentido.

:::actividad Ordena los pasos
Ordena este flujo de Andrés: (a) escribir el borrador en la columna «Borrador»; (b) Andrés marca un despacho en la planilla; (c) la
IA redacta el aviso con la plantilla; (d) seguir solo si el estado contiene «atrasado». → Orden correcto: b, d, c, a.
:::

## P08 · Laboratorio con Make (1): preparar y crear el disparador
cubre: H1, S2, S3
fuentes: F-H-94, F-M5-09
bloque: Proceso paso a paso + recuadro de error

Este camino necesita un computador con navegador. Make llama escenarios a sus flujos y módulos a sus pasos. Como viste en P05, el plan
gratuito da 1.000 créditos al mes, y para probar alcanza de sobra. En esta primera parte preparas los datos de práctica y creas el
disparador.

1. Crea en Google Sheets una planilla «Registro de consultas (prueba)» con cuatro columnas: Fecha, Remitente, Asunto y Análisis de la IA. Envía a tu cuenta de práctica tres correos inventados con asunto «[PRUEBA] …»: un pedido, un reclamo y una consulta general.
2. Crea tu cuenta gratuita en Make y un escenario nuevo.
3. Ponle un nombre claro, como «M5 · Registro de consultas · v1», para saber qué hace y qué versión es.
4. Agrega el primer módulo, el de Gmail, y elige leer los correos nuevos de la bandeja de entrada.
5. Conecta tu cuenta de práctica. Make te pedirá permiso para acceder a Gmail: lee qué pide y acepta.
6. Trae un correo de prueba. Al configurar el disparador, las plataformas no-code suelen traer un registro existente para armar los pasos siguientes, como hace Zapier. Verifica que aparezca uno de tus correos «[PRUEBA]».

Si algo no coincide con lo que ves en pantalla, no te preocupes: las plataformas cambian los nombres de sus menús de vez en cuando. Lo
que importa es la lógica, que ya conoces de la tabla de P07.

:::error Probar con el correo del trabajo
Si conectas tu correo del trabajo, o el personal, sin condición, el flujo podría mandar a la IA correos con datos de clientes,
proveedores o compañeros. Usa la cuenta de práctica y agrega la condición «[PRUEBA]» antes de la IA, como verás en la pantalla
siguiente.
:::

## P09 · Laboratorio con Make (2): condición, IA y planilla
cubre: H1, S1, S3, C1
fuentes: F-M5-10, F-H-94
bloque: Proceso paso a paso + ejemplo

Ahora completas los pasos 2 a 4 del diseño de P07. Al terminar vas a tener un flujo de cuatro pasos: disparador, condición, IA y
planilla.

7. Agrega la condición entre Gmail y el paso siguiente: que el flujo siga solo si el asunto contiene «[PRUEBA]». Elige el asunto desde los datos del módulo de Gmail, el operador «contiene» y el valor «[PRUEBA]».
8. Agrega el módulo de IA y escribe esta instrucción: «Clasifica esta consulta en una sola categoría: pedido, reclamo u otra. Luego resúmela en una línea. Responde así: Categoría: … · Resumen: … No agregues datos que no estén en el correo. Asunto: [asunto] · Texto: [texto del correo]». Donde dice [asunto] y [texto del correo], mapea los campos de Gmail en vez de escribirlos a mano.
9. Agrega el módulo de Google Sheets para sumar una fila a tu planilla de prueba. Mapea Fecha, Remitente y Asunto desde Gmail, y Análisis de la IA desde la respuesta del módulo de IA.
10. Guarda el escenario con su nombre.

Si quieres mejorar la instrucción del paso 8, pégala en Gemini y pregúntale qué ambigüedades tiene. Lo que te sugiera, pruébalo antes de
dejarlo en el flujo.

:::ejemplo La primera fila de Camila
Camila hace este laboratorio para practicar, aunque su flujo del proyecto será con Gemini en el celular. Ejecuta el escenario con su
correo «[PRUEBA] Pedido de 20 resmas» y en la planilla aparece la fecha, su correo de práctica, el asunto y «Categoría: pedido ·
Resumen: solicita 20 resmas de papel para el lunes». El flujo funciona.
:::

## P10 · Camino en el celular: acciones programadas de Gemini
cubre: H1, S2, S3
fuentes: F-H-61, F-H-55
bloque: Proceso paso a paso + texto

Si no tienes computador, puedes armar un flujo programado con Gemini. La app permite hasta 10 acciones programadas activas en Android,
iPhone o la web, con una cuenta personal y la actividad guardada, y la aplicación que uses, como Gmail, tiene que estar conectada.
Google la está habilitando de a poco, así que puede que todavía no aparezca en tu cuenta; si no la ves, usa el plan B del final.

1. En tu cuenta de práctica, conecta Gmail con Gemini.
2. Pide a Gemini que programe una acción diaria con un texto como este: «Todos los días a las 8:00, revisa los correos de Gmail de las últimas 24 horas cuyo asunto empiece con [PRUEBA]. Para cada uno, dame su categoría (pedido, reclamo u otra) y un resumen de una línea. No inventes datos que no estén en el correo».
3. Cuando llegue el resultado, compáralo con los correos y anota en tu planilla de prueba solo lo que esté bien.

Así queda un flujo de cuatro pasos: el disparador programado, los correos de Gmail filtrados por asunto, la IA que clasifica y resume, y
tu registro en la planilla después de revisar. Camila arma así el suyo: cada mañana, Gemini le lista los correos de su cuenta de
práctica que traen documentos nuevos, y ella los registra.

Si las acciones programadas no están disponibles, el plan B son las tareas programadas de ChatGPT. La cuenta gratuita permite 3 tareas
activas, que se repiten como máximo una vez al día, en franjas amplias como mañana, tarde o noche, y avisan por notificación o por
correo. No pueden activarse con un correo de Gmail, así que sirven para un flujo más simple: cada mañana, la IA te prepara una lista de
seguimiento a partir de datos ficticios que dejas escritos en la tarea.

## P11 · Prueba tu flujo como si fuera a fallar
cubre: S4, C2, A2
fuentes: F-M5-06, F-M5-09
bloque: Tabla + actividad

Que el flujo funcione con un correo no significa que esté listo. La guía de Bath pide probar la mayor cantidad posible de escenarios
antes de poner un flujo en marcha, y probar es eso: buscar a propósito los casos en que podría fallar. Para hacerlo con orden, arma un
**plan de pruebas** con datos ficticios y anota, para cada caso, qué esperas y qué pasó.

| Caso de prueba | Resultado esperado | Resultado obtenido |
|---|---|---|
| Correo «[PRUEBA]» con un pedido | Fila con categoría «pedido» | |
| Correo «[PRUEBA]» con un reclamo | Fila con categoría «reclamo» | |
| Correo sin «[PRUEBA]» en el asunto | No pasa nada: la condición lo detiene | |
| Correo «[PRUEBA]» casi vacío | La IA responde «otra» y no inventa | |
| Dos correos «[PRUEBA]» seguidos | Dos filas, cada una con sus datos | |

El tercer caso es el más importante, porque comprueba que tu condición protege los correos que no son de prueba. El cuarto revisa si
la IA inventa contenido cuando le falta información. Si usas el camino del celular, adapta el resultado esperado: en vez de filas,
revisa que la lista de Gemini traiga cada correo «[PRUEBA]» con su categoría y deje fuera el que no lo tiene. Cada prueba gasta
créditos o usos del plan gratuito, así que cinco casos bien elegidos valen más que cincuenta iguales.

:::actividad Corre tu plan de pruebas
Envía los cinco correos de prueba y completa la tabla. Marca con una X cada caso en que lo obtenido no coincide con lo esperado. Esas
son las fallas que corregirás en la pantalla siguiente.
:::

## P12 · Lee el error y corrige
cubre: S4, C2, A2
fuentes: F-M5-11, F-M5-10
bloque: Texto + escenario de diagnóstico + comprueba

Cuando un flujo falla, no adivines: busca dónde falló. Las plataformas guardan un **historial de ejecuciones**. En Zapier, por
ejemplo, se abre la ejecución con error, se ubica el paso que falló y se leen su diagnóstico y el mensaje de error. Busca la opción
equivalente en la herramienta que uses. Una vez corregida la causa, Zapier permite volver a ejecutar lo que falló para no perder datos.

Hay fallas que se repiten mucho y conviene reconocerlas:
- Todas las filas dicen lo mismo: un campo quedó escrito a mano en vez de mapeado.
- Un campo aparece vacío: el mapeo se rompió, algo que puede pasar al reordenar o duplicar pasos o al cambiar de aplicación; Zapier lo marca con una advertencia amarilla.
- El flujo no corre: el disparador no detectó el correo o la condición está mal escrita.
- El escenario se detuvo: en Make, se acabaron los créditos del mes (P05).

Después de cada corrección, vuelve a correr la prueba que falló. Un error común es concluir que, si el flujo falló, la herramienta no
sirve. La mayoría de las fallas está en la configuración, en un mapeo, una condición o un permiso, y leer el error para corregirlo es
la parte normal del trabajo con flujos.

:::comprueba
En la planilla de Andrés, todos los borradores dicen «pedido 412», aunque los despachos atrasados son distintos. ¿Cuál es el error
más probable?
- a) La IA está inventando el número de pedido
- **b) El número se escribió a mano en vez de mapearlo desde la fila**
- c) Se acabaron los créditos
Retroalimentación: Un texto fijo se repite en cada ejecución. El pedido debe mapearse desde el dato de la planilla.
:::

## P13 · Prolijidad: documenta tu flujo
cubre: A1, C1
fuentes: F-M5-06, F-M5-10
bloque: Texto + lista de verificación (checklist) + comprueba

Un flujo que solo entiende quien lo armó es frágil. Si mañana falla, si sales de vacaciones o si otra persona de tu equipo tiene que
revisarlo, la documentación hace la diferencia. La guía de Bath pide documentar el propósito, las entradas, las salidas y las
dependencias, usar nombres claros y monitorear los flujos: apaga los que fallan una y otra vez o los que llevan 30 días sin activarse.

Arma una **ficha del flujo** con esta lista:
- [ ] Un nombre con convención de módulo, propósito y versión, como «M5 · Registro de consultas · v2».
- [ ] El propósito, es decir, qué tarea resuelve y para quién.
- [ ] El disparador que lo inicia.
- [ ] Los pasos, con la tabla de P07 actualizada.
- [ ] Los datos que entran y salen de cada paso.
- [ ] Las dependencias, como cuentas conectadas, planilla, créditos o límites del plan.
- [ ] Las pruebas, con tu tabla de P11 y lo que corregiste.

Un flujo es funcional cuando el disparador se activa y cada acción recibe los datos correctos del paso anterior, y tu tabla de pruebas
es la evidencia de eso.

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

En este tema armaste un flujo con sus tres elementos, disparador, acciones y datos, más una condición. Elegiste la herramienta según lo
que permite su plan gratuito, conectaste servicios con una cuenta de práctica y lo probaste y corregiste con datos ficticios. Ahora toca
hacer lo mismo con la tarea de tu trabajo que marcaste en tu matriz del tema 1.

Ten presente que tu flujo todavía funciona sin control humano. En el próximo tema vas a decidir dónde debe revisar una persona y qué
hacer si algo sale mal, así que no lo uses aún con documentos reales de tu empresa.

:::actividad Tu flujo para el proyecto
Toma la tarea que marcaste en tu matriz del tema 1:
1. Diseña su flujo en una tabla, como en P07, con 3 a 5 pasos. Al menos uno debe usar IA y otro, correo, planilla o calendario.
2. Constrúyelo en Make o con las acciones programadas de Gemini, con datos ficticios o copias sin datos sensibles.
3. Pruébalo con al menos cuatro casos, incluido uno que debería detenerse.
4. Corrige lo que falló y anota qué cambiaste.
5. Documenta el flujo con la ficha de P13.

Guarda capturas de pantalla del flujo y de tu tabla de pruebas, sin datos reales.
:::

## Ideas clave

1. Un flujo automatizado tiene un disparador que lo inicia, una o más acciones y datos que pasan de un paso al siguiente.
2. Los disparadores pueden ser automatizados (tras un evento), manuales (con un botón) o programados (fecha, hora y frecuencia).
3. Una condición hace que el flujo siga solo si se cumple una regla; los datos se mapean desde pasos anteriores, porque un texto
   escrito a mano se repite igual siempre.
4. En planes gratuitos, Make permite flujos de varios pasos con IA desde un computador; en el celular, las acciones programadas de
   Gemini o, como plan B, las tareas programadas de ChatGPT. Zapier gratis solo permite dos pasos.
5. Conectar servicios es dar permisos sobre una cuenta: practica con una cuenta de prueba y datos ficticios, sin exponer datos de tu
   empresa.
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

Detalle de cada fuente y de lo que respalda: `investigacion/M5.md`, `investigacion/HERRAMIENTAS-1.md` y
`investigacion/HERRAMIENTAS-2.md` (consultadas el 24-10-2026).

- F-M5-06 · University of Bath (s. f.). Automation standards for Microsoft Power Automate. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
- F-M5-07 · Microsoft Learn (2026). Desencadenadores (Triggers) - Power Automate. https://learn.microsoft.com/es-es/power-automate/triggers-introduction
- F-M5-08 · Microsoft Learn (2022). Agregar una condición a un flujo de nube en Power Automate. https://learn.microsoft.com/es-es/power-automate/add-condition
- F-M5-09 · Zapier Help Center (2026). Learn key concepts in Zap workflows. https://help.zapier.com/hc/en-us/articles/8496181725453-Learn-key-concepts-in-Zapier
- F-M5-10 · Zapier Help Center (2026). Send data between steps by mapping fields. https://help.zapier.com/hc/en-us/articles/8496343026701
- F-M5-11 · Zapier Help Center (2026). How to troubleshoot errors in Zap workflows. https://help.zapier.com/hc/en-us/articles/8496037690637
- F-H-15 · Google (s. f.). Centro de Privacidad de las Aplicaciones de Gemini. https://support.google.com/gemini/answer/13594961?hl=es
- F-H-55 · OpenAI (2026). Scheduled tasks in ChatGPT. https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt
- F-H-61 · Google (s. f.). Acciones programadas en las aplicaciones de Gemini (Android). https://support.google.com/gemini/answer/16316416?hl=es&co=GENIE.Platform%3DAndroid
- F-H-93 · Zapier (2026). Plans & Pricing. https://zapier.com/pricing
- F-H-94 · Make (s. f.). Pricing. https://www.make.com/pricing

Pendiente de probar a mano antes de publicar:
- **Acciones programadas de Gemini (P10):** la ayuda en español no exige plan (F-H-61), pero la tabla de límites (F-H-60) parece
  dejarlas en planes de pago. **Pilotear con una cuenta gratuita en Chile antes de publicar.** Comprobar también si se crean con un
  pedido en lenguaje natural y si filtran por asunto.
- **Tareas programadas de ChatGPT (P10):** la página de precios (F-H-54) las muestra como función de Plus, pero la ayuda (F-H-55) da 3
  tareas a las cuentas Free. Confirmar en la app.
- **Make (P08, P09, P12):** las fuentes confirman el plan gratuito, los créditos y los módulos que leen correos y escriben filas en
  Google Sheets (F-H-94). No confirman los nombres exactos de los módulos de Gmail e IA, la forma de poner la condición (filtro) entre
  módulos, el historial de ejecuciones ni si el editor funciona en el celular. Recorrer el laboratorio completo con una cuenta
  gratuita y ajustar los pasos.
- **Conectores (P06):** la definición se apoya en la documentación de Power Automate (F-M5-07); que Gemini necesite la actividad guardada
  se respalda en P10 (F-H-61).
- **Herramientas que salieron de P05 el 28-10** por el máximo de 2 fuentes: IFTTT, Power Automate con cuentas personales, n8n y Google
  Apps Script (fuentes F-H-95 a F-H-99 en `investigacion/HERRAMIENTAS-2.md`).
