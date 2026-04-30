import { Cpu, Library, Users } from 'lucide-react'

export const contactoHeroData = {
  title: ['Líneas de', 'Comunicación'],
  subtitle: 'Unidad centralizada del Instituto de Estadística Teórica y Aplicada. Conectamos la academia con el sector público y privado mediante soluciones basadas en datos.',
  phoneTitle: 'Central Telefónica',
  phones: '2612824 – 2612844',
  email: 'ieta@umsa.bo',
  hours: '09:00 - 17:00',
  sedeText: 'Sede Sur: Cota Cota'
}

export const contactoUbicacionData = {
  title: '¿Cómo Llegar al IETA?',
  image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.2372728919634!2d-68.06941192484521!3d-16.53932758421066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2122601a4e1d%3A0x6b14207865f5ed0!2sCampus%20Universitario%20UMSA%20Cota%20Cota!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo',
  description: 'Calle 27 de Cota Cota. Edificio de la Facultad de Ciencias Puras y Naturales, Bloque de Laboratorios.',
  reference: 'El instituto no se encuentra en el Monoblock Central. Estamos en el bloque académico de investigación científica, rodeados de los laboratorios de Física y Química.'
}

export const contactoInfraestructuraData = {
  title: 'Capacidades Técnicas',
  subtitle: 'Infraestructura diseñada para soportar procesamiento analítico de alta demanda y consulta bibliográfica científica.',
  facilities: [
    { title: 'Labs. Big Data', icon: Cpu, desc: 'Equipos de alto rendimiento optimizados para procesamiento paralelo y simulación de modelos complejos.' },
    { title: 'Biblioteca Especializada', icon: Library, desc: 'Acervo técnico con censos históricos, libros clásicos de estadística y journals internacionales.' },
    { title: 'Salas de Consultoría', icon: Users, desc: 'Espacios modernos para la defensa de tesis, memorias de pasantía y reuniones ejecutivas.' }
  ]
}

export const contactoFormTypes = [
  'Institución Pública', 
  'Empresa Privada', 
  'Investigador Externo', 
  'Estudiante UMSA'
]

export const contactoScientificLinks = [
  { name: 'Revista Varianza', type: 'IETA - UMSA', url: '#' },
  { name: 'JASA (Journal of ASA)', type: 'Internacional', url: 'https://amstat.tandfonline.com/toc/uasa20/current' },
  { name: 'Revista Colombiana de Estadística', type: 'Regional', url: '#' },
  { name: 'Investigación Operacional', type: 'Científica', url: '#' },
  { name: 'Portal SciELO', type: 'Indexador', url: 'https://scielo.org/' },
  { name: 'Latindex', type: 'Indexador', url: 'https://www.latindex.org/' }
]
