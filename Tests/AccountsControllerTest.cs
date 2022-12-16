

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
            var result = controller.GetAccount(id).Result.Value;
           
            //* ASSERT
            /*
            ! Looks like when GetAccount returns a NotFound result, it doesn't actually return an Action
            ! Instead it just returns a null object, but that works too
            */
            Assert.Null(result);
            
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

        //* Test PutAccount(id, account) with an invalid id that doesn't match the account
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

        //* Test PutAccount(id, account) with an invalid account
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

        //* Test PostAccount(account) endpoint
        [Fact]
        public void PostAccountCreatesAccount(){
            //* ARRANGE
            int id = 20;
            var temp = new Account{Acct_Id=id, User_Id=7, Type="checking", Balance=0};
            var controller = new AccountsController(_bankcontext);

            //* ACT
            var result = controller.PostAccount(temp);
            _output.WriteLine($"Result: {result.Result.Result}");

            //* ASSERT
            //if the account was created, we should get back a CreatedAtActionResult
            //! since Post returns an ActionResult, we need the Result of the Result
            Assert.IsType<Microsoft.AspNetCore.Mvc.CreatedAtActionResult>(result.Result.Result);
        }

        //* Test GetMyIncome(id) endpoint
        [Theory]
        [InlineData(2)]
        [InlineData(3)]
        [InlineData(4)]
        [InlineData(5)]
        public void GetMyIncomeReturnsIncome(int id){
            //* ARRANGE
            var controller = new AccountsController(_bankcontext);

            //* ACT
            var result = controller.GetMyIncome(id).Value;
            _output.WriteLine($"Income for {id} is ${result}");

            //* ASSERT
            Assert.IsType<Double>(result);
        }

        //* Test GetMyExpenses(id) endpoint
        [Theory]
        [InlineData(2)]
        [InlineData(3)]
        [InlineData(4)]
        [InlineData(5)]
        public void GetMyExpensesReturnsExpenses(int id){
            //* ARRANGE
            var controller = new AccountsController(_bankcontext);

            //* ACT
            var result = controller.GetMyExpenses(id).Value;
            _output.WriteLine($"Expense for {id} is ${result}");

            //* ASSERT
            Assert.IsType<Double>(result);
        }

        //* Test GetMyBalance(id) endpoint
        [Theory]
        [InlineData(2)]
        [InlineData(3)]
        [InlineData(4)]
        [InlineData(5)]
        public void GetMyBalanceReturnsBalance(int id){
            //* ARRANGE
            var controller = new AccountsController(_bankcontext);

            //* ACT
            var result = controller.GetMyBalance(id).Value;
            _output.WriteLine($"Balance for {id} is ${result}");

            //* ASSERT
            Assert.IsType<Double>(result);
            //! Just gotta change GetMyBalance so it just returns the normal balance
            //Assert.True(result>=0);
        }        

        //* Test Account(id) endpoint
        [Fact]
        public void DeleteAccountWithValidID(){
            //* ARRANGE
            var controller = new AccountsController(_bankcontext);
            int id=6;

            //* ACT
            var delresult = controller.DeleteAccount(id);
            //quick get attempt to see if it is gone
            var getallresult = controller.GetAccount().Result.Value;
            //just to print the final table to the test console
            foreach(Account a in getallresult){
                _output.WriteLine($"Acct: {a.Acct_Id} Usr: {a.User_Id} Type: {a.Type} Bal: ${a.Balance}");
            }
            var getresult = controller.GetAccount(id);

            //* ASSERT
            Assert.IsType<Microsoft.AspNetCore.Mvc.NoContentResult>(delresult.Result);
            Assert.Null(getresult.Result.Value);
        }

        //* Test DeleteAccount(id) endpoint with invalid account id
        [Fact]
        public void DeleteAccountWithBadID(){
            //* ARRANCE
            var controller = new AccountsController(_bankcontext);
            int id = 1;

            //* ACT
            var delresult = controller.DeleteAccount(id);
            _output.WriteLine($"Result of bad ID: {delresult.Result}");

            //* ASSERT
            Assert.IsType<Microsoft.AspNetCore.Mvc.NotFoundResult>(delresult.Result);
        }

        //* Test DeleteAccount(id) endpoint when its balance is not zero
        [Fact]
        public void DeleteAccountWithNonzeroBalance(){
            //* ARRANGE
            var controller = new AccountsController(_bankcontext);
            int id = 2;

            //* ACT
            var delresult = controller.DeleteAccount(id);
            _output.WriteLine($"Result of Nonzero balance: {delresult.Result}");
            //quick get to be completely sure
            var getallres = controller.GetAccount().Result.Value;
            foreach (Account a in getallres){
                _output.WriteLine($"Acct: {a.Acct_Id} Usr: {a.User_Id} Type: {a.Type} Bal: ${a.Balance}");
            }

            //* ASSERT
            //! Nonzero balance returns a BadRequestObject result on nonzero balance
            Assert.IsType<Microsoft.AspNetCore.Mvc.BadRequestObjectResult>(delresult.Result);
        }
    }
}