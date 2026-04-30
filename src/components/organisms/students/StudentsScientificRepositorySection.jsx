import StudentsCenterSectionHeader from '../../molecules/students/StudentsCenterSectionHeader'
import StudentsScientificPaperRow from '../../molecules/students/StudentsScientificPaperRow'
import StudentsScientificJournalCard from '../../molecules/students/StudentsScientificJournalCard'

function StudentsScientificRepositorySection({ papers, journals, sectionIcon: SectionIcon }) {
  return (
    <section className="bg-[#f1f5f9] px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-[1536px] gap-16 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        <div className="rounded-[3rem] border border-slate-200 bg-white p-8 shadow-xl md:p-10">
          <div className="mb-10 flex flex-col gap-6 border-b border-slate-100 pb-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-[#001d3d]">Repositorio SCEE</h3>
              <p className="text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-[#ea580c]">Publicaciones estudiantiles</p>
            </div>
            <div className="relative w-full sm:w-[280px]">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">Σ</span>
              <input
                type="text"
                placeholder="Buscar papers, autores..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-[#001d3d] transition-colors focus:border-[#001d3d] focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-4">
            {papers.map((paper) => (
              <StudentsScientificPaperRow key={paper.id} paper={paper} sectionIcon={SectionIcon} />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[3rem] border-t-8 border-[#ea580c] bg-[#001d3d] p-8 shadow-2xl">
            <StudentsCenterSectionHeader
              tag="Redes y revistas"
              title="Matriz cientifica"
              sub="Canales y publicaciones donde la Sociedad Cientifica comparte avances y resultados."
              light
            />

            <div className="space-y-4">
              {journals.map((journal) => (
                <StudentsScientificJournalCard key={journal.name} journal={journal} />
              ))}
            </div>
          </div>

          <div className="rounded-[3rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="size-10 rounded-xl bg-[#ea580c]/10 text-[#ea580c] flex items-center justify-center">☆</div>
              <h3 className="text-lg font-black uppercase tracking-tighter text-[#001d3d]">Muro de logros</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="size-14 shrink-0 overflow-hidden rounded-xl shadow-sm">
                  <img src="https://images.unsplash.com/photo-1523240715181-320a9f23fa2a?auto=format&fit=crop&q=80&w=200" alt="Hackathon" className="h-full w-full object-cover grayscale contrast-125" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase leading-tight text-[#002a52]">1er lugar Hackathon FCPN</h4>
                  <p className="mt-1 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-slate-500">Gestion 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-14 shrink-0 overflow-hidden rounded-xl shadow-sm">
                  <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=200" alt="Publicacion" className="h-full w-full object-cover grayscale contrast-125" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase leading-tight text-[#002a52]">Publicacion destacada Varianza</h4>
                  <p className="mt-1 text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-slate-500">Volumen 22 - Demografia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentsScientificRepositorySection
