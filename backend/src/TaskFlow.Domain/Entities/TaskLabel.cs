using System.Reflection.Emit;
using System;

namespace TaskFlow.Domain.Entities;

public class TaskLabel
{
    public Guid TaskItemId { get; set; }
    public Guid LabelId { get; set; }

    public TaskItem TaskItem { get; set; } = null!;
    public Label Label { get; set; } = null!;
}
