using AutoMapper.QueryableExtensions;
using System.Data.Entity;

public static class MappingExtensions
{
    public static Task<List<TDestination>> ProjectToListAsync<TDestination>(
        this IQueryable queryable, IConfigurationProvider configuration,
        CancellationToken cancellationToken = default)
        => queryable.ProjectTo<TDestination>(configuration).ToListAsync(cancellationToken);
}

