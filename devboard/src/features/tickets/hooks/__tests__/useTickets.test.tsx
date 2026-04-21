import { renderHook, waitFor, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { useTickets } from "../useTickets";

describe("useTickets", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("loads mock tickets", async () => {
    const { result } = renderHook(() => useTickets());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.tickets.length).toBeGreaterThan(0);
    expect(result.current.error).toBe(null);
  });

  it("adds a ticket", async () => {
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

  it("deletes a ticket", async () => {
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

  it("changes ticket status", async () => {
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

  it("loads tickets from localStorage if present", async () => {
    localStorage.setItem(
      "tickets",
      JSON.stringify([
        {
          id: "500",
          title: "Stored ticket",
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

    expect(result.current.tickets[0].id).toBe("500");
    expect(result.current.tickets[0].title).toBe("Stored ticket");
  });

  it("ignores invalid localStorage JSON", async () => {
    localStorage.setItem("tickets", "INVALID_JSON");

    const { result } = renderHook(() => useTickets());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.tickets.length).toBeGreaterThan(0);
  });

  it("filters tickets by search text", async () => {
    const { result } = renderHook(() => useTickets());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    act(() => {
      result.current.setSearch("login");
    });

    expect(
      result.current.filteredTickets.every(t =>
        t.title.toLowerCase().includes("login")
      )
    ).toBe(true);
  });

  it("returns all tickets when search is empty", async () => {
    const { result } = renderHook(() => useTickets());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(
      result.current.filteredTickets.length
    ).toBe(result.current.tickets.length);
  });
});