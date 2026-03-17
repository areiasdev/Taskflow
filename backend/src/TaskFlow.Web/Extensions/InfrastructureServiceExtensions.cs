using Microsoft.EntityFrameworkCore;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Infrastructure.Data.Context;
using TaskFlow.Infrastructure.Services;

namespace TaskFlow.Api.Extensions;

public static class InfrastructureServiceExtensions
{
	public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
	{
		services.AddDbContext<ApplicationDbContext>(options =>
			options.UseNpgsql(configuration.GetConnectionString("DefaultConnection")));

		services.AddScoped<IApplicationDbContext>(provider =>
			provider.GetRequiredService<ApplicationDbContext>());

        services.AddScoped<ITokenService, TokenService>();

        return services;
	}
}