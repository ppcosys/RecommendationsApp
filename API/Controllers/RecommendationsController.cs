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
        public async Task<IActionResult> GetRecommendations()
        {
            return HandleResult(await _mediator.Send(new List.Query()));
        }
        
        [HttpGet("{id}")] //api/recommendations/guid
        public async Task<IActionResult> GetRecommendation(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateRecommendation(Recommendation recommendation)
        {
            return HandleResult(await Mediator.Send(new Create.Command {Recommendation = recommendation}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(Guid id, Recommendation recommendation)
        {
            recommendation.Id = id;

            return HandleResult(await Mediator.Send(new Edit.Command { Recommendation = recommendation }));
            
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecommendaton(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command {Id = id}));
        }
    }
}