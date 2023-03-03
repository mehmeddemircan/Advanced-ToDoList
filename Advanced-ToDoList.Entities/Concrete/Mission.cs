using Advanced_To_DoList.Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Entities.Concrete
{
    public class Mission : AuditableEntity
    {


        public string MissionName { get; set; }

        public bool IsCompleted { get; set; } = false; 

        public int GroupId { get; set; }

        public virtual Group Group { get; set; }

        public IEnumerable<Step> Steps { get; set; }
    }
}
