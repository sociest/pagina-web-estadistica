import { Sigma } from 'lucide-react'
import { StatisticalGrid } from '../../atoms/data/StatisticalCharts'

const InvestigacionAutoresHeroSection = ({ hero }) => (
  <section className="relative overflow-hidden border-b-[8px] border-[#ea580c] bg-gradient-to-br from-[#001d3d] via-[#001122] to-[#001d3d] px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
    <StatisticalGrid color="#ffffff" opacity={0.05} />

    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full opacity-[0.1]" viewBox="0 0 1400 640" preserveAspectRatio="none" fill="none">
        <path d="M0 520C350 520 700 400 1050 180C1200 100 1320 80 1400 520" stroke="#ea580c" strokeWidth="2.2" />
        <path d="M0 540C350 540 700 420 1050 200C1200 120 1320 100 1400 540" stroke="white" strokeWidth="1.6" opacity="0.7" />
      </svg>
    </div>

    <div className="pointer-events-none absolute right-20 top-10 hidden select-none text-9xl font-black italic text-white opacity-[0.03] lg:block" aria-hidden="true">
      <Sigma size={120} />
    </div>

    <div className="relative z-10 mx-auto max-w-[1200px] text-center">
      <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 shadow-xl backdrop-blur-sm">
        <span className="flex size-2 animate-pulse rounded-full bg-[#ea580c]" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90">{hero.tag}</span>
      </div>

      <h1 className="mb-8 text-5xl font-black uppercase leading-none tracking-tighter text-white drop-shadow-2xl md:text-7xl">
        {hero.title[0]} <br />
        <span className="text-[#ea580c]">{hero.title[1]}</span>
      </h1>

      <p className="mx-auto max-w-3xl text-lg font-medium italic leading-relaxed text-blue-200/80 md:text-xl">
        {hero.subtitle}
      </p>
    </div>
  </section>
)

export default InvestigacionAutoresHeroSection
