import FeaturedProjectCard from '../../molecules/investigacion/FeaturedProjectCard'

const InvestigacionFeaturedProjectsSection = ({ featured }) => {
  const SectionIcon = featured.icon

  return (
    <section className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[4rem] border-t-8 border-[#ea580c] bg-[#001d3d] p-10 text-white shadow-2xl md:p-16">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} aria-hidden="true" />

      <div className="relative z-10 mb-12 flex flex-col items-end justify-between gap-6 border-b border-white/10 pb-8 md:flex-row">
        <div>
          <h3 className="mb-2 text-3xl font-black uppercase tracking-tighter md:text-5xl">
            {featured.title[0]} <span className="text-[#ea580c]">{featured.title[1]}</span>
          </h3>
          <p className="text-sm font-medium italic text-blue-200">{featured.subtitle}</p>
        </div>
        <div className="mt-6 flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[#ea580c] shadow-lg md:mt-0">
          <SectionIcon size={32} />
        </div>
      </div>

      <div className="relative z-10 grid gap-8 lg:grid-cols-3">
        {featured.cards.map((card) => (
          <FeaturedProjectCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  )
}

export default InvestigacionFeaturedProjectsSection
