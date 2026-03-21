using Application.Core.Security;
using Domain;
using MediatR;
using Persistence;

namespace Application.Features.Auth.Register;

public class RegisterUserHandler : IRequestHandler<RegisterUserCommand, Unit>
{
    private readonly DataContext _context;
    private readonly PasswordHasher _passwordHasher;

    public RegisterUserHandler(DataContext context)
    {
        _context = context;
        _passwordHasher = new PasswordHasher();
    }

    public async Task<Unit> Handle(RegisterUserCommand request, CancellationToken cancellationToken)
    {
        var dto = request.Dto;

        var (hash, salt) = _passwordHasher.CreateHash(dto.Password);

        var user = new AppUser
        {
            Id = Guid.NewGuid(),
            DisplayName = dto.DisplayName,
            Email = dto.Email,
            UserName = dto.Email,
            PasswordHash = hash,
            PasswordSalt = salt
        };

        _context.Users.Add(user);

        await _context.SaveChangesAsync(cancellationToken);

        return Unit.Value;
    }
}