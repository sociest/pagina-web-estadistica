import {
  Award,
  CheckCircle2,
  Eye,
  FlaskConical,
  Globe,
  GraduationCap,
  History,
  Landmark,
  Microscope,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react'

export const milestones = [
  {
    year: '1960',
    title: 'Mencion en Economia',
    desc: 'Inicia la especialidad de estadistica bajo la Facultad de Economia para atender la necesidad de cuantificar el desarrollo nacional.',
    img: 'https://images.unsplash.com/photo-1454165833968-5179399952d4?auto=format&fit=crop&q=80&w=400',
  },
  {
    year: '1972',
    title: 'Creacion de la FCPN',
    desc: 'Reapertura universitaria tras la intervencion de 1970. Se crea la Facultad de Ciencias Puras y Naturales integrando Estadistica como mencion.',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400',
  },
  {
    year: '1979',
    title: 'Primer Titulado',
    desc: 'Hito academico con la emision del primer titulo profesional, marcando el inicio de la demanda creciente de estadisticos en el pais.',
    img: 'https://images.unsplash.com/photo-1523240715181-320a9f23fa2a?auto=format&fit=crop&q=80&w=400',
  },
  {
    year: '1984',
    title: 'Autonomia de Carrera',
    desc: 'Por resolucion del 7mo congreso de universidades, la especialidad se separa definitivamente de Matematica como carrera autonoma.',
    img: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?auto=format&fit=crop&q=80&w=400',
  },
  {
    year: '1985',
    title: 'Creacion del IETA',
    desc: 'Fundacion del Instituto de Estadistica Teorica y Aplicada para desarrollar investigacion cientifica y consultoria estrategica.',
    img: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=400',
  },
]

export const values = [
  {
    icon: Target,
    title: 'Excelencia Academica',
    description: 'Compromiso con la formacion de profesionales altamente calificados con pensamiento critico y capacidad analitica.',
    color: '#00447e',
    stat: 'R2 = 0.98',
  },
  {
    icon: Users,
    title: 'Inclusion e Igualdad',
    description: 'Educacion de calidad accesible para todos los sectores de la sociedad boliviana sin discriminacion.',
    color: '#c2410c',
    stat: 'p < 0.01',
  },
  {
    icon: FlaskConical,
    title: 'Investigacion Cientifica',
    description: 'Generacion de conocimiento aplicado mediante IETA para resolver problemas nacionales estrategicos.',
    color: '#00447e',
    stat: 'n = 25+',
  },
  {
    icon: Globe,
    title: 'Responsabilidad Social',
    description: 'Contribucion activa al desarrollo sostenible mediante analisis estadistico etico y socialmente responsable.',
    color: '#c2410c',
    stat: 'sigma = 1.05',
  },
]

export const achievements = [
  { number: '50+', label: 'Anos', sublabel: 'Trayectoria', icon: History },
  { number: '380+', label: 'Estudiantes', sublabel: 'Matricula', icon: Users },
  { number: '1985', label: 'IETA', sublabel: 'Fundacion', icon: Microscope },
  { number: '120+', label: 'Titulados', sublabel: 'Gestion 2025', icon: GraduationCap },
]

export const objectives = [
  {
    t: 'Pensamiento Critico',
    d: 'Generar conocimiento cientifico con capacidad de analisis reflexivo critico de apoyo a las decisiones de estado.',
    id: '01',
  },
  {
    t: 'Cultura Estadistica',
    d: 'Desarrollar y difundir la ciencia, tecnologia y cultura estadistica dentro y fuera de la institucion universitaria.',
    id: '02',
  },
  {
    t: 'Integracion Praxis',
    d: 'Desarrollar el proceso academico integrando teoria y practica y fomentando la ensenanza aprendizaje ligada a la investigacion.',
    id: '03',
  },
]

export const aboutHero = {
  title: ['Referente', 'de la', 'Evidencia.'],
  description:
    'Identidad institucional, mision, vision y valores que guian nuestra formacion de estadisticos y cientificos de datos para Bolivia.',
  imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1200',
}

export const ietaSummary = {
  title: 'Instituto IETA',
  text: 'El Instituto de Estadistica Teorica y Aplicada tiene la finalidad de desarrollar investigacion cientifica y contribuir al avance en diferentes campos donde la estadistica es transversal.',
  founded: 'Octubre, 1985',
}

export const accreditation = {
  icon: ShieldCheck,
  title: 'Acreditacion Institucional',
  description:
    'Reconocidos por el CEUB como carrera de excelencia academica con certificacion de calidad en formacion estadistica.',
  links: [
    { href: '/institucional/acreditacion', label: 'Ver Acreditacion', icon: CheckCircle2 },
    { href: '/institucional/autoridades', label: 'Conoce Autoridades', icon: Landmark },
  ],
}

export const missionVision = {
  mission: {
    icon: Target,
    title: 'Mision',
    text: 'Formar profesionales idoneos y competentes en estadistica, capaces de generar soluciones creativas e innovadoras comprometidos con el desarrollo nacional.',
  },
  vision: {
    icon: Eye,
    title: 'Vision',
    text: 'Ser lider en la formacion de profesionales en ciencia estadistica, buscando excelencia academica mediante docencia, investigacion y extension.',
  },
}

export const sideBadges = {
  awardIcon: Award,
}
