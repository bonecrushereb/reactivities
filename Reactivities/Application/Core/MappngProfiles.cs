using AutoMapper;
using Domain;

namespace Application.Core
{
  public class MappngProfiles : Profile
  {
    public MappngProfiles()
    {
      CreateMap<Activity, Activity>();
    }
  }
}