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