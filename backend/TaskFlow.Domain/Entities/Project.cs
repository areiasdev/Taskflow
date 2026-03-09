using System.Collections.Generic;
using System;

namespace TaskFlow.Domain.Entities;

public class Project : BaseEntity
{
    public string Name { get; private set; } = string.Empty;
    public string? Description { get; private set; }
    public string OwnerId { get; private set; } = string.Empty;
    private readonly List<TaskItem> _tasks = [];
    public IReadOnlyCollection<TaskItem> Tasks => _tasks.AsReadOnly();

    private Project() { } // EF Core precisa disto

    public static Project Create(string name, string? description, string ownerId)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(name);
        ArgumentException.ThrowIfNullOrWhiteSpace(ownerId);

        return new Project
        {
            Name = name,
            Description = description,
            OwnerId = ownerId
        };
    }

    public void Update(string name, string? description)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(name);
        Name = name;
        Description = description;
        SetUpdatedAt();
    }

    public void AddTask(TaskItem task)
    {
        ArgumentNullException.ThrowIfNull(task);
        _tasks.Add(task);
    }
}
