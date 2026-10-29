# Criterios de corrección del 29-10-2026

Pedido del usuario: aplicar la marca **Empoderatech** a todos los recursos, sacar «Conexión con el proyecto» de los contenidos, citar en
**APA 7** con la sección «Referencias bibliográficas» y enlaces que funcionen, sacar el glosario de cada contenido a un documento
aparte llamado **Glosario**, y crear **2 actividades de aplicación práctica por AE** (44). Siguen vigentes los criterios del 28-10
(`docs/CRITERIOS-28-10.md`): audiencia que trabaja, casos solo en `casos/`, máximo 2 fuentes por pantalla, prosa.

## 1. Citas y referencias (APA 7)

- Registro único: `investigacion/referencias-apa.json` (`node scripts/referencias-apa.mjs`). Cada fuente tiene `autor`, `autorCita`,
  `anio`, `titulo`, `sitio`, `url`. Nadie escribe la cita a mano: en el texto va una **marca** y el compilador pone la cita APA.
- Marcas en el texto, al final de la oración que afirma el hecho, antes del punto:
  - `[@F-M1-02]` → (UNESCO, 2024)
  - `[@F-M1-02; @F-H-12]` → (UNESCO, 2024; Google, s. f.)
  - `[n@F-M1-02]` → UNESCO (2024), para la cita narrativa («Según [n@F-M1-02], …»).
- Las letras de APA para mismo autor y año (2024a, s. f.-b) las pone el compilador, por documento.
- Cada pantalla mantiene su línea `fuentes:` (máximo 2): todo id de `fuentes:` aparece como marca en el texto de esa pantalla y toda
  marca está en `fuentes:`.
- La sección final se llama **«## Referencias bibliográficas»** (reemplaza a «## Fuentes») y la escribe
  `node scripts/referencias-apa.mjs --escribir`, en orden alfabético y con el enlace de cada fuente. No se escribe a mano.
- Vale para contenidos, casos y actividades. Los quiz y las infografías no citan.

## 2. Contenido base

- Se quita la sección «## Conexión con el proyecto».
- Se quita la sección «## Glosario»: sus términos pasan a `glosario/M<n>.md` (ver §3).
- El cierre del archivo queda: «## Ideas clave» y «## Referencias bibliográficas».

## 3. Glosario (documento aparte)

`glosario/M<n>.md`, uno por módulo; se compila en un solo documento «Glosario» (Doc, PDF y XML de glosario de Moodle):

```
# Glosario · Módulo 1 · Introducción a la IA generativa y prompt básico

## M1-AE1 · Fundamentos de IA generativa
- **Término**: definición en una o dos frases, como estaba en el contenido.
```

Sin repetir un término dentro del mismo módulo (si dos AE lo definían, queda en el primero). No cita fuentes.

## 4. Actividades de aplicación práctica (2 por AE)

`actividades/M<n>-AE<k>.md`:

```
# Actividades de aplicación práctica · M1-AE1 · Fundamentos de IA generativa

## Actividad 1 · <título>
cubre: H1, C1
fuentes: F-M1-02            ← opcional, solo si la actividad afirma hechos; máximo 2

### Situación
### Lo que vas a hacer
### Lo que entregas
### Cómo se revisa

## Actividad 2 · <título>
…
## Referencias bibliográficas   ← la escribe el script (si no hay fuentes, se omite)
```

- **Actividad 1:** práctica guiada con una situación de oficina (personajes del curso o datos de prueba).
- **Actividad 2:** aplicación a una tarea real de **tu propio cargo**, trabajando con copias sin datos sensibles.
- Solo con lo que enseña el contenido del AE; cubre sus saberes hacer (H) y sus criterios (C) de la planilla, en la sección «Cómo
  se revisa» con el texto del criterio.
- Herramientas gratuitas y usables desde el celular; tuteo; sin casos de empresas reales; sin horas.
- Estilo: los subtítulos `###` de arriba son los únicos; adentro, prosa; máximo una lista numerada (los pasos).

## 5. Marca Empoderatech (manual de marca e-tech, versión 1.0, octubre 2026)

- Escritura: **Empoderatech** en el texto; «e-tech.» solo dentro del logo (archivo, nunca reescrito). Firma de pie: «e-tech |
  empoderatech».
- Colores: noche `#00060F` (fondo de marca), frambuesa `#BE3455` (principal; titulares y destacados sobre blanco), grafito
  `#40444B`, blanco, fucsia `#ED1566` y celeste `#3D9BE9` (solo sobre noche), azul enlace `#116DFF` (enlaces sobre blanco), gris
  claro `#BFC1C3`, gris medio `#808387`. Proporción típica: 60 % noche, 25 % frambuesa, 10 % grafito, 5 % celeste y fucsia.
- Contraste: sobre blanco, frambuesa sí; celeste no (usar azul enlace). Sobre noche: blanco, gris claro, celeste, fucsia; frambuesa
  solo en títulos de 24 px o más.
- Tipografía: **Varela Round** para titulares, botones, etiquetas y cifras (un solo peso, sin negrita); **Montserrat** para el texto
  (alternativa libre de Proxima Nova); en Google Docs editables, títulos en Varela Round y texto en Arial. Minúscula de oración.
- Elementos: chevrón «›» frambuesa antes de cada título de sección; discos (círculos completos) para íconos e isotipo; arcos
  concéntricos frambuesa para separar secciones o procesos; borde rasgado solo uno por pieza, para cerrar.
- Íconos: línea blanca de trazo fino dentro de un círculo grafito.
- Logo: «sobre claro» en documentos y fondos blancos; «principal (sobre oscuro)» sobre noche; resguardo de dos veces el punto;
  mínimo 120 px. Sin estirar, recolorear, sombras ni cajas.
- Voz: verbo al inicio y segunda persona; sin superlativos sin respaldo ni promesas de empleabilidad; sin emojis en piezas formales.
- Piezas SENCE: si el material sale con franquicia o programa SENCE, el logo institucional va primero y con más peso, con la bajada
  «Organismo Ejecutor» junto al de e-tech. Hoy los recursos no llevan logo SENCE (falta la orientación gráfica vigente).
