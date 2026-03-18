using AutoMapper;
using TaskFlow.Domain.Entities;
using TaskFlow.Domain.Enums;

namespace TaskFlow.Application.TaskItems.Models;

public class TaskItemDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public TaskStatusEnum Status { get; set; }
    public PriorityEnum Priority { get; set; }
    public DateTime? DueDate { get; set; }
    public Guid ProjectId { get; set; }
    public int CommentCount { get; set; }

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<TaskItem, TaskItemDto>()
                .ForMember(dest => dest.CommentCount, opt => opt.MapFrom(src => src.Comments.Count));
        }
    }
}
