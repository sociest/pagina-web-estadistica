export const tesisData = {
  hero: {
    eyebrow: 'INVESTIGACION CIENTIFICA VALIDADA',
    title: ['CYBER-TESIS Y', 'PRODUCCION INTELECTUAL'],
    description:
      'Indice estructurado de tesis y proyectos de grado. Explora por ano, autores y areas oficiales de materia.',
  },
  tabs: [
    { id: 'general', label: 'TODOS LOS TRABAJOS', icon: 'BookOpen' },
    { id: 'materias', label: 'POR MATERIAS', icon: 'School' },
    { id: 'temas', label: 'POR TEMAS', icon: 'Tag' },
    { id: 'autores', label: 'POR AUTORES', icon: 'User' },
    { id: 'tutores', label: 'POR TUTORES', icon: 'Users' },
  ],
  modalidades: ['Tesis de Grado', 'Proyecto de Grado', 'Trabajo Dirigido', 'Pasantia'],
  investigaciones: [
    {
      id: 'tesis-001',
      titulo:
        'Modelacion de Series de Tiempo para la Inflacion en Bolivia empleando enfoques Bayesianos',
      autor: 'Perez Miranda, Juan',
      tutor: 'M.Sc. Ramiro Coa Clemente',
      materia: 'Estadistica Economica',
      modalidad: 'Tesis de Grado',
      anoDefensa: 2025,
      palabrasClave: ['Series de Tiempo', 'ARIMA', 'Econometria', 'Bayesiano'],
      resumen:
        'El presente trabajo analiza la dinamica de la inflacion en Bolivia durante el periodo 2005-2024. Se propone un enfoque de modelacion estocastica comparando modelos ARIMA clasicos con aproximaciones bayesianas.',
      enlaceRepositorio: 'https://repositorio.umsa.bo/handle/123456789/12345',
    },
    {
      id: 'td-002',
      titulo: 'Sistema de Control Estadistico de Calidad para la Empresa Estatal Quipus',
      autor: 'Mamani Choque, Ana',
      tutor: 'Lic. Jaime Pinto',
      materia: 'Estadistica Industrial',
      modalidad: 'Trabajo Dirigido',
      anoDefensa: 2024,
      palabrasClave: ['Control de Calidad', 'Industria', 'Graficos de Control', 'Six Sigma'],
      resumen:
        'Implementacion de un modelo de control estadistico de procesos (CEP) en la linea de ensamblaje de equipos tecnologicos de la Empresa Quipus.',
      enlaceRepositorio: 'https://repositorio.umsa.bo/handle/123456789/67890',
    },
    {
      id: 'pg-003',
      titulo: 'Clasificacion de Riesgo Crediticio utilizando Machine Learning',
      autor: 'Aliaga, Roberto Carlos',
      tutor: 'M.Sc. Ivan Yony Aliaga',
      materia: 'Mineria de Datos',
      modalidad: 'Proyecto de Grado',
      anoDefensa: 2023,
      palabrasClave: ['Machine Learning', 'Riesgo Crediticio', 'Random Forest'],
      resumen:
        'Este proyecto desarrolla un sistema de clasificacion para la prediccion de mora en carteras de microcredito utilizando algoritmos de aprendizaje supervisado.',
      enlaceRepositorio: 'https://repositorio.umsa.bo/handle/123456789/11223',
    },
    {
      id: 'tesis-004',
      titulo: 'Analisis Geoespacial de la Cobertura en Salud Materno-Infantil',
      autor: 'Quispe, Maria Rene',
      tutor: 'Dra. Martha P. Bohorquez',
      materia: 'Bioestadistica',
      modalidad: 'Tesis de Grado',
      anoDefensa: 2024,
      palabrasClave: ['Geoestadistica', 'Salud Publica', 'Analisis Espacial', 'Kriging'],
      resumen:
        'La investigacion aplica tecnicas de geoestadistica para mapear y analizar la cobertura de los servicios de salud materno-infantil en el Altiplano Norte.',
      enlaceRepositorio: 'https://repositorio.umsa.bo/handle/123456789/44556',
    },
    {
      id: 'pas-005',
      titulo: 'Actualizacion del Marco Muestral para Encuestas Economicas',
      autor: 'Chavez, Nicolas Alejandro',
      tutor: 'M.Sc. Ramiro Coa Clemente',
      materia: 'Diseno de Muestreo',
      modalidad: 'Pasantia',
      anoDefensa: 2022,
      palabrasClave: ['Muestreo', 'Marco Muestral', 'Encuestas'],
      resumen:
        'Memoria de la experiencia desarrollada en el INE para la actualizacion cartografica y estadistica del marco muestral de viviendas.',
      enlaceRepositorio: 'https://repositorio.umsa.bo/handle/123456789/99887',
    },
  ],
};
