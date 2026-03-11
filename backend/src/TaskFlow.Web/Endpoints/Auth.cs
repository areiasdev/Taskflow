using MediatR;
using TaskFlow.Application.Users.Command.Logout;
using TaskFlow.Application.Users.Command.Token;
using Taskflow.Web.Infrastructure;
using TaskFlow.Web.Infrastructure;
using TaskFlow.Application.Users.Command.Login;

namespace TaskFlow.Web.Endpoints
{
    public class Auth : EndpointGroupBase
    {
        public override void Map(WebApplication app)
        {
            app.MapGroup(this)
                .MapPost(Register, "/registerUser")
                .MapPost(Login, "/log-in")
                .MapPost(Refresh, "/registerUser")
                .MapPost(Logout, "/registerUser");
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

}
