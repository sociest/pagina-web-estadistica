import React from 'react';

/**
 * Carrusel horizontal de instituciones aliadas.
 *
 * @param {Object} props - Component props.
 * @param {Array<{name: string, abbr: string}>} [props.partners=[]] - Lista de aliados.
 * @returns {JSX.Element} Partners ticker section.
 */
export const PartnersCarousel = ({ partners = [] }) => {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-14 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, white 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-20 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-[3px] w-6 bg-[#00a5a8] rounded-full" />
          <span className="text-base sm:text-base md:text-lg font-semibold uppercase tracking-widest text-[#00a5a8]">Alianzas</span>
        </div>
        <h2 className="text-[24px] font-bold text-[#1e293b]">Nuestros Egresados Trabajan En</h2>
        <p className="text-base text-[#64748b] mt-1">Convenios con instituciones públicas y organismos internacionales.</p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #f8fafc, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, white, transparent)' }} />

        <div className="overflow-hidden">
          <div className="animate-marquee">
            {doubled.map((partner, index) => (
              <div key={`${partner.abbr}-${index}`} className="flex-shrink-0 mx-6 flex items-center justify-center h-[60px] px-6 rounded-xl bg-[#fafafa] border border-[#e2e8f0] grayscale hover:grayscale-0 transition-all duration-300 shadow-sm">
                <span className="font-bold text-base tracking-wide text-[#64748b] whitespace-nowrap">{partner.abbr}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
