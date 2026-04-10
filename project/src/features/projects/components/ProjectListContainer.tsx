import { useProjects }             from '@/features/projects';
import { ProjectListPresentation } from "@/features/projects";

export const ProjectListContainer = () => {
  const { projects } = useProjects();
  const filtered = projects.filter(t => t.status === "active");

  return <ProjectListPresentation projects={filtered} />;
};