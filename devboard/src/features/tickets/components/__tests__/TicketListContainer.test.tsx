import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TicketListContainer } from "../TicketListContainer";
import { TestProviders } from "@/features/tickets";

const mockUseTickets = vi.fn();

vi.mock("@/features/tickets", async () => {
  const actual = await vi.importActual("@/features/tickets");

  return {
    ...actual,
    useTickets: () => mockUseTickets(),
  };
});

describe("TicketListContainer", () => {
  it("shows loading fallback", async () => {
    mockUseTickets.mockReturnValue({
      filteredTickets: [],
      setSearch: vi.fn(),
      error: null,
      changeStatus: vi.fn(),
    });

    render(
      <TestProviders>
        <TicketListContainer projectId="A" />
      </TestProviders>
    );

    expect(
      await screen.findByText("Cargando lista de tickets...")
    ).toBeInTheDocument();
  });

  it("shows error message", () => {
    mockUseTickets.mockReturnValue({
      filteredTickets: [],
      setSearch: vi.fn(),
      error: "Error cargando",
      changeStatus: vi.fn(),
    });

    render(
      <TestProviders>
        <TicketListContainer projectId="A" />
      </TestProviders>
    );

    expect(
      screen.getByText(/error cargando/i)
    ).toBeInTheDocument();
  });

  it("renders ticket list", async () => {
    mockUseTickets.mockReturnValue({
      filteredTickets: [
        {
          id: "1",
          title: "Bug login",
          projectId: "A",
          priority: "high",
          responsible: "Jeremy",
          status: "backlog",
        },
      ],
      setSearch: vi.fn(),
      error: null,
      changeStatus: vi.fn(),
    });

    render(
      <TestProviders>
        <TicketListContainer projectId="A" />
      </TestProviders>
    );

    expect(
      await screen.findByText("Bug login")
    ).toBeInTheDocument();
  });
});