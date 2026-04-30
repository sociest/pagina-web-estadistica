import VarianzaTabButton from '../../molecules/investigacion/VarianzaTabButton'

const InvestigacionVarianzaTabsSection = ({ tabs, activeTab, onChange }) => (
  <section className="sticky top-[68px] z-[90] border-b-4 border-[#ea580c] bg-white shadow-md md:top-[72px]">
    <div className="hide-scrollbar mx-auto max-w-[1200px] overflow-x-auto px-6">
      <nav className="flex min-w-max justify-start gap-2 py-3 md:justify-center md:gap-6">
        {tabs.map((tab) => (
          <VarianzaTabButton key={tab.id} tab={tab} active={activeTab === tab.id} onClick={onChange} />
        ))}
      </nav>
    </div>
  </section>
)

export default InvestigacionVarianzaTabsSection
