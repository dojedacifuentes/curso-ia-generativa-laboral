# Actividades de aplicación práctica · M5-AE3 · Supervisión humana y riesgos

## Autoevaluación 1 · Controles para el flujo de reclamos de Paula
cubre: H1, C1, C2
fuentes: F-M5-14, F-M5-12
entrega: autoevaluacion

### Instrucción general

Vas a ayudar a Paula a decidir dónde revisa una persona en su flujo de reclamos y qué hacer si algo falla. Con un caso ficticio
practicas el mapa de riesgos, los puntos de control y el plan de contingencia que después aplicarás a tu flujo. Es una
autoevaluación: no se envía ni lleva nota. Haz la actividad por tu cuenta, compárala con la respuesta modelo del final y revisa tu
trabajo con la rúbrica de autoevaluación.

### Situación

Paula, ejecutiva de atención al cliente en una tienda de electrodomésticos, ya corrigió el problema de su flujo: los reclamos con
faltas o en tono informal quedaban en urgencia «baja» y nadie los leía. Ahora su jefatura quiere sumarle un
paso. El flujo quedaría así: llega un reclamo por el formulario de la tienda; la IA lo clasifica en urgencia alta, media o baja y lo
resume en una línea; se agrega una fila en la planilla de reclamos; el equipo atiende por orden de urgencia; y un correo automático le
dice al cliente en qué plazo lo van a contactar según su urgencia.

Antes de aceptar, Paula quiere decidir dónde revisa una persona y qué hacer si algo falla. Tiene presente lo que le pasó: el NIST
describe el sesgo de automatización como confiar de más en lo que entrega un sistema automático, y ese exceso de confianza agrava los
errores [@F-M5-14]. Tú vas a ayudarla a armar los controles. El flujo, la tienda y los reclamos son ficticios.

### Lo que vas a hacer

1. Haz un mapa de riesgos: para cada uno de los cinco pasos, escribe qué podría salir mal, si es un error en cadena, un problema de privacidad o un sesgo, y qué pasaría si nadie lo nota.
2. Clasifica el riesgo de cada paso en bajo, alto o «decide algo importante sobre una persona».
3. Ubica los puntos de control donde el riesgo es mayor, sobre todo antes de que algo salga hacia el cliente, y elige para cada uno la forma de supervisión: participación humana, control humano o mando humano.
4. Escribe tres o cuatro criterios de aprobación para el punto de control más importante, cada uno como una pregunta de sí o no que se responda en pocos segundos.
5. Propón las columnas de supervisión que le faltan a la planilla de reclamos, incluidas «Dato original», «Estado» y «Revisó».
6. Escribe el plan de contingencia con sus seis respuestas: cómo se dan cuenta, cómo lo detienen, cómo sigue el trabajo mientras tanto, cómo recuperan lo que falló, a quién avisan y quién responde.

Para decidir cuánta revisión pide cada paso, usa la regla de las directrices éticas de la Comisión Europea: cuanto menor sea la
supervisión posible, mayores deben ser las verificaciones [@F-M5-12]. Fíjate en que el correo al cliente es el paso más difícil de
revertir, porque un correo enviado no se puede recoger.

### Lo que preparas

Deja lista una tabla con los cinco pasos, su riesgo, si lleva punto de control, la forma de supervisión y la razón. Debajo, los
criterios de aprobación del punto principal, las columnas nuevas de la planilla y el plan de contingencia con las seis respuestas, con
un responsable con nombre y un reemplazo para cuando esa persona no esté.

### Rúbrica de autoevaluación

Cuando termines, compara tu trabajo con la respuesta modelo y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Mapea y clasifica los riesgos | Los cinco pasos tienen qué podría salir mal, el tipo de riesgo, qué pasaría si nadie lo nota y su nivel. | Están los cinco pasos, pero a alguno le falta el tipo de riesgo, la consecuencia o el nivel. | Te faltan pasos, o tus riesgos no se relacionan con el flujo de Paula. |
| Define puntos de control según el riesgo | Cada punto de control está en un paso de riesgo alto, pusiste uno antes de que algo salga hacia el cliente y la forma de supervisión de cada uno calza con su riesgo y tiene su razón. | Tus puntos están en pasos de riesgo alto, pero te falta el control antes de lo que sale al cliente o una forma de supervisión no calza con su riesgo. | No hay puntos de control, o están en pasos de riesgo bajo sin razón. |
| Fija criterios de aprobación y registro | Tienes tres o cuatro criterios que se responden con sí o no, alguno apunta al error que el flujo ya tuvo, y tus columnas incluyen «Dato original», «Estado» y «Revisó». | Los criterios están, pero alguno no se responde con sí o no, o te faltan columnas. | No hay criterios de aprobación ni columnas de supervisión. |
| Elabora el plan de contingencia | Tu plan responde las seis preguntas con acciones concretas: dónde se pausa el flujo, cómo se sigue a mano, cómo se corrige lo que ya salió y quién responde, con nombre y reemplazo. | Respondes las seis preguntas, pero alguna con una acción vaga o sin responsable con nombre o reemplazo. | Te faltan varias respuestas, o el responsable es «el sistema». |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de seguir con el tema siguiente.

### Respuesta modelo

**Mapa de riesgos y puntos de control**

| Paso | Qué podría salir mal | Tipo | Si nadie lo nota | Nivel | Punto de control y forma |
|---|---|---|---|---|---|
| 1. Llega el reclamo por el formulario | El formulario pide más datos del cliente de los necesarios | Privacidad | Se guardan datos personales que nadie usa | Bajo | No; se revisa una vez qué pide el formulario |
| 2. La IA clasifica y resume | Deja en «baja» reclamos graves con faltas o en tono informal, o el resumen cambia lo que pide el cliente | Sesgo y error en cadena | Un reclamo grave espera días | Alto; también vale «decide algo importante sobre una persona», porque fija cuándo la atienden | Sí: participación humana, una persona aprueba cada urgencia antes de que se use, así la decisión queda en sus manos |
| 3. Fila en la planilla | Se pierde el texto original o se reemplazan datos | Error en cadena | No se puede reconstruir qué pasó | Bajo | Control humano: revisar una muestra del registro una vez al día |
| 4. El equipo atiende por urgencia | Nadie lee lo que quedó en «baja» | Sesgo | Se repite el error que el flujo ya tuvo | Alto | Sí: revisión diaria de todos los reclamos en «baja» |
| 5. Correo automático al cliente | Promete un plazo según una urgencia mal puesta | Error en cadena | El cliente espera un plazo que no se cumplirá, y el correo no se puede recoger | Alto | Sí: el correo sale solo cuando la urgencia está aprobada (participación humana) |

Además, la jefatura tiene el mando humano: decide cada mes si el flujo sigue en uso.

**Criterios de aprobación del punto principal (antes del correo)**

- ¿La urgencia calza con lo que pide el cliente, sin importar cómo está escrito?
- ¿El resumen dice lo mismo que el reclamo?
- ¿El plazo del correo corresponde a la urgencia aprobada?
- ¿Revisé hoy los reclamos en «baja»?

**Columnas nuevas.** «Dato original» (el texto del reclamo), «Urgencia de la IA», «Urgencia aprobada», «Estado» («por revisar»,
«aprobado» o «corregido»), «Revisó» y «Fecha de revisión».

**Plan de contingencia**

1. Cómo se dan cuenta: por la revisión diaria de los reclamos en «baja», por un cliente que reclama un plazo incumplido o por un error
   en el historial de ejecuciones.
2. Cómo lo detienen: Paula pausa el flujo en la herramienta; tiene permiso para hacerlo.
3. Cómo sigue el trabajo: el equipo lee los reclamos directo del formulario, los ordena a mano y responde con una plantilla de correo.
4. Cómo recuperan: revisan los reclamos desde el último día en que todo funcionó, los reclasifican y escriben con el plazo correcto a los
   clientes que recibieron uno equivocado.
5. A quién avisan: a la jefatura, al equipo y a los clientes afectados.
6. Quién responde: Paula; si no está, Javiera, compañera de su equipo.

**Errores frecuentes**

- Poner el punto de control después del correo al cliente, cuando el plazo equivocado ya salió.
- Olvidar el sesgo que el flujo ya tuvo y no incluir ningún criterio sobre los reclamos en «baja».
- Escribir «el sistema avisa» como responsable, o no decir cómo se corrigen los correos que ya se enviaron.

## Autoevaluación 2 · Supervisión y contingencia para tu flujo
cubre: H1, C1, C2
fuentes: F-M5-13, F-M5-06
entrega: autoevaluacion

### Instrucción general

Vas a agregar a tu flujo los controles humanos y el plan de contingencia que necesita antes de pensar en usarlo con datos reales, y
vas a medir si esos controles detectan errores. Con esto completas tu prototipo, que es el Hito 5 de tu proyecto del curso. Es una
autoevaluación: no se envía ni lleva nota. Haz la actividad por tu cuenta, compárala con la respuesta modelo del final y revisa tu
trabajo con la rúbrica de autoevaluación. Como no se envía, puedes trabajar con tu caso real; igual reemplaza nombres, RUT, montos y
datos de clientes por datos inventados.

### Situación

Tu flujo del tema anterior funciona, pero todavía corre sin que nadie revise. Antes de que tu empresa pueda pensar en usarlo con datos
reales, necesita controles y un plan para cuando falle. El marco de gestión de riesgos de IA del NIST pide definir y documentar los
procesos de supervisión humana y los roles de cada persona, y tener mecanismos y responsables para desconectar o desactivar un sistema
que no funciona como se espera [@F-M5-13]. La guía de la Universidad de Bath, por su parte, pide un plan de contingencia para todo flujo
importante [@F-M5-06].

Sigue trabajando en tu cuenta de práctica, con datos inventados o con copias sin datos sensibles.

### Lo que vas a hacer

1. Haz el mapa de riesgos de tu flujo, paso por paso: errores en cadena, privacidad y sesgo.
2. Define los puntos de control según el riesgo de cada paso, con su forma de supervisión y la razón, y revisa si algún paso decide algo importante sobre una persona; si es así, esa decisión la toma una persona.
3. Escribe tres o cuatro criterios de aprobación para cada punto de control y agrega a tu planilla las columnas de supervisión, con el valor «por revisar» hasta que alguien apruebe.
4. Ubica en tu herramienta dónde se pausa o se desactiva el flujo y revisa que agregue filas en vez de reemplazar datos.
5. Escribe tu plan de contingencia con las seis respuestas, pensando en tu equipo y en la forma manual de hacer la tarea.
6. Prepara diez casos ficticios, siembra un error en tres de ellos y corre el flujo sin el control y con el control.
7. Anota cuántos errores llegaron al resultado en cada corrida, cuántas falsas alarmas hubo y cuánto te tomó revisar, y escribe una conclusión de dos líneas.

Si alguna respuesta del plan es «no sé», ese es el punto débil que tienes que resolver antes de mostrarle el flujo a tu jefatura.

### Lo que preparas

Deja listos tu mapa de riesgos con los puntos de control, los criterios de aprobación, una captura de la planilla con las columnas de
supervisión y datos de prueba, el plan de contingencia y la tabla con y sin control con tu conclusión. Con esto completas tu prototipo.

### Rúbrica de autoevaluación

Cuando termines, compara tu trabajo con la respuesta modelo y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Define puntos de control según el riesgo | Tu mapa cubre cada paso, cada punto de control se justifica por el riesgo de su paso, lo que sale hacia otras personas se revisa antes y toda decisión importante sobre una persona la toma una persona. | Tu mapa está, pero algún punto de control no se justifica o un paso que sale hacia otras personas queda sin revisión. | No hay mapa de riesgos ni puntos de control. |
| Fija criterios de aprobación y registro | Tus criterios son preguntas de sí o no y la captura muestra la planilla con las columnas de supervisión y el valor «por revisar». | Los criterios están, pero alguno no es de sí o no, o tu planilla no muestra las columnas de supervisión. | No hay criterios ni columnas de supervisión. |
| Evalúa el efecto del control | Tienes diez casos con tres errores sembrados, tu tabla compara con y sin control en errores que llegaron, falsas alarmas y tiempo, y tu conclusión dice si el control vale lo que cuesta. | La prueba está, pero te falta una de las tres medidas o tu conclusión no dice si el control vale lo que cuesta. | No hay prueba con y sin control. |
| Elabora el plan de contingencia | Las seis respuestas son concretas para tu flujo, con la forma manual de seguir y un responsable con nombre y reemplazo. | Están las seis respuestas, pero alguna es vaga o te falta el reemplazo. | Te faltan varias respuestas, o hay respuestas «no sé» sin resolver. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de seguir con el tema siguiente.

### Respuesta modelo

Este es un ejemplo resuelto con el flujo de Andrés, encargado de bodega: cuando marca un despacho como «atrasado» en la planilla, la IA
redacta el aviso al cliente y lo deja en la columna «Borrador». Tu flujo será distinto, pero la lógica es la misma.

**Mapa de riesgos y puntos de control**

| Paso | Riesgo | Nivel | Control |
|---|---|---|---|
| Andrés marca el despacho como «atrasado» | Marca la fila equivocada | Bajo | Ninguno extra: el error se ve en el borrador |
| La herramienta lee la fila | Una compañera anota la fecha en otro formato y el dato llega mal (error en cadena) | Alto | Se revisa en el punto de control del borrador |
| La IA redacta el aviso | Lee la fecha al revés o inventa una que la planilla no dice | Alto | Participación humana: Andrés revisa cada borrador |
| Andrés envía el aviso al cliente | Un aviso con fecha equivocada no se puede recoger | Alto | El aviso sale solo con estado «aprobado» |

Ningún paso decide algo importante sobre una persona: el flujo informa una fecha que ya está en la planilla.

**Criterios de aprobación.** ¿El número de pedido coincide con la planilla? ¿La fecha nueva es la misma de la planilla? ¿El aviso
promete solo lo que está confirmado? ¿El tono es adecuado para el cliente?

**Registro.** Columnas «Fecha», «Dato original», «Resultado de la IA», «Estado» (parte en «por revisar»), «Revisó» y «Observación».
Por ejemplo: pedido 415, nueva fecha 05-12; la IA escribió «Llegará el 12 de mayo»; estado «Corregido»; observación «La IA leyó la fecha
al revés».

**Prueba con y sin control.** Diez casos ficticios, con tres errores sembrados: una fecha ambigua, una fila con el teléfono del
contacto en la observación y un despacho que no debía generar aviso.

| Indicador | Sin control | Con control |
|---|---|---|
| Errores que llegaron al resultado | 3 de 3 | 0 de 3 |
| Falsas alarmas | — | 1 |
| Tiempo de revisión | — | 6 minutos |

Conclusión: «El control detectó los tres errores con una falsa alarma y 6 minutos de revisión. Vale la pena: corregir un aviso ya
enviado cuesta más que eso».

**Plan de contingencia.** Andrés se da cuenta si ve un borrador sin fecha, una fecha distinta a la de la planilla o el reclamo de un
cliente. Pausa el escenario desde su cuenta y, mientras tanto, escribe los avisos con la plantilla manual de su biblioteca. Después
compara los avisos de la semana con la planilla y, si uno salió mal, escribe al cliente para corregirlo. Avisa a su jefatura y a ventas.
Responde él y, si está de vacaciones, su compañera de turno.

**Qué debe tener la tuya.** Un mapa que cubra cada paso de tu flujo, con puntos de control justificados por el riesgo y una revisión
antes de todo lo que sale hacia otras personas; criterios de sí o no; una captura de tu planilla con las columnas de supervisión y el
valor «por revisar»; la prueba con diez casos y tres errores sembrados, medida en errores, falsas alarmas y tiempo, y un plan con las
seis respuestas, la forma manual de seguir y un responsable con nombre y reemplazo. Comprueba también que tu flujo agrega filas y no
reemplaza datos.

**Errores frecuentes**

- Dejar sin revisión lo que sale hacia otras personas, o dejar que el flujo decida sobre una persona.
- No medir el tiempo de revisión, o sembrar errores que tus criterios no pueden detectar sin comentarlo.
- Escribir un plan que, para seguir trabajando, depende de la misma herramienta que falló, o responder «el equipo» en vez de una persona.

## Referencias bibliográficas

- Grupo independiente de expertos de alto nivel sobre inteligencia artificial. (2019). *Directrices éticas para una IA fiable*. Comisión Europea. https://ec.europa.eu/newsroom/dae/document.cfm?doc_id=60423
- National Institute of Standards and Technology. (2023). *Artificial intelligence risk management framework (AI RMF 1.0) (NIST AI 100-1)*. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- University of Bath. (s. f.). *Automation standards for Microsoft Power Automate*. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
