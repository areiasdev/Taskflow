using FluentValidation;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using TaskFlow.Application.Common.Behaviors;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Application.Projects.Services;
using TaskFlow.Application.TaskItems.Services;
using TaskFlow.Infrastructure.Services;

namespace TaskFlow.Application;

public static class DependencyInjection
{
	public static IServiceCollection AddApplication(this IServiceCollection services)
	{
		var assembly = typeof(DependencyInjection).Assembly;

        services.AddAutoMapper(cfg => cfg.AddMaps(assembly));
        services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(assembly));
		services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
        services.AddValidatorsFromAssembly(typeof(IApplicationDbContext).Assembly);

        // Serviços
        services.AddScoped<IProjectService, ProjectService>();
        services.AddScoped<ITaskService, TaskService>();

        return services;
	}
}
