import CredentialCard from '../../molecules/cards/CredentialCard'

const AccreditationCredentialsSection = ({ credentials }) => (
  <section className="relative mx-2 overflow-hidden rounded-[4rem] border border-slate-100 bg-white px-6 py-24 shadow-inner md:mx-4 md:rounded-[6rem] md:px-10 md:py-32">
    <svg className="pointer-events-none absolute left-0 top-8 h-[240px] w-[460px] opacity-[0.085]" viewBox="0 0 460 240" fill="none" aria-hidden="true">
      <path d="M0 120 Q115 45 230 120 T460 120" stroke="#00447e" strokeWidth="2" />
      <path d="M0 145 Q115 70 230 145 T460 145" stroke="#00447e" strokeWidth="1.3" opacity="0.6" />
    </svg>
    <svg className="pointer-events-none absolute -right-20 top-16 h-[360px] w-[360px] opacity-[0.07]" viewBox="0 0 360 360" fill="none" aria-hidden="true">
      <circle cx="180" cy="180" r="150" stroke="#00447e" strokeWidth="1.8" />
      <circle cx="180" cy="180" r="118" stroke="#00447e" strokeWidth="1.2" opacity="0.65" />
      <circle cx="180" cy="180" r="86" stroke="#c2410c" strokeWidth="1" opacity="0.5" />
    </svg>
    <svg className="pointer-events-none absolute bottom-0 left-10 h-[160px] w-[320px] opacity-[0.07]" viewBox="0 0 320 160" fill="none" aria-hidden="true">
      <path d="M0 110 Q80 50 160 110 T320 110" stroke="#00447e" strokeWidth="2" />
      <path d="M0 130 Q80 70 160 130 T320 130" stroke="#c2410c" strokeWidth="1.2" opacity="0.6" />
    </svg>

    <div className="pointer-events-none absolute left-14 top-[58%] hidden font-mono text-[10px] font-bold tracking-[0.25em] text-[#00447e] opacity-[0.22] md:block">AUDIT_TRAIL</div>
    <div className="pointer-events-none absolute right-16 top-[42%] hidden font-serif text-6xl italic font-black text-[#c2410c] opacity-[0.06] lg:block">R2</div>

    <div className="mx-auto max-w-[1440px]">
      <div className="mb-24 text-center">
        <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.6em] text-[#c2410c]">Documentacion Oficial</span>
        <h2 className="mt-4 text-4xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">Galeria de Credenciales</h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {credentials.map((card, index) => (
          <CredentialCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </div>
  </section>
)

export default AccreditationCredentialsSection
