import { Building, FileText, Sigma } from 'lucide-react'
import { StatisticalGrid } from '../../atoms/data/StatisticalCharts'
import ResearchSeal from '../../atoms/investigacion/ResearchSeal'
import IetaContactItem from '../../molecules/investigacion/IetaContactItem'

const AcercaIetaHeroSection = ({ hero, contacts }) => (
  <section className="relative overflow-hidden border-b-[8px] border-[#ea580c] bg-[linear-gradient(155deg,#001d3d_0%,#00325f_52%,#00447e_100%)] px-6 pb-20 pt-10 md:px-10 md:pb-24 md:pt-14">
    <StatisticalGrid color="#ffffff" opacity={0.06} />

    <div
      className="pointer-events-none absolute inset-0 opacity-[0.14]"
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 10%, rgba(255,255,255,0.25), transparent 42%), radial-gradient(circle at 85% 15%, rgba(234,88,12,0.28), transparent 30%)',
      }}
      aria-hidden="true"
    />

    <svg className="pointer-events-none absolute right-0 top-0 h-[420px] w-[640px] opacity-[0.15]" viewBox="0 0 640 420" fill="none" aria-hidden="true">
      <path d="M0 210 Q160 110 320 210 T640 210" stroke="#ea580c" strokeWidth="2.4" />
      <path d="M0 236 Q160 136 320 236 T640 236" stroke="#d1ecff" strokeWidth="1.6" />
      <path d="M0 262 Q160 162 320 262 T640 262" stroke="#ffffff" strokeWidth="1" opacity="0.55" />
    </svg>

    <div className="pointer-events-none absolute left-10 top-24 hidden text-white/10 lg:block" aria-hidden="true">
      <Sigma size={240} />
    </div>

    <ResearchSeal symbol="n" label="muestras" value="380" className="absolute left-8 top-20 hidden lg:block" />
    <ResearchSeal symbol="R2" label="ajuste" value="0.98" className="absolute bottom-10 right-8 hidden lg:block" />

    <div className="relative z-10 mx-auto grid max-w-[1536px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur-sm">
          <div className="h-[2px] w-8 bg-[#ea580c]" />
          <span className="text-[10px] font-black uppercase tracking-[0.33em] text-white/85">{hero.tag}</span>
        </div>

        <h1 className="mb-6 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-7xl">
          {hero.title[0]} <br />
          <span className="text-[#ea580c]">{hero.title[1]}</span>
        </h1>

        <p className="mb-10 max-w-2xl rounded-r-2xl border-l-4 border-[#ea580c] bg-white/10 py-4 pl-6 text-sm font-medium italic leading-relaxed text-blue-100/90 md:text-base">
          {hero.subtitle}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={hero.ctaPrimary.href}
            className="rounded-xl bg-[#ea580c] px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-orange-600"
          >
            {hero.ctaPrimary.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-transparent px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white transition-colors hover:bg-white/10"
          >
            <FileText size={14} />
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>

      <aside className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
        <img src={hero.imageUrl} alt="IETA" className="mb-7 h-[240px] w-full rounded-[1.6rem] object-cover img-official-archive" />

        <div className="absolute -bottom-10 -right-6 opacity-10" aria-hidden="true">
          <Building size={150} />
        </div>

        <h3 className="mb-6 border-b border-white/10 pb-4 text-[10px] font-black uppercase tracking-[0.38em] text-white/60">
          CENTRO DE OPERACIONES IETA
        </h3>

        <div className="relative z-10 space-y-5">
          {contacts.map((item) => (
            <IetaContactItem key={item.title} item={item} />
          ))}
        </div>
      </aside>
    </div>
  </section>
)

export default AcercaIetaHeroSection
