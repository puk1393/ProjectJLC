# DevBoard — Optimización, Testing y Calidad

Este documento resume las mejoras aplicadas al proyecto DevBoard enfocadas en rendimiento, experiencia de usuario y buenas prácticas en Next.js + React.

## Componentes analizados

- TicketListContainer
Sin utilizar useMemo
![Console](/ProjectJLC/devboard/optimizations/image.png)
![React Dev Tools Profiler](/ProjectJLC/devboard/optimizations/image-2.png)
Utilizando useMemo
![Console](/ProjectJLC/devboard/optimizations/image-1.png)
![React Dev Tools Profiler](/ProjectJLC/devboard/optimizations/image-3.png)

Optimizaciones específicas de Next.js
1) Se reemplazo <img> por <Image src="/DevBoard.png" alt="DevBoard" width={200} height={75}/>
2) Implementación de Metadata API
3) Loading.tsx en las rutas principales con Skeleton
4) Testing y calidad

En conclusión, las optimizaciones aplicadas en DevBoard: desde el uso de useMemo hasta la integración de la Metadata API y pruebas automatizadas, garantizan un proyecto más eficiente, escalable y preparado para producción.