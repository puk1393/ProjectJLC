import { useProjectsStore, getActiveProjects } from "@/features/projects";

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

  const activeProjects = getActiveProjects(projects);

  const totalActiveProjects = activeProjects.length;

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