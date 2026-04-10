import { useTasks } from "@/features/tasks";
import { TaskListPresentation } from "@/features/tasks"

export const TaskListContainer = ({ projectId }: { projectId: string }) => {
  const { tasks } = useTasks();

  const filtered = tasks.filter(t => t.projectId === projectId);

  return <TaskListPresentation tasks={filtered} />;
};