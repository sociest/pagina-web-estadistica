import { memo } from 'react'
import { Clock } from 'lucide-react'
import { areaColors } from '../../../services/pregradoCurriculumData'

function CurriculumSubjectCard({ subject, hasHover, isHovered, isRelated, onHover, onLeave }) {
  const dotColor = areaColors[subject.area] ?? areaColors.other
  const isActive = isHovered || isRelated
  const isDimmed = hasHover && !isActive

  return (
    <article
      className={`relative flex min-h-[8rem] cursor-crosshair flex-col justify-between overflow-hidden rounded-xl border-2 p-4 [contain:layout_paint] transition-[border-color,background-color,box-shadow] duration-150 ease-out ${
        !hasHover ? 'border-slate-200 bg-white shadow-sm hover:border-slate-300' : ''
      } ${isActive ? 'z-20 border-[#ea580c] bg-white shadow-md' : ''} ${
        isDimmed ? 'z-0 border-slate-300/85 bg-slate-100/95' : ''
      }`}
      onMouseEnter={() => onHover(subject)}
      onMouseLeave={onLeave}
    >
      <div className="flex items-start justify-between">
        <span
          className={`rounded px-2 py-0.5 font-mono text-[9px] font-black transition-colors ${
            isActive ? 'bg-[#ea580c] text-white' : isDimmed ? 'bg-slate-300 text-slate-500' : 'bg-slate-100 text-slate-500'
          }`}
        >
          {subject.id}
        </span>
        <div className="size-2.5 rounded-full shadow-sm" style={{ backgroundColor: dotColor }} />
      </div>

      <h6
        className={`mt-2 line-clamp-2 break-words text-[11px] font-black uppercase leading-tight transition-colors ${
          isActive ? 'text-[#001d3d]' : isDimmed ? 'text-slate-500' : 'text-slate-800'
        }`}
      >
        {subject.n}
      </h6>

      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 text-[8px] font-bold uppercase text-slate-400">
        <span className="flex items-center gap-1"><Clock size={10} /> {subject.ht}H</span>
        <span className={isActive ? 'text-[#ea580c]' : ''}>{subject.cred} CR</span>
      </div>
    </article>
  )
}

export default memo(CurriculumSubjectCard)
