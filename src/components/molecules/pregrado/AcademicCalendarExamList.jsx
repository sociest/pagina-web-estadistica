import { CalendarDays } from 'lucide-react'

function AcademicCalendarExamList({ examMeta, examItems }) {
  return (
    <div className="group overflow-hidden rounded-[3rem] border border-slate-200 bg-white shadow-xl transition-colors duration-500 hover:border-[#001d3d]">
      <div className="relative overflow-hidden bg-[#001d3d] p-8 text-center">
        <div className="absolute inset-0 bg-[#ea580c] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative z-10">
          <examMeta.icon size={32} className="mx-auto mb-4 text-white/55" />
          <h3 className="text-xl font-black uppercase tracking-tighter text-white">{examMeta.title}</h3>
        </div>
      </div>

      <div className="space-y-6 p-8">
        {examItems.map((item) => (
          <div key={item.event} className="flex gap-4 border-b border-slate-100 pb-6 last:border-0 last:pb-0">
            <div className="mt-1">
              <div className="size-2 rounded-full bg-[#001d3d]" />
            </div>
            <div>
              <p className="mb-1 text-xs font-black uppercase tracking-tight leading-snug text-slate-800">{item.event}</p>
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-500">
                <CalendarDays size={12} className="text-[#ea580c]" /> {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AcademicCalendarExamList
