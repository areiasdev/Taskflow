using System;
using TaskFlow.Domain.Common;

namespace TaskFlow.Domain.Entities;

public class User : BaseEntity<int>
{
	public string FullName { get; private set; } = string.Empty;
	public string Email { get; private set; } = string.Empty;
	public string PasswordHash { get; private set; } = string.Empty;
}
