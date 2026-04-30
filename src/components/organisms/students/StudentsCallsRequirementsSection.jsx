import StudentsSectionHeader from '../../molecules/students/StudentsSectionHeader'

function toneClasses(tone) {
  if (tone === 'orange') {
    return {
      wrapper: 'bg-orange-50 border-orange-100 hover:border-[#ea580c]',
      icon: 'bg-orange-100 text-[#ea580c] border-orange-200',
    }
  }

  if (tone === 'slate') {
    return {
      wrapper: 'bg-slate-50 border-slate-200 hover:border-slate-400',
      icon: 'bg-slate-100 text-slate-600 border-slate-200',
    }
  }

  return {
    wrapper: 'bg-blue-50 border-blue-100 hover:border-[#00447e]',
    icon: 'bg-blue-100 text-[#001d3d] border-blue-200',
  }
}

function StudentsCallsRequirementsSection({ requirements, requirementCheckIcon: CheckIcon }) {
  return (
    <section className="bg-[#f1f5f9] px-6 py-20 md:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1fr_1.55fr] lg:items-start">
        <div>
          <StudentsSectionHeader
            tag="Documentacion"
            title="Requisitos generales"
            sub="Lineamientos base para postulaciones en convocatorias de auxiliatura de la Carrera de Estadistica."
          />

          <div className="mt-8 hidden rounded-[2rem] border-b-8 border-[#ea580c] bg-[#001d3d] p-8 shadow-2xl lg:block">
            <div className="mb-4 flex items-center gap-3">
              <div className="size-2 rounded-full bg-[#ea580c] shadow-[0_0_12px_#ea580c]" />
              <p className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.3em] text-[#ea580c]">Nota importante</p>
            </div>
            <p className="text-base font-medium italic leading-relaxed text-blue-100">
              El curriculum vitae debe presentarse en formato oficial de la FCPN y firmado en cada pagina.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {requirements.map((item) => {
            const ItemIcon = item.icon
            const tones = toneClasses(item.tone)

            return (
              <article key={item.title} className={`rounded-[2rem] border p-7 shadow-sm transition-colors ${tones.wrapper}`}>
                <div className="flex items-start gap-5">
                  <div className={`flex size-12 shrink-0 items-center justify-center rounded-xl border ${tones.icon}`}>
                    <ItemIcon size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-base font-black uppercase tracking-tighter text-[#001d3d]">{item.title}</h3>
                    {item.desc ? <p className="text-base font-medium italic leading-relaxed text-slate-600">{item.desc}</p> : null}

                    {item.list ? (
                      <ul className="mt-4 space-y-3">
                        {item.list.map((entry) => (
                          <li key={entry} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5">
                            {CheckIcon ? <CheckIcon size={16} className="mt-0.5 shrink-0 text-[#ea580c]" /> : null}
                            <span className="text-base font-bold text-slate-700">{entry}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StudentsCallsRequirementsSection
