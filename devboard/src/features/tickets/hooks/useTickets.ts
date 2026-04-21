'use client';

import {
  useCallback,
  useEffect,
  useReducer,
  useMemo,
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

export const useTickets = (search: string) => {
  const [tickets, dispatch] = useReducer(ticketReducer, []);

  const { data, loading, error } = useAsync<Ticket[]>(
    async (signal) => {
      if (signal.aborted) {
        throw new DOMException("Cancelled", "AbortError");
      }
      return mockTickets;
    },
    []
  );

  // LOAD inicial
  useEffect(() => {
    if (data && tickets.length === 0) {
      dispatch({ type: "LOAD", payload: data });
    }
  }, [data, tickets.length]);

  const addTicket = useCallback((ticket: Ticket) => {
    dispatch({ type: "ADD", payload: ticket });
  }, []);

  const deleteTicket = useCallback((id: string) => {
    dispatch({ type: "DELETE", payload: id });
  }, []);

  const changeStatus = useCallback((id: string, status: Ticket["status"]) => {
    dispatch({
      type: "CHANGE_STATUS",
      payload: { id, status },
    });
  }, []);


  const filteredTickets = useMemo(() => {
    if (!search) return tickets;

    return tickets.filter(t =>
      t.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [tickets, search]);

  return {
    tickets,
    filteredTickets,
    loading,
    error,
    addTicket,
    deleteTicket,
    changeStatus,
  };
};