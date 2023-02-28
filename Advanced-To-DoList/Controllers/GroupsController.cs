using Advanced_To_DoList.Business.Abstract;
using Advanced_ToDoList.Entities.Dtos.Group;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Advanced_To_DoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupsController : ControllerBase
    {
        IGroupService _groupService; 
        public GroupsController(IGroupService groupService)
        {
            _groupService = groupService; 
        }


        [HttpPost("Add-Group")]

        public async Task<IActionResult> AddNewGroup(GroupAddDto groupAddDto)
        {
            var result = await _groupService.AddAsync(groupAddDto);

            if (result != null)
            {
                return Ok(result); 
            }
            return BadRequest(); 
        }

        [HttpGet("User/{userId}/Groups")]

        public async Task<IActionResult> GetAllGroup(int userId)
        {
            var result = await _groupService.GetListAsync(x => x.UserId == userId);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }


        [HttpDelete("Group/{groupId}/Delete-Group")]

        public async Task<IActionResult> DeleteGroup(int groupId)
        {
            var result = await _groupService.DeleteAsync(groupId);

            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest();
        }

        [HttpGet("User/{userId}/Group/{groupId}/get-details")]

        public async Task<IActionResult> GetGroupDetails(int userId,int groupId)
        {
            var result = await _groupService.GetAsync(x => x.UserId == userId && x.Id == groupId);

            if (result != null)
            {
                return Ok(result); 
            }

            return BadRequest();
        }


        [HttpPut("Group/Update")]
        
        public async Task<IActionResult> UpdateGroup(GroupUpdateDto groupUpdateDto)
        {
            var result = await _groupService.UpdateAsync(groupUpdateDto);

            if (result != null)
            {
                return Ok(result); 
            }

            return BadRequest(); 
        }
    }
}
