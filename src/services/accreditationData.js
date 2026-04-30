import {
  Award,
  Briefcase,
  CheckCircle2,
  Globe,
  PieChart,
  ShieldCheck,
  Star,
  Users,
  Zap,
} from 'lucide-react'

export const accreditationHero = {
  eyebrow: 'Acreditacion Institucional',
  title: ['Garantia de', 'calidad', 'Academica.'],
  description:
    'Nuestra carrera lidera el analisis de datos en Bolivia bajo estandares estrictos del sistema universitario. La acreditacion vigente ante el CEUB respalda competitividad y mejora continua.',
  imageUrl:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
  chips: [
    { symbol: 'int', label: 'Integridad', subtitle: 'Curricular' },
    { symbol: 'chi2', label: 'Validez', subtitle: 'Estadistica' },
  ],
}

export const credentials = [
  {
    title: 'Acreditacion Nacional CEUB',
    sub: 'Certificacion de Calidad Superior',
    org: 'Resolucion de Congreso Universitario',
    desc: 'Aval oficial del CEUB que certifica excelencia en curriculo, plantel docente e infraestructura tecnica de la carrera.',
    cta: 'Ver Resolucion Oficial',
    icon: ShieldCheck,
    stats: { label: 'p < 0.05', value: 'check' },
  },
  {
    title: 'Autoevaluacion Continua',
    sub: 'Gestion de Calidad Interna',
    org: 'Comision de Evaluacion FCPN',
    desc: 'Proceso sistematico de revision de indicadores academicos y administrativos para asegurar cumplimiento de estandares internacionales.',
    cta: 'Consultar Indicadores',
    icon: Users,
    stats: { label: 'CI: 99.5%', value: 'star' },
  },
  {
    title: 'Evaluacion de Pares Externos',
    sub: 'Veredicto Internacional',
    org: 'Pares Academicos del Sistema',
    desc: 'Reconocimiento otorgado por expertos tras auditoria tecnica de procesos de ensenanza, investigacion e interaccion social.',
    cta: 'Informe de Evaluacion',
    icon: Award,
    stats: { label: 'p < 0.01', value: 'diamond' },
  },
]

export const impactHighlights = {
  title: ['Impacto en', 'tu Carrera'],
  description:
    'Egresar de un programa acreditado abre oportunidades profesionales con respaldo tecnico y rigor cientifico.',
  statusTitle: 'Estado de Gestion',
  statusText:
    'Participacion activa en el Censo Universitario 2025 para la actualizacion integral de indicadores de calidad institucional.',
  statusPill: 'Mejora Continua Activa',
  statusIcon: Zap,
}

export const impactCards = [
  {
    t: 'Movilidad Global',
    d: 'Acceso preferente a becas de intercambio y convenios de postgrado en universidades lideres de la region.',
    icon: Globe,
  },
  {
    t: 'Prestigio Laboral',
    d: 'El sector financiero e instituciones publicas priorizan graduados de programas acreditados por su formacion tecnica.',
    icon: Briefcase,
  },
  {
    t: 'Investigacion Financiada',
    d: 'Acceso a fondos exclusivos y patrocinios para tesis e interaccion social con respaldo institucional.',
    icon: PieChart,
  },
]

export const accreditationCta = {
  title: 'Declaracion de Calidad',
  label: 'Comprometidos con la Excelencia',
  icon: Star,
  links: [
    { href: '/institucional/acerca', label: 'Volver a Acerca', icon: CheckCircle2 },
    { href: '/institucional/autoridades', label: 'Ver Autoridades', icon: Users },
  ],
}
