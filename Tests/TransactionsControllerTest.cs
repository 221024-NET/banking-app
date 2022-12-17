
namespace Tests;

public class TransactionsControllerTest : IClassFixture<BankingDBFixture>{
    private readonly BankingContext _bankcontext;
    private readonly ITestOutputHelper _output;

    //* Setup
    public TransactionsControllerTest(ITestOutputHelper output, BankingDBFixture fixture) {
        _output = output;
        _bankcontext = fixture.Context;
    }

    //* Test GetTransactions() endpoint for a nonempty List
    [Fact]
    public void GetTransactionsReturnsList(){
        //* ARRANGE
        var controller = new TransactionsController(_bankcontext);

        //* ACT
        var getresult = controller.GetTransactions().Result.Value;
        foreach(Transactions t in getresult){
            _output.WriteLine($"Ref: {t.ref_id} Src: {t.src_acct} Dst: {t.dst_acct} Status: {t.status} Amount: ${t.amount}");
        }

        //* ASSERT
        Assert.IsType<List<Transactions>>(getresult);
        Assert.NotNull(getresult);
        Assert.NotEmpty(getresult);
    }

    //* Test GetTransactions(id) endpoint with good param
    [Theory]
    [InlineData(1)]
    [InlineData(2)]
    [InlineData(3)]
    [InlineData(4)]
    [InlineData(5)]
    public void GetTransactionsReturnsTransaction(int refid){
        //* ARRANGE
        var controller = new TransactionsController(_bankcontext);

        //* ACT
        var getresult = controller.GetTransactions(refid).Result.Value;
        _output.WriteLine($"Ref: {getresult.ref_id} Src: {getresult.src_acct} Dst: {getresult.dst_acct} Status: {getresult.status} Amount: ${getresult.amount}");

        //* ASSERT
        Assert.IsType<Transactions>(getresult);
        Assert.NotNull(getresult);
    }

    //* Test GetTransactions(id) endpoint with bad param
    [Fact]
    public void GetTransactionsReturnsNothing(){
        //* ARRANGE
        var controller = new TransactionsController(_bankcontext);
        int refid = 6;

        //* ACT
        var getresult = controller.GetTransactions(refid);
        _output.WriteLine($"Getting Transaction #{refid} gave result: {getresult}");

        //* ASSERT
        /*
        ! GetTransactions should be returning NoContentResult if none found, but instead returns an object 
        ! Asserting null should give the same intended result
        */
        Assert.Null(getresult.Result.Value);
    }

    //* Test PostTransaction(transaction) endpoint
    [Fact]
    public void PostTransactionCreatesTransaction() {
        //* ARRANGE
        var controller = new TransactionsController(_bankcontext);
        var tempT = new Transactions{ref_id = 0, src_acct = 4, dst_acct = 6, status = "approved", amount = 100};

        //* ACT
        var postresult = controller.PostTransaction(tempT);
        _output.WriteLine($"Transaction posted, endpoint returned: {postresult.Result}");
        var getallresult = controller.GetTransactions().Result.Value;
        //just check in the console that the transaction was added
        //added Transaction should have a Ref_ID of 6
        foreach (Transactions t in getallresult){
            _output.WriteLine($"Ref: {t.ref_id} Src: {t.src_acct} Dst: {t.dst_acct} Status: {t.status} Amount: ${t.amount}");
        }

        //* ASSERT
        /*
        ! Accounts POST returned a CreatedAtActionResult, but Transactions returns a NoContentResult
        */
        Assert.IsType<Microsoft.AspNetCore.Mvc.NoContentResult>(postresult.Result);
    }

    //* Test GetTransactionsAll(id) endpoint with a valid account id
    [Theory]
    [InlineData(2)]
    [InlineData(3)]
    [InlineData(4)]
    [InlineData(5)]
    public void GetTransactionsAllWithValidID(int acctid){
        //* ARRANGE
        var controller = new TransactionsController(_bankcontext);

        //* ACT
        var getresult = controller.GetTransactionsAll(acctid).Result;
        //getresult is a Task<IEnumerable>, so the returned array is behind Task.Result
        _output.WriteLine($"Returned with a {getresult.GetType()} involving Acct #{acctid}");
        //! just check in the test console that this all matches up
        foreach (Transactions t in getresult) {
            _output.WriteLine($"Ref: {t.ref_id} Src: {t.src_acct} Dst: {t.dst_acct} Status: {t.status} Amount: ${t.amount}");
        }

        //* ASSERT
        Assert.IsType<Transactions[]>(getresult);
        Assert.NotEmpty(getresult);
    }

    //* Test GetTransactionsAll(id) endpoint with a valid account id with no transactions, and invalid id's
    [Theory]
    [InlineData(1)] //invalid account
    [InlineData(6)] //account with no transactions
    public void GetTransactionsAllWithNoTransactions(int acctid){
        //* ARRANGE
        var controller = new TransactionsController(_bankcontext);

        //* ACT
        var getresult = controller.GetTransactionsAll(acctid).Result;
        _output.WriteLine($"Controller returned an array for Acct #{acctid}");

        //* ASSERT
        Assert.Empty(getresult);
    }

    //* Test GetTransactionsTo(id) endpoint
    [Theory]
    [InlineData(2)]
    [InlineData(3)]
    [InlineData(4)]
    public void GetTransactionsToWithValidDsts(int acctid) {
        //* ARRANGE
        var controller = new TransactionsController(_bankcontext);

        //* ACT
        var getresult = controller.GetTransactionsTo(acctid).Result;
        _output.WriteLine($"Retrieved array of transactions sent to Acct #{acctid}");
        //! just check in the test console that this all matches up
        foreach (Transactions t in getresult) {
            _output.WriteLine($"Ref: {t.ref_id} Src: {t.src_acct} Dst: {t.dst_acct} Status: {t.status} Amount: ${t.amount}");
        }

        //* ASSERT
        Assert.NotEmpty(getresult);
        Assert.IsType<Transactions[]>(getresult);
    }

    //* Test GetTransactionsTo(id) endpoint to get empty arrays
    [Theory]
    [InlineData(1)]
    [InlineData(5)]
    public void GetTransactionsToReturnsEmptyArray(int acctid){
        //* ARRANCE
        var controller = new TransactionsController(_bankcontext);

        //* ACT
        var getresult = controller.GetTransactionsTo(acctid).Result;
        _output.WriteLine($"Retrieved array of transactions sent to Acct #{acctid}");
        //! just check in the test console that this all matches up
        foreach (Transactions t in getresult) {
            _output.WriteLine($"Ref: {t.ref_id} Src: {t.src_acct} Dst: {t.dst_acct} Status: {t.status} Amount: ${t.amount}");
        }

        //* ASSERT
        Assert.IsType<Transactions[]>(getresult);
        Assert.Empty(getresult);
    }

    //* Test GetTransactionsFrom(id) endpoint
    [Theory]
    [InlineData(2)]
    [InlineData(3)]
    [InlineData(5)]
    public void GetTransactionsFromWithValidSrcs(int acctid) {
        //* ARRANGE
        var controller = new TransactionsController(_bankcontext);

        //* ACT
        var getresult = controller.GetTransactionsFrom(acctid).Result;
        _output.WriteLine($"Retrieved array of transactions sent from Acct #{acctid}");
        //! just check in the test console that this all matches up
        foreach (Transactions t in getresult) {
            _output.WriteLine($"Ref: {t.ref_id} Src: {t.src_acct} Dst: {t.dst_acct} Status: {t.status} Amount: ${t.amount}");
        }

        //* ASSERT
        Assert.NotEmpty(getresult);
        Assert.IsType<Transactions[]>(getresult);
    }

    //* Test GetTransactionsTo(id) endpoint to get empty arrays
    [Theory]
    [InlineData(1)]
    [InlineData(4)]
    public void GetTransactionsFromReturnsEmptyArray(int acctid){
        //* ARRANCE
        var controller = new TransactionsController(_bankcontext);

        //* ACT
        var getresult = controller.GetTransactionsFrom(acctid).Result;
        _output.WriteLine($"Retrieved array of transactions sent from Acct #{acctid}");
        //! just check in the test console that this all matches up
        foreach (Transactions t in getresult) {
            _output.WriteLine($"Ref: {t.ref_id} Src: {t.src_acct} Dst: {t.dst_acct} Status: {t.status} Amount: ${t.amount}");
        }

        //* ASSERT
        Assert.IsType<Transactions[]>(getresult);
        Assert.Empty(getresult);
    }

    //TODO: Test PutTransaction(id, transaction) endpoint with valid id & transaction

    //TODO: Test PutTransaction(id, transaction) endpoint with invalid id

    //TODO: Test PutTransaction(id, transaction) endpoint with invalid transaction

}