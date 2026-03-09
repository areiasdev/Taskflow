using System.Threading.Tasks;
using System;
using TaskFlow.Domain.Enums;

namespace TaskFlow.Application.TaskItems.Models;

public class TaskItemDto
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string? Description { get; set; }
    public TaskStatusEnum Status { get; set; }
    public PriorityEnum Priority { get; set; }
    public DateTime? DueDate { get; set; }
    public Guid ProjectId  { get; set; }
    public DateTime CreatedAt { get; set; }
};
