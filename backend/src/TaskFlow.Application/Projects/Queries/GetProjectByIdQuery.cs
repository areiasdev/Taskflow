using MediatR;
using TaskFlow.Application.Projects.Models;
using TaskFlow.Application.Projects.Services;

namespace TaskFlow.Application.Projects.Queries;

public record GetProjectByIdQuery(Guid Id) : IRequest<ProjectDto?>;

public class GetProjectByIdQueryHandler : IRequestHandler<GetProjectByIdQuery, ProjectDto?>
{
    private readonly IProjectService _projectService;

    public GetProjectByIdQueryHandler(IProjectService projectService) => _projectService = projectService;

    public async Task<ProjectDto?> Handle(GetProjectByIdQuery request, CancellationToken cancellationToken)
        => await _projectService.GetByIdAsync(request.Id, cancellationToken);
}
