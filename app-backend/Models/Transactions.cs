using System.ComponentModel.DataAnnotations;

namespace app_backend.Models
{
    public class Transactions
    {
        [Key]
        public int RefId { get; set; }
        public int SrcAcct { get; set; }
        public int DstAcct { get; set; }
        public string Status { get; set; } = null!;
        public decimal Amount { get; set; }
    }
}
