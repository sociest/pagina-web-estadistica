import { useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import PostgradoAdmissionSection from '../components/organisms/postgrado/PostgradoAdmissionSection'
import PostgradoCTASection from '../components/organisms/postgrado/PostgradoCTASection'
import PostgradoCurriculumSection from '../components/organisms/postgrado/PostgradoCurriculumSection'
import PostgradoElectiveSection from '../components/organisms/postgrado/PostgradoElectiveSection'
import PostgradoFieldSection from '../components/organisms/postgrado/PostgradoFieldSection'
import PostgradoHeroSection from '../components/organisms/postgrado/PostgradoHeroSection'
import PostgradoProfileSection from '../components/organisms/postgrado/PostgradoProfileSection'
import {
  admissionRequirements,
  curriculumMeta,
  curriculumModules,
  electiveCatalog,
  occupationalFields,
  postgradoFooter,
  postgradoHero,
  postgradoProfile,
} from '../services/postgradoTerminalData'

function PostgradoTerminalPage() {
  const [activeMod, setActiveMod] = useState('mod1')

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-800 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />
      <div className="relative z-10 space-y-24 pb-24">
        <PostgradoHeroSection hero={postgradoHero} />
        <PostgradoProfileSection section={postgradoProfile} />
        <PostgradoCurriculumSection meta={curriculumMeta} modules={curriculumModules} activeMod={activeMod} onSelectMod={setActiveMod} />
        <PostgradoAdmissionSection section={admissionRequirements} />
        <PostgradoFieldSection section={occupationalFields} />
        <PostgradoElectiveSection section={electiveCatalog} />
        <PostgradoCTASection footer={postgradoFooter} />
      </div>
    </div>
  )
}

export default PostgradoTerminalPage
