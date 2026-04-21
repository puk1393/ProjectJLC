import { TicketListContainer } from "@/features/tickets";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tickets | DevBoard",
  description: "Gestiona tickets y da seguimiento al progreso de los mismos.",
  openGraph: {
    title: "Proyectos | DevBoard",
    description:
      "Gestiona tickets y da seguimiento al progreso de los mismos.",
  },
};

export default async function TicketsPage({searchParams}: {
  searchParams: Promise<{
    project?: string;
  }>;
  }) {
  await new Promise(r => setTimeout(r, 2000));
  const params = await searchParams;

  const projectId = params.project ?? "1";

  return (<TicketListContainer projectId={projectId} />);
}