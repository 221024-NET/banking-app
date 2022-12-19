using Microsoft.EntityFrameworkCore;
using System.Transactions;

namespace app_backend.Models
{
    public class BankingContext : DbContext
    {
        public BankingContext(DbContextOptions<BankingContext> options)
          : base(options)
        {

        }
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Account> Account { get; set; } = null!;
        public DbSet<Transactions> Transaction { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
            //!Use to direct the API to the schema P2 and whatever tablename
        {
            modelBuilder.Entity<User>(entity =>
            { entity.ToTable("User", "P2"); });

            modelBuilder.Entity<Account>(entity =>
            { entity.ToTable("Account", "P2"); });

            modelBuilder.Entity<Transactions>(entity =>
            { entity.ToTable("Transaction", "P2"); });
        }
       
    }
}
