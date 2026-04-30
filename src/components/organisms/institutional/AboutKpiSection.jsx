import FloatingSymbols from '../../atoms/layout/FloatingSymbols'
import AchievementCard from '../../molecules/cards/AchievementCard'

const AboutKpiSection = ({ achievements }) => (
  <section className="relative mx-4 overflow-hidden rounded-[3rem] border border-slate-200 bg-white py-12 shadow-inner md:rounded-[5rem] md:py-20">
    <FloatingSymbols />
    <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 px-6 md:grid-cols-4 md:gap-8 md:px-12">
      {achievements.map((item, index) => (
        <AchievementCard key={`${item.label}-${index}`} item={item} index={index} />
      ))}
    </div>
  </section>
)

export default AboutKpiSection
