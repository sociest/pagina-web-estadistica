# Web Actual y Ruta de Evolucion a CMS (Documento Detallado)

## 1. Objetivo del documento

Este documento explica con detalle:

1. Como funciona hoy la web de la Carrera de Estadistica UMSA.
2. Como deberia funcionar cuando se migre a un CMS real.
3. Que decisiones tecnicas conviene tomar para migrar sin romper la UI.
4. Un plan de implementacion por fases para ejecutar en el futuro.

El enfoque es pragmatico: preservar la arquitectura atomica ya construida y cambiar la fuente de contenido de `mock/local` a `CMS/API`.

---

## 2. Estado actual de la web (hoy)

## 2.1 Stack y runtime

- Frontend: React + Vite.
- Estilos: Tailwind CSS + componentes atomicos.
- Iconos: lucide-react.
- Navegacion: react-router-dom (resolucion por pathname).
- Build: `npm run build`.
- Modo dev: `npm run dev`.

## 2.2 Arquitectura funcional actual

La app usa una capa de shell global y una capa de paginas:

1. Shell global (header, footer, layout base).
2. Resolucion de pagina por ruta.
3. Pagina ensamblada por secciones (organisms) y datos (services).

### Flujo de render actual

```text
Browser URL -> App.jsx -> resolvePageByPath(pathname) -> Page Component
-> Organisms -> Molecules -> Atoms
```

## 2.3 Carpetas relevantes y rol real

- `src/App.jsx`: shell principal (Header/Footer + pagina activa).
- `src/routes/pageRegistry.jsx`: registro de rutas activas y backlog futuro.
- `src/pages/*`: paginas de alto nivel (Inicio, Acerca, Acreditacion, Autoridades, Docentes, Convenios, Reglamentos, etc.).
- `src/services/*Data.js`: contenido por pagina (actualmente local).
- `src/components/atoms/*`: piezas visuales base.
- `src/components/molecules/*`: bloques intermedios reutilizables.
- `src/components/organisms/*`: secciones completas listas para ensamblar.

## 2.4 Modelo de datos actual (sin CMS)

Hoy el contenido vive en archivos JS de `src/services`.

Ejemplos:

- `aboutData.js`: historia, mision, vision, logros, hitos, objetivos.
- `accreditationData.js`: credenciales, impacto y beneficios.
- `authoritiesData.js`: autoridades y estructura.
- `staffData.js`: plantel docente/administrativo.
- `conveniosData.js`: convenios, sectores y beneficios.
- `regulationsData.js`: reglamentos, marco legal y resoluciones.

Ventaja actual:

- Alta velocidad para iterar UI.
- Contratos de datos estables para secciones.

Limite actual:

- El equipo no tecnico no puede editar contenido sin tocar codigo.
- No hay flujo de borrador/publicacion.
- No hay versionado editorial separado del versionado Git.

## 2.5 Navegacion actual y crecimiento

La navegacion principal se define en datos mock de menu, mientras que el render de pagina se resuelve en `pageRegistry`.

Esto permite:

- Exponer enlaces de futuras vistas aun no implementadas.
- Conectar nuevas paginas sin tocar el layout base.
- Mantener una evolucion incremental de la plataforma.

## 2.6 Identidad visual y rendimiento

El sitio ya aplica una identidad institucional consistente:

- Paleta institucional (`#00447e`, `#ea580c`).
- Fondo institucional y overlays estadisticos.
- Secciones grandes con curvas, chips, sellos y bloques metricos.

En rendimiento:

- Reduccion de transiciones pesadas.
- Composicion reusable de bloques.
- Build estable en produccion.

## 2.7 Inicio actualizado (home)

La pantalla de inicio fue refinada para mantener la identidad estadistica sin saturar el layout:

1. Hero principal con carrusel y anotaciones estadisticas.
2. Noticias destacadas separadas en mobile, pero unificadas en desktop con el hero.
3. Seccion de accesos rapidos compacta y responsive.
4. Panel de noticias/agenda completo como bloque independiente bajo el fold.

Esta composicion mantiene la UI reutilizable y facilita que, en el futuro, el hero y las noticias lleguen desde CMS sin cambiar el layout.

---

## 3. Como deberia funcionar con CMS

## 3.1 Principio clave

No migrar la UI al CMS.

La UI debe quedarse en React como capa de presentacion. El CMS debe ser solo fuente de contenido (headless).

## 3.2 Arquitectura objetivo (to-be)

```text
Editor (CMS) -> API CMS -> Adaptadores frontend -> ViewModel estable -> UI React atomica
```

Capas objetivo:

1. Capa CMS: modela tipos de contenido y flujo editorial.
2. Capa API: entrega JSON con contenido, relaciones y metadatos.
3. Capa adaptadores (frontend): transforma payload CMS a contratos internos.
4. Capa UI: renderiza sin conocer detalle del CMS.

## 3.3 Beneficios directos del enfoque

- Se mantiene la arquitectura atomica actual.
- El equipo de contenidos puede editar sin despliegue de codigo.
- Se agrega gobernanza editorial (roles, draft, publish).
- Se minimiza riesgo de regresion visual.

---

## 4. Modelo de contenido sugerido para CMS

## 4.1 Entidades base (content types)

### A. GlobalSiteSettings

Campos:

- `siteName`
- `tagline`
- `contactEmail`
- `contactPhone`
- `socialLinks[]`
- `logoPrimary`
- `logoFooter`

### B. NavigationMenu

Campos:

- `key` (main, footer, quick)
- `items[]` con:
  - `label`
  - `href`
  - `external`
  - `children[]`
  - `badge`
  - `order`

### C. Page

Campos:

- `slug`
- `title`
- `status` (draft/published)
- `seo` (title, description, ogImage)
- `sections[]` (referencias polimorficas)

### D. HeroSection

Campos:

- `eyebrow`
- `titleLines[]`
- `description`
- `image`
- `chips[]`
- `ctaPrimary`
- `ctaSecondary`

### E. CardCollectionSection

Campos:

- `sectionTitle`
- `sectionSubtitle`
- `variant`
- `cards[]` con:
  - `title`
  - `subtitle`
  - `description`
  - `icon`
  - `meta`
  - `link`

### F. TimelineSection

Campos:

- `title`
- `events[]` (year, title, description, highlight)

### G. KPISection

Campos:

- `title`
- `kpis[]` (label, value, suffix, colorToken)

### H. ResolutionSection

Campos:

- `title`
- `documentCode`
- `summary`
- `coverImage`
- `documentUrl`

### I. DocumentItem

Campos:

- `name`
- `category`
- `code`
- `version`
- `effectiveDate`
- `pdfFile`
- `status`

## 4.2 Relacion pagina -> secciones

Cada pagina institucional deberia componerse por referencias a secciones reutilizables.

Ejemplo:

- Pagina `institucional/reglamentos`:
  - HeroSection
  - CardCollectionSection (marco normativo)
  - TabSection (reglamentos internos)
  - ResolutionSection
  - BenefitsSection
  - CTASection

---

## 5. Contratos de API recomendados

## 5.1 Endpoint por pagina (simple y estable)

`GET /api/pages/{slug}`

Respuesta sugerida:

```json
{
  "slug": "institucional/reglamentos",
  "title": "Reglamentos y Resoluciones",
  "seo": {
    "title": "Reglamentos y Resoluciones | Estadistica UMSA",
    "description": "Marco legal y normativo de la Carrera de Estadistica",
    "ogImage": "https://cdn.../og-reglamentos.jpg"
  },
  "sections": [
    {
      "type": "hero",
      "payload": { "eyebrow": "Normativa Institucional" }
    },
    {
      "type": "frameworkCards",
      "payload": { "items": [] }
    }
  ]
}
```

## 5.2 Endpoint global para shell

`GET /api/site-shell`

Debe incluir:

- Menus.
- Footer links.
- Datos de contacto.
- Redes.

## 5.3 Estrategia de versionado de API

- Agregar `apiVersion` en respuesta.
- Mantener compatibilidad hacia atras por al menos una version.
- Cambios de schema mayores via endpoint versionado (`/v2/...`).

---

## 6. Adaptadores frontend (pieza mas importante)

## 6.1 Por que son obligatorios

Los adaptadores evitan acoplar JSX a un CMS especifico.

Sin adaptadores:

- Si cambia el CMS, se rompe la UI.
- Si cambia un nombre de campo, se rompe la pagina.

Con adaptadores:

- El impacto se encapsula en `src/services/adapters`.
- La UI sigue recibiendo contratos limpios y estables.

## 6.2 Estructura sugerida

- `src/api/cmsClient.js`
- `src/services/adapters/mapPagePayload.js`
- `src/services/adapters/mapShellPayload.js`
- `src/services/contentService.js`

## 6.3 Ejemplo de adaptador

```js
export function mapRegulationsPage(payload) {
  return {
    hero: {
      eyebrow: payload?.sections?.hero?.eyebrow ?? 'Normativa Institucional',
      title: payload?.sections?.hero?.titleLines ?? ['Repositorio', 'y', 'Marco Legal'],
      description: payload?.sections?.hero?.description ?? '',
      imageUrl: payload?.sections?.hero?.image?.url ?? '',
      chips: payload?.sections?.hero?.chips ?? [],
    },
    framework: payload?.sections?.frameworkCards?.items ?? [],
    tabs: payload?.sections?.tabSection?.tabs ?? [],
    resolution: payload?.sections?.resolution ?? null,
    benefits: payload?.sections?.benefits?.items ?? [],
  }
}
```

---

## 7. Estrategia de carga, cache y fallback

## 7.1 Carga inicial recomendada

1. Cargar shell global (menu/footer).
2. Cargar pagina por slug.
3. Renderizar skeleton mientras llega data.
4. Aplicar fallback local si API falla.

## 7.2 Fallback robusto

Si CMS no responde:

- Se usa data local actual (`src/services/*Data.js`).
- Se registra evento de error.
- Se muestra aviso no intrusivo para admins (opcional).

## 7.3 Cache recomendada

- Cache HTTP (`ETag` o `Cache-Control`) para contenido publico.
- Revalidacion por tiempo (ejemplo 5-15 min).
- Invalidacion por publicacion (webhook CMS si se requiere near-real-time).

---

## 8. Flujo editorial con CMS (operacion real)

## 8.1 Roles recomendados

- `Admin`: configura schemas, permisos y entornos.
- `Editor`: crea/edita contenido y publica.
- `Revisor`: aprueba antes de publicacion.
- `Lector interno`: valida borradores.

## 8.2 Flujo de trabajo

1. Editor crea o actualiza contenido en draft.
2. Revisor valida redaccion y formato.
3. Revisor aprueba cambios.
4. Editor publica.
5. Frontend recibe nuevo contenido via API/cache revalidation.

## 8.3 Reglas editoriales sugeridas

- Campos obligatorios para SEO.
- Imagen OG obligatoria en paginas principales.
- Slug inmutable una vez publicado (o redirects gestionados).
- Validaciones de longitud para titulos y descripciones.

---

## 9. Plan de migracion por fases

## Fase 0 - Preparacion

- Seleccionar CMS headless (Strapi, Contentful, Sanity, Directus, etc.).
- Definir content model minimo viable.
- Definir convenciones de naming de campos.

Entregable: schemas aprobados y checklist de datos iniciales.

## Fase 1 - Capa API + adaptadores

- Implementar `cmsClient`.
- Implementar mapeadores de shell y pagina.
- Integrar en `App` y pages con fallback local.

Entregable: app funcionando con CMS o mock sin romper UI.

## Fase 2 - Migracion de contenido institucional

Migrar primero las paginas institucionales de alto impacto:

1. Acerca
2. Acreditacion
3. Autoridades
4. Docentes
5. Convenios
6. Reglamentos

Entregable: contenido editable desde CMS para paginas criticas.

## Fase 3 - Resto del portal y documentos

- Pregrado, postgrado, estudiantes, investigacion, recursos.
- Repositorio de documentos PDF y metadatos.

Entregable: cobertura editorial completa.

## Fase 4 - Operacion y gobierno

- Dashboard de salud de integracion.
- Logs funcionales (errores API, timeouts, payload invalido).
- Procedimiento formal de rollback editorial.

Entregable: operacion estable y mantenible.

---

## 10. Riesgos y mitigacion

## Riesgo 1: acoplamiento al CMS

Mitigacion:

- Adaptadores obligatorios.
- Contratos internos estables.

## Riesgo 2: cambios de schema no controlados

Mitigacion:

- Versionado de schema.
- Validacion automatica de payload en CI.

## Riesgo 3: degradacion de performance

Mitigacion:

- Cache HTTP.
- Lazy load por seccion.
- Imagenes optimizadas y CDN.

## Riesgo 4: errores de publicacion

Mitigacion:

- Flujo draft -> review -> publish.
- Campos obligatorios y reglas de validacion.

---

## 11. Seguridad y cumplimiento

- No exponer tokens de gestion en frontend.
- Consumir solo endpoints publicos o proxy seguro.
- Configurar CORS y rate limit en API.
- Sanitizar contenido rich-text antes de renderizar.
- Definir politica de subida de archivos (tipo, tamano, antivirus si aplica).

---

## 12. SEO, analytics y observabilidad

## SEO

- Meta title/description por pagina desde CMS.
- OG tags por pagina.
- Canonical URL por slug.

## Analytics

- Eventos de CTA por seccion.
- Scroll depth en paginas institucionales largas.
- Descargas de documentos y tasa de click.

## Observabilidad

- Logging de errores de integracion CMS.
- Alertas por endpoint caido.
- Monitoreo de latencia de API.

---

## 13. Criterios de aceptacion para una migracion exitosa

1. Todas las paginas institucionales cargan desde CMS o fallback sin romper layout.
2. La navegacion principal y footer se editan en CMS.
3. El build de frontend sigue pasando sin cambios de arquitectura.
4. Se puede publicar contenido sin despliegue de codigo.
5. Existen validaciones minimas de SEO y campos requeridos.
6. Existe procedimiento de rollback de contenido.

---

## 14. Checklist operativo (implementacion futura)

## 14.1 Insumos a solicitar a la institucion

Para mantener la web actualizada, solicitar como minimo:

1. Textos institucionales finales por seccion.
2. Logotipos oficiales en PNG y SVG.
3. Fotografias horizontales y verticales en alta resolucion.
4. PDFs oficiales de resoluciones, reglamentos y comunicados.
5. Calendarios academicos y cronogramas actualizados.
6. Contactos oficiales (correo, telefono, ubicacion).
7. Enlaces de redes sociales vigentes.
8. Nombres/cargos actualizados de autoridades y directivas.
9. Listado de convenios, pasantias, convocatorias y documentos de respaldo.
10. Material grafico para banners, heroes y tarjetas de noticias.

## 14.2 Lista de verificacion para actualizacion de contenido

1. Confirmar que la informacion corresponde a la gestion vigente.
2. Validar ortografia, nombres propios y siglas.
3. Verificar que cada imagen tenga una version optimizada para web.
4. Confirmar que todo PDF tenga nombre claro y fecha.
5. Revisar que los enlaces externos esten activos.
6. Comprobar que los textos no rompan la composicion responsive.

## Checklist tecnico

- [ ] Crear `src/api/cmsClient.js`.
- [ ] Crear `src/services/adapters/*`.
- [ ] Implementar `contentService` con fallback.
- [ ] Integrar shell global con API.
- [ ] Integrar pages institucionales con API.
- [ ] Implementar manejo de errores + estados de carga.
- [ ] Validar performance (LCP, CLS, INP).

## Checklist editorial

- [ ] Definir roles y permisos.
- [ ] Modelar tipos de contenido y validaciones.
- [ ] Migrar contenido inicial revisado.
- [ ] Definir calendario de publicaciones.
- [ ] Definir owner por cada seccion.

## Checklist de QA

- [ ] Smoke test de rutas principales.
- [ ] Verificacion responsive.
- [ ] Validacion de links y documentos.
- [ ] Revisar consistencia visual institucional.
- [ ] Ejecutar `npm run build` y pruebas manuales finales.

---

## 15. Recomendacion final

La base actual ya esta bien preparada para CMS porque separa UI y contenido por capas. La mejor estrategia no es rehacer, sino evolucionar:

1. Mantener componentes atomicos tal como estan.
2. Introducir CMS por la capa de datos con adaptadores.
3. Migrar por fases (institucional primero).
4. Operar con fallback para garantizar continuidad.

Con este enfoque, la web puede pasar de un modo "contenido en codigo" a un modo "contenido administrable" con bajo riesgo tecnico y sin perder identidad visual.
