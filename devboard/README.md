# ProjectJLC
Proyecto de react avanzado en Cenfotec BCR
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
    La terminal mostrará una URL similar a: http://localhost:5173/
    Abrir esa dirección en el navegador.

Notas: 
1) Asegúrese de tener instalado Node.js
2) La aplicación corre completamente en el cliente (sin backend)
3) Observar donde le crea la carpeta para su posterior eliminación
4) Ahora es un proyecto Next.js

Autor:
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

