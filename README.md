# Web Carrera de Estadistica UMSA

Documentacion tecnica principal del proyecto y rutas de referencia para el contenido institucional.

## Documentos CMS

1. [CMS_IMPLEMENTACION_DETALLADA.md](CMS_IMPLEMENTACION_DETALLADA.md)
2. [CMS_PREGRADO_IMPLEMENTACION_DETALLADA.md](CMS_PREGRADO_IMPLEMENTACION_DETALLADA.md)
3. [CMS_POSTGRADO_ESTUDIANTES_IMPLEMENTACION_DETALLADA.md](CMS_POSTGRADO_ESTUDIANTES_IMPLEMENTACION_DETALLADA.md)

## Estado actual

La web mantiene arquitectura atomica con contenido desacoplado en `src/services` y navegacion por rutas registradas.

## Verificacion

1. Ejecutar `npm run build` para validar la compilacion final.
2. Revisar que los enlaces del header y footer apunten a rutas activas.
3. Mantener actualizados los documentos CMS cuando cambie una pestana.
