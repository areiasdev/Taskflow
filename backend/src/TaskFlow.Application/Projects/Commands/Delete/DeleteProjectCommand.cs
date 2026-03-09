using MediatR;
using System.Threading.Tasks;
using System.Threading;
using System;
using TaskFlow.Application.Common.Interfaces;

namespace TaskFlow.Application.Projects.Commands.Delete;

public record DeleteProjectCommand(Guid Id) : IRequest;

public class DeleteProjectCommandHandler : IRequestHandler<DeleteProjectCommand>
{
    private readonly IProjectService _service;

    public DeleteProjectCommandHandler(IProjectService service) => _service = service;

    public async Task Handle(DeleteProjectCommand request, CancellationToken ct)
        => await _service.DeleteAsync(request.Id, ct);
}

