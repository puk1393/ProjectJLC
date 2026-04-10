import type { Task } from "@/features/tasks";
import { TaskColumn } from "@/features/tasks";

interface Props {
  tasks: Task[];
}

export const TaskListPresentation = ({ tasks }: Props) => {
  const backlog = tasks.filter(t => t.status === "backlog");
  const underReview = tasks.filter(t => t.status === "under-review");
  const inProgress = tasks.filter(t => t.status === "in-progress");
  const done = tasks.filter(t => t.status === "done");

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <TaskColumn title="BACKLOG" tasks={backlog} />
      <TaskColumn title="UNDER REVIEW" tasks={underReview} />
      <TaskColumn title="IN PROGRESS" tasks={inProgress} />
      <TaskColumn title="DONE" tasks={done} />
    </div>
  );
};