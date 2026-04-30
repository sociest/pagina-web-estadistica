import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import ApplicantProfileSection from '../components/organisms/pregrado/ApplicantProfileSection'
import CareerOutcomesSection from '../components/organisms/pregrado/CareerOutcomesSection'
import GraduateCompetenciesSection from '../components/organisms/pregrado/GraduateCompetenciesSection'
import OccupationalFieldSection from '../components/organisms/pregrado/OccupationalFieldSection'
import PregradoHeroSection from '../components/organisms/pregrado/PregradoHeroSection'
import {
  applicantProfile,
  careerOutcomes,
  graduateCompetencies,
  occupationalField,
  pregradoHero,
} from '../services/pregradoProfileData'

function PregradoProfessionalProfilePage() {
  return (
    <div className="pregrado-page relative min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <div className="render-optimized"><PregradoHeroSection hero={pregradoHero} /></div>
        <div className="render-optimized"><ApplicantProfileSection section={applicantProfile} /></div>
        <div className="render-optimized"><GraduateCompetenciesSection section={graduateCompetencies} /></div>
        <div className="render-optimized"><CareerOutcomesSection section={careerOutcomes} /></div>
        <div className="render-optimized"><OccupationalFieldSection section={occupationalField} /></div>
      </div>
    </div>
  )
}

export default PregradoProfessionalProfilePage
