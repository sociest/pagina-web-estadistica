import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Formando Científicos de Datos para el Futuro',
    subtitle: 'PREGRADO · ESTADÍSTICA UMSA',
    description: 'Prepárate en análisis estadístico, modelado predictivo y ciencia de datos con los mejores docentes investigadores de Bolivia.',
    buttonText: 'Conoce la Carrera',
    imageUrl: 'https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGRhdGElMjBzY2llbmNlJTIwY29tcHV0ZXIlMjBsYWIlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3Mzk0NDIzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    accent: '#00447e',
    tag: '🎓 CARRERA DE PREGRADO',
    stats: ['σ = 1.05', 'R² = 0.94', 'n = 380+'],
  },
  {
    title: 'Participa en el Censo Universitario 2025',
    subtitle: 'AVISO IMPORTANTE',
    description: 'Comunicado para estudiantes, docentes y personal administrativo. Participación obligatoria del 20 al 27 de marzo de 2025.',
    buttonText: 'Llenar Formulario',
    imageUrl: 'https://images.unsplash.com/photo-1673656866903-f0c9af5d5605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2Vuc3VzJTIwc3VydmV5JTIwc3R1ZGVudHMlMjBCb2xpdmlhfGVufDF8fHx8MTc3Mzk0NDIzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    accent: '#ea580c',
    tag: '📋 AVISO INSTITUCIONAL',
    stats: ['μ = 2025', 'N = 5420', 'p < 0.001'],
  },
  {
    title: 'Magíster en Análisis de Datos',
    subtitle: 'POSTGRADO · INSCRIPCIONES ABIERTAS',
    description: 'Formación avanzada en machine learning, estadística bayesiana y big data. Clases presenciales y en línea para profesionales.',
    buttonText: 'Inscripciones Abiertas',
    imageUrl: 'https://images.unsplash.com/photo-1659080907111-7c726e435a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXN0ZXJzJTIwZGVncmVlJTIwZ3JhZHVhdGlvbiUyMHByb2Zlc3Npb25hbHMlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzczOTQ0MjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    accent: '#00447e',
    tag: '📊 POSTGRADO 2025',
    stats: ['β₁ = 0.87', 'R² = 0.96', 'n = 140+'],
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const go = (idx: number) => {
    clearTimeout(timerRef.current);
    setCurrent(idx);
  };

  const next = () => go((current + 1) % slides.length);
  const prev = () => go((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearTimeout(timerRef.current);
  }, [current]);

  const slide = slides[current];

  return (
    <div className="relative w-full overflow-hidden bg-[#f1f5f9]" style={{ height: 'clamp(420px, 55vw, 640px)' }}>
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img 
            src={s.imageUrl} 
            alt={s.title} 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          {/* Enhanced overlay gradient */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)' }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-[640px] text-white">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-bold mb-4 backdrop-blur-sm shadow-md"
            style={{ background: slide.accent }}
          >
            {slide.tag}
          </div>
          <h1
            className="text-[32px] sm:text-[44px] md:text-[52px] leading-[1.1] font-bold mb-4"
          >
            {slide.title}
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-100 mb-8 max-w-[500px]">
            {slide.description}
          </p>
          <div className="flex gap-4 items-center">
            <button
              className="px-8 py-3.5 rounded-xl font-bold text-[15px] text-white shadow-lg transition-transform hover:scale-105"
              style={{ background: slide.accent }}
            >
              {slide.buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 size-[48px] rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
      >
        <ChevronLeft className="size-6 text-white" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 size-[48px] rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
      >
        <ChevronRight className="size-6 text-white" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              background: i === current ? 'white' : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
