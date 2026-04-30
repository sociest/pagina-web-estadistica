function ConvalidationProcedureSection({ section, visuals }) {
  const ProcessIcon = visuals?.processIcon

  return (
    <section className="relative overflow-hidden rounded-[4rem] border border-slate-200 bg-white p-10 shadow-xl md:p-16">
      <div className="absolute right-0 top-0 p-10 opacity-[0.03]">
        <section.icon size={250} className="text-[#001d3d]" />
      </div>
      <svg className="pointer-events-none absolute right-0 top-0 h-[260px] w-[560px] opacity-[0.12]" viewBox="0 0 560 260" fill="none" aria-hidden="true">
        <path d="M0 128 Q140 42 280 128 T560 128" stroke="#00447e" strokeWidth="2.1" />
        <path d="M0 158 Q140 72 280 158 T560 158" stroke="#ea580c" strokeWidth="1.3" opacity="0.72" />
      </svg>

      <div className="relative z-10 flex flex-col gap-16 md:flex-row">
        <div className="md:w-1/3">
          <div className="mb-4 flex items-center gap-3">
            {ProcessIcon && <ProcessIcon size={16} className="text-[#ea580c]" />}
            <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-[#ea580c]">{section.tag}</span>
          </div>
          <h3 className="mb-6 text-4xl font-black uppercase tracking-tighter text-[#001d3d]">
            {section.title[0]} <br />
            <span className="font-serif text-slate-400 italic lowercase">{section.title[1]}</span>
          </h3>
          <p className="mb-8 border-l-4 border-[#ea580c] pl-4 text-base font-medium italic leading-relaxed text-slate-500">{section.description}</p>
          <button className="flex items-center gap-2 rounded-xl bg-[#001d3d] px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#ea580c]" type="button">
            {section.ctaLabel}
          </button>
        </div>

        <div className="md:w-2/3">
          <h4 className="mb-6 border-b border-slate-100 pb-4 text-base md:text-xl font-black uppercase tracking-wide text-[#001d3d]">Requisitos para tramite manual</h4>
          <div className="grid gap-6 sm:grid-cols-2">
            {section.requirements.map((requirement, index) => (
              <div key={requirement} className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-[#f8fafc] p-5 transition-colors hover:border-blue-200">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#001d3d] text-xs font-black text-white transition-colors group-hover:bg-[#ea580c]">{index + 1}</div>
                <span className="text-sm md:text-base font-semibold leading-relaxed text-slate-700">{requirement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConvalidationProcedureSection
