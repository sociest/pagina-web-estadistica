import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import InvestigacionFeaturedProjectsSection from '../components/organisms/investigacion/InvestigacionFeaturedProjectsSection'
import InvestigacionProjectMemoriesSection from '../components/organisms/investigacion/InvestigacionProjectMemoriesSection'
import InvestigacionProyectosHeroSection from '../components/organisms/investigacion/InvestigacionProyectosHeroSection'
import InvestigacionResearchAreasSection from '../components/organisms/investigacion/InvestigacionResearchAreasSection'
import {
  investigacionFeaturedProjects,
  investigacionMemoriesMeta,
  investigacionProjectListUi,
  investigacionProjectMemories,
  investigacionProyectosContact,
  investigacionProyectosHero,
  investigacionResearchAreas,
} from '../services/investigacionProyectosData'

function InvestigacionProyectosPage() {
  return (
    <div className="institutional-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10 space-y-10 pb-8 md:space-y-14">
        <div className="render-optimized"><InvestigacionProyectosHeroSection hero={investigacionProyectosHero} contact={investigacionProyectosContact} /></div>
        <div className="render-optimized"><InvestigacionResearchAreasSection areas={investigacionResearchAreas} /></div>
        <div className="render-optimized px-4 md:px-8"><InvestigacionFeaturedProjectsSection featured={investigacionFeaturedProjects} /></div>
        <div className="render-optimized"><InvestigacionProjectMemoriesSection memories={investigacionProjectMemories} meta={investigacionMemoriesMeta} ui={investigacionProjectListUi} /></div>
      </div>
    </div>
  )
}

export default InvestigacionProyectosPage
