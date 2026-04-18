import type { Ticket } from "@/features/tickets";
import { TicketCard }  from "@/features/tickets";

export const TicketColumn = ({ title, tickets }: { title: string; tickets: Ticket[] }) => {
  return (
    <div>
      <h3>{title}</h3>
      {tickets.map(ticket => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};