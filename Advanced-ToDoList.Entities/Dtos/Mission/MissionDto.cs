using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Entities.Dtos.Mission
{
    public class MissionDto
    {


        public int Id { get; set; }

        public string MissionName { get; set; }

        public bool IsCompleted { get; set; }  
        // step olması lazım 
    }
}
