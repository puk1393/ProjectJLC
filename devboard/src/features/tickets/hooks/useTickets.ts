'use client'; /* porque este hook se utiliza en componentes que renderizan hijos que usan hooks de React y componentes interactivos */

import {
  useCallback,
  useEffect,
  useReducer,
  useState,
  useMemo,
  useDeferredValue,
} from "react";

import type { Ticket, TicketAction } from "../types";
import { useAsync } from "@/shared/hooks/useAsync";
import { mockTickets } from "@/shared/data/mockData";

function ticketReducer(state: Ticket[], action: TicketAction): Ticket[] {
  switch (action.type) {
    case "LOAD":
      return action.payload;

    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter(t => t.id !== action.payload);

    case "CHANGE_STATUS":
      return state.map(t =>
        t.id === action.payload.id
          ? { ...t, status: action.payload.status }
          : t
      );

    default:
      return state;
  }
}

export const useTickets = (debouncedSearch?: string) => {
  const [mounted, setMounted] = useState(false);

  const [tickets, dispatch] = useReducer(ticketReducer, []);

  const [search, setSearch] = useState("");

  const deferredSearch = useDeferredValue(search);

  const effectiveSearch =
    typeof debouncedSearch === "string"
      ? debouncedSearch
      : deferredSearch;

  useEffect(() => {
    setMounted(true);

    const stored = localStorage.getItem("tickets");

    if (stored) {
      try {
        const parsed = JSON.parse(stored);

        if (Array.isArray(parsed)) {
          dispatch({
            type: "LOAD",
            payload: parsed,
          });
        }
      } catch (error) {
        console.warn("Invalid localStorage data ignored");
        localStorage.removeItem("tickets");
      }
    }
  }, []);

  const { data, loading, error } = useAsync<Ticket[]>(
    async (signal) => {
      if (signal.aborted) {
        throw new DOMException("Cancelled", "AbortError");
      }
      return mockTickets;
    },
    []
  );

  useEffect(() => {
    if (mounted && tickets.length === 0 && data) {
      dispatch({ type: "LOAD", payload: data });
    }
  }, [data, mounted, tickets.length]);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets, mounted]);

  const addTicket = useCallback((ticket: Ticket) => {
    dispatch({ type: "ADD", payload: ticket });
  }, []);

  const deleteTicket = useCallback((id: string) => {
    dispatch({ type: "DELETE", payload: id });
  }, []);

  const changeStatus = useCallback((id: string, status: Ticket["status"]) => {
    dispatch({ type: "CHANGE_STATUS", payload: { id, status } });
  }, []);

  const filteredTickets = useMemo(() => {
    if (!effectiveSearch) return tickets;

    return tickets.filter(t =>
      t.title.toLowerCase().includes(effectiveSearch.toLowerCase())
    );
  }, [tickets, effectiveSearch]);

  return {
    tickets,
    filteredTickets,
    search,
    setSearch,
    loading,
    error,
    addTicket,
    deleteTicket,
    changeStatus,
  };
};