using System.Collections.Generic;
using System;
using TaskFlow.Domain.Common;


namespace TaskFlow.Domain.Entities;

public class Project : BaseEntity<int>
{
    public string Name { get; private set; } = string.Empty;
    public string? Description { get; private set; }
    public string OwnerId { get; private set; } = string.Empty;
    private readonly List<TaskItem> _tasks = [];
    public IReadOnlyCollection<TaskItem> Tasks => _tasks.AsReadOnly();
}
