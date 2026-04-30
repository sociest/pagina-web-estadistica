import { useMemo, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import DiplomadosCatalogSection from '../components/organisms/postgrado/DiplomadosCatalogSection'
import DiplomadosHeroSection from '../components/organisms/postgrado/DiplomadosHeroSection'
import DiplomadosProgramModal from '../components/organisms/postgrado/DiplomadosProgramModal'
import DiplomadosRequirementsSection from '../components/organisms/postgrado/DiplomadosRequirementsSection'
import {
  diplomadosFilters,
  diplomadosHero,
  diplomadosPrograms,
  diplomadosRequirements,
  diplomadosUi,
} from '../services/postgradoDiplomadosData'

function PostgradoDiplomadosPage() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [selectedProgram, setSelectedProgram] = useState(null)

  const filteredPrograms = useMemo(() => {
    return diplomadosPrograms.filter((program) => {
      return activeFilter === 'Todos' ? true : program.area === activeFilter
    })
  }, [activeFilter])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-800 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10 space-y-24">
        <DiplomadosHeroSection hero={diplomadosHero} sectionIcon={diplomadosUi.sectionIcon} />

        <DiplomadosCatalogSection
          programs={filteredPrograms}
          filters={diplomadosFilters}
          activeFilter={activeFilter}
          onChangeFilter={setActiveFilter}
          onSelectProgram={setSelectedProgram}
          sectionIcon={diplomadosUi.sectionIcon}
          filterIcon={diplomadosUi.filterIcon}
          durationIcon={diplomadosUi.durationIcon}
          modalityIcon={diplomadosUi.modalityIcon}
          emptyIcon={diplomadosUi.emptyIcon}
        />

        <DiplomadosRequirementsSection
          section={diplomadosRequirements}
          requirementsIcon={diplomadosUi.icon}
          opportunitiesIcon={diplomadosUi.opportunitiesIcon}
        />
      </div>

      <DiplomadosProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        durationIcon={diplomadosUi.durationIcon}
        modalityIcon={diplomadosUi.modalityIcon}
        moduleIcon={diplomadosUi.moduleIcon}
        investmentIcon={diplomadosUi.investmentIcon}
      />
    </div>
  )
}

export default PostgradoDiplomadosPage
