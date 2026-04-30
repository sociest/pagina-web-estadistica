import { HeroNewsSection, HomeTopNewsSection } from '../components/organisms/home/HeroNewsSection'
import { QuickAccess } from '../components/organisms/home/QuickAccess'
import { StatsSection } from '../components/organisms/shared/StatsSection'
import { SplitPanel } from '../components/organisms/shared/SplitPanel'
import { GraduateProfile } from '../components/organisms/institutional/GraduateProfile'
import { IETASection } from '../components/organisms/institutional/IETASection'
import { PartnersCarousel } from '../components/organisms/institutional/PartnersCarousel'
import { Testimonials } from '../components/organisms/institutional/Testimonials'
import {
  mockSlides,
  mockQuickLinks,
  mockStats,
  mockNews,
  mockEvents,
  mockGraduateProfile,
  mockGraduateRoles,
  mockIETAContent,
  mockPartners,
  mockTestimonials,
} from '../services/mockData'

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f1f5f9]">
      <HeroNewsSection slides={mockSlides} news={mockNews} />
      <div className="relative -mt-[50px] sm:-mt-14 md:-mt-16 lg:-mt-[68px] z-40">
        <QuickAccess links={mockQuickLinks} />
      </div>
      <div className="h-6 md:h-7 lg:h-8 bg-transparent" />
      <HomeTopNewsSection news={mockNews} />
      <StatsSection stats={mockStats} />
      <GraduateProfile profile={mockGraduateProfile} roles={mockGraduateRoles} />
      <IETASection content={mockIETAContent} />
      <div id="news-section-full">
        <SplitPanel news={mockNews} events={mockEvents} />
      </div>
      <PartnersCarousel partners={mockPartners} />
      <Testimonials items={mockTestimonials} />
    </div>
  )
}

export default LandingPage
