import { Briefcase, Globe, HeartPulse, Handshake, Landmark, PieChart, Target, Building2 } from 'lucide-react'

export const conveniosHero = {
  eyebrow: 'Alianzas Estrategicas',
  title: ['Conectando', 'la', 'Academia.'],
  description:
    'Fortalecemos la formacion profesional a traves de convenios con instituciones gubernamentales y organismos privados, facilitando pasantias y trabajos dirigidos.',
  imageUrl:
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200',
  chips: [
    { symbol: 'pi', label: 'Impacto', subtitle: 'Profesional' },
    { symbol: 'lambda', label: 'n = 12', subtitle: 'Convenios' },
  ],
}

export const sectors = [
  {
    id: 'publico',
    label: 'Sector Publico',
    icon: Building2,
    symbol: 'Omega',
    items: [
      { name: 'Instituto Nacional de Estadistica (INE)', desc: 'Principal aliado estrategico para la practica censal y encuestas nacionales de gran escala.' },
      { name: 'Gobierno Autonomo de La Paz', desc: 'Desarrollo de proyectos de planificacion regional y analisis demografico departamental.' },
      { name: 'Agencia Nacional de Hidrocarburos (ANH)', desc: 'Modelado y analisis de datos energeticos para la regulacion soberana.' },
      { name: 'Ministerio de Trabajo y Empleo', desc: 'Generacion de estadisticas laborales y monitoreo de la seguridad social boliviana.' },
      { name: 'Defensa Publica (SEPDEP)', desc: 'Procesamiento y analisis de datos criticos del sistema judicial nacional.' },
      { name: 'Policia Nacional (UNIPOL)', desc: 'Investigacion conjunta en areas de estadistica criminal y seguridad ciudadana.' },
    ],
  },
  {
    id: 'salud',
    label: 'Salud y Bienestar',
    icon: HeartPulse,
    symbol: 'psi',
    items: [
      { name: 'Seguro Social Universitario (SSU)', desc: 'Gestion avanzada de datos de salud hospitalaria y bioestadistica aplicada.' },
      { name: 'Hospital Central de Tipuani', desc: 'Implementacion de metodos estadisticos en salud publica para areas rurales.' },
    ],
  },
  {
    id: 'internacional',
    label: 'Org. Internacionales',
    icon: Globe,
    symbol: 'phi',
    items: [
      { name: 'Vision Mundial Bolivia', desc: 'Analisis de impacto en proyectos de desarrollo infantil y vulnerabilidad social.' },
      { name: 'Plan Internacional INC', desc: 'Gestion y auditoria de datos para programas de igualdad y derechos humanos.' },
    ],
  },
  {
    id: 'consultoria',
    label: 'Consultoria',
    icon: Briefcase,
    symbol: 'theta',
    items: [
      { name: 'CIECI Consultora Integral', desc: 'Investigacion privada y analitica avanzada para el sector empresarial.' },
      { name: 'Acreditacion & Certificacion', desc: 'Apoyo tecnico en procesos de calidad y auditoria institucional.' },
    ],
  },
]

export const benefits = [
  {
    title: 'Pasantias Pre-profesionales',
    description: 'Adquiere experiencia real en el manejo de bases de datos masivas antes de graduarte.',
    icon: Briefcase,
    symbol: 'int',
  },
  {
    title: 'Trabajo Dirigido',
    description: 'Titulate resolviendo un problema real de analisis estadistico en una institucion de prestigio.',
    icon: Target,
    symbol: 'sum',
  },
  {
    title: 'Red de Contactos',
    description: 'Establece vinculos con profesionales del area estadistica y lideres de opinion del mercado laboral.',
    icon: Handshake,
    symbol: 'inf',
  },
]

export const conveniosCta = {
  title: 'Referente Nacional',
  label: 'Vinculo Profesional Garantizado',
  icon: PieChart,
}
