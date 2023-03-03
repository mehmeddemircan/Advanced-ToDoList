
using Advanced_To_DoList.Business.BusinessAspects.Autofac;
using Advanced_To_DoList.Business.Constants;
using Advanced_To_DoList.Core.Entities.Concrete.Auth;
using Advanced_To_DoList.Core.Utilities.Results;
using Advanced_ToDoList.Business.Abstract;
using Advanced_ToDoList.DataAccess.Abstract;
using Advanced_ToDoList.Entities.Dtos.User;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_ToDoList.Business.Concrete
{
    public class UserManager : IUserService
    {

        IUserRepository _userRepository;
        IMapper _mapper; 
        public UserManager(IUserRepository userRepository,IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public List<OperationClaim> GetClaims(User user)
        {
            return _userRepository.GetClaims(user);
        }


        public void Add(User user)
        {
            _userRepository.AddAsync(user);
        }

        public User GetByMail(string email)
        {
            return _userRepository.Get(u => u.Email == email);
        }

        [SecuredOperation("admin")]
        public async Task<IDataResult<IEnumerable<UserDetailDto>>> GetListAsync(Expression<Func<User, bool>> filter = null)
        {
            if (filter == null)
            {

                var response = await _userRepository.GetListAsync();
                var userDetailDtos = _mapper.Map<IEnumerable<UserDetailDto>>(response);

                return new SuccessDataResult<IEnumerable<UserDetailDto>>(userDetailDtos, Messages.Listed);
            }
            else
            {
                var response = await _userRepository.GetListAsync(filter);
                var userDetailDtos = _mapper.Map<IEnumerable<UserDetailDto>>(response);

                return new SuccessDataResult<IEnumerable<UserDetailDto>>(userDetailDtos, Messages.Listed);
            }
        }

        [SecuredOperation("admin")]
        public async Task<IDataResult<UserDto>> GetAsync(Expression<Func<User, bool>> filter)
        {
            var user = await _userRepository.GetAsync(filter);

            if (user != null)
            {

                //nested class veri aktarma 
              

                var userDto = _mapper.Map<UserDto>(user);
                return new SuccessDataResult<UserDto>(userDto, Messages.Listed);
            }
            return new ErrorDataResult<UserDto>(null, Messages.NotListed);
        }
    }
}
