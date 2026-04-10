import { useTickets } from "@/features/tickets";
import { TicketListPresentation } from "@/features/tickets"

export const TicketListContainer = ({ projectId }: { projectId: string }) => {
  const { tickets } = useTickets();

  const filtered = tickets.filter(t => t.projectId === projectId);

  return <TicketListPresentation tickets={filtered} />;
};