import type { Project } from "../types";

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "SalesForce",
    description: "Ventas en linea",
    tickets: 100,
    progress: "70%",
    status: "active"
  },
  {
    id: "2",
    name: "Facebook",
    description: "Red social",
    tickets: 2,
    progress: "100%",
    status: "inactive"
  },
  {
    id: "3",
    name: "Instagram",
    description: "Red social",
    tickets: 2,
    progress: "100%",
    status: "active"
  }   
];