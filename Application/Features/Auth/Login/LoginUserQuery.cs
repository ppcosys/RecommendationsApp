using Application.Features.Auth;
using MediatR;

namespace Application.Features.Auth.Login;

public record LoginUserQuery(LoginUserDto Dto) : IRequest<AuthResponseDto?>;