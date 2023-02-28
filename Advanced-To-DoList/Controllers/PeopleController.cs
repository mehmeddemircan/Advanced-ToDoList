using Advanced_To_DoList.Business.Abstract;
using Advanced_ToDoList.Entities.Dtos.Person;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Advanced_To_DoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        IPersonService _personService; 
        public PeopleController(IPersonService personService)
        {
            _personService = personService; 
        }

        [HttpPost("Add-Person")]

        public async Task<IActionResult> AddPerson(PersonAddDto personAddDto)
        {
            var result = await _personService.AddAsync(personAddDto);
            if (result != null)
            {
                return Ok(result); 
            }
            return BadRequest(); 
        }


        [HttpGet("User/{userId}/Get-All-People")]

        public async Task<IActionResult> GetAllPeopleByUserId(int userId)
        {
            var people = await _personService.GetListAsync(x => x.UserId == userId);

            return Ok(people);
        }

        [HttpGet("User/{userId}Person/{personId}")]

        public async Task<IActionResult> GetSinglePerson(int userId, int personId)
        {
            var result = await _personService.GetAsync(x => x.Id == personId && x.UserId == userId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }

        [HttpDelete("Delete-Person")]

        public async Task<IActionResult> DeletePerson(int personId)
        {
            var result = await _personService.DeleteAsync(personId);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest();
        }

        [HttpPut("Update-Person")]

        public async Task<IActionResult> UpdatePerson(PersonUpdateDto personUpdateDto)
        {
            var result = await _personService.UpdateAsync(personUpdateDto);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }
    }
}
