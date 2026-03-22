using Application.Features.Auth;
using MediatR;

namespace Application.Features.Auth.CurrentUser;

public record GetCurrentUserQuery : IRequest<AuthResponseDto?>;