using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using app_backend.Models;
using System.Security.Principal;
using Microsoft.AspNetCore.Components.Web;

namespace app_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly BankingContext _context;

        public UsersController(BankingContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpPost("login")]
        public ActionResult<User> GetUser(User currentuser)
        {

            var response = _context.Users.Where(u => u.email == currentuser.email && u.password == currentuser.password).FirstOrDefault();
            if(response == null)
            {
                return BadRequest();
            }

            return response;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.user_ID)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("register")]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.user_ID }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //GET: api/Accounts/my-accounts/{id} where id is a user id, gets all their accounts and balances
        [HttpGet("my-accounts/{id}")]
        public ActionResult<IEnumerable<Account>> GetMyAccounts(int id)
        {
            var myAccounts = _context.Account.Where(a => a.User_Id == id).ToArray();
            for (int a = 0; a < myAccounts.Length; a++)
            {
                var incomeTransactions = _context.Transaction.Where(i => i.dst_acct == myAccounts[a].Acct_Id).ToArray();
                var totalIncome = 0.0;
                foreach (var transaction in incomeTransactions)
                {
                    totalIncome += (double)transaction.amount;
                }
                //Console.WriteLine("Total income for ID:{0} = {1}", myAccounts[a].Acct_Id, totalIncome);

                var expenseTransactions = _context.Transaction.Where(e => e.src_acct == myAccounts[a].Acct_Id).ToArray();
                var totalExpense = 0.0;
                foreach (var transaction in expenseTransactions)
                {
                    totalExpense += (double)transaction.amount;
                }
                //Console.WriteLine("Total expense for ID:{0} = {1}", myAccounts[a].Acct_Id, totalExpense);

                myAccounts[a].Balance = (decimal)(totalIncome - totalExpense);
                //Console.WriteLine("Total expense for ID:{0} = {1}", myAccounts[a].Acct_Id, myAccounts[a].Balance);
            }
            return myAccounts;
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.user_ID == id);
        }
    }
}
