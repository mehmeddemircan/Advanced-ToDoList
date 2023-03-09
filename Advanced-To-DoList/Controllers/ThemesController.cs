using Advanced_To_DoList.Business.Abstract;
using Advanced_ToDoList.Entities.Dtos.Theme;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Advanced_To_DoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ThemesController : ControllerBase
    {
        IThemeService _themeService;

        public ThemesController(IThemeService themeService)
        {
            _themeService = themeService;
        }


        [HttpGet("Get-All-Theme")]

        public async Task<IActionResult> GetAllTheme ()
        {
            var result = await _themeService.GetListAsync();
            if (result != null)
            {
                return Ok(result); 
            }

            return BadRequest();
        }


        [HttpPost("Add-Theme")]

        public async Task<IActionResult> AddTheme(ThemeAddDto themeAddDto)
        {
            var result = await _themeService.AddAsync(themeAddDto);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();
        }


        
    }
}
