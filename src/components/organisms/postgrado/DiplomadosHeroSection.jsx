function DiplomadosHeroSection({ hero, sectionIcon: SectionIcon }) {
  const LeftIcon = hero.iconLeft
  const RightIcon = hero.iconRight

  return (
    <section className="relative overflow-hidden border-b-8 border-[#ea580c] bg-[linear-gradient(160deg,#001d3d_0%,#003666_55%,#00447e_100%)] px-8 pb-24 pt-[112px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22), transparent 45%), radial-gradient(circle at 80% 10%, rgba(234,88,12,0.2), transparent 35%), repeating-linear-gradient(0deg, rgba(255,255,255,0.08), rgba(255,255,255,0.08) 1px, transparent 1px, transparent 24px)',
        }}
      />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]" viewBox="0 0 1440 540" fill="none" aria-hidden="true">
        <path d="M0 360C220 320 390 170 610 190C830 210 980 370 1200 330C1290 315 1370 260 1440 220" stroke="#f97316" strokeWidth="3" />
        <path d="M0 400C260 360 420 240 640 250C840 260 970 390 1190 380C1280 374 1360 350 1440 320" stroke="#bae6fd" strokeWidth="2" />
      </svg>

      <div className="relative z-10 mx-auto flex max-w-[1536px] flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-300/30 bg-blue-200/10 px-5 py-2 backdrop-blur-sm">
          {SectionIcon ? <SectionIcon className="text-blue-100" size={14} /> : null}
          <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-blue-100">{hero.eyebrow}</span>
        </div>

        <h1 className="mb-6 text-5xl font-black uppercase leading-none tracking-tighter text-white md:text-6xl lg:text-7xl">
          {hero.title[0]} <br />
          <span className="font-serif lowercase italic tracking-normal text-[#ea580c]">{hero.title[1]}</span>
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-lg font-medium italic leading-relaxed text-blue-100 md:text-xl">{hero.description}</p>

        <div className="flex flex-wrap justify-center gap-3">
          {hero.highlights.map((item) => (
            <span

              key={item}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-white/90 backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {LeftIcon ? <LeftIcon className="pointer-events-none absolute -left-12 top-16 text-white/15" size={260} /> : null}
      {RightIcon ? <RightIcon className="pointer-events-none absolute -bottom-5 -right-10 text-white/15" size={230} /> : null}
    </section>
  )
}

export default DiplomadosHeroSection
