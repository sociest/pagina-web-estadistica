import PregradoSectionHeader from '../../molecules/pregrado/PregradoSectionHeader'

function AdmissionsTimelineSection({ section, visuals }) {
  const TimelineIcon = visuals?.timeline

  return (
    <section className="relative mx-auto max-w-[1536px] overflow-hidden rounded-[4rem] bg-[linear-gradient(145deg,#001d3d_0%,#00284d_58%,#00365e_100%)] px-8 py-24 shadow-2xl">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <svg className="pointer-events-none absolute right-0 top-0 h-[340px] w-[760px] opacity-[0.18]" viewBox="0 0 760 340" fill="none" aria-hidden="true">
        <path d="M0 170 Q190 78 380 170 T760 170" stroke="#ea580c" strokeWidth="2.3" />
        <path d="M0 204 Q190 112 380 204 T760 204" stroke="#8dc7ff" strokeWidth="1.4" opacity="0.7" />
      </svg>

      <div className="relative z-10">
        <PregradoSectionHeader tag={section.tag} title={section.title} sub={section.sub} light />

        <div className="grid gap-8 md:grid-cols-2">
          {section.periods.map((period) => (
            <article key={period.id} className="group relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all hover:bg-white/10">
              {TimelineIcon && <TimelineIcon className="absolute -right-6 -top-6 text-white/5" size={150} />}
              <div className="relative z-10">
                <span className={`rounded px-3 py-1 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-white ${period.badgeStyle === 'orange' ? 'bg-[#ea580c]' : 'bg-blue-600'}`}>
                  {period.badge}
                </span>
                <h4 className="mb-2 mt-4 text-4xl font-black uppercase tracking-tighter text-white">{period.title}</h4>
                <p className="mb-8 text-base font-medium italic text-blue-200">{period.summary}</p>

                <ul className="space-y-4">
                  {period.rows.map(([label, value], index) => (
                    <li key={label} className={`flex items-center justify-between border-b border-white/10 pb-3 ${index === period.rows.length - 1 ? 'border-b-0 pb-0' : ''}`}>
                      <span className="text-base sm:text-base md:text-lg font-bold uppercase tracking-wider text-slate-300">{label}</span>
                      <span className={`text-[10px] font-black ${index === period.rows.length - 1 ? (period.badgeStyle === 'orange' ? 'rounded bg-white/10 px-2 py-1 text-[#ea580c]' : 'rounded bg-white/10 px-2 py-1 text-blue-400') : 'text-white'}`}>
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdmissionsTimelineSection
