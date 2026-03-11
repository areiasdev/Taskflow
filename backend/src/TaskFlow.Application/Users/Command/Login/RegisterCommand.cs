using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Application.Users.Models;
using TaskFlow.Domain.Entities;

namespace TaskFlow.Application.Users.Command.Login
{
    public record RegisterCommand(string FullName, string Email, string Password)
    : IRequest<Result<AuthResponseDto>>;

    public class RegisterCommandHandler : IRequestHandler<RegisterCommand, Result<AuthResponseDto>>
    {
        private readonly IApplicationDbContext _context;
        private readonly ITokenService _tokenService;

        public RegisterCommandHandler(IApplicationDbContext context, ITokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        public async Task<Result<AuthResponseDto>> Handle(
            RegisterCommand request, CancellationToken cancellationToken)
        {
            var emailExists = await _context.Users
                .AnyAsync(u => u.Email == request.Email, cancellationToken);

            if (emailExists)
                return Result<AuthResponseDto>.Failure("Email already in use.");

            var user = new User
            {
                FullName = request.FullName,
                Email = request.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password)
            };

            _context.Users.Add(user);

            var accessToken = _tokenService.GenerateAccessToken(user);
            var refreshTokenValue = _tokenService.GenerateRefreshToken();

            var refreshToken = new RefreshToken
            {
                UserId = user.Id,
                Token = refreshTokenValue,
                ExpiresAt = DateTime.UtcNow.AddDays(7)
            };

            _context.RefreshTokens.Add(refreshToken);
            await _context.SaveChangesAsync(cancellationToken);

            return Result<AuthResponseDto>.Success(new AuthResponseDto
            {
                AccessToken = accessToken,
                RefreshToken = refreshTokenValue,
                ExpiresAt = DateTime.UtcNow.AddMinutes(15)
            });
        }
    }
}
