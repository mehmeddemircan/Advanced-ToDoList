using Advanced_To_DoList.Core.Entities.Concrete.Auth;
using Advanced_To_DoList.Core.Utilities.Results;
using System.Linq.Expressions;

namespace Advanced_To_DoList.Business.Abstract
{
    public interface IGenericService<T>
    {

        Task<IResult> AddT(T entity); 

        Task<IDataResult<IEnumerable<T>>> GetAllT(Expression<Func<UserOperationClaim, bool>> filter = null);
        Task<IDataResult<T>> GetSingleT(Expression<Func<UserOperationClaim, bool>> filter);
        Task<IResult> UpdateT(T entity);

        Task<IDataResult<bool>> DeleteT(int id); 
    }
}