using Application.Core;
using Application.Interfaces;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Recommendations
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Recommendation Recommendation { get; set; } = null!;
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
            private readonly IMapper _mapper;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                _context = context;
                _mapper = mapper;
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
                    .FirstOrDefaultAsync(x => x.Id == request.Recommendation.Id, cancellationToken);

                if (recommendation == null)
                    return Result<Unit>.Failure("Recommendation not found");

                if (recommendation.AppUserId != user.Id)
                    return Result<Unit>.Failure("You are not allowed to edit this recommendation");

                _mapper.Map(request.Recommendation, recommendation);

                recommendation.AppUserId = user.Id;

                var result = await _context.SaveChangesAsync(cancellationToken) > 0;

                if (!result)
                    return Result<Unit>.Failure("Failed to update recommendation");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}