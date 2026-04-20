//prueba comportamiento aislado del componente.
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TicketCard } from "../TicketCard";
import type { Ticket } from "@/features/tickets";

describe("TicketCard", () => {
    const mockTicket: Ticket = {
    id: "1",
    title: "Error en login",
    projectId: "1",
    priority: "high",
    responsible: "Jeremy",
    status: "backlog"
    };

  it("renders ticket title, priority and status", () => {
    render(<TicketCard ticket={mockTicket} />);

    expect(screen.getByText("Error en login")).toBeInTheDocument();
    expect(screen.getByText("high")).toBeInTheDocument();
  });

  it("calls alert when clicking buttons", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<TicketCard ticket={mockTicket} />);

    const prevButton = screen.getByText("Etapa Anterior");
    const nextButton = screen.getByText("Siguiente Etapa");

    fireEvent.click(prevButton);
    expect(alertMock).toHaveBeenCalledWith("Hola etapa anterior");

    fireEvent.click(nextButton);
    expect(alertMock).toHaveBeenCalledWith("Hola siguiente etapa");

    alertMock.mockRestore();
  });
});