using Microsoft.EntityFrameworkCore;
using System.Transactions;

namespace app_backend.Models
{
    public class BankingContext : DbContext
    {
        public BankingContext(DbContextOptions options)
          : base(options)
        {

        }
        public DbSet<User> user { get; set; } = null!;
        public DbSet<Account> account { get; set; } = null!;
        public DbSet<Transactions> transaction { get; set; } = null!;

    }
}
