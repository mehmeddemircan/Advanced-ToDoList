using Advanced_To_DoList.Core.Utilities.Results;
using Advanced_ToDoList.Entities.Concrete;
using Advanced_ToDoList.Entities.Dtos.Theme;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Business.Abstract
{
    public interface IThemeService 
    {

        Task<IDataResult<IEnumerable<ThemeDetailDto>>> GetListAsync(Expression<Func<Theme, bool>> filter = null);

        Task<IDataResult<ThemeDto>> AddAsync(ThemeAddDto entity);


        Task<IDataResult<ThemeUpdateDto>> UpdateAsync(ThemeUpdateDto entity);

        Task<IDataResult<ThemeDto>> GetAsync(Expression<Func<Theme, bool>> filter);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
