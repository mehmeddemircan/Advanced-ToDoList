using Advanced_To_DoList.Business.Abstract;
using Advanced_To_DoList.Core.Entities.Concrete.Auth;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Advanced_To_DoList.Controllers.Areas.Admin
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserOperationClaimsController : ControllerBase
    {

        IUserOperationClaimService _userOperationClaimService;

        public UserOperationClaimsController(IUserOperationClaimService userOperationClaimService)
        {
            _userOperationClaimService = userOperationClaimService;
        }


        [HttpPost("Add-Role-To-User")]
            
        public async Task<IActionResult> AddRoleToUser(UserOperationClaim userOperationClaim)
        {
            var result = await _userOperationClaimService.AddT(userOperationClaim);

            if (result != null)
            {
                return Ok(result.Message);
            }
            return BadRequest();
        }


        [HttpGet("Get-Roles-Of-User")]

        public async Task<IActionResult> GetRolesOfUsers()
        {
            var result = await _userOperationClaimService.GetAllT();

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }

        [HttpGet("Get-Roles-Of-User/{userId}")]

        public async Task<IActionResult> GetRolesOfSingleUser(int userId)
        {
            var result = await _userOperationClaimService.GetSingleT(x => x.UserId == userId);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }


        [HttpDelete("Remove-User-Role")]

        public async Task<IActionResult> RemoveUserRole(int id)
        {
            var result = await _userOperationClaimService.DeleteT(id);

            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest();
        }


        [HttpPut("Update-Role-Of-User")]

        public async Task<IActionResult> UpdateRoleOfUser( UserOperationClaim userOperationClaim)
        {
           
            var result = await _userOperationClaimService.UpdateT(userOperationClaim);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }
    }
}
