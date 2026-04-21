import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TicketCard } from "../TicketCard";
import type { Ticket } from "@/features/tickets";

describe("TicketCard", () => {
  const ticket: Ticket = {
    id: "1",
    title: "Error en login",
    projectId: "1",
    priority: "high",
    responsible: "Jeremy",
    label: "Bug",
    status: "backlog",
  };

  it("renders ticket information", () => {
    render(
      <TicketCard
        ticket={ticket}
        changeStatus={vi.fn()}
      />
    );

    expect(screen.getByText("Error en login")).toBeInTheDocument();
    expect(screen.getByText("high")).toBeInTheDocument();
    expect(screen.getByText("Etiqueta: Bug")).toBeInTheDocument();
    expect(screen.getByText("Responsable: Jeremy")).toBeInTheDocument();
  });

  it("shows current selected status", () => {
    render(
      <TicketCard
        ticket={ticket}
        changeStatus={vi.fn()}
      />
    );

    expect(screen.getByDisplayValue("Backlog")).toBeInTheDocument();
  });

  it("calls changeStatus when status changes", () => {
    const changeStatus = vi.fn();

    render(
      <TicketCard
        ticket={ticket}
        changeStatus={changeStatus}
      />
    );

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "in-progress" },
    });

    expect(changeStatus).toHaveBeenCalledWith(
      "1",
      "in-progress"
    );
  });

  it("does not call changeStatus when same status selected", () => {
    const changeStatus = vi.fn();

    render(
      <TicketCard
        ticket={ticket}
        changeStatus={changeStatus}
      />
    );

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "backlog" },
    });

    expect(changeStatus).not.toHaveBeenCalled();
  });
});