import HccMemberCard from '../../molecules/cards/HccMemberCard'

const AuthoritiesHccSection = ({ meta, teachers, students }) => (
  <section className="relative bg-[#f1f5f9] px-6 py-24 md:px-10 md:py-40">
    <svg className="pointer-events-none absolute left-0 top-10 h-[300px] w-[560px] opacity-[0.08]" viewBox="0 0 560 300" fill="none" aria-hidden="true">
      <path d="M0 170 Q140 90 280 170 T560 170" stroke="#00447e" strokeWidth="2" />
      <path d="M0 196 Q140 116 280 196 T560 196" stroke="#00447e" strokeWidth="1.5" opacity="0.6" />
      <path d="M0 222 Q140 142 280 222 T560 222" stroke="#c2410c" strokeWidth="1.2" opacity="0.55" />
    </svg>

    <div className="mx-auto max-w-[1440px]">
      <div className="mb-24 text-center">
        <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.6em] text-[#c2410c]">{meta.subtitle}</span>
        <h2 className="mt-4 text-4xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-5xl">
          Honorable Consejo <br />
          <span className="text-[#00447e]">de Carrera (HCC)</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-base font-medium italic leading-relaxed text-slate-500">
          {meta.description}
        </p>
      </div>

      <div className="grid gap-12 md:gap-20 lg:grid-cols-2">
        <div>
          <div className="mb-10 flex items-center gap-4 pl-6">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#002a52] text-white shadow-xl"><meta.teacherIcon size={24} /></div>
            <h3 className="text-2xl font-black uppercase italic tracking-widest text-[#002a52]">{meta.teacherTitle}</h3>
          </div>

          <div className="space-y-4">
            {teachers.map((member, index) => (
              <HccMemberCard key={member.email} member={member} index={index} variant="teacher" />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-10 flex items-center gap-4 pl-6">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#c2410c] text-white shadow-xl"><meta.studentIcon size={24} /></div>
            <h3 className="text-2xl font-black uppercase italic tracking-widest text-[#c2410c]">{meta.studentTitle}</h3>
          </div>

          <div className="space-y-4">
            {students.map((member, index) => (
              <HccMemberCard key={member.email} member={member} index={index} variant="student" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AuthoritiesHccSection
