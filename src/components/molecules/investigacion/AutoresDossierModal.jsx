import { BookOpen, CalendarDays, GraduationCap, MapPin, UserCircle, X } from 'lucide-react'
import AutoresMiniTrendChart from '../../atoms/investigacion/AutoresMiniTrendChart'
import AutoresStatisticalOverlay from '../../atoms/investigacion/AutoresStatisticalOverlay'

const AutoresDossierModal = ({ author, onClose }) => {
  if (!author) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
      <button type="button" onClick={onClose} className="absolute inset-0 cursor-pointer bg-[#001d3d]/60 backdrop-blur-md" aria-label="Cerrar" />

      <article className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[3rem] border border-white/20 bg-white shadow-2xl md:flex-row">
        <button type="button" onClick={onClose} className="absolute right-6 top-6 z-50 rounded-full border border-slate-200 bg-white/50 p-2 text-slate-400 shadow-sm transition-all hover:bg-[#ea580c] hover:text-white">
          <X size={24} />
        </button>

        <aside className="relative flex shrink-0 flex-col items-center bg-gradient-to-b from-[#001d3d] to-[#001122] p-10 text-center text-white md:w-2/5 md:items-start md:p-14 md:text-left">
          <AutoresStatisticalOverlay color="#ffffff" opacity="0.08" />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} aria-hidden="true" />

          <div className="relative z-10 mb-8 flex size-32 items-center justify-center rounded-[2rem] border-4 border-[#ea580c] bg-[#f8fafc] shadow-[0_0_40px_rgba(234,88,12,0.3)] md:size-40">
            <UserCircle size={80} className="text-[#001d3d]" />
          </div>

          <div className="relative z-10 w-full">
            <h3 className="mb-4 text-3xl font-black uppercase leading-tight tracking-tighter md:text-4xl">{author.name}</h3>
            <div className="mb-8 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 shadow-inner backdrop-blur-sm">
              <MapPin size={14} className="text-[#ea580c]" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-100">{author.affiliation}</span>
            </div>

            <p className="mb-10 border-l-2 border-[#ea580c] pl-4 text-left text-sm font-medium italic leading-relaxed text-blue-200/80">
              {author.bio}
            </p>

            <div className="space-y-3">
              {author.orcid ? (
                <a href={`https://orcid.org/${author.orcid}`} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#a6ce39]/30 bg-[#a6ce39]/10 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-[#a6ce39] transition-all hover:bg-[#a6ce39] hover:text-white md:justify-start">
                  <GraduationCap size={16} /> VER PERFIL ORCID
                </a>
              ) : null}

              {author.scholar ? (
                <a href={author.scholar} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-3 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-blue-400 transition-all hover:bg-blue-500 hover:text-white md:justify-start">
                  <GraduationCap size={16} /> GOOGLE SCHOLAR
                </a>
              ) : null}
            </div>
          </div>
        </aside>

        <section className="relative flex flex-col overflow-y-auto p-10 md:w-3/5 md:p-14">
          <div className="sticky top-0 z-10 mb-6 flex items-center justify-between border-b border-slate-100 bg-white/95 pb-6 backdrop-blur-sm">
            <h4 className="flex items-center gap-3 text-lg font-black uppercase tracking-tighter text-[#001d3d] md:text-xl">
              <BookOpen size={24} className="text-[#ea580c]" /> HISTORIAL DE APORTES
            </h4>
            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-100 px-4 py-2">
              <span className="text-xl font-black leading-none text-[#001d3d]">{author.articles.length}</span>
              <span className="mt-1 text-[8px] font-black uppercase tracking-widest text-slate-500">ARTICULOS</span>
            </div>
          </div>

          <div className="space-y-4">
            {author.articles.map((article) => (
              <article key={`${author.id}-${article.title}`} className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-[#ea580c] hover:bg-white hover:shadow-lg">
                <AutoresMiniTrendChart color="#ea580c" />
                <h5 className="relative z-10 mb-4 text-base font-black uppercase leading-tight text-[#001d3d] transition-colors group-hover:text-[#ea580c] md:text-lg">
                  {article.title}
                </h5>
                <div className="relative z-10 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#001d3d] px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
                    <BookOpen size={12} /> {article.edition}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-600">
                    <CalendarDays size={12} className="text-[#ea580c]" /> {article.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}

export default AutoresDossierModal
