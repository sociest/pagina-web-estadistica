import StatisticalSeal from '../../atoms/data/StatisticalSeal'

const AuthoritiesStructureSection = ({ structure }) => (
  <section className="relative overflow-hidden border-b border-slate-200 bg-white px-6 py-24 md:px-10">
    <StatisticalSeal symbol="Phi" label="RATIO" value="1.0" top="50%" right="-30px" className="opacity-[0.12]" />

    <svg className="pointer-events-none absolute left-10 top-8 h-[220px] w-[420px] opacity-[0.08]" viewBox="0 0 420 220" fill="none" aria-hidden="true">
      <path d="M0 118 Q105 48 210 118 T420 118" stroke="#00447e" strokeWidth="2" />
      <path d="M0 144 Q105 74 210 144 T420 144" stroke="#c2410c" strokeWidth="1.3" opacity="0.58" />
    </svg>

    <div className="mx-auto max-w-[1200px]">
      <div className="mb-20 text-center">
        <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.6em] text-[#c2410c]">{structure.subtitle}</span>
        <h2 className="mt-4 text-4xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">{structure.title}</h2>
      </div>

      <div className="relative flex flex-col items-center gap-10">
        <div className="relative z-10 w-72 overflow-hidden rounded-[2.5rem] border-b-[6px] border-[#c2410c] bg-[#002a52] p-8 text-center text-white shadow-2xl">
          <p className="mb-2 text-base sm:text-base md:text-lg font-black uppercase tracking-[0.4em] opacity-50">{structure.top.level}</p>
          <p className="text-lg font-black uppercase tracking-tighter">{structure.top.title}</p>
        </div>

        <div className="relative h-10 w-[2px] bg-slate-200">
          <div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c2410c]" />
        </div>

        <div className="grid w-full max-w-4xl gap-12 md:grid-cols-2">
          <article className="rounded-[3.5rem] border-2 border-dashed border-[#c2410c] bg-white p-8 text-center shadow-xl">
            <p className="mb-2 text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-[#c2410c]">{structure.middle[0].tag}</p>
            <p className="text-base font-black uppercase italic tracking-widest text-[#002a52]">{structure.middle[0].title}</p>
            <p className="mt-4 text-base sm:text-base md:text-lg font-bold uppercase tracking-[0.2em] text-slate-400">{structure.middle[0].subtitle}</p>
          </article>

          <article className="rounded-[3.5rem] border-2 border-[#00447e] bg-white p-8 text-center shadow-xl">
            <p className="mb-2 text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-[#00447e]">{structure.middle[1].tag}</p>
            <p className="text-base font-black uppercase italic tracking-widest text-[#002a52]">{structure.middle[1].title}</p>
            <p className="mt-4 text-base sm:text-base md:text-lg font-bold uppercase tracking-[0.2em] text-slate-400">{structure.middle[1].subtitle}</p>
          </article>
        </div>

        <div className="h-10 w-[2px] bg-slate-100" />

        <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3">
          {structure.bottom.map((item) => (
            <article key={item.title} className="group rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-6 text-center shadow-md transition-[border-color,box-shadow] duration-300 hover:border-[#00447e]">
              <item.icon size={20} className="mx-auto mb-3 text-slate-300 transition-colors group-hover:text-[#00447e]" />
              <p className="text-[10px] font-black uppercase leading-tight tracking-widest text-[#002a52]">{item.title}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default AuthoritiesStructureSection
