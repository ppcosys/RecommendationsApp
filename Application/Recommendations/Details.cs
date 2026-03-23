using Application.Core;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Recommendations
{
    public class Details
    {
        public class Query : IRequest<Result<RecommendationDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<RecommendationDto>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }

            public async Task<Result<RecommendationDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var email = _userAccessor.GetUsername();

                if (string.IsNullOrWhiteSpace(email))
                    return Result<RecommendationDto>.Failure("User not found in token");

                var user = await _context.Users
                    .FirstOrDefaultAsync(x => x.Email == email, cancellationToken);

                if (user == null)
                    return Result<RecommendationDto>.Failure("User not found");

                var recommendation = await _context.Recommendations
                    .Where(x => x.Id == request.Id && x.AppUserId == user.Id)
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
                    .FirstOrDefaultAsync(cancellationToken);

                if (recommendation == null)
                    return Result<RecommendationDto>.Failure("Recommendation not found");

                return Result<RecommendationDto>.Success(recommendation);
            }
        }
    }
}