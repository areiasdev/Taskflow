using MediatR;
using TaskFlow.Application.TaskItems.Services;

namespace TaskFlow.Application.TaskItems.Commands.Delete;

public record DeleteTaskCommand(Guid Id) : IRequest;

public class DeleteTaskCommandHandler : IRequestHandler<DeleteTaskCommand>
{
    private readonly ITaskService _taskService;

    public DeleteTaskCommandHandler(ITaskService taskService) => _taskService = taskService;

    public async Task Handle(DeleteTaskCommand request, CancellationToken cancellationToken)
        => await _taskService.DeleteAsync(request.Id, cancellationToken);
}
