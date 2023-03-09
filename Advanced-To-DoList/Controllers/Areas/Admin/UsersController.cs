using Advanced_ToDoList.Business.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Advanced_To_DoList.Controllers.Areas.Admin
{
    [Area("Admin")]
    [Route("api/[Area]/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        IUserService _userService; 
        public UsersController(IUserService userService)
        {
            _userService = userService; 
        }


        [HttpGet("Get-All-User")]
        
        public async Task<IActionResult> GetAllUser()
        {
            var result = await _userService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest(); 
        }

        [HttpGet("Users/{userId}/details")]

        public async Task<IActionResult> GetUserDetails(int userId)
        {
            var result = await _userService.GetAsync(x => x.Id == userId);
            if (result != null)
            {
                return Ok(result); 
            }

            return BadRequest(); 
        }
    }
}
