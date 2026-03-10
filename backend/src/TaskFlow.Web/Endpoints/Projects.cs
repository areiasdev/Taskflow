using MediatR;
using TaskFlow.Application.Projects.Commands.Create;
using TaskFlow.Application.Projects.Commands.Update;
using TaskFlow.Application.Projects.Commands.Delete;
using TaskFlow.Application.Projects.Models;
using TaskFlow.Application.Projects.Queries;
using Taskflow.Web.Infrastructure;
using TaskFlow.Web.Infrastructure;

public class Projects : EndpointGroupBase
{
    public override void Map(WebApplication app)
    {
        app.MapGroup(this)
            .MapGet(GetAllProjects, "{ownerId:guid}")
            .MapGet(GetProjectById, "detail/{id:guid}")
            .MapPost(CreateProject, "")
            .MapPut(UpdateProject, "{id:guid}")
            .MapDelete(DeleteProject, "{id:guid}");
    }

    public async Task<IEnumerable<ProjectDto>> GetAllProjects(Guid ownerId, ISender sender, CancellationToken ct)
    {
        return await sender.Send(new GetAllProjectsQuery(ownerId), ct);
    }

    public async Task<IResult> GetProjectById(Guid id, ISender sender, CancellationToken ct)
    {
        var result = await sender.Send(new GetProjectByIdQuery(id), ct);
        return result is null ? Results.NotFound() : Results.Ok(result);
    }

    public async Task<IResult> CreateProject(CreateProjectCommand command, ISender sender, CancellationToken ct)
    {
        var result = await sender.Send(command, ct);
        return Results.Created($"/api/projects/detail/{result.Id}", result);
    }

    public async Task<IResult> UpdateProject(Guid id, UpdateProjectCommand command, ISender sender, CancellationToken ct)
    {
        if (id != command.Id) return Results.BadRequest("Id mismatch.");
        var result = await sender.Send(command, ct);
        return Results.Ok(result);
    }

    public async Task<IResult> DeleteProject(Guid id, ISender sender, CancellationToken ct)
    {
        await sender.Send(new DeleteProjectCommand(id), ct);
        return Results.NoContent();
    }
}
