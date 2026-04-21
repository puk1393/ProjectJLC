import type { Project } from "@/features/projects";
import type { Ticket } from "@/features/tickets";

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "SalesForce",
    description: "Ventas en linea",
    tickets: 6,
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
    tickets: 4,
    progress: "100%",
    status: "active"
  }   
];

export const mockTickets: Ticket[] = [
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
    title: "Devoluciones",
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
  {
    id: "5",
    title: "Ofertas",
    projectId: "1",
    priority: "high",
    status: "done"
  },    
  {
    id: "6",
    title: "Rendimiento",
    projectId: "1",
    priority: "high",
    status: "done"
  },    
  {
    id: "7",
    title: "Login",
    projectId: "3",
    priority: "high",
    status: "done"
  },    
  {
    id: "8",
    title: "Mas vistos",
    projectId: "3",
    priority: "high",
    status: "under-review"
  },    
  {
    id: "9",
    title: "Reels",
    projectId: "3",
    priority: "high",
    status: "in-progress"
  },    
  {
    id: "10",
    title: "Pantalla principal",
    projectId: "3",
    priority: "high",
    status: "backlog"
  }    
];