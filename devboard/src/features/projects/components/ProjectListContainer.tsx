'use client';

import { useProjects, ProjectListPresentation, } from "@/features/projects";
import { getActiveProjects} from "@/features/projects";

export const ProjectListContainer = () => {
  const { projects, addProject} = useProjects();

  const filtered = getActiveProjects(projects);

  return (
    <ProjectListPresentation projects={filtered} addProject={addProject} />
  );
};