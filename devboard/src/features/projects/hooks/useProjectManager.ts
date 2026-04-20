import { useProjectsStore, getActiveProjects } from "@/features/projects";
import { useMemo } from "react";

export const useProjectManager = () => {
  const {
    projects,
    loading,
    error,
    addProject,
    deleteProject,
    updateProject,
    changeStatus,
    loadProjects,
  } = useProjectsStore();

  const activeProjects = useMemo(() => getActiveProjects(projects), [projects]);

  const totalActiveProjects = useMemo(() => activeProjects.length,[activeProjects]);  

  return {
    projects,
    activeProjects,
    totalActiveProjects,
    loading,
    error,
    addProject,
    deleteProject,
    updateProject,
    changeStatus,
    loadProjects,
  };
};