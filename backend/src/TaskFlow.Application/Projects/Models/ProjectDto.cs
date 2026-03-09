using System;

namespace TaskFlow.Application.Projects.Models;

public record ProjectDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string? Description {  get; set; }  
    public DateTime CreatedAt { get; set; }
    public int TaskCount { get; set; }
};
