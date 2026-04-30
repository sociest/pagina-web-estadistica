import { ArrowRight, Sparkles } from 'lucide-react';

export function IETASection() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f1f5f9] relative overflow-hidden">
      {/* Curvas estadísticas de fondo - MÁS VISIBLES */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.10]" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none" fill="none">
          <path d="M0 500C350 500 700 250 1050 200C1200 170 1320 150 1400 500" stroke="#00447e" strokeWidth="2.5" />
          <path d="M0 520C350 520 700 270 1050 220C1200 190 1320 170 1400 520" stroke="#00447e" strokeWidth="2" opacity="0.6" />
          <circle cx="300" cy="300" r="120" stroke="#ea580c" strokeWidth="2" opacity="0.4" fill="none" />
        </svg>
      </div>

      {/* Fórmulas decorativas flotantes - MÁS VISIBLES */}
      <div className="absolute top-24 left-16 text-9xl font-black text-[#00447e] opacity-[0.05] select-none pointer-events-none" aria-hidden="true">
        Σ
      </div>
      <div className="absolute bottom-24 right-16 text-8xl font-black text-[#ea580c] opacity-[0.05] select-none pointer-events-none" aria-hidden="true">
        β
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header con línea azul */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-12 bg-[#00447e]" />
          <span className="text-[11px] font-black text-[#64748b] uppercase tracking-[0.35em]">EX_13</span>
        </div>

        {/* Layout Asimétrico - Título + Foto + Badge */}
        <div className="grid lg:grid-cols-[1fr_1.2fr_300px] gap-10 items-start mb-12">
          {/* Columna 1: Título y Descripción */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
              <span className="text-[#1e293b]">CIENCIA</span><br />
              <span className="text-[#1e293b]">APLICADA</span><br />
              <span className="text-[#00447e]">INSTITUTO</span><br />
              <span className="text-[#00447e]">IETA</span>
            </h2>
            <p className="text-sm text-[#64748b] leading-relaxed font-medium mb-8">
              El Instituto de Estadística Teórica y Aplicada (IETA) es el motor de investigación de nuestra facultad. 
              Desarrollamos modelos de alta precisión para resolver los desafíos más críticos de Bolivia.
            </p>
          </div>

          {/* Columna 2: Foto con tratamiento Official-Archive */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600" 
                alt="Research Team" 
                className="w-full h-[380px] object-cover"
                style={{ filter: 'grayscale(0.7) contrast(1.2)' }}
              />
              {/* Overlay sutil con curva - MÁS VISIBLE */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 600 380" fill="none">
                  <path d="M0 300 Q150 250 300 300 T600 300" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-xl border border-[#e2e8f0]">
              <span className="text-xs font-black text-[#64748b] uppercase tracking-widest">·Research 2</span>
            </div>
          </div>

          {/* Columna 3: Badge R² */}
          <div className="flex flex-col gap-6">
            <div 
              className="bg-[#00447e] rounded-3xl p-10 text-white text-center shadow-2xl relative overflow-hidden"
              style={{ height: '280px' }}
            >
              <div className="absolute inset-0 opacity-[0.15]">
                <svg viewBox="0 0 300 280" fill="none" className="w-full h-full">
                  <path d="M0 140 Q75 80 150 140 T300 140" stroke="white" strokeWidth="2" opacity="0.6" />
                  <path d="M0 160 Q75 100 150 160 T300 160" stroke="white" strokeWidth="1.5" opacity="0.5" />
                  <circle cx="150" cy="140" r="60" stroke="white" strokeWidth="1.5" opacity="0.4" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="text-6xl font-black italic tracking-tighter leading-none mb-4">
                  R² <span className="text-4xl">=</span><br />
                  <span className="text-5xl">0.98</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Poder Predictivo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjetas de Proyectos 2 columnas */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Modelado Multivariante */}
          <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] hover:shadow-lg transition-all group relative overflow-hidden">
            <svg className="absolute top-0 right-0 w-32 h-32 opacity-[0.08]" viewBox="0 0 100 100" fill="none">
              <path d="M0 50 Q25 30 50 50 T100 50" stroke="#00447e" strokeWidth="2" />
            </svg>
            <div className="flex items-start gap-4 relative z-10">
              <div className="size-14 rounded-xl bg-[#00447e]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Sparkles className="text-[#ea580c]" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#1e293b] uppercase tracking-tight mb-2">
                  Modelado Multivariante
                </h3>
                <p className="text-sm text-[#64748b] font-medium leading-relaxed">
                  Análisis de pobreza multidimensional con organismos internacionales.
                </p>
              </div>
            </div>
          </div>

          {/* Ciencia de Datos Pública */}
          <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] hover:shadow-lg transition-all group relative overflow-hidden">
            <svg className="absolute top-0 right-0 w-32 h-32 opacity-[0.08]" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="30" stroke="#ea580c" strokeWidth="2" />
            </svg>
            <div className="flex items-start gap-4 relative z-10">
              <div className="size-14 rounded-xl bg-[#00447e]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Sparkles className="text-[#ea580c]" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#1e293b] uppercase tracking-tight mb-2">
                  Ciencia de Datos Pública
                </h3>
                <p className="text-sm text-[#64748b] font-medium leading-relaxed">
                  Soporte técnico avanzado para el INE y UDAPE.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-start">
          <button className="group flex items-center gap-4 bg-[#001d3d] text-white px-10 py-5 rounded-xl font-black text-sm tracking-widest hover:bg-[#00447e] transition-all uppercase shadow-xl">
            Explorar Investigaciones 
            <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}