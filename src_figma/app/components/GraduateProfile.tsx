import { BarChart3, Database, TrendingUp, FlaskConical } from 'lucide-react';

export function GraduateProfile() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#fefefe] relative overflow-hidden">
      {/* Curvas estadísticas de fondo - MÁS VISIBLES */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.10]" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none" fill="none">
          <path d="M0 600C350 600 700 300 1050 250C1200 220 1320 200 1400 600" stroke="#00447e" strokeWidth="2.5" />
          <path d="M0 620C350 620 700 320 1050 270C1200 240 1320 220 1400 620" stroke="#00447e" strokeWidth="2" opacity="0.6" />
          <circle cx="1000" cy="200" r="150" stroke="#ea580c" strokeWidth="2" opacity="0.4" fill="none" />
        </svg>
      </div>

      {/* Fórmulas decorativas flotantes - MÁS VISIBLES */}
      <div className="absolute top-32 right-20 text-9xl font-black text-[#ea580c] opacity-[0.05] select-none pointer-events-none" aria-hidden="true">
        R²
      </div>
      <div className="absolute bottom-20 left-12 text-8xl font-black text-[#00447e] opacity-[0.05] select-none pointer-events-none" aria-hidden="true">
        n
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header con línea naranja */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-12 bg-[#ea580c]" />
          <span className="text-[11px] font-black text-[#ea580c] uppercase tracking-[0.35em]">Propósito Académico</span>
        </div>

        {/* Layout Asimétrico - Badge + Descripción */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start mb-16">
          {/* Badge Grande 92% */}
          <div className="flex justify-center lg:justify-start">
            <div 
              className="bg-[#00447e] rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden"
              style={{ width: '280px', height: '220px' }}
            >
              <div className="absolute inset-0 opacity-[0.15]">
                <svg viewBox="0 0 280 220" fill="none" className="w-full h-full">
                  <circle cx="140" cy="110" r="80" stroke="white" strokeWidth="2" opacity="0.5" />
                  <circle cx="140" cy="110" r="60" stroke="white" strokeWidth="1.5" opacity="0.4" />
                  <path d="M40 110 Q90 70 140 110 T240 110" stroke="white" strokeWidth="1.5" opacity="0.4" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="text-7xl font-black tracking-tighter leading-none mb-2">92<span className="text-5xl">%</span></div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Tasa de Empleo Directo</p>
              </div>
            </div>
          </div>

          {/* Descripción del Perfil */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e293b] leading-tight tracking-tight mb-6">
              PERFIL DEL<br />
              <span className="text-[#00447e]">EGRESADO</span>
            </h2>
            <p className="text-base text-[#64748b] leading-relaxed font-medium">
              Nuestros profesionales dominan el lenguaje de los datos. Están capacitados para liderar la 
              <strong className="text-[#1e293b]"> transformación digital</strong> mediante el 
              <strong className="text-[#00447e]"> modelado matemático riguroso</strong>.
            </p>
          </div>
        </div>

        {/* Grid 2x2 - Perfiles Profesionales */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Analista de Riesgos */}
          <div className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0] hover:shadow-lg transition-all group relative overflow-hidden">
            {/* Mini curva - MÁS VISIBLE */}
            <svg className="absolute top-0 right-0 w-32 h-32 opacity-[0.10]" viewBox="0 0 100 100" fill="none">
              <path d="M0 50 Q25 30 50 50 T100 50" stroke="#ea580c" strokeWidth="2" />
            </svg>
            <div className="flex items-start gap-4 relative z-10">
              <div className="size-14 rounded-xl bg-white shadow-md flex items-center justify-center text-[#ea580c] shrink-0 group-hover:scale-110 transition-transform">
                <BarChart3 size={28} />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#1e293b] uppercase tracking-tight mb-2">
                  Analista de Riesgos
                </h3>
                <p className="text-sm text-[#64748b] font-semibold uppercase tracking-wider mb-1">
                  Sectores Bancarios y Seguros
                </p>
              </div>
            </div>
          </div>

          {/* Data Scientist */}
          <div className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0] hover:shadow-lg transition-all group relative overflow-hidden">
            <svg className="absolute top-0 right-0 w-32 h-32 opacity-[0.10]" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="30" stroke="#00447e" strokeWidth="2" />
            </svg>
            <div className="flex items-start gap-4 relative z-10">
              <div className="size-14 rounded-xl bg-white shadow-md flex items-center justify-center text-[#ea580c] shrink-0 group-hover:scale-110 transition-transform">
                <Database size={28} />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#1e293b] uppercase tracking-tight mb-2">
                  Data Scientist
                </h3>
                <p className="text-sm text-[#64748b] font-semibold uppercase tracking-wider mb-1">
                  IA y Machine Learning Avanzado
                </p>
              </div>
            </div>
          </div>

          {/* Consultor Público */}
          <div className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0] hover:shadow-lg transition-all group relative overflow-hidden">
            <svg className="absolute top-0 right-0 w-32 h-32 opacity-[0.10]" viewBox="0 0 100 100" fill="none">
              <path d="M20 80 L50 20 L80 80" stroke="#00447e" strokeWidth="2" fill="none" />
            </svg>
            <div className="flex items-start gap-4 relative z-10">
              <div className="size-14 rounded-xl bg-white shadow-md flex items-center justify-center text-[#ea580c] shrink-0 group-hover:scale-110 transition-transform">
                <TrendingUp size={28} />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#1e293b] uppercase tracking-tight mb-2">
                  Consultor Público
                </h3>
                <p className="text-sm text-[#64748b] font-semibold uppercase tracking-wider mb-1">
                  Políticas Basadas en Evidencia
                </p>
              </div>
            </div>
          </div>

          {/* Investigador */}
          <div className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0] hover:shadow-lg transition-all group relative overflow-hidden">
            <svg className="absolute top-0 right-0 w-32 h-32 opacity-[0.10]" viewBox="0 0 100 100" fill="none">
              <rect x="30" y="30" width="40" height="40" stroke="#00447e" strokeWidth="2" fill="none" />
            </svg>
            <div className="flex items-start gap-4 relative z-10">
              <div className="size-14 rounded-xl bg-white shadow-md flex items-center justify-center text-[#ea580c] shrink-0 group-hover:scale-110 transition-transform">
                <FlaskConical size={28} />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#1e293b] uppercase tracking-tight mb-2">
                  Investigador
                </h3>
                <p className="text-sm text-[#64748b] font-semibold uppercase tracking-wider mb-1">
                  Desarrollo de Nuevas Metodologías
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}