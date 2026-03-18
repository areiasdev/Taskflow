"use client";

import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useAuth } from "@/lib/auth/authContext";
import { projectsApi, ProjectDto } from "@/lib/api/projects";
import { useRouter } from "next/navigation";

interface ProjectFormState {
  name: string;
  description: string;
}

const emptyForm: ProjectFormState = { name: "", description: "" };

export default function ProjectsPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [projects, setProjects] = useState<ProjectDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDto | null>(null);
  const [form, setForm] = useState<ProjectFormState>(emptyForm);
  const [submitting, setSubmitting] = useState(false);

  const fetchProjects = async () => {
    if (!user) return;
    try {
      const data = await projectsApi.getAll(user.id);
      setProjects(data);
    } catch {
      setError("Failed to load projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [user]);

  const openCreateDialog = () => {
    setSelectedProject(null);
    setForm(emptyForm);
    setDialogOpen(true);
  };

  const openEditDialog = (project: ProjectDto) => {
    setSelectedProject(project);
    setForm({ name: project.name, description: project.description ?? "" });
    setDialogOpen(true);
  };

  const openDeleteDialog = (project: ProjectDto) => {
    setSelectedProject(project);
    setDeleteDialogOpen(true);
  };

  const handleSubmit = async () => {
    if (!user || !form.name.trim()) return;
    setSubmitting(true);
    try {
      if (selectedProject) {
        const updated = await projectsApi.update(selectedProject.id, {
          id: selectedProject.id,
          name: form.name,
          description: form.description || undefined,
        });
        setProjects((prev) =>
          prev.map((p) => (p.id === updated.id ? updated : p))
        );
      } else {
        const created = await projectsApi.create({
          name: form.name,
          description: form.description || undefined,
          ownerId: user.id,
        });
        setProjects((prev) => [created, ...prev]);
      }
      setDialogOpen(false);
    } catch {
      setError("Failed to save project.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedProject) return;
    setSubmitting(true);
    try {
      await projectsApi.delete(selectedProject.id);
      setProjects((prev) => prev.filter((p) => p.id !== selectedProject.id));
      setDeleteDialogOpen(false);
    } catch {
      setError("Failed to delete project.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box className="min-h-screen bg-indigo-50 dark:bg-indigo-950">
      <Box className="border-b border-indigo-100 dark:border-indigo-800 bg-white dark:bg-indigo-900">
        <Container maxWidth="lg">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className="py-4"
          >
            <Typography
              variant="h5"
              className="font-bold text-indigo-900 dark:text-indigo-100"
            >
              TaskFlow
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography
                variant="body2"
                className="text-indigo-500 dark:text-indigo-300"
              >
                {user?.fullName}
              </Typography>
              <Button
                onClick={logout}
                variant="outlined"
                size="small"
                className="border-indigo-300 text-indigo-600 hover:border-indigo-500 dark:border-indigo-600 dark:text-indigo-300 normal-case"
              >
                Sign out
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" className="py-8">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="mb-6"
        >
          <Stack spacing={0.5}>
            <Typography
              variant="h4"
              className="font-bold text-indigo-900 dark:text-indigo-100"
            >
              Projects
            </Typography>
            <Typography
              variant="body2"
              className="text-indigo-500 dark:text-indigo-300"
            >
              {projects.length} project{projects.length !== 1 ? "s" : ""}
            </Typography>
          </Stack>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={openCreateDialog}
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-semibold normal-case rounded-xl"
          >
            New Project
          </Button>
        </Stack>

        {error && (
          <Alert severity="error" className="mb-4" onClose={() => setError("")}>
            {error}
          </Alert>
        )}

        {loading ? (
          <Box className="flex justify-center py-20">
            <CircularProgress className="text-indigo-600" />
          </Box>
        ) : projects.length === 0 ? (
          <Box className="flex flex-col items-center justify-center py-24 gap-3">
            <FolderOutlinedIcon className="text-indigo-300 dark:text-indigo-700 text-6xl" />
            <Typography
              variant="h6"
              className="font-semibold text-indigo-400 dark:text-indigo-500"
            >
              No projects yet
            </Typography>
            <Typography
              variant="body2"
              className="text-indigo-300 dark:text-indigo-600"
            >
              Create your first project to get started
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={openCreateDialog}
              className="bg-indigo-600 hover:bg-indigo-700 text-white normal-case rounded-xl mt-2"
            >
              New Project
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
                <Card
                  elevation={0}
                  className="rounded-2xl border border-indigo-100 dark:border-indigo-800 dark:bg-indigo-900 h-full flex flex-col hover:shadow-lg hover:shadow-indigo-100 dark:hover:shadow-indigo-900 transition-shadow"
                >
                  <CardContent
                      className="flex-1 cursor-pointer"
                      onClick={() => router.push(`/projects/${project.id}`)}
                    >
                    <Stack spacing={1.5}>
                      <Typography
                        variant="h6"
                        className="font-semibold text-indigo-900 dark:text-indigo-100 leading-tight"
                      >
                        {project.name}
                      </Typography>
                      {project.description && (
                        <Typography
                          variant="body2"
                          className="text-indigo-500 dark:text-indigo-400 line-clamp-2"
                        >
                          {project.description}
                        </Typography>
                      )}
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Chip
                          icon={<TaskAltIcon className="text-indigo-500" />}
                          label={`${project.taskCount} task${project.taskCount !== 1 ? "s" : ""}`}
                          size="small"
                          className="bg-indigo-50 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300 border-0"
                        />
                      </Stack>
                      <Typography
                        variant="caption"
                        className="text-indigo-400 dark:text-indigo-500"
                      >
                        {new Date(project.createdAt).toLocaleDateString("pt-PT", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </Typography>
                    </Stack>
                  </CardContent>
                  <CardActions className="px-4 pb-4 pt-0">
                    <Tooltip title="Edit">
                      <IconButton
                        size="small"
                        onClick={() => openEditDialog(project)}
                        className="text-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-800"
                      >
                        <EditOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        size="small"
                        onClick={() => openDeleteDialog(project)}
                        className="text-indigo-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900"
                      >
                        <DeleteOutlineIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
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
          {selectedProject ? "Edit Project" : "New Project"}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} className="pt-1">
            <TextField
              label="Name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              fullWidth
              required
              autoFocus
            />
            <TextField
              label="Description"
              value={form.description}
              onChange={(e) =>
                setForm((f) => ({ ...f, description: e.target.value }))
              }
              fullWidth
              multiline
              rows={3}
            />
          </Stack>
        </DialogContent>
        <DialogActions className="px-6 pb-4">
          <Button
            onClick={() => setDialogOpen(false)}
            className="text-indigo-500 normal-case"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={submitting || !form.name.trim()}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold normal-case rounded-xl"
          >
            {submitting ? "Saving..." : selectedProject ? "Save" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        PaperProps={{ className: "rounded-2xl dark:bg-indigo-900" }}
      >
        <DialogTitle className="font-bold text-indigo-900 dark:text-indigo-100">
          Delete Project
        </DialogTitle>
        <DialogContent>
          <Typography className="text-indigo-600 dark:text-indigo-300">
            Are you sure you want to delete{" "}
            <strong>{selectedProject?.name}</strong>? This action cannot be
            undone.
          </Typography>
        </DialogContent>
        <DialogActions className="px-6 pb-4">
          <Button
            onClick={() => setDeleteDialogOpen(false)}
            className="text-indigo-500 normal-case"
          >
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
