using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Recommendation, Recommendation>()
                .ForMember(d => d.Id, o => o.Ignore())
                .ForMember(d => d.AppUserId, o => o.Ignore())
                .ForMember(d => d.AppUser, o => o.Ignore());
        }
    }
}