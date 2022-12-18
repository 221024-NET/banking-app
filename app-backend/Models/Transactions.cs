using System.ComponentModel.DataAnnotations;

namespace app_backend.Models
{
    public class Transactions
    {
        [Key]
        public int ref_id { get; set; }
        public int? src_acct { get; set; }
        public int? dst_acct { get; set; }
        public string status { get; set; } = null!;
        public decimal amount { get; set; }
    }
}
