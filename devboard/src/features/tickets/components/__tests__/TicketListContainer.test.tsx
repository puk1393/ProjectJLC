import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TicketListContainer } from "../TicketListContainer";

vi.mock("@/features/tickets", async () => {
  const actual = await vi.importActual(
    "@/features/tickets"
  );

  return {
    ...actual,

    useTickets: () => ({
      filteredTickets: [
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
          projectId: "B",
          priority: "medium",
          responsible: "Ana",
          status: "done"
        }
      ],

      setSearch: vi.fn(),
      error: null
    })
  };
});

describe("TicketListContainer", () => {
  it("renders only tickets for selected project", () => {
    render(
      <TicketListContainer projectId="A" />
    );

    expect(
      screen.getByText("Bug login")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Dashboard")
    ).not.toBeInTheDocument();
  });
});