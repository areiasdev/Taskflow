using MediatR;
using TaskFlow.Application.TaskItems.Models;
using TaskFlow.Application.TaskItems.Services;
using TaskFlow.Domain.Enums;

namespace TaskFlow.Application.TaskItems.Commands.Create;

public record CreateTaskCommand(
    string Title,
    string? Description,
    PriorityEnum Priority,
    DateTime? DueDate,
    Guid ProjectId
) : IRequest<TaskItemDto>;

public class CreateTaskCommandHandler : IRequestHandler<CreateTaskCommand, TaskItemDto>
{
    private readonly ITaskService _taskService;

    public CreateTaskCommandHandler(ITaskService taskService) => _taskService = taskService;

    public async Task<TaskItemDto> Handle(CreateTaskCommand request, CancellationToken cancellationToken)
        => await _taskService.CreateAsync(request.Title, request.Description, request.Priority, request.DueDate, request.ProjectId, cancellationToken);
}
