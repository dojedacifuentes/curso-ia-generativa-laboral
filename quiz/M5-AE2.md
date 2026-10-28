# Quiz M5-AE2 · Flujos simples con IA

**Misión:** armar, probar y corregir un flujo que conecte la IA con correo, planillas o calendario
**Cuándo:** al terminar el Rise M5-T2 · Flujos simples con IA, antes de pasar a supervisión humana y riesgos.
**Insignia:** Flujo armado · **Siguiente parada:** Rise M5-T3, supervisión humana y riesgos
**Estilo:** acento #34d399 · acento2 #22d3ee · fondo circuito · lema Disparador, pasos, datos y pruebas
**Ilustración:** flujo | Tu tarea (doc) · Tu flujo (engranaje) · Tus pruebas (bicho)

1. *(S1 · P02)* Lee este flujo: «Cada viernes a las 17:00, la IA resume las filas nuevas de la planilla de pedidos y envía el resumen por correo a la jefatura». ¿Cuál es el disparador?
   - a) El resumen que escribe la IA
   - b) Las filas nuevas de la planilla de pedidos
   - **c) Cada viernes a las 17:00**
   - d) El correo que recibe la jefatura
   *Retroalimentación:* El disparador es el evento que inicia el flujo; aquí, la hora programada. Las filas nuevas son los datos que viajan entre pasos, y el resumen y el correo son acciones.

2. *(S1 · S2 · P03)* Andrés quiere que, cada vez que termina de revisar un camión que llega a la bodega, se anoten en una planilla la hora y el proveedor, justo cuando él lo indique. ¿Qué disparador le sirve?
   - a) Automatizado: cuando llega un correo nuevo
   - **b) Instantáneo o manual: cuando aprieta un botón en el teléfono**
   - c) Programado: todos los días a las 18:00
   *Retroalimentación:* El registro depende de que Andrés termine la revisión y lo decide él: eso es un disparador manual, que también se aprieta desde el teléfono. Uno programado anotaría a una hora fija, haya llegado un camión o no.

3. *(H1 · C1 · P07)* Ordena el flujo de práctica de Camila: (1) agregar una fila en la planilla con la respuesta de la IA; (2) llega un correo nuevo; (3) la IA clasifica y resume el correo; (4) seguir solo si el asunto contiene «[PRUEBA]».
   - a) 2 → 3 → 4 → 1
   - b) 4 → 2 → 3 → 1
   - c) 2 → 4 → 1 → 3
   - **d) 2 → 4 → 3 → 1**
   *Retroalimentación:* Cada paso usa datos de los anteriores: primero llega el correo, la condición lo filtra antes de que la IA lo lea y la fila se escribe con lo que la IA ya respondió. Poner la condición después de la IA deja pasar a la IA correos que no son de prueba.

4. *(S1 · A1 · P04)* En el paso de Google Sheets, Camila configuró: Fecha ← fecha de Gmail; Remitente ← «proveedor1@prueba.cl», escrito a mano; Asunto ← asunto de Gmail; Análisis ← respuesta de la IA. ¿Qué error tiene?
   - **a) Remitente está escrito a mano: todas las filas dirán el mismo correo**
   - b) Análisis no puede venir de la IA: solo se mapean datos del disparador
   - c) Fecha debería escribirse a mano para que no cambie entre filas
   - d) Ninguno: el flujo guardará bien cada correo
   *Retroalimentación:* Un texto escrito a mano se repite igual en cada ejecución; el dato que cambia se mapea desde el paso anterior. Se puede mapear desde cualquier paso previo, también desde la respuesta de la IA.

5. *(S3 · A1 · P06)* Andrés va a conectar la plataforma no-code con Gmail para probar su flujo, y la plataforma le pide permiso para leer el correo. ¿Qué es lo más prudente?
   - a) Conectar su correo del trabajo, porque tiene más correos para probar
   - **b) Conectar una cuenta de práctica con correos ficticios y leer los permisos antes de aceptar**
   - c) Aceptar sin leer, porque todas las plataformas piden los mismos permisos
   - d) Reenviarse correos reales de clientes para que la prueba sea realista
   *Retroalimentación:* Conectar un servicio es darle llaves de tu cuenta a otra herramienta. Con la bandeja del trabajo, el flujo podría mandar a la IA datos de clientes o de la empresa; por eso se practica con una cuenta de prueba y datos inventados.

6. *(S4 · C2 · A2 · P11)* Andrés probó su flujo con tres correos «[PRUEBA]» con pedidos y los tres salieron bien. ¿Qué caso le conviene agregar a su plan de pruebas?
   - a) Tres correos «[PRUEBA]» más con pedidos, para confirmar
   - b) Un correo real de un cliente, para ver cómo responde
   - c) Ninguno: si tres salieron bien, el flujo está listo
   - **d) Un correo sin «[PRUEBA]» en el asunto, para comprobar que la condición lo detiene**
   *Retroalimentación:* Probar es buscar a propósito los casos en que podría fallar. El correo sin «[PRUEBA]» comprueba que la condición protege los demás correos; repetir casos iguales gasta usos sin enseñar nada nuevo.

7. *(S4 · C2 · P12)* Camila cambió el orden de dos pasos de su escenario de práctica. Desde entonces, cada fila nueva trae la columna «Análisis de la IA» vacía, aunque el resto de los datos llega bien. ¿Qué revisa primero?
   - **a) El mapeo de esa columna, porque reordenar pasos puede romperlo**
   - b) El disparador, porque el flujo no está corriendo
   - c) Nada: cambia de herramienta, porque esta ya falló
   - d) La instrucción de la IA, para pedirle resúmenes más largos
   *Retroalimentación:* Un campo vacío indica un mapeo roto, y reordenar o duplicar pasos puede romperlo. El disparador sí funciona, porque las filas nuevas llegan; la mayoría de las fallas está en la configuración, no en la herramienta.

8. *(A1 · C1 · P13)* Una compañera revisará el flujo de Andrés mientras él está de vacaciones. ¿Qué ficha le sirve más?
   - a) «Escenario 3»: funciona bien, no tocar
   - b) «Aviso de atraso»: lo armé con IA; si falla, llamarme
   - **c) «M5 · Aviso de atraso · v2»: propósito, disparador, pasos, datos, dependencias y pruebas**
   - d) «M5 · Aviso de atraso · v2», con una captura del flujo
   *Retroalimentación:* Una ficha completa permite revisar y mantener el flujo sin quien lo armó: nombre con convención y versión, propósito, disparador, pasos, datos, dependencias y pruebas. Un buen nombre solo, o una captura, no dice qué entra, qué sale ni qué se probó.
