import { Building, Sigma } from 'lucide-react'
import { StatisticalGrid } from '../../atoms/data/StatisticalCharts'

const InvestigacionProyectosHeroSection = ({ hero, contact }) => {
  const PrimaryIcon = hero.ctaPrimary.icon
  const SecondaryIcon = hero.ctaSecondary.icon

  return (
    <section id="identidad" className="relative overflow-hidden border-b-[8px] border-[#ea580c] bg-[linear-gradient(160deg,#001d3d_0%,#003666_56%,#00447e_100%)] px-6 pb-24 pt-12 md:px-10 md:pt-14">
      <StatisticalGrid color="#ffffff" opacity={0.06} />

      <div className="pointer-events-none absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'radial-gradient(circle at 18% 15%, rgba(255,255,255,0.22), transparent 40%), radial-gradient(circle at 82% 12%, rgba(234,88,12,0.24), transparent 32%)' }} aria-hidden="true" />

      <Sigma className="pointer-events-none absolute -left-10 top-20 text-white/8" size={250} aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-[1536px] flex-col items-center justify-between gap-16 lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <div className="h-[2px] w-8 bg-[#ea580c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">{hero.tag}</span>
          </div>

          <h1 className="mb-6 text-5xl font-black uppercase leading-none tracking-tighter text-white md:text-6xl lg:text-7xl">
            {hero.title[0]} <br />
            <span className="text-[#ea580c]">{hero.title[1]}</span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-base font-medium italic leading-relaxed text-blue-200/80 lg:mx-0 lg:text-lg">
            {hero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <a href={hero.ctaPrimary.href} className="flex items-center gap-2 rounded-xl bg-[#ea580c] px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-orange-600">
              <PrimaryIcon size={14} />
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-white/20 bg-transparent px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white transition-colors hover:bg-white/10">
              <SecondaryIcon size={14} />
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        <aside className="relative w-full overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md lg:w-[400px]">
          <div className="absolute -bottom-10 -right-10 opacity-10" aria-hidden="true">
            <Building size={150} />
          </div>

          <h4 className="mb-6 border-b border-white/10 pb-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/50">CENTRO DE OPERACIONES</h4>

          <div className="relative z-10 space-y-6">
            {contact.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                    <Icon size={18} className={item.iconClassName} />
                  </div>
                  <div>
                    <p className="mb-1 text-[11px] font-black uppercase leading-tight text-white">{item.label}</p>
                    <p className="text-[10px] font-medium italic text-blue-200/70">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </aside>
      </div>
    </section>
  )
}

export default InvestigacionProyectosHeroSection
