import PregradoSectionHeader from '../../molecules/pregrado/PregradoSectionHeader'
import ConvalidationMappingCard from '../../molecules/pregrado/ConvalidationMappingCard'

function ConvalidationMappingsSection({
  meta,
  activePlan,
  activeType,
  onActivePlanChange,
  onActiveTypeChange,
  filteredData2012,
  filteredTroncales2021,
  filteredOptativas2021,
}) {
  return (
    <section>
      <PregradoSectionHeader tag={meta.tag} title={meta.title} sub={meta.sub} />

      <div className="mb-16 flex justify-center">
        <div className="flex flex-wrap gap-2 rounded-[2rem] border border-[#002a52] bg-[#001d3d] p-1.5 shadow-xl">
          {meta.planTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onActivePlanChange(tab.id)}
              className={`flex items-center gap-2 rounded-[1.5rem] px-8 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest transition-all ${
                activePlan === tab.id
                  ? `${tab.accent === 'orange' ? 'bg-[#ea580c]' : 'bg-[#00447e]'} text-white shadow-lg`
                  : 'text-white/50 hover:text-white'
              }`}
              type="button"
            >
              <tab.icon size={16} className={activePlan === tab.id ? 'text-white' : 'text-slate-500'} /> {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activePlan === '2021' && (
        <div>
          <div className="mb-12 flex justify-center gap-8 border-b border-slate-200">
            {meta.typeTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onActiveTypeChange(tab.id)}
                className={`flex items-center gap-2 border-b-4 pb-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest transition-all ${
                  activeType === tab.id
                    ? `${tab.accent === 'orange' ? 'border-[#ea580c] text-[#ea580c]' : 'border-[#001d3d] text-[#001d3d]'}`
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
                type="button"
              >
                <tab.icon size={16} /> {tab.label}
              </button>
            ))}
          </div>

          {activeType === 'troncales' && (
            filteredTroncales2021.length === 0 ? (
              <div className="rounded-[3rem] border-2 border-dashed border-slate-300 bg-white p-16 text-center">
                <meta.searchIcon className="mx-auto mb-4 text-slate-300" size={48} />
                <h4 className="text-xl font-black uppercase tracking-widest text-slate-400">{meta.emptyLabel}</h4>
              </div>
            ) : (
              <div className="grid gap-6 lg:grid-cols-2">
                {filteredTroncales2021.map((item) => (
                  <ConvalidationMappingCard key={`${item.old.id}-${item.new.id}`} item={item} />
                ))}
              </div>
            )
          )}

          {activeType === 'optativas' && (
            <div>
              <div className="mb-12 flex flex-col items-center gap-6 rounded-[2.5rem] border-2 border-dashed border-orange-200 bg-orange-50 p-8 shadow-sm md:flex-row md:items-start">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white text-[#ea580c] shadow-md">
                  <meta.warningIcon size={28} />
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-black uppercase tracking-widest text-orange-800">{meta.warningTitle}</h4>
                  <p className="text-base font-medium italic leading-relaxed text-orange-700/90">{meta.warningText}</p>
                </div>
              </div>

              {filteredOptativas2021.length === 0 ? (
                <div className="rounded-[3rem] border-2 border-dashed border-slate-300 bg-white p-16 text-center">
                  <meta.searchIcon className="mx-auto mb-4 text-slate-300" size={48} />
                  <h4 className="text-xl font-black uppercase tracking-widest text-slate-400">{meta.emptyLabel}</h4>
                </div>
              ) : (
                <div className="space-y-12">
                  {filteredOptativas2021.map((area) => (
                    <article key={area.title} className="rounded-[3rem] border border-slate-200 bg-white p-8 shadow-md md:p-10">
                      <div className="mb-8 flex items-center gap-4 border-b border-slate-100 pb-6">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-slate-50 text-slate-400"><area.icon size={24} /></div>
                        <h3 className="text-xl font-black uppercase tracking-tighter text-[#001d3d]">{area.title}</h3>
                      </div>
                      <div className="grid gap-6 lg:grid-cols-2">
                        {area.items.map((item) => (
                          <ConvalidationMappingCard key={`${item.old.id}-${item.new.id}`} item={item} />
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {activePlan === '2012' && (
        filteredData2012.length === 0 ? (
          <div className="rounded-[3rem] border-2 border-dashed border-slate-300 bg-white p-16 text-center">
            <meta.searchIcon className="mx-auto mb-4 text-slate-300" size={48} />
            <h4 className="text-xl font-black uppercase tracking-widest text-slate-400">{meta.emptyLabel}</h4>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredData2012.map((semester) => (
              <article key={semester.sem}>
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#001d3d] text-lg font-black text-white shadow-md">{semester.sem}</div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-[#001d3d]">{semester.title}</h3>
                  <div className="ml-4 h-[1px] flex-1 bg-slate-200" />
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  {semester.items.map((item) => (
                    <ConvalidationMappingCard key={`${item.old.id}-${item.new.id}`} item={item} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        )
      )}
    </section>
  )
}

export default ConvalidationMappingsSection
