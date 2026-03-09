using MediatR;
using System.Threading.Tasks;
using System.Threading;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Application.Users.Models;

namespace TaskFlow.Application.Users.Commands.Register;

public record RegisterCommand(
    string FullName,
    string Email,
    string Password
) : IRequest<AuthResponseDto>;

public class RegisterCommandHandler : IRequestHandler<RegisterCommand, AuthResponseDto>
{
    private readonly IUserService _service;

    public RegisterCommandHandler(IUserService service) => _service = service;

    public async Task<AuthResponseDto> Handle(RegisterCommand request, CancellationToken ct)
        => await _service.RegisterAsync(request.Email, request.Password, request.FullName, ct);
}
