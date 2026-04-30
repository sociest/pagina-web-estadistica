const ProjectListItem = ({ project, index, selected, onSelect, ui }) => {
  const AuthorIcon = ui.authorIcon

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className={[
        'group w-full rounded-3xl border p-6 text-left transition-all duration-300',
        selected
          ? 'relative z-10 scale-[1.02] border-[#001d3d] bg-[#001d3d] text-white shadow-xl'
          : 'border-slate-200 bg-white hover:border-[#ea580c] hover:shadow-md',
      ].join(' ')}
    >
      <p className={`mb-2 text-[9px] font-black uppercase tracking-[0.3em] ${selected ? 'text-[#ea580c]' : 'text-slate-400'}`}>
        {ui.listPrefix} {index + 1}
      </p>

      <h4 className={`mb-4 text-sm font-black uppercase leading-tight ${selected ? 'text-white' : 'text-[#002a52] group-hover:text-[#ea580c]'}`}>
        {project.title}
      </h4>

      <p className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest ${selected ? 'text-blue-200' : 'text-slate-500'}`}>
        <AuthorIcon size={14} />
        {project.author}
      </p>
    </button>
  )
}

export default ProjectListItem
