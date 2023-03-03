using Advanced_ToDoList.Entities.Dtos.Mission;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Business.Validation.FluentValidation
{
    public class MissionValidator : AbstractValidator<MissionAddDto>
    {

        public MissionValidator()
        {
            RuleFor(x => x.MissionName).MinimumLength(1).WithMessage("Gecersiz uzunlukta bir isim girdiniz tekrar deneyiniz ");
        }
    }
}
