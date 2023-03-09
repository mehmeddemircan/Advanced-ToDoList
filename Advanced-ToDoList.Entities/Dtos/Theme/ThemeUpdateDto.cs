using Advanced_To_DoList.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Entities.Dtos.Theme
{
    public class ThemeUpdateDto : IDto
    {

        public int Id { get; set; }

        public string ThemeName { get; set; }

        public string BackgroundImage { get; set; }

    
    }
}
