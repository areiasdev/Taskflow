using FluentValidation.Results;

namespace TaskFlow.Application.Common.Exceptions;

public class ValidationException : Exception
{
    public ValidationException(IEnumerable<ValidationFailure> failures)
    {
        Errors = failures
            .GroupBy(e => e.PropertyName, e => e.ErrorMessage)
            .ToDictionary(failureGroup => failureGroup.Key, failureGroup => failureGroup.ToArray());
    }

    public override string Message => string.Join(", ", Errors.SelectMany(e => e.Value));

    public IDictionary<string, string[]> Errors { get; }
}