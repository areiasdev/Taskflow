using MediatR;
using System.Threading.Tasks;
using System.Threading;
using System;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Application.Projects.Models;

namespace TaskFlow.Application.Projects.Commands.Update;

public record UpdateProjectCommand(Guid Id, string Name, string? Description) : IRequest<ProjectDto>;

public class UpdateProjectCommandHandler : IRequestHandler<UpdateProjectCommand, ProjectDto>
{
    private readonly IProjectService _service;

    public UpdateProjectCommandHandler(IProjectService service) => _service = service;

    public async Task<ProjectDto> Handle(UpdateProjectCommand request, CancellationToken ct)
        => await _service.UpdateAsync(request.Id, request.Name, request.Description, ct);
}

