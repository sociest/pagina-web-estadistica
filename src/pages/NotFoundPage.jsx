import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/atoms/buttons/Button.jsx'

/**
 * Fallback page used when a route does not exist yet.
 *
 * @returns {JSX.Element} Friendly 404 state with a return path to the homepage.
 */
function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center gap-6 rounded-[2rem] bg-white p-8 shadow-card ring-1 ring-slate-200 sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-umsa-700">
        Página no encontrada
      </p>
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">404</h1>
        <p className="max-w-xl text-base leading-7 text-slate-600">
          La ruta todavía no está definida. El router base ya está preparado para que el CMS o el
          siguiente pasante agregue nuevas páginas sin tocar la estructura principal.
        </p>
      </div>

      <Button href="/" variant="primary" size="lg">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Volver al inicio
      </Button>
    </section>
  )
}

export default NotFoundPage