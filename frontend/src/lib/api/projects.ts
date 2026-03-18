import apiClient from "./client";

export interface ProjectDto {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  taskCount: number;
}

export interface CreateProjectPayload {
  name: string;
  description?: string;
  ownerId: string;
}

export interface UpdateProjectPayload {
  id: string;
  name: string;
  description?: string;
}

export const projectsApi = {
  getAll: (ownerId: string) =>
    apiClient.get<ProjectDto[]>(`/api/projects/${ownerId}`).then((r) => r.data),

  getById: (id: string) =>
    apiClient.get<ProjectDto>(`/api/projects/detail/${id}`).then((r) => r.data),

  create: (payload: CreateProjectPayload) =>
    apiClient.post<ProjectDto>("/api/projects", payload).then((r) => r.data),

  update: (id: string, payload: UpdateProjectPayload) =>
    apiClient.put<ProjectDto>(`/api/projects/${id}`, payload).then((r) => r.data),

  delete: (id: string) =>
    apiClient.delete(`/api/projects/${id}`),
};
