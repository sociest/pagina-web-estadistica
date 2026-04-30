import { CheckCircle2 } from 'lucide-react'
import AutofinancedSectionHeader from '../../molecules/postgrado/AutofinancedSectionHeader'
import StatisticalSeal from '../../atoms/data/StatisticalSeal'

function AutofinancedProfileSection({ section }) {
  return (
    <section className="mx-auto max-w-[1536px] px-4 md:px-12">
      <div className="relative overflow-hidden rounded-[3.5rem] border border-slate-200 bg-white p-8 shadow-2xl md:p-14">
        <StatisticalSeal symbol={section.seal.symbol} label={section.seal.label} value={section.seal.value} top="2%" right="5%" className="opacity-[0.08]" />
        <AutofinancedSectionHeader tag={section.tag} title={section.title} sub={section.sub} />

        <div className="grid gap-6 md:grid-cols-2">
          {section.cards.map((card) => {
            const CardIcon = card.icon ?? CheckCircle2
            return (
              <article key={card.title} className={`group rounded-[2.5rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-8 shadow-sm transition-all hover:border-[#001d3d] hover:shadow-xl ${card.span ?? ''}`}>
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-[#ea580c] transition-colors group-hover:bg-[#ea580c] group-hover:text-white">
                    <CardIcon size={28} />
                  </div>
                  <h3 className="text-2xl font-black uppercase leading-tight tracking-tighter text-[#001d3d] transition-colors group-hover:text-[#ea580c]">{card.title}</h3>
                </div>
                <p className="border-l-2 border-slate-100 pl-5 text-base font-medium italic leading-relaxed text-slate-500">{card.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AutofinancedProfileSection
