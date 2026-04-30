import InvestigacionSectionHeader from '../../molecules/investigacion/InvestigacionSectionHeader'
import ResearcherCard from '../../molecules/investigacion/ResearcherCard'

const InvestigacionPersonalResearchersSection = ({ researchers, meta }) => (
  <section id="investigadores" className="px-4 md:px-8">
    <div className="mx-auto max-w-[1440px]">
      <InvestigacionSectionHeader tag={meta.sectionTag} title={meta.sectionTitle} subtitle={meta.sectionSubtitle} />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {researchers.map((researcher) => (
        <ResearcherCard key={researcher.email} researcher={researcher} pointIcon={meta.pointIcon} />
      ))}
      </div>
    </div>
  </section>
)

export default InvestigacionPersonalResearchersSection
