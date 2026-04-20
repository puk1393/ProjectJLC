import { describe, it, expect } from "vitest";
import { getTicketsByProjectId, getGroupTicketsByStatus } from "../ticketFilters";
import { Ticket } from "../../types";

describe("ticketFilters", () => {
    const tickets: Ticket[] = [
    {
        id: "1",
        title: "Bug login",
        projectId: "A",
        priority: "high",
        responsible: "Jeremy",
        status: "backlog"
    },
    {
        id: "2",
        title: "Dashboard",
        projectId: "A",
        priority: "medium",
        responsible: "Ana",
        status: "in-progress"
    },
    {
        id: "3",
        title: "Fix CSS",
        projectId: "B",
        priority: "low",
        responsible: "Luis",
        status: "done"
    },
    {
        id: "4",
        title: "Review API",
        projectId: "B",
        priority: "high",
        responsible: "Maria",
        status: "under-review"
    }
    ];

  it("filters tickets by projectId", () => {
    const result = getTicketsByProjectId(tickets, "A");

    expect(result).toHaveLength(2);
    expect(result[0].title).toBe("Bug login");
    expect(result[1].title).toBe("Dashboard");
  });

  it("groups tickets by status", () => {
    const grouped = getGroupTicketsByStatus(tickets);

    expect(grouped.backlog).toHaveLength(1);
    expect(grouped.underReview).toHaveLength(1);
    expect(grouped.inProgress).toHaveLength(1);
    expect(grouped.done).toHaveLength(1);

    expect(grouped.backlog[0].title).toBe("Bug login");
    expect(grouped.done[0].title).toBe("Fix CSS");
  });
});