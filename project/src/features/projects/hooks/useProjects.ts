import { useEffect, useState } from "react";
import { mockProjects } from "@/features/projects";
import type { Project } from "../types";

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const data = mockProjects;
    if (data) {
      setProjects(mockProjects);
    }
  }, []);

  return {
    projects
  };
};