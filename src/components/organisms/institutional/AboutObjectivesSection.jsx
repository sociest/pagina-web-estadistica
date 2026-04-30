import ObjectiveCard from '../../molecules/cards/ObjectiveCard'

const AboutObjectivesSection = ({ objectives }) => (
  <section className="bg-[#f1f5f9] px-6 py-24 md:px-10 md:py-32">
    <div className="mx-auto max-w-[1440px]">
      <div className="mb-16 flex flex-col items-end justify-between gap-8 border-b border-slate-100 pb-12 md:flex-row">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-1 w-12 bg-[#00447e]" />
            <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-slate-400">Ejes de Accion</span>
          </div>
          <h2 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-5xl">Fines Institucionales</h2>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {objectives.map((objective) => (
          <ObjectiveCard key={objective.id} objective={objective} />
        ))}
      </div>
    </div>
  </section>
)

export default AboutObjectivesSection
