import { CalendarDays } from 'lucide-react'

function AcademicCalendarTimelineItem({ event, style, index }) {
  const EventIcon = event.icon

  return (
    <article
      className="group relative flex items-start gap-6 md:gap-10"
      style={{ animationDelay: `${index * 55}ms` }}
    >
      <div className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-2xl border-2 border-white text-white shadow-lg transition-transform duration-300 group-hover:scale-110 md:size-14 ${style.color}`}>
        <EventIcon size={20} className="md:size-6" />
      </div>

      <div className={`flex-1 rounded-2xl border border-slate-100 bg-[#f8fafc] p-5 transition-all duration-300 hover:border-l-[6px] hover:bg-white hover:shadow-xl md:rounded-[2rem] md:p-6 ${style.border}`}>
        <span className={`mb-2 inline-block rounded px-2 py-0.5 text-xs font-black uppercase tracking-[0.3em] text-white md:text-[9px] ${style.color}`}>
          {style.label}
        </span>
        <h4 className={`mb-2 text-sm font-black uppercase tracking-tight leading-tight md:text-lg ${style.text}`}>
          {event.event}
        </h4>
        <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3 text-xs font-bold uppercase tracking-widest text-slate-500 md:text-[11px]">
          <CalendarDays size={14} className="text-slate-400" /> {event.date}
        </div>
      </div>
    </article>
  )
}

export default AcademicCalendarTimelineItem
