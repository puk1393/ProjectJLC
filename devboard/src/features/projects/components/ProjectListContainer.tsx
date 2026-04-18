'use client'; //Se debe usar como useClient porque useProjects utiliza useState y el useEffect
import { useProjects }             from '@/features/projects';
import { ProjectListPresentation } from "@/features/projects";
import { getActiveProjects }       from '@/features/projects';

export const ProjectListContainer = () => {
  
  const { projects } = useProjects();

  const filtered = getActiveProjects(projects);

  return <ProjectListPresentation projects={filtered} />;
};