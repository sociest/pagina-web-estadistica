import StatisticalSeal from '../../atoms/data/StatisticalSeal'
import PregradoSectionHeader from '../../molecules/pregrado/PregradoSectionHeader'
import { CheckCircle2 } from 'lucide-react'

function GraduationModalitiesSection({ meta, modalities }) {
  return (
    <section className="relative">
      <StatisticalSeal
        symbol={meta.seal.symbol}
        label={meta.seal.label}
        value={meta.seal.value}
        top="-5%"
        right="5%"
        className="opacity-[0.12]"
      />

      <PregradoSectionHeader tag={meta.tag} title={meta.title} sub={meta.sub} />

      <div className="grid gap-8 md:grid-cols-2">
        {modalities.map((modality) => {
          const PointIcon = modality.pointIcon ?? CheckCircle2

          return (
            <article key={modality.id} className="group relative flex flex-col justify-between overflow-hidden rounded-[3.5rem] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-2xl md:p-12">
            <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-20 blur-[60px] transition-all duration-700 group-hover:scale-150" style={{ backgroundColor: modality.color }} />

            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div className="flex size-16 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: modality.color }}>
                  <modality.icon size={32} />
                </div>
                <span className="rounded-full border bg-white px-3 py-1 text-base sm:text-base md:text-lg font-black uppercase tracking-widest shadow-sm" style={{ color: modality.color, borderColor: `${modality.color}30` }}>
                  {modality.tag}
                </span>
              </div>

              <h3 className="mb-4 text-3xl font-black uppercase leading-none tracking-tighter text-[#001d3d] transition-colors group-hover:text-[#ea580c]">{modality.title}</h3>
              <p className="mb-10 text-base font-medium italic leading-relaxed text-slate-500">{modality.desc}</p>

              <ul className="mb-10 space-y-4">
                {modality.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <PointIcon size={16} className="mt-0.5 shrink-0" style={{ color: modality.color }} />
                    <span className="text-base sm:text-base md:text-lg font-bold uppercase tracking-tight text-slate-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="group/btn relative z-10 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-100 bg-[#f8fafc] py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-[#001d3d] transition-all hover:bg-[#001d3d] hover:text-white" type="button">
              {meta.ctaLabel} <meta.ctaIcon size={14} className="group-hover/btn:animate-bounce" />
            </button>
          </article>
          )
        })}
      </div>
    </section>
  )
}

export default GraduationModalitiesSection
