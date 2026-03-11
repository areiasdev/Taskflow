namespace TaskFlow.Application.Users.Models;

public record AuthResponseDto
{
    public string AccessToken { get; set; }
    public string RefreshToken { get; set; }
    public UserDto User { get; set; }
    public DateTime ExpiresAt { get; set; }
};
