import { TicketColumn } from "@/features/tickets";
import type { GroupedTickets } from "@/features/tickets";
import { memo } from "react";

import type { TicketStatus } from "@/features/tickets";

interface TicketListProps {  
  grouped: GroupedTickets;
  changeStatus: (id: string, status: TicketStatus) => void;
}

const TicketListPresentation = memo(function TicketListPresentation({ grouped, changeStatus }: TicketListProps) {
  return (
    <div className="ticket-list">
      <TicketColumn title="BACKLOG" tickets={grouped.backlog} changeStatus={changeStatus}/>
      <TicketColumn title="EN PROGRESO" tickets={grouped.inProgress} changeStatus={changeStatus}/>
      <TicketColumn title="EN REVISIÓN" tickets={grouped.underReview} changeStatus={changeStatus}/>
      <TicketColumn title="COMPLETADO" tickets={grouped.done} changeStatus={changeStatus}/>
    </div>
  );
});

export default TicketListPresentation;