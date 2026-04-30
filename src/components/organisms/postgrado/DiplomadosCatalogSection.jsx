import PostgradoSectionHeader from '../../molecules/postgrado/PostgradoSectionHeader'

const badgeToneClass = {
  open: 'bg-green-100 text-green-800 border-green-200',
  closing: 'bg-orange-100 text-orange-800 border-orange-200',
  closed: 'bg-slate-100 text-slate-600 border-slate-200',
}

function DiplomadosCatalogSection({
  programs,
  filters,
  activeFilter,
  onChangeFilter,
  onSelectProgram,
  filterIcon: FilterIcon,
  durationIcon: DurationIcon,
  modalityIcon: ModalityIcon,
  emptyIcon: EmptyIcon,
}) {
  return (
    <section className="relative mx-auto max-w-[1536px] px-6 py-24 md:px-12">
      <div className="absolute inset-x-10 top-8 h-40 rounded-full bg-[radial-gradient(circle,_rgba(0,68,126,0.16),_transparent_70%)]" aria-hidden="true" />

      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <PostgradoSectionHeader
          tag="Oferta academica"
          title="Catalogo de programas"
          sub="Explora diplomados y especialidades de postgrado segun tu area de interes profesional."
        />

        <div className="flex flex-wrap items-center gap-2 self-start rounded-[2rem] border border-slate-200 bg-white p-2 shadow-sm md:self-end">
          <div className="flex items-center border-r border-slate-100 pl-4 pr-2 text-slate-400">
            {FilterIcon ? <FilterIcon size={16} /> : null}
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => onChangeFilter(filter)}
              className={`rounded-3xl px-5 py-2.5 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest transition-all ${
                activeFilter === filter
                  ? 'bg-[#001d3d] text-white shadow-md'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-[#001d3d]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => {
          const ProgramIcon = program.icon
          return (
            <article
              key={program.id}
              className="group relative flex flex-col overflow-hidden rounded-[3rem] border border-slate-200 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(0,29,61,0.15)]"
            >
              <div className="relative border-b border-slate-100 p-8 pb-6">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex size-16 items-center justify-center rounded-[1.5rem] bg-slate-50 text-[#ea580c] shadow-inner transition-colors duration-500 group-hover:bg-[#ea580c] group-hover:text-white">
                    <ProgramIcon size={30} />
                  </div>
                  <span

                    className={`rounded-full border px-4 py-1.5 text-base sm:text-base md:text-lg font-black uppercase tracking-widest shadow-sm ${badgeToneClass[program.badgeTone] ?? badgeToneClass.closed}`}
                  >
                    {program.badge}
                  </span>
                </div>

                <p className="mb-3 text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-[#001d3d] opacity-60">{program.area}</p>
                <h3 className="text-2xl font-black uppercase leading-tight tracking-tighter text-[#001d3d] transition-colors group-hover:text-[#ea580c]">
                  {program.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col justify-between bg-[#f8fafc]/60 p-8">
                <p className="mb-8 text-base font-medium italic leading-relaxed text-slate-500">{program.desc}</p>

                <div className="mb-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-2.5 text-[11px] font-bold text-slate-600 shadow-sm">
                    {DurationIcon ? <DurationIcon size={16} className="text-[#ea580c]" /> : null}
                    <span className="uppercase tracking-widest">Duracion:</span> {program.duration}
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-2.5 text-[11px] font-bold text-slate-600 shadow-sm">
                    {ModalityIcon ? <ModalityIcon size={16} className="text-[#001d3d]" /> : null}
                    <span className="uppercase tracking-widest">Modalidad:</span> {program.modality}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectProgram(program)}
                className="w-full bg-[#001d3d] py-6 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white transition-colors group-hover:bg-[#ea580c]"
              >
                Explorar programa
              </button>
            </article>
          )
        })}
      </div>

      {programs.length === 0 ? (
        <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-[4rem] border border-slate-200 bg-white py-24 text-center shadow-sm">
          <div className="absolute -right-10 -top-8 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(0,68,126,0.14),_transparent_70%)]" aria-hidden="true" />
          <div className="relative z-10 mx-auto mb-8 flex size-24 items-center justify-center rounded-[2rem] border border-blue-100 bg-blue-50 shadow-inner">
            {EmptyIcon ? <EmptyIcon className="text-[#00447e]" size={40} /> : null}
          </div>
          <h4 className="relative z-10 mb-4 text-3xl font-black uppercase tracking-tighter text-[#001d3d]">Pronto tendremos novedades</h4>
          <p className="relative z-10 mx-auto max-w-xl text-base font-medium italic leading-relaxed text-slate-500">
            Estamos estructurando nuevos programas de especializacion y actualizacion para esta area.
          </p>
        </div>
      ) : null}
    </section>
  )
}

export default DiplomadosCatalogSection
