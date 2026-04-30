import { MapPin, Users } from 'lucide-react'
import InvestigacionSectionHeader from '../../molecules/investigacion/InvestigacionSectionHeader'
import VarianzaCommitteeMemberCard from '../../molecules/investigacion/VarianzaCommitteeMemberCard'

const InvestigacionVarianzaCommitteeSection = ({ editor, internationalMembers, nationalMembers, meta }) => (
  <section>
    <InvestigacionSectionHeader tag={meta.titleTag} title={meta.title} center />

    <article className="relative mb-16 flex flex-col items-center gap-10 overflow-hidden rounded-[2.5rem] border-b-[8px] border-[#ea580c] bg-[#001d3d] p-10 text-white shadow-xl md:flex-row md:p-12">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} aria-hidden="true" />

      <div className="relative z-10 flex size-36 shrink-0 items-center justify-center rounded-full border-4 border-[#ea580c] bg-[#f8fafc] text-[#001d3d] shadow-[0_0_40px_rgba(234,88,12,0.4)]">
        <Users size={64} />
      </div>

      <div className="relative z-10 text-center md:text-left">
        <h2 className="mb-3 text-sm font-black uppercase tracking-[0.4em] text-[#ea580c]">{editor.role}</h2>
        <h3 className="mb-4 text-4xl font-black uppercase leading-none tracking-tighter md:text-5xl">{editor.name}</h3>
        <p className="mb-6 text-lg font-medium italic text-blue-200">{editor.subtitle}</p>
        <a href={`mailto:${editor.email}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-xs font-black uppercase tracking-widest transition-colors hover:bg-white/20">
          <MapPin size={16} />
          {editor.email}
        </a>
      </div>
    </article>

    <div className="grid gap-12 lg:grid-cols-2">
      <div>
        <div className="mb-8 flex items-center gap-4">
          <div className="h-10 w-2.5 rounded-full bg-[#ea580c]" />
          <h2 className="text-3xl font-black uppercase leading-none tracking-tighter text-[#001d3d]">{meta.internationalTitle}</h2>
        </div>

        <div className="space-y-4">
          {internationalMembers.map((member) => (
            <VarianzaCommitteeMemberCard key={member.name} member={member} icon={meta.internationalIcon} tone="international" />
          ))}
        </div>
      </div>

      <div>
        <div className="mb-8 flex items-center gap-4">
          <div className="h-10 w-2.5 rounded-full bg-[#001d3d]" />
          <h2 className="text-3xl font-black uppercase leading-none tracking-tighter text-[#001d3d]">{meta.nationalTitle}</h2>
        </div>

        <div className="space-y-4">
          {nationalMembers.map((member) => (
            <VarianzaCommitteeMemberCard key={member.name} member={member} icon={meta.nationalIcon} tone="national" />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default InvestigacionVarianzaCommitteeSection
