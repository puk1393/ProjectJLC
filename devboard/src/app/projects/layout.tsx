'use client'; /* Este layout es un componente cliente porque renderiza hijos que pueden ser clientes o servidores, y no sabemos cuál será el caso. */

import type { ReactNode } from "react";

export default function ProjectsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="projects-layout">
      {}
      <aside className="projects-sidebar">
        <div className="projects-sidebar-header">
          <h2>📁 Proyectos </h2>
        </div>
      </aside>

      {}
      <main className="projects-main">
        <section className="projects-content">
          {children}
        </section>
      </main>
    </div>
  );
}