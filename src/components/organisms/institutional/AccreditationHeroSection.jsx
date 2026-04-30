import { ScatterPlot } from '../../atoms/data/StatisticalCharts'

const AccreditationHeroSection = ({ hero }) => (
  <section className="relative overflow-hidden border-b-8 border-[#ea580c] bg-[linear-gradient(160deg,#001d3d_0%,#003666_55%,#00447e_100%)] px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
    <svg className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] opacity-[0.07]" viewBox="0 0 420 420" fill="none" aria-hidden="true">
      <circle cx="210" cy="210" r="180" stroke="#9ad6ff" strokeWidth="2" />
      <circle cx="210" cy="210" r="140" stroke="#9ad6ff" strokeWidth="1.5" opacity="0.7" />
      <circle cx="210" cy="210" r="98" stroke="#ea580c" strokeWidth="1.1" opacity="0.5" />
    </svg>

    <svg className="pointer-events-none absolute right-0 top-0 h-[360px] w-[560px] opacity-[0.08]" viewBox="0 0 560 360" fill="none" aria-hidden="true">
      <path d="M0 180 Q140 95 280 180 T560 180" stroke="#ea580c" strokeWidth="2.4" />
      <path d="M0 205 Q140 120 280 205 T560 205" stroke="#9ad6ff" strokeWidth="1.5" opacity="0.74" />
    </svg>

    <svg className="pointer-events-none absolute bottom-4 right-10 h-[180px] w-[260px] opacity-[0.08]" viewBox="0 0 260 180" fill="none" aria-hidden="true">
      <rect x="16" y="110" width="16" height="50" rx="2" fill="#9ad6ff" />
      <rect x="42" y="94" width="16" height="66" rx="2" fill="#9ad6ff" opacity="0.85" />
      <rect x="68" y="76" width="16" height="84" rx="2" fill="#9ad6ff" opacity="0.7" />
      <rect x="94" y="60" width="16" height="100" rx="2" fill="#ea580c" opacity="0.75" />
      <rect x="120" y="46" width="16" height="114" rx="2" fill="#9ad6ff" opacity="0.7" />
      <line x1="10" y1="160" x2="210" y2="160" stroke="#9ad6ff" strokeWidth="1" opacity="0.55" />
      <line x1="10" y1="128" x2="210" y2="128" stroke="#9ad6ff" strokeWidth="1" opacity="0.35" />
      <line x1="10" y1="96" x2="210" y2="96" stroke="#9ad6ff" strokeWidth="1" opacity="0.25" />
    </svg>

    <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-[0.055]" aria-hidden="true">
      <ScatterPlot color="#ffffff" opacity={0.14} />
    </div>

    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(234,88,12,0.2),transparent_35%),repeating-linear-gradient(0deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_1px,transparent_1px,transparent_24px)]" aria-hidden="true" />

    <div className="pointer-events-none absolute right-24 top-16 hidden select-none font-serif text-8xl italic font-black text-white opacity-[0.08] md:block" aria-hidden="true">
      Sigma
    </div>
    <div className="pointer-events-none absolute bottom-20 left-12 hidden select-none font-serif text-7xl italic font-black text-[#ea580c] opacity-[0.1] md:block" aria-hidden="true">
      chi2
    </div>

    <div className="mx-auto grid max-w-[1440px] items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] md:gap-16">
      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-[2px] w-10 rounded-full bg-[#c2410c]" />
          <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/75">{hero.eyebrow}</span>
        </div>

        <h2 className="mb-8 text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-6xl">
          {hero.title[0]} <br />
          <span className="font-serif italic lowercase tracking-tight text-[#ea580c]">{hero.title[1]}</span> <br />
          {hero.title[2]}
        </h2>

        <div className="max-w-lg">
          <p className="mb-10 rounded-r-2xl border-l-4 border-[#ea580c] bg-white/10 py-4 pl-6 text-base font-medium leading-relaxed text-slate-200 shadow-sm md:text-base">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {hero.chips.map((chip) => (
              <div key={chip.symbol} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-sm">
                <span className="font-serif text-xl italic text-[#9ad6ff]">{chip.symbol}</span>
                <span className="text-[8px] font-black uppercase leading-none tracking-widest text-slate-200">
                  {chip.label} <br />
                  {chip.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-10 rounded-full bg-blue-500/5 blur-[60px]" />
        <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-4 shadow-2xl">
          <img src={hero.imageUrl} className="h-[400px] w-full rounded-[2.5rem] object-cover grayscale-[0.8] brightness-90 contrast-[1.3] md:h-[500px]" alt="Acreditacion" />
          <div className="absolute inset-4 rounded-[2.5rem] bg-[#00447e]/5" />
          <div className="absolute right-10 top-10 flex flex-col items-end text-white drop-shadow-lg">
            <span className="text-5xl font-black italic">A+</span>
            <p className="text-base sm:text-base md:text-lg font-bold uppercase tracking-widest">Nivel Academico</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AccreditationHeroSection
