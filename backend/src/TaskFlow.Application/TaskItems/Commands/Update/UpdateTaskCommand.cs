using MediatR;
using TaskFlow.Application.TaskItems.Models;
using TaskFlow.Application.TaskItems.Services;
using TaskFlow.Domain.Enums;

namespace TaskFlow.Application.TaskItems.Commands.Update;

public record UpdateTaskCommand(
    Guid Id,
    string Title,
    string? Description,
    TaskStatusEnum Status,
    PriorityEnum Priority,
    DateTime? DueDate
) : IRequest<TaskItemDto>;

public class UpdateTaskCommandHandler : IRequestHandler<UpdateTaskCommand, TaskItemDto>
{
    private readonly ITaskService _taskService;

    public UpdateTaskCommandHandler(ITaskService taskService) => _taskService = taskService;

    public async Task<TaskItemDto> Handle(UpdateTaskCommand request, CancellationToken cancellationToken)
        => await _taskService.UpdateAsync(request.Id, request.Title, request.Description, request.Status, request.Priority, request.DueDate, cancellationToken);
}
