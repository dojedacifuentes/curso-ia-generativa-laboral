---
name: curso-produccion
description: Mapa y orden de producción del curso e-learning «IA generativa para entornos laborales» (6 módulos, 22 AE, desde la planilla «Estructura_inicial_contenido_IA_generativa»). Úsala al empezar cualquier trabajo en este proyecto, cuando el usuario pida producir, corregir o regenerar un recurso (contenido base, quiz, infografía, caso, Docs, PDF) o preguntar «en qué va» el curso, y para reutilizar el método en un curso nuevo hecho desde una planilla.
---

# Producción del curso desde la planilla

Proyecto: `Desktop\NATY,PROYECTO01\curso-ia-generativa-laboral\`. Proceso completo explicado en `docs/PROCESO.md`.
**No va en el repo público `naty.proyecto01`.** Solo el PC 1 hace cambios.

## Fuente única y orden

```
planilla (Drive) → data/planilla/*.tsv → data/curso.json → investigación → contenido base → quiz · infografías · casos → Docs/PDF → Drive → auditoría
```

Si algo está mal en un derivado (quiz, Doc, PDF, infografía), **se corrige en la fuente** y se vuelve a generar. Nunca a mano.

| Paso | Skill | Comando | Control |
|---|---|---|---|
| 0. Datos | — | `node scripts/importar-planilla.mjs` (TSV con `scripts/xlsx2tsv.mjs`) | `data/curso.json` |
| 1-2. Investigación y contenido base | `curso-contenido-base` | — | `node scripts/validar-contenido.mjs` |
| 3. Quiz juego e infografías | `curso-quiz-infografias` | `node scripts/quiz-juego.mjs`, `node scripts/infografias.mjs` | `--solo-validar` |
| 4. Casos con empresas reales | `curso-casos-reales` | — | `node scripts/validar-casos.mjs` |
| 5. Docs y PDF | — | `node scripts/compilar-contenidos.mjs` (`--solo-casos`, `--solo-documentos`, `--sin-pdf`) | archivos en `entregables/` |
| 6. Drive | `curso-drive` | — | `search_files` + `comparar-doc.js` |
| 7. Auditoría | `curso-auditoria` | `node scripts/correspondencia.mjs`, `node scripts/auditar.mjs` | 0 errores |

## Reglas que valen para todo

- **Solo lo que dice la planilla.** Cada pantalla cubre códigos S/H/A/C del AE, todos los códigos quedan cubiertos y no entra nada fuera.
- **Nada sin fuente.** Las fuentes se abren y se leen antes de citarlas, y se registran con id `F-…` en `investigacion/`. Si algo
  no se pudo verificar, va a «Alertas» o a «Lo que NO se puede afirmar», nunca al contenido.
- **Casos reales solo con fuente primaria** (sentencia, resolución, documento de la empresa, registro oficial). Si un caso no la
  tiene, se descarta y se reemplaza por otro que trabaje el mismo AE.
- **Audiencia:** personas cesantes o en búsqueda de empleo, y trabajadores. Herramientas gratuitas, que funcionen en el celular.
- **Tono:** español de Chile, tuteo y frases cortas. Personajes ficticios: Camila, Andrés, Rosa y Paula (`docs/PERSONAJES.md`).
- **Lo legal** es orientación general, no asesoría. La Ley 21.719 y el boletín 18623-07 se revisan antes de publicar.
- **Aquí sí hay horas** (RE 2.484). Las reglas de la licitación TD 2026 sobre «sin horas ni modalidad» no se aplican.
- **Nunca borrar** en Drive: lo reemplazado se mueve a «Versiones anteriores».
- **Pedir OK antes** de enviar, publicar o compartir, salvo que el usuario ya lo haya pedido en el chat.
- **Varios chats en paralelo:** antes de editar, mira con `find . -mmin -60` si otra sesión tocó los mismos archivos.

## Quién hace qué

- Claude produce el contenido base, los quiz, las infografías y los casos, los compila y los sube a Drive.
- **Natalia arma los Rise** a partir del contenido base: Claude no los monta.
- La marca del cliente todavía no está definida, así que se usa la paleta neutra.

## Reutilizar en un curso nuevo

1. Copia el proyecto sin `entregables/`, `contenido/`, `quiz/`, `infografias/`, `casos/` ni `investigacion/`.
2. Descarga la planilla nueva en .xlsx, conviértela con `xlsx2tsv.mjs` y ajusta `importar-planilla.mjs` si cambian las columnas.
3. Cambia en `data/drive.json` los ids de la carpeta nueva y sigue el orden de la tabla.
4. Revisa en `FORMATO-CONTENIDO-BASE.md` y en `docs/FORMATO-*.md` lo que dependa del curso: audiencia, personajes, herramientas.

## Verificación

`node scripts/auditar.mjs` termina con 0 errores, y `docs/CORRESPONDENCIA-FONDO.md` no tiene «Parcial» ni «No».
