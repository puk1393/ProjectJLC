'use client';

import type { ReactNode } from "react";
import Link from "next/link";

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