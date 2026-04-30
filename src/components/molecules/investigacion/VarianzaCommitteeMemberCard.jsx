const VarianzaCommitteeMemberCard = ({ member, icon: Icon, tone = 'international' }) => (
  <article className="group flex items-center gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#001d3d] hover:shadow-md">
    <div
      className={[
        'flex size-14 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-400 shadow-inner transition-colors',
        tone === 'international'
          ? 'group-hover:border-transparent group-hover:bg-[#ea580c] group-hover:text-white'
          : 'group-hover:border-transparent group-hover:bg-[#001d3d] group-hover:text-white',
      ].join(' ')}
    >
      <Icon size={24} />
    </div>

    <div>
      <h4 className="mb-1 text-base font-black uppercase leading-tight text-[#001d3d] transition-colors group-hover:text-[#ea580c]">{member.name}</h4>
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{member.uni}</p>
      <p className={tone === 'international' ? 'mt-1 text-[10px] font-black uppercase tracking-widest text-[#ea580c]' : 'mt-1 text-[10px] font-black uppercase tracking-widest text-[#001d3d]'}>{member.country}</p>
    </div>
  </article>
)

export default VarianzaCommitteeMemberCard
