import { ProjectListContainer } from "@/features/projects";

export default async function ProjectsPage() {
  await new Promise(r => setTimeout(r, 2000));

  return <ProjectListContainer />;
}