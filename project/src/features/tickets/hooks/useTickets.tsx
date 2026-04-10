import { useEffect, useState } from "react";
import type { Ticket } from "../types";
import { mockTickets } from "@/features/tickets";

export const useTickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const data = mockTickets;
    if (data) {
      setTickets(mockTickets);
    }
  }, []);

  return {
    tickets
  };
};