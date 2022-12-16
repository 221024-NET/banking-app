namespace Tests;

public class UsersControllerTest : IClassFixture<BankingDBFixture>{
    private readonly BankingContext _bankcontext;
    private readonly ITestOutputHelper _output;

    //* Setup
    public UsersControllerTest(ITestOutputHelper output, BankingDBFixture fixture) {
        _output = output;
        _bankcontext = fixture.Context;
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