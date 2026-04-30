import StudentsCallsFilterTabs from '../../molecules/students/StudentsCallsFilterTabs'

function StudentsCallsHeroSection({
  hero,
  activeCount,
  filters,
  activeFilter,
  onFilterChange,
  filterIcon,
}) {
  const LeftShape = hero.leftShape
  const RightShape = hero.rightShape

  return (
    <section className="relative overflow-hidden border-b-[8px] border-[#ea580c] bg-[#001d3d] px-6 pb-20 pt-[130px] md:px-10 md:pb-24">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#ffffff 1.1px, transparent 1.1px)', backgroundSize: '28px 28px' }} />
      <svg className="absolute inset-0 h-full w-full opacity-[0.12]" viewBox="0 0 1600 620" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 430C320 430 640 250 960 210C1180 182 1390 220 1600 430" stroke="#ea580c" strokeWidth="2.4" />
        <path d="M0 462C320 462 640 282 960 242C1180 214 1390 252 1600 462" stroke="#93c5fd" strokeWidth="1.8" opacity="0.8" />
      </svg>

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
          <div className="size-2 rounded-full bg-[#ea580c] shadow-[0_0_12px_#ea580c]" />
          <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-white/80">
            Hay {activeCount} {activeCount === 1 ? 'convocatoria abierta' : 'convocatorias abiertas'}
          </span>
        </div>

        <p className="mb-3 text-base sm:text-base md:text-lg font-black uppercase tracking-[0.38em] text-blue-200">{hero.eyebrow}</p>
        <h1 className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-white md:text-5xl lg:text-6xl">
          {hero.title[0]} <br />
          <span className="font-serif lowercase tracking-normal text-[#ea580c] italic">{hero.title[1]}</span>
        </h1>
        <p className="mb-12 max-w-3xl text-base font-medium italic leading-relaxed text-blue-100/85 md:text-lg">
          {hero.description}
        </p>

        <StudentsCallsFilterTabs
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={onFilterChange}
          filterIcon={filterIcon}
        />
      </div>

      {LeftShape ? <LeftShape className="absolute -left-10 top-20 text-white/10" size={250} /> : null}
      {RightShape ? <RightShape className="absolute -right-10 bottom-0 text-white/10" size={210} /> : null}
    </section>
  )
}

export default StudentsCallsHeroSection
