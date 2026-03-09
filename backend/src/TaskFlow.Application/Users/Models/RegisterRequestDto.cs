namespace TaskFlow.Application.Users.Models;

public record RegisterRequestDto
{
    public string FullName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
};
