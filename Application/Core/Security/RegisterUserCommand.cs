using MediatR;

namespace Application.Features.Auth.Register;

public record RegisterUserCommand(RegisterUserDto Dto) : IRequest<Unit>;