import type { Task } from "@/features/tasks";
import { TaskCard }  from "@/features/tasks";

export const TaskColumn = ({ title, tasks }: { title: string; tasks: Task[] }) => {
  return (
    <div>
      <h3>{title}</h3>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};