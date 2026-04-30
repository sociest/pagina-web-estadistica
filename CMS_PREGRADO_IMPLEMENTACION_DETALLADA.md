# Pregrado: Guia Detallada para Integracion CMS y Soporte

## 1. Objetivo del documento

Este documento define como debe operar la seccion de Pregrado cuando el contenido pase de archivos locales a un CMS (headless), manteniendo la UI React actual.

Incluye:

1. Mapa funcional de todas las pestanas de Pregrado.
2. Diseno de GUI para el editor/soporte en CMS.
3. Estructura de contenido por pantalla.
4. Flujo editorial (borrador, revision, publicacion).
5. Runbook tecnico para soporte operativo.

## 2. Alcance

Este manual cubre las rutas activas de Pregrado:

1. /pregrado/perfil-profesional
2. /pregrado/malla-curricular
3. /pregrado/calendario-academico
4. /pregrado/admisiones
5. /pregrado/convalidaciones
6. /pregrado/modalidades-graduacion

Rutas de referencia en frontend:

1. src/routes/pageRegistry.jsx
2. src/services/mockData.js
3. src/components/organisms/layout/Header.jsx

## 3. Arquitectura actual (as-is)

### 3.1 Patron de render

```text
URL -> App.jsx -> resolvePageByPath(pathname) -> Page de Pregrado
-> Organisms -> Molecules -> Atoms
```

### 3.2 Capa de datos actual

Hoy el contenido de Pregrado se encuentra en estos archivos:

1. src/services/pregradoProfileData.js
2. src/services/pregradoCurriculumData.js
3. src/services/pregradoAdmissionsData.js
4. src/services/pregradoConvalidationData.js
5. src/services/pregradoGraduationData.js

### 3.3 Paginas y composicion actual

1. Perfil Profesional:
   src/pages/PregradoProfessionalProfilePage.jsx
2. Malla Curricular:
   src/pages/PregradoCurriculumPage.jsx
3. Calendario Academico:
   src/pages/PregradoAcademicCalendarPage.jsx
4. Admisiones:
   src/pages/PregradoAdmissionsPage.jsx
5. Convalidaciones:
   src/pages/PregradoConvalidationsPage.jsx
6. Modalidades de Graduacion:
   src/pages/PregradoGraduationPage.jsx

## 4. Principio de migracion a CMS (to-be)

No mover la UI al CMS.

El CMS sera fuente de contenido y la UI React seguira renderizando con contratos estables.

```text
CMS -> API -> Adaptador frontend -> Props de componentes -> UI
```

## 5. Modelo funcional del CMS (GUI recomendada)

## 5.1 Menu lateral del panel (GUI)

1. Dashboard
2. Pregrado
3. Navegacion
4. Biblioteca de documentos
5. Calendario academico
6. Versiones y auditoria
7. Publicaciones
8. Soporte y monitoreo

## 5.2 Seccion Pregrado dentro del CMS

La seccion Pregrado debe tener subtabs:

1. Perfil profesional
2. Plan de estudios y malla
3. Calendario academico
4. Admisiones
5. Convalidaciones
6. Modalidades de graduacion

Cada subtab debe mostrar:

1. Estado: Draft / In Review / Published.
2. Ultima actualizacion y usuario.
3. Botones: Guardar borrador, Solicitar revision, Publicar, Revertir.
4. Preview de URL publica.

## 5.3 Pantalla tipo editor (layout)

```text
[Sidebar] [Listado de bloques] [Formulario de bloque] [Preview live]
```

Columnas sugeridas:

1. Sidebar: modulo y ruta.
2. Bloques: Hero, cards, timeline, tablas, CTA.
3. Formulario: campos del bloque seleccionado.
4. Preview: version responsive de la pagina.

## 6. Contrato de contenido por pestana

## 6.1 Perfil Profesional

Fuente actual:

1. src/services/pregradoProfileData.js

Bloques esperados:

1. Hero
2. Perfil del postulante
3. Competencias del egresado
4. Campo laboral
5. Salidas profesionales

Estructura minima sugerida en CMS:

```json
{
  "slug": "pregrado/perfil-profesional",
  "hero": {
    "eyebrow": "string",
    "title": ["string", "string"],
    "highlights": ["string"]
  },
  "applicantProfile": {
    "title": "string",
    "description": "string",
    "cards": [{ "title": "string", "description": "string", "icon": "string" }]
  },
  "graduateCompetencies": {
    "title": "string",
    "groups": [{ "title": "string", "items": ["string"] }]
  },
  "careerOutcomes": {
    "title": "string",
    "items": [{ "title": "string", "description": "string" }]
  },
  "occupationalField": {
    "title": "string",
    "items": [{ "sector": "string", "roles": ["string"] }]
  }
}
```

## 6.2 Plan de Estudios y Malla Curricular

Fuente actual:

1. src/services/pregradoCurriculumData.js

Bloques esperados:

1. Hero de malla
2. Tabla semestral (asignaturas)
3. Calendario academico embebido
4. Grilla de correlatividades
5. Materias optativas

Campos clave por materia:

1. id
2. n
3. area
4. hp
5. hnp
6. ht
7. cred
8. pre

Estructura sugerida:

```json
{
  "slug": "pregrado/malla-curricular",
  "curriculumHero": { "eyebrow": "string", "title": ["string", "string"], "highlights": ["string"] },
  "curriculumData": [
    {
      "sem": 1,
      "level": "Basico",
      "subjects": [
        {
          "id": "EST 113",
          "n": "Estadistica Descriptiva",
          "area": "stats",
          "hp": 8,
          "hnp": 4,
          "ht": 240,
          "cred": 6,
          "pre": []
        }
      ]
    }
  ],
  "electivesAreas": [{ "title": "string", "items": [{ "id": "string", "n": "string", "pre": "string", "ht": 200, "cr": 5 }] }]
}
```

## 6.3 Calendario Academico

Fuentes actuales:

1. src/services/pregradoCurriculumData.js
2. src/pages/PregradoAcademicCalendarPage.jsx

Bloques esperados:

1. Comunicado institucional
2. Primera mesa de examen
3. Timeline de curso regular
4. Nota de casos especiales

Campos clave:

1. curriculumCalendarMeta
2. examSessionData
3. regularCourseData
4. specialEnrollmentNote

Importante de soporte:

1. Esta info se usa en 2 lugares: pagina propia y bloque embebido en malla.
2. Debe versionarse como fuente unica para evitar desalineacion.

## 6.4 Admisiones

Fuente actual:

1. src/services/pregradoAdmissionsData.js

Bloques esperados:

1. Hero
2. Ingreso regular
3. Requisitos generales
4. Cronograma
5. Modalidades especiales

Estructura sugerida:

```json
{
  "slug": "pregrado/admisiones",
  "admissionsHero": { "eyebrow": "string", "title": ["string", "string"] },
  "regularAdmissions": { "title": "string", "steps": [{ "title": "string", "desc": "string" }] },
  "generalRequirements": { "title": "string", "items": ["string"] },
  "admissionsTimeline": { "title": "string", "events": [{ "date": "string", "title": "string" }] },
  "specialModalities": [{ "id": "string", "title": "string", "requirements": ["string"] }]
}
```

## 6.5 Convalidaciones

Fuente actual:

1. src/services/pregradoConvalidationData.js

Bloques esperados:

1. Hero
2. Busqueda y selector de plan
3. Mapeos 2007->2012
4. Mapeos 2012->2021 (troncales/optativas)
5. Procedimiento

Campos clave para soporte:

1. IDs de materias deben ser unicos por plan.
2. La busqueda depende de texto de old/new id y old/new n.
3. No quitar campos old/new porque rompe filtros.

Estructura minima:

```json
{
  "slug": "pregrado/convalidaciones",
  "convalidationHero": { "title": ["string", "string"] },
  "convalidationData2007to2012": [{ "semester": "string", "items": [{ "old": { "id": "string", "n": "string" }, "new": { "id": "string", "n": "string" } }] }],
  "convalidation2012to2021Troncales": [{ "old": { "id": "string", "n": "string" }, "new": { "id": "string", "n": "string" } }],
  "convalidation2012to2021Optativas": [{ "area": "string", "items": [{ "old": { "id": "string", "n": "string" }, "new": { "id": "string", "n": "string" } }] }]
}
```

## 6.6 Modalidades de Graduacion

Fuente actual:

1. src/services/pregradoGraduationData.js

Bloques esperados:

1. Hero
2. Taller de titulacion
3. Pasos del proceso
4. Tarjetas de modalidades
5. Banner de excelencia

Campos criticos:

1. graduationHero.icon
2. graduationModalities[].icon
3. graduationModalities[].pointIcon

Nota de estabilidad:

Si un icono dinamico llega undefined, React falla con "Element type is invalid".
Siempre definir iconos por defecto en adaptador frontend.

## 7. Contratos de API sugeridos

## 7.1 Endpoint por pagina

GET /api/pages/{slug}

Ejemplo:

```json
{
  "slug": "pregrado/admisiones",
  "status": "published",
  "version": 12,
  "updatedAt": "2026-04-10T12:30:00Z",
  "sections": {
    "admissionsHero": { "eyebrow": "Ingreso", "title": ["Admisiones", "Pregrado"] }
  }
}
```

## 7.2 Endpoint de navegacion

GET /api/navigation/main

Debe devolver los children de Pregrado con rutas activas:

1. /pregrado/perfil-profesional
2. /pregrado/malla-curricular
3. /pregrado/calendario-academico
4. /pregrado/admisiones
5. /pregrado/convalidaciones
6. /pregrado/modalidades-graduacion

## 8. Adaptadores frontend (obligatorio)

Crear adaptadores para convertir payload CMS al contrato que consumen las paginas.

Archivos sugeridos:

1. src/api/cmsClient.js
2. src/services/adapters/pregradoProfileAdapter.js
3. src/services/adapters/pregradoCurriculumAdapter.js
4. src/services/adapters/pregradoAdmissionsAdapter.js
5. src/services/adapters/pregradoConvalidationAdapter.js
6. src/services/adapters/pregradoGraduationAdapter.js

Ejemplo corto:

```js
export function mapGraduationPayload(payload) {
  return {
    graduationHero: {
      icon: payload.hero?.icon ?? 'GraduationCap',
      eyebrow: payload.hero?.eyebrow ?? 'Grado academico',
      title: payload.hero?.title ?? ['Modalidades de', 'Graduacion'],
      highlights: payload.hero?.highlights ?? [],
    },
  }
}
```

## 9. Flujo editorial (GUI)

## 9.1 Roles

1. Editor de contenido: redacta y actualiza.
2. Revisor academico: valida consistencia curricular.
3. Publicador: aprueba version final.
4. Soporte tecnico: atiende incidentes y rollback.

## 9.2 Estados

1. Draft
2. In Review
3. Approved
4. Published
5. Archived

## 9.3 Flujo recomendado

1. Crear o editar bloque.
2. Guardar Draft.
3. Solicitar revision academica.
4. Corregir observaciones.
5. Publicar.
6. Verificar pagina en QA.

## 10. Guia de soporte (runbook)

## 10.1 Checklist rapido ante incidente

1. Verificar que la ruta exista en src/routes/pageRegistry.jsx.
2. Verificar enlace en src/services/mockData.js.
3. Verificar fallback de menu en src/components/organisms/layout/Header.jsx.
4. Verificar que el payload CMS tenga bloques requeridos.
5. Verificar iconos dinamicos no nulos.
6. Ejecutar npm run build.

## 10.2 Incidencias comunes y solucion

1. "No abre la pestana":
   revisar href de menu y path registrado.
2. "Pantalla en blanco":
   validar iconos undefined en payload.
3. "Convalidaciones no filtra":
   validar estructura old/new de materias.
4. "Calendario no coincide entre vistas":
   confirmar que ambas paginas consuman la misma fuente de datos.

## 10.3 Politica de rollback

1. Mantener versionado por pagina en CMS.
2. Ante error productivo, revertir a version previa publicada.
3. Registrar incidente con causa, impacto y fix aplicado.

## 11. Reglas de calidad de contenido

1. IDs de materias sin duplicados dentro del mismo plan.
2. Campos numericos de horas y creditos deben ser enteros.
3. Titulos de secciones maximo 90 caracteres.
4. Descripciones maximo 600 caracteres por card.
5. Sin HTML embebido en campos de texto plano.

## 12. QA funcional antes de publicar

1. Navegacion completa de Pregrado abre sin 404.
2. Malla filtra y muestra correlatividades.
3. Calendario carga mesa de examen y timeline.
4. Admisiones muestra requisitos y cronograma.
5. Convalidaciones filtra por termino y plan.
6. Modalidades renderiza iconos y tarjetas sin errores.
7. Build local en verde: npm run build.

## 13. Plan de implementacion por fases

## Fase 1: Preparacion

1. Definir content types en CMS.
2. Crear endpoints y permisos.
3. Preparar entorno QA.

## Fase 2: Integracion tecnica

1. Implementar cmsClient.
2. Implementar adaptadores.
3. Reemplazar imports locales por loader remoto.

## Fase 3: Operacion editorial

1. Cargar contenido inicial.
2. Validar preview por pagina.
3. Ejecutar QA funcional.

## Fase 4: Go-live

1. Publicar por oleadas (una pestana a la vez).
2. Monitorear logs y feedback.
3. Cerrar con acta tecnica de despliegue.

## 14. Anexo: rutas operativas de Pregrado

1. /pregrado/perfil-profesional
2. /pregrado/malla-curricular
3. /pregrado/calendario-academico
4. /pregrado/admisiones
5. /pregrado/convalidaciones
6. /pregrado/modalidades-graduacion

## 15. Anexo: archivos clave para soporte

1. src/routes/pageRegistry.jsx
2. src/services/mockData.js
3. src/components/organisms/layout/Header.jsx
4. src/pages/PregradoProfessionalProfilePage.jsx
5. src/pages/PregradoCurriculumPage.jsx
6. src/pages/PregradoAcademicCalendarPage.jsx
7. src/pages/PregradoAdmissionsPage.jsx
8. src/pages/PregradoConvalidationsPage.jsx
9. src/pages/PregradoGraduationPage.jsx
10. src/services/pregradoProfileData.js
11. src/services/pregradoCurriculumData.js
12. src/services/pregradoAdmissionsData.js
13. src/services/pregradoConvalidationData.js
14. src/services/pregradoGraduationData.js

## 16. Insumos institucionales a solicitar

Para mantener Pregrado actualizado y preparado para CMS, solicitar a la institucion:

1. Malla curricular vigente y resoluciones de aprobacion.
2. Calendario academico oficial de la gestion actual.
3. Reglamentos, instructivos y resoluciones relacionadas con admisiones, convalidaciones y graduacion.
4. Fotografias de aulas, laboratorios, estudiantes y actividades academicas en alta resolucion.
5. Logotipos institucionales y variantes de uso correcto.
6. Textos oficiales de perfil profesional, mision, vision y campo laboral.
7. Datos actualizados de docentes, coordinaciones y autoridades.
8. Formularios, requisitos y cronogramas de admision vigentes.
9. Documentos de apoyo para validaciones y convalidaciones.
10. Material grafico para heroes, banners y cards de cada pestana.

## 17. Checklist rapido de contenido

1. Confirmar que cada pestaña tenga fuente oficial de datos.
2. Verificar que los enlaces a PDFs no hayan cambiado.
3. Revisar que las imagenes esten optimizadas para web.
4. Validar fechas, titulos y numeracion de materias.
5. Asegurar que el contenido coincida con la gestion vigente.
