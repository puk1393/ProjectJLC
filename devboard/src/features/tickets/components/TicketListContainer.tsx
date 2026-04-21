'use client'; /* porque este componente renderiza hijos que usan hooks de React y componentes interactivos */

import {
  useTickets,
  getTicketsByProjectId,
  getGroupTicketsByStatus,
  filterByPriority,
  filterByResponsible,
} from "@/features/tickets";

import { useDebounce } from "@/shared/hooks/useDebounce";
import { useMemo, Suspense, lazy, useState } from "react";

const TicketListPresentation = lazy(
  () => import("./TicketListPresentation")
);

export const TicketListContainer = ({ projectId }: { projectId: string }) => {
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("");
  const [responsible, setResponsible] = useState("");

  const debouncedSearch = useDebounce(search, 750);

  const { filteredTickets, error, changeStatus } =
    useTickets(debouncedSearch);

  const projectTickets = useMemo(
    () => getTicketsByProjectId(filteredTickets, projectId),
    [filteredTickets, projectId]
  );

  const byPriority = useMemo(
    () => filterByPriority(projectTickets, priority),
    [projectTickets, priority]
  );

  const byResponsible = useMemo(() => {
    if (!responsible) return byPriority;

    if (responsible === "__none__") {
      return byPriority.filter(
        t => !t.responsible
      );
    }

    return byPriority.filter(
      t => t.responsible === responsible
    );
  }, [byPriority, responsible]);

  const grouped = useMemo(
    () => getGroupTicketsByStatus(byResponsible),
    [byResponsible]
  );

  const responsibles = useMemo(() => {
    return [...new Set(
      projectTickets
        .map(t => t.responsible)
        .filter(Boolean)
    )];
  }, [projectTickets]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="ticket-toolbar">

        {/* SEARCH */}
        <input
          className="ticket-input"
          type="text"
          placeholder="Buscar ticket..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {/* PRIORITY */}
        <select
          className="ticket-select"
          value={priority}
          onChange={e => setPriority(e.target.value)}
        >
          <option value="">Todas las prioridades</option>
          <option value="high">Alta</option>
          <option value="medium">Media</option>
          <option value="low">Baja</option>
          <option value="dismissed">Desestimada</option>
        </select>

        {/* RESPONSIBLE */}
        <select
          className="ticket-select"
          value={responsible}
          onChange={e => setResponsible(e.target.value)}
        >
          <option value="">Todos los responsables</option>
          <option value="__none__">Sin responsable</option>

          {responsibles.map(r => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

      </div>

      <Suspense fallback={<div>Cargando lista de tickets...</div>}>
        <TicketListPresentation
          grouped={grouped}
          changeStatus={changeStatus}
        />
      </Suspense>
    </>
  );
};