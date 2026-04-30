function PostgradoHeroSection({ hero }) {
  const HeroIcon = hero.icon

  return (
    <section className="relative overflow-hidden border-b-8 border-[#ea580c] bg-[linear-gradient(160deg,#001d3d_0%,#003666_55%,#00447e_100%)] pt-[112px] pb-24 px-8">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(234,88,12,0.2),transparent_35%),repeating-linear-gradient(0deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_1px,transparent_1px,transparent_24px)]" />
      <svg className="pointer-events-none absolute left-0 top-0 h-[360px] w-[900px] opacity-[0.18]" viewBox="0 0 900 360" fill="none" aria-hidden="true">
        <path d="M0 170 Q225 68 450 170 T900 170" stroke="#ea580c" strokeWidth="2.4" />
        <path d="M0 204 Q225 102 450 204 T900 204" stroke="#9ad6ff" strokeWidth="1.5" opacity="0.74" />
      </svg>
      <div className="relative z-10 mx-auto flex max-w-[1536px] flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
          <div className="size-2 animate-pulse rounded-full bg-[#ea580c]" />
          <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/80">{hero.eyebrow}</span>
        </div>
        <h1 className="mb-6 text-5xl font-black uppercase leading-none tracking-tighter text-white md:text-6xl lg:text-7xl">
          {hero.title[0]} <br />
          <span className="font-serif lowercase italic tracking-normal text-[#ea580c]">{hero.title[1]}</span>
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-lg font-medium leading-relaxed italic text-blue-200 md:text-xl">
          {hero.description}
        </p>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {hero.highlights.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-white/80 backdrop-blur-sm">
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href={hero.ctaPrimary.href} className="flex items-center justify-center gap-3 rounded-xl bg-[#ea580c] px-10 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white shadow-[0_0_20px_rgba(234,88,12,0.25)] transition hover:bg-orange-600">
            {hero.ctaPrimary.label}
          </a>
          <a href={hero.ctaSecondary.href} className="flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 px-10 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white transition hover:bg-white hover:text-[#001d3d]">
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>
      {HeroIcon ? <HeroIcon className="pointer-events-none absolute -left-10 top-24 text-white/5" size={260} /> : null}
    </section>
  )
}

export default PostgradoHeroSection
