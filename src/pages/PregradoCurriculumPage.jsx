import { useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import CurriculumGridSection from '../components/organisms/pregrado/CurriculumGridSection'
import CurriculumHeroSection from '../components/organisms/pregrado/CurriculumHeroSection'
import ElectivesSection from '../components/organisms/pregrado/ElectivesSection'
import StudyPlanSection from '../components/organisms/pregrado/StudyPlanSection'
import {
  areaLegend,
  curriculumData,
  curriculumHero,
  electivesAreas,
  electivesMeta,
  flatSubjects,
  gridMeta,
} from '../services/pregradoCurriculumData'

function PregradoCurriculumPage() {
  const [activeSem, setActiveSem] = useState(1)

  return (
    <div className="pregrado-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10 space-y-24 pb-24">
        <div className="render-optimized"><CurriculumHeroSection hero={curriculumHero} /></div>
        <div className="render-optimized"><StudyPlanSection curriculumData={curriculumData} activeSem={activeSem} onSelectSem={setActiveSem} /></div>
        <div className="render-optimized"><CurriculumGridSection curriculumData={curriculumData} flatSubjects={flatSubjects} areaLegend={areaLegend} meta={gridMeta} /></div>
        <div className="render-optimized"><ElectivesSection areas={electivesAreas} meta={electivesMeta} /></div>
      </div>
    </div>
  )
}

export default PregradoCurriculumPage
