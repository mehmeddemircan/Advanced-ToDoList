using Advanced_To_DoList.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Entities.Dtos.Person
{
    public class PersonDetailDto : IDto
    {

        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }


       

    }
}
