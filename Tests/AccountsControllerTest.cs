

namespace Tests
{
    public class AccountsControllerTest : IDisposable
    {
        private DbContextOptions<BankingContext> dbcOptions = new DbContextOptionsBuilder<BankingContext>()
            .UseInMemoryDatabase(databaseName: "BankingDB").Options;
        private BankingContext _bankcontext;
        private readonly ITestOutputHelper _output;

        //* Setup
        public AccountsControllerTest(ITestOutputHelper output) {
            //I just have this outputhelper here for seeing console output and checking stuff
            _output = output;
            Initialize();
        }

        //* Setup the mock context
        public void Initialize()
        {
            var context = new BankingContext(dbcOptions);
            
            context.Add(new Account { Acct_Id = 2, User_Id = 4, Type = "checking", Balance = 1000 });   
            context.Add(new Account { Acct_Id = 3, User_Id = 4, Type = "savings", Balance = 200 });
            context.Add(new Account { Acct_Id = 4, User_Id = 6, Type = "checking", Balance = 100 });
            context.Add(new Account { Acct_Id = 5, User_Id = 6, Type = "savings", Balance = 0 });
            
            //save the changes and initialize the table
            context.SaveChanges();
            _bankcontext = context;
        }

        //* Tear down
        public void Dispose()
        {
            //dispose the context so the next tests can Initialize properly
            //ok, if I get the list I can use that to remove the stuff in the context 
            //clearly the tests are entering Dispose, so this should work if I save the changes after
            var removelist = new AccountsController(_bankcontext).GetAccount().Result.Value;
            _bankcontext.RemoveRange(removelist);
            _bankcontext.SaveChanges();
        }

        //* Test the GetAccount() endpoint with no params
        [Fact]
        public void GetAllAccountsReturnsNonEmptyList()
        {
            //* ARRANGE
            var controller = new AccountsController(_bankcontext);

            //* ACT
            var result_async = controller.GetAccount();
            var result = result_async.Result.Value;

            //* ASSERT
            //result should be a list of Accounts
            Assert.IsType<List<Account>>(result);
            //result should not be null
            Assert.NotNull(result);
            //all accounts should have at least 0 balance
            Assert.All<Account>(result, a => Assert.True(a.Balance>=0));
        }

        //* Test the GetAccount() endpoint with an id
        [Theory]
        [InlineData(2)]
        [InlineData(3)]
        [InlineData(4)]
        [InlineData(5)] 
        public void GetAccountByIDReturnsAccount(int id)
        {
            //ARRANGE
            
            var controller = new AccountsController(_bankcontext);

            //ACT
            var result_async = controller.GetAccount(id);
            var result = result_async.Result.Value;

            //ASSERT
            Assert.IsType<Account>(result);
            Assert.NotNull(result);
        }

        //* Test the GetAccount() endpoint with bad params
        [Theory]
        [InlineData(0)]
        [InlineData(1)]
        [InlineData(6)]
        [InlineData(7)]
        public void GetAccountByIDReturnsNothing(int id)
        {
            //ARRANGE
            var controller = new AccountsController(_bankcontext);

            //ACT
            var result_async = controller.GetAccount(id);
            var result = result_async.Result.Value;

            //ASSERT
            Assert.IsNotType<Account>(result);
            Assert.Null(result);
        }

        //TODO: Test PutAccount(id, account) endpoint with valid id & account

        //TODO: Test PutAccount(id, account) endpoint with invalid id

        //TODO: Test PutAccount(id, account) endpoint with valid id & invalid account

        //TODO: Test PostAccount(account) endpoint

        //TODO: Test GetMyIncome(id) endpoint with valid account id

        //TODO: Test GetMyIncome(id) endpoint with invalid account id

        //TODO: Test GetMyExpenses(id) endpoint with valid account id

        //TODO: Test GetMyExpenses(id) endpoint with invalid account id

        //TODO: Test GetMyBalance(id) endpoint

        //TODO: Test DeleteAccount(id) endpoint with valid account id

        //TODO: Test DeleteAccount(id) endpoint with invalid account id
    }
}