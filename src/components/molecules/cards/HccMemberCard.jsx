import { UserCircle } from 'lucide-react'

const HccMemberCard = ({ member, index, variant = 'teacher' }) => {
  const isTeacher = variant === 'teacher'

  return (
    <article className={`group relative flex items-center gap-6 overflow-hidden rounded-[3rem] border bg-white p-6 shadow-xl transition-[border-color,box-shadow] duration-300 motion-reduce:transition-none ${isTeacher ? 'border-slate-100 hover:border-[#c2410c]' : 'border-slate-100 hover:border-[#00447e]'}`}>
      <div className="relative size-16 shrink-0 overflow-hidden rounded-[1.25rem] border-2 border-white shadow-lg">
        {member.img ? (
          <img
            src={member.img}
            alt={member.name}
            className="h-full w-full object-cover grayscale-[0.2] contrast-[1.08] transition-[filter,transform] duration-500 group-hover:grayscale-0 group-hover:scale-105"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center ${isTeacher ? 'bg-[#c2410c]/10 text-[#c2410c]' : 'bg-[#00447e]/10 text-[#00447e]'}`}>
            <UserCircle size={28} />
          </div>
        )}
        <div className={`absolute inset-x-0 bottom-0 h-1 ${isTeacher ? 'bg-[#c2410c]' : 'bg-[#00447e]'}`} />
      </div>

      <div className="flex-1">
        <p className="mb-1 text-xs font-black uppercase tracking-[0.3em] text-slate-400">{member.role}</p>
        <h4 className="text-sm font-black uppercase leading-tight tracking-tighter text-slate-800">{member.name}</h4>
        <p className={`mt-1 text-[10px] font-bold ${isTeacher ? 'text-[#00447e]' : 'text-[#c2410c]'} opacity-70 group-hover:opacity-100`}>{member.email}</p>
      </div>

      <div className="absolute right-8 top-4 font-mono text-[8px] font-black uppercase text-slate-50">
        {isTeacher ? `DOC_ID_${index + 1}` : 'INT f(x) dx'}
      </div>
    </article>
  )
}

export default HccMemberCard
