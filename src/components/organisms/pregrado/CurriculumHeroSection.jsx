function CurriculumHeroSection({ hero }) {
  return (
    <section className="relative overflow-hidden border-b-8 border-[#ea580c] bg-[linear-gradient(160deg,#001d3d_0%,#003666_55%,#00447e_100%)] px-8 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(234,88,12,0.2),transparent_35%),repeating-linear-gradient(0deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_1px,transparent_1px,transparent_24px)]" aria-hidden="true" />
      <svg className="pointer-events-none absolute left-0 top-0 h-[320px] w-[760px] opacity-[0.2]" viewBox="0 0 760 320" fill="none" aria-hidden="true">
        <path d="M0 150 Q190 60 380 150 T760 150" stroke="#ea580c" strokeWidth="2.4" />
        <path d="M0 186 Q190 96 380 186 T760 186" stroke="#9ad6ff" strokeWidth="1.6" opacity="0.8" />
      </svg>
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true">
        <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.14)_25%,rgba(255,255,255,0.14)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.14)_75%,rgba(255,255,255,0.14)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.11)_25%,rgba(255,255,255,0.11)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.11)_75%,rgba(255,255,255,0.11)_76%,transparent_77%,transparent)] bg-[length:74px_74px]" />
      </div>

      <div className="relative mx-auto flex max-w-[1536px] flex-col items-end justify-between gap-6 md:flex-row">
        <div>
          <p className="mb-2 text-base sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-[#ea580c]">{hero.eyebrow}</p>
          <h1 className="text-4xl font-black uppercase leading-none tracking-tighter text-white md:text-5xl">
            {hero.title[0]} <br />
            <span className="font-serif text-slate-300 italic lowercase tracking-normal">{hero.title[1]}</span>
          </h1>
        </div>
        <div className="flex gap-6 pb-1 font-mono text-[10px] font-black uppercase italic text-white/40">
          {hero.highlights.map((item, index) => (
            <span key={item} className={index === 1 ? 'text-[#ea580c]' : ''}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurriculumHeroSection
