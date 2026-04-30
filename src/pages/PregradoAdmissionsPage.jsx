import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import AdmissionsHeroSection from '../components/organisms/pregrado/AdmissionsHeroSection'
import AdmissionsTimelineSection from '../components/organisms/pregrado/AdmissionsTimelineSection'
import GeneralRequirementsSection from '../components/organisms/pregrado/GeneralRequirementsSection'
import RegularAdmissionsSection from '../components/organisms/pregrado/RegularAdmissionsSection'
import SpecialAdmissionsSection from '../components/organisms/pregrado/SpecialAdmissionsSection'
import {
  admissionsHero,
  admissionsTimeline,
  admissionsVisuals,
  generalRequirements,
  regularAdmissions,
  specialMeta,
  specialModalities,
} from '../services/pregradoAdmissionsData'

function PregradoAdmissionsPage() {
  return (
    <div className="pregrado-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10 space-y-32 pb-20">
        <div className="render-optimized"><AdmissionsHeroSection hero={admissionsHero} /></div>
        <div className="render-optimized"><RegularAdmissionsSection section={regularAdmissions} visuals={admissionsVisuals.decorativeIcons} /></div>
        <div className="render-optimized"><GeneralRequirementsSection section={generalRequirements} visuals={admissionsVisuals.decorativeIcons} /></div>
        <div className="render-optimized"><AdmissionsTimelineSection section={admissionsTimeline} visuals={admissionsVisuals.decorativeIcons} /></div>
        <div className="render-optimized"><SpecialAdmissionsSection modalities={specialModalities} meta={specialMeta} /></div>
      </div>
    </div>
  )
}

export default PregradoAdmissionsPage
