using Advanced_To_DoList.Core.Utilities.Results;
using Advanced_ToDoList.Entities.Concrete;
using Advanced_ToDoList.Entities.Dtos.Person;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Business.Abstract
{
    public interface IPersonService
    {


        Task<IDataResult<IEnumerable<PersonDetailDto>>> GetListAsync(Expression<Func<Person, bool>> filter = null);

        Task<IDataResult<PersonDto>> AddAsync(PersonAddDto entity);


        Task<IDataResult<PersonUpdateDto>> UpdateAsync(PersonUpdateDto entity);

        Task<IDataResult<PersonDto>> GetAsync(Expression<Func<Person, bool>> filter);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
