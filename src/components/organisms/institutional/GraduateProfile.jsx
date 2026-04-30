import React from 'react';

/**
 * Sección de perfil del egresado con métricas y cards de roles.
 *
 * @param {Object} props - Component props.
 * @param {Object} [props.profile] - Información principal de la sección.
 * @param {Array<Object>} [props.roles=[]] - Lista de roles profesionales.
 * @returns {JSX.Element} Graduate profile section.
 */
export const GraduateProfile = ({
  profile = {
    badgeValue: '92',
    badgeSuffix: '%',
    badgeLabel: 'Tasa de Empleo Directo',
    titleLines: ['PERFIL DEL', 'EGRESADO'],
    description:
      'Nuestros profesionales dominan el lenguaje de los datos. Están capacitados para liderar la transformación digital mediante el modelado matemático riguroso.',
  },
  roles = [],
}) => (
  <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#fefefe] relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none opacity-[0.10]" aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none" fill="none">
        <path d="M0 600C350 600 700 300 1050 250C1200 220 1320 200 1400 600" stroke="#00447e" strokeWidth="2.5" />
        <path d="M0 620C350 620 700 320 1050 270C1200 240 1320 220 1400 620" stroke="#00447e" strokeWidth="2" opacity="0.6" />
      </svg>
    </div>

    <div className="max-w-[1200px] mx-auto relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-1 w-12 bg-[#ea580c]" />
        <span className="text-base sm:text-base md:text-lg font-black text-[#ea580c] uppercase tracking-[0.35em]">Propósito Académico</span>
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start mb-16">
        <div className="flex justify-center lg:justify-start">
          <div className="bg-[#00447e] rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden" style={{ width: '280px', height: '220px' }}>
            <div className="absolute inset-0 opacity-[0.15]">
              <svg viewBox="0 0 280 220" fill="none" className="w-full h-full">
                <circle cx="140" cy="110" r="80" stroke="white" strokeWidth="2" opacity="0.5" />
                <path d="M40 110 Q90 70 140 110 T240 110" stroke="white" strokeWidth="1.5" opacity="0.4" />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="text-7xl font-black tracking-tighter leading-none mb-2">
                {profile.badgeValue}
                <span className="text-5xl">{profile.badgeSuffix}</span>
              </div>
              <p className="text-base sm:text-base md:text-lg font-bold uppercase tracking-widest opacity-80">{profile.badgeLabel}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1e293b] leading-tight tracking-tight mb-6">
            {profile.titleLines?.[0]}<br />
            <span className="text-[#00447e]">{profile.titleLines?.[1]}</span>
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed font-medium">{profile.description}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {roles.map((role) => {
          const Icon = role.icon;

          return (
            <article key={role.title} className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0] hover:shadow-lg transition-all group relative overflow-hidden">
              <svg className="absolute top-0 right-0 w-32 h-32 opacity-[0.10]" viewBox="0 0 100 100" fill="none">
                <path d="M0 50 Q25 30 50 50 T100 50" stroke={role.accent ?? '#ea580c'} strokeWidth="2" />
              </svg>
              <div className="flex items-start gap-4 relative z-10">
                <div className="size-14 rounded-xl bg-white shadow-md flex items-center justify-center text-[#ea580c] shrink-0 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#1e293b] uppercase tracking-tight mb-2">{role.title}</h3>
                  <p className="text-base text-[#64748b] font-semibold uppercase tracking-wider mb-1">{role.subtitle}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
