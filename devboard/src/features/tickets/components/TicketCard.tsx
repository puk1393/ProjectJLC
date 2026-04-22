'use client'; // Necesario porque este componente y sus hijos usan componentes interactivos y/o hooks de React

import React, { FC } from "react";
import { Card } from "@/shared/ui/molecules";
import { Badge } from "@/shared/ui/atoms";
import type { Ticket, TicketStatus } from "@/features/tickets";

interface TicketCardProps {
  ticket: Ticket;
  changeStatus: (id: string, status: TicketStatus) => void;
}

const priorityVariantMap = {
  low: "error",
  medium: "warning",
  high: "success",
  dismissed: "default"
} as const;

const statusOptions = [
  { value: "backlog", label: "Backlog" },
  { value: "in-progress", label: "En progreso" },
  { value: "under-review", label: "En revisión" },
  { value: "done", label: "Completado" },
];

const TicketCardComponent: FC<TicketCardProps> = ({ ticket, changeStatus }) => {
  const [selectedStatus, setSelectedStatus] = React.useState<TicketStatus>(ticket.status ?? "backlog");

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as TicketStatus;
    setSelectedStatus(newStatus);
    if (newStatus !== ticket.status) {
      changeStatus(ticket.id, newStatus);
    }
  };

  return (
    <Card>
      <h4>{ticket.title}</h4>

      <Badge variant={priorityVariantMap[ticket.priority ?? "dismissed"]}>{ticket.priority}</Badge>
      <br></br>      
      <span>Etiqueta: {ticket.label}</span>
      <br></br>
      <span>Responsable: {ticket.responsible}</span>

      <label style={{ display: "block", marginTop: 8 }}>
        Estado:
        <select value={selectedStatus} onChange={handleStatusChange} style={{ marginLeft: 8 }}>
          {statusOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </label>
    </Card>
  );
};

export const TicketCard = React.memo(TicketCardComponent);
TicketCard.displayName = "TicketCard";