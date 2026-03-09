using MediatR;
using System.Threading.Tasks;
using System.Threading;
using System;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Domain.Enums;

namespace TaskFlow.Application.TaskItems.Commands.Update;

public record UpdateTaskStatusCommand(Guid TaskId, TaskStatus NewStatus) : IRequest;

public class UpdateTaskStatusCommandHandler : IRequestHandler<UpdateTaskStatusCommand>
{
    private readonly ITaskService _service;

    public UpdateTaskStatusCommandHandler(ITaskService service) => _service = service;

    public async Task Handle(UpdateTaskStatusCommand request, CancellationToken ct)
        => await _service.UpdateStatusAsync(request.TaskId, request.NewStatus, ct);
}
