using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Recommendations
{
    public class List
    {
        public class Query : IRequest<Result<List<RecommendationDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<RecommendationDto>>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }

            public async Task<Result<List<RecommendationDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var email = _userAccessor.GetUsername();

                if (string.IsNullOrWhiteSpace(email))
                    return Result<List<RecommendationDto>>.Failure("User not found in token");

                var user = await _context.Users
                    .FirstOrDefaultAsync(x => x.Email == email, cancellationToken);

                if (user == null)
                    return Result<List<RecommendationDto>>.Failure("User not found");

                var recommendations = await _context.Recommendations
                    .Where(x => x.AppUserId == user.Id)
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