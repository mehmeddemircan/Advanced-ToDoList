
using Advanced_To_DoList.Business.Abstract;
using Advanced_To_DoList.Business.Concrete;
using Advanced_To_DoList.Core.Utilities.Interceptors;
using Advanced_To_DoList.Core.Utilities.Security.JWT;
using Advanced_ToDoList.Business.Abstract;
using Advanced_ToDoList.Business.Concrete;
using Advanced_ToDoList.DataAccess.Abstract;
using Advanced_ToDoList.DataAccess.Concrete.EntityFramework;
using Autofac;
using Autofac.Extras.DynamicProxy;
using Castle.DynamicProxy;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Business.DependencyResolvers.Autofac
{
    public class AutofacBusinessModule : Module
    {

        protected override void Load(ContainerBuilder builder)
        {


            builder.RegisterType<AuthManager>().As<IAuthService>();
            builder.RegisterType<JwtHelper>().As<ITokenHelper>();

            builder.RegisterType<UserManager>().As<IUserService>();
            builder.RegisterType<UserRepository>().As<IUserRepository>();

            builder.RegisterType<GroupManager>().As<IGroupService>();
            builder.RegisterType<GroupRepository>().As<IGroupRepository>();


            builder.RegisterType<MissionManager>().As<IMissionService>();
            builder.RegisterType<MissionRepository>().As<IMissionRepository>();

            builder.RegisterType<PersonManager>().As<IPersonService>();
            builder.RegisterType<PersonRepository>().As<IPersonRepository>();

            builder.RegisterType<StepManager>().As<IStepService>();
            builder.RegisterType<StepRepository>().As<IStepRepository>();

            builder.RegisterType<UserOperationClaimManager>().As<IUserOperationClaimService>();
            builder.RegisterType<UserOperationClaimRepository>().As<IUserOperationClaimRepository>();

            var assembly = System.Reflection.Assembly.GetExecutingAssembly();

            builder.RegisterAssemblyTypes(assembly).AsImplementedInterfaces()
                .EnableInterfaceInterceptors(new ProxyGenerationOptions()
                {
                    Selector = new AspectInterceptorSelector()
                }).SingleInstance();
        }
    }
}
