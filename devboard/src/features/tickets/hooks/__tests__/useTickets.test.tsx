'use client';

import { renderHook, waitFor, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useTickets } from "../useTickets";

describe("useTickets", () => {
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
        status: "backlog"
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
});