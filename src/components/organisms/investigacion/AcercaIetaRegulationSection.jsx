import { Download, Eye, FileText, ShieldCheck } from 'lucide-react'
import InvestigacionSectionHeader from '../../molecules/investigacion/InvestigacionSectionHeader'

const AcercaIetaRegulationSection = ({ regulation }) => (
  <section id="reglamento" className="scroll-mt-32 px-4 pb-20 md:px-8">
    <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[3.2rem] border-t-8 border-[#ea580c] bg-[#002a52] text-white shadow-2xl">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-12 p-10 md:p-14 lg:flex-row lg:items-center">
        <div className="flex size-24 shrink-0 items-center justify-center rounded-[2rem] border border-white/20 bg-white/10 text-[#ea580c] shadow-lg backdrop-blur-sm md:size-28">
          <FileText size={46} />
        </div>

        <div className="flex-1 text-center md:text-left">
          <InvestigacionSectionHeader tag={regulation.tag} title={regulation.title} subtitle={regulation.description} light />

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href={regulation.primaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl bg-[#ea580c] px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white shadow-[0_0_22px_rgba(234,88,12,0.4)] transition-colors hover:bg-orange-600"
            >
              <Eye size={16} />
              {regulation.primaryCta.label}
            </a>
            <a
              href={regulation.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl border-2 border-white/20 bg-transparent px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white transition-colors hover:bg-white/10"
            >
              <Download size={16} />
              {regulation.secondaryCta.label}
            </a>
          </div>
        </div>

        <ShieldCheck className="absolute -bottom-12 -right-8 hidden text-white/10 lg:block" size={250} aria-hidden="true" />
      </div>
    </div>
  </section>
)

export default AcercaIetaRegulationSection
