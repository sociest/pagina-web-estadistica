import ResearchAreaPill from '../../atoms/investigacion/ResearchAreaPill'
import InvestigacionSectionHeader from '../../molecules/investigacion/InvestigacionSectionHeader'

const InvestigacionResearchAreasSection = ({ areas }) => (
  <section id="lineas" className="scroll-mt-32 px-4 md:px-8">
    <div className="mx-auto max-w-[1440px]">
      <InvestigacionSectionHeader tag={areas.tag} title={areas.title} subtitle={areas.subtitle} center />

      <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-4">
      {areas.items.map((area) => (
        <ResearchAreaPill key={area} area={area} />
      ))}
      </div>
    </div>
  </section>
)

export default InvestigacionResearchAreasSection
