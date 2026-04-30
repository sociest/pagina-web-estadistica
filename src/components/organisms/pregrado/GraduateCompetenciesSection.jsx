import { useState } from 'react'
import CompetencyAccordionItem from '../../molecules/pregrado/CompetencyAccordionItem'
import PregradoSectionHeader from '../../molecules/pregrado/PregradoSectionHeader'

function GraduateCompetenciesSection({ section }) {
  const [activeAccordion, setActiveAccordion] = useState(section.accordions[0]?.id ?? '')

  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-[linear-gradient(180deg,#f2f7ff_0%,#eef5ff_100%)] px-6 py-24 md:px-12">
      <svg className="pointer-events-none absolute right-0 top-0 h-[360px] w-[760px] opacity-[0.17]" viewBox="0 0 760 360" fill="none" aria-hidden="true">
        <path d="M0 168 Q190 84 380 168 T760 168" stroke="#00447e" strokeWidth="2.3" />
        <path d="M0 198 Q190 114 380 198 T760 198" stroke="#ea580c" strokeWidth="1.5" opacity="0.74" />
        <path d="M0 230 Q190 146 380 230 T760 230" stroke="#00447e" strokeWidth="1.1" opacity="0.45" />
      </svg>
      <svg className="pointer-events-none absolute -left-12 bottom-10 h-[240px] w-[300px] opacity-[0.12]" viewBox="0 0 300 240" fill="none" aria-hidden="true">
        <rect x="30" y="120" width="22" height="90" rx="3" fill="#00447e" />
        <rect x="66" y="98" width="22" height="112" rx="3" fill="#00447e" opacity="0.86" />
        <rect x="102" y="80" width="22" height="130" rx="3" fill="#ea580c" opacity="0.78" />
        <rect x="138" y="64" width="22" height="146" rx="3" fill="#00447e" opacity="0.74" />
        <line x1="20" y1="210" x2="210" y2="210" stroke="#00447e" strokeWidth="1" opacity="0.55" />
      </svg>

      <div className="mx-auto grid max-w-[1440px] items-start gap-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32">
          <PregradoSectionHeader tag={section.tag} title={section.title} sub={section.sub} />
          <article className="relative mt-8 overflow-hidden rounded-[3rem] border-b-8 border-[#ea580c] bg-[#00447e] p-10 text-white shadow-2xl">
            <section.degree.decorationIcon className="absolute -bottom-10 -right-10 opacity-10" size={180} />
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                  <section.degree.icon size={20} />
                </div>
                <p className="text-[9px] font-black uppercase leading-none tracking-[0.3em] text-white/50">Titulo academico</p>
              </div>
              <h3 className="mb-3 text-2xl font-black uppercase leading-none tracking-tighter">{section.degree.title}</h3>
              <p className="text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-blue-200 italic">{section.degree.subtitle}</p>
            </div>
          </article>
        </div>

        <div className="py-4">
          {section.accordions.map((item) => (
            <CompetencyAccordionItem
              key={item.id}
              title={item.title}
              icon={item.icon}
              isOpen={activeAccordion === item.id}
              onClick={() => setActiveAccordion(activeAccordion === item.id ? '' : item.id)}
            >
              <ul className="space-y-4">
                {item.bullets.map((bullet) => (
                  <li key={bullet.title} className="flex gap-4">
                    <bullet.icon className="shrink-0 text-[#ea580c]" size={18} />
                    <span>
                      <strong>{bullet.title}:</strong> {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>
            </CompetencyAccordionItem>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GraduateCompetenciesSection
