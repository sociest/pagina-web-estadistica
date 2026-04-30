import {
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Search,
  Target,
  UserCircle2,
  Users,
} from 'lucide-react'

export const investigacionPersonalHero = {
  tag: 'DIRECTORIO INSTITUCIONAL',
  title: ['EQUIPO DE', 'INVESTIGACION IETA'],
  subtitle:
    'CONOCE A LOS DOCENTES INVESTIGADORES, PERSONAL ADMINISTRATIVO Y EQUIPO DE APOYO DEL INSTITUTO DE ESTADISTICA TEORICA Y APLICADA.',
}

export const investigacionPersonalDirector = {
  name: 'DR. (C) RAMIRO COA CLEMENTE',
  role: 'DIRECTOR DEL INSTITUTO DE ESTADISTICA TEORICA Y APLICADA',
  email: 'rcoa@fcpn.edu.bo',
  specialty: 'INVESTIGACION APLICADA Y GESTION ACADEMICA',
  imageUrl:
    'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=900',
}

export const investigacionPersonalResearchers = [
  {
    name: 'M.SC. NICOLAS CHAVEZ QUISBERT',
    role: 'DOCENTE INVESTIGADOR',
    specialty: 'SERIES DE TIEMPO Y MODELACION',
    email: 'nchavez@umsa.bo',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=700',
  },
  {
    name: 'M.SC. DINDO VALDEZ BLANCO',
    role: 'DOCENTE INVESTIGADOR',
    specialty: 'DEMOGRAFIA Y MODELOS LINEALES',
    email: 'dvaldez@umsa.bo',
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=700',
  },
  {
    name: 'LIC. RAUL DELGADO ALVAREZ',
    role: 'DOCENTE INVESTIGADOR',
    specialty: 'ESTADISTICA SOCIAL Y EDUCACION',
    email: 'rdelgado@umsa.bo',
    imageUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=700',
  },
  {
    name: 'LIC. JAIME PINTO AJHUACHO',
    role: 'DOCENTE INVESTIGADOR',
    specialty: 'MUESTREO Y MARCOS POBLACIONALES',
    email: 'jpinto@umsa.bo',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=700',
  },
  {
    name: 'M.SC. FERNANDO ODAY RIVERO SUGUIURA',
    role: 'DOCENTE INVESTIGADOR',
    specialty: 'ANALISIS MULTIVARIADO',
    email: 'frivero@umsa.bo',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=700',
  },
  {
    name: 'LIC. NILDA GLORIA FLORES SALINAS',
    role: 'DOCENTE INVESTIGADORA',
    specialty: 'OPTIMIZACION Y GESTION (PERT/CPM)',
    email: 'nflores@umsa.bo',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=700',
  },
]

export const investigacionPersonalAdministrative = [
  {
    name: 'SRA. ANGELICA ROSMERY BLANCO MAMANI',
    role: 'SECRETARIA DEL INSTITUTO',
    email: 'rblanco1@umsa.bo',
  },
  {
    name: 'SRA. LIDIA MAMANI MAYTA',
    role: 'PORTERA MENSAJERA',
    email: 'liditamayta@gmail.com',
  },
]

export const investigacionPersonalAuxiliaries = [
  {
    name: 'UNIV. ANAHI CABRERA CALISAYA',
    role: 'AUXILIAR DE INTERACCION SOCIAL',
    email: 'acabrerac@fcpn.edu.bo',
    icon: Users,
  },
  {
    name: 'UNIV. SERGIO ANTONIO COLQUE ALMANZA',
    role: 'AUXILIAR DE INTERACCION SOCIAL',
    email: 'scolquea@fcpn.edu.bo',
    icon: Users,
  },
  {
    name: 'UNIV. ABIGAIL QUISBERT CANAZA',
    role: 'AUXILIAR DE INVESTIGACION',
    email: 'aquisbertc@fcpn.edu.bo',
    icon: Search,
  },
  {
    name: 'UNIV. PRISCILA RAQUEL PAIVA AGOSTOPA',
    role: 'AUXILIAR DE INVESTIGACION',
    email: 'prpaivaa@fcpn.edu.bo',
    icon: Search,
  },
]

export const investigacionPersonalStats = [
  { label: 'DOCENTES', value: '06', icon: Users },
  { label: 'ADMINISTRATIVOS', value: '02', icon: Briefcase },
  { label: 'AUXILIARES', value: '04', icon: GraduationCap },
]

export const investigacionPersonalContactStrip = [
  {
    label: 'UBICACION',
    value: 'CAMPUS COTA COTA - BLOQUE FCPN, 1ER PISO',
    icon: MapPin,
  },
  {
    label: 'TELEFONO',
    value: '2612824 - 2612844',
    icon: Phone,
  },
  {
    label: 'CORREO',
    value: 'ieta@umsa.bo',
    icon: Mail,
  },
]

export const investigacionPersonalDirectorMeta = {
  badge: 'MAXIMA AUTORIDAD',
  sectionTag: 'NIVEL EJECUTIVO',
  sectionTitle: 'DIRECCION DEL IETA',
  sectionIcon: Award,
}

export const investigacionPersonalResearchersMeta = {
  sectionTag: 'EQUIPO ACADEMICO',
  sectionTitle: 'CUERPO DE INVESTIGADORES',
  sectionSubtitle:
    'PROFESIONALES DEDICADOS A LA INVESTIGACION CIENTIFICA ESTADISTICA Y AL DESARROLLO DE PROYECTOS DE IMPACTO SOCIAL.',
  pointIcon: Target,
}

export const investigacionPersonalSupportMeta = {
  sectionTag: 'OPERACION INSTITUCIONAL',
  sectionTitle: 'PERSONAL ADMINISTRATIVO Y APOYO',
  adminTitle: 'AREA ADMINISTRATIVA',
  auxTitle: 'AUXILIARES DEL IETA',
  adminIcon: UserCircle2,
}
