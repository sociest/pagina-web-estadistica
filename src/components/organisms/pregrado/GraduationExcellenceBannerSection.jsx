function GraduationExcellenceBannerSection({ banner }) {
  return (
    <section className="relative overflow-hidden rounded-[4rem] border-2 border-[#ea580c] bg-white p-10 shadow-2xl md:p-16">
      <div className="pointer-events-none absolute top-0 right-0 p-10 opacity-[0.03] text-[#ea580c]">
        <banner.icon size={300} />
      </div>
      <svg className="pointer-events-none absolute right-0 top-0 h-[260px] w-[560px] opacity-[0.12]" viewBox="0 0 560 260" fill="none" aria-hidden="true">
        <path d="M0 128 Q140 42 280 128 T560 128" stroke="#ea580c" strokeWidth="2.2" />
        <path d="M0 160 Q140 74 280 160 T560 160" stroke="#00447e" strokeWidth="1.4" opacity="0.7" />
      </svg>

      <div className="relative z-10 flex flex-col items-center gap-12 md:flex-row">
        <div className="flex size-24 shrink-0 items-center justify-center rounded-full border border-orange-100 bg-orange-50 text-[#ea580c] shadow-inner">
          <banner.accentIcon size={48} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h4 className="mb-2 text-sm sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-[#ea580c]">{banner.eyebrow}</h4>
          <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-[#001d3d] md:text-4xl">{banner.title}</h3>
          <p className="max-w-3xl text-base font-medium italic leading-relaxed text-slate-600">{banner.quote}</p>
        </div>
        <button className="shrink-0 rounded-2xl bg-[#001d3d] px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white shadow-xl transition-all hover:bg-[#ea580c]" type="button">
          {banner.ctaLabel}
        </button>
      </div>
    </section>
  )
}

export default GraduationExcellenceBannerSection
