# ProjectJLC
Proyecto de react avanzado en Cenfotec BCR

## Instrucciones de Instalación
1) Clonar el repositorio:
    git clone https://github.com/puk1393/ProjectJLC.git
2) Ingresar a la carpeta del proyecto:
    cd ProjectJLC    
3) Ingresar a la carpeta de este proyecto:
    cd devboard
4) Instalar dependencias:
    npm install
5) Ejecutar la aplicación:
    npm run dev
6) Abrir en el navegador:
    La terminal mostrará una URL similar a: http://localhost:3000/
    Abrir esa dirección en el navegador.
    
## Decisiones de arquitectura

- **Pruebas end-to-end (e2e):**
    - Se realizaron pruebas e2e con Playwright para validar el flujo completo de la aplicación y asegurar la calidad en escenarios reales de usuario.
- **Separación de lógica y presentación:**
    - Los componentes de presentación (UI) no contienen lógica de negocio, solo reciben props y renderizan. La lógica de manipulación de datos y estado está en hooks personalizados y contextos.

- **Custom Hooks reutilizables:**
    - Se crearon hooks como `useTickets`, `useDebounce`, `useLocalStorage` y `useFilters` para encapsular lógica reutilizable y desacoplar la UI de la lógica de negocio.

- **Testing y cobertura:**
    - Se implementaron pruebas unitarias para hooks, lógica de filtrado y componentes clave, asegurando robustez y facilitando el refactor.
- **Feature-based y Atomic Design:**
    - La estructura del proyecto sigue un enfoque por features y atomic design para máxima escalabilidad y mantenibilidad.
- **Uso de React.memo:**
    - Se memoizaron componentes como `ProjectListPresentation`, `TicketListPresentation`, `Badge` y `Button` para evitar renders innecesarios.
    - **¿Por qué?** Estos componentes reciben props que cambian poco y pueden renderizar grandes listas o elementos atómicos muchas veces. Memoizarlos mejora el rendimiento y la experiencia de usuario.
    - En componentes atómicos como `Badge` y `Button`, el memoizado es seguro y efectivo porque sus props suelen ser primitivas.
- **Persistencia y filtros:**
    - Los tickets se persisten en localStorage y el filtrado es centralizado, usando hooks personalizados y contextos.
- **Transición Kanban:**
    - El cambio de estado de los tickets sigue el patrón Kanban y está cubierto por pruebas unitarias.

## Notas: 
1) Asegúrese de tener instalado Node.js
2) La aplicación corre completamente en el cliente (sin backend)
3) Observar donde le crea la carpeta para su posterior eliminación
4) Ahora es un proyecto Next.js

## Autor:
Jeremy Lewis Castillo

## Uso de React.memo en ProjectListPresentation y TicketListPresentation
Ambos componentes utilizan `React.memo` para evitar renders innecesarios cuando sus props no han cambiado. Esto es especialmente útil porque:
- Renderizan listas potencialmente grandes de proyectos o tickets.
- Sus props suelen ser objetos derivados de filtros o estados globales, que solo cambian cuando realmente hay una actualización relevante.
- Al usar `React.memo`, se mejora el rendimiento y la experiencia de usuario, ya que solo se vuelven a renderizar cuando los datos realmente cambian, evitando renders costosos por cambios en otros estados del árbol de componentes.

Esto sigue la mejor práctica de optimización en componentes de presentación que reciben datos por props y no dependen de estados internos.

## Uso de React.memo en Badge y Button
Los componentes `Badge` y `Button` también utilizan `React.memo` porque:
- Son componentes atómicos reutilizables que pueden ser renderizados muchas veces en listas, tablas o formularios.
- Sus props suelen ser primitivas (texto, color, onClick, etc.), por lo que el memoizado es muy efectivo y seguro.
- Al usar `React.memo`, se evita que estos componentes se vuelvan a renderizar cuando sus props no cambian, incluso si el componente padre se actualiza por otros motivos.
- Esto mejora el rendimiento global de la aplicación, especialmente en interfaces con muchos botones o badges dinámicos.

En resumen, `React.memo` en componentes atómicos garantiza una UI más eficiente y reactiva, siguiendo las mejores prácticas de optimización en React.

## Capturas de pantalla
Proyectos:
 ![Pantalla principal](image.png)
 ![Pantalla de creación](image-1.png)
Tickets: 
![Pantalla principal](image-2.png) 
Acerca de: 
![Pantalla principal](image-3.png)