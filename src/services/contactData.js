import {
  Binary,
  Building,
  Building2,
  CalendarClock,
  Camera,
  Mail,
  MapPin,
  Microscope,
  Phone,
  Send,
  Sigma,
  Users,
} from 'lucide-react'

export const contactHero = {
  eyebrow: 'Atencion institucional y soporte',
  title: ['Centro de Atencion', 'Contacto Oficial'],
  description:
    'Canal unificado para consultas academicas, administrativas y de investigacion de la Carrera de Estadistica UMSA.',
  ctaLabel: 'Enviar consulta',
  leftShape: Sigma,
  rightShape: Binary,
  icon: Phone,
}

export const contactFaqs = [
  {
    question: 'Como solicito mi record academico actualizado?',
    answer:
      'Debes presentar una carta de solicitud en Kardex adjuntando la boleta de pago de valores universitarios. El tramite demora 48 horas habiles.',
  },
  {
    question: 'Cuando se publican las fechas del examen PSA?',
    answer:
      'Las fechas del examen de dispensacion (PSA) se publican en noviembre para semestre I y junio para semestre II en la seccion de Admisiones.',
  },
  {
    question: 'Donde debo entregar mis documentos de egreso?',
    answer:
      'La documentacion final para egreso debe entregarse en ventanilla de Secretaria de Kardex en la sede Monoblock Central.',
  },
]

export const contactFormConfig = {
  title: ['Envianos un', 'mensaje'],
  subtitle: 'Te responderemos al correo proporcionado en un lapso de 24 horas habiles.',
  submitLabel: 'Enviar mensaje',
  categories: [
    { value: 'tramites', label: 'Tramites academicos (Kardex)' },
    { value: 'pasantias', label: 'Pasantias y titulacion' },
    { value: 'investigacion', label: 'Investigacion y revista (IETA)' },
    { value: 'soporte', label: 'Soporte tecnico SIA' },
    { value: 'otro', label: 'Otras consultas' },
  ],
  studentToggleLabel: 'Soy estudiante de la carrera',
  fields: {
    fullName: 'Nombre completo',
    email: 'Correo electronico',
    category: 'Tipo de consulta',
    studentCode: 'Registro universitario (RU) - opcional',
    message: 'Mensaje',
  },
  placeholders: {
    fullName: 'Ej. Juan Perez',
    email: 'ejemplo@correo.com',
    category: 'Selecciona el area...',
    studentCode: 'Ej. 1234567',
    message: 'Escribe los detalles de tu consulta aqui...',
  },
  successMessage: 'Mensaje enviado correctamente. El equipo de soporte se pondra en contacto pronto.',
  icon: Send,
}

export const contactDirectoryPhones = [
  { unit: 'Secretaria de Direccion', role: 'Atencion general de la carrera', number: '2442100', ext: '123' },
  { unit: 'Kardex Academico', role: 'Records, certificados y tramites', number: '2442100', ext: '125' },
  { unit: 'Instituto IETA', role: 'Investigacion y consultorias', number: '2612824', ext: 'N/A', altNumber: '2612844' },
  { unit: 'Biblioteca Especializada', role: 'Consultas y prestamos', number: '2442100', ext: '130' },
  { unit: 'Centro de Estudiantes', role: 'Representacion y eventos', number: '76543210', ext: 'Celular' },
]

export const contactDirectoryEmails = [
  { unit: 'Direccion de Carrera', email: 'direccion@estadistica.umsa.bo', desc: 'Asuntos oficiales e institucionales.' },
  { unit: 'Kardex Academico', email: 'kardex@estadistica.umsa.bo', desc: 'Envio de requisitos y consultas de tramites.' },
  { unit: 'Instituto IETA', email: 'ieta@umsa.bo', desc: 'Recepcion de papers y proyectos.' },
]

export const contactDirectoryUi = {
  phonesTitle: 'Central telefonica',
  emailsTitle: 'Correos oficiales',
  phonesIcon: Phone,
  emailsIcon: Mail,
}

export const contactLocationsSection = {
  tag: 'Campus universitario',
  title: 'Nuestras sedes',
  subtitle:
    'La Carrera de Estadistica opera en ubicaciones estrategicas para docencia, investigacion y atencion estudiantil.',
}

export const contactLocations = [
  {
    id: 'monoblock',
    label: 'Administracion y pregrado',
    title: 'Sede Central',
    icon: Building,
    iconClassName: 'bg-[#001d3d] text-white',
    accentClassName: 'text-[#ea580c]',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2638891040327!2d-68.13110902484643!3d-16.50570658423851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2066c6b3e34b%3A0x6b14207865f5ed0!2sUniversidad%20Mayor%20de%20San%20Andr%C3%A9s%20(UMSA)!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo',
    mapTitle: 'Mapa Monoblock UMSA',
    details: [
      { icon: MapPin, text: 'Av. Villazon No 1995, Plaza del Bicentenario. Edificio Viejo del Monoblock Central, 2do piso.' },
      { icon: CalendarClock, text: 'Lunes a Viernes (08:00 - 16:00 hrs)' },
      { icon: Users, text: 'Direccion, Kardex y aulas de pregrado.' },
    ],
  },
  {
    id: 'cota-cota',
    label: 'Laboratorios e IETA',
    title: 'Sede Cota Cota',
    icon: Microscope,
    iconClassName: 'bg-teal-800 text-white',
    accentClassName: 'text-teal-600',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.2372728919634!2d-68.06941192484521!3d-16.53932758421066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2122601a4e1d%3A0x6b14207865f5ed0!2sCampus%20Universitario%20UMSA%20Cota%20Cota!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo',
    mapTitle: 'Mapa Cota Cota UMSA',
    details: [
      { icon: MapPin, text: 'Calle 27 de Cota Cota, Campus Universitario. Edificio de la FCPN, 1er piso.' },
      { icon: CalendarClock, text: 'Lunes a Viernes (09:00 - 17:00 hrs)' },
      { icon: Building2, text: 'Instituto IETA y laboratorios de computo.' },
    ],
  },
]

export const contactGallery = {
  title: ['Nuestros', 'espacios'],
  subtitle: 'Infraestructura para formacion, analisis de datos e investigacion aplicada.',
  icon: Camera,
  items: [
    {
      title: 'Entrada principal de la Carrera',
      sub: 'Monoblock Central',
      img: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1200',
    },
    {
      title: 'Laboratorio de computacion',
      sub: 'Equipamiento especializado',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
    },
    {
      title: 'Auditorio de conferencias',
      sub: 'Defensas y seminarios',
      img: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200',
    },
  ],
}

