function StudentsHeroSection({ hero, searchTerm, onSearchChange }) {
  const HeroIcon = hero.icon
  const LeftShape = hero.leftShape
  const RightShape = hero.rightShape
  const SearchIcon = hero.searchIcon

  return (
    <section className="relative overflow-hidden border-b-8 border-[#ea580c] bg-[linear-gradient(160deg,#001d3d_0%,#003666_55%,#00447e_100%)] px-8 pb-16 pt-[120px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(234,88,12,0.2),transparent_35%),repeating-linear-gradient(0deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_1px,transparent_1px,transparent_24px)]" />
      <svg className="pointer-events-none absolute right-0 top-0 h-[360px] w-[900px] opacity-[0.24]" viewBox="0 0 900 360" fill="none" aria-hidden="true">
        <path d="M0 170 Q225 68 450 170 T900 170" stroke="#ea580c" strokeWidth="2.6" />
        <path d="M0 204 Q225 102 450 204 T900 204" stroke="#9ad6ff" strokeWidth="1.6" opacity="0.82" />
        <path d="M0 238 Q225 136 450 238 T900 238" stroke="#ffffff" strokeWidth="1.15" opacity="0.42" />
      </svg>
      <svg className="pointer-events-none absolute -left-16 bottom-4 h-[260px] w-[760px] opacity-[0.18]" viewBox="0 0 760 260" fill="none" aria-hidden="true">
        <path d="M0 130 Q190 36 380 130 T760 130" stroke="#ea580c" strokeWidth="2.2" />
        <path d="M0 164 Q190 70 380 164 T760 164" stroke="#8dc7ff" strokeWidth="1.2" opacity="0.56" />
      </svg>
      <svg className="pointer-events-none absolute left-12 top-10 h-[210px] w-[280px] opacity-[0.16]" viewBox="0 0 280 210" fill="none" aria-hidden="true">
        <circle cx="30" cy="30" r="3" fill="#9ad6ff" />
        <circle cx="80" cy="60" r="2.5" fill="#ffffff" opacity="0.8" />
        <circle cx="130" cy="38" r="2.5" fill="#ea580c" />
        <circle cx="190" cy="92" r="3" fill="#9ad6ff" />
        <circle cx="240" cy="54" r="2" fill="#ffffff" opacity="0.75" />
        <circle cx="58" cy="134" r="2.5" fill="#ea580c" />
        <circle cx="160" cy="150" r="2.5" fill="#9ad6ff" />
        <circle cx="220" cy="168" r="2" fill="#ffffff" opacity="0.7" />
      </svg>

      <div className="relative z-10 mx-auto flex max-w-[1536px] flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/20 px-5 py-2 backdrop-blur-sm">
          {HeroIcon ? <HeroIcon className="text-blue-200" size={14} /> : null}
          <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-blue-100">{hero.eyebrow}</span>
        </div>

        <h1 className="mb-4 text-4xl font-black uppercase leading-none tracking-tighter text-white md:text-5xl lg:text-6xl">
          {hero.title[0]} <br />
          <span className="font-serif lowercase italic tracking-normal text-[#ea580c]">{hero.title[1]}</span>
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-base font-medium italic leading-relaxed text-blue-200/80 md:text-lg">{hero.description}</p>

        <div className="relative w-full max-w-2xl rounded-full shadow-2xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
            {SearchIcon ? <SearchIcon size={20} className="text-slate-400" /> : null}
          </div>
          <input
            type="text"
            placeholder={hero.placeholder}
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            className="w-full rounded-full border-4 border-transparent bg-white py-5 pl-14 pr-8 text-sm font-black uppercase tracking-widest text-[#001d3d] placeholder:text-slate-400 transition-all focus:border-[#ea580c] focus:outline-none"
          />
        </div>
      </div>

      {LeftShape ? <LeftShape className="pointer-events-none absolute -left-10 top-20 text-white/15" size={200} /> : null}
      {RightShape ? <RightShape className="pointer-events-none absolute -bottom-2 -right-10 text-white/15" size={150} /> : null}
    </section>
  )
}

export default StudentsHeroSection
