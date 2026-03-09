using System.Threading.Tasks;
using System;
using TaskFlow.Domain.Enums;

namespace TaskFlow.Domain.Entities;

public class TaskItem : BaseEntity
{
    public string Title { get; private set; } = string.Empty;
    public string? Description { get; private set; }
    public TaskStatus Status { get; private set; } = TaskStatus.Todo;
    public Priority Priority { get; private set; } = Priority.Medium;
    public DateTime? DueDate { get; private set; }
    public Guid ProjectId { get; private set; }
    public Project Project { get; private set; } = null!;

    private TaskItem() { } // EF Core precisa disto

    public static TaskItem Create(string title, string? description, Priority priority, DateTime? dueDate, Guid projectId)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(title);

        return new TaskItem
        {
            Title = title,
            Description = description,
            Priority = priority,
            DueDate = dueDate,
            ProjectId = projectId
        };
    }

    public void UpdateStatus(TaskStatus newStatus)
    {
        Status = newStatus;
        SetUpdatedAt();
    }

    public void Update(string title, string? description, Priority priority, DateTime? dueDate)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(title);
        Title = title;
        Description = description;
        Priority = priority;
        DueDate = dueDate;
        SetUpdatedAt();
    }
}