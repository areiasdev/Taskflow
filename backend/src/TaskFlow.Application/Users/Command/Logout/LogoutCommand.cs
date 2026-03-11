using Microsoft.EntityFrameworkCore;
using TaskFlow.Application.Common.Interfaces;

namespace TaskFlow.Application.Users.Command.Logout
{
    public record LogoutCommand(string RefreshToken) : IRequest<Result>;

    public class LogoutCommandHandler : IRequestHandler<LogoutCommand, Result>
    {
        private readonly IApplicationDbContext _context;

        public LogoutCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Result> Handle(LogoutCommand request, CancellationToken cancellationToken)
        {
            var storedToken = await _context.RefreshTokens
                .FirstOrDefaultAsync(r => r.Token == request.RefreshToken, cancellationToken);

            if (storedToken is null || !storedToken.IsActive)
                return Result.Failure("Token not found or already revoked.");

            storedToken.IsRevoked = true;
            storedToken.RevokedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync(cancellationToken);
            return Result.Success();
        }
    }
}
