'use client'; /*Se debe de utilizar por el useReducer*/

import { useEffect, useReducer } from "react";
import type { Ticket, TicketAction } from "../types";
import { useAsync } from "@/shared/hooks/useAsync";
import { mockTickets } from "@/features/tickets";

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
      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
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

  const addTicket = (ticket: Ticket) => {
    dispatch({ type: "ADD", payload: ticket });
  };

  const deleteTicket = (id: string) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const changeStatus = (id: string, status: Ticket["status"]) => {
    dispatch({
      type: "CHANGE_STATUS",
      payload: { id, status },
    });
  };

  return {
    tickets,
    loading,
    error,    
    addTicket,
    deleteTicket,
    changeStatus,
  };
};