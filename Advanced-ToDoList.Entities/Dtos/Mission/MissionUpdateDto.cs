using Advanced_To_DoList.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Entities.Dtos.Mission
{
    public class MissionUpdateDto : IDto
    {

        public int Id { get; set; }

        public string MissionName { get; set; }

        public bool IsCompleted { get; set; } = false;

  
    }
}
