using TaskFlow.Application.Projects.Models;

namespace TaskFlow.Application.Projects.Services;

public interface IProjectService
{
    Task<ProjectDto> CreateAsync(string name, string? description, Guid ownerId, CancellationToken ct = default);
    Task<ProjectDto> UpdateAsync(Guid id, string name, string? description, CancellationToken ct = default);
    Task DeleteAsync(Guid id, CancellationToken ct = default);
    Task<ProjectDto?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<IEnumerable<ProjectDto>> GetAllByOwnerAsync(Guid ownerId, CancellationToken ct = default);
}