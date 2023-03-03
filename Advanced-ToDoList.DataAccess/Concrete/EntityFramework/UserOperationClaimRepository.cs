using Advanced_To_DoList.Core.DataAccess.EntityFramework;
using Advanced_To_DoList.Core.Entities.Concrete.Auth;
using Advanced_ToDoList.DataAccess.Abstract;
using Advanced_ToDoList.DataAccess.Concrete.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.DataAccess.Concrete.EntityFramework
{
    public class UserOperationClaimRepository : EfBaseRepository<UserOperationClaim,ApplicationDbContext>, IUserOperationClaimRepository
    {
    }
}
