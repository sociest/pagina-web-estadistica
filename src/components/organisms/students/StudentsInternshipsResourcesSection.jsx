import StudentsSectionHeader from '../../molecules/students/StudentsSectionHeader'

function docToneClasses(tone) {
  if (tone === 'orange') {
    return { icon: 'bg-orange-50 text-[#ea580c]' }
  }

  if (tone === 'slate') {
    return { icon: 'bg-slate-100 text-slate-600' }
  }

  return { icon: 'bg-blue-50 text-blue-700' }
}

function StudentsInternshipsResourcesSection({
  requirements,
  documents,
  reqCheckIcon: ReqCheckIcon,
  downloadIcon: DownloadIcon,
}) {
  return (
    <section className="border-y border-slate-200 bg-white px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-2">
        <div>
          <StudentsSectionHeader tag="Documentacion" title="Requisitos de habilitacion" />
          <div className="space-y-4">
            {requirements.map((requirement) => (
              <article key={requirement} className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-[#f8fafc] p-5 transition-colors hover:border-[#001d3d]">
                <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-[#ea580c] text-white shadow-sm">
                  {ReqCheckIcon ? <ReqCheckIcon size={14} /> : null}
                </div>
                <span className="text-base sm:text-base md:text-lg font-bold uppercase tracking-tight text-slate-700">{requirement}</span>
              </article>
            ))}
          </div>
        </div>

        <div>
          <StudentsSectionHeader tag="Formatos" title="Documentos oficiales" />
          <div className="grid gap-4">
            {documents.map((document) => {
              const DocIcon = document.icon
              const tones = docToneClasses(document.tone)

              return (
                <article key={document.title} className="group flex cursor-pointer items-center justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center gap-5">
                    <div className={`flex size-12 items-center justify-center rounded-xl ${tones.icon}`}>
                      <DocIcon size={24} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-black uppercase leading-tight tracking-tighter text-[#001d3d]">{document.title}</h3>
                      <p className="text-[11px] font-medium italic text-slate-500">{document.desc}</p>
                    </div>
                  </div>
                  <div className="text-slate-300 transition-colors group-hover:text-[#ea580c]">
                    {DownloadIcon ? <DownloadIcon size={20} /> : null}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentsInternshipsResourcesSection
