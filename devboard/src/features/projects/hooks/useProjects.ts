'use client'; /*Debido a que se utiliza useReducer*/

import { useEffect, useReducer } from "react";
import type { Project, ProjectAction } from "../types";
import { mockProjects } from "@/features/projects";

function projectReducer(state: Project[], action: ProjectAction): Project[] {
  switch (action.type) {
    case "LOAD":
      return action.payload;

    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter(project => project.id !== action.payload);

    case "UPDATE":
      return state.map(project =>
        project.id === action.payload.id
          ? { ...project, ...action.payload.data }
          : project
      );

    case "CHANGE_STATUS":
      return state.map(project =>
        project.id === action.payload.id
          ? { ...project, status: action.payload.status }
          : project
      );

    default:
      return state;
  }
}

export const useProjects = () => {
  const [projects, dispatch] = useReducer(projectReducer, []);

  useEffect(() => {
    dispatch({
      type: "LOAD",
      payload: mockProjects,
    });
  }, []);

  const addProject = (project: Project) => {
    dispatch({
      type: "ADD",
      payload: project,
    });
  };

  const deleteProject = (id: string) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const updateProject = (id: string, data: Partial<Project>) => {
    dispatch({
      type: "UPDATE",
      payload: { id, data },
    });
  };

  const changeStatus = (id: string, status: Project["status"]) => {
    dispatch({
      type: "CHANGE_STATUS",
      payload: { id, status },
    });
  };

  return {
    projects,
    addProject,
    deleteProject,
    updateProject,
    changeStatus,
  };
};