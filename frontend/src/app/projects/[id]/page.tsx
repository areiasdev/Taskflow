"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import {
  tasksApi,
  TaskItemDto,
  TaskStatus,
  TaskStatusLabel,
  Priority,
  PriorityLabel,
  CreateTaskPayload,
  UpdateTaskPayload,
} from "@/lib/api/tasks";
import { projectsApi, ProjectDto } from "@/lib/api/projects";

const statusColumns = [TaskStatus.Todo, TaskStatus.InProgress, TaskStatus.Done];

const statusColors: Record<TaskStatus, string> = {
  [TaskStatus.Todo]: "bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200",
  [TaskStatus.InProgress]: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200",
  [TaskStatus.Done]: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200",
};

const priorityColors: Record<Priority, string> = {
  [Priority.Low]: "bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-200",
  [Priority.Medium]: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200",
  [Priority.High]: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200",
};

interface TaskFormState {
  title: string;
  description: string;
  priority: Priority;
  status: TaskStatus;
  dueDate: string;
}

const emptyForm: TaskFormState = {
  title: "",
  description: "",
  priority: Priority.Medium,
  status: TaskStatus.Todo,
  dueDate: "",
};

export default function ProjectTasksPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [project, setProject] = useState<ProjectDto | null>(null);
  const [tasks, setTasks] = useState<TaskItemDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskItemDto | null>(null);
  const [form, setForm] = useState<TaskFormState>(emptyForm);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectData, tasksData] = await Promise.all([
          projectsApi.getById(id),
          tasksApi.getAll(id),
        ]);
        setProject(projectData);
        setTasks(tasksData);
      } catch {
        setError("Failed to load project data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const openCreateDialog = () => {
    setSelectedTask(null);
    setForm(emptyForm);
    setDialogOpen(true);
  };

  const openEditDialog = (task: TaskItemDto) => {
    setSelectedTask(task);
    setForm({
      title: task.title,
      description: task.description ?? "",
      priority: task.priority,
      status: task.status,
      dueDate: task.dueDate ? task.dueDate.split("T")[0] : "",
    });
    setDialogOpen(true);
  };

  const openDeleteDialog = (task: TaskItemDto) => {
    setSelectedTask(task);
    setDeleteDialogOpen(true);
  };

  const handleSubmit = async () => {
    if (!form.title.trim()) return;
    setSubmitting(true);
    try {
      if (selectedTask) {
        const payload: UpdateTaskPayload = {
          id: selectedTask.id,
          title: form.title,
          description: form.description || undefined,
          status: form.status,
          priority: form.priority,
          dueDate: form.dueDate || undefined,
        };
        const updated = await tasksApi.update(selectedTask.id, payload);
        setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
      } else {
        const payload: CreateTaskPayload = {
          title: form.title,
          description: form.description || undefined,
          priority: form.priority,
          dueDate: form.dueDate || undefined,
          projectId: id,
        };
        const created = await tasksApi.create(payload);
        setTasks((prev) => [created, ...prev]);
      }
      setDialogOpen(false);
    } catch {
      setError("Failed to save task.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedTask) return;
    setSubmitting(true);
    try {
      await tasksApi.delete(selectedTask.id);
      setTasks((prev) => prev.filter((t) => t.id !== selectedTask.id));
      setDeleteDialogOpen(false);
    } catch {
      setError("Failed to delete task.");
    } finally {
      setSubmitting(false);
    }
  };

  const tasksByStatus = (status: TaskStatus) =>
    tasks.filter((t) => t.status === status);

  return (
    <Box className="min-h-screen bg-indigo-50 dark:bg-indigo-950">
      <Box className="border-b border-indigo-100 dark:border-indigo-800 bg-white dark:bg-indigo-900">
        <Container maxWidth="xl">
          <Stack direction="row" alignItems="center" justifyContent="space-between" className="py-4">
            <Stack direction="row" alignItems="center" spacing={2}>
              <Tooltip title="Back to projects">
                <IconButton
                  onClick={() => router.push("/projects")}
                  className="text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-800"
                >
                  <ArrowBackIcon />
                </IconButton>
              </Tooltip>
              <Stack spacing={0}>
                <Typography variant="h6" className="font-bold text-indigo-900 dark:text-indigo-100 leading-tight">
                  {project?.name ?? "Loading..."}
                </Typography>
                {project?.description && (
                  <Typography variant="caption" className="text-indigo-400 dark:text-indigo-400">
                    {project.description}
                  </Typography>
                )}
              </Stack>
            </Stack>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={openCreateDialog}
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-semibold normal-case rounded-xl"
            >
              New Task
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="xl" className="py-8">
        {error && (
          <Alert severity="error" className="mb-4" onClose={() => setError("")}>
            {error}
          </Alert>
        )}

        {loading ? (
          <Box className="flex justify-center py-20">
            <CircularProgress className="text-indigo-600" />
          </Box>
        ) : (
          <Stack direction="row" spacing={3} alignItems="flex-start">
            {statusColumns.map((status) => (
              <Box key={status} className="flex-1 min-w-64">
                <Stack direction="row" alignItems="center" spacing={1} className="mb-3">
                  <Chip
                    label={TaskStatusLabel[status]}
                    size="small"
                    className={statusColors[status]}
                  />
                  <Typography variant="caption" className="text-indigo-400 dark:text-indigo-500 font-medium">
                    {tasksByStatus(status).length}
                  </Typography>
                </Stack>

                <Stack spacing={2}>
                  {tasksByStatus(status).length === 0 ? (
                    <Box className="border-2 border-dashed border-indigo-200 dark:border-indigo-800 rounded-2xl py-8 flex flex-col items-center gap-2">
                      <AssignmentOutlinedIcon className="text-indigo-300 dark:text-indigo-700" />
                      <Typography variant="caption" className="text-indigo-300 dark:text-indigo-700">
                        No tasks
                      </Typography>
                    </Box>
                  ) : (
                    tasksByStatus(status).map((task) => (
                      <Card
                        key={task.id}
                        elevation={0}
                        className="rounded-2xl border border-indigo-100 dark:border-indigo-800 dark:bg-indigo-900 hover:shadow-md hover:shadow-indigo-100 dark:hover:shadow-indigo-900 transition-shadow"
                      >
                        <CardContent className="pb-2">
                          <Stack spacing={1.5}>
                            <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
                              <Typography
                                variant="body2"
                                className="font-semibold text-indigo-900 dark:text-indigo-100 leading-snug flex-1 pr-1"
                              >
                                {task.title}
                              </Typography>
                              <Stack direction="row" spacing={0}>
                                <Tooltip title="Edit">
                                  <IconButton
                                    size="small"
                                    onClick={() => openEditDialog(task)}
                                    className="text-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-800"
                                  >
                                    <EditOutlinedIcon sx={{ fontSize: 16 }} />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                  <IconButton
                                    size="small"
                                    onClick={() => openDeleteDialog(task)}
                                    className="text-indigo-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900"
                                  >
                                    <DeleteOutlineIcon sx={{ fontSize: 16 }} />
                                  </IconButton>
                                </Tooltip>
                              </Stack>
                            </Stack>

                            {task.description && (
                              <Typography variant="caption" className="text-indigo-400 dark:text-indigo-500 line-clamp-2">
                                {task.description}
                              </Typography>
                            )}

                            <Stack direction="row" spacing={1} flexWrap="wrap">
                              <Chip
                                label={PriorityLabel[task.priority]}
                                size="small"
                                className={priorityColors[task.priority]}
                              />
                              {task.dueDate && (
                                <Chip
                                  label={new Date(task.dueDate).toLocaleDateString("pt-PT", {
                                    day: "numeric",
                                    month: "short",
                                  })}
                                  size="small"
                                  className="bg-indigo-50 dark:bg-indigo-800 text-indigo-500 dark:text-indigo-300"
                                />
                              )}
                            </Stack>
                          </Stack>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </Stack>
              </Box>
            ))}
          </Stack>
        )}
      </Container>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{ className: "rounded-2xl dark:bg-indigo-900" }}
      >
        <DialogTitle className="font-bold text-indigo-900 dark:text-indigo-100">
          {selectedTask ? "Edit Task" : "New Task"}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} className="pt-1">
            <TextField
              label="Title"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              fullWidth
              required
              autoFocus
            />
            <TextField
              label="Description"
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              fullWidth
              multiline
              rows={3}
            />
            <Stack direction="row" spacing={2}>
              <TextField
                label="Priority"
                value={form.priority}
                onChange={(e) => setForm((f) => ({ ...f, priority: Number(e.target.value) as Priority }))}
                select
                fullWidth
              >
                {Object.entries(PriorityLabel).map(([value, label]) => (
                  <MenuItem key={value} value={Number(value)}>
                    {label}
                  </MenuItem>
                ))}
              </TextField>
              {selectedTask && (
                <TextField
                  label="Status"
                  value={form.status}
                  onChange={(e) => setForm((f) => ({ ...f, status: Number(e.target.value) as TaskStatus }))}
                  select
                  fullWidth
                >
                  {Object.entries(TaskStatusLabel).map(([value, label]) => (
                    <MenuItem key={value} value={Number(value)}>
                      {label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            </Stack>
            <TextField
              label="Due Date"
              type="date"
              value={form.dueDate}
              onChange={(e) => setForm((f) => ({ ...f, dueDate: e.target.value }))}
              fullWidth
              slotProps={{ inputLabel: { shrink: true } }}
            />
          </Stack>
        </DialogContent>
        <DialogActions className="px-6 pb-4">
          <Button onClick={() => setDialogOpen(false)} className="text-indigo-500 normal-case">
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={submitting || !form.title.trim()}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold normal-case rounded-xl"
          >
            {submitting ? "Saving..." : selectedTask ? "Save" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        PaperProps={{ className: "rounded-2xl dark:bg-indigo-900" }}
      >
        <DialogTitle className="font-bold text-indigo-900 dark:text-indigo-100">
          Delete Task
        </DialogTitle>
        <DialogContent>
          <Typography className="text-indigo-600 dark:text-indigo-300">
            Are you sure you want to delete <strong>{selectedTask?.title}</strong>? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions className="px-6 pb-4">
          <Button onClick={() => setDeleteDialogOpen(false)} className="text-indigo-500 normal-case">
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleDelete}
            disabled={submitting}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold normal-case rounded-xl"
          >
            {submitting ? "Deleting..." : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}