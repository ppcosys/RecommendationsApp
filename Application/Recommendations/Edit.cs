using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Recommendations
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Recommendation Recommendation { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
                
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var recommendation = await _context.Recommendations.FindAsync(request.Recommendation.Id);

                recommendation.Title = request.Recommendation.Title ?? recommendation.Title;

                await _context.SaveChangesAsync();
            }
        }
    }
}