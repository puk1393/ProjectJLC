'use client';

import { useEffect } from "react";
import { useProjectManager, ProjectListPresentation } from "@/features/projects";

export const ProjectListContainer = () => {
  const {
    activeProjects,
    loading,
    totalActiveProjects,
    addProject,
    loadProjects,
  } = useProjectManager();

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  if (loading) return <p>Cargando proyectos...</p>;


  return (
    <ProjectListPresentation
      projects={activeProjects}
      addProject={addProject}
      totalProjects={totalActiveProjects}
    />
  );
};