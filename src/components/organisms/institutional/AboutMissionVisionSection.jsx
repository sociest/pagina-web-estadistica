import { Binary, Target } from 'lucide-react'

const AboutMissionVisionSection = ({ missionVision }) => (
  <section className="relative z-30 -mt-10 mx-4 overflow-hidden rounded-[4rem] border-b-[10px] border-[#c2410c] bg-[#001d3d] py-24 text-white shadow-2xl md:rounded-[6rem] md:py-32">
    <div className="mx-auto grid max-w-[1440px] gap-8 px-8 md:grid-cols-2 md:gap-16 md:px-12">
      <article className="group relative rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-colors duration-300 motion-reduce:transition-none hover:bg-white/10 md:p-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-[#c2410c] shadow-lg">
            <Target size={24} />
          </div>
          <h3 className="text-3xl font-black uppercase leading-none tracking-tighter">
            {missionVision.mission.title} <span className="italic text-orange-400">mu</span>
          </h3>
        </div>

        <p className="border-l-2 border-[#c2410c]/40 pl-8 text-base font-medium italic uppercase tracking-tighter text-blue-100 md:text-xl">
          {missionVision.mission.text}
        </p>
      </article>

      <article className="group relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#00447e] p-10 shadow-2xl md:p-16">
        <Binary className="absolute -right-10 -top-10 opacity-10" size={180} />

        <div className="mb-8 flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-white text-[#00447e] shadow-lg">
            <missionVision.vision.icon size={24} />
          </div>
          <h3 className="text-3xl font-black uppercase leading-none tracking-tighter">
            {missionVision.vision.title} <span className="italic text-blue-300">sigma</span>
          </h3>
        </div>

        <p className="border-l-2 border-white/15 pl-8 text-base font-medium italic uppercase tracking-tighter text-white md:text-xl">
          {missionVision.vision.text}
        </p>
      </article>
    </div>
  </section>
)

export default AboutMissionVisionSection
