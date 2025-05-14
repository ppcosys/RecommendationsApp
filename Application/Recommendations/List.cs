using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.Core;

namespace Application.Recommendations
{
    public class List
    {
        public class Query : IRequest<Result<List<Recommendation>>> {}

        public class Handler : IRequestHandler<Query, Result<List<Recommendation>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
                
            }

            public async Task<Result<List<Recommendation>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Recommendation>>.Success(await _context.Recommendations.ToListAsync());
            }
        }
    }
}