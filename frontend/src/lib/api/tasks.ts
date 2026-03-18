import apiClient from "./client";

export enum TaskStatus {
  Todo = 0,
  InProgress = 1,
  Done = 2,
}

export enum Priority {
  Low = 0,
  Medium = 1,
  High = 2,
}

export const TaskStatusLabel: Record<TaskStatus, string> = {
  [TaskStatus.Todo]: "To Do",
  [TaskStatus.InProgress]: "In Progress",
  [TaskStatus.Done]: "Done",
};

export const PriorityLabel: Record<Priority, string> = {
  [Priority.Low]: "Low",
  [Priority.Medium]: "Medium",
  [Priority.High]: "High",
};

export interface TaskItemDto {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: Priority;
  dueDate?: string;
  projectId: string;
  commentCount: number;
}

export interface CreateTaskPayload {
  title: string;
  description?: string;
  priority: Priority;
  dueDate?: string;
  projectId: string;
}

export interface UpdateTaskPayload {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: Priority;
  dueDate?: string;
}

export const tasksApi = {
  getAll: (projectId: string) =>
    apiClient.get<TaskItemDto[]>(`/api/taskitems/project/${projectId}`).then((r) => r.data),

  getById: (id: string) =>
    apiClient.get<TaskItemDto>(`/api/taskitems/detail/${id}`).then((r) => r.data),

  create: (payload: CreateTaskPayload) =>
    apiClient.post<TaskItemDto>("/api/taskitems", payload).then((r) => r.data),

  update: (id: string, payload: UpdateTaskPayload) =>
    apiClient.put<TaskItemDto>(`/api/taskitems/${id}`, payload).then((r) => r.data),

  delete: (id: string) =>
    apiClient.delete(`/api/taskitems/${id}`),
};
