import { useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import InvestigacionVarianzaCatalogSection from '../components/organisms/investigacion/InvestigacionVarianzaCatalogSection'
import InvestigacionVarianzaCommitteeSection from '../components/organisms/investigacion/InvestigacionVarianzaCommitteeSection'
import InvestigacionVarianzaDetailView from '../components/organisms/investigacion/InvestigacionVarianzaDetailView'
import InvestigacionVarianzaHeroSection from '../components/organisms/investigacion/InvestigacionVarianzaHeroSection'
import InvestigacionVarianzaIdentitySection from '../components/organisms/investigacion/InvestigacionVarianzaIdentitySection'
import InvestigacionVarianzaTabsSection from '../components/organisms/investigacion/InvestigacionVarianzaTabsSection'
import {
  revistaVarianzaCommitteeMeta,
  revistaVarianzaEditions,
  revistaVarianzaEditor,
  revistaVarianzaHero,
  revistaVarianzaIdentity,
  revistaVarianzaInternationalCommittee,
  revistaVarianzaMeta,
  revistaVarianzaNationalCommittee,
  revistaVarianzaTabs,
  revistaVarianzaUiIcons,
} from '../services/investigacionRevistaVarianzaData'

function InvestigacionRevistaVarianzaPage() {
  const [activeTab, setActiveTab] = useState('ediciones')
  const [selectedEdition, setSelectedEdition] = useState(null)

  if (selectedEdition) {
    return (
      <div className="institutional-page min-h-screen bg-[#f1f5f9] text-slate-900 selection:bg-[#001d3d] selection:text-white">
        <InvestigacionVarianzaDetailView
          edition={selectedEdition}
          meta={revistaVarianzaMeta}
          icons={revistaVarianzaUiIcons}
          onBack={() => setSelectedEdition(null)}
        />
      </div>
    )
  }

  return (
    <div className="institutional-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#001d3d] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <div className="render-optimized"><InvestigacionVarianzaHeroSection hero={revistaVarianzaHero} /></div>
        <div className="render-optimized"><InvestigacionVarianzaTabsSection tabs={revistaVarianzaTabs} activeTab={activeTab} onChange={setActiveTab} /></div>

        <main className="mx-auto max-w-[1200px] px-6 py-16">
          {activeTab === 'ediciones' ? (
            <div className="render-optimized">
              <InvestigacionVarianzaCatalogSection
                editions={revistaVarianzaEditions}
                meta={revistaVarianzaMeta}
                icons={revistaVarianzaUiIcons}
                onSelectEdition={setSelectedEdition}
              />
            </div>
          ) : null}

          {activeTab === 'info' ? (
            <div className="render-optimized">
              <InvestigacionVarianzaIdentitySection identity={revistaVarianzaIdentity} />
            </div>
          ) : null}

          {activeTab === 'comite' ? (
            <div className="render-optimized">
              <InvestigacionVarianzaCommitteeSection
                editor={revistaVarianzaEditor}
                internationalMembers={revistaVarianzaInternationalCommittee}
                nationalMembers={revistaVarianzaNationalCommittee}
                meta={revistaVarianzaCommitteeMeta}
              />
            </div>
          ) : null}
        </main>
      </div>
    </div>
  )
}

export default InvestigacionRevistaVarianzaPage
