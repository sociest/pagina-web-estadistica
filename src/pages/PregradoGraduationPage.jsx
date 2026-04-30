import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import GraduationExcellenceBannerSection from '../components/organisms/pregrado/GraduationExcellenceBannerSection'
import GraduationHeroSection from '../components/organisms/pregrado/GraduationHeroSection'
import GraduationModalitiesSection from '../components/organisms/pregrado/GraduationModalitiesSection'
import GraduationWorkshopSection from '../components/organisms/pregrado/GraduationWorkshopSection'
import {
  excellenceBanner,
  graduationHero,
  graduationModalities,
  graduationModalitiesMeta,
  graduationWorkshop,
  processSteps,
} from '../services/pregradoGraduationData'

function PregradoGraduationPage() {
  return (
    <div className="pregrado-page bg-gradient-to-br from-white via-[#f8fbff] to-[#eef6ff] text-[#001d3d]">
      <InstitutionalBackdrop variant="light" topOffset="12rem" />
      <main className="relative z-10">
        <GraduationHeroSection hero={graduationHero} />

        <div className="mx-auto flex max-w-[1500px] flex-col gap-28 px-4 py-20 sm:px-6 lg:px-8">
          <GraduationWorkshopSection workshop={graduationWorkshop} processSteps={processSteps} />
          <GraduationModalitiesSection meta={graduationModalitiesMeta} modalities={graduationModalities} />
          <GraduationExcellenceBannerSection banner={excellenceBanner} />
        </div>
      </main>
    </div>
  )
}

export default PregradoGraduationPage
