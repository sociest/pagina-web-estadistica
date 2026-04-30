import { Award, TrendingUp, BookOpen, Server } from 'lucide-react';
import { PageHero } from '../../components/institucional/PageHero';
import { PageCard } from '../../components/institucional/PageCard';

export default function Acreditacion() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <PageHero
        title="Acreditación y Calidad Académica"
        description="Compromiso con la excelencia y mejora continua en todos nuestros procesos educativos"
        variant="secondary"
      />

      <div className="max-w-6xl mx-auto px-4 py-12 -mt-8">
        {/* Certificación CEUB */}
        <PageCard
          variant="secondary"
          icon={<Award size={48} />}
          title="Certificación CEUB"
          decorator="✓"
          className="mb-8 border-t-4 border-l-0"
        >
          <p className="mb-4">
            La carrera ostenta la <strong className="text-[#00447e]">Acreditación Nacional vigente</strong>, 
            tras haber superado con éxito las evaluaciones pares del <strong>Comité Ejecutivo de la 
            Universidad Boliviana</strong>.
          </p>
          <div className="bg-gradient-to-r from-[#00447e]/10 to-transparent p-4 rounded-lg border-l-4 border-[#00447e]">
            <p className="text-gray-800 font-semibold">
              Esto garantiza que el título profesional tiene <span className="text-[#00447e]">validez y prestigio</span> en 
              todo el sistema universitario boliviano.
            </p>
          </div>
        </PageCard>

        {/* Procesos de Mejora Continua */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <TrendingUp className="text-[#00447e]" size={32} />
            Procesos de Mejora Continua
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Actualización Curricular */}
            <PageCard variant="primary" decorator="R" className="border-t-4 border-l-0">
              <div className="w-14 h-14 rounded-full bg-[#00447e]/10 flex items-center justify-center mb-4">
                <BookOpen className="text-[#00447e]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Actualización Curricular</h3>
              <p className="text-sm">
                Revisión constante del Plan de Estudios para incluir lenguajes como 
                <span className="font-semibold text-[#00447e]"> R</span>, 
                <span className="font-semibold text-[#00447e]"> Python</span> y herramientas de 
                <span className="font-semibold text-[#00447e]"> Big Data</span>.
              </p>
            </PageCard>

            {/* Card 2: Autoevaluación */}
            <PageCard variant="accent" decorator="χ²" className="border-t-4 border-l-0">
              <div className="w-14 h-14 rounded-full bg-[#ea580c]/10 flex items-center justify-center mb-4">
                <TrendingUp className="text-[#ea580c]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Autoevaluación 2025-2026</h3>
              <p className="text-sm">
                Proceso activo de recopilación de <strong>indicadores de desempeño académico</strong> para 
                la <span className="text-[#ea580c] font-semibold">reacreditación internacional</span>.
              </p>
            </PageCard>

            {/* Card 3: Infraestructura */}
            <PageCard variant="secondary" decorator="n" className="border-t-4 border-l-0">
              <div className="w-14 h-14 rounded-full bg-[#00447e]/10 flex items-center justify-center mb-4">
                <Server className="text-[#00447e]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Infraestructura</h3>
              <p className="text-sm">
                Mantenimiento de <strong>laboratorios de computación de última generación</strong> y 
                bibliotecas especializadas físicas y digitales.
              </p>
            </PageCard>
          </div>
        </div>

        {/* Timeline Visual */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-white/5 text-9xl font-bold">2030</div>
          <h2 className="text-3xl font-bold mb-8">Ruta de Excelencia</h2>
          <div className="space-y-6">
            {[
              { year: '2023', event: 'Renovación de Acreditación Nacional CEUB', status: 'completed' },
              { year: '2024', event: 'Implementación curricular de IA y Machine Learning', status: 'completed' },
              { year: '2025-2026', event: 'Proceso de Autoevaluación Institucional', status: 'active' },
              { year: '2027', event: 'Acreditación Internacional Proyectada', status: 'pending' },
              { year: '2030', event: 'Referente Regional en Ciencia de Datos', status: 'pending' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center font-bold text-sm
                  ${item.status === 'completed' ? 'bg-[#00447e] ring-4 ring-[#00447e]/30' : 
                    item.status === 'active' ? 'bg-[#ea580c] ring-4 ring-[#ea580c]/30 animate-pulse' : 
                    'bg-gray-600 ring-4 ring-gray-600/30'}`}>
                  {item.year}
                </div>
                <div className="flex-1 pt-3">
                  <h4 className="text-lg font-bold mb-1">{item.event}</h4>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold
                    ${item.status === 'completed' ? 'bg-[#1a6b1a]/20 text-[#5eeb5e]' :
                      item.status === 'active' ? 'bg-[#00a5a8]/20 text-[#5ee5e8]' :
                      'bg-gray-600/20 text-gray-400'}`}>
                    {item.status === 'completed' ? 'Completado' : item.status === 'active' ? 'En Proceso' : 'Planificado'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}