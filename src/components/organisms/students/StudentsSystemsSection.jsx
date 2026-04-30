import { ArrowRight, ArrowUpRight } from 'lucide-react'

function StudentsSystemsSection({ systems, externalLinkIcon: ExternalLinkIcon }) {
  return (
    <section className="relative z-20 mx-auto -mt-8 grid max-w-[1536px] gap-6 px-6 md:grid-cols-2 md:px-12">
      {systems.map((system) => {
        const CardIcon = system.icon
        const blueTone = system.tone === 'blue'

        return (
          <a
            key={system.id}
            href={system.href}
            target="_blank"
            rel="noreferrer"
            className={`group relative flex items-center justify-between overflow-hidden rounded-3xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              blueTone ? 'bg-[#00447e]' : 'border border-amber-600/50 bg-[#b45309]'
            }`}
          >
            <div className="absolute -bottom-10 -right-10 opacity-10 transition-transform group-hover:scale-110">
              <CardIcon size={150} />
            </div>

            <div className="relative z-10">
              <p className={`mb-1 text-base sm:text-base md:text-lg font-black uppercase tracking-[0.4em] ${blueTone ? 'text-blue-300' : 'text-amber-200'}`}>{system.tag}</p>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-white md:text-3xl">{system.title}</h3>
              <p className={`mt-2 flex items-center gap-2 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest ${blueTone ? 'text-blue-100/70' : 'text-amber-100/70'}`}>
                <ArrowRight size={12} />
                {system.caption}
              </p>
            </div>

            <div className={`relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full text-white transition-colors ${blueTone ? 'bg-white/10 group-hover:bg-white group-hover:text-[#00447e]' : 'bg-white/10 group-hover:bg-white group-hover:text-[#b45309]'}`}>
              {ExternalLinkIcon ? <ExternalLinkIcon size={24} /> : <ArrowUpRight size={24} />}
            </div>
          </a>
        )
      })}
    </section>
  )
}

export default StudentsSystemsSection
