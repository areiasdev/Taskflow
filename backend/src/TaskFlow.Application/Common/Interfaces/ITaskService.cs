using TaskFlow.Application.TaskItems.Models;
using TaskFlow.Domain.Enums;

namespace TaskFlow.Application.TaskItems.Services;

public interface ITaskService
{
    Task<IEnumerable<TaskItemDto>> GetAllByProjectAsync(Guid projectId, CancellationToken ct);
    Task<TaskItemDto?> GetByIdAsync(Guid id, CancellationToken ct);
    Task<TaskItemDto> CreateAsync(string title, string? description, PriorityEnum priority, DateTime? dueDate, Guid projectId, CancellationToken ct);
    Task<TaskItemDto> UpdateAsync(Guid id, string title, string? description, TaskStatusEnum status, PriorityEnum priority, DateTime? dueDate, CancellationToken ct);
    Task DeleteAsync(Guid id, CancellationToken ct);
}
