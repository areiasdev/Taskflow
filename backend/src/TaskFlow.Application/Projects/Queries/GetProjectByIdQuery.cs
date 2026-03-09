using MediatR;
using System.Threading.Tasks;
using System.Threading;
using System;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Application.Projects.Models;

namespace TaskFlow.Application.Projects.Queries;

public record GetProjectByIdQuery(Guid Id) : IRequest<ProjectDto>;

public class GetProjectByIdQueryHandler : IRequestHandler<GetProjectByIdQuery, ProjectDto>
{
    private readonly IProjectService _service;

    public GetProjectByIdQueryHandler(IProjectService service) => _service = service;

    public async Task<ProjectDto> Handle(GetProjectByIdQuery request, CancellationToken ct)
        => await _service.GetByIdAsync(request.Id, ct);
}

