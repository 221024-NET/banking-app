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
    public class AccountsController : ControllerBase
    {
        private readonly BankingContext _context;

        public AccountsController(BankingContext context)
        {
            _context = context;
        }

        // GET: api/Accounts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Account>>> GetAccount()
        {
            return await _context.Account.ToListAsync();
        }

        // GET: api/Accounts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Account>> GetAccount(int id)
        {
            var account = await _context.Account.FindAsync(id);

            if (account == null)
            {
                return NotFound();
            }

            account.Balance = (decimal) (getBalance(id));

            return account;
        }

        // PUT: api/Accounts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccount(int id, Account account)
        {
            if (id != account.Acct_Id)
            {
                return BadRequest();
            }

            _context.Entry(account).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountExists(id))
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

        // POST: api/Accounts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Account>> PostAccount(Account account)
        {
            account.Acct_Id = 0;

            _context.Account.Add(account);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAccount", new { id = account.Acct_Id }, account);
        }

        //GET: api/Accounts/my-income/{id}
        [HttpGet("my-income/{id}")]
        public ActionResult<double> GetMyIncome(int id)
        {
            return getIncome(id);
        }

        //GET: api/Accounts/my-espenses/{id}
        [HttpGet("my-expenses/{id}")]
        public ActionResult<double> GetMyExpenses(int id)
        {
            return getExpenses(id);
        }

        //GET: api/Accounts/my-balance/{id}
        [HttpGet("my-balance/{id}")]
        public ActionResult<double> GetMyBalance(int id)
        {
            return getBalance(id);
        }

        // DELETE: api/Accounts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccount(int id)
        {
            var account = await _context.Account.FindAsync(id);

            if (account == null)
            {
                return NotFound();
            }

            if (getBalance(id) > 0.00)
            {
                return BadRequest($"Cannot delete account. You still have ${getBalance(id)} in your account.");
            }

            _context.Account.Remove(account);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AccountExists(int id)
        {
            return _context.Account.Any(e => e.Acct_Id == id);
        }

        private double getIncome(int id)
        {
            var incomeTrans = _context.Transaction.Where(t => t.dst_acct == id).ToArray();
            var totalInc = 0.0;
            foreach (var t in incomeTrans)
            {
                if (t.status != "pending")
                {
                    totalInc += (double)t.amount;
                }
            }
            return totalInc;
        }

        private double getExpenses(int id)
        {
            var expensTrans = _context.Transaction.Where(t => t.src_acct == id).ToArray();
            var totalExp = 0.0;
            foreach (var t in expensTrans)
            {
                if (t.status != "pending")
                {
                    totalExp += (double)t.amount;
                }
            }
            return totalExp;
        }

        private double getBalance(int id)
        {
            return getIncome(id) - getExpenses(id);
        }
    }
}
