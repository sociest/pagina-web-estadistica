import { useMemo, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StudentsHeroSection from '../components/organisms/students/StudentsHeroSection'
import StudentsProceduresSection from '../components/organisms/students/StudentsProceduresSection'
import StudentsSystemsSection from '../components/organisms/students/StudentsSystemsSection'
import { studentsHero, studentsProcedures, studentsSystems, studentsUi } from '../services/studentsProceduresData'

function StudentsProceduresPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProcedures = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    if (!query) return studentsProcedures

    return studentsProcedures.filter((procedure) => {
      return procedure.title.toLowerCase().includes(query) || procedure.tag.toLowerCase().includes(query)
    })
  }, [searchTerm])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10 pb-24">
        <StudentsHeroSection hero={studentsHero} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <StudentsSystemsSection systems={studentsSystems} externalLinkIcon={studentsUi.externalLinkIcon} />
        <StudentsProceduresSection
          procedures={filteredProcedures}
          modeFlowIcon={studentsUi.modeFlowIcon}
          modeRequirementsIcon={studentsUi.modeRequirementsIcon}
        />
      </div>
    </div>
  )
}

export default StudentsProceduresPage
