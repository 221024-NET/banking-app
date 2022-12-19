using System.ComponentModel.DataAnnotations;

namespace app_backend.Models
{
    public class User
    {
        [Key]
        public int user_ID { get; set; }
        public string? email { get; set; }
        public string? first_name { get; set; }
        public string? last_name { get; set; }
        public string? address { get; set; }
        public string? password { get; set; }
    }
}
