using Advanced_To_DoList.Core.Utilities.Results;
using Advanced_ToDoList.Entities.Concrete;
using Advanced_ToDoList.Entities.Dtos.Group;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Business.Abstract
{
    public interface IGroupService
    {

        Task<IDataResult<IEnumerable<GroupDetailDto>>> GetListAsync(Expression<Func<Group, bool>> filter = null);

        Task<IDataResult<GroupDto>> AddAsync(GroupAddDto entity);


        Task<IDataResult<GroupUpdateDto>> UpdateAsync(GroupUpdateDto entity);

        Task<IDataResult<GroupDto>> GetAsync(Expression<Func<Group, bool>> filter);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
