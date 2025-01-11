using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Recommendations
{
    public class List
    {
        public class Query : IRequest<List<Recommendation>> {}

        public class Handler : IRequestHandler<Query, List<Recommendation>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
                
            }

            public async Task<List<Recommendation>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Recommendations.ToListAsync();
            }
        }
    }
}