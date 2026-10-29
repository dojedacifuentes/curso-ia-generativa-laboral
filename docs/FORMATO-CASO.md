# Formato de los casos de aplicación (empresas reales)

La planilla (hoja «Casos y proyecto») trae 11 casos con empresas reales: M1-C1, M1-C2, M2-C1, M2-C2, M3-C1, M3-C2, M4-C1, M4-C2, M4-C3,
M5-C1 y M5-C2. Cada uno se entrega como «Actividad de análisis del caso: preguntas guiadas + aplicación al proyecto (1,5 h)», con
autocorrección y foro. Están todos marcados «Por verificar», con esta regla: **no se inventan empresas, citas ni resultados**.

Cada caso tiene dos archivos:

## 1. Ficha de verificación · `investigacion/casos/<id>.md`

```
# Verificación <id> · <título de la planilla>
Consultado: 2026-10-24
Estado: Verificado | Verificado con ajustes | Descartado

## Referencias bibliográficas
### F-M1C1-01 · <Organismo o empresa> (<fecha exacta>) — <Título>
- URL: …
- Tipo: primaria (sentencia, resolución, comunicado o documento de la empresa, registro oficial) | secundaria (prensa de calidad)
- Respalda: <paráfrasis breve; como máximo una cita de menos de 15 palabras>

## Hechos verificados
- <hecho con fecha> [F-M1C1-01]

## Lo que NO se puede afirmar
- <cifras sin fuente primaria, versiones de prensa no confirmadas, rumores, etc.>

## Ajustes respecto de la planilla
- <si el título o el enfoque de la planilla no calzan con lo verificado, qué cambia>
```

Reglas de la ficha:
- **Fuentes primarias primero.** Para hechos centrales, cifras y citas: la sentencia o resolución, el comunicado de la empresa o el
  documento oficial. La prensa de calidad sirve solo para complementar, con fecha.
- **Cada fuente se abre y se lee.** Si no se puede abrir, no es fuente: va a «Lo que NO se puede afirmar».
- **Cifras:** cada una lleva su fecha y dice quién la informa («según la empresa…»). Una cifra que solo publicó la empresa se presenta
  como cifra informada por la empresa, no como hecho independiente.
- **Casos en evolución** (litigios, cambios de estrategia): se informa el estado a la fecha de consulta y se dice que puede cambiar.
- **Descarte:** si el caso no se puede respaldar en una fuente primaria, el estado es «Descartado» y se propone un reemplazo
  verificable que trabaje los mismos AE (también con ficha).

## 2. Caso para el estudiante · `casos/<id>.md`

```
# <id> · <título>
**Aprendizajes esperados que trabaja:** M1-AE2, M1-AE3
**Hito del proyecto con el que conecta:** Hito 1 …

## 1. Contexto
fuentes: F-M1C1-01
<qué empresa, qué problema, por qué importa; 150-250 palabras>

## 2. Qué pasó
fuentes: F-M1C1-01, F-M1C1-02
<hechos verificados en orden cronológico, con fecha y atribución; 250-400 palabras; una tabla o línea de tiempo si ayuda>

## 3. Análisis guiado
cubre: S2, H1, C1 (códigos de los AE que trabaja, en formato AE:código, p. ej. M1-AE2:S1)
<5 o 6 preguntas numeradas que obligan a aplicar lo aprendido en los AE (remitir a pantallas, p. ej. «revisa M1-AE2 P02»)>

## 4. Aplicación a tu proyecto
<actividad concreta sobre el desafío laboral real de la persona, que alimenta el hito del módulo; producto breve>

## 5. Autocorrección
<para cada pregunta del análisis: los elementos que debería tener una buena respuesta; no una respuesta única>

## 6. Para el foro
<una pregunta de discusión abierta y respetuosa>

## Referencias bibliográficas
- F-M1C1-01 · Organismo (fecha). Título. URL
```

Reglas del caso:
- **Hechos:** solo los de «Hechos verificados» de la ficha, citando `fuentes:`. Las opiniones o interpretaciones se presentan como
  preguntas para la persona, no como hechos.
- **Personas reales:** de las personas naturales involucradas (abogados, empleados), se habla por su rol, no por su nombre. Las
  figuras públicas o las empresas pueden nombrarse cuando son parte central del caso, sin calificarlas.
- **Tono:** sin sensacionalismo ni burla, en español de Chile, tuteo y frases cortas.
- **Audiencia (28-10):** solo personas que están trabajando; la aplicación se hace sobre una tarea de su cargo actual (el desafío
  laboral del proyecto). Ver `docs/CRITERIOS-28-10.md`.
- **Conexión:** los AE y el hito según `data/curso.json`; el análisis remite a pantallas del contenido base de esos AE.

Control: `node scripts/validar-casos.mjs`.
