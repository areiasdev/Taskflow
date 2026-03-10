using System.Threading.Tasks;
using System;
using TaskFlow.Domain.Enums;
using TaskFlow.Domain.Common;

namespace TaskFlow.Domain.Entities;

public class TaskItem : BaseEntity
{
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public TaskStatusEnum Status { get; set; } = TaskStatusEnum.Todo;
    public PriorityEnum Priority { get; set; } = PriorityEnum.Medium;
    public DateTime? DueDate { get; set; }
    public Guid ProjectId { get; set; }

    public Project Project { get; set; } = null!;
    public ICollection<TaskAssignee> Assignees { get; } = new List<TaskAssignee>();
    public ICollection<Comment> Comments { get; } = new List<Comment>();
    public ICollection<TaskLabel> TaskLabels { get; } = new List<TaskLabel>();
}