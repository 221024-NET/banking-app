namespace Tests;

public class BankingDBFixture : IDisposable
{
    public BankingContext Context {get; set;}

    //* Before every test, the Test constructor will create a new instance of the DB Fixture to seed with values
    public BankingDBFixture(){
        var dbcOptions = new DbContextOptionsBuilder<BankingContext>()
            .UseInMemoryDatabase(databaseName: "BankingDB").Options;

        Context = new BankingContext(dbcOptions);

        //* Seed the mock database
        //Users
        Context.Add(new User{user_ID = 4, email = "test@test.com", first_name = "Test", last_name = "Test", address = "1234 Test Rd", password = "test1"});
        Context.Add(new User{user_ID = 6, email = "pisithsork@yahoo.com", first_name = "Pisith", last_name = "Sork", address = "1234 Street Rd.", password = "12345"});
        Context.Add(new User{user_ID = 7, email = "bob@gmail.com", first_name = "bob", last_name = "bob", address = "2456 bob ave", password = "bobbob"});

        //Accounts
        Context.Add(new Account { Acct_Id = 2, User_Id = 4, Type = "checking", Balance = 1000 });   
        Context.Add(new Account { Acct_Id = 3, User_Id = 4, Type = "savings", Balance = 200 });
        Context.Add(new Account { Acct_Id = 4, User_Id = 6, Type = "checking", Balance = 100 });
        Context.Add(new Account { Acct_Id = 5, User_Id = 6, Type = "savings", Balance = 0 });

        //Transactions
        Context.Add(new Transactions{ref_id = 1, src_acct = 5, dst_acct = 4, status = "string", amount = 500});
        Context.Add(new Transactions{ref_id = 2, src_acct = 5, dst_acct = 4, status = "string", amount = 500});
        Context.Add(new Transactions{ref_id = 3, src_acct = 5, dst_acct = 2, status = "approved", amount = 1000});
        Context.Add(new Transactions{ref_id = 4, src_acct = 2, dst_acct = 3, status = "approved", amount = 200});
        Context.Add(new Transactions{ref_id = 5, src_acct = 3, dst_acct = 4, status = "approved", amount = 100});

        //* Save the changes
        Context.SaveChanges();
    }

    //* This will run after every test
    public void Dispose()
    {
        var removeUsersList = new UsersController(Context).GetUsers().Result.Value;
        var removeAccsList = new AccountsController(Context).GetAccount().Result.Value;
        var removeTransactsList = new TransactionsController(Context).GetTransactions().Result.Value;

        Context.RemoveRange(removeUsersList);
        Context.RemoveRange(removeAccsList);
        Context.RemoveRange(removeTransactsList);

        Context.SaveChanges();
    }
}