using Advanced_To_DoList.Core.Entities.Abstract;
using Advanced_ToDoList.Entities.Dtos.Mission;
using Advanced_ToDoList.Entities.Dtos.Theme;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Entities.Dtos.Group
{
    public class GroupDto : IDto
    {

        public int Id { get; set; }

        public string GroupName { get; set; }

        public int UserId { get; set; }

        public IEnumerable<MissionDetailDto> Missions { get; set; }

        public int ThemeId { get; set; }

        public virtual ThemeDto Theme { get; set; }
    }
}
