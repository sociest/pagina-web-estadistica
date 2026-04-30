import AuthorityProfileCard from '../../molecules/cards/AuthorityProfileCard'
import StatisticalSeal from '../../atoms/data/StatisticalSeal'

const AuthoritiesDirectionSection = ({ directionData }) => (
  <section className="relative mx-2 overflow-hidden rounded-[4rem] border border-slate-100 bg-white px-6 py-24 shadow-inner md:mx-4 md:rounded-[6rem] md:px-10 md:py-32">
    <StatisticalSeal symbol="Sigma" label="MUESTRA" value="450" top="10%" left="5%" className="opacity-[0.12]" />

    <svg className="pointer-events-none absolute -right-20 top-16 h-[360px] w-[360px] opacity-[0.07]" viewBox="0 0 360 360" fill="none" aria-hidden="true">
      <circle cx="180" cy="180" r="150" stroke="#00447e" strokeWidth="1.8" />
      <circle cx="180" cy="180" r="118" stroke="#00447e" strokeWidth="1.2" opacity="0.65" />
      <circle cx="180" cy="180" r="86" stroke="#c2410c" strokeWidth="1" opacity="0.5" />
    </svg>

    <div className="mx-auto max-w-[1440px]">
      <div className="mb-24 text-center">
        <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.6em] text-[#c2410c]">Nivel Ejecutivo</span>
        <h2 className="mt-4 text-4xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-5xl">Direccion de Carrera</h2>
      </div>

      <div className="grid gap-16 md:gap-24 lg:grid-cols-2">
        {directionData.map((member) => (
          <AuthorityProfileCard key={member.email} member={member} />
        ))}
      </div>
    </div>
  </section>
)

export default AuthoritiesDirectionSection
