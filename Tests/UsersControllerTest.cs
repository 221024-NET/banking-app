namespace Tests;

public class UsersControllerTest : IClassFixture<BankingDBFixture>{
    private readonly BankingContext _bankcontext;
    private readonly ITestOutputHelper _output;

    //* Setup
    public UsersControllerTest(ITestOutputHelper output, BankingDBFixture fixture) {
        _output = output;
        _bankcontext = fixture.Context;
    }

    //* Test GetUsers() endpoint
    [Fact]
    public void GetUsersReturnsList(){
        //* ARRANGE
        var controller = new UsersController(_bankcontext);

        //* ACT
        var result = controller.GetUsers().Result.Value;
        //! Just checking the output in the test console
        foreach(User u in result){
            _output.WriteLine($"ID: {u.user_ID} Email: {u.email} Name: {u.first_name} {u.last_name} Address: {u.address} Password: {u.password}");
        }

        //* ASSERT
        Assert.IsType<List<User>>(result);
        Assert.NotNull(result);
        Assert.NotEmpty(result);
    }

    //* Test GetUser(currentuser) endpoint with good input
    [Theory]
    [InlineData("test@test.com", "test1")]
    [InlineData("pisithsork@yahoo.com", "12345")]
    [InlineData("bob@gmail.com", "bobbob")]
    public void GetUserReturnsUser(string email, string password){
        //* ARRANGE
        var controller = new UsersController(_bankcontext);
        var tempU = new User{email = email, password = password};

        //* ACT
        var getresult = controller.GetUser(tempU).Value;
        _output.WriteLine($"ID: {getresult.user_ID} Email: {getresult.email} Name: {getresult.first_name} {getresult.last_name} Address: {getresult.address} Password: {getresult.password}");

        //* ASSERT
        Assert.IsType<User>(getresult);
        Assert.NotNull(getresult);
    }

    //* Test GetUser(currentuser) endpoint with bad inputs
    [Theory]
    [InlineData("bob@gmail.net", "bobbob")]
    [InlineData("bob@gmail.com", "bobob")]
    public void GetUserReturnsNothing(string email, string password){
        //* ARRANGE
        var controller = new UsersController(_bankcontext);
        var tempU = new User{email = email, password = password};

        //* ACT
        var getresult = controller.GetUser(tempU);
        _output.WriteLine($"Get Returned: {getresult}");

        //* ASSERT
        Assert.Null(getresult.Value);
    }

    //* Test PutUser(id, user) endpoint with valid input
    [Fact]
    public void PutUserUpdatesUser(){
        //* ARRANGE
        var controller = new UsersController(_bankcontext);
        int userid = 4;
        string e = "test@test.com";
        string p = "test1";
        var tempU = controller.GetUser(new User{email=e, password=p}).Value;
        tempU.password = "newpass";

        //* ACT
        var putresult = controller.PutUser(userid, tempU);
        var u = controller.GetUser(tempU).Value;
        //! Just checking in the test console
        _output.WriteLine($"Put returned: {putresult.Result}");
        _output.WriteLine($"ID: {u.user_ID} Email: {u.email} Name: {u.first_name} {u.last_name} Address: {u.address} Password: {u.password}");

        //* ASSERT
        Assert.IsType<Microsoft.AspNetCore.Mvc.NoContentResult>(putresult.Result);
        Assert.True(u.password.Equals("newpass"));
    }

    //* Test PutUser(id, user) endpoint with bad id
    [Fact]
    public void PutUserWithInvalidID(){
        //* ARRANGE
        var controller = new UsersController(_bankcontext);
        int userid = 0;
        string e = "test@test.com";
        string p = "test1";
        var tempU = controller.GetUser(new User{email=e, password=p}).Value;

        //* ACT
        var putresult = controller.PutUser(userid, tempU).Result;

        //* ASSERT
        Assert.IsType<Microsoft.AspNetCore.Mvc.BadRequestResult>(putresult);
    }

    //* Test PutUser(id, user) endpoint with bad id & user, but they match
    [Fact]
    public void PutUserInvalidUser(){
        //* ARRANGE
        var controller = new UsersController(_bankcontext);
        int userid = 1;
        User tempU = new User {user_ID=userid, email="temp@user.net", password="temppass"};

        //* ACT
        var putresult = controller.PutUser(userid, tempU).Result;
        _output.WriteLine($"Put returned: {putresult}");

        //* ASSERT
        Assert.IsType<Microsoft.AspNetCore.Mvc.NotFoundResult>(putresult);
    }

    //* Test PostUser(user) endpoint
    [Fact]
    public void PostUserCreatesUser(){
        //* ARRANGE
        var controller = new UsersController(_bankcontext);
        string e = "post@mail.net";
        string p = "postpass";
        User u = new User{email=e, password=p, address="", first_name="", last_name=""};

        //* ACT
        var postresult = controller.PostUser(u).Result.Result;

        //* ASSERT
        Assert.IsType<Microsoft.AspNetCore.Mvc.CreatedAtActionResult>(postresult);
    }

    //* Test DeleteUser(id) endpoint with valid id
    [Theory]
    [InlineData(4)]
    [InlineData(6)]
    [InlineData(7)]
    public void DeleteUserTest(int id){
        //* ARRANGE
        var controller = new UsersController(_bankcontext);

        //* ACT
        var delresult = controller.DeleteUser(id).Result;

        //* ASSERT
        Assert.IsType<Microsoft.AspNetCore.Mvc.NoContentResult>(delresult);
    }

    //* Test DeleteUser(id) endpoint with invalid id
    [Fact]
    public void DeleteUserInvalidID(){
        //* ARRANGE
        var controller = new UsersController(_bankcontext);
        int id = 1;

        //* ACT
        var delresult = controller.DeleteUser(id).Result;

        //* ASSERT
        Assert.IsType<Microsoft.AspNetCore.Mvc.NotFoundResult>(delresult);
    }

    //* Test GetMyAccounts(id) endpoint with valid id and some accounts
    [Theory]
    [InlineData(4)]
    [InlineData(6)]
    [InlineData(7)]
    public void GetMyAccountsReturnsAccounts(int userid){
        //* ARRANGE
        var controller = new UsersController(_bankcontext);

        //* ACT
        var getresult = controller.GetMyAccounts(userid).Value;
        foreach (Account a in getresult){
            _output.WriteLine($"Acct: {a.Acct_Id} Usr: {a.User_Id} Type: {a.Type} Bal: ${a.Balance}");
        }

        //* ASSERT
        Assert.IsType<Account[]>(getresult);
        Assert.NotEmpty(getresult);
        Assert.NotNull(getresult);
    }

    //* Test GetMyAccounts(id) endpoint with invalid id, or valid id and no accounts
    [Theory]
    [InlineData(1)]
    [InlineData(8)]
    public void GetMyAccountsReturnsEmpty(int userid){
        //* ARRANGE
        var controller = new UsersController(_bankcontext);

        //* ACT
        var getresult = controller.GetMyAccounts(userid).Value;
        
        //* ASSERT
        Assert.Empty(getresult);
    }

    //TODO: I think there were some other endpoints added in here, will get to those soon as what's here is merged
}