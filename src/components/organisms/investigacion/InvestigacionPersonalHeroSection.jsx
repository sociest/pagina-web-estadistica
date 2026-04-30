import { Users } from 'lucide-react'
import { StatisticalGrid } from '../../atoms/data/StatisticalCharts'
import TeamStatPill from '../../atoms/investigacion/TeamStatPill'

const InvestigacionPersonalHeroSection = ({ hero, stats }) => (
  <section className="relative overflow-hidden border-b-[8px] border-[#ea580c] bg-[linear-gradient(160deg,#001d3d_0%,#003666_56%,#00447e_100%)] px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-12">
    <StatisticalGrid color="#ffffff" opacity={0.06} />

    <svg className="pointer-events-none absolute right-0 top-0 h-[420px] w-[620px] opacity-[0.16]" viewBox="0 0 620 420" fill="none" aria-hidden="true">
      <path d="M0 210 Q155 110 310 210 T620 210" stroke="#ea580c" strokeWidth="2.4" />
      <path d="M0 236 Q155 136 310 236 T620 236" stroke="#9ad6ff" strokeWidth="1.7" opacity="0.8" />
      <path d="M0 262 Q155 162 310 262 T620 262" stroke="#ffffff" strokeWidth="1.1" opacity="0.45" />
    </svg>

    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 18%, rgba(255,255,255,0.20), transparent 40%), radial-gradient(circle at 80% 10%, rgba(234,88,12,0.22), transparent 33%)',
      }}
      aria-hidden="true"
    />

    <div className="relative z-10 mx-auto max-w-[1536px] text-center">
      <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
        <Users className="text-[#ea580c]" size={14} />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">{hero.tag}</span>
      </div>

      <h1 className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-white md:text-6xl">
        {hero.title[0]} <span className="text-[#ea580c]">{hero.title[1]}</span>
      </h1>

      <p className="mx-auto mb-10 max-w-4xl text-sm font-medium italic leading-relaxed text-blue-200/80 md:text-base">
        {hero.subtitle}
      </p>

      <div className="mx-auto grid max-w-3xl gap-3 md:grid-cols-3">
        {stats.map((item) => (
          <TeamStatPill key={item.label} item={item} />
        ))}
      </div>
    </div>
  </section>
)

export default InvestigacionPersonalHeroSection
