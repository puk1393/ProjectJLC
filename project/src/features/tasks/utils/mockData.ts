import type { Task } from "../types";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Crear login",
    projectId: "1",
    priority: "low",
    responsible: "Jeremy",
    status: "backlog"    
  },
  {
    id: "2",
    title: "Carrito de compras",
    projectId: "1",
    priority: "high",
    responsible: "Camilo",
    status: "in-progress"
  },
  {
    id: "3",
    title: "Pantalla devolución",
    projectId: "1",
    priority: "dismissed",
    responsible: "Pedro",
    status: "under-review"
    
  },
  {
    id: "4",
    title: "Acerca de",
    projectId: "1",
    priority: "high",
    status: "done"
  },  
];