import { Briefcase, Gavel, GraduationCap, Scale, UserCheck, Users, Zap } from 'lucide-react'

export const authoritiesHero = {
  eyebrow: 'Gobierno y Liderazgo',
  title: ['Autoridades', 'y', 'Gobierno.'],
  description:
    'Liderazgo comprometido con la excelencia academica y la transparencia institucional en la Carrera de Estadistica, fundamentado en cogobierno paritario.',
  imageUrl:
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
  chips: [
    { symbol: 'partial', label: 'Gestion', subtitle: 'Eficiente' },
    { symbol: 'beta', label: 'Beta = 0.8', subtitle: 'Potencia Academica' },
  ],
}

export const directionData = [
  {
    name: 'Ph.D. Juan Carlos Flores Lopez',
    role: 'Director de Carrera (Titular)',
    email: 'jcflores@fcpn.edu.bo',
    stats: { s: 'alpha', v: '0.05' },
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    color: '#c2410c',
  },
  {
    name: 'M.Sc. Lucy Gabriela Cuarita Ajno',
    role: 'Directora Academica (Titular)',
    email: 'lcuarita@fcpn.edu.bo',
    stats: { s: 'lambda', v: '0.82' },
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    color: '#00447e',
  },
]

export const hccTeachers = [
  {
    name: 'Ph.D. Juan Carlos Flores Lopez',
    role: 'Docente Titular',
    email: 'jcflores@fcpn.edu.bo',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'M.Sc. Fernando Oday Rivero Suguiura',
    role: 'Docente Titular',
    email: 'friverosuguiura2004@gmail.com',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Lic. Nilda Gloria Flores de Uribe',
    role: 'Docente Titular',
    email: 'nildafloress@hotmail.com',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
  },
]

export const hccStudents = [
  {
    name: 'Univ. Jhoseline Gloria Chambi Velasco',
    role: 'Delegada Estudiantil',
    email: 'jchambiv@fcpn.edu.bo',
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Univ. Alejandra Edith Salas Birrueta',
    role: 'Delegada Estudiantil',
    email: 'aesalas@fcpn.edu.bo',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Univ. Alejandra Adela Velarde Machicado',
    role: 'Delegada Estudiantil',
    email: 'avelardem@fcpn.edu.bo',
    img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400',
  },
]

export const hccMeta = {
  title: 'Honorable Consejo de Carrera (HCC)',
  subtitle: 'Organo de Cogobierno',
  description:
    'Estructura paritaria encargada de decisiones normativas, academicas y administrativas para el desarrollo integral de la carrera.',
  teacherTitle: 'Estamento Docente',
  studentTitle: 'Estamento Estudiantil',
  teacherIcon: Gavel,
  studentIcon: Users,
}

export const orgStructure = {
  title: 'Arquitectura de Gestion',
  subtitle: 'Organigrama Funcional',
  top: { title: 'Direccion de Carrera', level: 'Nivel Ejecutivo' },
  middle: [
    { title: 'Honorable Consejo (HCC)', subtitle: 'Cogobierno Docente - Estudiantil', tag: 'Normativo', icon: Scale },
    { title: 'Gestion de Calidad', subtitle: 'Coordinacion Curricular', tag: 'Academico', icon: Briefcase },
  ],
  bottom: [
    { title: 'Kardex Academico', icon: UserCheck },
    { title: 'Secretaria de Direccion', icon: GraduationCap },
    { title: 'Soporte Tecnico', icon: Zap },
  ],
}
