using System.Threading.Tasks;
using Assignment.Entities.User;

namespace Assignment.Services
{
    public class UserService : IUserService
    {
        public Task<User> Authenticate(LoginView user)
        {
            var userInfo = new User { Id = 1, Name = "Shahzada Ghazanfar", Email = "ghazanfarseyal@gmail.com" };
            return Task.FromResult(userInfo);
        }
    }
}
