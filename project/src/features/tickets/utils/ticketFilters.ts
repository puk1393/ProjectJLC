import type { Ticket } from "../types";

export const getTicketsByProjectId = (tickets: Ticket[], projectId: string) => {
  return tickets.filter(t => t.projectId === projectId);
};