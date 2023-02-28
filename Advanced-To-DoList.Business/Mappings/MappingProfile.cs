using Advanced_ToDoList.Entities.Concrete;
using Advanced_ToDoList.Entities.Dtos.Group;
using Advanced_ToDoList.Entities.Dtos.Mission;
using Advanced_ToDoList.Entities.Dtos.Person;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Business.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Person, PersonAddDto>(); 
            CreateMap<PersonAddDto, Person>();

            CreateMap<Person, PersonDto>();
            CreateMap<PersonDto, Person>();

            CreateMap<Person, PersonUpdateDto>();
            CreateMap<PersonUpdateDto, Person>();

            CreateMap<Person, PersonDetailDto>();
            CreateMap<PersonDetailDto, Person>();


            //-----------------

            CreateMap<Mission, MissionAddDto>();
            CreateMap<MissionAddDto, Mission>();

            CreateMap<Mission, MissionDto>();
            CreateMap<MissionDto, Mission>();

            CreateMap<Mission, MissionUpdateDto>();
            CreateMap<MissionUpdateDto, Mission>();

            CreateMap<Mission, MissionDetailDto>();
            CreateMap<MissionDetailDto, Mission>();

              CreateMap<Group, GroupAddDto>(); 
            CreateMap<GroupAddDto, Group>();

            CreateMap<Group, GroupDto>();
            CreateMap<GroupDto, Group>();

            CreateMap<Group, GroupUpdateDto>();
            CreateMap<GroupUpdateDto, Group>();

            CreateMap<Group, GroupDetailDto>();
            CreateMap<GroupDetailDto, Group>();
        }
    }
}
