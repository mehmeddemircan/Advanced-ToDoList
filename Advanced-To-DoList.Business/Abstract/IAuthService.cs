using Advanced_To_DoList.Core.Entities.Concrete.Auth;
using Advanced_To_DoList.Core.Utilities.Results;
using Advanced_To_DoList.Core.Utilities.Security.JWT;
using Advanced_ToDoList.Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Business.Abstract
{
    public interface IAuthService
    {

        IDataResult<User> Register(UserForRegisterDto userForRegisterDto, string password);
        IDataResult<User> Login(UserForLoginDto userForLoginDto);
        IResult UserExists(string email);
        IDataResult<AccessToken> CreateAccessToken(User user);
    }
}
