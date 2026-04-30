import StudentsSectionHeader from '../../molecules/students/StudentsSectionHeader'
import StudentsInternshipOfferCard from '../../molecules/students/StudentsInternshipOfferCard'

function StudentsInternshipsOffersSection({
  offers,
  searchTerm,
  onSearchChange,
  searchIcon: SearchIcon,
  postulateIcon,
}) {
  return (
    <section className="mx-auto max-w-[1536px] px-6 py-24 md:px-12">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <StudentsSectionHeader
          tag="Oportunidades"
          title="Banco de plazas"
          sub="Ofertas actuales habilitadas bajo convenios institucionales para la carrera."
        />

        <div className="relative w-full md:w-[360px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
            {SearchIcon ? <SearchIcon size={18} /> : null}
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar empresa, rol o area..."
            className="w-full rounded-full border-2 border-slate-200 bg-white py-4 pl-12 pr-6 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-[#001d3d] shadow-sm transition-all focus:border-[#001d3d] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {offers.length ? (
          offers.map((offer) => (
            <StudentsInternshipOfferCard key={offer.id} offer={offer} postulateIcon={postulateIcon} />
          ))
        ) : (
          <div className="rounded-[2.5rem] border-2 border-dashed border-slate-200 bg-white py-14 text-center">
            <p className="text-lg font-black uppercase tracking-tighter text-[#001d3d]">No hay plazas disponibles</p>
            <p className="mt-2 text-base font-medium text-slate-500">Intenta con otra palabra de busqueda.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default StudentsInternshipsOffersSection
