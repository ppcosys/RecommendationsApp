using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Application.Core;
using FluentValidation;

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
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Recommendations.Add(request.Recommendation);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to create recommendation");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}