import { Award, Target, Eye, Heart } from 'lucide-react';
import { PageHero } from '../../components/institucional/PageHero';
import { PageCard } from '../../components/institucional/PageCard';
import { StatisticalAnnotations, MicroDataContext, InstitutionalWatermark } from '../../components/StatisticalAnnotations';

export default function AcercaCarrera() {
  return (
    <main className="bg-[#f1f5f9] relative"> {/* Textura Papel Bond */}
      {/* Marca de agua institucional */}
      <InstitutionalWatermark text="CARRERA DE ESTADÍSTICA" opacity={0.015} />
      
      {/* Hero Section */}
      <PageHero
        title="Acerca de la Carrera"
        description="Identidad institucional, misión, visión y valores que guían nuestra excelencia académica en la formación de estadísticos y científicos de datos para Bolivia."
        variant="primary"
      />

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16 -mt-12 relative z-10">
        {/* Micro-datos contextuales en margen superior */}
        <div className="absolute top-8 right-8 hidden lg:block">
          <MicroDataContext 
            data={[
              { key: 'Fundación', val: '1975' },
              { key: 'Acreditación', val: 'CEUB-A+' },
              { key: 'Nivel', val: 'Internacional' },
              { key: 'Egresados', val: '2,500+' }
            ]}
          />
        </div>

        {/* Historia Card */}
        <PageCard
          variant="primary"
          icon={<Award size={28} />}
          title="Reseña Histórica"
          decorator="n"
          className="mb-10"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-[16px] leading-relaxed mb-5 text-[#64748b]">
              La <strong className="text-[#1e293b]">Carrera de Estadística de la UMSA</strong> nace de la necesidad de cuantificar el desarrollo nacional. 
              Desde su fundación en <strong className="text-[#00447e]">1975</strong>, ha evolucionado de métodos puramente matemáticos a la integración de la 
              <span className="text-[#00447e] font-semibold"> Ciencia de Datos</span> y el 
              <span className="text-[#ea580c] font-semibold"> Machine Learning</span>.
            </p>
            <p className="text-[16px] leading-relaxed text-[#64748b]">
              Somos la unidad académica encargada de formar los cuadros técnicos que lideran el 
              <strong className="text-[#1e293b]"> Instituto Nacional de Estadística (INE)</strong> y las unidades de planificación del país, 
              consolidándonos como referente en la formación de profesionales capaces de transformar datos en 
              conocimiento estratégico para el <strong className="text-[#00447e]">desarrollo de Bolivia</strong>.
            </p>
          </div>
        </PageCard>

        {/* Misión y Visión Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Misión Card */}
          <PageCard variant="primary" decorator="μ">
            <div 
              className="w-16 h-16 rounded-xl shadow-lg flex items-center justify-center mb-5"
              style={{ background: 'linear-gradient(135deg, #00447e 0%, #003a6b 100%)' }}
            >
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#1e293b] mb-4 leading-tight">Misión</h3>
            <p className="text-[15px] leading-relaxed text-[#64748b]">
              Formar profesionales con <strong className="text-[#1e293b]">excelencia académica, ética y responsabilidad social</strong>, 
              capaces de aplicar el método estadístico en la investigación científica para la solución de 
              problemas complejos en el ámbito social, económico y tecnológico de Bolivia.
            </p>
          </PageCard>

          {/* Visión Card */}
          <PageCard variant="secondary" decorator="R²">
            <div 
              className="w-16 h-16 rounded-xl shadow-lg flex items-center justify-center mb-5"
              style={{ background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)' }}
            >
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#1e293b] mb-4 leading-tight">Visión</h3>
            <p className="text-[15px] leading-relaxed text-[#64748b]">
              Consolidarse como el <strong className="text-[#1e293b]">referente nacional e internacional</strong> en la generación de 
              conocimiento estadístico, liderando la <span className="text-[#ea580c] font-semibold">transformación digital</span> y 
              la <span className="text-[#ea580c] font-semibold">analítica de datos en Bolivia</span> para el año 2030.
            </p>
          </PageCard>
        </div>

        {/* Valores Card */}
        <div 
          className="relative rounded-2xl shadow-lg p-10 overflow-hidden"
          style={{
            background: 'linear-gradient(167.48deg, rgba(241,245,249,1) 8.128%, rgba(255,255,255,0.98) 91.872%)',
            border: '1px solid rgba(203,213,225,0.50)',
          }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 400" preserveAspectRatio="none" fill="none">
              <path d="M0 310C133 310 267 250 400 140C533 30 667 90 800 310" stroke="#14b8a6" strokeWidth="2" />
              <path d="M0 295C133 295 267 235 400 125C533 15 667 75 800 295" stroke="#14b8a6" strokeWidth="1.5" opacity="0.7" />
            </svg>
            <div className="absolute top-4 right-8 text-8xl font-bold opacity-[0.04] text-[#94a3b8] font-mono">Σ</div>
          </div>

          <h2 className="relative z-10 text-3xl font-bold text-[#1e293b] mb-8 flex items-center gap-4">
            <div 
              className="w-14 h-14 rounded-xl shadow-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #00447e, #ea580c)' }}
            >
              <Heart className="text-white" size={28} />
            </div>
            Nuestros Valores Institucionales
          </h2>
          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Rigor Científico', icon: 'σ', color: '#00447e', desc: 'Precisión y exactitud' },
              { title: 'Ética Profesional', icon: 'μ', color: '#ea580c', desc: 'Integridad y honestidad' },
              { title: 'Transparencia', icon: 'R²', color: '#00447e', desc: 'Apertura y claridad' },
              { title: 'Compromiso Social', icon: 'β', color: '#ea580c', desc: 'Servicio a Bolivia' }
            ].map((value, idx) => (
              <div
                key={idx}
                className="text-white rounded-xl p-6 text-center hover:scale-105 transition-all shadow-md hover:shadow-xl"
                style={{ background: `linear-gradient(135deg, ${value.color}, ${value.color}dd)` }}
              >
                <div className="text-6xl font-bold mb-3 opacity-90 font-mono">{value.icon}</div>
                <h4 className="text-lg font-bold mb-1 leading-tight">{value.title}</h4>
                <p className="text-sm text-white/80">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}