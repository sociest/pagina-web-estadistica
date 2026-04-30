import MilestoneCard from '../../molecules/cards/MilestoneCard'

const AboutTimelineSection = ({ milestones }) => (
  <section className="relative bg-[#f1f5f9] px-6 py-24 md:px-10 md:py-32">
    <svg className="pointer-events-none absolute left-0 top-12 h-[280px] w-[520px] opacity-[0.08]" viewBox="0 0 520 280" fill="none" aria-hidden="true">
      <path d="M0 150 Q130 70 260 150 T520 150" stroke="#00447e" strokeWidth="2" />
      <path d="M0 176 Q130 96 260 176 T520 176" stroke="#c2410c" strokeWidth="1.3" opacity="0.55" />
    </svg>
    <svg className="pointer-events-none absolute bottom-10 right-0 h-[320px] w-[380px] opacity-[0.07]" viewBox="0 0 380 320" fill="none" aria-hidden="true">
      <circle cx="210" cy="160" r="128" stroke="#00447e" strokeWidth="1.8" />
      <circle cx="210" cy="160" r="96" stroke="#00447e" strokeWidth="1.2" opacity="0.7" />
      <circle cx="210" cy="160" r="68" stroke="#c2410c" strokeWidth="1" opacity="0.5" />
    </svg>

    <div className="mx-auto max-w-[1440px]">
      <div className="mb-24 text-center">
        <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.6em] text-[#c2410c]">Evolucion Historica</span>
        <h2 className="mt-4 text-4xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">Hitos del Desarrollo</h2>
      </div>

      <div className="relative mt-20">
        <div className="absolute bottom-0 left-4 top-0 z-0 w-[2px] border-l border-dashed border-slate-300 bg-slate-200 md:left-1/2 md:-translate-x-1/2" />

        <div className="relative flex flex-col items-center">
          {milestones.map((m, i) => (
            <div key={m.year} className={`relative mb-12 flex w-full flex-col items-center gap-8 md:mb-0 md:flex-row md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${i > 0 ? 'md:-mt-24 lg:-mt-32' : ''}`}>
              <MilestoneCard milestone={m} index={i} />

              <div className="z-20 flex size-10 shrink-0 items-center justify-center rounded-full border-[4px] border-[#00447e] bg-[#f1f5f9] text-[10px] font-black text-[#00447e] shadow-xl md:size-12 md:bg-white">
                {m.year.slice(-2)}
              </div>

              <div className="hidden w-[48%] flex-col gap-4 px-10 opacity-20 md:flex">
                <div className="h-[2px] w-12 bg-[#c2410c]" />
                <div className="h-[2px] w-24 bg-slate-300" />
                <span className="font-mono text-[9px]">t = {i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default AboutTimelineSection
