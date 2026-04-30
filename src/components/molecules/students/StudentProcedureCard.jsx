import { AlertCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function StudentProcedureCard({ procedure, modeFlowIcon: ModeFlowIcon, modeRequirementsIcon: ModeRequirementsIcon }) {
  const [view, setView] = useState('flow')
  const ProcedureIcon = procedure.icon
  const contentRef = useRef(null)

  useEffect(() => {
    if (!contentRef.current || typeof contentRef.current.animate !== 'function') return

    contentRef.current.animate(
      [
        { opacity: 0, transform: 'translateX(24px)' },
        { opacity: 1, transform: 'translateX(0)' },
      ],
      {
        duration: 320,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    )
  }, [view])

  return (
    <article className="group flex flex-col overflow-hidden rounded-[3rem] border border-[#001d3d]/10 bg-white shadow-[0_15px_40px_-10px_rgba(0,29,61,0.15)] transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(0,29,61,0.25)] lg:flex-row">
      <div className="relative flex flex-col justify-between overflow-hidden bg-[#001d3d] p-10 md:p-12 lg:w-2/5">
        <div className="absolute left-0 top-0 h-2 w-full bg-[#ea580c]" />
        <div className="absolute -bottom-10 -right-10 opacity-5 transition-transform duration-700 group-hover:scale-110">
          <ProcedureIcon size={250} className="text-white" />
        </div>

        <div className="relative z-10">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-[#ea580c] text-white shadow-lg">
              <ProcedureIcon size={32} />
            </div>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-blue-200">
              {procedure.tag}
            </span>
          </div>

          <h3 className="mb-4 text-3xl font-black uppercase leading-tight tracking-tighter text-white">{procedure.title}</h3>
          <p className="rounded-r-xl border-l-4 border-[#ea580c] bg-white/5 py-3 pl-4 text-sm font-medium italic leading-relaxed text-blue-100/80">
            {procedure.desc}
          </p>
        </div>

        <div className="relative z-10 mt-12">
          <button
            type="button"
            onClick={() => setView((prev) => (prev === 'flow' ? 'requirements' : 'flow'))}
            className={`flex w-full items-center justify-center gap-3 rounded-2xl border-2 py-4 text-xs font-black uppercase tracking-widest transition-all ${
              view === 'flow'
                ? 'border-white bg-white text-[#001d3d] hover:bg-slate-200'
                : 'border-white/30 bg-transparent text-white hover:border-white/50 hover:bg-white/10'
            }`}
          >
            {view === 'flow' ? (
              <>
                {ModeRequirementsIcon ? <ModeRequirementsIcon size={16} /> : null}
                Ver lista de requisitos
              </>
            ) : (
              <>
                {ModeFlowIcon ? <ModeFlowIcon size={16} /> : null}
                Ver flujo del tramite
              </>
            )}
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden bg-white p-10 md:p-12 lg:w-3/5">
        <div className="pointer-events-none absolute inset-0 opacity-[0.1]" aria-hidden="true">
          <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24%,rgba(0,68,126,0.08)_25%,rgba(0,68,126,0.08)_26%,transparent_27%,transparent_74%,rgba(0,68,126,0.08)_75%,rgba(0,68,126,0.08)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(0,68,126,0.06)_25%,rgba(0,68,126,0.06)_26%,transparent_27%,transparent_74%,rgba(0,68,126,0.06)_75%,rgba(0,68,126,0.06)_76%,transparent_77%,transparent)] bg-[length:64px_64px]" />
        </div>
        <svg className="pointer-events-none absolute right-0 top-0 h-[180px] w-[340px] opacity-[0.14]" viewBox="0 0 340 180" fill="none" aria-hidden="true">
          <path d="M0 96 Q85 44 170 96 T340 96" stroke="#ea580c" strokeWidth="1.8" />
          <path d="M0 122 Q85 70 170 122 T340 122" stroke="#00447e" strokeWidth="1.2" opacity="0.72" />
        </svg>

        <div ref={contentRef} key={view} className="relative z-10">
        {view === 'flow' ? (
          <div>
            <div className="mb-10 flex items-center gap-3">
              <div className="h-1 w-8 rounded-full bg-[#ea580c]" />
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Flujo operativo</h4>
            </div>

            <div className="relative pl-6 md:pl-10">
              <div className="absolute bottom-10 left-[0.6rem] top-4 w-[3px] rounded-full bg-slate-100 md:left-[1.6rem]" />
              <div className="space-y-10">
                {procedure.steps.map((step, index) => (
                  <div key={step.t} className="group/step relative flex items-start gap-6 md:gap-8">
                    <div className="relative z-10 -ml-3 flex size-6 shrink-0 items-center justify-center rounded-full border-4 border-slate-200 bg-white transition-colors duration-300 group-hover/step:border-[#ea580c] group-hover/step:bg-[#ea580c] md:-ml-4 md:size-8">
                      <span className="text-[10px] font-black text-slate-400 group-hover/step:text-white">{index + 1}</span>
                    </div>
                    <div className="flex-1 rounded-2xl border border-slate-100 bg-[#f8fafc] p-5 shadow-sm transition-shadow duration-300 group-hover/step:border-blue-100 group-hover/step:shadow-md md:p-6">
                      <h5 className="mb-2 text-sm font-black uppercase tracking-tight text-[#001d3d] md:text-base">{step.t}</h5>
                      <p className="text-xs font-medium leading-relaxed text-slate-600 md:text-[13px]">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-10 flex items-center gap-3">
              <div className="h-1 w-8 rounded-full bg-[#001d3d]" />
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[#001d3d]">Documentacion requerida</h4>
            </div>

            <div className="mb-8 rounded-2xl border border-orange-100 bg-orange-50 p-5">
              <p className="flex items-center gap-2 text-xs font-medium italic text-orange-900">
                <AlertCircle size={16} className="text-[#ea580c]" />
                Presentar la documentacion fisicamente en ventanilla.
              </p>
            </div>

            <div className="space-y-4">
              {procedure.requirements.map((requirement, index) => (
                <div key={`${procedure.id}-req-${index}`} className="flex items-start gap-4 rounded-xl border border-slate-100 bg-[#f8fafc] p-4 transition-colors hover:border-slate-300">
                  <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-[#001d3d] bg-white text-[#001d3d] shadow-sm">
                    <span className="text-[9px] font-black">{index + 1}</span>
                  </div>
                  <span className="text-sm font-bold leading-relaxed text-slate-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </div>
    </article>
  )
}

export default StudentProcedureCard
