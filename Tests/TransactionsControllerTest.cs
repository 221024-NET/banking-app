
namespace Tests;

public class TransactionsControllerTest : IDisposable
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

    //* Tests here oh boy, long list of TODO's before tomorrow, here goes

    //TODO: Test GetTransactions() endpoint

    //TODO: Test GetTransactions(id) endpoint with good param

    //TODO: Test GetTransactions(id) endpoint with bad param

    //TODO: Test PostTransaction(transaction) endpoint

    //TODO: Test GetTransactionsAll(id) endpoint

    //TODO: Test GetTransactionsTo(id) endpoint

    //TODO: Test GetTransactionsFrom(id) endpoint
}