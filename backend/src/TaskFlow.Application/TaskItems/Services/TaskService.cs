using AutoMapper;
using Microsoft.EntityFrameworkCore;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Application.TaskItems.Models;
using TaskFlow.Application.TaskItems.Services;
using TaskFlow.Domain.Entities;
using TaskFlow.Domain.Enums;

namespace TaskFlow.Infrastructure.Services;

public class TaskService : ITaskService
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;

    public TaskService(IApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<IEnumerable<TaskItemDto>> GetAllByProjectAsync(Guid projectId, CancellationToken ct)
    {
        var tasks = await _context.TaskItems
            .Include(t => t.Comments)
            .Where(t => t.ProjectId == projectId)
            .OrderByDescending(t => t.CreatedAt)
            .ToListAsync(ct);

        return _mapper.Map<IEnumerable<TaskItemDto>>(tasks);
    }

    public async Task<TaskItemDto?> GetByIdAsync(Guid id, CancellationToken ct)
    {
        var task = await _context.TaskItems
            .Include(t => t.Comments)
            .FirstOrDefaultAsync(t => t.Id == id, ct);

        return task is null ? null : _mapper.Map<TaskItemDto>(task);
    }

    public async Task<TaskItemDto> CreateAsync(string title, string? description, PriorityEnum priority, DateTime? dueDate, Guid projectId, CancellationToken ct)
    {
        var task = new TaskItem
        {
            Title = title,
            Description = description,
            Priority = priority,
            DueDate = dueDate.HasValue ? DateTime.SpecifyKind(dueDate.Value, DateTimeKind.Utc) : null,
            ProjectId = projectId,
            Status = TaskStatusEnum.Todo
        };

        _context.TaskItems.Add(task);
        await _context.SaveChangesAsync(ct);

        return _mapper.Map<TaskItemDto>(task);
    }

    public async Task<TaskItemDto> UpdateAsync(Guid id, string title, string? description, TaskStatusEnum status, PriorityEnum priority, DateTime? dueDate, CancellationToken ct)
    {
        var task = await _context.TaskItems.FindAsync([id], ct)
            ?? throw new KeyNotFoundException($"Task {id} not found.");

        task.Title = title;
        task.Description = description;
        task.Status = status;
        task.Priority = priority;
        task.DueDate = dueDate.HasValue ? DateTime.SpecifyKind(dueDate.Value, DateTimeKind.Utc) : null;

        await _context.SaveChangesAsync(ct);

        return _mapper.Map<TaskItemDto>(task);
    }

    public async Task DeleteAsync(Guid id, CancellationToken ct)
    {
        var task = await _context.TaskItems.FindAsync([id], ct)
            ?? throw new KeyNotFoundException($"Task {id} not found.");

        _context.TaskItems.Remove(task);
        await _context.SaveChangesAsync(ct);
    }
}
