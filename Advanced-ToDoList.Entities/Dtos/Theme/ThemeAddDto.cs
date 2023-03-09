using Advanced_To_DoList.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Entities.Dtos.Theme
{
    public class ThemeAddDto  : IDto
    {


        public string ThemeName { get; set; }

        public string BackgroundImage { get; set; }

  
    }
}
