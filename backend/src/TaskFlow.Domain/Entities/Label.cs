using System.Collections.Generic;
using TaskFlow.Domain.Common;

namespace TaskFlow.Domain.Entities;

public class Label : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string Color { get; set; } = string.Empty;

    public ICollection<TaskLabel> TaskLabels { get; } = new List<TaskLabel>();
}
