'use client'; // Necesario porque este hook usa useReducer y otros hooks de React

import { useCallback, useEffect, useReducer, useState, useDeferredValue, useMemo } from "react";
import type { Ticket, TicketAction } from "../types";
import { useAsync } from "@/shared/hooks/useAsync";
import { mockTickets } from '@/shared/data/mockData';

function ticketReducer(state: Ticket[], action: TicketAction): Ticket[] {
  switch (action.type) {
    case "LOAD":
      return action.payload;

    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter(ticket => ticket.id !== action.payload);

    case "CHANGE_STATUS":
      return state.map(ticket =>
        ticket.id === action.payload.id
          ? { ...ticket, status: action.payload.status }
          : ticket
      );

    default:
      return state;
  }
}

export const useTickets = (debouncedSearch?: string) => {
  // Inicializa tickets desde localStorage si existe, si no usa []
  const [tickets, dispatch] = useReducer(ticketReducer, [], () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("tickets");
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {}
      }
    }
    return [];
  });
  const [search, setSearch] = useState("");
  // Si se pasa debouncedSearch, úsalo; si no, usa useDeferredValue como antes
  const effectiveSearch = typeof debouncedSearch === "string" ? debouncedSearch : useDeferredValue(search);

  const {
    data,
    loading,
    error,
  } = useAsync<Ticket[]>(
    async (signal) => {
      if (signal.aborted)
        throw new DOMException(
          "Cancelled",
          "AbortError"
        );
      return mockTickets;
    },
    []
  );

  useEffect(() => {
    // Solo cargar mockTickets si no hay nada en localStorage
    if ((!tickets || tickets.length === 0) && data) {
      dispatch({
        type: "LOAD",
        payload: data,
      });
    }
    // eslint-disable-next-line
  }, [data]);

  // Persistir tickets en localStorage cada vez que cambian
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("tickets", JSON.stringify(tickets));
    }
  }, [tickets]);

  const addTicket = useCallback((ticket: Ticket) => {
    dispatch({ type: "ADD", payload: ticket });
  }, [dispatch]);

  const deleteTicket = useCallback((id: string) => {
    dispatch({ type: "DELETE", payload: id });
  }, [dispatch]);

  const changeStatus = useCallback((id: string, status: Ticket["status"]) => {
    dispatch({ type: "CHANGE_STATUS", payload: { id, status } });
  }, [dispatch]);

  const filteredTickets = useMemo(() => {
    if (!effectiveSearch) return tickets;
    return tickets.filter(ticket =>
      ticket.title.toLowerCase().includes(effectiveSearch.toLowerCase())
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