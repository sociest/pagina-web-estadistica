import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Settings } from 'lucide-react'

// Layout
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'

// Modals
import ServiciosQuoteModal from '../components/molecules/investigacion/ServiciosQuoteModal'

// Sections
import InvestigacionServiciosHeroSection from '../components/organisms/investigacion/InvestigacionServiciosHeroSection'
import InvestigacionServiciosConsultingSection from '../components/organisms/investigacion/InvestigacionServiciosConsultingSection'
import InvestigacionServiciosCoursesSection from '../components/organisms/investigacion/InvestigacionServiciosCoursesSection'
import InvestigacionServiciosCtaSection from '../components/organisms/investigacion/InvestigacionServiciosCtaSection'

// Data
import {
  serviciosIetaHero,
  serviciosConsultoria,
  serviciosRigorCientifico,
  serviciosCursos,
  serviciosSoftwareStack,
  serviciosAreasExperticia,
  serviciosCta
} from '../services/investigacionServiciosData'

const InvestigacionServiciosPage = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="institutional-page relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 selection:bg-[#001d3d] selection:text-white">
      {/* Utilizamos el backdrop global para darle la identidad estadística al fondo general */}
      <InstitutionalBackdrop />

      {/* Floating Request Button (Optional header extension for desktop scrolling) */}
      <div className={`fixed top-[70px] left-0 right-0 z-[40] transition-all duration-500 pointer-events-none ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
        <div className="max-w-[1200px] mx-auto flex justify-end px-6 py-4 pointer-events-auto">
          <button 
            onClick={() => setShowQuoteModal(true)}
            className="hidden md:flex bg-[#ea580c] text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-orange-600/30 hover:bg-[#c24100] transition-all active:scale-95"
          >
            Solicitar Presupuesto
          </button>
        </div>
      </div>

      <div className="relative z-10">
        <InvestigacionServiciosHeroSection hero={serviciosIetaHero} />
        
        <InvestigacionServiciosConsultingSection 
          servicios={serviciosConsultoria} 
          rigor={serviciosRigorCientifico} 
        />
        
        <InvestigacionServiciosCoursesSection 
          cursos={serviciosCursos}
          softwareStack={serviciosSoftwareStack}
          areasExperticia={serviciosAreasExperticia}
        />
        
        <InvestigacionServiciosCtaSection 
          cta={serviciosCta} 
          onOpenModal={() => setShowQuoteModal(true)} 
        />
      </div>

      <ServiciosQuoteModal 
        isOpen={showQuoteModal} 
        onClose={() => setShowQuoteModal(false)} 
      />
    </div>
  )
}

export default InvestigacionServiciosPage
