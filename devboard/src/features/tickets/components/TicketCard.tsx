import { Card } from '@/shared/ui/molecules';
import { Badge, Button } from '@/shared/ui/atoms';
import type { Ticket } from "@/features/tickets";

interface Props {
  ticket: Ticket;
}

const priorityVariantMap = {
  low: "error",
  medium: "warning",
  high: "success",
  dismissed: "default"
} as const;

export const TicketCard = ({ ticket }: Props) => {
  return (
    <Card>
      <h4>{ticket.title}</h4>
      <Badge variant={priorityVariantMap[ticket.priority ?? "dismissed"]}>{ticket.priority}</Badge>
      <br></br>
      <Button variant="danger" size="md" onClick={() => alert("Hola etapa anterior")}>Etapa Anterior</Button>
      <Button variant="primary" size="lg" onClick={() => alert("Hola siguiente etapa")}>Siguiente Etapa</Button>
    </Card>
  );
};