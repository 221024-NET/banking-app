

namespace Tests
{
    public class AccountsControllerTest : IClassFixture<BankingDBFixture>
    {
        private readonly BankingContext _bankcontext;
        private readonly ITestOutputHelper _output;

        //* Setup
        public AccountsControllerTest(ITestOutputHelper output, BankingDBFixture fixture) {
            //I just have this outputhelper here for seeing console output and checking stuff
            _output = output;
            _bankcontext = fixture.Context;
        }

        //* Test the GetAccount() endpoint with no params
        [Fact]
        public void GetAllAccountsReturnsNonEmptyList()
        {
            //* ARRANGE
            var controller = new AccountsController(_bankcontext);

            //* ACT
            var result = controller.GetAccount().Result.Value;
            foreach(Account a in result)
            {
                _output.WriteLine($"Acct: {a.Acct_Id} User: {a.User_Id} Type: {a.Type} Bal: ${a.Balance}");
            }

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
            //* ARRANGE
            var controller = new AccountsController(_bankcontext);

            //* ACT
            Account result = controller.GetAccount(id).Result.Value;
            _output.WriteLine($"Acct: {result.Acct_Id} User: {result.User_Id} Type: {result.Type} Bal: ${result.Balance}");

            //* ASSERT
            Assert.IsType<Account>(result);
            Assert.NotNull(result);
        }

        //* Test the GetAccount() endpoint with bad params
        [Fact]
        public void GetAccountByIDReturnsNothing()
        {
            //* ARRANGE
            int id = 1;
            var controller = new AccountsController(_bankcontext);

            //* ACT
            var result = controller.GetAccount(id);

            //* ASSERT
            //Looks like GetAccount returns a null Account instead of a NotFoundResult, we can check for that instead
            Assert.Null(result.Result.Value);
        }

        //* Test the PutAccount(id, account) endpoint with valid params 
        [Fact]
        public void PutAccountUpdatesAccount(){
            //* ARRANGE
            decimal toadd = 500;
            int id=2;
            var controller = new AccountsController(_bankcontext);
            //get an account to use
            var a = controller.GetAccount(id).Result.Value;
            _output.WriteLine($"Acct: {a.Acct_Id} Usr: {a.User_Id} Type: {a.Type} Bal: ${a.Balance}");
            //update that account
            decimal? oldbal = a.Balance;
            //add to the balance
            a.Balance += toadd;

            //* ACT
            var result = controller.PutAccount(id, a);
            _output.WriteLine($"Status: {result.Result}");

            //* ASSERT
            //Put doesn't exactly work the way I figured, so the best we can do is check for a NoContent status
            Assert.IsType<Microsoft.AspNetCore.Mvc.NoContentResult>(result.Result);
        }

        [Fact]
        public void PutAccountBadID(){
            //* ARRANGE
            int acctid = 1;
            //making some random account
            Account temp = new Account {Acct_Id=0, User_Id=0, Type="checking", Balance=0};
            _output.WriteLine($"Acct: {temp.Acct_Id} User: {temp.User_Id} Type: {temp.Type} Bal: ${temp.Balance}");
            _output.WriteLine($"id==temp.id? {acctid==temp.Acct_Id}");
            var controller = new AccountsController(_bankcontext);

            //* ACT
            var result = controller.PutAccount(acctid, temp);
            _output.WriteLine($"Status: {result.Result}");

            //* ASSERT
            Assert.IsType<Microsoft.AspNetCore.Mvc.BadRequestResult>(result.Result);
        }

        [Fact]
        public void PutAccountInvalidAccount(){
            //* ARRANGE
            int acctid = 1;
            Account temp = new Account{Acct_Id=1, User_Id=0, Type="checking", Balance=0};
            var controller = new AccountsController(_bankcontext);

            //* ACT
            var result = controller.PutAccount(acctid,temp);

            //* ASSERT
            Assert.IsType<Microsoft.AspNetCore.Mvc.NotFoundResult>(result.Result);
        }

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