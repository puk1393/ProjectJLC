import { useEffect, useState } from "react";
import type { Task } from "../types";
import { mockTasks } from "@/features/tasks";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const data = mockTasks;
    if (data) {
      setTasks(mockTasks);
    }
  }, []);

  return {
    tasks
  };
};