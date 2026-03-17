using MediatR;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Application.Projects.Services;
using TaskFlow.Application.TaskItems.Services;

namespace TaskFlow.Api.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        services.AddMediatR(cfg =>
            cfg.RegisterServicesFromAssembly(typeof(ApplicationServiceExtensions).Assembly));

        services.AddScoped<IProjectService, ProjectService>();
        services.AddScoped<ITaskService, TaskService>();
        services.AddAutoMapper(cfg => cfg.AddMaps(typeof(MappingExtensions).Assembly));


        return services;
    }
}
