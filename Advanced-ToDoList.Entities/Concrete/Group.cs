using Advanced_To_DoList.Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Entities.Concrete
{
    public class Group : AuditableEntity
    {

        public int UserId { get; set; }

        public string GroupName { get; set; }

        public virtual IEnumerable<Mission>? Missions { get; set; }

        public int? ThemeId { get; set; }

        public virtual Theme Theme { get; set; }
    }
}
