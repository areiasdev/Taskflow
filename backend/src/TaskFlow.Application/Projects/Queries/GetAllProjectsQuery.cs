using MediatR;
using TaskFlow.Application.Projects.Models;
using TaskFlow.Application.Projects.Services;

namespace TaskFlow.Application.Projects.Queries;

public record GetAllProjectsQuery(Guid OwnerId) : IRequest<IEnumerable<ProjectDto>>;

public class GetAllProjectsQueryHandler : IRequestHandler<GetAllProjectsQuery, IEnumerable<ProjectDto>>
{
    private readonly IProjectService _projectService;

    public GetAllProjectsQueryHandler(IProjectService projectService) => _projectService = projectService;

    public async Task<IEnumerable<ProjectDto>> Handle(GetAllProjectsQuery request, CancellationToken cancellationToken)
        => await _projectService.GetAllByOwnerAsync(request.OwnerId, cancellationToken);
}
