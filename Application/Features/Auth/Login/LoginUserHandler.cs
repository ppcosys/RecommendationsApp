using Application.Core.Security;
using Application.Features.Auth;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Features.Auth.Login;

public class LoginUserHandler : IRequestHandler<LoginUserQuery, AuthResponseDto?>
{
    private readonly DataContext _context;
    private readonly ITokenService _tokenService;
    private readonly PasswordHasher _passwordHasher;

    public LoginUserHandler(DataContext context, ITokenService tokenService)
    {
        _context = context;
        _tokenService = tokenService;
        _passwordHasher = new PasswordHasher();
    }

    public async Task<AuthResponseDto?> Handle(LoginUserQuery request, CancellationToken cancellationToken)
    {
        var dto = request.Dto;

        var user = await _context.Users
            .FirstOrDefaultAsync(x => x.Email == dto.Email, cancellationToken);

        if (user == null) return null;

        var passwordValid = _passwordHasher.Verify(dto.Password, user.PasswordHash, user.PasswordSalt);

        if (!passwordValid) return null;

        return new AuthResponseDto
        {
            DisplayName = user.DisplayName,
            Email = user.Email,
            Token = _tokenService.CreateToken(user)
        };
    }
}