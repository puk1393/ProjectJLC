'use client'; /* porque este hook se utiliza en componentes que renderizan hijos que usan hooks de React y componentes interactivos */

import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Project } from "../types";
import { mockProjects } from "@/shared/data/mockData";

interface ProjectsStore {
  projects: Project[];
  loading: boolean;
  error: string | null;

  loadProjects: () => Promise<void>;

  addProject: (project: Project) => Promise<void>;

  deleteProject: (id: string) => void;

  updateProject: (id: string,data: Partial<Project>) => void;

  changeStatus: (id: string,status: Project["status"]) => void;
}

export const useProjectsStore =
  create<ProjectsStore>()(
    persist(
      (set, get) => ({
        projects: [],
        loading: false,
        error: null,

        loadProjects: async () => {
          try {
            set({
              loading: true,
              error: null,
            });

            await new Promise(
              (r) =>
                setTimeout(
                  r,
                  200
                )
            );

            if (get().projects.length === 0) {
              set({
                projects:
                  mockProjects,
                loading:
                  false,
              });
            } else {
              set({
                loading:
                  false,
              });
            }
          } catch {
            set({
              error:
                "Error cargando proyectos",
              loading:false,
            });
          }
        },

        addProject:
          async (
            project
          ) => {
            set(
              (state) => ({
                projects:
                  [
                    ...state.projects,
                    project,
                  ],
              })
            );

            try {
              await new Promise(
                (
                  resolve,
                  reject
                ) =>
                  setTimeout( /*Realizamos esta logica para en casos poder probar el reject y ver optimistic updates con rollback*/
                    () => {
                      if (Math.random() > 0.2) {
                        resolve(true);
                      } else {
                        reject();
                      }
                    },
                    1000
                  )
              );
            } catch {
              /* Rollback */
              set(
                (state) => ({
                  projects:
                    state.projects.filter((p) => p.id !== project.id),
                })
              );
              alert(
                "Error al guardar proyecto"
              );
            }
          },

        deleteProject:
          (id) =>
            set(
              (state) => ({
                projects:
                  state.projects.filter((project) =>project.id !== id),
              })
            ),

        updateProject:
          (
            id,
            data
          ) =>
            set(
              (
                state
              ) => ({
                projects:
                  state.projects.map(
                    (project) => project.id === id ? {...project,...data}: project
                  ),
              })
            ),

        changeStatus:
          (
            id,
            status
          ) =>
            set(
              (state) => ({
                projects:
                  state.projects.map(
                    (project) => project.id === id ? {...project,status}: project
                  ),
              })
            ),
      }),

      {
        name:
          "devboard-projects-storage",
      }
    )
  );