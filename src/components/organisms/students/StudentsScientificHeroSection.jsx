function StudentsScientificHeroSection({ hero }) {
  const LeftShape = hero.leftShape
  const RightShape = hero.rightShape
  const HeroIcon = hero.icon

  return (
    <section className="relative overflow-hidden border-b-[8px] border-[#ea580c] bg-[#001d3d] px-6 pb-24 pt-[140px] md:px-10">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <svg className="absolute inset-0 h-full w-full opacity-[0.1]" viewBox="0 0 1600 620" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 420C320 420 640 260 960 220C1170 194 1390 220 1600 420" stroke="#ea580c" strokeWidth="2.2" />
        <path d="M0 454C320 454 640 294 960 254C1170 228 1390 254 1600 454" stroke="#93c5fd" strokeWidth="1.8" opacity="0.75" />
      </svg>

      <div className="relative mx-auto flex max-w-[1536px] flex-col items-center gap-10 text-center md:flex-row md:justify-between md:text-left">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
            {HeroIcon ? <HeroIcon className="text-[#ea580c]" size={14} /> : null}
            <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/80">{hero.eyebrow}</span>
          </div>

          <h1 className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-white md:text-5xl lg:text-6xl">
            {hero.title[0]} <br />
            <span className="font-serif lowercase italic tracking-normal text-[#ea580c]">{hero.title[1]}</span>
          </h1>

          <p className="max-w-2xl text-base font-medium italic leading-relaxed text-blue-200/85 md:text-lg">
            {hero.description}
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-7 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/20"
        >
          {hero.ctaLabel}
        </button>
      </div>

      {LeftShape ? <LeftShape className="absolute -left-10 top-20 text-white/10" size={250} /> : null}
      {RightShape ? <RightShape className="absolute -right-10 bottom-0 text-white/10" size={210} /> : null}
    </section>
  )
}

export default StudentsScientificHeroSection
