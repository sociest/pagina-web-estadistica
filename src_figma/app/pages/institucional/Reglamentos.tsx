import { FileText, Download, Search, Calendar } from 'lucide-react';
import { PageHero } from '../../components/institucional/PageHero';

export default function Reglamentos() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <PageHero
        title="Reglamentos y Resoluciones"
        description="Marco normativo que garantiza transparencia y equidad en todos nuestros procesos"
        variant="secondary"
      />

      <div className="max-w-6xl mx-auto px-4 py-12 -mt-8">
        {/* Búsqueda */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-t-4 border-[#00a5a8]">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar reglamento, resolución o documento..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00a5a8] focus:outline-none transition-colors"
              />
            </div>
            <button className="px-6 py-3 bg-[#00a5a8] text-white rounded-lg hover:bg-[#008b8d] transition-colors font-semibold flex items-center justify-center gap-2">
              <Search size={20} />
              Buscar
            </button>
          </div>
        </div>

        {/* Biblioteca Normativa */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <FileText className="text-[#1a6b1a]" size={32} />
          Biblioteca Normativa
        </h2>

        <div className="grid gap-6 mb-8">
          {/* Reglamento de Modalidades de Graduación */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-[#00a5a8] hover:shadow-xl transition-all">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00a5a8] to-[#008b8d] rounded-xl flex items-center justify-center shadow-lg">
                    <FileText className="text-white" size={40} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#00a5a8]/10 text-[#00a5a8] rounded-full text-sm font-semibold">
                      Graduación
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      Actualizado 2025
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Reglamento de Modalidades de Graduación
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Guía completa paso a paso para optar al título profesional. Incluye requisitos, 
                    procedimientos y plazos para cada modalidad: Trabajo Dirigido, Proyecto de Grado, 
                    Tesis y Examen de Grado.
                  </p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#00a5a8] text-white rounded-lg hover:bg-[#008b8d] transition-colors">
                    <Download size={18} />
                    Descargar PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Reglamento Académico */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-[#1a6b1a] hover:shadow-xl transition-all">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1a6b1a] to-[#145014] rounded-xl flex items-center justify-center shadow-lg">
                    <FileText className="text-white" size={40} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#1a6b1a]/10 text-[#1a6b1a] rounded-full text-sm font-semibold">
                      Académico
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      Vigente
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Reglamento General de Estudiantes
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Normas de inscripción, asistencia, evaluaciones, calendario académico y derechos-deberes. 
                    Incluye sistema de calificaciones y requisitos de permanencia en la carrera.
                  </p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a6b1a] text-white rounded-lg hover:bg-[#145014] transition-colors">
                    <Download size={18} />
                    Descargar PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Plan de Estudios */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-[#00a5a8] hover:shadow-xl transition-all">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00a5a8] to-[#008b8d] rounded-xl flex items-center justify-center shadow-lg">
                    <Calendar className="text-white" size={40} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#00a5a8]/10 text-[#00a5a8] rounded-full text-sm font-semibold">
                      Currículo
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      Plan 2024
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Plan de Estudios Actualizado
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Malla curricular completa con 10 semestres académicos. Incluye prerrequisitos, 
                    carga horaria, y distribución de materias en áreas de formación general y especializada.
                  </p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#00a5a8] text-white rounded-lg hover:bg-[#008b8d] transition-colors">
                    <Download size={18} />
                    Descargar PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Código de Ética */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-[#1a6b1a] hover:shadow-xl transition-all">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1a6b1a] to-[#145014] rounded-xl flex items-center justify-center shadow-lg">
                    <FileText className="text-white" size={40} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#1a6b1a]/10 text-[#1a6b1a] rounded-full text-sm font-semibold">
                      Ética
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      Vigente
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Código de Ética Profesional del Estadístico
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Principios éticos que rigen el ejercicio profesional: confidencialidad de datos, 
                    rigor científico, transparencia metodológica y responsabilidad social.
                  </p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a6b1a] text-white rounded-lg hover:bg-[#145014] transition-colors">
                    <Download size={18} />
                    Descargar PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resoluciones Recientes */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-white/5 text-9xl font-bold">§</div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Calendar size={32} />
              Resoluciones Recientes (2025)
            </h2>
            <div className="space-y-4">
              {[
                {
                  num: 'RES-EST-005/2025',
                  date: '15 Mar 2025',
                  title: 'Calendario Académico Gestión I/2025',
                  color: 'bg-[#00a5a8]'
                },
                {
                  num: 'RES-EST-004/2025',
                  date: '01 Mar 2025',
                  title: 'Convocatoria Becas de Excelencia',
                  color: 'bg-[#1a6b1a]'
                },
                {
                  num: 'RES-EST-003/2025',
                  date: '20 Feb 2025',
                  title: 'Actualización de Programas Analíticos',
                  color: 'bg-[#00a5a8]'
                },
                {
                  num: 'RES-EST-002/2025',
                  date: '10 Feb 2025',
                  title: 'Normativa de Prácticas Pre-profesionales',
                  color: 'bg-[#1a6b1a]'
                }
              ].map((res, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all flex items-center gap-4"
                >
                  <div className={`${res.color} px-3 py-1 rounded-lg font-bold text-sm flex-shrink-0`}>
                    {res.num}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold">{res.title}</h4>
                    <p className="text-sm text-white/70">{res.date}</p>
                  </div>
                  <button className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm">
                    <Download size={16} />
                    Ver
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
