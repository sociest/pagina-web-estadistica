import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import AccreditationCredentialsSection from '../components/organisms/institutional/AccreditationCredentialsSection'
import AccreditationHeroSection from '../components/organisms/institutional/AccreditationHeroSection'
import AccreditationImpactSection from '../components/organisms/institutional/AccreditationImpactSection'
import {
  accreditationCta,
  accreditationHero,
  credentials,
  impactCards,
  impactHighlights,
} from '../services/accreditationData'

function AccreditationPage() {
  return (
    <div className="institutional-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />
      <div className="relative z-10">
        <div className="render-optimized"><AccreditationHeroSection hero={accreditationHero} /></div>
        <div className="render-optimized"><AccreditationCredentialsSection credentials={credentials} /></div>
        <div className="render-optimized"><AccreditationImpactSection highlight={impactHighlights} impactCards={impactCards} cta={accreditationCta} /></div>
      </div>
    </div>
  )
}

export default AccreditationPage
