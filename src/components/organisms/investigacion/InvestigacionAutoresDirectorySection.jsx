import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import AutoresStatisticalOverlay from '../../atoms/investigacion/AutoresStatisticalOverlay'
import InvestigacionSectionHeader from '../../molecules/investigacion/InvestigacionSectionHeader'
import AutoresAuthorCard from '../../molecules/investigacion/AutoresAuthorCard'

const InvestigacionAutoresDirectorySection = ({ header, authors, alphabet, onSelectAuthor }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLetter, setSelectedLetter] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const authorsPerPage = 6

  const filteredAuthors = useMemo(() => {
    let result = authors
    if (selectedLetter) result = result.filter((author) => author.name.startsWith(selectedLetter))
    if (searchQuery) result = result.filter((author) => author.name.toLowerCase().includes(searchQuery.toLowerCase()))
    return result.sort((a, b) => a.name.localeCompare(b.name))
  }, [authors, searchQuery, selectedLetter])

  const totalPages = Math.max(1, Math.ceil(filteredAuthors.length / authorsPerPage))
  const paginated = filteredAuthors.slice((currentPage - 1) * authorsPerPage, currentPage * authorsPerPage)

  return (
    <section id="directorio" className="pt-12">
      <InvestigacionSectionHeader tag={header.tag} title={header.title} subtitle={header.subtitle} center />

      <div className="relative mb-12 flex flex-col items-center gap-6 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm xl:flex-row">
        <AutoresStatisticalOverlay opacity="0.02" />

        <div className="group relative z-10 w-full xl:w-1/3">
          <Search size={24} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#ea580c]" />
          <input
            type="text"
            placeholder={header.searchPlaceholder}
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value)
              setSelectedLetter(null)
              setCurrentPage(1)
            }}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-16 pr-6 text-sm font-black uppercase tracking-widest text-[#001d3d] shadow-inner transition-all placeholder:text-slate-300 focus:border-[#ea580c] focus:bg-white focus:outline-none"
          />
        </div>

        <div className="hide-scrollbar z-10 flex w-full items-center gap-2 overflow-x-auto px-2 pb-2 xl:w-2/3 xl:pb-0">
          <button
            type="button"
            onClick={() => {
              setSelectedLetter(null)
              setSearchQuery('')
              setCurrentPage(1)
            }}
            className={`shrink-0 rounded-xl px-5 py-3 text-[11px] font-black uppercase tracking-widest transition-colors ${!selectedLetter && !searchQuery ? 'bg-[#001d3d] text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
          >
            TODOS
          </button>

          <div className="mx-3 h-8 w-px shrink-0 bg-slate-200" />

          {alphabet.map((letter) => {
            const hasAuthors = authors.some((author) => author.name.startsWith(letter))
            return (
              <button
                key={letter}
                type="button"
                disabled={!hasAuthors}
                onClick={() => {
                  setSelectedLetter(letter)
                  setSearchQuery('')
                  setCurrentPage(1)
                }}
                className={[
                  'flex size-12 shrink-0 items-center justify-center rounded-xl text-sm font-black transition-all',
                  selectedLetter === letter
                    ? 'scale-110 bg-[#ea580c] text-white shadow-md'
                    : hasAuthors
                      ? 'border border-slate-200 bg-white text-slate-600 hover:border-[#001d3d] hover:text-[#001d3d]'
                      : 'cursor-not-allowed bg-transparent text-slate-300 opacity-40',
                ].join(' ')}
              >
                {letter}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {paginated.map((author) => (
          <AutoresAuthorCard key={author.id} author={author} onSelect={onSelectAuthor} />
        ))}
      </div>

      {totalPages > 1 ? (
        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
            className="flex size-12 items-center justify-center rounded-xl border-2 border-slate-200 bg-white text-[#001d3d] transition-all hover:border-[#ea580c] hover:bg-[#ea580c] hover:text-white disabled:opacity-30"
          >
            <ChevronLeft size={22} />
          </button>

          <span className="px-4 text-xs font-black uppercase tracking-[0.3em] text-slate-500">
            PAGINA {currentPage} DE {totalPages}
          </span>

          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
            disabled={currentPage === totalPages}
            className="flex size-12 items-center justify-center rounded-xl border-2 border-slate-200 bg-white text-[#001d3d] transition-all hover:border-[#ea580c] hover:bg-[#ea580c] hover:text-white disabled:opacity-30"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      ) : null}
    </section>
  )
}

export default InvestigacionAutoresDirectorySection
