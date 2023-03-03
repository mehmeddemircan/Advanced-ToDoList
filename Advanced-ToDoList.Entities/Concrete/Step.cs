using Advanced_To_DoList.Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Entities.Concrete
{
    public class Step : AuditableEntity
    {

        public int MissionId { get; set; }

        public virtual Mission Mission { get; set; }

        public string StepText{ get; set; }

        public bool IsCompleted { get; set; } = false; 
    }
}
