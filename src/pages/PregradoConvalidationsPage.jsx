import { useMemo, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import ConvalidationHeroSection from '../components/organisms/pregrado/ConvalidationHeroSection'
import ConvalidationMappingsSection from '../components/organisms/pregrado/ConvalidationMappingsSection'
import ConvalidationProcedureSection from '../components/organisms/pregrado/ConvalidationProcedureSection'
import ConvalidationSearchSection from '../components/organisms/pregrado/ConvalidationSearchSection'
import {
  convalidationData2007to2012,
  convalidationHero,
  convalidationIntro,
  convalidationMappingMeta,
  convalidationProcedure,
  convalidation2012to2021Optativas,
  convalidation2012to2021Troncales,
  convalidationVisuals,
} from '../services/pregradoConvalidationData'

function PregradoConvalidationsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activePlan, setActivePlan] = useState('2021')
  const [activeType, setActiveType] = useState('troncales')

  const normalizedSearch = searchTerm.trim().toLowerCase()

  const filteredData2012 = useMemo(
    () => convalidationData2007to2012
      .map((semester) => {
        const items = semester.items.filter((item) => {
          const keys = [item.old.id, item.old.n, item.new.id, item.new.n].join(' ').toLowerCase()
          return keys.includes(normalizedSearch)
        })
        return { ...semester, items }
      })
      .filter((semester) => semester.items.length > 0),
    [normalizedSearch],
  )

  const filteredTroncales2021 = useMemo(
    () => convalidation2012to2021Troncales.filter((item) => {
      const keys = [item.old.id, item.old.n, item.new.id, item.new.n].join(' ').toLowerCase()
      return keys.includes(normalizedSearch)
    }),
    [normalizedSearch],
  )

  const filteredOptativas2021 = useMemo(
    () => convalidation2012to2021Optativas
      .map((area) => {
        const items = area.items.filter((item) => {
          const keys = [item.old.id, item.old.n, item.new.id, item.new.n].join(' ').toLowerCase()
          return keys.includes(normalizedSearch)
        })
        return { ...area, items }
      })
      .filter((area) => area.items.length > 0),
    [normalizedSearch],
  )

  return (
    <div className="pregrado-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10 space-y-24 pb-24">
        <div className="render-optimized"><ConvalidationHeroSection hero={convalidationHero} visuals={convalidationVisuals} /></div>
        <div className="mx-auto w-full max-w-[1536px] px-4 md:px-12">
          <div className="render-optimized"><ConvalidationSearchSection intro={convalidationIntro} activePlan={activePlan} searchTerm={searchTerm} onSearchTermChange={setSearchTerm} visuals={convalidationVisuals} /></div>
        </div>
        <div className="mx-auto w-full max-w-[1536px] px-4 md:px-12">
          <div className="render-optimized">
            <ConvalidationMappingsSection
              meta={convalidationMappingMeta}
              activePlan={activePlan}
              activeType={activeType}
              onActivePlanChange={setActivePlan}
              onActiveTypeChange={setActiveType}
              filteredData2012={filteredData2012}
              filteredTroncales2021={filteredTroncales2021}
              filteredOptativas2021={filteredOptativas2021}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1536px] px-4 md:px-12">
          <div className="render-optimized"><ConvalidationProcedureSection section={convalidationProcedure} visuals={convalidationVisuals} /></div>
        </div>
      </div>
    </div>
  )
}

export default PregradoConvalidationsPage
