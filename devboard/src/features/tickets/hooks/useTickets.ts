'use client'; /* Este hook es cliente porque utiliza useReducer, useEffect y otros hooks de React para manejar estado y efectos secundarios. Además, se espera que sea utilizado dentro de componentes cliente que renderizan la UI. */

import React, {
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useLocalStorage } from "@/shared";

import type { Ticket } from "../types";
import { mockTickets } from "@/shared/data/mockData";

export const useTickets = (search: string) => {
  const [tickets, setTickets] = useLocalStorage<Ticket[]>("tickets", []);
  const [loading, setLoading] = React.useState(true);
  const [error] = React.useState<string | null>(null);

  // Inicializa tickets con mockTickets si localStorage está vacío

  useEffect(() => {
    if (tickets.length === 0) {
      setTickets(mockTickets);
      setLoading(false);
    } else {
      setLoading(false);
    }
    // Solo se ejecuta cuando tickets.length o setTickets cambian
  }, [tickets.length, setTickets]);

  const addTicket = useCallback((ticket: Ticket) => {
    setTickets((prev) => [...prev, ticket]);
  }, [setTickets]);

  const deleteTicket = useCallback((id: string) => {
    setTickets((prev) => prev.filter(t => t.id !== id));
  }, [setTickets]);

  const changeStatus = useCallback((id: string, status: Ticket["status"]) => {
    setTickets((prev) => prev.map(t => t.id === id ? { ...t, status } : t));
  }, [setTickets]);

  const filteredTickets = useMemo(() => {
    if (loading) return [];
    if (!search) return tickets;
    return tickets.filter(t =>
      t.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [tickets, search, loading]);

  return {
    tickets: loading ? [] : tickets,
    filteredTickets,
    loading,
    error,
    addTicket,
    deleteTicket,
    changeStatus,
  };
};