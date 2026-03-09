using FluentValidation;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using TaskFlow.Application.Common.Behaviors;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Application.Projects.Services;
using TaskFlow.Application.TaskItems.Services;

namespace TaskFlow.Application;

public static class DependencyInjection
{
	public static IServiceCollection AddApplication(this IServiceCollection services)
	{
		var assembly = typeof(DependencyInjection).Assembly;

		services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(assembly));
		services.AddValidatorsFromAssembly(assembly);
		services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));

		// Serviços
		services.AddScoped<IProjectService, ProjectService>();
		services.AddScoped<ITaskService, TaskService>();

		return services;
	}
}
