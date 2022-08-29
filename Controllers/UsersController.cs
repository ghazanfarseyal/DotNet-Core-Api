using Assignment.Services;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Assignment.Entities.User;
using Assignment.Infrastructure;
using Microsoft.AspNetCore.Authorization;

namespace Assignment.Controllers
{
    [Route("api/users")]
    [ApiController]
    [AllowAnonymous]
    public class UsersController : ControllerBase
    {
        public readonly IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(LoginView req)
        {
            var user = await _userService.Authenticate(req);
            var token = JwtHelper.GenerateToken(user);
            var response = new AuthenticateResponse(user, token);
            return Ok(response);
        }
    }
}
