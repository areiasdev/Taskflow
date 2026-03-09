using MediatR;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using System;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Application.TaskItems.Models;

namespace TaskFlow.Application.TaskItems.Queries;

public record GetTasksByProjectQuery(Guid ProjectId) : IRequest<List<TaskItemDto>>;

public class GetTasksByProjectQueryHandler : IRequestHandler<GetTasksByProjectQuery, List<TaskItemDto>>
{
    private readonly ITaskService _service;

    public GetTasksByProjectQueryHandler(ITaskService service) => _service = service;

    public async Task<List<TaskItemDto>> Handle(GetTasksByProjectQuery request, CancellationToken ct)
        => await _service.GetByProjectIdAsync(request.ProjectId, ct);
}
