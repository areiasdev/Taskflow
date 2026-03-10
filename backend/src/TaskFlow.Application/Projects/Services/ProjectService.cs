using AutoMapper;
using Microsoft.EntityFrameworkCore;
using TaskFlow.Application.Common.Interfaces;
using TaskFlow.Application.Projects.Models;
using TaskFlow.Domain.Entities;

namespace TaskFlow.Application.Projects.Services;

public class ProjectService : IProjectService
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;

    public ProjectService(IApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<ProjectDto> CreateAsync(string name, string? description, Guid ownerId, CancellationToken ct = default)
    {
        var project = new Project
        {
            Name = name,
            Description = description,
            OwnerId = ownerId
        };

        _context.Projects.Add(project);
        await _context.SaveChangesAsync(ct);

        return _mapper.Map<ProjectDto>(project);
    }

    public async Task<ProjectDto> UpdateAsync(Guid id, string name, string? description, CancellationToken ct = default)
    {
        var project = await _context.Projects.FindAsync([id], ct)
            ?? throw new KeyNotFoundException($"Project {id} not found.");

        project.Name = name;
        project.Description = description;

        await _context.SaveChangesAsync(ct);

        return _mapper.Map<ProjectDto>(project);
    }

    public async Task DeleteAsync(Guid id, CancellationToken ct = default)
    {
        var project = await _context.Projects.FindAsync([id], ct)
            ?? throw new KeyNotFoundException($"Project {id} not found.");

        _context.Projects.Remove(project);
        await _context.SaveChangesAsync(ct);
    }

    public async Task<ProjectDto?> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        var project = await _context.Projects
            .Include(p => p.Tasks)
            .FirstOrDefaultAsync(p => p.Id == id, ct);

        return project is null ? null : _mapper.Map<ProjectDto>(project);
    }

    public async Task<IEnumerable<ProjectDto>> GetAllByOwnerAsync(Guid ownerId, CancellationToken ct = default)
    {
        var projects = await _context.Projects
            .Where(p => p.OwnerId == ownerId)
            .Include(p => p.Tasks)
            .ToListAsync(ct);

        return _mapper.Map<IEnumerable<ProjectDto>>(projects);
    }
}
