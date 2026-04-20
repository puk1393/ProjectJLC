'use client'; // Necesario porque este componente usa hooks de React (useEffect, useCallback) y lógica interactiva

import { useEffect, useCallback } from "react";
import { useProjectManager, ProjectListPresentation, Project } from "@/features/projects";

export const ProjectListContainer = () => {
  const {
    activeProjects,
    totalActiveProjects,
    addProject,
    loadProjects,
  } = useProjectManager();

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const handleAddProject = useCallback(async (project: Project) => {
    await addProject(project);
  }, [addProject]);  

  return (
    <ProjectListPresentation
      projects={activeProjects}
      addProject={handleAddProject}
      totalProjects={totalActiveProjects}
    />
  );
};