using app_backend.Controllers;
using app_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.Mime;
using Xunit.Abstractions;
using Xunit.Sdk;

namespace Tests
{
    public class AccountsControllerTest : IDisposable
    {
        private DbContextOptions<BankingContext> dbcOptions = new DbContextOptionsBuilder<BankingContext>()
            .UseInMemoryDatabase(databaseName: "BankingDB").Options;
        private BankingContext _bankcontext;
        private readonly ITestOutputHelper _output;

        //Setup
        public AccountsControllerTest(ITestOutputHelper output) {
            //I just have this outputhelper here for seeing console output and checking stuff
            _output = output;
            Initialize();
        }

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

        //Tear down
        public void Dispose()
        {
            //dispose the context so the next tests can Initialize properly
            //ok, if I get the list I can use that to remove the stuff in the context 
            //clearly the tests are entering Dispose, so this should work if I save the changes after
            var removelist = new AccountsController(_bankcontext).GetAccount().Result.Value;
            _bankcontext.RemoveRange(removelist);
            _bankcontext.SaveChanges();
        }

        //4 accounts in the mock database. I want to make sure it returns a List
        [Fact]
        public void GetAllAccountsReturnsNonEmptyList()
        {
            //ARRANGE
            var controller = new AccountsController(_bankcontext);

            //ACT
            var result_async = controller.GetAccount();
            var result = result_async.Result.Value;

            //ASSERT
            //result should be a list of Accounts
            Assert.IsType<List<Account>>(result);
            //result should not be null
            Assert.NotNull(result);
            //all accounts should have at least 0 balance
            Assert.All<Account>(result, a => Assert.True(a.Balance>=0));
        }

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

        //now to make sure if the Account ID isn't in the DB, it returns NotFound()
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
    }
}