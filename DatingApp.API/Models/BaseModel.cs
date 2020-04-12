using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DatingApp.API.Models
{
    public class BaseModel
    {
        [Key]
        [Column(Order = 0)]
        public int Id { get; set; }
    }
}