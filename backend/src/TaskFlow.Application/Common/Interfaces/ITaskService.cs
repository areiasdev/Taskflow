using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using System;
using TaskFlow.Application.TaskItems.Models;
using TaskFlow.Domain.Enums;

namespace TaskFlow.Application.Common.Interfaces;

public interface ITaskService
{
    Task<List<TaskItemDto>> GetByProjectIdAsync(Guid projectId, CancellationToken ct = default);
    Task<TaskItemDto> CreateAsync(string title, string? description, PriorityEnum priority, DateTime? dueDate, Guid projectId, CancellationToken ct = default);
    Task UpdateStatusAsync(Guid taskId, TaskStatusEnum newStatus, CancellationToken ct = default);
    Task DeleteAsync(Guid taskId, CancellationToken ct = default);
    Task UpdateStatusAsync(Guid taskId, TaskStatus newStatus, CancellationToken ct = default);
}