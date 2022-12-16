namespace Tests;

public class UsersControllerTest : IDisposable
{
    private DbContextOptions<BankingContext> dbcOptions = new DbContextOptionsBuilder<BankingContext>()
            .UseInMemoryDatabase(databaseName: "BankingDB").Options;
    private BankingContext _bankcontext;
    private readonly ITestOutputHelper _output;

    //* Setup

    //* Initialize context

    //* Teardown
    public void Dispose()
    {
        throw new NotImplementedException();
    }

    //* Testing now

    //TODO: Test GetUsers() endpoint

    //TODO: Test GetUser(currentuser) endpoint with good input

    //TODO: Test GetUser(currentuser) endpoint with bad input

    //TODO: Test PutUser(id, user) endpoint with good input

    //TODO: Test PutUser(id, user) endpoint with bad id

    //TODO: Test PutUser(id, user) endpoint with bad id & user, but they match

    //TODO: Test PostUser(user) endpoint

    //TODO: Test DeleteUser(id) endpoint with valid id

    //TODO: Test DeleteUser(id) endpoint with invalid id

    //TODO: Test GetMyAccounts(id) endpoint with valid id and some accounts

    //TODO: Test GetMyAccounts(id) endpoint with valid id and no accounts

    //TODO: Test GetMyAccounts(id) endpoint with invalid id

    
}