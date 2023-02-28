﻿


using Advanced_ToDoList.Core.IoC;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Advanced_To_DoList.Core.Extensions
{
  
   
        public static class ServiceCollectionExtensions
        {
            public static IServiceCollection AddDependencyResolvers(this IServiceCollection services,
                ICoreModule[] modules)
            {
                foreach (var module in modules)
                {
                    module.Load(services);
                }

                return ServiceTool.Create(services);
            }
        }
    
}
