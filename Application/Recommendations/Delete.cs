using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistence;
using SQLitePCL;

namespace Application.Recommendations
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id {get; set;}
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
                var recommendation = await _context.Recommendations.FindAsync(request.Id);

                if (recommendation == null) return null;

                _context.Remove(recommendation);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to delete recommendation");

                return Result<Unit>.Success(Unit.Value); 
            }
        }
    }
}