import { Handshake, Building2, Globe, TrendingUp } from 'lucide-react';
import { PageHero } from '../../components/institucional/PageHero';
import { PageCard } from '../../components/institucional/PageCard';

export default function Convenios() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <PageHero
        title="Convenios Interinstitucionales"
        description="Alianzas estratégicas que amplían horizontes y generan oportunidades para nuestros estudiantes"
        variant="primary"
      />

      <div className="max-w-6xl mx-auto px-4 py-12 -mt-8">
        {/* Intro Card */}
        <PageCard
          variant="primary"
          icon={<Handshake size={32} />}
          title="Pasantías y Trabajo Dirigido"
          decorator="∞"
          className="mb-8 border-t-4 border-l-0"
        >
          <p className="leading-relaxed">
            Gracias a nuestros <strong>convenios estratégicos</strong>, los estudiantes de últimos semestres pueden 
            realizar sus modalidades de graduación en instituciones de prestigio nacional e internacional, 
            aplicando conocimientos en <span className="text-[#00a5a8] font-semibold">contextos reales</span> y 
            generando <span className="text-[#00a5a8] font-semibold">impacto social</span>.
          </p>
        </PageCard>

        {/* Convenios Nacionales */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Building2 className="text-[#1a6b1a]" size={32} />
            Convenios Nacionales
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* INE */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-[#1a6b1a] hover:shadow-2xl transition-all group">
              <div className="bg-gradient-to-br from-[#1a6b1a] to-[#145014] p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 text-white/10 text-6xl font-bold">n</div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <TrendingUp size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-center">INE</h3>
                  <p className="text-sm text-white/80 text-center">Instituto Nacional de Estadística</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-3">Oportunidades:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a6b1a] font-bold">•</span>
                    <span>Prácticas en censos nacionales de población</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a6b1a] font-bold">•</span>
                    <span>Diseño de encuestas especializadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a6b1a] font-bold">•</span>
                    <span>Análisis de indicadores socioeconómicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a6b1a] font-bold">•</span>
                    <span>Producción de estadísticas oficiales</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ASFI y BCB */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-[#00a5a8] hover:shadow-2xl transition-all group">
              <div className="bg-gradient-to-br from-[#00a5a8] to-[#008b8d] p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 text-white/10 text-6xl font-bold">β</div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <Building2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-center">ASFI & BCB</h3>
                  <p className="text-sm text-white/80 text-center">Sector Financiero</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-3">Oportunidades:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00a5a8] font-bold">•</span>
                    <span>Análisis de datos financieros y bancarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00a5a8] font-bold">•</span>
                    <span>Modelado de riesgo crediticio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00a5a8] font-bold">•</span>
                    <span>Evaluación de indicadores macroeconómicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00a5a8] font-bold">•</span>
                    <span>Supervisión del sistema financiero</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Organismos Internacionales */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-[#1a6b1a] hover:shadow-2xl transition-all group">
              <div className="bg-gradient-to-br from-[#1a6b1a] to-[#145014] p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 text-white/10 text-6xl font-bold">Σ</div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <Globe size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-center">Organismos</h3>
                  <p className="text-sm text-white/80 text-center">Unicef, PNUD, OPS</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-3">Oportunidades:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a6b1a] font-bold">•</span>
                    <span>Estadística social y demográfica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a6b1a] font-bold">•</span>
                    <span>Análisis de datos de salud pública</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a6b1a] font-bold">•</span>
                    <span>Evaluación de programas de desarrollo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a6b1a] font-bold">•</span>
                    <span>Investigación en indicadores sociales</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Movilidad Estudiantil */}
        <div className="bg-gradient-to-br from-[#00a5a8] to-[#008b8d] text-white rounded-2xl shadow-xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-white/5 text-9xl font-bold">∫</div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Globe size={32} />
              Movilidad Estudiantil Internacional
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
              <p className="text-lg leading-relaxed mb-4">
                Convenios con la <strong>red de universidades del Grupo Montevideo</strong> y 
                <strong> PAME</strong>, permitiendo que alumnos destacados cursen un semestre en 
                universidades de <span className="text-yellow-300 font-semibold">Argentina, Brasil o Chile</span>.
              </p>
              <div className="inline-block px-4 py-2 bg-white/20 rounded-lg">
                <p className="font-bold text-yellow-300">
                  🎓 Becas disponibles para estudiantes con excelencia académica
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h4 className="font-bold mb-3 text-yellow-300">Beneficios</h4>
                <ul className="space-y-2 text-sm">
                  <li>✓ Experiencia académica internacional</li>
                  <li>✓ Intercambio cultural y profesional</li>
                  <li>✓ Ampliación de red de contactos</li>
                  <li>✓ Convalidación automática de materias</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h4 className="font-bold mb-3 text-yellow-300">Requisitos</h4>
                <ul className="space-y-2 text-sm">
                  <li>✓ Promedio mínimo de 65/100</li>
                  <li>✓ Haber cursado al menos 4 semestres</li>
                  <li>✓ Dominio de idioma (según destino)</li>
                  <li>✓ Carta de motivación y proyecto</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas de Impacto */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Impacto de las Alianzas</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-[#00a5a8]/10 to-transparent rounded-xl border-l-4 border-[#00a5a8]">
              <div className="text-5xl font-bold text-[#00a5a8] mb-2">+50</div>
              <p className="text-gray-700 font-semibold">Convenios Activos</p>
              <p className="text-sm text-gray-600 mt-2">Con instituciones nacionales e internacionales</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#1a6b1a]/10 to-transparent rounded-xl border-l-4 border-[#1a6b1a]">
              <div className="text-5xl font-bold text-[#1a6b1a] mb-2">200+</div>
              <p className="text-gray-700 font-semibold">Estudiantes Beneficiados</p>
              <p className="text-sm text-gray-600 mt-2">Anualmente en pasantías y movilidad</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#f97316]/10 to-transparent rounded-xl border-l-4 border-[#f97316]">
              <div className="text-5xl font-bold text-[#f97316] mb-2">95%</div>
              <p className="text-gray-700 font-semibold">Tasa de Inserción Laboral</p>
              <p className="text-sm text-gray-600 mt-2">De egresados con experiencia práctica</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
