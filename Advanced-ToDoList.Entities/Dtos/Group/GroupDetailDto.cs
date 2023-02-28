using Advanced_To_DoList.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Entities.Dtos.Group
{
    public class GroupDetailDto : IDto
    {

        public int Id { get; set; }

        public string GroupName { get; set; }

        public int UserId { get; set; }
    }
}
