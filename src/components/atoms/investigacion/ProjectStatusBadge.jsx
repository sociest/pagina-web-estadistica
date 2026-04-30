const statusStyles = {
  success: 'border-green-200 bg-green-50 text-green-700',
  info: 'border-blue-200 bg-blue-50 text-blue-700',
  warning: 'border-orange-200 bg-orange-50 text-orange-700',
  neutral: 'border-slate-200 bg-slate-50 text-slate-600',
}

const ProjectStatusBadge = ({ status, tone = 'neutral' }) => (
  <span className={`rounded-full border px-4 py-1.5 text-[9px] font-black uppercase tracking-widest shadow-sm ${statusStyles[tone] ?? statusStyles.neutral}`}>
    {status}
  </span>
)

export default ProjectStatusBadge
