using Domain;
using MediatR;
using Persistence;

namespace Application.Recommendations
{
    public class Details
    {
        public class Query : IRequest<Recommendation>
        {
            public Guid Id {get; set;}
        }

        public class Handler : IRequestHandler<Query, Recommendation>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;                
            }

            public async Task<Recommendation> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Recommendations.FindAsync(request.Id);
            }
        }
    }
}