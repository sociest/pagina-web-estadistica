import { useMemo, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StudentsInternshipsHeroSection from '../components/organisms/students/StudentsInternshipsHeroSection'
import StudentsInternshipsImpactSection from '../components/organisms/students/StudentsInternshipsImpactSection'
import StudentsInternshipsModalitiesSection from '../components/organisms/students/StudentsInternshipsModalitiesSection'
import StudentsInternshipsOffersSection from '../components/organisms/students/StudentsInternshipsOffersSection'
import StudentsInternshipsProcessSection from '../components/organisms/students/StudentsInternshipsProcessSection'
import StudentsInternshipsResourcesSection from '../components/organisms/students/StudentsInternshipsResourcesSection'
import {
  studentsInternshipDocuments,
  studentsInternshipMapNodes,
  studentsInternshipModalities,
  studentsInternshipOffers,
  studentsInternshipProcess,
  studentsInternshipRequirements,
  studentsInternshipTestimonials,
  studentsInternshipsHero,
  studentsInternshipUi,
} from '../services/studentsInternshipsData'

function StudentsInternshipsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredOffers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) return studentsInternshipOffers

    return studentsInternshipOffers.filter((offer) => {
      return (
        offer.company.toLowerCase().includes(query) ||
        offer.role.toLowerCase().includes(query) ||
        offer.area.toLowerCase().includes(query)
      )
    })
  }, [searchTerm])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <StudentsInternshipsHeroSection hero={studentsInternshipsHero} />
        <StudentsInternshipsModalitiesSection modalities={studentsInternshipModalities} />
        <StudentsInternshipsProcessSection steps={studentsInternshipProcess} />
        <StudentsInternshipsOffersSection
          offers={filteredOffers}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          searchIcon={studentsInternshipUi.searchIcon}
          postulateIcon={studentsInternshipUi.postulateIcon}
        />
        <StudentsInternshipsResourcesSection
          requirements={studentsInternshipRequirements}
          documents={studentsInternshipDocuments}
          reqCheckIcon={studentsInternshipUi.reqCheckIcon}
          downloadIcon={studentsInternshipUi.downloadIcon}
        />
        <StudentsInternshipsImpactSection
          testimonials={studentsInternshipTestimonials}
          nodes={studentsInternshipMapNodes}
        />
      </div>
    </div>
  )
}

export default StudentsInternshipsPage
