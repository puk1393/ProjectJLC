import type { Metadata } from "next";
import { ProjectListContainer } from "@/features/projects";

export const metadata: Metadata = {
  title: "Proyectos | DevBoard",
  description: "Gestiona proyectos y da seguimiento al progreso del equipo.",
  openGraph: {
    title: "Proyectos | DevBoard",
    description:
      "Gestiona proyectos y da seguimiento al progreso del equipo.",
  },
};

export default async function ProjectsPage() {
  await new Promise(r => setTimeout(r, 2000));

  return <ProjectListContainer />;
}