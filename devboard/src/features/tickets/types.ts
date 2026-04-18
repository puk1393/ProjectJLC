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

export interface GroupedTickets {
  backlog: Ticket[];
  underReview: Ticket[];
  inProgress: Ticket[];
  done: Ticket[];
}

export type TicketAction =
  | { type: "LOAD"; payload: Ticket[] }
  | { type: "ADD"; payload: Ticket }
  | { type: "DELETE"; payload: string }
  | { type: "CHANGE_STATUS"; payload: { id: string; status: Ticket["status"] } };