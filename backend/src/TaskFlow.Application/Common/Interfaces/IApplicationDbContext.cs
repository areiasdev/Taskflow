using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;
using TaskFlow.Domain.Entities;
using Label = TaskFlow.Domain.Entities.Label;

namespace TaskFlow.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<User> Users { get; }
    DbSet<Project> Projects { get; }
    DbSet<TaskItem> TaskItems { get; }
    DbSet<Comment> Comments { get; }
    DbSet<TaskAssignee> TaskAssignees { get; }
    DbSet<Label> Labels { get; }
    DbSet<TaskLabel> TaskLabels { get; }
    DbSet<RefreshToken> RefreshTokens { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}