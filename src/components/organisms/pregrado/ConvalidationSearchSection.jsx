import { Search } from 'lucide-react'

function ConvalidationSearchSection({ intro, activePlan, searchTerm, onSearchTermChange, visuals }) {
  return (
    <section>
      <div className="relative flex flex-col items-center justify-between gap-10 overflow-hidden rounded-[3rem] bg-[linear-gradient(140deg,#001d3d_0%,#002b50_62%,#003a64_100%)] p-10 shadow-2xl md:flex-row md:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <svg className="pointer-events-none absolute right-0 top-0 h-[300px] w-[720px] opacity-[0.16]" viewBox="0 0 720 300" fill="none" aria-hidden="true">
          <path d="M0 146 Q180 60 360 146 T720 146" stroke="#ea580c" strokeWidth="2.4" />
          <path d="M0 176 Q180 90 360 176 T720 176" stroke="#8dc7ff" strokeWidth="1.4" opacity="0.75" />
        </svg>

        <div className="relative z-10 max-w-2xl">
          <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-white">{intro.title}</h3>
          <p className="text-base font-medium italic leading-relaxed text-blue-200">{intro.description}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {visuals.pageMarks.map((mark) => (
              <span key={mark.label} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-base sm:text-base md:text-lg font-mono font-black uppercase tracking-wider text-white/55">
                {mark.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 w-full md:w-[420px]">
          <div className="group relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
              <Search size={20} className="text-slate-400 transition-colors group-focus-within:text-[#ea580c]" />
            </div>
            <input
              type="text"
              placeholder={intro.searchPlaceholder}
              value={searchTerm}
              onChange={(event) => onSearchTermChange(event.target.value)}
              className="w-full rounded-2xl border-2 border-white/20 bg-white/10 py-5 pl-14 pr-6 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white placeholder:text-white/40 shadow-inner transition-all focus:border-[#ea580c] focus:bg-white/20 focus:outline-none"
            />
          </div>
          {searchTerm && (
            <p className="mt-3 text-right text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-[#ea580c]">
              Filtrando en {activePlan === '2021' ? 'Plan 2012 -> 2021' : 'Plan 2007 -> 2012'}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default ConvalidationSearchSection
