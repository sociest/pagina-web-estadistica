import { Outlet } from 'react-router-dom'
import Header from '../organisms/layout/Header.jsx'

/**
 * Application shell used by every public route.
 *
 * The template centralizes the header, spacing rules, and background treatment so future
 * pages stay consistent while remaining easy to replace from the CMS or router layer.
 *
 * @returns {JSX.Element} Shared shell for route content.
 */
function AppTemplate() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-umsa-50 via-white to-neutral-100 text-slate-700">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(0,83,156,0.12),_transparent_60%)]" />
      <Header />
      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}

export default AppTemplate