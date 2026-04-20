'use client';

import React, { FC } from "react";
import type { Ticket } from "@/features/tickets";
import { TicketCard } from "@/features/tickets";

interface TicketColumnProps {
  title: string;
  tickets: Ticket[];
}

const TicketColumnComponent: FC<TicketColumnProps> = ({ title, tickets }) => {
  return (
    <div className="ticket-column">
      <h3 className="ticket-column-title">{title}</h3>

      <div className="ticket-column-content">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export const TicketColumn = React.memo(TicketColumnComponent);
TicketColumn.displayName = "TicketColumn";