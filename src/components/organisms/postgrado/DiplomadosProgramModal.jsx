import { Download, X } from 'lucide-react'

function DiplomadosProgramModal({
  program,
  onClose,
  durationIcon: DurationIcon,
  modalityIcon: ModalityIcon,
  moduleIcon: ModuleIcon,
  investmentIcon: InvestmentIcon,
}) {
  if (!program) return null

  const ProgramIcon = program.icon

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-6 md:p-10">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        aria-label="Cerrar detalle de programa"
      />

      <article className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-y-auto rounded-[3rem] bg-white shadow-2xl">
        <header className="relative shrink-0 overflow-hidden border-b-[8px] border-[#ea580c] bg-[#001d3d] p-8 md:p-12">
          <ProgramIcon className="pointer-events-none absolute right-5 top-0 text-white/10" size={150} />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>

          <div className="relative z-10 pr-12">
            <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-white shadow-md">
              {program.badge}
            </span>
            <h2 className="mb-6 text-3xl font-black uppercase leading-tight tracking-tighter text-white md:text-4xl lg:text-5xl">{program.title}</h2>
            <div className="flex flex-wrap gap-4 text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest text-blue-200">
              <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2">
                {DurationIcon ? <DurationIcon size={16} /> : null}
                {program.duration}
              </span>
              <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2">
                {ModalityIcon ? <ModalityIcon size={16} /> : null}
                {program.modality}
              </span>
            </div>
          </div>
        </header>

        <div className="space-y-12 p-8 md:p-12">
          <section>
            <h4 className="mb-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-[#ea580c]">Objetivo academico</h4>
            <p className="rounded-r-2xl border-l-4 border-slate-200 bg-slate-50 py-4 pl-6 text-base font-medium italic leading-relaxed text-slate-600">
              {program.details.objective}
            </p>
          </section>

          <section>
            <h4 className="mb-6 text-sm sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-[#001d3d]">Contenido minimo analitico</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              {program.details.modules.map((module) => (
                <article
                  key={module.name}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-[#00447e]"
                >
                  <p className="mb-2 flex items-center gap-2 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400">
                    {ModuleIcon ? <ModuleIcon size={14} className="text-[#ea580c]" /> : null}
                    {module.title}
                  </p>
                  <p className="text-xs font-black uppercase leading-tight text-[#002a52]">{module.name}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[3rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
            <h4 className="mb-6 flex items-center gap-2 text-sm sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-[#001d3d]">
              {InvestmentIcon ? <InvestmentIcon size={18} className="text-[#ea580c]" /> : null}
              Inversion requerida
            </h4>
            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm">
                <p className="mb-2 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-slate-400">Costo total</p>
                <p className="text-3xl font-black text-[#001d3d]">{program.details.investment.total}</p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm">
                <p className="mb-2 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-slate-400">Matricula</p>
                <p className="text-xl font-black text-slate-700">{program.details.investment.matricula}</p>
              </article>
              <article className="flex flex-col justify-center rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm">
                <p className="mb-2 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-slate-400">Plan de pagos</p>
                <p className="text-xs font-bold uppercase leading-snug text-slate-600">{program.details.investment.plan}</p>
              </article>
            </div>
          </section>

          <div className="flex flex-col justify-end gap-4 border-t border-slate-100 pt-6 sm:flex-row">
            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-500 transition-colors hover:bg-slate-100"
            >
              Cerrar vista
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-3 rounded-2xl bg-[#001d3d] px-10 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#ea580c]"
            >
              Descargar convocatoria PDF <Download size={16} />
            </button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default DiplomadosProgramModal
