import type { Ticket } from "../types";

export const getTicketsByProjectId = (tickets: Ticket[], projectId: string) => {
  return tickets.filter(t => t.projectId === projectId);
};

export const getGroupTicketsByStatus = (tickets: Ticket[]) => {
  return {
    backlog: tickets.filter(t => t.status === "backlog"),
    underReview: tickets.filter(t => t.status === "under-review"),
    inProgress: tickets.filter(t => t.status === "in-progress"),
    done: tickets.filter(t => t.status === "done"),
  };
};