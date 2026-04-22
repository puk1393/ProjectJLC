// prueba integración entre lista, columnas y tickets renderizados.
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TicketListPresentation from "../TicketListPresentation";
import type { GroupedTickets } from "@/features/tickets";

describe("TicketListPresentation", () => {
    const grouped: GroupedTickets = {
    backlog: [
        {
        id: "1",
        title: "Bug login",
        projectId: "1",
        priority: "high",
        responsible: "Jeremy",
        status: "backlog"
        }
    ],
    underReview: [],
    inProgress: [
        {
        id: "2",
        title: "Dashboard error",
        projectId: "1",
        priority: "medium",
        responsible: "Ana",
        status: "in-progress"
        }
    ],
    done: []
    };

  it("renderiza correctamente las columnas y los tickets", () => {
    render(<TicketListPresentation grouped={grouped} />);

    expect(screen.getByText("BACKLOG")).toBeInTheDocument();
    expect(screen.getByText("EN PROGRESO")).toBeInTheDocument();
    expect(screen.getByText("EN REVISIÓN")).toBeInTheDocument();
    expect(screen.getByText("COMPLETADO")).toBeInTheDocument();

    expect(screen.getByText("Bug login")).toBeInTheDocument();
    expect(screen.getByText("Dashboard error")).toBeInTheDocument();
  });
});