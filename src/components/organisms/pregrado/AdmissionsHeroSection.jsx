function AdmissionsHeroSection({ hero }) {
  return (
    <section className="relative overflow-hidden border-b-8 border-[#ea580c] bg-[linear-gradient(160deg,#001d3d_0%,#003666_55%,#00447e_100%)] px-8 pb-24 pt-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(234,88,12,0.2),transparent_35%),repeating-linear-gradient(0deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_1px,transparent_1px,transparent_24px)]" />
      <svg className="pointer-events-none absolute right-0 top-0 h-[360px] w-[760px] opacity-[0.22]" viewBox="0 0 760 360" fill="none" aria-hidden="true">
        <path d="M0 164 Q190 74 380 164 T760 164" stroke="#ea580c" strokeWidth="2.4" />
        <path d="M0 198 Q190 108 380 198 T760 198" stroke="#8dc7ff" strokeWidth="1.5" opacity="0.75" />
      </svg>

      <div className="relative z-10 mx-auto flex max-w-[1536px] flex-col items-center gap-12 md:flex-row md:justify-between">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <div className="size-2 animate-pulse rounded-full bg-[#ea580c]" />
            <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/60">{hero.badge}</span>
          </div>
          <h1 className="mb-6 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-7xl">
            {hero.title[0]} <br />
            <span className="font-serif text-slate-400 italic lowercase tracking-normal">{hero.title[1]}</span> <br />
            {hero.title[2]}
          </h1>
          <p className="mb-10 max-w-xl border-l-4 border-[#ea580c] pl-6 text-lg font-medium italic leading-relaxed text-slate-300">
            {hero.description}
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md md:w-auto">
          <hero.stats.icon size={48} className="mb-4 text-[#ea580c]" />
          <p className="mb-2 text-base sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-white/50">{hero.stats.label}</p>
          <p className="text-5xl font-black tracking-tighter text-white">{hero.stats.value}</p>
          <div className="my-6 h-[1px] w-full bg-white/10" />
          <div className="flex gap-8 text-center font-mono text-sm sm:text-base md:text-lg uppercase tracking-widest text-white/40">
            {hero.stats.channels.map((item) => (
              <div key={item}><span className="block text-base text-white">{item}</span> Via</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdmissionsHeroSection
