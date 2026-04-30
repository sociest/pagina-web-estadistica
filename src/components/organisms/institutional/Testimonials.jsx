import React from 'react';
import { Building2, Quote } from 'lucide-react';

/**
 * Testimonios de egresados en formato card-grid.
 *
 * @param {Object} props - Component props.
 * @param {Array<Object>} [props.items=[]] - Lista de testimonios.
 * @returns {JSX.Element} Testimonials section.
 */
export const Testimonials = ({ items = [] }) => (
  <section className="py-14 px-6 sm:px-12 lg:px-20 bg-[#f1f5f9] relative overflow-hidden">
    <div className="max-w-[1200px] mx-auto relative z-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-3">
          <div className="h-[2px] w-6 bg-[#6b46c1] rounded-full" />
          <span className="text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-[#6b46c1]">Casos de Éxito</span>
          <div className="h-[2px] w-6 bg-[#6b46c1] rounded-full" />
        </div>
        <h2 className="text-[28px] sm:text-[34px] font-bold text-[#1e293b] leading-[48px] mb-2">Nuestros Egresados</h2>
        <p className="text-base text-[#64748b] max-w-[480px] mx-auto leading-[24px]">
          Profesionales que están transformando Bolivia con el poder de la estadística y los datos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item) => (
          <article
            key={item.name}
            className="relative rounded-3xl p-7 sm:p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            style={{
              background: `linear-gradient(167.48deg, ${item.bg ?? 'rgba(255,255,255,1)'} 8.128%, rgba(255,255,255,0.95) 91.872%)`,
              border: `1px solid ${item.border ?? 'rgba(203,213,225,0.50)'}`,
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
              <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 300 280" preserveAspectRatio="none" fill="none">
                <path d="M0 215C50 215 100 165 150 75C200 -15 250 35 300 215" stroke="#16a34a" strokeWidth="1.5" />
              </svg>
              <div className="absolute bottom-3 right-3 font-mono text-[7px] text-[#94a3b8] opacity-45">{item.stats}</div>
            </div>

            <div className="relative size-[44px] rounded-xl flex items-center justify-center shadow-sm" style={{ background: `${item.color}20` }}>
              <Quote className="size-5" style={{ color: item.color }} />
            </div>

            <p className="relative text-base text-[#475569] leading-relaxed flex-1 italic">"{item.quote}"</p>

            <div className="relative flex items-center gap-3 pt-3 border-t" style={{ borderColor: `${item.color}30` }}>
              <div className="size-[44px] rounded-full flex items-center justify-center font-bold text-base text-white shrink-0 shadow-md" style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}bb)` }}>
                {item.avatar}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-lg text-[#1e293b] leading-tight mb-0.5">{item.name}</p>
                <p className="text-base font-semibold leading-snug mb-1" style={{ color: item.color }}>{item.role}</p>
                <div className="flex items-start gap-1.5 text-xs text-[#94a3b8] mt-1">
                  <Building2 className="size-3.5 shrink-0 mt-[2px]" />
                  <span className="leading-snug">{item.company}</span>
                </div>
              </div>
            </div>

            <div className="relative self-start px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: `${item.color}18`, color: item.color }}>
              {item.year}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
