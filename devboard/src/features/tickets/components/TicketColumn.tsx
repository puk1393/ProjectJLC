import type { Ticket } from "@/features/tickets";
import { TicketCard }  from "@/features/tickets";

export const TicketColumn = ({ title, tickets }: { title: string; tickets: Ticket[] }) => {
  return (
  <div className="ticket-column">
    <h3 className="ticket-column-title">{title}</h3>

    <div className="ticket-column-content">
      {tickets.map(ticket => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  </div>
  );
};