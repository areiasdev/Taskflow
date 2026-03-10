using MediatR;
using TaskFlow.Application.Projects.Models;
using TaskFlow.Application.Projects.Services;

namespace TaskFlow.Application.Projects.Commands.Create;

public record CreateProjectCommand(
    string Name,
    string? Description,
    Guid OwnerId
) : IRequest<ProjectDto>;

public class CreateProjectCommandHandler : IRequestHandler<CreateProjectCommand, ProjectDto>
{
    private readonly IProjectService _projectService;

    public CreateProjectCommandHandler(IProjectService projectService) => _projectService = projectService;

    public async Task<ProjectDto> Handle(CreateProjectCommand request, CancellationToken cancellationToken)
        => await _projectService.CreateAsync(request.Name, request.Description, request.OwnerId, cancellationToken);
}
