'use client'; /* Se utiliza porque se emplean hooks como useState y useEffect en los componentes hijos */
import { useTickets, getTicketsByProjectId, getGroupTicketsByStatus } from "@/features/tickets";
import { useMemo, Suspense, lazy } from "react";

const TicketListPresentation = lazy(() => import("./TicketListPresentation"));
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
      <Suspense fallback={<div>Cargando lista de tickets...</div>}>
        <TicketListPresentation grouped={grouped} />
      </Suspense>
    </>
  );
};