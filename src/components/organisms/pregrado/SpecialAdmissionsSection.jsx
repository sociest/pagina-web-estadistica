import { useMemo, useState } from 'react'

function SpecialAdmissionsSection({ modalities, meta }) {
  const [activeTab, setActiveTab] = useState(modalities[0]?.id ?? '')
  const activeModality = useMemo(() => modalities.find((item) => item.id === activeTab) ?? modalities[0], [modalities, activeTab])

  return (
    <section className="mx-auto mb-20 max-w-[1536px] px-4 md:px-12">
      <div className="overflow-hidden rounded-[4rem] border border-slate-200 bg-white shadow-2xl">
        <div className="grid min-h-[700px] lg:grid-cols-[320px_1fr]">
          <aside className="flex flex-col justify-between border-r border-slate-200 bg-slate-50 p-8">
            <div>
              <h3 className="mb-8 border-l-4 border-[#ea580c] pl-4 text-xl font-black uppercase tracking-tighter text-[#001d3d]">
                {meta.title[0]} <br /> {meta.title[1]}
              </h3>
              <div className="space-y-3">
                {modalities.map((modality) => (
                  <button
                    key={modality.id}
                    onClick={() => setActiveTab(modality.id)}
                    className={`w-full rounded-xl border-2 p-4 text-left text-[10px] font-black uppercase transition-all ${
                      activeTab === modality.id
                        ? 'scale-105 border-[#001d3d] bg-[#001d3d] text-white shadow-lg'
                        : 'border-slate-100 bg-white text-slate-500 hover:border-slate-300'
                    }`}
                    type="button"
                  >
                    <div className="flex items-center gap-3">
                      <modality.icon size={16} className={activeTab === modality.id ? 'text-[#ea580c]' : 'text-slate-400'} />
                      <span className="leading-tight">{modality.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6 text-center">
              <p className="mb-2 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400">Entidad gestora</p>
              <p className="text-[10px] font-bold uppercase text-[#001d3d]">{meta.entity}</p>
            </div>
          </aside>

          <div className="relative bg-white p-10 lg:p-16">
            <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-8">
              <div className="flex items-center gap-6">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-[#001d3d] text-[#ea580c] shadow-xl">
                  <activeModality.icon size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-black uppercase leading-none tracking-tighter text-[#001d3d]">{activeModality.title}</h2>
                  <p className="mt-2 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-orange-700">Modalidad especial</p>
                </div>
              </div>

              <div className="hidden rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 md:flex md:gap-6">
                <div className="text-center">
                  <p className="mb-1 flex items-center gap-1 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400"><meta.folderIcon size={10} /> Folder exigido</p>
                  <p className="text-base font-black uppercase text-[#001d3d]">{activeModality.folder}</p>
                </div>
              </div>
            </div>

            <p className="mb-10 max-w-3xl text-base font-medium italic leading-relaxed text-slate-500">{activeModality.desc}</p>

            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h4 className="mb-6 flex items-center gap-2 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-[#001d3d]">
                  <meta.requisitesIcon size={16} className="text-[#ea580c]" /> Requisitos exigidos
                </h4>
                <ul className="space-y-4">
                  {activeModality.reqs.map((req) => (
                    <li key={req} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                      <div className="mt-0.5 size-2.5 shrink-0 rounded-full bg-[#ea580c]" />
                      <span className="text-[11px] font-bold uppercase leading-relaxed tracking-tight text-slate-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-6 flex items-center gap-2 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-[#001d3d]">
                  <meta.procedureIcon size={16} className="text-[#ea580c]" /> Procedimiento
                </h4>
                <div className="relative overflow-hidden rounded-3xl bg-[#001d3d] p-8 text-white shadow-xl">
                  <div className="absolute right-0 top-0 p-6 opacity-10"><meta.procedureIcon size={100} /></div>
                  <p className="mb-2 inline-block border-b border-white/20 pb-2 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-[#ea580c]">Horario de recepcion</p>
                  <p className="mb-8 text-xl font-black">{activeModality.horario}</p>

                  <ul className="relative z-10 space-y-5">
                    {activeModality.proc.map((step, index) => (
                      <li key={step} className="flex items-start gap-4">
                        <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[10px] font-black">{index + 1}</div>
                        <p className="text-[11px] font-medium leading-relaxed text-blue-100">{step}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {activeModality.hasTable && (
              <div className="mt-10">
                <button className="flex items-center gap-2 rounded-lg border-2 border-slate-200 bg-white px-8 py-3 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-[#001d3d] shadow-sm transition-colors hover:border-[#001d3d]" type="button">
                  Descargar tabla de plazas
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialAdmissionsSection
