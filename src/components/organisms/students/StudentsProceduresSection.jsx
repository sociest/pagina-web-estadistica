import { FileSearch } from 'lucide-react'
import StudentProcedureCard from '../../molecules/students/StudentProcedureCard'
import StudentsSectionHeader from '../../molecules/students/StudentsSectionHeader'

function StudentsProceduresSection({ procedures, modeFlowIcon, modeRequirementsIcon }) {
  return (
    <section className="relative mx-auto max-w-[1536px] overflow-hidden px-4 py-24 md:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true">
        <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24%,rgba(0,68,126,0.07)_25%,rgba(0,68,126,0.07)_26%,transparent_27%,transparent_74%,rgba(0,68,126,0.07)_75%,rgba(0,68,126,0.07)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(0,68,126,0.06)_25%,rgba(0,68,126,0.06)_26%,transparent_27%,transparent_74%,rgba(0,68,126,0.06)_75%,rgba(0,68,126,0.06)_76%,transparent_77%,transparent)] bg-[length:80px_80px]" />
      </div>
      <svg className="pointer-events-none absolute -right-20 top-8 h-[280px] w-[760px] opacity-[0.16]" viewBox="0 0 760 280" fill="none" aria-hidden="true">
        <path d="M0 130 Q190 40 380 130 T760 130" stroke="#ea580c" strokeWidth="2.2" />
        <path d="M0 162 Q190 72 380 162 T760 162" stroke="#00447e" strokeWidth="1.4" opacity="0.72" />
      </svg>
      <svg className="pointer-events-none absolute left-0 bottom-10 h-[220px] w-[320px] opacity-[0.15]" viewBox="0 0 320 220" fill="none" aria-hidden="true">
        <rect x="24" y="138" width="16" height="54" rx="2" fill="#00447e" />
        <rect x="52" y="118" width="16" height="74" rx="2" fill="#00447e" opacity="0.84" />
        <rect x="80" y="96" width="16" height="96" rx="2" fill="#ea580c" opacity="0.8" />
        <rect x="108" y="84" width="16" height="108" rx="2" fill="#00447e" opacity="0.76" />
        <line x1="18" y1="192" x2="190" y2="192" stroke="#00447e" strokeWidth="1" opacity="0.44" />
      </svg>
      <svg className="pointer-events-none absolute right-14 bottom-6 h-[180px] w-[260px] opacity-[0.14]" viewBox="0 0 260 180" fill="none" aria-hidden="true">
        <circle cx="30" cy="40" r="3" fill="#00447e" />
        <circle cx="72" cy="62" r="2.5" fill="#ea580c" />
        <circle cx="110" cy="28" r="2.5" fill="#00447e" opacity="0.75" />
        <circle cx="160" cy="84" r="3" fill="#ea580c" opacity="0.8" />
        <circle cx="202" cy="46" r="2.5" fill="#00447e" />
        <circle cx="228" cy="96" r="2" fill="#ea580c" opacity="0.78" />
      </svg>

      <StudentsSectionHeader
        tag="Catalogo"
        title="Guia de Procedimientos"
        sub="Selecciona un tramite para ver su flujo operativo o la documentacion exacta requerida."
      />

      {procedures.length === 0 ? (
        <div className="rounded-[3rem] border-2 border-dashed border-slate-200 bg-white py-20 text-center shadow-sm">
          <FileSearch className="mx-auto mb-4 text-slate-300" size={60} />
          <h4 className="text-2xl font-black uppercase tracking-tighter text-[#001d3d]">No se encontraron tramites</h4>
          <p className="mt-2 text-base font-medium italic text-slate-500">Intenta buscar con terminos como egreso o legalizacion.</p>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-12">
        {procedures.map((procedure) => (
          <StudentProcedureCard
            key={procedure.id}
            procedure={procedure}
            modeFlowIcon={modeFlowIcon}
            modeRequirementsIcon={modeRequirementsIcon}
          />
        ))}
      </div>
    </section>
  )
}

export default StudentsProceduresSection
