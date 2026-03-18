using MediatR;
using TaskFlow.Application.TaskItems.Models;
using TaskFlow.Application.TaskItems.Services;

namespace TaskFlow.Application.TaskItems.Queries;

public record GetTaskByIdQuery(Guid Id) : IRequest<TaskItemDto?>;

public class GetTaskByIdQueryHandler : IRequestHandler<GetTaskByIdQuery, TaskItemDto?>
{
    private readonly ITaskService _taskService;

    public GetTaskByIdQueryHandler(ITaskService taskService) => _taskService = taskService;

    public async Task<TaskItemDto?> Handle(GetTaskByIdQuery request, CancellationToken cancellationToken)
        => await _taskService.GetByIdAsync(request.Id, cancellationToken);
}
