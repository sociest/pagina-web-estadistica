import AboutCtaSection from '../components/organisms/institutional/AboutCtaSection'
import AboutHeroSection from '../components/organisms/institutional/AboutHeroSection'
import AboutHistorySection from '../components/organisms/institutional/AboutHistorySection'
import AboutKpiSection from '../components/organisms/institutional/AboutKpiSection'
import AboutMissionVisionSection from '../components/organisms/institutional/AboutMissionVisionSection'
import AboutObjectivesSection from '../components/organisms/institutional/AboutObjectivesSection'
import AboutTimelineSection from '../components/organisms/institutional/AboutTimelineSection'
import AboutValuesSection from '../components/organisms/institutional/AboutValuesSection'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import {
  aboutHero,
  accreditation,
  achievements,
  ietaSummary,
  milestones,
  missionVision,
  objectives,
  values,
} from '../services/aboutData'

function AboutPage() {
  return (
    <div className="institutional-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />
      <div className="relative z-10">
        <div className="render-optimized"><AboutHeroSection hero={aboutHero} /></div>
        <div className="render-optimized"><AboutKpiSection achievements={achievements} /></div>
        <div className="render-optimized"><AboutHistorySection ieta={ietaSummary} /></div>
        <div className="render-optimized"><AboutTimelineSection milestones={milestones} /></div>
        <div className="render-optimized"><AboutMissionVisionSection missionVision={missionVision} /></div>
        <div className="render-optimized"><AboutValuesSection values={values} /></div>
        <div className="render-optimized"><AboutObjectivesSection objectives={objectives} /></div>
        <div className="render-optimized"><AboutCtaSection accreditation={accreditation} /></div>
      </div>
    </div>
  )
}

export default AboutPage
