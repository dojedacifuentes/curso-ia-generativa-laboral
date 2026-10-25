# M5-AE3 · Supervisión humana y riesgos

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M5-12, F-M5-13
bloque: Texto + lista con viñetas

En el tema anterior construiste un flujo que funciona solo. Eso es una ventaja y también un riesgo: un flujo no se cansa, pero
tampoco duda. Si algo sale mal, lo repite cada vez. En este tema vas a decidir **dónde tiene que mirar una persona** y **qué hacer si
el flujo falla**.

**Aprendizaje esperado:** Incorporar puntos de supervisión humana y controles de riesgo en un flujo automatizado, evaluando su efecto.

Al terminar, deberías poder:
- definir puntos de control humano según el riesgo de cada paso;
- elaborar un plan de contingencia para tu flujo;
- comprobar con pruebas si tus controles sirven.

Vas a trabajar con **casos**: situaciones de trabajo en que un flujo automatizado con IA trae un problema. En cada uno vas a analizar
qué pasó, qué riesgo apareció y qué control lo habría evitado. Para eso usarás ideas de tres marcos reconocidos: las directrices
éticas de la Comisión Europea, el marco de gestión de riesgos de IA del NIST de Estados Unidos y los principios de la OCDE.

Además de Camila y Andrés, aparece **Paula**, ejecutiva de atención al cliente en una tienda de electrodomésticos. Las tres personas
y sus casos son ficticios. También verás dos casos reales de empresas, en P06 y en P13, que analizarás a fondo en los
casos M5-C1 y M5-C2.

:::clave
Automatizar una tarea no te quita la responsabilidad por su resultado. Te cambia el trabajo: de hacer la tarea a supervisar que se
haga bien.
:::

## P02 · Caso 1: el error que se repite solo
cubre: S1
fuentes: F-M5-10, F-M5-14
bloque: Escenario (scenario) con preguntas

Andrés puso en marcha su flujo: cuando marca un despacho como «atrasado» en la planilla, la IA redacta el aviso al cliente con la
nueva fecha y lo deja en la columna «Borrador». Andrés copia el borrador y lo envía. Funcionó en todas sus pruebas.

Una semana después, un cliente llama molesto: su pedido no llegó el día que decía el aviso. Andrés revisa la planilla: desde el
lunes, una compañera anota las fechas nuevas de otra forma y la IA las interpreta mal. **Cinco avisos** salieron con la fecha
equivocada, y los clientes ya habían organizado su recepción con esos datos.

Esto es un **error en cadena**. En un flujo, los datos de un paso alimentan al siguiente. Un dato erróneo, o un mapeo que se rompió,
se repite en cada ejecución y pasa a quien usa el resultado. Además, la IA generativa puede **confabular**: entregar contenido falso
con tono seguro, como una fecha que la planilla no decía.

Preguntas para analizar el caso:
1. ¿En qué paso nació el error y en qué paso se hizo visible?
2. ¿Quién se dio cuenta, y cuánto tiempo pasó?
3. ¿Qué control habría detectado el problema el primer día?

:::error «Si pasó las pruebas, funcionará siempre»
Las pruebas revisan los casos que imaginaste. En la vida real aparecen otros: un proveedor nuevo, un formato distinto, un correo
reenviado. Por eso un flujo necesita supervisión también después de ponerlo en marcha.
:::

## P03 · Caso 2: datos personales en el flujo
cubre: S1, A1
fuentes: F-M5-14, F-M5-06, F-H-15, F-H-61
bloque: Escenario (scenario) con preguntas

Camila prepara una entrevista para un puesto de asistente administrativa. Le preguntan qué automatizaría. Ella piensa en las
postulaciones que llegan por correo: un flujo podría copiar a una planilla los datos de cada currículum y pedirle a la IA un resumen
de cada postulante.

Antes de responder, Camila analiza el riesgo. Ella misma es postulante, y sabe lo que hay en un currículum: nombre, RUT, teléfono,
dirección, experiencia y a veces datos de salud o de familia.

El perfil de riesgos de IA generativa del NIST incluye la **privacidad**: la filtración o el uso no autorizado de datos personales. La
guía de la Universidad de Bath pide cuidar la protección de datos en cada flujo. Y en el camino del celular hay un punto más: para
usar acciones programadas, Gemini necesita la actividad guardada, y con ese ajuste encendido revisores humanos pueden leer
conversaciones.

Camila responde en la entrevista: «Automatizaría solo el registro de que llegó una postulación, con fecha y cargo. El análisis de
cada currículum lo haría una persona».

Preguntas para analizar el caso:
1. ¿Qué datos personales pasan por cada paso del flujo?
2. ¿Cuáles son necesarios para la tarea y cuáles sobran?
3. ¿Qué parte del flujo decide algo sobre una persona?

:::clave
El dato más seguro es el que no entra al flujo. Antes de agregar un campo, pregúntate si la tarea lo necesita de verdad.
:::

## P04 · Caso 3: el sesgo que se multiplica
cubre: S1, A2
fuentes: F-M5-14
bloque: Escenario (scenario) con preguntas

Paula armó un flujo que clasifica los reclamos de clientes en urgencia alta, media o baja. Así el equipo atiende primero lo urgente.
Al mes, revisa la planilla y nota algo: los reclamos escritos con faltas de ortografía o en tono muy informal quedan casi siempre en
«baja», aunque algunos eran graves, como un refrigerador que llegó sin funcionar.

El NIST describe dos riesgos que aparecen juntos en este caso:
- **Sesgo dañino.** La IA puede reproducir sesgos y, al automatizarla, aumenta la **velocidad y la escala** con que se propagan. Un
  criterio injusto aplicado a mano afecta a unos pocos; dentro de un flujo, afecta a todos.
- **Sesgo de automatización.** Es confiar de más en lo que entrega un sistema automático. El equipo de Paula dejó de leer los reclamos
  marcados como «baja» porque «el sistema ya los clasificó». Esa dependencia excesiva agrava el error.

Preguntas para analizar el caso:
1. ¿A quiénes perjudicó la clasificación, y por qué nadie lo notó antes?
2. ¿Qué habría pasado si una persona revisaba cada semana una muestra de reclamos en «baja»?
3. ¿Debería la IA decidir sola la urgencia de un reclamo?

:::error «Lo decidió el sistema, así que es objetivo»
Un sistema automático puede repetir sesgos de sus datos y aplicarlos a todos los casos, más rápido. Que no lo haya decidido una
persona no lo hace neutral: hay que revisar sus resultados.
:::

## P05 · Decisiones automatizadas sobre personas: la ley en Chile
cubre: S1, S2, A1
fuentes: F-M5-16, F-M3-16
bloque: Texto + recuadro destacado

Los casos 2 y 3 tienen algo en común: el flujo decide o influye en algo que afecta a una persona. En Chile, la **Ley 21.719** modifica
la Ley 19.628 sobre datos personales y agrega un artículo 8° bis sobre **decisiones automatizadas**.

Según ese artículo, toda persona tiene derecho a **oponerse y a no ser objeto de decisiones basadas en el tratamiento automatizado de
sus datos**, incluida la elaboración de perfiles, cuando le produzcan efectos jurídicos o le afecten significativamente. Hay
excepciones, por ejemplo cuando la decisión es necesaria para un contrato, cuando hay consentimiento expreso o cuando lo autoriza una
ley. Pero aun en esos casos, quien es responsable de los datos debe asegurar que la persona reciba información y una explicación,
pueda pedir **intervención humana**, expresar su punto de vista y pedir que se revise la decisión.

**¿Desde cuándo?** Según su texto, estos cambios rigen desde el **1 de diciembre de 2026**. Hay un proyecto de ley en trámite en el
Senado que propone postergar esa fecha a diciembre de 2027; todavía no está aprobado. Antes de aplicar esta norma, revisa en qué
estado está.

:::comprueba
Según la Ley 21.719, ¿qué debe poder pedir una persona afectada significativamente por una decisión automatizada, en los casos en que
la ley la permite?
- a) Que se borre el flujo de la empresa
- **b) Intervención humana y revisión de la decisión**
- c) Una copia de las instrucciones de la IA
Retroalimentación: La ley asegura información, explicación, intervención humana, expresar su punto de vista y pedir revisión.
:::

## P06 · Tres formas de supervisión humana
cubre: S2
fuentes: F-M5-12, F-M5-13, F-M5-15, F-M5C1-01, F-M5C1-05, F-M5C1-06
bloque: Pestañas (tabs) con los tres niveles

Las directrices éticas para una IA fiable de la Comisión Europea ponen como primer requisito la **acción y supervisión humanas**.
Describen tres formas de supervisar, que en inglés se conocen con nombres que vas a encontrar a menudo:

| Forma | Qué hace la persona | En inglés | En un flujo |
|---|---|---|---|
| **Participación humana** | Interviene en cada ciclo de decisión | *Human-in-the-loop* (en el circuito) | Revisa y aprueba cada resultado antes de que se use |
| **Control humano** | Interviene en el diseño y en el seguimiento del funcionamiento | *Human-on-the-loop* (sobre el circuito) | El flujo corre solo; la persona revisa el registro y corrige |
| **Mando humano** | Supervisa la actividad global y decide cuándo y cómo usar el sistema, o no usarlo | *Human-in-command* | Decide si el flujo se usa, se pausa o se apaga |

Las directrices agregan una regla útil: **cuanto menor sea la supervisión posible, mayores deben ser las verificaciones**.

El marco del NIST explica que las configuraciones entre personas e IA van de totalmente autónomas a totalmente manuales, y pide
**definir y documentar** los procesos de supervisión y los roles de cada persona. Los principios de la OCDE piden salvaguardas que
incluyan la capacidad de acción y supervisión humanas.

:::ejemplo Las tres formas en el flujo de Paula
Participación: alguien confirma cada reclamo clasificado como «baja». Control: una vez por semana, alguien revisa una muestra en el
registro. Mando: la jefatura decide si el flujo sigue en uso tras ver los resultados del mes.
:::

:::ejemplo Caso real: un asistente de IA en la atención al cliente (Klarna, 2024-2026)
En febrero de 2024, la empresa de pagos Klarna anunció que su asistente de IA, hecho con OpenAI, atendía dos tercios de los chats de
atención al cliente; según la empresa, en 2025 llegó al 80 %. En sus documentos ante el regulador bursátil de Estados Unidos, la propia
empresa advierte que el chatbot puede dar respuestas inexactas o engañosas difíciles de detectar, y dice tener controles con
participación humana. Desde 2025 describe un «doble carril»: la IA atiende la mayoría de las consultas y todos los clientes pueden
elegir hablar con una persona.
:::

## P07 · Dónde poner un punto de control
cubre: H1, C1
fuentes: F-M5-08, F-H-93, F-H-62
bloque: Texto + lista con viñetas

Un **punto de control** es un lugar del flujo donde una persona revisa antes de que el resultado siga. No va en todos los pasos:
va donde el riesgo es mayor. Estos son los lugares típicos:
- **Antes de que algo salga hacia otra persona:** un correo a un cliente, un aviso a un equipo.
- **Antes de escribir en un registro que otros usan para decidir:** la planilla de turnos, el registro de pedidos.
- **Cuando la IA clasifica, resume o extrae datos** que luego se usan sin volver al original.
- **Cuando aparecen datos personales.**
- **Cuando un dato no cumple una regla.** Una condición puede detener el flujo o desviarlo a revisión: por ejemplo, si la fecha
  extraída está vacía o es anterior a hoy.

¿Cómo se hace la revisión? Algunas plataformas tienen pasos de aprobación automática, pero en planes de pago: en Zapier gratis, por
ejemplo, el flujo solo puede tener dos pasos. Por eso en este curso usamos **revisión manual**, que funciona gratis:
- el flujo deja el resultado en una columna «Estado» con el valor **«por revisar»**, y nadie lo usa hasta que una persona lo cambia a
  «aprobado»;
- en el camino del celular, Gemini **propone** el evento y lo crea en Calendar solo después de que tú lo confirmas.

:::comprueba
En el flujo de Andrés, ¿dónde conviene más un punto de control humano?
- a) Antes de marcar el despacho como atrasado
- **b) Después de que la IA redacta el borrador y antes de enviarlo al cliente**
- c) En ningún paso: la IA ya fue probada
Retroalimentación: El riesgo está en el aviso que redacta la IA y que sale hacia un cliente. Ahí va la revisión.
:::

## P08 · Criterios de aprobación humana
cubre: H1, C1, A2
fuentes: F-M5-12, F-M5-13
bloque: Tabla + lista de verificación (checklist)

Una revisión sin criterios se vuelve un clic automático: «aprobado, aprobado, aprobado». Para que el control sirva, define **qué
revisa la persona** y **cuándo aprueba**. El NIST pide que estos procesos queden definidos y documentados.

Un criterio de aprobación es una pregunta que se responde con sí o no. Por ejemplo:
- [ ] ¿Los datos coinciden con el correo o documento original?
- [ ] ¿La categoría o el resumen de la IA es correcto?
- [ ] ¿Hay datos personales que no deberían estar?
- [ ] ¿El tono es adecuado para quien lo va a recibir?
- [ ] Si algo no cumple, ¿lo corrijo o lo hago a mano?

¿Cuánta revisión? Ajústala al riesgo, usando la matriz del tema 1 y la regla de la Comisión Europea: menos supervisión pide más
verificaciones. Esta tabla es una propuesta del curso:

| Riesgo del paso | Forma de supervisión | Cómo se revisa |
|---|---|---|
| Bajo | Control humano | Revisión de una muestra del registro, por ejemplo una vez al día |
| Alto | Participación humana | Revisión de **cada** resultado antes de que se use |
| Decide algo importante sobre una persona | Mando humano | No se automatiza la decisión: la toma una persona |

:::actividad Define tus criterios
Escribe tres o cuatro criterios de aprobación para el punto de control más importante de tu flujo. Cada uno debe poder responderse
con sí o no en pocos segundos.
:::

## P09 · Registro: que quede huella
cubre: S3, A1
fuentes: F-M5-12, F-M5-15, F-M5-11
bloque: Texto + tabla de ejemplo

Cuando algo sale mal, la primera pregunta es «¿qué pasó?». Para responderla necesitas un **registro**. Las directrices europeas
piden documentar los datos, los procesos y las decisiones para lograr **trazabilidad**: poder reconstruir qué pasó, entender por qué
hubo un error y prevenir otros. Los principios de la OCDE piden lo mismo a lo largo de toda la vida de un sistema.

En tu flujo hay dos registros:
1. **El historial de la plataforma.** En Zapier, por ejemplo, cada ejecución queda guardada con el paso que falló y su mensaje de
   error.
2. **Tu propio registro**, en la planilla del flujo. Agrégale columnas para la supervisión:

| Fecha | Dato original | Resultado de la IA | Estado | Revisó | Observación |
|---|---|---|---|---|---|
| 12-11 | Pedido 412 · nueva fecha 14-11 | «Llegará el jueves 14» | Aprobado | Andrés | — |
| 13-11 | Pedido 415 · nueva fecha 05-12 | «Llegará el 12 de mayo» | Corregido | Andrés | La IA leyó la fecha al revés |

La columna **«Dato original»** es la más importante: permite comparar lo que entró con lo que salió sin buscar el dato de origen otra vez.

:::ejemplo El registro de Paula
Con la columna «Revisó», Paula descubrió que nadie miraba los reclamos en «baja». El problema no era solo de la IA: el punto de control
existía en el papel, pero nadie lo había asumido.
:::

## P10 · Reversibilidad: poder detener y deshacer
cubre: S3, C2
fuentes: F-M5-13, F-M5-15, F-M5-11
bloque: Texto + recuadro destacado

Un flujo seguro es un flujo que se puede **detener** y cuyos efectos se pueden **deshacer**. El marco del NIST pide mecanismos y
responsables para reemplazar, desconectar o desactivar un sistema que no funciona como se espera. Los principios de la OCDE piden que
un sistema que arriesga causar daños pueda ser anulado, reparado o retirado de forma segura.

En un flujo simple, eso se traduce en prácticas concretas, que el curso te recomienda:
- **Saber dónde se apaga.** Antes de activar el flujo, ubica cómo se pausa o se desactiva en la herramienta que usas.
- **No sobrescribir el original.** Que el flujo agregue filas nuevas en vez de reemplazar datos, y que guarde el dato original.
- **Preferir acciones que se pueden corregir.** Anotar en una planilla se arregla fácil; un correo enviado a un cliente no se puede
  recoger.
- **Recuperar lo que falló.** En Zapier, una vez corregida la causa, se pueden volver a ejecutar las ejecuciones fallidas para no
  perder datos.

:::comprueba
¿Cuál de estas acciones es más difícil de revertir si el flujo se equivoca?
- a) Agregar una fila en una planilla de prueba
- **b) Enviar un correo automático a todos los clientes**
- c) Crear un evento en tu propio calendario
Retroalimentación: Un correo enviado no se puede recoger. Las acciones hacia otras personas necesitan un punto de control antes.
:::

## P11 · Plan de contingencia
cubre: H1, C2
fuentes: F-M5-06, F-M5-13, F-M5-11
bloque: Proceso (process block) + plantilla

Un **plan de contingencia** dice qué hacer si el flujo deja de funcionar o empieza a equivocarse. La guía de la Universidad de Bath lo
pide para todo flujo importante, y el NIST incluye la respuesta a incidentes y la recuperación en el seguimiento posterior a ponerlo
en marcha.

Tu plan responde seis preguntas:
1. **¿Cómo me doy cuenta?** Las señales: un error en el historial, filas vacías, un aviso de alguien.
2. **¿Cómo lo detengo?** Dónde se pausa el flujo y quién lo hace.
3. **¿Cómo sigue el trabajo mientras tanto?** La forma manual de hacer la tarea.
4. **¿Cómo recupero lo que falló?** Revisar el registro, corregir las filas malas, volver a ejecutar lo pendiente.
5. **¿A quién aviso?** Las personas que usan el resultado.
6. **¿Quién responde?** Una persona con nombre, no «el sistema».

:::ejemplo El plan de Andrés
1. Señal: un borrador sin fecha, con una fecha distinta a la de la planilla o un reclamo de un cliente. 2. Pausa el escenario desde
su cuenta. 3. Mientras tanto, escribe los avisos con la plantilla manual de su biblioteca. 4. Compara los avisos de la semana con la
planilla y, si uno salió mal, escribe al cliente para corregirlo. 5. Avisa a su jefatura y a ventas. 6. Responde él; si está de
vacaciones, su compañera de turno.
:::

:::actividad Escribe tu plan
Responde las seis preguntas para tu flujo. Si alguna respuesta es «no sé», ese es el punto débil que tienes que resolver antes de
ponerlo en marcha.
:::

## P12 · Evalúa el efecto de tus controles
cubre: C1, A2, H1
fuentes: F-M5-13
bloque: Tabla + actividad

Poner un control no basta: hay que comprobar que **sirve**. El marco del NIST pide medir con pruebas y documentar los resultados. En tu
flujo puedes hacerlo así:

1. **Prepara 10 casos ficticios** y, en 3 de ellos, **siembra un error**: un correo con una fecha ambigua, uno con un dato personal
   que no debería pasar, uno que debería detenerse.
2. **Corre el flujo sin el control** y anota cuántos errores llegan al resultado.
3. **Corre el flujo con el control** y anota cuántos errores detectó la persona revisora.
4. **Mide el costo:** cuánto tiempo tomó revisar y cuántas veces el control marcó algo que estaba bien (falsas alarmas).

| Indicador | Sin control | Con control |
|---|---|---|
| Errores que llegaron al resultado | 3 de 3 | 0 de 3 |
| Falsas alarmas | — | 1 |
| Tiempo de revisión | — | Pocos minutos por tanda |

Con los datos, decide: **mantener** el control, **ajustarlo** (por ejemplo, revisar solo una muestra si nunca encuentra errores) o
**subir** la supervisión si pasaron errores.

:::actividad Mide tu control
Haz la prueba con tu flujo y completa la tabla. Escribe una conclusión de dos líneas: ¿tu control reduce el riesgo lo suficiente para
lo que cuesta?
:::

:::clave
Un buen control detecta los errores importantes sin volver más lento todo el trabajo. Si no lo mides, no sabes si cumple.
:::

## P13 · Responsabilidad y prudencia
cubre: A1, A2
fuentes: F-M5-15, F-M5-13, F-M5-14, F-M5C2-01, F-M5C2-07
bloque: Texto + escenario breve

Los principios de la OCDE incluyen la **rendición de cuentas**: quienes ponen en marcha un sistema de IA responden por su
funcionamiento, y deben registrar datos, procesos y decisiones y gestionar los riesgos de forma sistemática. El marco del NIST pide,
además, roles claros: quién supervisa, quién puede apagar el sistema, quién atiende un incidente.

Para ti, esto tiene un sentido práctico: **el flujo actúa en tu nombre**. Si manda un dato equivocado, para quien lo recibe el error
es tuyo, no de la herramienta.

La **prudencia** es la actitud que acompaña esa responsabilidad. No es miedo a automatizar: es no confiar de más. El sesgo de
automatización, que viste en el caso de Paula, aparece cuando el flujo funciona bien por un tiempo y la revisión se relaja. La persona
prudente sigue mirando, sobre todo cuando cambia algo: un proveedor nuevo, un formato distinto, un cambio en la herramienta.

:::ejemplo Caso real: una estrategia «AI-first» y su efecto en la marca (Duolingo, 2025)
El 28-04-2025, Duolingo publicó un correo de su director ejecutivo que anunciaba que la empresa sería «AI-first». Entre otras medidas,
dejaría gradualmente de usar contratistas para el trabajo que la IA pudiera hacer, y aceptaba bajas ocasionales de calidad para no
avanzar lento. En su informe anual (27-02-2026), la empresa reconoció que ese anuncio pudo contribuir a publicidad desfavorable, a
dañar su marca y a desacelerar el crecimiento de usuarios. Ser prudente también es pensar en cómo una automatización afecta a quienes
trabajan y a quienes reciben el servicio.
:::

:::error «Si el flujo se equivocó, la culpa es de la herramienta»
Quien pone en marcha un flujo responde por sus resultados. Por eso se definen puntos de control, registros y un plan de contingencia:
para poder responder cuando algo falla.
:::

:::comprueba
Paula lleva dos meses sin encontrar errores en la revisión. ¿Qué es lo más prudente?
- a) Eliminar el control, porque ya no hace falta
- **b) Mantener una revisión por muestreo y volver a revisar todo si algo cambia**
- c) Dejar que la IA también decida la respuesta al cliente
Retroalimentación: Sin errores, el control puede aliviarse, pero no desaparecer. Los cambios traen errores nuevos.
:::

## P14 · Cierre: tu flujo con supervisión humana
cubre: C1, C2, H1, A1
fuentes: F-M5-12, F-M5-13, F-M5-06
bloque: Texto + actividad de cierre (entrega)

En este tema analizaste tres casos: un **error en cadena**, un flujo con **datos personales** y un **sesgo** que se multiplicaba.
Viste que la supervisión humana puede ser participación, control o mando, y que se ajusta al riesgo. Aprendiste a dejar **registro**,
a hacer el flujo **reversible**, a escribir un **plan de contingencia** y a **medir** si tus controles sirven.

:::actividad Completa tu prototipo
Toma el flujo que construiste en el tema 2 y agrégale:
1. **Mapa de riesgos:** para cada paso, qué podría salir mal (errores en cadena, privacidad, sesgo).
2. **Puntos de control:** dónde revisa una persona, con qué forma de supervisión y por qué, según el riesgo.
3. **Criterios de aprobación:** tres o cuatro preguntas de sí o no para cada punto de control.
4. **Registro:** las columnas de supervisión en tu planilla.
5. **Plan de contingencia:** las seis respuestas de P11.
6. **Evaluación:** tu tabla con y sin control, y tu conclusión.

Trabaja siempre con datos ficticios.
:::

:::clave
Un prototipo con supervisión humana no es más lento: es uno en el que puedes confiar y del que puedes responder.
:::

## Ideas clave

1. Automatizar trae riesgos propios: errores en cadena que se repiten en cada ejecución, confabulación, filtración de datos personales
   y sesgos que se multiplican en velocidad y escala.
2. El sesgo de automatización es confiar de más en lo automático; se combate con revisión, sobre todo cuando algo cambia.
3. La supervisión humana puede ser participación (en el circuito), control (sobre el circuito) o mando (decidir si se usa); cuanto
   menor la supervisión, mayores las verificaciones.
4. Los puntos de control van donde el riesgo es mayor y necesitan criterios de aprobación claros; la revisión manual funciona gratis.
5. El registro da trazabilidad y la reversibilidad permite detener y deshacer: guarda el dato original y prefiere acciones que se
   pueden corregir.
6. Un plan de contingencia dice cómo detectar la falla, detener el flujo, seguir a mano, recuperar lo perdido, avisar y quién responde.
7. Los controles se evalúan con pruebas: errores detectados, falsas alarmas y tiempo de revisión.

## Glosario

- **Error en cadena**: error que nace en un paso de un flujo y se repite en los siguientes y en cada ejecución.
- **Confabulación**: contenido falso que la IA generativa entrega con tono seguro; también se le llama alucinación.
- **Sesgo de automatización**: tendencia a confiar de más en lo que entrega un sistema automático.
- **Supervisión humana**: intervención de personas para revisar, corregir o detener lo que hace un sistema de IA.
- **Participación humana (*human-in-the-loop*)**: supervisión en que una persona interviene en cada decisión del sistema.
- **Control humano (*human-on-the-loop*)**: supervisión en que una persona diseña el sistema y sigue su funcionamiento, sin revisar
  cada caso.
- **Mando humano (*human-in-command*)**: supervisión global en que una persona decide cuándo y cómo usar el sistema, o no usarlo.
- **Punto de control**: lugar de un flujo donde una persona revisa el resultado antes de que siga.
- **Criterio de aprobación**: pregunta de sí o no que la persona revisora usa para aprobar o rechazar un resultado.
- **Trazabilidad (de un flujo)**: posibilidad de reconstruir qué datos, pasos y decisiones llevaron a un resultado.
- **Reversibilidad**: posibilidad de detener un flujo y deshacer o corregir sus efectos.
- **Plan de contingencia**: acuerdo previo sobre qué hacer si un flujo falla o se equivoca.
- **Decisión automatizada**: decisión basada en el tratamiento automatizado de datos, sin intervención de una persona.
- **Rendición de cuentas**: obligación de responder por el funcionamiento y los resultados de un sistema que se puso en marcha.

## Conexión con el proyecto

Con la actividad de cierre (P14) completas el **Hito 5 del proyecto aplicado: prototipo de automatización de un paso del proceso,
con supervisión humana**. Entregas el flujo del tema 2 con su mapa de riesgos, puntos de control, criterios de aprobación, registro,
plan de contingencia y la evaluación de tus controles. En los **casos M5-C1 y M5-C2** analizarás a fondo cómo las dos empresas de P06 y P13
automatizaron tareas con IA, qué efectos tuvo en clientes y trabajadores, y qué controles humanos habrían cambiado el resultado.

## Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M5.md`, `investigacion/M3.md`, `investigacion/HERRAMIENTAS-1.md`,
`investigacion/HERRAMIENTAS-2.md` y, para los casos reales, `investigacion/casos/M5-C1.md` y `investigacion/casos/M5-C2.md`
(consultadas el 24-10-2026).

- F-M5-06 · University of Bath (s. f.). Automation standards for Microsoft Power Automate. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
- F-M5-08 · Microsoft Learn (2022). Agregar una condición a un flujo de nube en Power Automate. https://learn.microsoft.com/es-es/power-automate/add-condition
- F-M5-10 · Zapier Help Center (2026). Send data between steps by mapping fields. https://help.zapier.com/hc/en-us/articles/8496343026701
- F-M5-11 · Zapier Help Center (2026). How to troubleshoot errors in Zap workflows. https://help.zapier.com/hc/en-us/articles/8496037690637
- F-M5-12 · Comisión Europea, Grupo independiente de expertos de alto nivel sobre IA (2019). Directrices éticas para una IA fiable. https://digital-strategy.ec.europa.eu/es/node/1950
- F-M5-13 · NIST (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- F-M5-14 · NIST (2024). AI RMF: Generative Artificial Intelligence Profile, NIST AI 600-1. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- F-M5-15 · OCDE (2019, actualizados en 2024). Principios de la OCDE sobre IA (principios 1.2, 1.4 y 1.5). https://oecd.ai/en/ai-principles
- F-M5-16 · Congreso Nacional de Chile, BCN LeyChile (2024). Ley 21.719, regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales. https://www.bcn.cl/leychile/navegar?idLey=21719
- F-M3-16 · Senado de Chile (2026). Tramitación del boletín 18623-07: proyecto que modifica la Ley 21.719. https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=18623
- F-M5C1-01 · Klarna (27-02-2024). Klarna AI assistant handles two-thirds of customer service chats in its first month. https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/
- F-M5C1-05 · Klarna Group plc (09-09-2025). Prospecto definitivo 424B4, SEC. https://www.sec.gov/Archives/edgar/data/2003292/000200329225000052/klarnagroupplc424b4.htm
- F-M5C1-06 · Klarna Group plc (26-02-2026). Formulario 20-F, ejercicio 2025, SEC. https://www.sec.gov/Archives/edgar/data/2003292/000200329226000007/klar-20251231.htm
- F-M5C2-01 · Duolingo (28-04-2025). Below is an all-hands email from our CEO (LinkedIn). https://www.linkedin.com/posts/duolingo_below-is-an-all-hands-email-from-our-activity-7322560534824865792-l9vh
- F-M5C2-07 · Duolingo, Inc. (27-02-2026). Formulario 10-K, ejercicio 2025, SEC. https://www.sec.gov/Archives/edgar/data/1562088/000162828026012494/duol-20251231.htm
- F-H-15 · Google (s. f.). Centro de Privacidad de las Aplicaciones de Gemini. https://support.google.com/gemini/answer/13594961?hl=es
- F-H-61 · Google (s. f.). Acciones programadas en las aplicaciones de Gemini (Android). https://support.google.com/gemini/answer/16316416?hl=es&co=GENIE.Platform%3DAndroid
- F-H-62 · Google (s. f.). Utilizar y gestionar Aplicaciones conectadas en Gemini. https://support.google.com/gemini/answer/13695044?hl=es
- F-H-93 · Zapier (2026). Plans & Pricing. https://zapier.com/pricing

Notas para revisar antes de publicar:
- **Casos reales (P06 y P13):** las cifras de Klarna son cifras informadas por la empresa; ambos casos siguen en evolución (estado al
  24-10-2026).
- **Ley 21.719 (P05):** según su texto, rige desde el 01-12-2026; el boletín 18623-07, que propone postergarla al 01-12-2027, sigue
  en trámite (F-M3-16). **Revisar antes de publicar** y ajustar la fecha si la ley se modifica.
- **NIST AI RMF:** la ficha de NIST indica que el AI RMF 1.0 está en revisión. Revisar antes de publicar.
- **Errores en cadena (P02):** es una explicación del curso a partir de cómo pasan los datos entre pasos (F-M5-10); ninguna fuente lo
  dice con esas palabras.
- **Equivalencias en inglés (P06):** la versión en español de las directrices no usa *human-in-the-loop*, *on-the-loop* ni
  *in-command*; la equivalencia sale de comparar con los términos en inglés de la Comisión.
- **Aprobación humana automática de Zapier (P07):** su ayuda la sitúa en planes de pago; el contenido solo afirma lo verificado en
  F-H-93 (Zapier gratis permite dos pasos). La tabla de niveles de revisión (P08) y la prueba de controles (P12) son propuestas del
  curso.
