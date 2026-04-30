function AutofinancedCTASection({ cta }) {
  const CtaIcon = cta.icon

  return (
    <section className="mx-auto max-w-[1536px] px-4 md:px-12 pb-10">
      <div className="relative overflow-hidden rounded-[4rem] bg-[#ea580c] p-10 text-center text-white shadow-2xl md:p-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200')] opacity-10 mix-blend-overlay" />
        <div className="relative z-10">
          <CtaIcon className="mx-auto mb-6 text-white/70" size={80} />
          <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter md:text-6xl">
            Domina el <br /> <span className="font-serif lowercase italic tracking-normal text-orange-200">mundo de los datos</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base font-medium italic leading-relaxed text-orange-100 md:text-xl">
            {cta.quote}
          </p>
          <button type="button" className="rounded-2xl bg-[#001d3d] px-14 py-5 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white shadow-xl transition hover:bg-slate-900">
            {cta.buttonLabel}
          </button>
        </div>
      </div>
    </section>
  )
}

export default AutofinancedCTASection
