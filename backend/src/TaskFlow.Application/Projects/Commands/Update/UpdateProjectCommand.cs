using MediatR;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Application.Projects.Models;

namespace TaskFlow.Application.Projects.Commands.UpdateProject;

public record UpdateProjectCommand(
    Guid Id,
    string Name,
    string? Description
) : IRequest<ProjectDto>;

public class UpdateProjectCommandHandler : IRequestHandler<UpdateProjectCommand, ProjectDto>
{
    private readonly IProjectRepository _repo;

    public UpdateProjectCommandHandler(IProjectRepository repo) => _repo = repo;

    public async Task<ProjectDto> Handle(UpdateProjectCommand request, CancellationToken ct)
    {
        var project = await _repo.GetByIdAsync(request.Id, ct)
            ?? throw new KeyNotFoundException($"Project {request.Id} not found.");

        project.Update(request.Name, request.Description);
        await _repo.UpdateAsync(project, ct);

        return new ProjectDto(project.Id, project.Name, project.Description, project.CreatedAt, project.Tasks.Count);
    }
}
