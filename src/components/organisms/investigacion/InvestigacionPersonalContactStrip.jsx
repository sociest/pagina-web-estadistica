import TeamContactStripItem from '../../molecules/investigacion/TeamContactStripItem'

const InvestigacionPersonalContactStrip = ({ items }) => (
  <section className="px-4 md:px-8">
    <div className="mx-auto max-w-[1440px] rounded-[2.4rem] border border-slate-200 bg-gradient-to-r from-[#f8fbff] via-white to-[#f8fbff] p-5 shadow-sm md:p-6">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <TeamContactStripItem key={item.label} item={item} />
        ))}
      </div>
    </div>
  </section>
)

export default InvestigacionPersonalContactStrip
