import React, { useState, useEffect } from 'react'

// Layout
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'

// Sections
import InvestigacionContactoHeroSection from '../components/organisms/investigacion/InvestigacionContactoHeroSection'
import InvestigacionContactoLocationSection from '../components/organisms/investigacion/InvestigacionContactoLocationSection'
import InvestigacionContactoInfrastructureSection from '../components/organisms/investigacion/InvestigacionContactoInfrastructureSection'
import InvestigacionContactoFormSection from '../components/organisms/investigacion/InvestigacionContactoFormSection'
import InvestigacionContactoHemerotecaSection from '../components/organisms/investigacion/InvestigacionContactoHemerotecaSection'

// Data
import {
  contactoHeroData,
  contactoUbicacionData,
  contactoInfraestructuraData,
  contactoFormTypes,
  contactoScientificLinks
} from '../services/investigacionContactoData'

const InvestigacionContactoPage = () => {
  return (
    <div className="institutional-page relative min-h-screen bg-[#f1f5f9] font-sans text-slate-900 selection:bg-[#001d3d] selection:text-white">
      {/* Usar el backdrop global con estilo de datos estadísticos para mantener la identidad */}
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <InvestigacionContactoHeroSection data={contactoHeroData} />

        <main className="max-w-[1200px] mx-auto px-6 py-24 space-y-32">
          <InvestigacionContactoLocationSection data={contactoUbicacionData} />
          
          <InvestigacionContactoInfrastructureSection data={contactoInfraestructuraData} />
          
          <InvestigacionContactoFormSection formTypes={contactoFormTypes} />
          
          <InvestigacionContactoHemerotecaSection links={contactoScientificLinks} />
        </main>
      </div>
    </div>
  )
}

export default InvestigacionContactoPage
