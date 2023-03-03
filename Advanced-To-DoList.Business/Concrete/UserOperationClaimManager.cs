using Advanced_To_DoList.Business.Abstract;
using Advanced_To_DoList.Business.Constants;
using Advanced_To_DoList.Core.Entities.Concrete.Auth;
using Advanced_To_DoList.Core.Utilities.Results;
using Advanced_ToDoList.DataAccess.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Business.Concrete
{
    public class UserOperationClaimManager : IUserOperationClaimService
    {

        IUserOperationClaimRepository _userOperationClaimRepository;

        public UserOperationClaimManager(IUserOperationClaimRepository userOperationClaimRepository)
        {
            _userOperationClaimRepository = userOperationClaimRepository; 
        }
        public async Task<IResult> AddT(UserOperationClaim entity)
        {
             await _userOperationClaimRepository.AddAsync(entity);

            return new SuccessResult(Messages.Added); 
        }

        public async Task<IDataResult<bool>> DeleteT(int id)
        {
            var isDelete = await _userOperationClaimRepository.DeleteAsync(id);

            return new SuccessDataResult<bool>(isDelete,Messages.Deleted); 
        }

        public async Task<IDataResult<IEnumerable<UserOperationClaim>>> GetAllT(Expression<Func<UserOperationClaim, bool>> filter = null)
        {
            if (filter == null)
            {

                var response = await _userOperationClaimRepository.GetListAsync();
               

                return new SuccessDataResult<IEnumerable<UserOperationClaim>>(response, Messages.Listed);
            }
            else
            {
                var response = await _userOperationClaimRepository.GetListAsync(filter);


                return new SuccessDataResult<IEnumerable<UserOperationClaim>>(response, Messages.Listed);
            }
        }

        public async Task<IDataResult<UserOperationClaim>> GetSingleT(Expression<Func<UserOperationClaim, bool>> filter)
        {
            var userOperationClaim = await _userOperationClaimRepository.GetAsync(filter);

            if (userOperationClaim != null)
            {
                

                return new SuccessDataResult<UserOperationClaim>(userOperationClaim, Messages.Listed);
            }
            return new ErrorDataResult<UserOperationClaim>(null, Messages.NotListed);
        }

        public async Task<IResult> UpdateT( UserOperationClaim entity)
        {
            
            await _userOperationClaimRepository.UpdateAsync(entity);

            return new SuccessResult(Messages.Updated); 
        }
    }
}
