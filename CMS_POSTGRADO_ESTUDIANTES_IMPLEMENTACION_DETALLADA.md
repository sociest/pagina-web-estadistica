# Postgrado y Estudiantes: Guia Detallada para Integracion CMS y Soporte

## 1. Objetivo del documento

Este documento agrupa las pantallas de Postgrado y Estudiantes que ya fueron implementadas en la web de la Carrera de Estadistica UMSA bajo arquitectura atomica y listas para migracion a CMS.

Incluye:

1. Mapa funcional de las pantallas activas.
2. Contratos de contenido sugeridos para el CMS.
3. Guia de integracion por rutas y navegacion.
4. Lista de insumos que la institucion debe entregar para mantener el contenido actualizado.

---

## 2. Alcance actual

### 2.1 Postgrado

Rutas activas:

1. /postgrado/maestria-terminal
2. /postgrado/maestria-autofinanciada
3. /postgrado/diplomados-especialidades

Fuentes de datos actuales:

1. src/services/postgradoTerminalData.js
2. src/services/postgradoAutofinanciadaData.js
3. src/services/postgradoDiplomadosData.js

### 2.2 Estudiantes

Rutas activas:

1. /estudiantes/guia-seguimiento-tramites
2. /estudiantes/centro-estudiantes
3. /estudiantes/convocatorias-auxiliaturas
4. /estudiantes/pasantias-bolsa-trabajo
5. /estudiantes/sociedad-cientifica

Alias soportados:

1. /estudiantes/tramites
2. /estudiantes/auxiliaturas
3. /estudiantes/pasantias
4. /estudiantes/sociedades-cientificas

Fuentes de datos actuales:

1. src/services/studentsProceduresData.js
2. src/services/studentsCenterData.js
3. src/services/studentsCallsData.js
4. src/services/studentsInternshipsData.js
5. src/services/studentsScientificSocietyData.js

---

## 3. Arquitectura actual (as-is)

La estructura sigue el patron:

```text
URL -> App.jsx -> resolvePageByPath(pathname) -> Page
-> Organisms -> Molecules -> Atoms
```

Reglas de soporte:

1. No embebir data editorial en organismos.
2. Mantener contratos estables en src/services.
3. Reutilizar header/footer globales existentes.
4. Validar siempre con npm run build.

---

## 4. Mapa funcional por pantalla

### 4.1 Postgrado

#### Maestria Terminal

Bloques esperados:

1. Hero.
2. Perfil del programa.
3. Malla/resumen de modulos.
4. Requisitos.
5. CTA de postulacion.

#### Maestria Autofinanciada

Bloques esperados:

1. Hero.
2. Enfoque y beneficios.
3. Modalidades de pago.
4. Requisitos.
5. FAQ / contacto.

#### Diplomados y Especialidades

Bloques esperados:

1. Hero.
2. Catalogo de diplomados.
3. Requisitos generales.
4. Modal fundacional / detalle.
5. CTA de inscripcion.

### 4.2 Estudiantes

#### Guia y Seguimiento de Tramites

Bloques esperados:

1. Hero con busqueda.
2. Sistemas de tramite (CHASQUI / AYNI).
3. Flujo de procedimientos.
4. Requisitos y documentos.
5. Guia de uso y alertas.

#### Centro de Estudiantes

Bloques esperados:

1. Hero.
2. Servicios del CEE.
3. Estructura de representacion.
4. Directiva y delegados.
5. Canales de contacto.

#### Convocatorias y Auxiliaturas

Bloques esperados:

1. Hero con filtros.
2. Lista de convocatorias.
3. Guia de postulacion.
4. Requisitos generales.
5. Documentos oficiales y alertas.

#### Pasantias y Bolsa de Trabajo

Bloques esperados:

1. Hero.
2. Modalidades de pasantia.
3. Proceso paso a paso.
4. Banco de plazas.
5. Requisitos, documentos y testimonios.

#### Sociedad Cientifica

Bloques esperados:

1. Hero.
2. Lineas de investigacion.
3. Beneficios y admision.
4. Repositorio de publicaciones.
5. Red institucional y logros.

---

## 5. Contratos de contenido sugeridos

### 5.1 Postgrado

Estructura base recomendada por pagina:

```json
{
  "slug": "postgrado/diplomados-especialidades",
  "hero": {
    "eyebrow": "string",
    "title": ["string", "string"],
    "description": "string",
    "ctaLabel": "string"
  },
  "catalog": {
    "title": "string",
    "items": [
      {
        "title": "string",
        "description": "string",
        "duration": "string",
        "status": "string",
        "icon": "string"
      }
    ]
  },
  "requirements": {
    "title": "string",
    "items": ["string"]
  }
}
```

### 5.2 Estudiantes

#### Convocatorias y Auxiliaturas

```json
{
  "slug": "estudiantes/convocatorias-auxiliaturas",
  "hero": {
    "eyebrow": "string",
    "title": ["string", "string"],
    "description": "string"
  },
  "calls": [
    {
      "id": "string",
      "title": "string",
      "desc": "string",
      "pubDate": "string",
      "closeDate": "string",
      "status": "string",
      "plazas": 0
    }
  ]
}
```

#### Pasantias y Bolsa de Trabajo

```json
{
  "slug": "estudiantes/pasantias-bolsa-trabajo",
  "hero": {
    "eyebrow": "string",
    "title": ["string", "string"],
    "description": "string",
    "ctaLabel": "string"
  },
  "modalities": [
    {
      "title": "string",
      "tag": "string",
      "desc": "string",
      "tone": "blue|orange|teal"
    }
  ],
  "offers": [
    {
      "company": "string",
      "role": "string",
      "area": "string",
      "reqs": "string",
      "type": "string",
      "date": "string"
    }
  ]
}
```

#### Sociedad Cientifica

```json
{
  "slug": "estudiantes/sociedad-cientifica",
  "hero": {
    "eyebrow": "string",
    "title": ["string", "string"],
    "description": "string",
    "ctaLabel": "string"
  },
  "researchLines": [
    {
      "title": "string",
      "desc": "string",
      "tone": "blue|orange|teal"
    }
  ],
  "papers": [
    {
      "title": "string",
      "author": "string",
      "year": "string",
      "tag": "string"
    }
  ]
}
```

---

## 6. Navegacion y rutas que deben mantenerse sincronizadas

La fuente de verdad para links visibles es:

1. src/services/mockData.js
2. src/components/organisms/layout/Header.jsx
3. src/routes/pageRegistry.jsx
4. src/routes/AppRouter.jsx

Regla:

1. Si se agrega una pantalla, registrar ruta y link al mismo tiempo.
2. Si cambia un alias, actualizar mock y fallback del header.

---

## 7. Checklist de insumos institucionales a solicitar

### 7.1 Postgrado

1. Programas oficiales de maestria, diplomados y especialidades.
2. Requisitos de admision y formularios actualizados.
3. Cronogramas de inscripcion y fechas de inicio/fin.
4. Fotografias de aulas, docentes, ceremonias y graduaciones.
5. PDFs de reglamentos y resoluciones del postgrado.
6. Logos y banners de uso institucional.
7. Contactos de coordinacion y correo de informes.

### 7.2 Estudiantes

1. Convocatorias oficiales y documentos de convocatoria.
2. Requisitos para auxiliares, pasantias y sociedad cientifica.
3. Listado de autoridades estudiantiles y directivas vigentes.
4. Fotografias de actividades del CEE, eventos y reuniones.
5. PDFs de formularios, reglamentos, guias y notas modelo.
6. Calendario de actividades estudiantiles del semestre.
7. Enlaces oficiales de canales de contacto y redes.

### 7.3 Fotos y material grafico a pedir siempre

1. Fotos horizontales de portada (hero) en alta resolucion.
2. Fotos verticales para cards/testimonios.
3. Imagenes de grupos de estudiantes y actividades reales.
4. Imagenes de laboratorios, aulas y espacios institucionales.
5. Versiones limpias de logos y escudos.
6. Capturas o artes para banners, posters y noticias.

---

## 8. Recomendaciones de integracion CMS

1. Mantener adaptadores por pagina para no acoplar JSX al CMS.
2. Definir slugs estables y no romper aliases antiguos.
3. Validar payloads con defaults seguros.
4. Usar fallback local si el CMS no responde.
5. Publicar cambios en lote cuando se actualicen varias secciones relacionadas.
