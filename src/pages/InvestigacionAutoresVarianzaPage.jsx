import { useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import AutoresDossierModal from '../components/molecules/investigacion/AutoresDossierModal'
import InvestigacionAutoresDirectorySection from '../components/organisms/investigacion/InvestigacionAutoresDirectorySection'
import InvestigacionAutoresGuideSection from '../components/organisms/investigacion/InvestigacionAutoresGuideSection'
import InvestigacionAutoresHeroSection from '../components/organisms/investigacion/InvestigacionAutoresHeroSection'
import {
  autoresAlphabet,
  autoresVarianzaAuthors,
  autoresVarianzaCta,
  autoresVarianzaDirectoryHeader,
  autoresVarianzaGuideCards,
  autoresVarianzaGuideHeader,
  autoresVarianzaHero,
  autoresVarianzaManuscriptTypes,
  autoresVarianzaReviewProcess,
} from '../services/investigacionAutoresVarianzaData'

function InvestigacionAutoresVarianzaPage() {
  const [selectedAuthor, setSelectedAuthor] = useState(null)

  return (
    <div className="institutional-page relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 selection:bg-[#001d3d] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <div className="render-optimized"><InvestigacionAutoresHeroSection hero={autoresVarianzaHero} /></div>
        <div className="render-optimized">
          <InvestigacionAutoresGuideSection
            header={autoresVarianzaGuideHeader}
            cards={autoresVarianzaGuideCards}
            manuscriptTypes={autoresVarianzaManuscriptTypes}
            process={autoresVarianzaReviewProcess}
            cta={autoresVarianzaCta}
          />
        </div>

        <main className="mx-auto max-w-[1200px] px-6 pb-24">
          <div className="render-optimized">
            <InvestigacionAutoresDirectorySection
              header={autoresVarianzaDirectoryHeader}
              authors={autoresVarianzaAuthors}
              alphabet={autoresAlphabet}
              onSelectAuthor={setSelectedAuthor}
            />
          </div>
        </main>
      </div>

      <AutoresDossierModal author={selectedAuthor} onClose={() => setSelectedAuthor(null)} />
    </div>
  )
}

export default InvestigacionAutoresVarianzaPage
