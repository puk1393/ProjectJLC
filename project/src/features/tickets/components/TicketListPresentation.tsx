import type { Ticket } from "@/features/tickets";
import { TicketColumn } from "@/features/tickets";

interface Props {
  tickets: Ticket[];
}

export const TicketListPresentation = ({ tickets }: Props) => {
  const backlog = tickets.filter(t => t.status === "backlog");
  const underReview = tickets.filter(t => t.status === "under-review");
  const inProgress = tickets.filter(t => t.status === "in-progress");
  const done = tickets.filter(t => t.status === "done");

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <TicketColumn title="BACKLOG" tickets={backlog} />
      <TicketColumn title="UNDER REVIEW" tickets={underReview} />
      <TicketColumn title="IN PROGRESS" tickets={inProgress} />
      <TicketColumn title="DONE" tickets={done} />
    </div>
  );
};