import { useMemo, useState } from 'react'
import PregradoSectionHeader from '../../molecules/pregrado/PregradoSectionHeader'

function OccupationalFieldSection({ section }) {
  const sectorKeys = useMemo(() => Object.keys(section.sectors), [section.sectors])
  const [activeSector, setActiveSector] = useState(sectorKeys[0] ?? '')
  const items = section.sectors[activeSector] ?? []

  return (
    <section className="relative overflow-hidden rounded-t-[5rem] bg-[linear-gradient(180deg,#001d3d_0%,#00284d_52%,#00305b_100%)] px-6 py-24 text-white md:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(234,88,12,0.26),transparent_46%),radial-gradient(circle_at_84%_72%,rgba(0,129,255,0.24),transparent_48%)]" aria-hidden="true" />

      <svg className="pointer-events-none absolute right-0 top-0 h-[320px] w-[760px] opacity-[0.2]" viewBox="0 0 760 320" fill="none" aria-hidden="true">
        <path d="M0 156 Q190 52 380 156 T760 156" stroke="#ea580c" strokeWidth="2.2" />
        <path d="M0 194 Q190 90 380 194 T760 194" stroke="#ffffff" strokeWidth="1.2" opacity="0.35" />
      </svg>

      <svg className="pointer-events-none absolute -left-16 bottom-10 h-[260px] w-[360px] opacity-[0.16]" viewBox="0 0 360 260" fill="none" aria-hidden="true">
        <circle cx="140" cy="130" r="96" stroke="#8dc7ff" strokeWidth="1.8" />
        <circle cx="140" cy="130" r="66" stroke="#ea580c" strokeWidth="1.3" opacity="0.85" />
        <circle cx="140" cy="130" r="36" stroke="#ffffff" strokeWidth="1" opacity="0.54" />
      </svg>

      <div className="pointer-events-none absolute inset-0 opacity-[0.11]" aria-hidden="true">
        <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.14)_25%,rgba(255,255,255,0.14)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.14)_75%,rgba(255,255,255,0.14)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.10)_25%,rgba(255,255,255,0.10)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.10)_75%,rgba(255,255,255,0.10)_76%,transparent_77%,transparent)] bg-[length:72px_72px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
          <PregradoSectionHeader tag={section.tag} title={section.title} light />

          <div className="mb-4 flex max-w-full overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-md no-scrollbar">
            {sectorKeys.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSector(tab)}
                className={`whitespace-nowrap rounded-full px-8 py-2.5 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest transition-all ${
                  activeSector === tab ? 'bg-[#ea580c] text-white shadow-lg' : 'text-white/40 hover:text-white'
                }`}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.name} className="group border-l-4 border-white/10 pl-8 transition-all hover:border-[#ea580c]">
              <h4 className="mb-2 text-xl font-black uppercase tracking-tighter transition-colors group-hover:text-[#ea580c]">{item.name}</h4>
              <p className="mb-4 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-[#ea580c]">{item.line}</p>
              <p className="text-base font-medium italic leading-relaxed text-white/40">{item.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default OccupationalFieldSection
