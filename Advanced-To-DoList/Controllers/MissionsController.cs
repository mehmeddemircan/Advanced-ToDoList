using Advanced_To_DoList.Business.Abstract;
using Advanced_ToDoList.Entities.Dtos.Mission;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Advanced_To_DoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MissionsController : ControllerBase
    {

        IMissionService _missionService; 
        public MissionsController(IMissionService missionService)
        {
            _missionService = missionService;
        }


        [HttpGet("/Group/{groupId}/All-Mission")]

        public async Task<IActionResult> GetAllMission(int groupId)
        {
            var result = await _missionService.GetListAsync(x => x.GroupId == groupId);

            if (result != null)
            {
                return Ok(result.Data); 
            }
            return BadRequest();
        }

        [HttpPost("Add-Mission")]

        public async Task<IActionResult> AddMission(MissionAddDto missionAddDto)
        {
            var result = await _missionService.AddAsync(missionAddDto);

            if (result != null)
            {
                return Ok(result); 
            }
            return BadRequest(); 
        }

        [HttpGet("Group/{groupId}/Missions/{missionId}")]

         public async Task<IActionResult> GetMissionDetail(int groupId,int missionId)
        {
            var result = await _missionService.GetAsync(x => x.GroupId == groupId && x.Id == missionId);

            if (result != null)
            {
                return Ok(result); 
            }

            return BadRequest(); 
        }

        [HttpDelete("Missions/{missionId}/Delete")]

        public async Task<IActionResult> DeleteMission(int missionId)
        {
            var result = await _missionService.DeleteAsync(missionId);

            if (result.Success)
            {
                return Ok(result.Message); 
            }

            return BadRequest();
        }


        [HttpPut("Missions/Update")]

        public async Task<IActionResult> UpdateMission(MissionUpdateDto missionUpdateDto)
        {
            var result = await _missionService.UpdateAsync(missionUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest(); 
        }

        [HttpGet("Groups/{groupId}/Completed")]

        public async Task<IActionResult> GetCompletedMissions(int groupId)
        {
            var result = await _missionService.GetListAsync(x =>x.GroupId == groupId && x.IsCompleted == true);
            if (result != null)
            {
                return Ok(result.Data);
            }

            return BadRequest();
        }

        [HttpGet("Groups/{groupId}/UnCompleted")]

        public async Task<IActionResult> GetUnCompletedMissions(int groupId)
        {
            var result = await _missionService.GetListAsync(x => x.GroupId == groupId && x.IsCompleted == false);
            if (result != null)
            {
                return Ok(result.Data); 
            }
            return BadRequest();
        }

    }
}
