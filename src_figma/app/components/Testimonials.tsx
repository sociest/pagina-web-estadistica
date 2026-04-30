import { Quote, Building2 } from 'lucide-react';
import { StatisticalAnnotations, MicroDataContext, InstitutionalWatermark } from './StatisticalAnnotations';

const testimonials = [
  {
    name: 'María Alejandra Quispe',
    role: 'Analista de Datos Senior',
    company: 'Banco Central de Bolivia',
    quote: 'La formación que recibí en la Carrera de Estadística me dio las herramientas para liderar equipos de análisis en el sector financiero boliviano. La base metodológica es incomparable.',
    avatar: 'MA',
    year: 'Egresada 2018',
    color: '#00447e',
    bg: 'rgba(255,255,255,1)',
    border: 'rgba(203,213,225,0.50)',
    stats: 'β₁ = 0.92 · R² = 0.96',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
  },
  {
    name: 'Carlos Andrés Mamani',
    role: 'Director de Estadísticas',
    company: 'INE Bolivia',
    quote: 'Desde la carrera, aplico diariamente técnicas de muestreo y estimación que aprendí en los laboratorios del IETA. La investigación aplicada nos preparó para los retos reales del país.',
    avatar: 'CA',
    year: 'Egresado 2015',
    color: '#00447e',
    bg: 'rgba(255,255,255,1)',
    border: 'rgba(203,213,225,0.50)',
    stats: 'σ = 0.15 · n = 1,200',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    name: 'Ana Patricia García',
    role: 'Consultora en Data Science',
    company: 'PNUD Bolivia',
    quote: 'El pensamiento analítico y estadístico que desarrollé en la UMSA me permitió trabajar en proyectos de desarrollo sostenible para organismos internacionales. Estoy muy orgullosa de mi carrera.',
    avatar: 'AP',
    year: 'Egresada 2020',
    color: '#ea580c',
    bg: 'rgba(255,255,255,1)',
    border: 'rgba(203,213,225,0.50)',
    stats: 'μ = 8.9 · IC 95%',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  },
  {
    name: 'Roberto Daniel Luna',
    role: 'Investigador Principal',
    company: 'UDAPE',
    quote: 'El IETA me ofreció la oportunidad de participar en investigaciones publicadas internacionalmente. La carrera no solo forma profesionales, forma científicos comprometidos con Bolivia.',
    avatar: 'RL',
    year: 'Egresado 2012',
    color: '#00447e',
    bg: 'rgba(255,255,255,1)',
    border: 'rgba(203,213,225,0.50)',
    stats: 'χ² = 18.4 · p<0.001',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
  },
];

export function Testimonials() {
  return (
    <section className="py-14 px-6 sm:px-12 lg:px-20 bg-[#f1f5f9] relative overflow-hidden">
      {/* Marca de agua institucional */}
      <InstitutionalWatermark text="EGRESADOS UMSA" opacity={0.02} />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-[2px] w-6 bg-[#6b46c1] rounded-full" />
            <span className="text-[11px] font-semibold uppercase tracking-[1.1px] text-[#6b46c1]">Casos de Éxito</span>
            <div className="h-[2px] w-6 bg-[#6b46c1] rounded-full" />
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-bold text-[#1e293b] leading-[48px] mb-2">Nuestros Egresados</h2>
          <p className="text-[15px] text-[#64748b] max-w-[480px] mx-auto leading-[24px]">
            Profesionales que están transformando Bolivia con el poder de la estadística y los datos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
              style={{
                background: `linear-gradient(167.48deg, ${t.bg} 8.128%, rgba(255,255,255,0.95) 91.872%)`,
                border: `1px solid ${t.border}`,
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              {/* Statistical bg decoration with enhanced curves */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 300 280" preserveAspectRatio="none" fill="none">
                  <path d="M0 215C50 215 100 165 150 75C200 -15 250 35 300 215" stroke="#16a34a" strokeWidth="1.5" />
                  <path d="M0 200C50 200 100 150 150 60C200 -30 250 20 300 200" stroke="#16a34a" strokeWidth="1.1" opacity="0.7" />
                </svg>
                <div className="absolute bottom-3 right-3 font-mono text-[7px] text-[#94a3b8] opacity-45">
                  {t.stats}
                </div>
              </div>

              {/* Quote icon with enhanced styling */}
              <div
                className="relative size-[44px] rounded-xl flex items-center justify-center shadow-sm"
                style={{ background: `${t.color}20` }}
              >
                <Quote className="size-5" style={{ color: t.color }} />
              </div>

              {/* Quote text */}
              <p className="relative text-[13px] text-[#475569] leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>

              {/* Author info */}
              <div className="relative flex items-center gap-3 pt-3 border-t" style={{ borderColor: `${t.color}30` }}>
                <div
                  className="size-[44px] rounded-full flex items-center justify-center font-bold text-[14px] text-white shrink-0 shadow-md"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}bb)` }}
                >
                  {t.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-[13px] text-[#1e293b] leading-tight truncate">{t.name}</p>
                  <p className="text-[11px] font-semibold truncate leading-[16px]" style={{ color: t.color }}>{t.role}</p>
                  <div className="flex items-center gap-1 text-[10px] text-[#94a3b8] mt-0.5">
                    <Building2 className="size-3 shrink-0" />
                    <span className="truncate">{t.company}</span>
                  </div>
                </div>
              </div>

              {/* Year badge */}
              <div
                className="relative self-start px-2.5 py-1 rounded-full text-[10px] font-bold"
                style={{ background: `${t.color}18`, color: t.color }}
              >
                {t.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}