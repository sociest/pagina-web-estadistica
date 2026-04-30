function PostgradoFieldSection({ section }) {
  const BackgroundIcon = section.icon
  const ArrowIcon = section.arrowIcon

  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-white py-24 px-6 md:px-12">
      <div className="pointer-events-none absolute -left-20 -bottom-20 text-slate-50 opacity-50">
        <BackgroundIcon size={400} />
      </div>
      <div className="relative z-10 mx-auto max-w-[1536px]">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-[2px] w-8 rounded-full bg-[#ea580c]" />
            <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-[#ea580c]">{section.tag}</span>
            <div className="h-[2px] w-8 rounded-full bg-[#ea580c]" />
          </div>
          <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-[#002a52] md:text-5xl">{section.title}</h2>
          <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed italic text-slate-500">{section.sub}</p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h4 className="mb-8 border-b border-slate-100 pb-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-[#00447e]">Sectores de insercion</h4>
            <div className="flex flex-wrap gap-4">
              {section.sectors.map((item) => (
                <div key={item} className="cursor-default rounded-full border border-slate-200 bg-[#f1f5f9] px-6 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-600 shadow-sm transition-colors hover:bg-[#00447e] hover:text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-8 border-b border-slate-100 pb-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-[#ea580c]">Roles profesionales</h4>
            <div className="space-y-4">
              {section.roles.map((role) => (
                <div key={role.role} className="flex gap-4 items-center group">
                  <ArrowIcon className="text-[#ea580c] opacity-50 transition-all group-hover:translate-x-1 group-hover:opacity-100" size={16} />
                  <div>
                    <h5 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-tight leading-none text-[#002a52]">{role.role}</h5>
                    <p className="mt-1 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-slate-400">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostgradoFieldSection
