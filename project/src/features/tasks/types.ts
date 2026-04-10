export type TaskStatus = "backlog" | "in-progress" | "under-review" | "done";

export type TaskPriority = "low" | "medium" | "high" | "dismissed";

export interface Task {
  id: string;
  title: string;
  priority?: TaskPriority;
  projectId?: string;
  responsible?: string;
  label?: string
  status?: TaskStatus;
}