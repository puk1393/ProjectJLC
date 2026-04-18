'use client'; //Se debe usar como useClient porque useTickets utiliza useState y el useEffect
import { useTickets } from "@/features/tickets";
import { TicketListPresentation } from "@/features/tickets"
import { getTicketsByProjectId } from "@/features/tickets";

export const TicketListContainer = ({ projectId }: { projectId: string }) => {
  
  const { tickets } = useTickets();

  const filtered = getTicketsByProjectId(tickets,projectId);

  return <TicketListPresentation tickets={filtered} />;
};