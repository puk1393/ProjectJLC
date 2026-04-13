import type { Project } from "../types";

export const getActiveProjects = (projects: Project[]) => {
  return projects.filter(p => p.status === "active");
};