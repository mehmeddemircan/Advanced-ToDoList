using Advanced_To_DoList.Core.Entities.Concrete;
using Advanced_To_DoList.Core.Entities.Concrete.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Entities.Concrete
{
    public class Person : AuditableEntity
    {

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}
