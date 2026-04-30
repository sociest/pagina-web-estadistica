import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import VarianzaStatSeal from '../../atoms/investigacion/VarianzaStatSeal'
import InvestigacionSectionHeader from '../../molecules/investigacion/InvestigacionSectionHeader'
import VarianzaCoverImage from '../../molecules/investigacion/VarianzaCoverImage'
import VarianzaEditionCard from '../../molecules/investigacion/VarianzaEditionCard'

const InvestigacionVarianzaCatalogSection = ({ editions, meta, icons, onSelectEdition }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const filteredEditions = useMemo(
    () => editions.filter((edition) => edition.title.toLowerCase().includes(searchQuery.toLowerCase()) || edition.date.toLowerCase().includes(searchQuery.toLowerCase())),
    [editions, searchQuery],
  )

  const featuredEdition = editions.find((edition) => edition.featured) ?? editions[0]
  const gridEditions = filteredEditions.filter((edition) => edition.id !== featuredEdition.id)
  const totalPages = Math.max(1, Math.ceil(gridEditions.length / itemsPerPage))
  const paginated = gridEditions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const FeaturedIcon = icons.featuredIcon

  return (
    <section className="flex flex-col">
      <div className="relative z-30 mx-auto -mt-8 mb-16 w-full max-w-3xl">
        <div className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl transition-colors hover:border-[#ea580c] md:flex-row md:p-4">
          <div className="shrink-0 rounded-xl bg-slate-100 p-3 text-[#ea580c] transition-colors group-hover:bg-[#001d3d]">
            <Search size={24} />
          </div>
          <input
            type="text"
            placeholder={meta.searchPlaceholder}
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value)
              setCurrentPage(1)
            }}
            className="w-full bg-transparent text-base font-black uppercase tracking-widest text-[#001d3d] placeholder:text-slate-300 focus:outline-none md:text-lg"
          />
          {searchQuery ? (
            <span className="shrink-0 rounded-lg bg-[#ea580c] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-white">
              {filteredEditions.length} RESULTADOS
            </span>
          ) : null}
        </div>
      </div>

      {searchQuery === '' && currentPage === 1 && featuredEdition ? (
        <div className="relative mb-20">
          <VarianzaStatSeal symbol="STAR" label="DESTACADO" value="LATEST" className="right-[5%] top-[-10%]" />
          <InvestigacionSectionHeader tag={meta.featuredTag} title={meta.featuredTitle} />

          <button
            type="button"
            onClick={() => onSelectEdition(featuredEdition)}
            className="group grid w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-left shadow-lg transition-all duration-500 hover:border-[#001d3d] hover:shadow-xl sm:grid-cols-[1fr_2fr]"
          >
            <div className="flex items-center justify-center border-r border-slate-100 bg-[#f8fafc] p-6">
              <VarianzaCoverImage edition={featuredEdition.id} year={featuredEdition.year} />
            </div>

            <div className="relative flex flex-col justify-center overflow-hidden p-8 lg:p-10">
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] transition-opacity group-hover:opacity-[0.08]" aria-hidden="true">
                <FeaturedIcon size={200} />
              </div>
              <span className="mb-4 w-max rounded-md bg-[#ea580c] px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-white shadow-sm">
                {featuredEdition.date}
              </span>
              <h3 className="mb-3 text-3xl font-black uppercase leading-none tracking-tighter text-[#001d3d] transition-colors group-hover:text-[#ea580c]">
                {featuredEdition.title}
              </h3>
              <p className="relative z-10 mb-6 line-clamp-3 border-l-4 border-slate-200 pl-4 text-base font-medium italic leading-relaxed text-slate-500">
                {featuredEdition.presentacion}
              </p>
              <div className="flex gap-6 border-t border-slate-100 pt-6">
                <div className="flex flex-col">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">ARTICULOS</span>
                  <span className="mt-1 text-2xl font-black text-[#001d3d]">{featuredEdition.originales}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">PAGINAS</span>
                  <span className="mt-1 text-2xl font-black text-[#001d3d]">{featuredEdition.paginas}</span>
                </div>
              </div>
            </div>
          </button>
        </div>
      ) : null}

      <InvestigacionSectionHeader tag={meta.catalogTag} title={meta.catalogTitle} />

      {paginated.length ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.map((edition) => (
            <VarianzaEditionCard key={edition.id} edition={edition} onSelect={onSelectEdition} />
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-slate-200 bg-white py-20 text-center shadow-sm">
          <Search size={48} className="mx-auto mb-4 text-slate-300" />
          <p className="text-sm font-black uppercase tracking-widest text-slate-500">{meta.noResults}</p>
        </div>
      )}

      {totalPages > 1 ? (
        <div className="mt-16 flex flex-col items-center gap-4">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
            PAGINA {currentPage} DE {totalPages}
          </span>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="flex size-12 items-center justify-center rounded-xl border-2 border-slate-200 bg-white text-[#001d3d] transition-all hover:border-[#ea580c] hover:bg-[#ea580c] hover:text-white disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-[#001d3d]"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={currentPage === totalPages}
              className="flex size-12 items-center justify-center rounded-xl border-2 border-slate-200 bg-white text-[#001d3d] transition-all hover:border-[#ea580c] hover:bg-[#ea580c] hover:text-white disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-[#001d3d]"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default InvestigacionVarianzaCatalogSection
