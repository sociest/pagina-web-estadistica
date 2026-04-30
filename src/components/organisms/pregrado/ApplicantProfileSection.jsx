import PregradoSectionHeader from '../../molecules/pregrado/PregradoSectionHeader'

function ApplicantProfileSection({ section }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_55%,#f5f9ff_100%)] px-6 py-24 md:px-12">
      <svg className="pointer-events-none absolute -left-10 top-6 h-[260px] w-[520px] opacity-[0.16]" viewBox="0 0 520 260" fill="none" aria-hidden="true">
        <path d="M0 120 Q130 42 260 120 T520 120" stroke="#00447e" strokeWidth="2.3" />
        <path d="M0 152 Q130 74 260 152 T520 152" stroke="#ea580c" strokeWidth="1.5" opacity="0.75" />
      </svg>
      <div className="pointer-events-none absolute right-8 top-12 hidden text-[110px] font-black italic text-[#00447e]/[0.06] md:block" aria-hidden="true">chi2</div>

      <div className="mx-auto max-w-[1440px]">
        <PregradoSectionHeader tag={section.tag} title={section.title} sub={section.sub} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {section.cards.map((card) => (
            <article key={card.title} className="rounded-[2.5rem] border border-slate-100 bg-[#f8fafc] p-8 transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl">
              <div className={`mb-6 flex size-12 items-center justify-center rounded-xl ${card.colorClass}`}>
                <card.icon size={24} />
              </div>
              <h4 className="mb-4 text-lg font-black uppercase tracking-tight text-[#002a52]">{card.title}</h4>
              <p className="text-base font-medium italic leading-relaxed text-slate-500">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ApplicantProfileSection
