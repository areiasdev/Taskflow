using System;
using TaskFlow.Domain.Common;

namespace TaskFlow.Domain.Entities;

public class Comment : BaseEntity
{
    public string Content { get; set; } = string.Empty;
    public Guid TaskItemId { get; set; }
    public Guid AuthorId { get; set; }

    public TaskItem TaskItem { get; set; } = null!;
    public User Author { get; set; } = null!;
}