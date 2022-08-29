namespace Assignment.Entities.User
{
    public class AuthenticateResponse : User
    {
        public string Token { get; set; }

        public AuthenticateResponse(User user, string token)
        {
            Id = user.Id;
            Name = user.Name;
            Email = user.Email;
            Token = token;
        }
    }
}
