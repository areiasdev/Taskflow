using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using System;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Application.TaskItems.Models;
using TaskFlow.Domain.Entities;
using TaskFlow.Domain.Enums;
using TaskFlow.Domain.Common;

namespace TaskFlow.Application.TaskItems.Services;

public class TaskService : ITaskService
{
    private readonly ITaskRepository _taskRepo;
    private readonly IProjectRepository _projectRepo;

    public TaskService(ITaskRepository taskRepo, IProjectRepository projectRepo)
    {
        _taskRepo = taskRepo;
        _projectRepo = projectRepo;
    }

    public async Task<List<TaskItemDto>> GetByProjectIdAsync(Guid projectId, CancellationToken ct = default)
    {
        var tasks = await _taskRepo.GetByProjectIdAsync(projectId, ct);
        return tasks.Select(t => new TaskItemDto(t.Id, t.Title, t.Description, t.Status, t.Priority, t.DueDate, t.ProjectId, t.CreatedAt)).ToList();
    }

    public async Task<TaskItemDto> CreateAsync(string title, string? description, PriorityEnum priority, DateTime? dueDate, Guid projectId, CancellationToken ct = default)
    {
        var project = await _projectRepo.GetByIdAsync(projectId, ct)
            ?? throw new KeyNotFoundException($"Project {projectId} not found.");

        var task = TaskItem.Create(title, description, priority, dueDate, project.Id);
        await _taskRepo.AddAsync(task, ct);

        return new TaskItemDto(task.Id, task.Title, task.Description, task.Status, task.Priority, task.DueDate, task.ProjectId, task.CreatedAt);
    }

    public async Task UpdateStatusAsync(Guid taskId, TaskStatus newStatus, CancellationToken ct = default)
    {
        var task = await _taskRepo.GetByIdAsync(taskId, ct)
            ?? throw new KeyNotFoundException($"Task {taskId} not found.");

        task.UpdateStatus(newStatus);
        await _taskRepo.UpdateAsync(task, ct);
    }

    public async Task DeleteAsync(Guid taskId, CancellationToken ct = default)
    {
        var task = await _taskRepo.GetByIdAsync(taskId, ct)
            ?? throw new KeyNotFoundException($"Task {taskId} not found.");

        await _taskRepo.DeleteAsync(task, ct);
    }
}
