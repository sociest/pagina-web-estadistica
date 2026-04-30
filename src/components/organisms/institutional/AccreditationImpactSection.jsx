import ImpactBenefitCard from '../../molecules/cards/ImpactBenefitCard'

const AccreditationImpactSection = ({ highlight, impactCards, cta }) => (
  <section className="relative bg-[#f1f5f9] px-6 py-24 md:px-10 md:py-40">
    <svg className="pointer-events-none absolute left-0 top-10 h-[300px] w-[560px] opacity-[0.08]" viewBox="0 0 560 300" fill="none" aria-hidden="true">
      <path d="M0 170 Q140 90 280 170 T560 170" stroke="#00447e" strokeWidth="2" />
      <path d="M0 196 Q140 116 280 196 T560 196" stroke="#00447e" strokeWidth="1.5" opacity="0.6" />
      <path d="M0 222 Q140 142 280 222 T560 222" stroke="#c2410c" strokeWidth="1.2" opacity="0.55" />
    </svg>
    <svg className="pointer-events-none absolute bottom-14 right-0 h-[340px] w-[420px] opacity-[0.07]" viewBox="0 0 420 340" fill="none" aria-hidden="true">
      <circle cx="240" cy="170" r="140" stroke="#00447e" strokeWidth="1.8" />
      <circle cx="240" cy="170" r="108" stroke="#00447e" strokeWidth="1.2" opacity="0.7" />
      <circle cx="240" cy="170" r="78" stroke="#c2410c" strokeWidth="1" opacity="0.5" />
    </svg>

    <div className="pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-[radial-gradient(circle_at_18%_22%,rgba(0,68,126,0.12),transparent_62%)]" aria-hidden="true" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-[radial-gradient(circle_at_82%_72%,rgba(194,65,12,0.10),transparent_60%)]" aria-hidden="true" />
    <div className="pointer-events-none absolute right-20 top-[63%] hidden font-mono text-[10px] font-bold tracking-[0.24em] text-[#00447e] opacity-[0.24] lg:block">QUALITY_INDEX</div>

    <div className="mx-auto max-w-[1440px]">
      <div className="grid items-start gap-16 lg:grid-cols-[0.8fr_1.2fr] md:gap-24">
        <div>
          <div className="lg:sticky lg:top-40">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-1 w-12 bg-[#00447e]" />
              <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-slate-400">Valor Agregado</span>
            </div>

            <h2 className="mb-10 text-4xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
              {highlight.title[0]} <br />
              <span className="text-[#c2410c]">{highlight.title[1]}</span>
            </h2>

            <p className="mb-12 border-l-4 border-slate-200 pl-6 text-base font-medium leading-relaxed text-slate-500 md:text-base">
              {highlight.description}
            </p>

            <div className="relative overflow-hidden rounded-[3rem] border-b-[8px] border-[#c2410c] bg-[#002a52] p-8 text-white shadow-2xl">
              <highlight.statusIcon className="absolute -bottom-8 -right-8 opacity-10" size={140} />
              <h4 className="mb-4 text-xl font-black uppercase tracking-widest">{highlight.statusTitle}</h4>
              <p className="mb-6 text-xs font-bold uppercase leading-relaxed tracking-widest text-blue-100/70">
                {highlight.statusText}
              </p>
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 p-3">
                <div className="size-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-widest">{highlight.statusPill}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative space-y-12">
          {impactCards.map((item, index) => (
            <ImpactBenefitCard key={item.t} item={item} index={index} />
          ))}

          <div className="flex justify-center pt-10">
            <div className="w-full rounded-[3rem] border-2 border-dashed border-slate-300 bg-white/50 p-8 text-center backdrop-blur-sm">
              <span className="mb-4 block text-base sm:text-base md:text-lg font-black uppercase tracking-[0.5em] text-slate-400">{cta.title}</span>
              <h5 className="flex items-center justify-center gap-4 text-xl font-black uppercase tracking-widest text-[#00447e]">
                <cta.icon className="text-[#c2410c]" size={24} />
                {cta.label}
                <cta.icon className="text-[#c2410c]" size={24} />
              </h5>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {cta.links.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className={idx === 0
                  ? 'inline-flex items-center gap-2 rounded-full bg-[#00447e] px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white shadow-xl transition-[background-color,transform] duration-300 motion-reduce:transition-none hover:bg-[#002a52] active:scale-95'
                  : 'inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-700 shadow-lg transition-[border-color,color,transform] duration-300 motion-reduce:transition-none hover:border-[#00447e] hover:text-[#00447e] active:scale-95'}
              >
                {link.label}
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AccreditationImpactSection
