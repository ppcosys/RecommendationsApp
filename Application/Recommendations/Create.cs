using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Recommendations
{
    public class Create
    {
        public class Command : IRequest
        {
            public Recommendation Recommendation {get; set;}
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
                _context.Recommendations.Add(request.Recommendation);

                await _context.SaveChangesAsync();
            }
        }
    }
}