using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Recommendations
{
    public class Edit
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
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;

            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var recommendation = await _context.Recommendations.FindAsync(request.Recommendation.Id);

                if (recommendation == null) return null;

                _mapper.Map(request.Recommendation, recommendation);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to update recommendation");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}