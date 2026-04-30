import { useEffect, useRef, useState } from 'react';
import { Users, BookOpen, FlaskConical, TrendingUp } from 'lucide-react';

const kpis = [
  {
    icon: Users,
    value: 380,
    suffix: '+',
    label: 'Estudiantes Matriculados',
    sublabel: 'Gestión 2025',
    color: '#00447e',
    bg: 'rgba(255,255,255,1)',
    border: 'rgba(203,213,225,0.50)',
    stats: ['σ = 1.05', 'R² = 1.00', 'n = 380'],
  },
  {
    icon: BookOpen,
    value: 140,
    suffix: '+',
    label: 'Docentes Investigadores',
    sublabel: 'Con grado académico',
    color: '#00447e',
    bg: 'rgba(255,255,255,1)',
    border: 'rgba(203,213,225,0.50)',
    stats: ['σ = 0.87', 'R² = 0.95', 'n = 140'],
  },
  {
    icon: FlaskConical,
    value: 25,
    suffix: '+',
    label: 'Proyectos de Investigación',
    sublabel: 'En ejecución IETA',
    color: '#ea580c',
    bg: 'rgba(255,255,255,1)',
    border: 'rgba(203,213,225,0.50)',
    stats: ['σ = 0.63', 'p < 0.01', 'n = 25'],
  },
  {
    icon: TrendingUp,
    value: 50,
    suffix: ' años',
    label: 'Años de Excelencia',
    sublabel: 'Formando estadísticos',
    color: '#00447e',
    bg: 'rgba(255,255,255,1)',
    border: 'rgba(203,213,225,0.50)',
    stats: ['μ = 50', 'R² = 0.99', 'n = 5k+'],
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = 16;
          const totalSteps = duration / step;
          const increment = target / totalSteps;
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#f8fafc] relative overflow-hidden">
      {/* Curvas estadísticas de fondo - MÁS VISIBLES */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12]" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 600" preserveAspectRatio="none" fill="none">
          <path d="M0 400C350 400 700 200 1050 150C1200 120 1320 100 1400 400" stroke="#00447e" strokeWidth="2" />
          <path d="M0 420C350 420 700 220 1050 170C1200 140 1320 120 1400 420" stroke="#00447e" strokeWidth="1.5" opacity="0.6" />
          <circle cx="200" cy="300" r="120" stroke="#ea580c" strokeWidth="2" opacity="0.5" fill="none" />
          <circle cx="1100" cy="150" r="80" stroke="#00447e" strokeWidth="2" opacity="0.4" fill="none" />
        </svg>
      </div>

      {/* Fórmulas decorativas flotantes - MÁS VISIBLES */}
      <div className="hidden md:block absolute top-20 right-12 text-6xl md:text-8xl font-black text-[#00447e] opacity-[0.06] select-none pointer-events-none" aria-hidden="true">
        σ²
      </div>
      <div className="hidden md:block absolute bottom-32 left-16 text-5xl md:text-7xl font-black text-[#ea580c] opacity-[0.06] select-none pointer-events-none" aria-hidden="true">
        μ
      </div>

      {/* Header Editorial */}
      <div className="max-w-[1200px] mx-auto mb-10 sm:mb-12 md:mb-16 relative z-10">
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <div className="h-1 w-8 sm:w-12 bg-[#00447e]" />
          <span className="text-[9px] sm:text-[11px] font-black text-[#64748b] uppercase tracking-[0.25em] sm:tracking-[0.35em]">Métricas Institucionales</span>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-3 sm:gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1e293b] leading-none tracking-tight">
            Resultados de Excelencia<br />Académica
          </h2>
          <div className="text-xs sm:text-sm text-[#64748b] uppercase tracking-wider sm:tracking-widest font-bold">
            Gestión Educativa<br />
            <span className="text-[#ea580c]">Carrera de Estadística 2026</span>
          </div>
        </div>
      </div>

      {/* KPIs Grid - Responsive Layout */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative z-10">
        {/* KPI 1 - Empleabilidad */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 border border-[#e2e8f0] shadow-sm hover:shadow-lg transition-all group relative overflow-hidden">
          {/* Mini curva de fondo - MÁS VISIBLE */}
          <svg className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.12]" viewBox="0 0 100 100" fill="none">
            <path d="M0 50 Q25 30 50 50 T100 50" stroke="#00447e" strokeWidth="2" />
          </svg>
          <div className="text-5xl sm:text-6xl font-black tracking-tighter mb-2 sm:mb-3 text-[#00447e] relative z-10">
            92<span className="text-3xl sm:text-4xl">%</span>
          </div>
          <h3 className="text-sm sm:text-base font-black text-[#1e293b] uppercase tracking-tight mb-1.5 sm:mb-2 leading-tight">
            Empleabilidad<br />Directa
          </h3>
          <p className="text-[10px] sm:text-xs text-[#64748b] font-bold uppercase tracking-wider sm:tracking-widest">
            Egresados en puestos senior
          </p>
        </div>

        {/* KPI 2 - Ratio */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 border border-[#e2e8f0] shadow-sm hover:shadow-lg transition-all group relative overflow-hidden">
          <svg className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.12]" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="30" stroke="#ea580c" strokeWidth="2" />
          </svg>
          <div className="text-5xl sm:text-6xl font-black tracking-tighter mb-2 sm:mb-3 text-[#ea580c] relative z-10">
            15<span className="text-3xl sm:text-4xl">:1</span>
          </div>
          <h3 className="text-sm sm:text-base font-black text-[#1e293b] uppercase tracking-tight mb-1.5 sm:mb-2 leading-tight">
            Ratio<br />Estudiante/Docente
          </h3>
          <p className="text-[10px] sm:text-xs text-[#64748b] font-bold uppercase tracking-wider sm:tracking-widest">
            Atención personalizada
          </p>
        </div>

        {/* KPI 3 - Investigaciones */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 border border-[#e2e8f0] shadow-sm hover:shadow-lg transition-all group relative overflow-hidden">
          <svg className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.12]" viewBox="0 0 100 100" fill="none">
            <path d="M20 80 L50 20 L80 80" stroke="#00447e" strokeWidth="2" fill="none" />
          </svg>
          <div className="text-5xl sm:text-6xl font-black tracking-tighter mb-2 sm:mb-3 text-[#00447e] relative z-10">
            25<span className="text-3xl sm:text-4xl">+</span>
          </div>
          <h3 className="text-sm sm:text-base font-black text-[#1e293b] uppercase tracking-tight mb-1.5 sm:mb-2 leading-tight">
            Investigaciones<br />IETA
          </h3>
          <p className="text-[10px] sm:text-xs text-[#64748b] font-bold uppercase tracking-wider sm:tracking-widest">
            Proyectos de impacto nacional
          </p>
        </div>

        {/* KPI 4 - Acreditación */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 border border-[#e2e8f0] shadow-sm hover:shadow-lg transition-all group relative overflow-hidden">
          <svg className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.12]" viewBox="0 0 100 100" fill="none">
            <path d="M30 70 L50 30 L70 70 Z" stroke="#ea580c" strokeWidth="2" fill="none" />
          </svg>
          <div className="text-5xl sm:text-6xl font-black tracking-tighter mb-2 sm:mb-3 text-[#ea580c] relative z-10">
            A<span className="text-3xl sm:text-4xl">+</span>
          </div>
          <h3 className="text-sm sm:text-base font-black text-[#1e293b] uppercase tracking-tight mb-1.5 sm:mb-2 leading-tight">
            Acreditación<br />CEUB
          </h3>
          <p className="text-[10px] sm:text-xs text-[#64748b] font-bold uppercase tracking-wider sm:tracking-widest">
            Excelencia Internacional
          </p>
        </div>
      </div>
    </section>
  );
}