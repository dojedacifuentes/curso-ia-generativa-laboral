# Formato del quiz formativo (quiz juego SCORM)

Un archivo por AE: `quiz/M<n>-AE<k>.md`. Lo lee `node scripts/quiz-juego.mjs`, que genera en `entregables/quiz/<id>/`:
- el juego en HTML (funciona sin internet);
- el paquete SCORM 1.2 (registra el mejor puntaje y la finalización);
- un GIFT para el banco de preguntas de Moodle.

Se revisa con `node scripts/quiz-juego.mjs --solo-validar M1-AE1`.

## Reglas

- **8 preguntas** por AE (lo pide la planilla, columna «Quiz formativo»). Usa los tipos que ahí se nombran: opción múltiple,
  V/F con justificación, ordenar pasos, elegir la mejor variante, detectar el error, etc. Todos se escriben como alternativas:
  - entre 2 y 4 alternativas;
  - **una sola correcta, en negrita**.
- **V/F con justificación:** 3 o 4 alternativas del tipo «Verdadero, porque…» y «Falso, porque…». Solo una tiene el valor y la razón
  correctos.
- **Ordenar pasos:** alternativas con secuencias, por ejemplo «2 → 1 → 3 → 4».
- **Etiquetas de cada pregunta:** van al inicio, entre paréntesis y en cursiva:
  - uno o más códigos del AE (S/H/A/C de `data/curso.json`);
  - **la pantalla `Pnn` del contenido base donde se aprende eso**: es la acción remedial, porque el juego muestra «Repasa: pantalla Pnn
    «título»».
- **Criterios:** entre las 8 preguntas, cada criterio C del AE aparece al menos una vez.
- **De dónde sale cada pregunta:**
  - **Contenido:** solo de `contenido/M<n>/M<n>-AE<k>.md`; nada que no esté ahí.
  - **Distractores:** salen de los recuadros `:::error`, porque son errores reales y plausibles, no absurdos.
  - **Casos:** preferir situaciones laborales (Camila, Andrés, Rosa…) a preguntas de memoria.
- **No repetir textual** los `:::comprueba` del contenido: pueden inspirar, pero el quiz tiene que ser otra práctica.
- **Retroalimentación:** explica por qué la correcta es correcta y por qué falla la tentación más probable. Son 1 a 3 frases.
- **Largo:** enunciado de 45 palabras como máximo; alternativas de 25 palabras como máximo.
- **Ilustración de la portada:** 3 nodos con etiquetas cortas de 1 a 3 palabras, que **no adelanten ninguna respuesta**.
- **Colores:** paleta neutra y bonita sobre fondo oscuro; acentos con buen contraste (por ejemplo cian, coral, ámbar, violeta,
  verde menta). Cada AE de un mismo módulo lleva un acento distinto.

## Plantilla

```
# Quiz M1-AE1 · Fundamentos de IA generativa

**Misión:** entender con qué herramienta vas a trabajar todo el curso
**Cuándo:** al terminar el Rise M1-T1 · Fundamentos de IA generativa, antes de pasar a prompts efectivos.
**Insignia:** Exploración de IA · **Siguiente parada:** Rise M1-T2, prompts efectivos
**Estilo:** acento #22d3ee · acento2 #ff7a59 · fondo neuronas · lema Qué es, cómo responde y dónde falla
**Ilustración:** flujo | Tu pedido (chat) · El modelo (chip) · Tu revisión (escudo)

1. *(S1 · C1 · P03)* Andrés pide dos veces el mismo aviso y recibe dos textos distintos. ¿Qué explica mejor la diferencia?
   - a) El asistente tuvo un error de conexión
   - **b) El modelo elige con algo de azar entre continuaciones probables**
   - c) El modelo buscó un aviso distinto en internet cada vez
   - d) La segunda vez recordó un aviso anterior de otra persona
   *Retroalimentación:* El modelo predice continuaciones probables y elige una con algo de azar; por eso el mismo pedido puede dar textos distintos. No busca un aviso guardado.

2. *(S4 · C2 · P10)* …
```

Íconos disponibles para la ilustración: estrella ok mal play repetir bandera niveles combo bateria comodin sonido silencio candado
trofeo diana escudo escalar doc engranaje bd entrada transformar salida paquete rombo ruta bicho enviar chip llaves chat chispa
numeral barras on.
