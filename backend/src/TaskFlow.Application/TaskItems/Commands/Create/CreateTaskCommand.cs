using MediatR;
using System.Threading.Tasks;
using System.Threading;
using System;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Application.TaskItems.Models;
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
    private readonly ITaskService _service;

    public CreateTaskCommandHandler(ITaskService service) => _service = service;

    public async Task<TaskItemDto> Handle(CreateTaskCommand request, CancellationToken ct)
        => await _service.CreateAsync(request.Title, request.Description, request.Priority, request.DueDate, request.ProjectId, ct);
}
