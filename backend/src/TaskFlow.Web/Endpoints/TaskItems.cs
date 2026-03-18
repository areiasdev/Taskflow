using MediatR;
using TaskFlow.Application.TaskItems.Commands.Create;
using TaskFlow.Application.TaskItems.Commands.Update;
using TaskFlow.Application.TaskItems.Commands.Delete;
using TaskFlow.Application.TaskItems.Models;
using TaskFlow.Application.TaskItems.Queries;
using TaskFlow.Web.Infrastructure;
using Taskflow.Web.Infrastructure;

public class TaskItems : EndpointGroupBase
{
    public override void Map(WebApplication app)
    {
        app.MapGroup(this)
            .MapGet(GetAllTasks, "project/{projectId:guid}")
            .MapGet(GetTaskById, "detail/{id:guid}")
            .MapPost(CreateTask, "")
            .MapPut(UpdateTask, "{id:guid}")
            .MapDelete(DeleteTask, "{id:guid}");
    }

    public async Task<IEnumerable<TaskItemDto>> GetAllTasks(Guid projectId, ISender sender, CancellationToken ct)
        => await sender.Send(new GetAllTasksQuery(projectId), ct);

    public async Task<IResult> GetTaskById(Guid id, ISender sender, CancellationToken ct)
    {
        var result = await sender.Send(new GetTaskByIdQuery(id), ct);
        return result is null ? Results.NotFound() : Results.Ok(result);
    }

    public async Task<IResult> CreateTask(CreateTaskCommand command, ISender sender, CancellationToken ct)
    {
        var result = await sender.Send(command, ct);
        return Results.Created($"/api/taskitems/detail/{result.Id}", result);
    }

    public async Task<IResult> UpdateTask(Guid id, UpdateTaskCommand command, ISender sender, CancellationToken ct)
    {
        if (id != command.Id) return Results.BadRequest("Id mismatch.");
        var result = await sender.Send(command, ct);
        return Results.Ok(result);
    }

    public async Task<IResult> DeleteTask(Guid id, ISender sender, CancellationToken ct)
    {
        await sender.Send(new DeleteTaskCommand(id), ct);
        return Results.NoContent();
    }
}
