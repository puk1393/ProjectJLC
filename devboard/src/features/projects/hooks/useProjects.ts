'use client'; /* Debido a que se utiliza useReducer */

import { useEffect, useReducer } from "react";
import type { Project, ProjectAction } from "../types";
import { useAsync } from "@/shared/hooks/useAsync";
import { mockProjects } from "@/features/projects";

function projectReducer(state: Project[],action: ProjectAction): Project[] {
  switch (action.type) {
    case "LOAD":
      return action.payload;

    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter(
        (project) =>
          project.id !== action.payload
      );

    case "UPDATE":
      return state.map((project) =>
        project.id === action.payload.id
          ? {
              ...project,
              ...action.payload.data,
            }
          : project
      );

    case "CHANGE_STATUS":
      return state.map((project) =>
        project.id === action.payload.id
          ? {
              ...project,
              status:
                action.payload.status,
            }
          : project
      );

    default:
      return state;
  }
}

export const useProjects = () => {
  const [projects, dispatch] = useReducer(projectReducer, []);

  const {
    data,
    loading,
    error,
  } = useAsync<Project[]>(
    async (signal) => {
      if (signal.aborted)
        throw new DOMException(
          "Cancelled",
          "AbortError"
        );

      return mockProjects;
    },
    []
  );

  useEffect(() => {
    if (data) {
      dispatch({
        type: "LOAD",
        payload: data,
      });
    }
  }, [data]);

  const addProject = async (
    project: Project
  ) => {
    dispatch({
      type: "ADD",
      payload: project,
    });

    try {
      await new Promise(
        (resolve, reject) =>
          setTimeout(() => {
            Math.random() > 0.2
              ? resolve(true)
              : reject();
          }, 1000)
      );
    } catch {
      dispatch({
        type: "DELETE",
        payload: project.id,
      });

      alert(
        "Error al guardar proyecto"
      );
    }
  };

  const deleteProject = (
    id: string
  ) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const updateProject = (
    id: string,
    data: Partial<Project>
  ) => {
    dispatch({
      type: "UPDATE",
      payload: { id, data },
    });
  };

  const changeStatus = (
    id: string,
    status: Project["status"]
  ) => {
    dispatch({
      type: "CHANGE_STATUS",
      payload: { id, status },
    });
  };

  return {
    projects,
    loading,
    error,
    addProject,
    deleteProject,
    updateProject,
    changeStatus,
  };
};