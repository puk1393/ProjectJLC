import { TicketColumn } from "@/features/tickets";
import type { GroupedTickets } from "@/features/tickets";
import { memo } from "react";

interface TicketListProps {  
  grouped: GroupedTickets;
}

export const TicketListPresentation = memo(function TicketListPresentation({ grouped }: TicketListProps) {
  return (
    <div className="ticket-list">
      <TicketColumn title="BACKLOG" tickets={grouped.backlog}/>
      <TicketColumn title="UNDER REVIEW" tickets={grouped.underReview} />
      <TicketColumn title="IN PROGRESS" tickets={grouped.inProgress} />
      <TicketColumn title="DONE" tickets={grouped.done} />
    </div>
  );
});