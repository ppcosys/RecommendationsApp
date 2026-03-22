using Application.Features.Auth;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Features.Auth.CurrentUser;

public class GetCurrentUserHandler : IRequestHandler<GetCurrentUserQuery, AuthResponseDto?>
{
    private readonly DataContext _context;
    private readonly IUserAccessor _userAccessor;
    private readonly ITokenService _tokenService;

    public GetCurrentUserHandler(
        DataContext context,
        IUserAccessor userAccessor,
        ITokenService tokenService)
    {
        _context = context;
        _userAccessor = userAccessor;
        _tokenService = tokenService;
    }

    public async Task<AuthResponseDto?> Handle(GetCurrentUserQuery request, CancellationToken cancellationToken)
    {
        var email = _userAccessor.GetUsername();

        if (string.IsNullOrWhiteSpace(email)) return null;

        var user = await _context.Users
            .FirstOrDefaultAsync(x => x.Email == email, cancellationToken);

        if (user == null) return null;

        return new AuthResponseDto
        {
            DisplayName = user.DisplayName,
            Email = user.Email,
            Token = _tokenService.CreateToken(user)
        };
    }
}