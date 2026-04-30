import { useMemo, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StudentsCallsAlertSection from '../components/organisms/students/StudentsCallsAlertSection'
import StudentsCallsGuideSection from '../components/organisms/students/StudentsCallsGuideSection'
import StudentsCallsHeroSection from '../components/organisms/students/StudentsCallsHeroSection'
import StudentsCallsListSection from '../components/organisms/students/StudentsCallsListSection'
import StudentsCallsRequirementsSection from '../components/organisms/students/StudentsCallsRequirementsSection'
import {
  studentsCalls,
  studentsCallsFilters,
  studentsCallsHero,
  studentsCallsRequirements,
  studentsCallsSteps,
  studentsCallsUi,
} from '../services/studentsCallsData'

function StudentsCallsPage() {
  const [activeFilter, setActiveFilter] = useState('Todas')

  const filteredCalls = useMemo(() => {
    if (activeFilter === 'Todas') return studentsCalls
    return studentsCalls.filter((call) => call.status === activeFilter)
  }, [activeFilter])

  const activeCount = studentsCalls.filter((call) => call.status === 'Abierta').length

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <StudentsCallsHeroSection
          hero={studentsCallsHero}
          activeCount={activeCount}
          filters={studentsCallsFilters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          filterIcon={studentsCallsUi.filterIcon}
        />
        <StudentsCallsListSection
          calls={filteredCalls}
          viewIcon={studentsCallsUi.cardViewIcon}
          downloadIcon={studentsCallsUi.cardDownloadIcon}
        />
        <StudentsCallsGuideSection steps={studentsCallsSteps} />
        <StudentsCallsRequirementsSection
          requirements={studentsCallsRequirements}
          requirementCheckIcon={studentsCallsUi.requirementCheckIcon}
        />
        <StudentsCallsAlertSection
          alertIcon={studentsCallsUi.alertIcon}
          supportIcon={studentsCallsUi.supportIcon}
        />
      </div>
    </div>
  )
}

export default StudentsCallsPage
