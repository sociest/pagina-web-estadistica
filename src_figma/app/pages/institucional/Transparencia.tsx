import { Eye, FileText, TrendingUp, Users, DollarSign, CheckCircle } from 'lucide-react';
import { PageHero } from '../../components/institucional/PageHero';
import { PageCard } from '../../components/institucional/PageCard';

export default function Transparencia() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <PageHero
        title="Transparencia y Rendición de Cuentas"
        description="Compromiso con el gobierno abierto, la participación ciudadana y la gestión transparente"
        variant="secondary"
      />

      <div className="max-w-6xl mx-auto px-4 py-12 -mt-8">
        {/* Rendición Pública de Cuentas */}
        <PageCard
          variant="secondary"
          icon={<DollarSign size={24} />}
          title="Rendición Pública de Cuentas"
          decorator="Σ"
          className="mb-8 border-t-4 border-l-0"
        >
          <p className="mb-6 leading-relaxed">
            Espacio de <strong>participación democrática</strong> donde la Dirección presenta el 
            <span className="text-[#1a6b1a] font-semibold"> informe anual de ingresos y egresos</span>, 
            detallando la ejecución de fondos provenientes del IDH (Impuesto Directo a los Hidrocarburos) 
            y del Tesoro Universitario.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#1a6b1a]/10 to-transparent p-6 rounded-xl border-l-4 border-[#1a6b1a]">
              <h4 className="font-bold text-gray-900 mb-3">Periodicidad</h4>
              <p className="text-gray-700 mb-2">
                Evento anual obligatorio realizado al finalizar cada gestión académica
              </p>
              <span className="inline-block px-3 py-1 bg-[#1a6b1a] text-white rounded-full text-sm font-semibold">
                Próximo: Diciembre 2025
              </span>
            </div>
            <div className="bg-gradient-to-br from-[#00a5a8]/10 to-transparent p-6 rounded-xl border-l-4 border-[#00a5a8]">
              <h4 className="font-bold text-gray-900 mb-3">Participación</h4>
              <p className="text-gray-700 mb-2">
                Abierto a toda la comunidad estudiantil, docente y sociedad civil
              </p>
              <span className="inline-block px-3 py-1 bg-[#00a5a8] text-white rounded-full text-sm font-semibold">
                Acceso Público
              </span>
            </div>
          </div>
        </PageCard>

        {/* Indicadores de Gestión */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <TrendingUp className="text-[#00a5a8]" size={32} />
            Indicadores de Gestión 2024
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Presupuesto Ejecutado', value: '98.5%', icon: <DollarSign size={24} />, color: 'bg-[#00a5a8]' },
              { label: 'Tasa de Titulación', value: '85%', icon: <Users size={24} />, color: 'bg-[#1a6b1a]' },
              { label: 'Satisfacción Estudiantil', value: '92%', icon: <CheckCircle size={24} />, color: 'bg-[#00a5a8]' },
              { label: 'Transparencia Digital', value: '100%', icon: <Eye size={24} />, color: 'bg-[#1a6b1a]' }
            ].map((indicator, idx) => (
              <div
                key={idx}
                className={`${indicator.color} text-white rounded-xl p-6 text-center hover:scale-105 transition-transform shadow-lg relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 text-white/10 text-6xl font-bold">%</div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-3">
                    {indicator.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2">{indicator.value}</div>
                  <p className="text-sm text-white/90">{indicator.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documentos Públicos */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FileText className="text-[#1a6b1a]" size={32} />
            Documentos Públicos Disponibles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Informe de Ejecución Presupuestaria',
                period: 'Gestión 2024',
                desc: 'Detalle de ingresos y gastos por categoría programática',
                color: 'border-[#00a5a8]',
                bgColor: 'bg-[#00a5a8]'
              },
              {
                title: 'Plan Operativo Anual (POA)',
                period: 'Gestión 2025',
                desc: 'Objetivos, metas y actividades planificadas',
                color: 'border-[#1a6b1a]',
                bgColor: 'bg-[#1a6b1a]'
              },
              {
                title: 'Informe de Evaluación Docente',
                period: '1er Semestre 2024',
                desc: 'Resultados de evaluación estudiantil al desempeño docente',
                color: 'border-[#00a5a8]',
                bgColor: 'bg-[#00a5a8]'
              },
              {
                title: 'Actas del Honorable Consejo de Carrera',
                period: 'Gestión 2024',
                desc: 'Resoluciones y decisiones de cogobierno estudiantil',
                color: 'border-[#1a6b1a]',
                bgColor: 'bg-[#1a6b1a]'
              }
            ].map((doc, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl shadow-lg overflow-hidden border-l-4 ${doc.color} hover:shadow-xl transition-all`}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 ${doc.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <FileText className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{doc.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{doc.period}</p>
                      <p className="text-sm text-gray-700 mb-4">{doc.desc}</p>
                      <button className={`text-sm px-4 py-2 ${doc.bgColor} text-white rounded-lg hover:opacity-90 transition-opacity`}>
                        Descargar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compromisos de Transparencia */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-white/5 text-9xl font-bold">✓</div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Eye size={32} />
              Compromisos de Transparencia
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-xl font-bold mb-4 text-yellow-300">Acceso a la Información</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#1a6b1a] flex-shrink-0 mt-0.5" size={18} />
                    <span>Publicación de documentos de gestión en plataforma digital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#1a6b1a] flex-shrink-0 mt-0.5" size={18} />
                    <span>Respuesta oportuna a solicitudes de información pública</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#1a6b1a] flex-shrink-0 mt-0.5" size={18} />
                    <span>Difusión proactiva de resoluciones y reglamentos</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-xl font-bold mb-4 text-yellow-300">Participación Ciudadana</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#00a5a8] flex-shrink-0 mt-0.5" size={18} />
                    <span>Mecanismos de consulta y sugerencias estudiantiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#00a5a8] flex-shrink-0 mt-0.5" size={18} />
                    <span>Representación estudiantil en órganos de decisión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#00a5a8] flex-shrink-0 mt-0.5" size={18} />
                    <span>Auditorías periódicas con participación social</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
