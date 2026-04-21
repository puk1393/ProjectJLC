'use client'; // Necesario porque este componente y sus hijos usan componentes interactivos y/o hooks de React

import React, { FC } from "react";
import { Card } from "@/shared/ui/molecules";
import { Badge, Button } from "@/shared/ui/atoms";
import type { Ticket } from "@/features/tickets";

interface TicketCardProps {
  ticket: Ticket;
}

const priorityVariantMap = {
  low: "error",
  medium: "warning",
  high: "success",
  dismissed: "default"
} as const;

const TicketCardComponent: FC<TicketCardProps> = ({ ticket }) => {
  return (
    <Card>
      <h4>{ticket.title}</h4>

      <Badge variant={priorityVariantMap[ticket.priority ?? "dismissed"]}>{ticket.priority}</Badge>
      <br></br>      
      <span>Etiqueta: {ticket.label}</span>
      <br></br>
      <span>Responsable: {ticket.responsible}</span>

    </Card>
  );
};

export const TicketCard = React.memo(TicketCardComponent);
TicketCard.displayName = "TicketCard";