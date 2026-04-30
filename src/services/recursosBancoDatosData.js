export const bancoDatosData = {
  hero: {
    eyebrow: 'ACCESO ABIERTO (OPEN DATA)',
    title: ['REPOSITORIO Y', 'BANCO DE DATOS'],
    highlight: 'BANCO DE DATOS',
    description:
      'Plataforma centralizada para la descarga de microdatos, censos, encuestas de hogares y acceso a investigaciones desarrolladas en la Carrera de Estadistica.',
    stats: [
      { value: '12.5K', label: 'DATASETS DISPONIBLES', icon: 'database' },
      { value: '450+', label: 'TESIS E INVESTIGACIONES', icon: 'library' },
    ],
  },
  datasets: [
    {
      id: 'ds-001',
      titulo: 'Censo Nacional de Poblacion y Vivienda 1992',
      categoria: 'Censos',
      ano: 1992,
      decada: 'Historicos',
      formatos: ['CSV'],
      fuente: 'INE',
      tamano: '450 MB',
      descripcion:
        'Base de datos completa con informacion demografica, caracteristicas de la vivienda, niveles de educacion, salud y empleo a nivel departamental y municipal.',
      archivos: [
        { nombre: 'Personas - Chuquisaca', formato: 'CSV', tamano: '45 MB', url: '#' },
        { nombre: 'Personas - Pando', formato: 'CSV', tamano: '12 MB', url: '#' },
        { nombre: 'Vivienda - Chuquisaca', formato: 'CSV', tamano: '30 MB', url: '#' },
        { nombre: 'Vivienda - Pando', formato: 'CSV', tamano: '8 MB', url: '#' },
      ],
    },
    {
      id: 'ds-002',
      titulo: 'Encuesta de Hogares (MECOVI) 2023',
      categoria: 'Encuestas de Hogares',
      ano: 2023,
      decada: '2020s',
      formatos: ['Stata', 'SPSS'],
      fuente: 'INE',
      tamano: '125 MB',
      descripcion:
        'Microdatos de la ultima medicion continua de las condiciones de vida y pobreza en el pais. Contiene modulos de ingresos, gastos, empleo, educacion y acceso a servicios basicos.',
      archivos: [
        { nombre: 'Modulo 1: Personas', formato: 'Stata', tamano: '50 MB', url: '#' },
        { nombre: 'Modulo 2: Gastos del Hogar', formato: 'SPSS', tamano: '45 MB', url: '#' },
        { nombre: 'Modulo 3: Vivienda', formato: 'Stata', tamano: '30 MB', url: '#' },
      ],
    },
    {
      id: 'ds-003',
      titulo: 'Investigacion: Modelacion de la Pobreza Multidimensional',
      categoria: 'Repositorio',
      ano: 2023,
      decada: '2020s',
      formatos: ['PDF'],
      fuente: 'IETA - UMSA',
      tamano: '4.2 MB',
      descripcion:
        'Documento de investigacion detallado que aplica tecnicas de modelacion estocastica para medir la pobreza desde multiples dimensiones (educacion, salud, vivienda) en areas periurbanas de Bolivia.',
      archivos: [
        { nombre: 'Documento Principal de Investigacion', formato: 'PDF', tamano: '3.5 MB', url: '#' },
        { nombre: 'Anexos y Tablas', formato: 'PDF', tamano: '0.7 MB', url: '#' },
      ],
    },
    {
      id: 'ds-004',
      titulo: 'Encuesta Nacional de Demografia y Salud (ENDSA) 2016',
      categoria: 'Encuestas de Salud',
      ano: 2016,
      decada: '2010s',
      formatos: ['SPSS', 'DTA'],
      fuente: 'Ministerio de Salud',
      tamano: '310 MB',
      descripcion:
        'Estudio exhaustivo sobre la dinamica demografica, salud materno-infantil, nutricion y prevalencia de enfermedades. Incluye bases separadas para hogares, mujeres en edad fertil y ninos.',
      archivos: [
        { nombre: 'Base de Datos: Mujeres (15-49 anos)', formato: 'SPSS', tamano: '120 MB', url: '#' },
        { nombre: 'Base de Datos: Ninez', formato: 'DTA', tamano: '90 MB', url: '#' },
        { nombre: 'Base de Datos: Hogares', formato: 'SPSS', tamano: '100 MB', url: '#' },
      ],
    },
    {
      id: 'ds-005',
      titulo: 'Series Estadisticas Economicas (Inflacion y PIB)',
      categoria: 'Series Economicas',
      ano: 2024,
      decada: '2020s',
      formatos: ['Excel', 'CSV'],
      fuente: 'BCB',
      tamano: '15 MB',
      descripcion:
        'Consolidado de series de tiempo macroeconomicas historicas actualizadas hasta 2024. Ideal para modelos ARIMA, vectores autorregresivos y analisis de cointegracion.',
      archivos: [
        { nombre: 'Serie Historica: Inflacion IPC', formato: 'Excel', tamano: '5 MB', url: '#' },
        { nombre: 'Serie Historica: PIB Trimestral', formato: 'CSV', tamano: '10 MB', url: '#' },
      ],
    },
    {
      id: 'ds-006',
      titulo: 'Tesis: Analisis Factorial Dinamico del Riesgo de Liquidez',
      categoria: 'Repositorio',
      ano: 2024,
      decada: '2020s',
      formatos: ['PDF'],
      fuente: 'IETA - UMSA',
      tamano: '5.8 MB',
      descripcion:
        'Tesis de grado que propone un modelo de analisis factorial dinamico para medir el riesgo de liquidez en el sistema bancario nacional.',
      archivos: [
        { nombre: 'Tesis Completa Defendida', formato: 'PDF', tamano: '5.8 MB', url: '#' },
      ],
    },
  ],
  filtros: {
    tipos: ['Censos', 'Encuestas de Hogares', 'Encuestas de Salud', 'Series Economicas', 'Repositorio'],
    formatos: ['SPSS', 'Stata', 'CSV', 'Excel', 'PDF'],
    decadas: ['2020s', '2010s', 'Historicos'],
  },
};
