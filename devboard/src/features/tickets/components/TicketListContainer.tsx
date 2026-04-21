'use client'; /* Se utiliza porque se emplean hooks como useState y useEffect en los componentes hijos */
import { useTickets, getTicketsByProjectId, getGroupTicketsByStatus } from "@/features/tickets";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useMemo, Suspense, lazy, useState } from "react";

const TicketListPresentation = lazy(() => import("./TicketListPresentation"));

export const TicketListContainer = ({ projectId }: { projectId: string }) => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 750);
  const { filteredTickets, error } = useTickets(debouncedSearch);

  const filtered = useMemo(() => getTicketsByProjectId(filteredTickets, projectId),[filteredTickets, projectId]);
  const grouped = useMemo(() => getGroupTicketsByStatus(filtered), [filtered]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <input
        type="text"
        placeholder="Buscar ticket..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="ticket-search-input"
      />
      <Suspense fallback={<div>Cargando lista de tickets...</div>}>
        <TicketListPresentation grouped={grouped} />
      </Suspense>
    </>
  );
};