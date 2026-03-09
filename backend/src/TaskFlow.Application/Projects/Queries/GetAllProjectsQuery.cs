using MediatR;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Application.Projects.Models;

namespace TaskFlow.Application.Projects.Queries;

public record GetAllProjectsQuery(string OwnerId) : IRequest<List<ProjectDto>>;

public class GetAllProjectsQueryHandler : IRequestHandler<GetAllProjectsQuery, List<ProjectDto>>
{
    private readonly IProjectService _service;

    public GetAllProjectsQueryHandler(IProjectService service) => _service = service;

    public async Task<List<ProjectDto>> Handle(GetAllProjectsQuery request, CancellationToken ct)
        => await _service.GetAllAsync(request.OwnerId, ct);
}

