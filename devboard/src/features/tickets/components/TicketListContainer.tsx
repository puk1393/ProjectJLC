'use client'; //Porque useTickets utiliza useReducer
import { useTickets, TicketListPresentation, getTicketsByProjectId, getGroupTicketsByStatus } from "@/features/tickets";

export const TicketListContainer = ({ projectId }: { projectId: string }) => {
  const { tickets, loading, error } = useTickets();

  if (loading) {
    return <p>Cargando tickets...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }  

  const filtered = getTicketsByProjectId(tickets,projectId); /*Estado derivado*/
  
  const grouped = getGroupTicketsByStatus(filtered); /*Estado derivado*/

  return <TicketListPresentation grouped={grouped} />;
};