import { Download, MailPlus } from 'lucide-react'
import InvestigacionSectionHeader from '../../molecules/investigacion/InvestigacionSectionHeader'
import AutoresManuscriptTypeCard from '../../molecules/investigacion/AutoresManuscriptTypeCard'
import AutoresStatisticalOverlay from '../../atoms/investigacion/AutoresStatisticalOverlay'

const InvestigacionAutoresGuideSection = ({ header, cards, manuscriptTypes, process, cta }) => (
  <section id="guia" className="relative z-10 mx-auto max-w-[1200px] px-6 py-24">
    <InvestigacionSectionHeader tag={header.tag} title={header.title} subtitle={header.subtitle} />

    <div className="mb-16 grid gap-8 lg:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon
        return (
          <article
            key={card.title}
            className={[
              'group relative overflow-hidden rounded-[3rem] p-10 transition-all',
              card.tone === 'dark'
                ? 'border-b-[8px] border-[#ea580c] bg-[#001d3d] text-white shadow-lg'
                : 'border border-slate-200 bg-white text-[#001d3d] shadow-sm hover:shadow-xl',
            ].join(' ')}
          >
            {card.tone === 'dark' ? <AutoresStatisticalOverlay color="#ffffff" opacity="0.05" /> : null}
            <h3 className="mb-4 flex items-center gap-3 text-xl font-black uppercase tracking-widest">
              <Icon className={card.tone === 'dark' ? 'text-[#ea580c]' : 'text-[#ea580c]'} /> {card.title}
            </h3>
            <p className={card.tone === 'dark' ? 'text-sm font-medium italic leading-relaxed text-blue-100/70' : 'text-sm font-medium italic leading-relaxed text-slate-500'}>
              {card.description}
            </p>
          </article>
        )
      })}
    </div>

    <div className="relative mb-24 overflow-hidden rounded-[3.5rem] border border-slate-200 bg-slate-100 p-12">
      <h4 className="mb-10 text-center text-sm font-black uppercase tracking-[0.4em] text-slate-400">TIPOS DE MANUSCRITOS ACEPTADOS</h4>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {manuscriptTypes.map((item) => (
          <AutoresManuscriptTypeCard key={item.label} item={item} />
        ))}
      </div>
    </div>

    <div className="mb-24">
      <InvestigacionSectionHeader
        tag="CONTROL DE CALIDAD"
        title="PROCESO DE REVISION"
        subtitle="CADA MANUSCRITO ATRAVIESA TRES ETAPAS RIGUROSAS PARA ASEGURAR EXCELENCIA CIENTIFICA."
        center
      />

      <div className="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-slate-200 md:before:mx-auto">
        {process.map((item, index) => (
          <article key={item.step} className="relative flex w-full flex-col items-center md:justify-between md:flex-row">
            <div className="absolute left-5 z-10 flex size-12 -translate-x-1/2 items-center justify-center rounded-2xl border-4 border-slate-100 bg-white font-black text-[#001d3d] shadow-md transition-colors group-hover:border-[#ea580c] md:left-1/2">
              {item.step}
            </div>

            <div className={`w-full pl-16 md:w-[45%] md:pl-0 ${index % 2 === 0 ? 'md:ml-auto md:pr-12 md:text-right' : 'md:mr-auto md:pl-12 md:text-left'}`}>
              <div className={`rounded-[2.5rem] border p-8 ${item.highlighted ? 'border-[#ea580c] bg-[#ea580c]/5 shadow-lg' : 'border-slate-200 bg-white shadow-sm'}`}>
                <h4 className="mb-2 text-xl font-black uppercase tracking-tighter text-[#001d3d]">{item.title}</h4>
                <p className="text-sm font-medium italic leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>

    <article className="relative mb-32 overflow-hidden rounded-[4rem] border-b-[12px] border-[#ea580c] bg-gradient-to-br from-[#001d3d] to-[#001122] p-12 text-center text-white shadow-2xl md:p-20">
      <AutoresStatisticalOverlay color="#ffffff" opacity="0.1" />
      <MailPlus className="mx-auto mb-8 text-[#ea580c]" size={64} />
      <h3 className="mb-6 text-4xl font-black uppercase tracking-tighter md:text-5xl">{cta.title}</h3>
      <p className="mx-auto mb-10 max-w-2xl text-lg font-medium italic leading-relaxed text-blue-200/70">{cta.subtitle}</p>
      <a href={`mailto:${cta.email}`} className="break-all text-3xl font-black text-white transition-colors hover:text-[#ea580c] md:text-5xl">
        {cta.email}
      </a>
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        <button type="button" className="flex items-center gap-3 rounded-2xl bg-[#ea580c] px-8 py-4 text-xs font-black uppercase tracking-widest text-white shadow-xl transition-all hover:scale-105">
          <Download size={18} /> {cta.button}
        </button>
      </div>
    </article>
  </section>
)

export default InvestigacionAutoresGuideSection
