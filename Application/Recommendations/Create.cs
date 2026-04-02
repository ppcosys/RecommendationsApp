using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Application.Core;
using FluentValidation;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Application.Recommendations
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Recommendation Recommendation { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Recommendation).SetValidator(new RecommendationValidator());
            }
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

                request.Recommendation.AppUserId = user.Id;

                _context.Recommendations.Add(request.Recommendation);

                var result = await _context.SaveChangesAsync(cancellationToken) > 0;

                if (!result) return Result<Unit>.Failure("Failed to create recommendation");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}