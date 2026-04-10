export type ProjectStatus = "active" | "inactive";

export interface Project {
  id: string;
  name: string;
  description: string;
  tickets?: number;
  progress?: string;
  status: ProjectStatus;
}