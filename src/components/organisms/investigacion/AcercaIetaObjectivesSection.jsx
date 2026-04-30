import IetaObjectiveCard from '../../molecules/investigacion/IetaObjectiveCard'
import InvestigacionSectionHeader from '../../molecules/investigacion/InvestigacionSectionHeader'

const AcercaIetaObjectivesSection = ({ objectives }) => (
  <section id="objetivos" className="scroll-mt-32 px-4 md:px-8">
    <div className="mx-auto max-w-[1440px] rounded-[3rem] border border-slate-200 bg-[#f8fbff] p-8 shadow-sm md:p-12">
      <InvestigacionSectionHeader
        tag={objectives.tag}
        title={objectives.title}
        subtitle={objectives.subtitle}
        center
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {objectives.cards.map((card) => (
          <IetaObjectiveCard key={card.title} objective={card} />
        ))}
      </div>
    </div>
  </section>
)

export default AcercaIetaObjectivesSection
