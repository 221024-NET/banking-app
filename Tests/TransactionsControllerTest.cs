
namespace Tests;

public class TransactionsControllerTest : IClassFixture<BankingDBFixture>{
    private readonly BankingContext _bankcontext;
    private readonly ITestOutputHelper _output;

    //* Setup
    public TransactionsControllerTest(ITestOutputHelper output, BankingDBFixture fixture) {
        _output = output;
        _bankcontext = fixture.Context;
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