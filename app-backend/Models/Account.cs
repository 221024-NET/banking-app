using System.ComponentModel.DataAnnotations;

namespace app_backend.Models
{
    public class Account
    {
        [Key]
        public int Acct_Id { get; set; }
        public int User_Id { get; set; }
        public string Type { get; set; } = null!;
        public decimal? Balance { get; set; }
    }
}
