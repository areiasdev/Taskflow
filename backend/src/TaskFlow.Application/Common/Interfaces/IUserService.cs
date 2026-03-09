using System.Threading.Tasks;
using System.Threading;
using TaskFlow.Application.Users.Models;

namespace TaskFlow.Application.Common.Interfaces;

public interface IUserService
{
    Task<AuthResponseDto> RegisterAsync(string email, string password, string fullName, CancellationToken ct = default);
    Task<AuthResponseDto> LoginAsync(string email, string password, CancellationToken ct = default);
    Task<UserDto> GetByIdAsync(string userId, CancellationToken ct = default);
    Task<UserDto> UpdateAsync(string userId, string fullName, CancellationToken ct = default);
}
