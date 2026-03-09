using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using System;
using TaskFlow.Domain.Entities;

namespace TaskFlow.Application.Common.Interfaces;

public interface IProjectRepository
{
    Task<List<Project>> GetAllAsync(string ownerId, CancellationToken ct = default);
    Task<Project?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<Project> AddAsync(Project project, CancellationToken ct = default);
    Task UpdateAsync(Project project, CancellationToken ct = default);
    Task DeleteAsync(Project project, CancellationToken ct = default);
}
