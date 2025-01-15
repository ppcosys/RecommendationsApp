using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
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
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
                
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var recommendation = await _context.Recommendations.FindAsync(request.Recommendation.Id);

                _mapper.Map(request.Recommendation, recommendation);

                await _context.SaveChangesAsync();
            }
        }
    }
}