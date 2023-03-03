using Advanced_To_DoList.Core.Entities.Concrete.Auth;
using Advanced_ToDoList.Entities.Concrete;
using Advanced_ToDoList.Entities.Dtos.Group;
using Advanced_ToDoList.Entities.Dtos.Mission;
using Advanced_ToDoList.Entities.Dtos.Person;
using Advanced_ToDoList.Entities.Dtos.Step;
using Advanced_ToDoList.Entities.Dtos.User;
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


            CreateMap<User, UserDetailDto>();
            CreateMap<UserDetailDto, User>();

            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();


            CreateMap<Step, StepAddDto>();
            CreateMap<StepAddDto, Step>();

            CreateMap<Step, StepDto>();
            CreateMap<StepDto, Step>();

            CreateMap<Step, StepUpdateDto>();
            CreateMap<StepUpdateDto, Step>();

            CreateMap<Step, StepDetailDto>();
            CreateMap<StepDetailDto, Step>();
        }
    }
}
