using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class RecommendationsController : BaseApiController
    {
        private readonly DataContext _context;

        public RecommendationsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet] //api/recommendations
        public async Task<ActionResult<List<Recommendation>>> GetRecommendations()
        {
            return await _context.Recommendations.ToListAsync();
        }

        [HttpGet("{id}")] //api/recommendations/guid
        public async Task<ActionResult<Recommendation>> GetRecommendation(Guid id)
        {
            return await _context.Recommendations.FindAsync(id);
        }

    }
}