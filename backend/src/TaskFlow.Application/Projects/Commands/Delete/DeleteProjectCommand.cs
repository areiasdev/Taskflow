using MediatR;
using TaskFlow.Application.Projects.Services;

namespace TaskFlow.Application.Projects.Commands.Delete;

public record DeleteProjectCommand(Guid Id) : IRequest;

public class DeleteProjectCommandHandler : IRequestHandler<DeleteProjectCommand>
{
    private readonly IProjectService _projectService;

    public DeleteProjectCommandHandler(IProjectService projectService) => _projectService = projectService;

    public async Task Handle(DeleteProjectCommand request, CancellationToken cancellationToken)
        => await _projectService.DeleteAsync(request.Id, cancellationToken);
}