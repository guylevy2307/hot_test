using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace movieApi.Controllers
{
    [ApiController]
    [Route("api/movies")]
    public class MoviesController : ControllerBase
    {
        private readonly BL _businessLogic;

        public MoviesController(BL businessLogic)
        {
            _businessLogic = businessLogic;
        }
        [HttpGet]
        public async Task<IActionResult> GetMovies()
        {
            var movies = await _businessLogic.GetMoviesAsync();
            return Ok(movies);
        }
    }
}
