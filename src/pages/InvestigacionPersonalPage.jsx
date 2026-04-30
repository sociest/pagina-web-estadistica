import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import InvestigacionPersonalContactStrip from '../components/organisms/investigacion/InvestigacionPersonalContactStrip'
import InvestigacionPersonalDirectorSection from '../components/organisms/investigacion/InvestigacionPersonalDirectorSection'
import InvestigacionPersonalHeroSection from '../components/organisms/investigacion/InvestigacionPersonalHeroSection'
import InvestigacionPersonalResearchersSection from '../components/organisms/investigacion/InvestigacionPersonalResearchersSection'
import InvestigacionPersonalSupportSection from '../components/organisms/investigacion/InvestigacionPersonalSupportSection'
import {
  investigacionPersonalAdministrative,
  investigacionPersonalAuxiliaries,
  investigacionPersonalContactStrip,
  investigacionPersonalDirector,
  investigacionPersonalDirectorMeta,
  investigacionPersonalHero,
  investigacionPersonalResearchers,
  investigacionPersonalResearchersMeta,
  investigacionPersonalStats,
  investigacionPersonalSupportMeta,
} from '../services/investigacionPersonalData'

function InvestigacionPersonalPage() {
  return (
    <div className="institutional-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10 space-y-10 pb-8 md:space-y-14">
        <div className="render-optimized"><InvestigacionPersonalHeroSection hero={investigacionPersonalHero} stats={investigacionPersonalStats} /></div>
        <div className="render-optimized"><InvestigacionPersonalContactStrip items={investigacionPersonalContactStrip} /></div>
        <div className="render-optimized"><InvestigacionPersonalDirectorSection director={investigacionPersonalDirector} meta={investigacionPersonalDirectorMeta} /></div>
        <div className="render-optimized"><InvestigacionPersonalResearchersSection researchers={investigacionPersonalResearchers} meta={investigacionPersonalResearchersMeta} /></div>
        <div className="render-optimized px-4 md:px-8"><InvestigacionPersonalSupportSection administrative={investigacionPersonalAdministrative} auxiliaries={investigacionPersonalAuxiliaries} meta={investigacionPersonalSupportMeta} /></div>
      </div>
    </div>
  )
}

export default InvestigacionPersonalPage
