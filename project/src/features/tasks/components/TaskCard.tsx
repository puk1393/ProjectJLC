import { Card } from '@/shared/ui/molecules';
import { Badge, Button } from '@/shared/ui/atoms';
import type { Task } from "@/features/tasks";

interface Props {
  task: Task;
}

const priorityVariantMap = {
  low: "error",
  medium: "warning",
  high: "success",
  dismissed: "default"
} as const;

export const TaskCard = ({ task }: Props) => {
  return (
    <Card>
      <h4>{task.title}</h4>
      <Badge variant={priorityVariantMap[task.priority ?? "dismissed"]}>{task.priority}</Badge>
      <br></br>
      <Button variant="danger" size="md" onClick={() => alert("Hola etapa anterior")}>Etapa Anterior</Button>
      <Button variant="primary" size="lg" onClick={() => alert("Hola siguiente etapa")}>Siguiente Etapa</Button>
    </Card>
  );
};