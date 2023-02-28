using Advanced_To_DoList.Business.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Advanced_To_DoList.Controllers.Areas.Admin
{

    [Area("Admin")]
    [Route("api/[Area]/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        IPersonService _personService;

        public PeopleController(IPersonService personService)
        {
            _personService = personService;
        }
        [HttpGet("Get-All-People")]

        public async Task<IActionResult> GetAllPeople()
        {
            var people = await _personService.GetListAsync();

            if (people != null)
            {
                return Ok(people);
            }
            return BadRequest();
        }
    }
}
