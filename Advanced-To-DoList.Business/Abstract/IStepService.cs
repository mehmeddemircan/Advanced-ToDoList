using Advanced_To_DoList.Core.Utilities.Results;
using Advanced_ToDoList.Entities.Concrete;
using Advanced_ToDoList.Entities.Dtos.Step;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Business.Abstract
{
    public interface IStepService 
    {
        Task<IDataResult<IEnumerable<StepDetailDto>>> GetListAsync(Expression<Func<Step, bool>> filter = null);

        Task<IDataResult<StepDto>> AddAsync(StepAddDto entity);


        Task<IDataResult<StepUpdateDto>> UpdateAsync(StepUpdateDto entity);

        Task<IDataResult<StepDto>> GetAsync(Expression<Func<Step, bool>> filter);

        Task<IDataResult<bool>> DeleteAsync(int id);


    }
}
