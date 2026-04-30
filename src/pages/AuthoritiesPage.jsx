import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import AuthoritiesDirectionSection from '../components/organisms/institutional/AuthoritiesDirectionSection'
import AuthoritiesHccSection from '../components/organisms/institutional/AuthoritiesHccSection'
import AuthoritiesHeroSection from '../components/organisms/institutional/AuthoritiesHeroSection'
import AuthoritiesStructureSection from '../components/organisms/institutional/AuthoritiesStructureSection'
import {
  authoritiesHero,
  directionData,
  hccMeta,
  hccStudents,
  hccTeachers,
  orgStructure,
} from '../services/authoritiesData'

function AuthoritiesPage() {
  return (
    <div className="institutional-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />
      <div className="relative z-10">
        <div className="render-optimized"><AuthoritiesHeroSection hero={authoritiesHero} /></div>
        <div className="render-optimized"><AuthoritiesDirectionSection directionData={directionData} /></div>
        <div className="render-optimized"><AuthoritiesHccSection meta={hccMeta} teachers={hccTeachers} students={hccStudents} /></div>
        <div className="render-optimized"><AuthoritiesStructureSection structure={orgStructure} /></div>
      </div>
    </div>
  )
}

export default AuthoritiesPage
