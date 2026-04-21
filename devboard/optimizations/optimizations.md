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
