import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import AcercaIetaHeroSection from '../components/organisms/investigacion/AcercaIetaHeroSection'
import AcercaIetaHistorySection from '../components/organisms/investigacion/AcercaIetaHistorySection'
import AcercaIetaIdentitySection from '../components/organisms/investigacion/AcercaIetaIdentitySection'
import AcercaIetaObjectivesSection from '../components/organisms/investigacion/AcercaIetaObjectivesSection'
import AcercaIetaRegulationSection from '../components/organisms/investigacion/AcercaIetaRegulationSection'
import {
  ietaHero,
  ietaHistory,
  ietaIdentity,
  ietaObjectives,
  ietaQuickContact,
  ietaRegulation,
} from '../services/investigacionAcercaIetaData'

function InvestigacionAcercaIetaPage() {
  return (
    <div className="institutional-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10 space-y-10 pb-8 md:space-y-14">
        <div className="render-optimized"><AcercaIetaHeroSection hero={ietaHero} contacts={ietaQuickContact} /></div>
        <div className="render-optimized"><AcercaIetaHistorySection history={ietaHistory} /></div>
        <div className="render-optimized"><AcercaIetaIdentitySection identity={ietaIdentity} /></div>
        <div className="render-optimized"><AcercaIetaObjectivesSection objectives={ietaObjectives} /></div>
        <div className="render-optimized"><AcercaIetaRegulationSection regulation={ietaRegulation} /></div>
      </div>
    </div>
  )
}

export default InvestigacionAcercaIetaPage
