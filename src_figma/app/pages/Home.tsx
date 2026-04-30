import { HeroCarousel } from '../components/HeroCarousel';
import { QuickAccess } from '../components/QuickAccess';
import { StatsSection } from '../components/StatsSection';
import { GraduateProfile } from '../components/GraduateProfile';
import { AcademicOfferings } from '../components/AcademicOfferings';
import { IETASection } from '../components/IETASection';
import { SplitPanel } from '../components/SplitPanel';
import { PartnersCarousel } from '../components/PartnersCarousel';
import { Testimonials } from '../components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]"> {/* Fondo gris suave menos brillante */}
      <HeroCarousel />
      <QuickAccess />
      <StatsSection />
      <GraduateProfile />
      <IETASection />
      <SplitPanel />
      <PartnersCarousel />
      <Testimonials />
    </div>
  );
}