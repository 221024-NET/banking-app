using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace app_backend.Models
{
    public class DbContextFactory : IDesignTimeDbContextFactory<BankingContext>
    {
        public BankingContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<BankingContext>();
            optionsBuilder.UseSqlServer("Server=tcp:rev-training.database.windows.net,1433;Initial Catalog=BankingDB;Persist Security Info=False;User ID=BRenni;Password=Password123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

            return new BankingContext(optionsBuilder.Options);
        }
    }
}

/*public class DbContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
{
        public ApplicationDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = builder.Configuration.GetValue<string>("ConnectionStrings:bankingDB");

            return new ApplicationDbContext(optionsBuilder.Options);
        }
}*/
