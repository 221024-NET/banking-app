using System.ComponentModel.DataAnnotations;

namespace app_backend.Models
{
    public class Account
    {
        [Key]
        public int AcctId { get; set; }
        public int UserId { get; set; }
        public string Type { get; set; } = null!;
        public decimal? Balance { get; set; }
    }
}
