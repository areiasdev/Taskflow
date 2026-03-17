using MediatR;
using Taskflow.Web.Infrastructure;
using TaskFlow.Web.Infrastructure;
using TaskFlow.Application.Users.Command.Login;
using TaskFlow.Application.Users.Command.Logout;
using TaskFlow.Application.Users.Command.Token;

public class Auth : EndpointGroupBase
{
    public override void Map(WebApplication app)
    {
        app.MapGroup(this)
            .MapPost(Register, "/register")
            .MapPost(Login, "/login")
            .MapPost(Refresh, "/refresh")
            .MapPost(Logout, "/logout");
    }

    public async Task<IResult> Register(RegisterCommand command, ISender sender)
    {
        var result = await sender.Send(command);
        return result.IsSuccess ? Results.Ok(result.Value) : Results.BadRequest(result.Error);
    }

    public async Task<IResult> Login(LoginCommand command, ISender sender)
    {
        var result = await sender.Send(command);
        return result.IsSuccess ? Results.Ok(result.Value) : Results.Unauthorized();
    }

    public async Task<IResult> Refresh(RefreshTokenCommand command, ISender sender)
    {
        var result = await sender.Send(command);
        return result.IsSuccess ? Results.Ok(result.Value) : Results.Unauthorized();
    }

    public async Task<IResult> Logout(LogoutCommand command, ISender sender)
    {
        var result = await sender.Send(command);
        return result.IsSuccess ? Results.NoContent() : Results.BadRequest(result.Error);
    }
}