import { Users } from 'lucide-react'
import { projectCardTone } from '../../../services/investigacionProyectosData'

const FeaturedProjectCard = ({ card }) => {
  const Icon = card.icon
  const tone = projectCardTone[card.tone] ?? projectCardTone.blue

  return (
    <article className="group rounded-[2.5rem] border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all hover:bg-white/20">
      <div className="mb-6 flex items-center gap-4">
        <div className={`flex size-12 items-center justify-center rounded-xl border ${tone.icon}`}>
          <Icon size={24} />
        </div>
        <span className={`text-[9px] font-black uppercase tracking-widest ${tone.category}`}>{card.category}</span>
      </div>

      <h4 className={`mb-4 text-xl font-black uppercase leading-tight transition-colors ${tone.titleHover}`}>{card.title}</h4>

      <p className={`mb-6 border-l-2 pl-4 text-[11px] font-medium italic leading-relaxed text-blue-100/70 ${tone.border}`}>
        {card.summary}
      </p>

      <p className="flex items-center gap-2 border-t border-white/10 pt-4 text-[10px] font-black uppercase tracking-widest text-white">
        <Users size={14} />
        {card.author}
      </p>
    </article>
  )
}

export default FeaturedProjectCard
