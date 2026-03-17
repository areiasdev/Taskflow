using FluentValidation.Results;

namespace TaskFlow.Application.Common.Exceptions;

public class ValidationException : Exception
{
    public ValidationException(IEnumerable<ValidationFailure> failures)
    {
        var errors = failures
            .Select(f => new FluentValidation.Results.ValidationFailure(f.PropertyName, f.ErrorMessage));
    }

    public override string Message => string.Join(", ", Errors.SelectMany(e => e.Value));

    public IDictionary<string, string[]> Errors { get; }
}