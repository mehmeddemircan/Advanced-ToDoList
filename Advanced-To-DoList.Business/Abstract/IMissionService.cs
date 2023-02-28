using Advanced_To_DoList.Core.Utilities.Results;
using Advanced_ToDoList.Entities.Concrete;
using Advanced_ToDoList.Entities.Dtos.Mission;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Business.Abstract
{
    public interface IMissionService
    {

        Task<IDataResult<IEnumerable<MissionDetailDto>>> GetListAsync(Expression<Func<Mission, bool>> filter = null);

        Task<IDataResult<MissionDto>> AddAsync(MissionAddDto entity);


        Task<IDataResult<MissionUpdateDto>> UpdateAsync(MissionUpdateDto entity);

        Task<IDataResult<MissionDto>> GetAsync(Expression<Func<Mission, bool>> filter);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
