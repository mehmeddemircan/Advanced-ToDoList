using Advanced_To_DoList.Core.DataAccess;
using Advanced_To_DoList.Core.Entities.Concrete.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.DataAccess.Abstract
{
    public interface IUserOperationClaimRepository : IBaseRepository<UserOperationClaim>
    {
    }
}
