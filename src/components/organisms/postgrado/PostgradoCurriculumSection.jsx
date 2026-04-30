function PostgradoCurriculumSection({ meta, modules, activeMod, onSelectMod }) {
  const currentModule = modules.find((module) => module.id === activeMod) ?? modules[0]
  const ModuleIcon = currentModule.icon

  return (
    <section id="plan-estudios" className="mx-auto max-w-[1536px] px-4 md:px-12">
      <div className="relative overflow-hidden rounded-[4rem] bg-[#001d3d] p-8 shadow-2xl md:p-14">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <svg className="pointer-events-none absolute right-0 top-0 h-[340px] w-[820px] opacity-[0.18]" viewBox="0 0 820 340" fill="none" aria-hidden="true">
          <path d="M0 168 Q205 66 410 168 T820 168" stroke="#ea580c" strokeWidth="2.4" />
          <path d="M0 204 Q205 102 410 204 T820 204" stroke="#8dc7ff" strokeWidth="1.5" opacity="0.72" />
        </svg>

        <div className="relative z-10">
          <div className="mb-16 flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <meta.icon size={16} className="text-[#ea580c]" />
                <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-white/55">{meta.tag}</span>
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-white md:text-5xl">{meta.title}</h2>
              <p className="mt-4 max-w-3xl text-base font-medium italic text-white/60">{meta.sub}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center backdrop-blur-sm">
              <p className="text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-white/40">Malla modular</p>
              <p className="mt-1 text-base font-black uppercase tracking-wider text-white">{meta.note}</p>
            </div>
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-2 rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
            {modules.map((module) => (
              <button key={module.id} type="button" onClick={() => onSelectMod(module.id)} className={`rounded-2xl px-5 py-3 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest transition-all ${activeMod === module.id ? 'bg-[#ea580c] text-white shadow-lg' : 'text-white/55 hover:bg-white/10 hover:text-white'}`}>
                {module.title}
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
            <div className="flex flex-col items-center justify-between gap-4 border-b border-slate-100 bg-slate-50 p-8 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#001d3d] text-white shadow-inner">
                  <ModuleIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter text-[#001d3d]">{currentModule.title}</h3>
                  <p className="mt-1 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-[#ea580c]">{currentModule.subtitle}</p>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400 shadow-sm">
                Total creditos: <span className="ml-2 text-lg text-[#001d3d]">{currentModule.totals.cr}</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white border-b border-slate-100">
                    <th className="px-6 py-5 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400">Sigla</th>
                    <th className="px-6 py-5 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400">Materia</th>
                    <th className="px-6 py-5 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400 text-center">Hrs. Presencial</th>
                    <th className="px-6 py-5 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400 text-center">Hrs. Investigacion</th>
                    <th className="px-6 py-5 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-[#00447e] text-center">Total Hrs.</th>
                    <th className="px-6 py-5 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-[#ea580c] text-center">Creditos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {currentModule.items.map((item) => (
                    <tr key={item.id} className={`transition-colors ${item.highlight ? 'bg-orange-50/50 hover:bg-orange-50' : 'hover:bg-slate-50'}`}>
                      <td className="px-6 py-5 font-mono text-[11px] font-black text-[#001d3d]">{item.id}</td>
                      <td className="px-6 py-5">
                        <span className={`text-base sm:text-base md:text-lg font-black uppercase tracking-tight ${item.highlight ? 'text-[#ea580c]' : 'text-slate-800'}`}>{item.name}</span>
                      </td>
                      <td className="px-6 py-5 text-center text-[12px] font-bold text-slate-500">{item.hp}</td>
                      <td className="px-6 py-5 text-center text-[12px] font-bold text-slate-500">{item.hi}</td>
                      <td className="px-6 py-5 text-center text-base font-black text-[#00447e]">{item.ht}</td>
                      <td className="px-6 py-5 text-center text-base font-black text-[#ea580c]">{item.cr}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-slate-200 bg-slate-100">
                    <td colSpan={2} className="px-6 py-5 text-right text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-[#001d3d]">Subtotal modulo</td>
                    <td className="px-6 py-5 text-center text-base font-black text-[#001d3d]">{currentModule.totals.hp}</td>
                    <td className="px-6 py-5 text-center text-base font-black text-[#001d3d]">{currentModule.totals.hi}</td>
                    <td className="px-6 py-5 text-center text-base font-black text-[#001d3d]">{currentModule.totals.ht}</td>
                    <td className="px-6 py-5 text-center text-base font-black text-[#ea580c]">{currentModule.totals.cr}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostgradoCurriculumSection
