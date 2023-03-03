using Advanced_To_DoList.Business.Abstract;
using Advanced_ToDoList.Entities.Dtos.Step;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Advanced_To_DoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StepsController : ControllerBase
    {
        IStepService _stepService; 
        public StepsController(IStepService stepService)
        {
            _stepService = stepService;
        }


        [HttpGet("Missions/{missionId}/All-Step")]

        public async Task<IActionResult> GetAllSteps(int missionId)
        {
            var result = await _stepService.GetListAsync(x => x.MissionId == missionId);

            if (result != null)
            {
                return Ok(result);

            }
            return BadRequest(); 
        }

        [HttpPost("Add-Step")]

        public async Task<IActionResult> AddStep(StepAddDto stepAddDto)
        {
            var result = await _stepService.AddAsync(stepAddDto);

            if (result != null)
            {
                return Ok(result); 
            }
            return BadRequest();  
        }

        [HttpDelete("{stepId}/Delete")]

        public async Task<IActionResult> DeleteStep(int stepId)
        {
            var result = await _stepService.DeleteAsync(stepId);

            if (result.Success)
            {
                return Ok(result.Message); 
            }

            return BadRequest(); 
        }

        [HttpPut("Update-Step")]

        public async Task<IActionResult> UpdateStep(StepUpdateDto stepUpdateDto)
        {
            var result = await _stepService.UpdateAsync(stepUpdateDto);
            if (result != null)
            {
                return Ok(result); 
            }

            return BadRequest(); 
        }

    }
}
