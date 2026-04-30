import { StatisticalGrid } from '../../atoms/data/StatisticalCharts'

const AboutHeroSection = ({ hero }) => (
  <section className="relative overflow-hidden border-b-8 border-[#ea580c] bg-[linear-gradient(160deg,#001d3d_0%,#003666_55%,#00447e_100%)] px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
    <StatisticalGrid color="#ffffff" opacity={0.06} />

    <svg className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] opacity-[0.07]" viewBox="0 0 420 420" fill="none" aria-hidden="true">
      <circle cx="210" cy="210" r="180" stroke="#8dc7ff" strokeWidth="2.1" />
      <circle cx="210" cy="210" r="140" stroke="#8dc7ff" strokeWidth="1.6" opacity="0.74" />
      <circle cx="210" cy="210" r="100" stroke="#ea580c" strokeWidth="1.3" opacity="0.56" />
      <circle cx="210" cy="210" r="66" stroke="#8dc7ff" strokeWidth="1" opacity="0.44" />
    </svg>

    <div className="absolute top-32 right-24 hidden select-none font-serif text-9xl italic font-black text-white opacity-[0.08] lg:block" aria-hidden="true">
      Sum
    </div>
    <div className="absolute bottom-20 left-20 hidden select-none font-serif text-8xl italic font-black text-[#ea580c] opacity-[0.1] md:block" aria-hidden="true">
      sigma
    </div>

    <svg className="pointer-events-none absolute right-0 top-0 h-[400px] w-[600px] opacity-[0.08]" viewBox="0 0 600 400" fill="none" aria-hidden="true">
      <path d="M0 200 Q150 100 300 200 T600 200" stroke="#ea580c" strokeWidth="2.4" />
      <path d="M0 220 Q150 120 300 220 T600 220" stroke="#9ad6ff" strokeWidth="1.5" opacity="0.74" />
      <path d="M0 244 Q150 144 300 244 T600 244" stroke="#ffffff" strokeWidth="1.1" opacity="0.36" />
    </svg>

    <svg className="pointer-events-none absolute bottom-4 right-10 h-[180px] w-[260px] opacity-[0.08]" viewBox="0 0 260 180" fill="none" aria-hidden="true">
      <rect x="16" y="110" width="16" height="50" rx="2" fill="#9ad6ff" />
      <rect x="42" y="94" width="16" height="66" rx="2" fill="#9ad6ff" opacity="0.85" />
      <rect x="68" y="76" width="16" height="84" rx="2" fill="#9ad6ff" opacity="0.7" />
      <rect x="94" y="60" width="16" height="100" rx="2" fill="#ea580c" opacity="0.75" />
      <rect x="120" y="46" width="16" height="114" rx="2" fill="#9ad6ff" opacity="0.7" />
      <line x1="10" y1="160" x2="210" y2="160" stroke="#9ad6ff" strokeWidth="1" opacity="0.72" />
      <line x1="10" y1="128" x2="210" y2="128" stroke="#9ad6ff" strokeWidth="1" opacity="0.48" />
      <line x1="10" y1="96" x2="210" y2="96" stroke="#9ad6ff" strokeWidth="1" opacity="0.34" />
    </svg>

    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(234,88,12,0.2),transparent_35%),repeating-linear-gradient(0deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_1px,transparent_1px,transparent_24px)]" aria-hidden="true" />

    <div className="mx-auto grid max-w-[1440px] items-center gap-8 lg:grid-cols-[1fr_1fr] md:gap-16">
      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-[2px] w-10 rounded-full bg-[#c2410c]" />
          <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/75">Institucional</span>
        </div>

        <h1 className="mb-6 text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white md:mb-10 md:text-6xl">
          {hero.title[0]} <br />
          <span className="font-serif italic lowercase tracking-tight text-[#ea580c]">{hero.title[1]}</span> <br />
          {hero.title[2]}
        </h1>

        <div className="max-w-lg">
          <p className="mb-8 rounded-r-2xl border-l-4 border-[#ea580c] bg-white/10 py-4 pl-6 text-base font-medium leading-relaxed text-slate-200 shadow-sm md:text-base">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="rounded-full border border-[#ea580c]/30 bg-[#ea580c]/20 px-3 py-1 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-[#ffb184]">
              Fundada en 1984
            </div>
            <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[8px] font-black uppercase italic tracking-widest text-blue-100">
              R2 = 1.00
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-10 rounded-full bg-blue-500/5 blur-[60px]" />
        <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white shadow-2xl">
          <img src={hero.imageUrl} className="h-[400px] w-full object-cover grayscale-[0.6] brightness-90 contrast-[1.2] md:h-[500px]" alt="UMSA Legacy" />
          <div className="absolute inset-0 bg-[#00447e]/10" />

          <div className="absolute bottom-6 right-6 rounded-[2rem] border-b-[4px] border-[#c2410c] bg-white p-6 text-center shadow-2xl md:p-8">
            <div className="text-2xl font-black uppercase italic leading-none tracking-tighter text-[#002a52] md:text-3xl">50 ANOS</div>
            <p className="mt-2 text-base sm:text-base md:text-lg font-black uppercase tracking-[0.2em] text-slate-400">Trayectoria</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AboutHeroSection
