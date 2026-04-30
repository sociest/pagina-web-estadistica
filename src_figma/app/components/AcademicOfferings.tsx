import { ArrowRight, BookOpen, GraduationCap, Microscope } from 'lucide-react';

const offerings = [
  {
    icon: BookOpen,
    tag: 'PREGRADO',
    title: 'Licenciatura en Estadística',
    description: 'Formación integral en métodos estadísticos, análisis de datos, probabilidad y muestreo. Desarrolla competencias para la toma de decisiones basada en datos en sectores públicos y privados.',
    linkText: 'Ver Plan de Estudios',
    imageUrl: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aXN0aWNzJTIwbWF0aGVtYXRpY3MlMjB1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzM5NDQyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#00447e',
    bg: 'rgba(255,255,255,1)',
    border: 'rgba(203,213,225,0.50)',
    stats: ['σ = 1.05', 'R² = 0.94', 'n = 380+'],
    features: ['10 semestres', 'Prácticas profesionales', 'Trabajo de grado'],
  },
  {
    icon: GraduationCap,
    tag: 'POSTGRADO',
    title: 'Magíster en Análisis de Datos',
    description: 'Profundización en machine learning, estadística bayesiana, series temporales y ciencia de datos. Ideal para profesionales que buscan especialización avanzada.',
    linkText: 'Ver Maestrías',
    imageUrl: 'https://images.unsplash.com/photo-1659080907111-7c726e435a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXN0ZXJzJTIwZGVncmVlJTIwZ3JhZHVhdGlvbiUyMHByb2Zlc3Npb25hbHMlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzczOTQ0MjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#00447e',
    bg: 'rgba(255,255,255,1)',
    border: 'rgba(203,213,225,0.50)',
    stats: ['β₁ = 0.87', 'R² = 0.96', 'n = 140+'],
    features: ['4 semestres', 'Modalidad presencial/virtual', 'Tesis o proyecto'],
  },
  {
    icon: Microscope,
    tag: 'INVESTIGACIÓN · IETA',
    title: 'Instituto de Estadística y Análisis',
    description: 'El IETA desarrolla investigación científica aplicada en estadística, análisis de datos socioeconómicos y consultoría estadística para organismos públicos y privados de Bolivia.',
    linkText: 'Proyectos Activos',
    imageUrl: 'https://images.unsplash.com/photo-1754304342349-ac409efb67c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMHJlc2VhcmNoJTIwZ3JhcGhzJTIwY2hhcnRzJTIwYWNhZGVtaWN8ZW58MXx8fHwxNzczOTQ0MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#ea580c',
    bg: 'rgba(255,255,255,1)',
    border: 'rgba(203,213,225,0.50)',
    stats: ['χ² = 12.3', 'p < 0.001', 'n = 25+'],
    features: ['Consultoría estadística', 'Publicaciones indexadas', 'Convenios internacionales'],
  },
];

export function AcademicOfferings() {
  return (
    <section className="py-14 px-6 sm:px-12 lg:px-20 bg-[#fcfcfc]" id="academic">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-[2px] w-6 bg-[#00447e] rounded-full" />
            <span className="text-[11px] font-semibold uppercase tracking-[1.1px] text-[#64748b]">Oferta Académica</span>
            <div className="h-[2px] w-6 bg-[#00447e] rounded-full" />
          </div>
          <h2 className="text-[30px] sm:text-[36px] font-bold text-[#1e293b] leading-[54px] mb-3">
            Descubre tu Camino en Estadística
          </h2>
          <p className="text-[16px] text-[#64748b] max-w-[560px] mx-auto leading-[26px]">
            Programas académicos de excelencia para formar los estadísticos y científicos de datos que Bolivia necesita.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.tag}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
                style={{
                  border: `1px solid ${item.border}`,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                }}
              >
                {/* Image with gradient overlay */}
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom, transparent 40%, ${item.color}99 100%)` }}
                  />
                  {/* Tag pill */}
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold text-white"
                    style={{ background: item.color }}
                  >
                    {item.tag}
                  </div>
                  {/* Icon button with glassmorphism */}
                  <div
                    className="absolute bottom-3 right-3 size-[40px] rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                    style={{ 
                      background: 'rgba(255,255,255,0.15)', 
                      backdropFilter: 'blur(8px)', 
                      border: '1px solid rgba(255,255,255,0.3)' 
                    }}
                  >
                    <Icon className="size-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className="relative flex-1 p-6 flex flex-col"
                  style={{ background: `linear-gradient(167.48deg, ${item.bg} 8.128%, white 91.872%)` }}
                >
                  {/* Statistical bg decoration with enhanced curves */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 382 291" preserveAspectRatio="none" fill="none">
                      <path d="M0 220C63.7 220 127.3 167 191 73C254.7 -21 318.3 31 382 220" stroke="#14b8a6" strokeWidth="1.58" />
                      <path d="M0 210C63.7 210 127.3 157 191 63C254.7 -31 318.3 21 382 210" stroke="#14b8a6" strokeWidth="1.16" opacity="0.7" />
                    </svg>
                    {/* Statistical annotations */}
                    <div className="absolute top-2 left-2 font-mono text-[7px] text-[#94a3b8] opacity-45">
                      {item.stats[0]}
                    </div>
                    <div className="absolute top-2 right-2 font-mono text-[7px] text-[#94a3b8] opacity-45 text-right">
                      {item.stats[1]}
                    </div>
                    <div className="absolute bottom-2 right-2 font-mono text-[7px] text-[#94a3b8] opacity-45">
                      {item.stats[2]}
                    </div>
                  </div>

                  <h3 className="relative font-bold text-[18px] text-[#1e293b] mb-3 leading-snug">{item.title}</h3>
                  <p className="relative text-[13px] text-[#475569] leading-relaxed mb-4">{item.description}</p>

                  {/* Features list with bullet points */}
                  <ul className="relative space-y-1.5 mb-5">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[12px] text-[#64748b]">
                        <span className="size-[5px] rounded-full shrink-0" style={{ background: item.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Link with arrow animation */}
                  <a
                    href="#"
                    className="relative mt-auto flex items-center gap-2 text-[13px] font-semibold transition-all group-hover:gap-3"
                    style={{ color: item.color }}
                  >
                    {item.linkText}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}