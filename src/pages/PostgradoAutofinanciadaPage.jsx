import { useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import AutofinancedAdmissionSection from '../components/organisms/postgrado/AutofinancedAdmissionSection'
import AutofinancedCTASection from '../components/organisms/postgrado/AutofinancedCTASection'
import AutofinancedCurriculumSection from '../components/organisms/postgrado/AutofinancedCurriculumSection'
import AutofinancedFieldSection from '../components/organisms/postgrado/AutofinancedFieldSection'
import AutofinancedHeroSection from '../components/organisms/postgrado/AutofinancedHeroSection'
import AutofinancedProfileSection from '../components/organisms/postgrado/AutofinancedProfileSection'
import {
  autofinancedAdmissionRequirements,
  autofinancedCTA,
  autofinancedCurriculumMeta,
  autofinancedHero,
  autofinancedModules,
  autofinancedOpportunities,
  autofinancedProfile,
} from '../services/postgradoAutofinanciadaData'

function PostgradoAutofinanciadaPage() {
  const [activeMod, setActiveMod] = useState('mod1')

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-800 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />
      <div className="relative z-10 space-y-24 pb-24">
        <AutofinancedHeroSection hero={autofinancedHero} />
        <AutofinancedProfileSection section={autofinancedProfile} />
        <AutofinancedCurriculumSection meta={autofinancedCurriculumMeta} modules={autofinancedModules} activeMod={activeMod} onSelectMod={setActiveMod} />
        <AutofinancedAdmissionSection section={autofinancedAdmissionRequirements} />
        <AutofinancedFieldSection section={autofinancedOpportunities} />
        <AutofinancedCTASection cta={autofinancedCTA} />
      </div>
    </div>
  )
}

export default PostgradoAutofinanciadaPage
