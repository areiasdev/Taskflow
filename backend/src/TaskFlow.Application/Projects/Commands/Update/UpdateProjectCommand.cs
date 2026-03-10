using MediatR;
using TaskFlow.Application.Projects.Models;
using TaskFlow.Application.Projects.Services;

namespace TaskFlow.Application.Projects.Commands.Update;

public record UpdateProjectCommand(
    Guid Id,
    string Name,
    string? Description
) : IRequest<ProjectDto>;

public class UpdateProjectCommandHandler : IRequestHandler<UpdateProjectCommand, ProjectDto>
{
    private readonly IProjectService _projectService;

    public UpdateProjectCommandHandler(IProjectService projectService) => _projectService = projectService;

    public async Task<ProjectDto> Handle(UpdateProjectCommand request, CancellationToken cancellationToken)
        => await _projectService.UpdateAsync(request.Id, request.Name, request.Description, cancellationToken);
}
