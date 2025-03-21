using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using SQLitePCL;

namespace Application.Recommendations
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id {get; set;}
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
                var recommendation = await _context.Recommendations.FindAsync(request.Id);

                _context.Remove(recommendation);

                await _context.SaveChangesAsync();
            }
        }
    }
}