using System.Threading.Tasks;
using System;
using TaskFlow.Domain.Enums;
using TaskFlow.Domain.Common;

namespace TaskFlow.Domain.Entities;

public class TaskItem : BaseEntity<int>
{
    public string Title { get; set; }
    public string? Description { get;  set; }
    public TaskStatusEnum Status { get;  set; }
    public PriorityEnum Priority { get;  set; } 
    public DateTime? DueDate { get;  set; }
    public Guid ProjectId { get;  set; }
    public Project Project { get;  set; }
}