using MediatR;
using TaskFlow.Application.TaskItems.Models;
using TaskFlow.Application.TaskItems.Services;

namespace TaskFlow.Application.TaskItems.Queries;

public record GetAllTasksQuery(Guid ProjectId) : IRequest<IEnumerable<TaskItemDto>>;

public class GetAllTasksQueryHandler : IRequestHandler<GetAllTasksQuery, IEnumerable<TaskItemDto>>
{
    private readonly ITaskService _taskService;

    public GetAllTasksQueryHandler(ITaskService taskService) => _taskService = taskService;

    public async Task<IEnumerable<TaskItemDto>> Handle(GetAllTasksQuery request, CancellationToken cancellationToken)
        => await _taskService.GetAllByProjectAsync(request.ProjectId, cancellationToken);
}