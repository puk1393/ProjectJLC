'use client'; //Porque useTickets utiliza useReducer
import { useTickets, TicketListPresentation, getTicketsByProjectId, getGroupTicketsByStatus } from "@/features/tickets";
import { useMemo } from "react";

export const TicketListContainer = ({ projectId }: { projectId: string }) => {
  const { filteredTickets, setSearch, error } = useTickets();

  const filtered = useMemo(() => getTicketsByProjectId(filteredTickets, projectId), [filteredTickets, projectId]);
  const grouped = useMemo(() => getGroupTicketsByStatus(filtered), [filtered]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <input
        type="text"
        placeholder="Buscar ticket..."
        onChange={e => setSearch(e.target.value)}
        className="ticket-search-input"
      />
      <TicketListPresentation grouped={grouped} />
    </>
  );
};