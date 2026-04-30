import { useEffect, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import ProjectListItem from '../../molecules/investigacion/ProjectListItem'
import ProjectDetailPanel from '../../molecules/investigacion/ProjectDetailPanel'
import InvestigacionSectionHeader from '../../molecules/investigacion/InvestigacionSectionHeader'

const InvestigacionProjectMemoriesSection = ({ memories, meta, ui }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeYear, setActiveYear] = useState(meta.years[0])
  const [selectedProject, setSelectedProject] = useState(null)

  const projectsByYear = useMemo(
    () => memories.filter((project) => project.year === activeYear),
    [activeYear, memories],
  )

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) return projectsByYear

    return projectsByYear.filter((project) => project.title.toLowerCase().includes(query) || project.author.toLowerCase().includes(query))
  }, [projectsByYear, searchTerm])

  useEffect(() => {
    if (!filteredProjects.length) {
      setSelectedProject(null)
      return
    }

    const stillVisible = filteredProjects.some((project) => project.id === selectedProject?.id)
    if (!stillVisible) setSelectedProject(filteredProjects[0])
  }, [filteredProjects, selectedProject])

  const YearsIcon = meta.yearsIcon
  const NoteIcon = ui.noteIcon
  const HintIcon = meta.panelHintIcon

  return (
    <section id="proyectos" className="scroll-mt-32 px-4 md:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <InvestigacionSectionHeader tag={meta.tag} title={meta.title} subtitle={meta.subtitle} />

        <div className="relative w-full md:w-[350px]">
          <div className="group relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
              <Search size={18} className="text-slate-400 transition-colors group-focus-within:text-[#ea580c]" />
            </div>
            <input
              type="text"
              placeholder={meta.searchPlaceholder}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-full border-2 border-slate-200 bg-white py-4 pl-12 pr-6 text-[10px] font-black uppercase tracking-widest text-[#001d3d] shadow-sm transition-all focus:border-[#001d3d] focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mb-16 flex justify-center">
        <div className="flex flex-wrap gap-2 rounded-[2rem] border border-slate-200 bg-white p-2 shadow-sm">
          {meta.years.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => setActiveYear(year)}
              className={[
                'flex items-center gap-3 rounded-[1.5rem] px-10 py-4 text-[11px] font-black uppercase tracking-widest transition-all',
                activeYear === year
                  ? 'bg-[#001d3d] text-white shadow-lg'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-[#001d3d]',
              ].join(' ')}
            >
              <YearsIcon size={16} className={activeYear === year ? 'text-[#ea580c]' : 'text-slate-400'} />
              GESTION {year}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <div className="mb-6 flex items-center gap-3 rounded-2xl border border-orange-100 bg-orange-50 p-4">
            <NoteIcon size={16} className="text-[#ea580c]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-orange-800">
              {meta.yearNotes[activeYear]}
            </span>
          </div>

          {!filteredProjects.length ? (
            <div className="rounded-3xl border border-slate-200 bg-white py-10 text-center">
              <Search className="mx-auto mb-3 text-slate-300" size={32} />
              <p className="text-xs font-bold uppercase text-slate-500">{meta.emptyTitle}</p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">{meta.emptyDescription}</p>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <ProjectListItem
                key={project.id}
                project={project}
                index={index}
                selected={selectedProject?.id === project.id}
                onSelect={setSelectedProject}
                ui={ui}
              />
            ))
          )}
        </div>

        <div className="h-full lg:sticky lg:top-32">
          {selectedProject ? (
            <ProjectDetailPanel project={selectedProject} meta={meta} ui={ui} />
          ) : (
            <div className="flex h-[500px] flex-col items-center justify-center rounded-[3rem] border-2 border-dashed border-slate-200 bg-slate-50 p-10 text-center">
              <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-white text-slate-300 shadow-sm">
                <HintIcon size={32} />
              </div>
              <h4 className="mb-2 text-xl font-black uppercase tracking-widest text-slate-400">{meta.panelHintTitle}</h4>
              <p className="text-sm font-medium italic text-slate-400">{meta.panelHintDescription}</p>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestigacionProjectMemoriesSection
