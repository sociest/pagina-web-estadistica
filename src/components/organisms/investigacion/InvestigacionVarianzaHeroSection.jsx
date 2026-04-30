import { BookOpen } from 'lucide-react'
import { StatisticalGrid } from '../../atoms/data/StatisticalCharts'
import VarianzaCoverImage from '../../molecules/investigacion/VarianzaCoverImage'

const InvestigacionVarianzaHeroSection = ({ hero }) => (
  <section className="relative overflow-hidden bg-[linear-gradient(160deg,#001d3d_0%,#003666_56%,#00447e_100%)] px-6 pb-20 pt-12 md:px-10 md:pt-14">
    <StatisticalGrid color="#ffffff" opacity={0.06} />

    <div className="pointer-events-none absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle at 20% 14%, rgba(255,255,255,0.24), transparent 38%), radial-gradient(circle at 85% 16%, rgba(234,88,12,0.24), transparent 34%)' }} aria-hidden="true" />

    <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-12 md:flex-row">
      <div className="max-w-2xl flex-1 text-center md:text-left">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="flex size-2 animate-pulse rounded-full bg-[#ea580c]" />
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/80">{hero.issn}</span>
        </div>

        <h1 className="mb-5 text-4xl font-black uppercase leading-none tracking-tighter text-white md:text-5xl lg:text-6xl">
          {hero.title[0]} <br />
          <span className="text-[#ea580c]">{hero.title[1]}</span>
        </h1>

        <p className="mb-8 max-w-xl text-lg font-medium italic leading-relaxed text-blue-200/80 md:text-xl">
          {hero.subtitle}
        </p>

        <a href={hero.ojsHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white transition-colors hover:text-[#ea580c]">
          <BookOpen size={14} />
          {hero.ojsLabel}
        </a>
      </div>

      <div className="relative hidden lg:block">
        <div className="absolute inset-0 rounded-full bg-[#ea580c] opacity-20 blur-[80px]" aria-hidden="true" />
        <div className="relative z-10 w-64 rotate-6 transition-transform duration-500 hover:rotate-0">
          <VarianzaCoverImage edition="24" year="2024" />
        </div>
      </div>
    </div>
  </section>
)

export default InvestigacionVarianzaHeroSection
