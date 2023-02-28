using Advanced_To_DoList.Core.Entities.Concrete.Auth;
using Advanced_ToDoList.Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.DataAccess.Concrete.Contexts
{
    public class ApplicationDbContext : DbContext
    {

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseNpgsql("Server=127.0.0.1;Port=5432;Database=To-DoList;User Id=postgres;Password=Sd635241;");

            optionsBuilder.UseSqlServer(@"Server=(localdb)\ProjectsV13;Database=To-DoList;Trusted_Connection=true");
        }

        public DbSet<OperationClaim> OperationClaims { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserOperationClaim> UserOperationClaims { get; set; }

        public DbSet<Person> People { get; set; }

        public DbSet<Group> Groups { get; set; }

        public DbSet<Mission> Missions { get; set; }

    }
}
