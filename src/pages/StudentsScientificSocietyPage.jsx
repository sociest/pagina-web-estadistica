import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StudentsScientificBenefitsSection from '../components/organisms/students/StudentsScientificBenefitsSection'
import StudentsScientificHeroSection from '../components/organisms/students/StudentsScientificHeroSection'
import StudentsScientificImpactSection from '../components/organisms/students/StudentsScientificImpactSection'
import StudentsScientificResearchSection from '../components/organisms/students/StudentsScientificResearchSection'
import StudentsScientificRepositorySection from '../components/organisms/students/StudentsScientificRepositorySection'
import {
  admissionSteps,
  benefits,
  journals,
  papers,
  researchLines,
  societyMapNodes,
  societyTestimonials,
  societyUi,
  studentsScientificHero,
  studyNodes,
} from '../services/studentsScientificSocietyData'

function StudentsScientificSocietyPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <StudentsScientificHeroSection hero={studentsScientificHero} />
        <StudentsScientificResearchSection researchLines={researchLines} studyNodes={studyNodes} />
        <StudentsScientificBenefitsSection benefits={benefits} admissionSteps={admissionSteps} />
        <StudentsScientificRepositorySection
          papers={papers}
          journals={journals}
          sectionIcon={societyUi.sectionIcon}
        />
        <StudentsScientificImpactSection testimonials={societyTestimonials} nodes={societyMapNodes} />
      </div>
    </div>
  )
}

export default StudentsScientificSocietyPage
