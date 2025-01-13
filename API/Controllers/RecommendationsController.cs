using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Recommendations;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class RecommendationsController : BaseApiController
    {
        
        private readonly IMediator _mediator;

        public RecommendationsController(IMediator mediator)
        {
            _mediator = mediator;
            
        }

        [HttpGet] //api/recommendations
        public async Task<ActionResult<List<Recommendation>>> GetRecommendations()
        {
            return await _mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")] //api/recommendations/guid
        public async Task<ActionResult<Recommendation>> GetRecommendation(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }
        
    }
}