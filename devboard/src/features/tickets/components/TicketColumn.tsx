'use client'; // Necesario porque este componente renderiza hijos que usan hooks de React y componentes interactivos

import React, { FC } from "react";
import type { Ticket } from "@/features/tickets";
import { TicketCard } from "@/features/tickets";

interface TicketColumnProps {
  title: string;
  tickets: Ticket[];
  changeStatus: (id: string, status: string) => void;
}

const TicketColumnComponent: FC<TicketColumnProps> = ({ title, tickets, changeStatus }) => {
  return (
    <div className="ticket-column">
      <h3 className="ticket-column-title">{title}</h3>
      <div className="ticket-column-content">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} changeStatus={changeStatus} />
        ))}
      </div>
    </div>
  );
};

export const TicketColumn = React.memo(TicketColumnComponent);
TicketColumn.displayName = "TicketColumn";