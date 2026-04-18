import { TicketColumn } from "@/features/tickets";
import type { GroupedTickets } from "@/features/tickets";

interface Props {  
  grouped: GroupedTickets;
}

export const TicketListPresentation = ({grouped} : Props) => {
  return (
    <div className="ticket-list">
      <TicketColumn title="BACKLOG" tickets={grouped.backlog}/>
      <TicketColumn title="UNDER REVIEW" tickets={grouped.underReview} />
      <TicketColumn title="IN PROGRESS" tickets={grouped.inProgress} />
      <TicketColumn title="DONE" tickets={grouped.done} />
    </div>
  );
};