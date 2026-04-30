import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

/**
 * Sección institucional IETA con foco de investigación.
 *
 * @param {Object} props - Component props.
 * @param {Object} [props.content] - Datos de la sección.
 * @returns {JSX.Element} IETA section.
 */
export const IETASection = ({
  content = {
    eyebrow: 'EX_13',
    title: ['CIENCIA', 'APLICADA', 'INSTITUTO', 'IETA'],
    description:
      'El Instituto de Estadística Teórica y Aplicada (IETA) es el motor de investigación de nuestra facultad. Desarrollamos modelos de alta precisión para resolver desafíos críticos de Bolivia.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600',
    badge: { label: 'R²', value: '0.98', subtitle: 'Poder Predictivo' },
    projects: [
      {
        title: 'Modelado Multivariante',
        description: 'Análisis de pobreza multidimensional con organismos internacionales.',
      },
      {
        title: 'Ciencia de Datos Pública',
        description: 'Soporte técnico avanzado para el INE y UDAPE.',
      },
    ],
    ctaLabel: 'Explorar Investigaciones',
    ctaHref: '#',
  },
}) => (
  <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f1f5f9] relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none opacity-[0.10]" aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none" fill="none">
        <path d="M0 500C350 500 700 250 1050 200C1200 170 1320 150 1400 500" stroke="#00447e" strokeWidth="2.5" />
        <path d="M0 520C350 520 700 270 1050 220C1200 190 1320 170 1400 520" stroke="#00447e" strokeWidth="2" opacity="0.6" />
      </svg>
    </div>

    <div className="max-w-[1200px] mx-auto relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-1 w-12 bg-[#00447e]" />
        <span className="text-base sm:text-base md:text-lg font-black text-[#64748b] uppercase tracking-[0.35em]">{content.eyebrow}</span>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.2fr_300px] gap-10 items-start mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6 text-[#1e293b]">
            {content.title?.map((line, index) => (
              <React.Fragment key={line}>
                <span className={index >= 2 ? 'text-[#00447e]' : undefined}>{line}</span>
                <br />
              </React.Fragment>
            ))}
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed font-medium mb-8">{content.description}</p>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img src={content.imageUrl} alt="Equipo IETA" className="w-full h-[380px] object-cover img-official-archive" />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-xl border border-[#e2e8f0]">
            <span className="text-base sm:text-base md:text-lg font-black text-[#64748b] uppercase tracking-widest">·Research 2</span>
          </div>
        </div>

        <div className="bg-[#00447e] rounded-3xl p-10 text-white text-center shadow-2xl relative overflow-hidden" style={{ height: '280px' }}>
          <div className="absolute inset-0 opacity-[0.15]">
            <svg viewBox="0 0 300 280" fill="none" className="w-full h-full">
              <path d="M0 140 Q75 80 150 140 T300 140" stroke="white" strokeWidth="2" opacity="0.6" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <div className="text-6xl font-black italic tracking-tighter leading-none mb-4">
              {content.badge?.label} <span className="text-4xl">=</span>
              <br />
              <span className="text-5xl">{content.badge?.value}</span>
            </div>
            <p className="text-base sm:text-base md:text-lg font-bold uppercase tracking-widest opacity-80">{content.badge?.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {content.projects?.map((project) => (
          <article key={project.title} className="bg-white rounded-2xl p-8 border border-[#e2e8f0] hover:shadow-lg transition-all group relative overflow-hidden">
            <svg className="absolute top-0 right-0 w-32 h-32 opacity-[0.08]" viewBox="0 0 100 100" fill="none">
              <path d="M0 50 Q25 30 50 50 T100 50" stroke="#00447e" strokeWidth="2" />
            </svg>
            <div className="flex items-start gap-4 relative z-10">
              <div className="size-14 rounded-xl bg-[#00447e]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Sparkles className="text-[#ea580c]" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#1e293b] uppercase tracking-tight mb-2">{project.title}</h3>
                <p className="text-base text-[#64748b] font-medium leading-relaxed">{project.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <a href={content.ctaHref} className="group inline-flex items-center gap-4 bg-[#001d3d] text-white px-10 py-5 rounded-xl font-black text-sm tracking-widest hover:bg-[#00447e] transition-all uppercase shadow-xl">
        {content.ctaLabel}
        <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
      </a>
    </div>
  </section>
);
