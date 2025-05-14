using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Recommendations
{
    public class Details
    {
        public class Query : IRequest<Result<Recommendation>>
        {
            public Guid Id {get; set;}
        }

        public class Handler : IRequestHandler<Query, Result<Recommendation>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;                
            }

            public async Task<Result<Recommendation>> Handle(Query request, CancellationToken cancellationToken)
            {
                var recommendation =  await _context.Recommendations.FindAsync(request.Id);

                return Result<Recommendation>.Success(recommendation);
            }
        }
    }
}