using System;

namespace TaskFlow.Domain.Common;

public abstract class BaseEntity<TKey>
{
	public TKey Id { get; protected set; } = default!;
	public bool IsDeleted { get; set; }
	public Guid PublicId { get; protected set; } = Guid.NewGuid();
	public DateTime CreatedAt { get; protected set; } = DateTime.UtcNow;
	public DateTime? UpdatedAt { get; protected set; }

	public void SetUpdatedAt() => UpdatedAt = DateTime.UtcNow;
}
