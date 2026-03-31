using Application.Core;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Recommendations
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var email = _userAccessor.GetUsername();

                if (string.IsNullOrWhiteSpace(email))
                    return Result<Unit>.Failure("User email not found in token");

                var user = await _context.Users
                    .FirstOrDefaultAsync(x => x.Email == email, cancellationToken);

                if (user == null)
                    return Result<Unit>.Failure("User not found");

                var recommendation = await _context.Recommendations
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (recommendation == null)
                    return Result<Unit>.Failure("Recommendation not found");

                if (recommendation.AppUserId != user.Id)
                    return Result<Unit>.Failure("You are not allowed to delete this recommendation");

                _context.Recommendations.Remove(recommendation);

                var result = await _context.SaveChangesAsync(cancellationToken) > 0;

                if (!result)
                    return Result<Unit>.Failure("Failed to delete recommendation");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}