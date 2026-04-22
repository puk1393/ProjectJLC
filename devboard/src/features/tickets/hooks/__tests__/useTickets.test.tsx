import { renderHook, waitFor, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { useTickets } from "../useTickets";

describe("useTickets", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("carga los tickets mock", async () => {
    const { result } = renderHook(() => useTickets());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.tickets.length).toBeGreaterThan(0);
    expect(result.current.error).toBe(null);
  });

  it("agrega un ticket", async () => {
    const { result } = renderHook(() => useTickets());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    act(() => {
      result.current.addTicket({
        id: "999",
        title: "Nuevo Ticket",
        projectId: "1",
        priority: "high",
        responsible: "Jeremy",
        status: "backlog",
      });
    });

    expect(
      result.current.tickets.some(t => t.id === "999")
    ).toBe(true);
  });

  it("elimina un ticket", async () => {
    const { result } = renderHook(() => useTickets());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    const firstId = result.current.tickets[0].id;

    act(() => {
      result.current.deleteTicket(firstId);
    });

    expect(
      result.current.tickets.some(t => t.id === firstId)
    ).toBe(false);
  });

  it("cambia el estado de un ticket", async () => {
    const { result } = renderHook(() => useTickets());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    const firstId = result.current.tickets[0].id;

    act(() => {
      result.current.changeStatus(firstId, "done");
    });

    const updated = result.current.tickets.find(
      t => t.id === firstId
    );

    expect(updated?.status).toBe("done");
  });

  it("carga tickets desde localStorage si existen", async () => {
    localStorage.setItem(
      "tickets",
      JSON.stringify([
        {
          id: "1",
          title: "Crear login",
          projectId: "1",
          priority: "high",
          responsible: "Jeremy",
          status: "backlog",
        },
      ])
    );

    const { result } = renderHook(() => useTickets());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.tickets[0].id).toBe("1");
    expect(result.current.tickets[0].title).toBe("Crear login");
  });

  it("ignora JSON inválido en localStorage", async () => {
    localStorage.setItem("tickets", "INVALID_JSON");

    const { result } = renderHook(() => useTickets());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.tickets.length).toBeGreaterThan(0);
  });

  it("devuelve todos los tickets si la búsqueda está vacía", async () => {
    const { result } = renderHook(() => useTickets());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(
      result.current.filteredTickets.length
    ).toBe(result.current.tickets.length);
  });
});