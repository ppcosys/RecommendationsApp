using Application.Features.Auth.Register;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Application.Features.Auth.CurrentUser;
using Microsoft.AspNetCore.Authorization;
using Application.Features.Auth.Login;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountController : ControllerBase
{
    private readonly IMediator _mediator;

    public AccountController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterUserDto dto)
    {
        await _mediator.Send(new RegisterUserCommand(dto));
        return Ok();
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginUserDto dto)
    {
        var result = await _mediator.Send(new LoginUserQuery(dto));

        if (result == null) return Unauthorized();

        return Ok(result);
    }

    [Authorize]
    [HttpGet]
    public async Task<IActionResult> GetCurrentUser()
    {
        var result = await _mediator.Send(new GetCurrentUserQuery());

        if (result == null) return Unauthorized();

        return Ok(result);
    }
}