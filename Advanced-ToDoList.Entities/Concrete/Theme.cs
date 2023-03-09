using Advanced_To_DoList.Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Entities.Concrete
{
    public class Theme : AuditableEntity
    {


   
        public string ThemeName { get; set; }

        public string BackgroundImage { get; set; }

  
    }
}
