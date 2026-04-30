import { ArrowLeft, Download, Users } from 'lucide-react'
import InvestigacionSectionHeader from '../../molecules/investigacion/InvestigacionSectionHeader'
import VarianzaCoverImage from '../../molecules/investigacion/VarianzaCoverImage'

const InvestigacionVarianzaDetailView = ({ edition, meta, icons, onBack }) => {
  const QuoteIcon = icons.detailsQuoteIcon
  const FileIcon = icons.detailsFileIcon
  const SheetIcon = icons.detailsSheetIcon
  const StatsIcon = icons.detailsStatsIcon

  return (
    <div className="max-w-[1200px] px-6 py-28 mx-auto">
      <div className="mb-6">
        <button
          type="button"
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-[#001d3d] transition-colors hover:text-[#ea580c]"
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-[#ea580c]/10">
            <ArrowLeft size={14} />
          </span>
          VOLVER AL CATALOGO
        </button>
      </div>

      <article className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl">
        <div className="grid lg:grid-cols-[1fr_2fr]">
          <aside className="relative overflow-hidden border-r border-slate-200 bg-[#f8fafc] p-8">
            <VarianzaCoverImage edition={edition.id} year={edition.year} isLarge />

            <div className="relative z-10 mt-8 space-y-5">
              <a href="#" className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#001d3d] px-6 py-3 text-xs font-black uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#ea580c]">
                <Download size={16} className="transition-transform group-hover:-translate-y-1" />
                {meta.pdfAction} ({edition.size})
              </a>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-2 text-xs font-black uppercase tracking-widest text-[#001d3d]">
                  <StatsIcon size={14} className="text-[#ea580c]" /> FICHA TECNICA
                </h4>
                <ul className="space-y-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                  <li className="flex justify-between border-b border-slate-50 pb-2"><span>FECHA:</span> <span className="text-[#001d3d]">{edition.date}</span></li>
                  <li className="flex justify-between border-b border-slate-50 pb-2"><span>PAGINAS:</span> <span className="text-[#001d3d]">{edition.paginas}</span></li>
                  <li className="flex justify-between border-b border-slate-50 pb-2"><span>ART. ORIGINALES:</span> <span className="text-[#001d3d]">{edition.originales}</span></li>
                  {edition.notas > 0 ? <li className="flex justify-between border-b border-slate-50 pb-2"><span>NOTAS CIENT.:</span> <span className="text-[#001d3d]">{edition.notas}</span></li> : null}
                  <li className="mt-4 flex flex-col gap-1">
                    <span className="text-[10px] tracking-widest text-slate-400">ISSN IMPRESO</span>
                    <span className="font-mono text-sm text-[#001d3d]">{edition.issnPrint || '2789-3510'}</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-[10px] tracking-widest text-slate-400">ISSN ONLINE</span>
                    <span className="font-mono text-sm text-[#001d3d]">{edition.issnOnline || '2789-3529'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          <section className="p-8 lg:p-12">
            <InvestigacionSectionHeader tag={meta.detailsTag} title={edition.title} subtitle={meta.detailsSubtitle} />

            {edition.presentacion ? (
              <div className="mb-12">
                <div className="mb-5 flex items-center gap-3">
                  <QuoteIcon className="rotate-180 text-[#ea580c]" size={24} />
                  <h3 className="text-xl font-black uppercase tracking-tighter text-[#001d3d]">PRESENTACION</h3>
                </div>
                <div className="border-l-4 border-slate-200 py-2 pl-5 text-base font-medium italic leading-relaxed text-slate-600">
                  {edition.presentacion}
                </div>
              </div>
            ) : (
              <div className="mb-12 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
                <FileIcon size={32} className="mx-auto mb-3 text-slate-300" />
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">{meta.tabPanelEmpty}</p>
              </div>
            )}

            {edition.articulos?.length ? (
              <div>
                <div className="mb-6 flex items-center justify-between border-b-2 border-slate-100 pb-3">
                  <h3 className="text-xl font-black uppercase tracking-tighter text-[#001d3d]">ARTICULOS INDEXADOS</h3>
                  <span className="rounded bg-[#ea580c]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-[#ea580c]">
                    {edition.articulos.length} PAPERS
                  </span>
                </div>

                <div className="space-y-3">
                  {edition.articulos.map((article) => (
                    <article key={article.titulo} className="group flex flex-col items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-[#001d3d] sm:flex-row sm:items-center">
                      <div className="flex items-start gap-4">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 text-[#ea580c] transition-colors group-hover:bg-[#001d3d] group-hover:text-white">
                          <SheetIcon size={18} />
                        </div>
                        <div>
                          <h4 className="mb-1 text-base font-black uppercase leading-tight text-[#002a52] transition-colors group-hover:text-[#ea580c]">
                            {article.titulo}
                          </h4>
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                            <Users size={12} />
                            {article.autores}
                          </div>
                        </div>
                      </div>

                      <span className="shrink-0 rounded border border-slate-200 bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-widest font-mono text-slate-600">
                        {article.pags}
                      </span>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        </div>
      </article>
    </div>
  )
}

export default InvestigacionVarianzaDetailView
