using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Application.Users.Models;
using TaskFlow.Domain.Entities;

namespace TaskFlow.Application.Users.Command.Token
{
    public record RefreshTokenCommand(string RefreshToken) : IRequest<Result<AuthResponseDto>>;

    public class RefreshTokenCommandHandler : IRequestHandler<RefreshTokenCommand, Result<AuthResponseDto>>
    {
        private readonly IApplicationDbContext _context;
        private readonly ITokenService _tokenService;

        public RefreshTokenCommandHandler(IApplicationDbContext context, ITokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        public async Task<Result<AuthResponseDto>> Handle(
            RefreshTokenCommand request, CancellationToken cancellationToken)
        {
            var storedToken = await _context.RefreshTokens
                .Include(r => r.User)
                .FirstOrDefaultAsync(r => r.Token == request.RefreshToken, cancellationToken);

            if (storedToken is null || !storedToken.IsActive)
                return Result<AuthResponseDto>.Failure("Invalid or expired refresh token.");

            // Revogar o token antigo (rotation)
            storedToken.IsRevoked = true;
            storedToken.RevokedAt = DateTime.UtcNow;

            // Gerar novos tokens
            var newAccessToken = _tokenService.GenerateAccessToken(storedToken.User);
            var newRefreshTokenValue = _tokenService.GenerateRefreshToken();

            var newRefreshToken = new RefreshToken
            {
                UserId = storedToken.UserId,
                Token = newRefreshTokenValue,
                ExpiresAt = DateTime.UtcNow.AddDays(7)
            };

            _context.RefreshTokens.Add(newRefreshToken);
            await _context.SaveChangesAsync(cancellationToken);

            return Result<AuthResponseDto>.Success(new AuthResponseDto
            {
                AccessToken = newAccessToken,
                RefreshToken = newRefreshTokenValue,
                ExpiresAt = DateTime.UtcNow.AddMinutes(15)
            });
        }
    }
}
