import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StudentsCenterHeroSection from '../components/organisms/students/StudentsCenterHeroSection'
import StudentsCenterLeadershipSection from '../components/organisms/students/StudentsCenterLeadershipSection'
import StudentsCenterServicesSection from '../components/organisms/students/StudentsCenterServicesSection'
import StudentsCenterStructureSection from '../components/organisms/students/StudentsCenterStructureSection'
import StudentsCenterSectionHeader from '../components/molecules/students/StudentsCenterSectionHeader'
import {
  delegadosAcademico,
  delegadosHcf,
  directivaCee,
  studentsCenterChannels,
  studentsCenterHero,
  studentsCenterServices,
  studentsCenterStats,
  studentsCenterStructure,
} from '../services/studentsCenterData'

function StudentsCenterPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <StudentsCenterHeroSection
          hero={studentsCenterHero}
          stats={studentsCenterStats}
          channels={studentsCenterChannels}
        />
        <StudentsCenterServicesSection services={studentsCenterServices} sectionHeaderComponent={StudentsCenterSectionHeader} />
        <StudentsCenterStructureSection structure={studentsCenterStructure} sectionHeaderComponent={StudentsCenterSectionHeader} />
        <StudentsCenterLeadershipSection
          directiva={directivaCee}
          delegadosHcf={delegadosHcf}
          delegadosAcademico={delegadosAcademico}
          sectionHeaderComponent={StudentsCenterSectionHeader}
        />
      </div>
    </div>
  )
}

export default StudentsCenterPage
