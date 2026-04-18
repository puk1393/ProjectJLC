export type ProjectStatus = "active" | "inactive";

export interface Project {
  id: string;
  name: string;
  description: string;
  tickets?: number;
  progress?: string;
  status: ProjectStatus;
}

export type ProjectAction =
  | { type: "LOAD"; payload: Project[] }
  | { type: "ADD"; payload: Project }
  | { type: "DELETE"; payload: string }
  | {
      type: "UPDATE";
      payload: {
        id: string;
        data: Partial<Project>;
      };
    }
  | {
      type: "CHANGE_STATUS";
      payload: {
        id: string;
        status: Project["status"];
      };
    };