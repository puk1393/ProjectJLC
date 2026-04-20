'use client'; //Porque useTickets utiliza useReducer
import { useTickets, TicketListPresentation, getTicketsByProjectId, getGroupTicketsByStatus } from "@/features/tickets";
import { useMemo } from "react";

export const TicketListContainer = ({ projectId }: { projectId: string }) => {
  const { tickets, error } = useTickets();
  
  const filtered = useMemo(() => getTicketsByProjectId(tickets, projectId),[tickets, projectId]);
    
  const grouped = useMemo(() => getGroupTicketsByStatus(filtered),[filtered]);  /*Estado derivado*/

  if (error) {
    return <p>Error: {error}</p>;
  }  

  return <TicketListPresentation grouped={grouped} />;
};