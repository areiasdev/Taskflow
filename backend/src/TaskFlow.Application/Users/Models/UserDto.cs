using System;

namespace TaskFlow.Application.Users.Models;

public record UserDto
{
    public Guid Id { get; set; }
    public string FullName { get; set; }
    public string Email { get; set; }
    public DateTime CreatedAt { get; set; }
};