# Documentación Técnica - Web Carrera de Estadística (UMSA)

## Introducción

La web de la Carrera de Estadística - UMSA fue construida como una aplicación React + Vite enfocada en tres objetivos principales:

1. Presentación institucional sólida y moderna.
2. Escalabilidad de frontend a mediano y largo plazo.
3. Transición fluida hacia un CMS futuro sin reescribir la UI.

El proyecto está diseñado para desacoplar contenido y presentación. Por ello, la capa visual ya está estructurada en componentes reutilizables, mientras que los datos viven en una fuente mock centralizada que puede reemplazarse por una API real.

## Documentos de Operacion CMS

1. Institucional (detalle completo): `CMS_IMPLEMENTACION_DETALLADA.md`
2. Pregrado (detalle completo + guia GUI soporte): `CMS_PREGRADO_IMPLEMENTACION_DETALLADA.md`
3. Postgrado + Estudiantes (detalle completo): `CMS_POSTGRADO_ESTUDIANTES_IMPLEMENTACION_DETALLADA.md`

### Actualizacion reciente de la home

La portada actual ya no debe documentarse como un bloque unico plano. Ahora el inicio tiene:

1. Hero principal con carrusel estadistico.
2. Noticias destacadas separadas en mobile y integradas con el hero en desktop.
3. Accesos rapidos compactos y responsivos.
4. Panel de noticias/agenda como seccion propia bajo el hero.

Esto es importante para el futuro CMS porque la home ya quedo lista para recibir hero, noticias y accesos como contratos desacoplados.

---

## Arquitectura del Proyecto

### ¿Por qué Atomic Design?

Se adopta Atomic Design para controlar complejidad, reutilizar piezas visuales y facilitar mantenimiento por pasantes/equipos futuros.

- Atoms: piezas básicas de interfaz.
- Molecules: combinación de atoms para resolver interacciones pequeñas.
- Organisms: secciones completas de página que ensamblan molecules/atoms.

Esto permite evolucionar diseño y contenido de forma independiente, minimizando regresiones.

### Estructura de carpetas principal

| Carpeta | Rol técnico | Ejemplos |
|---|---|---|
| src/components/atoms | Unidades mínimas visuales | buttons/Button, forms/Input, data/StatisticalOverlay, data/StatisticalCharts |
| src/components/molecules | Composición de atoms | navigation/NavDropdownItem, cards/AchievementCard, cards/ValueCard |
| src/components/organisms | Bloques funcionales completos | layout/Header, home/HeroCarousel, shared/StatsSection, institutional/AboutHeroSection |
| src/services | Fuente de datos y contratos | mockData.js |
| src/hooks | Lógica reusable de comportamiento | useCounter.js |
| src/routes | Configuración de ruteo | rutas SPA |
| src/pages | Vistas de alto nivel | Home y páginas auxiliares |
| src/assets / public | Recursos estáticos | imágenes, iconos institucionales |

### Flujo de composición

```text
App -> Organisms -> Molecules -> Atoms
```

### Modularización de página: Acerca de

La página institucional Acerca de fue implementada con arquitectura atómica y ensamblaje por secciones.

- Página final: src/pages/AboutPage.jsx
- Capa de datos: src/services/aboutData.js
- Atoms usados: src/components/atoms/data/StatisticalOverlay.jsx, src/components/atoms/data/StatisticalCharts.jsx, src/components/atoms/layout/FloatingSymbols.jsx
- Molecules usadas: src/components/molecules/cards/AchievementCard.jsx, src/components/molecules/cards/ValueCard.jsx, src/components/molecules/cards/MilestoneCard.jsx, src/components/molecules/cards/ObjectiveCard.jsx
- Organisms institucionales: src/components/organisms/institutional/AboutHeroSection.jsx, src/components/organisms/institutional/AboutKpiSection.jsx, src/components/organisms/institutional/AboutHistorySection.jsx, src/components/organisms/institutional/AboutTimelineSection.jsx, src/components/organisms/institutional/AboutMissionVisionSection.jsx, src/components/organisms/institutional/AboutValuesSection.jsx, src/components/organisms/institutional/AboutObjectivesSection.jsx, src/components/organisms/institutional/AboutCtaSection.jsx

Nota de integración actual:

- La URL /institucional/acerca se resuelve desde src/App.jsx y renderiza AboutPage dentro del layout principal existente (Header/Footer).

### Principio de diseño arquitectónico

- El contenido no debe vivir embebido en JSX de organismos si puede venir de datos.
- Las secciones deben recibir props y no depender de estados globales implícitos.
- Los componentes deben ser predecibles y fácilmente testeables por contrato.

---

## Design System (ADN)

### Paleta institucional

| Token | Color | Uso recomendado |
|---|---|---|
| UMSA Blue | #00447e | Base institucional (secciones, indicadores, enlaces clave) |
| UMSA Orange | #ea580c | Contraste, llamados a la acción, badges |
| Header Blue Variant | #054776 | Fondo operativo del nav sticky (ajuste visual actual) |
| Gris Texto | #475569 | Cuerpo de texto y contenido secundario |
| Fondo Claro | #f8fafc / #fafafa | Superficies y tarjetas |

Nota: El ADN institucional se mantiene en torno a #00447e y #ea580c. El valor #054776 se usa actualmente como ajuste operativo del fondo del header para legibilidad visual.

### Jerarquía tipográfica

| Nivel | Estilo típico | Uso |
|---|---|---|
| H1 Hero | 44px-52px, weight 700-900 | Mensaje principal de portada |
| H2 Sección | 24px-40px, weight 800-900 | Encabezados de bloques |
| H3 Card | 16px-22px, weight 700-900 | Títulos de tarjetas |
| Body | 13px-18px, weight 400-500 | Descripciones y contenido de lectura |
| Meta/Label | 9px-12px, uppercase, tracking | Badges, fechas, etiquetas técnicas |

### Tratamiento visual Official-Archive

El tratamiento visual Official-Archive busca coherencia institucional en imágenes, priorizando legibilidad del texto superpuesto.

- Filtro: escala de grises parcial + contraste aumentado.
- Overlay: gradiente oscuro para mejorar lectura.
- Uso en hero y cards de noticias/eventos.

Referencia CSS:

```css
.img-official-archive {
  filter: grayscale(0.7) contrast(1.2);
  object-fit: cover;
}
```

---

## Guía de Componentes

### Atoms

#### Button

Responsable de estandarizar CTAs y variantes visuales.

- Variantes: primary, orange, outline, sia.
- Evita duplicación de estilos inline en organismos.
- Permite ajustes globales de interacción en un único punto.

#### Badge

Elemento de énfasis para estados, categorías o novedades.

- Útil en navegación, cards y listados.
- Mantiene consistencia de color y jerarquía visual.

#### StatGraphics / Stats / Decorations

Conjunto de atoms para lenguaje visual estadístico institucional:

- Curvas, anotaciones, símbolos estadísticos.
- Refuerzan identidad visual de la carrera.
- Se reutilizan entre Hero, StatsSection y paneles de contenido.

### Molecules

#### NavDropdownItem

Compone interacción de un ítem de navegación con dropdown.

- Recibe datos del árbol de navegación.
- Controla estado visual abierto/cerrado.
- Se integra con header sticky y menús responsivos.

#### DateIndicator

Molécula para fecha compacta en cards de agenda.

- Encapsula presentación día/mes.
- Acepta variantes de color y tamaño por props.
- Facilita reutilización en futuras secciones de calendario.

#### Otras molecules relevantes

- SocialLink: enlaces sociales con estilo consistente.
- FooterLinkList: listas de enlaces por columna en footer.
- FeaturedNewsCard / CompactNewsCard / AgendaEventCard: tarjetas reutilizables para contenido dinámico.

### Organisms

#### Header sticky

- Header fijo con estado normal/scrolled.
- Navegación desktop y móvil con dropdown/accordion.
- Soporte para branding institucional y buscador contextual.

#### HeroCarousel

- Carrusel principal con rotación temporizada.
- Overlay + anotaciones estadísticas para legibilidad e identidad.
- CTA principal y secundario por slide.

#### StatsSection

- KPIs institucionales en tarjetas.
- Animación progresiva de valores al entrar en viewport.
- Composición visual con símbolos y líneas estadísticas.

---

## Checklist de insumos institucionales a solicitar

Para sostener el CMS y las pantallas actualizadas, pedir a la institucion al menos:

1. Textos oficiales por seccion y por gestion.
2. Logos en PNG/SVG y variantes claras/oscuras.
3. Fotografias de portada, aulas, laboratorios, autoridades y actividades estudiantiles.
4. PDFs oficiales: resoluciones, reglamentos, convocatorias, cronogramas y comunicados.
5. Listado actualizado de autoridades, docentes y representantes estudiantiles.
6. Enlaces vigentes de correo institucional, SIA, campus virtual y redes sociales.
7. Calendarios academicos y fechas de examen/convocatorias.
8. Material grafico para banners, heroes, cards y posts.
9. Datos de convenios, pasantias, postgrado y sociedades cientificas.
10. Contactos de referencia para validacion editorial antes de publicar.

---

## Lógica e Interactividad

### Hook personalizado useCounter

El hook useCounter controla animación de KPIs y evita animaciones prematuras fuera de viewport.

#### Estrategia técnica

1. Observa visibilidad del nodo con IntersectionObserver.
2. Al cruzar umbral de visibilidad, inicia animación con requestAnimationFrame.
3. Calcula progreso temporal hasta valor final.
4. Se desconecta tras primer disparo para evitar repeticiones innecesarias.

#### Comportamiento clave

- Threshold aproximado: 30% visible.
- Duración configurable por parámetro.
- Si el valor objetivo no es numérico, renderiza valor directo.

Ejemplo simplificado:

```js
const [count, ref] = useCounter(stat.value, 1800)
return <div ref={ref}>{count}</div>
```

---

## Guía de Traspaso (Handover)

### Objetivo

Reemplazar src/services/mockData.js por consumo real de CMS/API sin modificar la estructura visual de organismos.

### Estrategia recomendada

1. Crear cliente API en src/api:
   - cmsClient.js
2. Crear mapeadores/adaptadores en src/services:
   - mapCmsToNav
   - mapCmsToHero
   - mapCmsToStats
   - mapCmsToNews
   - mapCmsToEvents
3. Mantener mismos contratos que hoy consumen organismos.
4. Integrar carga en capa superior (App o page container).

### Paso a paso operativo

#### Paso 1: Crear cliente API

```js
// src/api/cmsClient.js
export async function fetchHomeContent() {
  const res = await fetch(import.meta.env.VITE_CMS_HOME_ENDPOINT)
  if (!res.ok) throw new Error('Error cargando contenido CMS')
  return res.json()
}
```

#### Paso 2: Adaptar payload del CMS al contrato actual

```js
// src/services/homeAdapter.js
export function mapHomePayload(payload) {
  return {
    navItems: payload.navigation,
    slides: payload.hero,
    stats: payload.kpis,
    news: payload.news,
    events: payload.events,
    footerLinks: payload.footerLinks,
  }
}
```

#### Paso 3: Sustituir mockData en App/container

```js
const [homeData, setHomeData] = useState(null)

useEffect(() => {
  fetchHomeContent()
    .then(mapHomePayload)
    .then(setHomeData)
    .catch(console.error)
}, [])
```

#### Paso 4: Fallback seguro

- Si la API falla, usar mockData como respaldo temporal.
- Registrar errores de integración para soporte del equipo.

### Checklist de entrega al siguiente pasante

| Tarea | Estado esperado |
|---|---|
| Endpoints CMS definidos en variables de entorno | Completado |
| Adaptadores de payload implementados | Completado |
| Organisms consumiendo datos reales por props | Completado |
| Fallback a mockData en fallo de API | Completado |
| Build y smoke test visual | Completado |
| Documentación de campos CMS (contratos) actualizada | Completado |

---

## Buenas prácticas futuras

1. No acoplar JSX de organismos a forma cruda del CMS.
2. Centralizar mapeo de datos en servicios/adapters.
3. Mantener contratos tipados (JSDoc/TypeScript) para evitar regresiones.
4. Priorizar composición atomic para nuevas secciones.
5. Validar siempre build de producción después de cambios de diseño/estructura.

---

## Resumen ejecutivo

La solución actual ya está en una fase sólida de escalabilidad: UI desacoplada, arquitectura atómica progresivamente consolidada y datos centralizados con contratos base. El siguiente salto natural es la conexión al CMS real mediante adaptadores, preservando la compatibilidad visual y minimizando deuda técnica en futuras iteraciones.

---

## Guía para Desarrolladores Futuros: Cómo agregar una nueva vista

Esta guía define el flujo estándar para crear una nueva vista en la aplicación sin romper la arquitectura existente.

### Objetivo

Agregar nuevas vistas de manera consistente, reutilizable y compatible con el futuro CMS.

### Flujo recomendado

1. Definir el alcance funcional de la nueva vista.
2. Diseñar la estructura visual por capas: atoms -> molecules -> organisms.
3. Crear la página en `src/pages`.
4. Registrar la ruta en `src/routes`.
5. Conectar datos desde `src/services` (mock o API).
6. Validar comportamiento, estilos responsivos y build final.

### Paso a paso

#### Paso 1: Crear la vista en `src/pages`

Crear un archivo de página con composición de organismos.

```jsx
// src/pages/NuevaVistaPage.jsx
import React from 'react'
import { Header } from '../components/organisms/Header'
import { Footer } from '../components/organisms/Footer'

export default function NuevaVistaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Organisms de la nueva vista */}
      </main>
      <Footer />
    </div>
  )
}
```

#### Paso 2: Registrar la ruta

Agregar la ruta en el enrutador del proyecto.

```jsx
// ejemplo dentro de src/routes
{
  path: '/nueva-vista',
  element: <NuevaVistaPage />,
}
```

#### Paso 3: Construir UI respetando Atomic Design

| Capa | Qué agregar | Regla |
|---|---|---|
| Atoms | Elementos mínimos | Sin lógica de negocio |
| Molecules | Combinaciones reutilizables | Props claras y predecibles |
| Organisms | Secciones funcionales completas | Solo composición y flujo visual |

Regla clave: evitar crear JSX largo dentro de `pages` si ese bloque puede vivir en `organisms`.

#### Paso 4: Conectar datos

Mientras no exista CMS real, usar `mockData.js` con contrato claro.

```js
// src/services/mockData.js
export const mockNuevaVista = {
  title: 'Nueva vista',
  items: [],
}
```

Cuando exista CMS real, reemplazar con `fetch + adapter` sin tocar la UI:

```js
const payload = await fetchNuevaVista()
const viewModel = mapNuevaVistaPayload(payload)
```

#### Paso 5: Integrar al nav (si aplica)

Agregar entrada en `mockNavItems` o en la fuente CMS correspondiente para que la vista sea navegable.

```js
{
  label: 'Nueva Vista',
  href: '/nueva-vista',
}
```

#### Paso 6: Checklist de calidad

Antes de entregar, verificar:

| Validación | Criterio |
|---|---|
| Composición atómica | No hay acoplamientos innecesarios |
| Reutilización | Se usan atoms/molecules existentes cuando corresponde |
| Responsivo | Mobile, tablet y desktop funcionales |
| Accesibilidad básica | Botones/enlaces correctos, textos alternativos |
| Datos desacoplados | Sin contenido crítico hardcodeado en organisms |
| Build | `npm run build` exitoso |

### Convenciones de implementación

1. Nombrar páginas con sufijo `Page`.
2. Evitar lógica de integración API dentro de atoms/molecules.
3. Centralizar mapeo de payload en `src/services`.
4. Mantener contratos documentados con JSDoc o TypeScript.

### Errores comunes a evitar

1. Crear componentes grandes sin separar en capas.
2. Mezclar datos del CMS directamente en JSX visual.
3. Duplicar estilos existentes en vez de reutilizar componentes base.
4. Entregar cambios sin correr build de producción.

### Plantilla mínima de handoff para una nueva vista

```markdown
## Nueva Vista: <nombre>
- Ruta: /<slug>
- Página: src/pages/<Nombre>Page.jsx
- Organisms nuevos: ...
- Molecules nuevas: ...
- Fuente de datos: mockData / API
- Adapter implementado: sí/no
- Estado de build: OK
```

---

## Documento complementario (CMS)

Para el detalle completo de funcionamiento actual y plan de migración a CMS, revisar:

- `CMS_IMPLEMENTACION_DETALLADA.md`
