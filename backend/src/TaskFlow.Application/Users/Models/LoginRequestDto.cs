namespace TaskFlow.Application.Users.Models;

public record LoginRequestDto
{
    public string Email { get; set; }
    public string Password { get; set; }
};
