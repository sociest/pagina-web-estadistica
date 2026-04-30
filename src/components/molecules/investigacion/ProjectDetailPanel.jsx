import { Download } from 'lucide-react'
import ProjectStatusBadge from '../../atoms/investigacion/ProjectStatusBadge'
import { projectStatusTone } from '../../../services/investigacionProyectosData'

const ProjectDetailPanel = ({ project, meta, ui }) => {
  if (!project) return null

  const AuthorIcon = meta.detailAuthorIcon
  const AbstractIcon = meta.detailAbstractIcon
  const ResultsIcon = meta.detailResultsIcon

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[3rem] border border-slate-200 border-t-[8px] border-t-[#ea580c] bg-white shadow-2xl">
      <div className="border-b border-slate-100 bg-[#f8fafc] p-8 md:p-10">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="rounded-full border border-[#001d3d]/10 bg-[#001d3d]/5 px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-[#001d3d]">
            {ui.panelResolutionPrefix}: {project.resolution}
          </div>
          <ProjectStatusBadge status={project.status} tone={projectStatusTone[project.status]} />
        </div>

        <h3 className="mb-4 text-2xl font-black uppercase leading-tight tracking-tighter text-[#001d3d]">{project.title}</h3>

        <p className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
          <AuthorIcon size={16} className="text-[#ea580c]" />
          {meta.detailAuthorPrefix}: {project.author}
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-between p-8 md:p-10">
        <div>
          <h4 className="mb-4 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.35em] text-[#001d3d]">
            <AbstractIcon size={16} />
            {meta.detailAbstractLabel}
          </h4>

          <p className="mb-8 border-l-4 border-slate-200 pl-4 text-sm font-medium italic leading-relaxed text-slate-600">
            {project.abstract}
          </p>

          <h4 className="mb-4 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.35em] text-[#001d3d]">
            <ResultsIcon size={16} />
            {meta.detailResultsLabel}
          </h4>

          <ul className="mb-10 space-y-3">
            {project.results.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <ResultsIcon size={16} className="mt-0.5 shrink-0 text-[#ea580c]" />
                <span className="text-[12px] font-bold leading-snug text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={project.downloadHref || meta.defaultDownloadHref}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#001d3d] py-5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#ea580c]"
        >
          {meta.detailButtonLabel}
          <Download size={16} />
        </a>
      </div>
    </article>
  )
}

export default ProjectDetailPanel
