using Advanced_To_DoList.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Entities.Dtos.Step
{
    public class StepDetailDto : IDto
    {

        public int Id { get; set; }

        public string StepText { get; set; }

        public bool IsCompleted { get; set; }
    }
}
