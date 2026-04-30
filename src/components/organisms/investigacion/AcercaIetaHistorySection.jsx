import InvestigacionSectionHeader from '../../molecules/investigacion/InvestigacionSectionHeader'

const AcercaIetaHistorySection = ({ history }) => (
  <section id="historia" className="scroll-mt-32 px-4 md:px-8">
    <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[3.2rem] border border-slate-200 bg-white shadow-xl lg:grid lg:grid-cols-[1fr_1fr]">
      <div className="relative h-[360px] w-full overflow-hidden md:h-[480px]">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
          alt="Historia IETA"
          className="h-full w-full object-cover grayscale-[0.75] contrast-[1.25]"
        />
        <div className="absolute inset-0 bg-[#001d3d]/26" />
        <div className="absolute bottom-8 left-8 rounded-3xl border-l-4 border-[#ea580c] bg-white/90 p-5 shadow-2xl backdrop-blur-md">
          <p className="mb-1 text-[9px] font-black uppercase tracking-widest text-slate-500">FUNDACION OFICIAL</p>
          <p className="text-2xl font-black uppercase italic tracking-tighter text-[#001d3d]">OCTUBRE, 1985</p>
        </div>
      </div>

      <div className="p-8 md:p-12">
        <InvestigacionSectionHeader tag={history.tag} title={history.title} />

        {history.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 36)} className="mb-6 text-sm font-medium italic leading-relaxed text-slate-600 md:text-base">
            {paragraph}
          </p>
        ))}

        <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#f8fafc] p-5">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#001d3d] text-white shadow-md">
            <history.milestone.icon size={20} />
          </div>
          <div>
            <p className="mb-1 text-[10px] font-black uppercase leading-tight text-[#002a52]">{history.milestone.label}</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{history.milestone.detail}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AcercaIetaHistorySection
