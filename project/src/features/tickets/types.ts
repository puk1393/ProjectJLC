export type TicketStatus = "backlog" | "in-progress" | "under-review" | "done";

export type TicketPriority = "low" | "medium" | "high" | "dismissed";

export interface Ticket {
  id: string;
  title: string;
  priority?: TicketPriority;
  projectId?: string;
  responsible?: string;
  label?: string
  status?: TicketStatus;
}