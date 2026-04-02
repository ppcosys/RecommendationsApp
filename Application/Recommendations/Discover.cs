using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Recommendations
{
    public class Discover
    {
        public class Query : IRequest<Result<List<RecommendationDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<RecommendationDto>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<RecommendationDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var recommendations = await _context.Recommendations
                    .OrderBy(x => x.Date)
                    .Select(x => new RecommendationDto
                    {
                        Id = x.Id,
                        Title = x.Title,
                        Category = x.Category,
                        Link = x.Link,
                        Date = x.Date,
                        Description = x.Description,
                        Country = x.Country,
                        City = x.City,
                        Place = x.Place
                    })
                    .ToListAsync(cancellationToken);

                return Result<List<RecommendationDto>>.Success(recommendations);
            }
        }
    }
}