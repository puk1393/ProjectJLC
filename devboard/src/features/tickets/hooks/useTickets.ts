'use client'; /*Se debe de utilizar por el useReducer*/

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

export const useTickets = () => {
  const [tickets, dispatch] = useReducer(ticketReducer, []);
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

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
    if (data) {
      dispatch({
        type: "LOAD",
        payload: data,
      });
    }
  }, [data]);

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
    if (!deferredSearch) return tickets;
    return tickets.filter(ticket =>
      ticket.title.toLowerCase().includes(deferredSearch.toLowerCase())
    );
  }, [tickets, deferredSearch]);

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