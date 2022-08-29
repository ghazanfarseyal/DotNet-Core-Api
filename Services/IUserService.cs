using System.Threading.Tasks;
using Assignment.Entities.User;

namespace Assignment.Services
{
    public interface IUserService
    {
        Task<User> Authenticate(LoginView user);
    }
}
