import { GraduationCap, User, Shield, Building2 } from 'lucide-react';
import { PageHero } from '../../components/institucional/PageHero';
import { PageCard } from '../../components/institucional/PageCard';

export default function Autoridades() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] to-white">
      {/* Hero Section */}
      <PageHero
        title="Autoridades de la Carrera"
        description="Liderazgo académico y administrativo comprometido con la excelencia educativa y la innovación tecnológica en estadística y ciencia de datos."
        variant="primary"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-20 -mt-12">
        
        {/* Director de Carrera - Editorial Style */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-16 bg-[#00447e]" />
            <span className="text-[11px] font-black text-[#64748b] uppercase tracking-[0.35em]">Dirección Ejecutiva</span>
          </div>

          <div className="relative bg-white rounded-3xl shadow-xl p-12 border border-[#e2e8f0] overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
              <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 800 400" preserveAspectRatio="none" fill="none">
                <path d="M0 310C133 310 267 250 400 140C533 30 667 90 800 310" stroke="#14b8a6" strokeWidth="2" />
                <path d="M0 295C133 295 267 235 400 125C533 15 667 75 800 295" stroke="#14b8a6" strokeWidth="1.5" opacity="0.7" />
              </svg>
              <div className="absolute top-6 right-8 text-8xl font-bold opacity-[0.03] text-[#94a3b8] font-mono">μ</div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
              <div className="flex justify-center lg:justify-start">
                <div className="size-72 rounded-2xl bg-gradient-to-br from-[#00447e] to-[#003a6b] flex items-center justify-center text-white shadow-2xl border-4 border-white">
                  <div className="text-center">
                    <GraduationCap size={80} className="mx-auto mb-4" />
                    <div className="text-9xl font-black tracking-tighter">DR</div>
                  </div>
                </div>
              </div>

              <div>
                <span className="inline-block px-4 py-2 bg-[#00447e]/10 text-[#00447e] rounded-xl text-xs font-black mb-6 uppercase tracking-widest border border-[#00447e]/20">
                  Director de Carrera
                </span>
                <h2 className="text-5xl font-black text-[#1e293b] mb-6 leading-tight tracking-tight">
                  Dr. [Nombre del Director]
                </h2>
                <p className="text-lg text-[#64748b] leading-relaxed mb-8 font-medium">
                  Líder académico con amplia trayectoria en <strong className="text-[#1e293b]">investigación estadística</strong> y 
                  <strong className="text-[#1e293b]"> gestión universitaria</strong>. Su gestión se enfoca en la 
                  <span className="text-[#00447e] font-semibold"> modernización tecnológica</span> y la 
                  <span className="text-[#00447e] font-semibold"> internacionalización</span> de la carrera.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#00447e]/10 text-[#00447e] rounded-xl text-xs font-black shadow-sm border border-[#00447e]/20 uppercase tracking-wider">PhD Estadística</span>
                  <span className="px-4 py-2 bg-[#ea580c]/10 text-[#ea580c] rounded-xl text-xs font-black shadow-sm border border-[#ea580c]/20 uppercase tracking-wider">Investigador</span>
                  <span className="px-4 py-2 bg-[#00447e]/10 text-[#00447e] rounded-xl text-xs font-black shadow-sm border border-[#00447e]/20 uppercase tracking-wider">Líder de Innovación</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gestión Académica - Compact Style */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-16 bg-[#ea580c]" />
            <span className="text-[11px] font-black text-[#64748b] uppercase tracking-[0.35em]">Gestión Académica</span>
          </div>

          <PageCard variant="primary" icon={<User size={32} />} decorator="σ" className="mb-10">
            <h3 className="text-3xl font-black text-[#1e293b] mb-6 tracking-tight">Coordinación de Área Académica</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-black text-[#00447e] mb-3 text-lg uppercase tracking-tight">Docente Responsable</h4>
                <p className="text-[15px] text-[#64748b] leading-relaxed">
                  Lic. [Nombre], MSc. en Estadística Aplicada — Coordina el desarrollo curricular y los procesos de 
                  <span className="text-[#00447e] font-semibold"> evaluación docente</span>.
                </p>
              </div>
              <div>
                <h4 className="font-black text-[#ea580c] mb-3 text-lg uppercase tracking-tight">Funciones Principales</h4>
                <ul className="space-y-2 text-[14px] text-[#64748b]">
                  <li className="flex items-start gap-2"><span className="text-[#ea580c] font-bold">•</span> Gestión del plan de estudios</li>
                  <li className="flex items-start gap-2"><span className="text-[#ea580c] font-bold">•</span> Supervisión de laboratorios</li>
                  <li className="flex items-start gap-2"><span className="text-[#ea580c] font-bold">•</span> Vinculación internacional</li>
                </ul>
              </div>
            </div>
          </PageCard>
        </div>

        {/* Honorable Consejo de Carrera */}
        <div 
          className="relative rounded-2xl shadow-lg p-10 mb-10 overflow-hidden text-white"
          style={{ background: 'linear-gradient(135deg, #1a6b1a 0%, #145014 100%)' }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <svg className="absolute inset-0 w-full h-full opacity-[0.10]" viewBox="0 0 800 500" preserveAspectRatio="none" fill="none">
              <path d="M0 380C133 380 267 320 400 210C533 100 667 160 800 380" stroke="white" strokeWidth="2.5" />
              <path d="M0 365C133 365 267 305 400 195C533 85 667 145 800 365" stroke="white" strokeWidth="1.8" opacity="0.7" />
            </svg>
            <div className="absolute top-6 right-10 text-9xl font-bold opacity-[0.08]">HCC</div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Shield className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold">Honorable Consejo de Carrera (HCC)</h2>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 mb-6 border border-white/25 shadow-lg">
              <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Users size={24} />
                Cogobierno Universitario
              </h4>
              <p className="leading-relaxed mb-4 text-white/95">
                El HCC es el pilar del <strong>Cogobierno Universitario</strong>. Aquí se aprueban resoluciones, 
                se definen calendarios académicos y se gestionan becas y programas estudiantiles.
              </p>
              <div className="bg-white/15 rounded-lg p-4 border-l-4 border-white shadow-sm">
                <p className="font-semibold text-white/95">
                  Está compuesto por <span className="text-yellow-300">delegados docentes y estudiantiles</span> elegidos 
                  democráticamente, asegurando que la voz de los estudiantes sea parte activa de la dirección de la carrera.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-5 border border-white/25 shadow-md">
                <h5 className="font-bold mb-3 text-yellow-300 text-lg">Funciones Principales</h5>
                <ul className="space-y-2 text-sm text-white/95">
                  <li>• Aprobación de resoluciones académicas</li>
                  <li>• Definición de calendarios y horarios</li>
                  <li>• Gestión de becas y beneficios estudiantiles</li>
                  <li>• Seguimiento a planes de mejora</li>
                </ul>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-5 border border-white/25 shadow-md">
                <h5 className="font-bold mb-3 text-yellow-300 text-lg">Composición</h5>
                <ul className="space-y-2 text-sm text-white/95">
                  <li>• Delegados docentes titulares</li>
                  <li>• Delegados estudiantiles elegidos</li>
                  <li>• Director de Carrera (presidente)</li>
                  <li>• Secretaria Técnica</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Organigrama Visual */}
        <div 
          className="relative rounded-2xl shadow-lg p-10 overflow-hidden"
          style={{
            background: 'linear-gradient(167.48deg, rgba(0,165,168,0.09) 8.128%, rgba(255,255,255,0.9) 91.872%)',
            border: '1px solid rgba(0,165,168,0.22)',
          }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 800 600" preserveAspectRatio="none" fill="none">
              <path d="M0 460C133 460 267 400 400 290C533 180 667 240 800 460" stroke="#00a5a8" strokeWidth="2" />
            </svg>
          </div>

          <h2 className="relative z-10 text-3xl font-bold text-[#1e293b] mb-10 text-center">Estructura Organizacional</h2>
          <div className="relative z-10 space-y-6">
            {/* Nivel 1: Dirección */}
            <div className="flex justify-center">
              <div 
                className="text-white rounded-xl p-6 shadow-xl max-w-md text-center"
                style={{ background: 'linear-gradient(135deg, #00a5a8, #008b8d)' }}
              >
                <GraduationCap size={32} className="mx-auto mb-2" />
                <h4 className="font-bold text-lg">Dirección de Carrera</h4>
                <p className="text-sm text-white/90">Ph.D. Juan Carlos Flores López</p>
              </div>
            </div>
            {/* Nivel 2: HCC y Gestión */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div 
                className="text-white rounded-xl p-6 shadow-lg text-center"
                style={{ background: 'linear-gradient(135deg, #1a6b1a, #145014)' }}
              >
                <Shield size={28} className="mx-auto mb-2" />
                <h4 className="font-bold text-lg">HCC</h4>
                <p className="text-sm text-white/90">Órgano de Cogobierno</p>
              </div>
              <div 
                className="text-white rounded-xl p-6 shadow-lg text-center"
                style={{ background: 'linear-gradient(135deg, #00a5a8, #008b8d)' }}
              >
                <User size={28} className="mx-auto mb-2" />
                <h4 className="font-bold text-lg">Gestión Académica</h4>
                <p className="text-sm text-white/90">M.Sc. Lucy Gabriela Cuarita Ajno</p>
              </div>
            </div>
            {/* Nivel 3: Áreas operativas */}
            <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                { name: 'Kárdex Académico', resp: 'Sr. René Quelca', color: 'linear-gradient(135deg, #475569, #334155)' },
                { name: 'Secretaría', resp: 'Sra. Griselda Andrade', color: 'linear-gradient(135deg, #475569, #334155)' },
                { name: 'Soporte Técnico', resp: 'Sr. Alfredo Candia', color: 'linear-gradient(135deg, #475569, #334155)' }
              ].map((area, idx) => (
                <div 
                  key={idx} 
                  className="text-white rounded-xl p-4 shadow-md text-center"
                  style={{ background: area.color }}
                >
                  <h5 className="font-bold text-sm mb-1">{area.name}</h5>
                  <p className="text-xs text-white/80">{area.resp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}