import { BarChart3, Database, Users } from 'lucide-react'
import { Button } from '../components/atoms/buttons/Button.jsx'

const featureCards = [
  {
    title: 'Datos académicos centralizados',
    description:
      'El CMS podrá alimentar carreras, noticias y recursos desde un único punto de verdad.',
    icon: BarChart3,
  },
  {
    title: 'Escalabilidad editorial',
    description:
      'La estructura atómica reduce deuda técnica cuando el proyecto crezca a varias vistas o módulos.',
    icon: Database,
  },
  {
    title: 'Experiencia institucional clara',
    description:
      'Cada bloque visual conserva jerarquía, consistencia y espacio para contenido oficial de la UMSA.',
    icon: Users,
  },
]

/**
 * Home page for the future institutional site.
 *
 * This page is intentionally content-rich but implementation-light so the next developer can
 * plug CMS content into the same layout without rewriting the routing contract.
 *
 * @returns {JSX.Element} Landing page for the public entry route.
 */
function HomePage() {
  return (
    <div className="space-y-10">
      <section
        id="inicio"
        className="grid gap-8 rounded-[2rem] bg-white/90 p-6 shadow-card ring-1 ring-slate-200 backdrop-blur sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10"
      >
        <div className="flex flex-col justify-center space-y-6">
          <span className="inline-flex w-fit items-center rounded-full bg-umsa-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-umsa-700 ring-1 ring-inset ring-umsa-100">
            UMSA Estadística
          </span>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Base atómica para una web institucional preparada para CMS.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Esta estructura está pensada para crecer por módulos, mantener consistencia visual y
              permitir que un futuro pasante herede el proyecto sin fricción.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href="#features" variant="primary" size="lg">
              Ver estructura
            </Button>
            <Button href="/" variant="secondary" size="lg">
              Revisar inicio
            </Button>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-umsa-gradient p-6 text-white shadow-soft sm:p-8">
          <div className="space-y-3 border-b border-white/20 pb-5">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/75">
              Patrón de crecimiento
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Tailwind, router y componentes documentados desde el día uno.
            </h2>
          </div>

          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <dt className="text-sm text-white/75">Arquitectura</dt>
              <dd className="mt-1 text-xl font-semibold">Atomic Design</dd>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <dt className="text-sm text-white/75">Escala</dt>
              <dd className="mt-1 text-xl font-semibold">CMS-ready</dd>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <dt className="text-sm text-white/75">Estilo</dt>
              <dd className="mt-1 text-xl font-semibold">Tailwind CSS</dd>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <dt className="text-sm text-white/75">Iconografía</dt>
              <dd className="mt-1 text-xl font-semibold">Lucide React</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="features" className="space-y-5">
        <div className="max-w-2xl space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-umsa-700">
            Estructura base
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Bloques listos para crecer sin rehacer el sistema.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featureCards.map((card) => {
            const Icon = card.icon

            return (
              <article
                key={card.title}
                className="rounded-[1.5rem] bg-white p-6 shadow-card ring-1 ring-slate-200"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-umsa-50 text-umsa-700 ring-1 ring-inset ring-umsa-100">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default HomePage