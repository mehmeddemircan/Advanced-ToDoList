
using Advanced_To_DoList.Core.Entities.Concrete.Auth;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Core.Utilities.Security.JWT
{
    public interface ITokenHelper
    {
            IConfiguration Configuration { get; }

            AccessToken CreateToken(User user, List<OperationClaim> operationClaims);
    }
}
