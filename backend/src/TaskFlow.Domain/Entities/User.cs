using System;
using TaskFlow.Domain.Common;

namespace TaskFlow.Domain.Entities;

public class User : BaseEntity
{
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;

    public ICollection<Project> OwnedProjects { get; } = new List<Project>();
    public ICollection<TaskAssignee> AssignedTasks { get; } = new List<TaskAssignee>();
    public ICollection<Comment> Comments { get; } = new List<Comment>();
}

