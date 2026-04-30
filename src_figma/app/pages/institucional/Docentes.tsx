import { BookOpen, Users } from 'lucide-react';
import { PageHero } from '../../components/institucional/PageHero';
import { PageCard } from '../../components/institucional/PageCard';

export default function Docentes() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] to-white">
      {/* Hero Section */}
      <PageHero
        title="Cuerpo Docente"
        description="Profesionales altamente calificados con formación de postgrado que garantizan educación de nivel internacional en estadística y ciencia de datos."
        variant="secondary"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-20 -mt-12">
        
        {/* KPIs Institucionales - Editorial Style */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-16 bg-[#00447e]" />
            <span className="text-[11px] font-black text-[#64748b] uppercase tracking-[0.35em]">Métricas Académicas</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative bg-white rounded-3xl p-12 border border-[#e2e8f0] shadow-lg overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 200" preserveAspectRatio="none" fill="none">
                  <path d="M0 150C100 150 150 80 200 80C250 80 300 150 400 150" stroke="#14b8a6" strokeWidth="1.5" />
                </svg>
                <div className="absolute top-4 right-6 text-7xl font-bold opacity-[0.04] font-mono text-[#94a3b8]">n</div>
              </div>
              <div className="relative z-10">
                <div className="text-7xl font-black text-[#00447e] mb-4 tracking-tighter">+30</div>
                <h3 className="font-black text-[#1e293b] text-xl uppercase tracking-tight mb-2">Docentes Especializados</h3>
                <p className="text-sm text-[#64748b] font-medium uppercase tracking-widest">Dedicación a la excelencia educativa</p>
              </div>
            </div>

            <div className="relative bg-white rounded-3xl p-12 border border-[#e2e8f0] shadow-lg overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 200" preserveAspectRatio="none" fill="none">
                  <path d="M0 80C100 80 150 150 200 150C250 150 300 80 400 80" stroke="#14b8a6" strokeWidth="1.5" />
                </svg>
                <div className="absolute top-4 right-6 text-7xl font-bold opacity-[0.04] font-mono text-[#94a3b8]">%</div>
              </div>
              <div className="relative z-10">
                <div className="text-7xl font-black text-[#ea580c] mb-4 tracking-tighter">80%</div>
                <h3 className="font-black text-[#1e293b] text-xl uppercase tracking-tight mb-2">Con Estudios de Posgrado</h3>
                <p className="text-sm text-[#64748b] font-medium uppercase tracking-widest">Maestrías y doctorados acreditados</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#f1f5f9] to-white rounded-3xl p-10 border border-[#cbd5e1]">
            <p className="text-lg text-[#64748b] leading-relaxed font-medium">
              Nuestro cuerpo docente está conformado por <strong className="text-[#1e293b]">profesionales altamente calificados</strong> con 
              formación de posgrado en las mejores universidades del país y del extranjero, garantizando una 
              educación de <span className="text-[#00447e] font-semibold">nivel internacional</span>.
            </p>
          </div>
        </div>

        {/* Áreas de Especialidad */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <BookOpen className="text-[#00a5a8]" size={32} />
            Áreas de Especialidad
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Bioestadística', icon: 'σ', color: 'bg-[#00a5a8]', desc: 'Análisis de datos médicos y epidemiológicos' },
              { name: 'Econometría', icon: 'β', color: 'bg-[#1a6b1a]', desc: 'Modelos económicos y financieros' },
              { name: 'Diseño de Encuestas', icon: 'n', color: 'bg-[#00a5a8]', desc: 'Metodología de muestreo y recolección' },
              { name: 'Modelos Estocásticos', icon: 'μ', color: 'bg-[#1a6b1a]', desc: 'Procesos aleatorios y predicción' },
              { name: 'Actuariales', icon: 'R²', color: 'bg-[#00a5a8]', desc: 'Seguros y análisis de riesgo' },
              { name: 'Machine Learning', icon: 'Σ', color: 'bg-[#1a6b1a]', desc: 'Inteligencia artificial y datos' }
            ].map((area, idx) => (
              <div
                key={idx}
                className={`${area.color} text-white rounded-xl p-6 hover:scale-105 transition-transform shadow-lg relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 text-6xl opacity-20 font-bold">{area.icon}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">{area.name}</h3>
                  <p className="text-sm text-white/90">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gestión Administrativa */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-white/5 text-9xl font-bold">⚙</div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Briefcase size={32} />
              Gestión Administrativa (Cuerpo de Apoyo)
            </h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              Nuestro equipo administrativo garantiza el <strong>funcionamiento eficiente</strong> de todos los 
              procesos académicos y administrativos, brindando atención personalizada a estudiantes y docentes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  area: 'Kárdex Académico',
                  resp: 'Sr. René Quelca',
                  desc: 'Historial de notas, inscripciones y certificados',
                  color: 'from-[#00a5a8] to-[#008b8d]'
                },
                {
                  area: 'Secretaría de Dirección',
                  resp: 'Sra. Griselda Andrade',
                  desc: 'Gestión de correspondencia y citas con autoridades',
                  color: 'from-[#1a6b1a] to-[#145014]'
                },
                {
                  area: 'Soporte Técnico',
                  resp: 'Sr. Alfredo Candia',
                  desc: 'Mantenimiento de red institucional y laboratorios',
                  color: 'from-[#00a5a8] to-[#008b8d]'
                }
              ].map((unit, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${unit.color} flex items-center justify-center mb-4`}>
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-yellow-300">{unit.area}</h3>
                  <p className="text-sm font-semibold text-white/80 mb-3">Responsable: {unit.resp}</p>
                  <p className="text-sm text-white/70 leading-relaxed">{unit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compromiso Institucional */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#00a5a8]">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compromiso con la Excelencia</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-[#00a5a8] mb-3">Formación Continua</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00a5a8] font-bold">•</span>
                  <span>Participación en congresos nacionales e internacionales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00a5a8] font-bold">•</span>
                  <span>Actualización en metodologías de enseñanza innovadoras</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00a5a8] font-bold">•</span>
                  <span>Capacitación en tecnologías educativas y herramientas digitales</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#1a6b1a] mb-3">Investigación Activa</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#1a6b1a] font-bold">•</span>
                  <span>Publicaciones en revistas indexadas de alto impacto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1a6b1a] font-bold">•</span>
                  <span>Proyectos de investigación con instituciones nacionales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1a6b1a] font-bold">•</span>
                  <span>Mentoría a estudiantes en trabajos de investigación</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}