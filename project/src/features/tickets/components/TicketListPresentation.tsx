import type { Ticket } from "@/features/tickets";
import { TicketColumn } from "@/features/tickets";
import { getGroupTicketsByStatus } from "@/features/tickets";

interface Props {
  tickets: Ticket[];
}

export const TicketListPresentation = ({ tickets }: Props) => {
  const grouped = getGroupTicketsByStatus(tickets);
  
  return (
    <div className="ticket-list">
      <TicketColumn title="BACKLOG" tickets={grouped.backlog} />
      <TicketColumn title="UNDER REVIEW" tickets={grouped.underReview} />
      <TicketColumn title="IN PROGRESS" tickets={grouped.inProgress} />
      <TicketColumn title="DONE" tickets={grouped.done} />
    </div>
  );
};