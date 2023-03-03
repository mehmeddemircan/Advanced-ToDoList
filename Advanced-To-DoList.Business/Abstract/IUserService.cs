using Advanced_To_DoList.Core.Entities.Concrete.Auth;
using Advanced_To_DoList.Core.Utilities.Results;
using Advanced_ToDoList.Entities.Dtos.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Business.Abstract
{
    public interface IUserService
    {
        List<OperationClaim> GetClaims(User user);
        void Add(User user);
        User GetByMail(string email);


        Task<IDataResult<IEnumerable<UserDetailDto>>> GetListAsync(Expression<Func<User, bool>> filter = null);

        Task<IDataResult<UserDto>> GetAsync(Expression<Func<User, bool>> filter);
    }
}
