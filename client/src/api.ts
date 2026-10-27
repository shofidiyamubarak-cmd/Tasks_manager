// api.ts - Every CALL TO THE BECKEND LIVES HERE

import axios from "axios";
import type { Task, TaskInput } from "./types";

// Pages never write URLs themselves. They call these functions
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
});

// post /api/tasks -> create a task
export const createTask = async (task: TaskInput): Promise<Task> => {
  const response = await api.post("/tasks", task);
  return response.data.task;
};

// GET /api/tasks/allTask -> all task
export const getTasks = async (): Promise<Task[]> => {
  const response = await api.get("/tasks/allTask");
  return response.data.tasks;
};

// GET /api/tasks/:id -> one task
export const getTask = async (id: string): Promise<Task> => {
  const response = await api.get(`/tasks/${id}`);
  return response.data.task;
};

// PATCH /api/tasks/ :id -> update a task
export const updateTask = async (
  id: string,
  task: TaskInput,
): Promise<Task> => {
  const response = await api.patch(`/tasks/${id}`, task);
  return response.data.task;
};

// DELETE /api/tasks/:id -> delete a task
export const deleteTask = async (id: string): Promise<void> => {
  await api.delete(`/tasks/${id}`);
};
