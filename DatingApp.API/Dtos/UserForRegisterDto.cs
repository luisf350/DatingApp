using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        [StringLength(50, MinimumLength= 4, ErrorMessage="You must specify password betewwn 4 and 50 characters")]
        public string Password { get; set; }
    }
}