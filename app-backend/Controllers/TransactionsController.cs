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
    public class TransactionsController : ControllerBase
    {
        private readonly BankingContext _context;

        public TransactionsController(BankingContext context)
        {
            _context = context;
        }

        //GET: api/Transactions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transactions>>> GetTransactions()
        {
            return await _context.Transaction.ToListAsync();
        }

        //GET: api/Transactions/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Transactions>> GetTransactions(int id)
        {
            var transaction = await _context.Transaction.FindAsync(id);
            if (transaction == null)
            {
                return NoContent();
            }
            return transaction;
        }

        //POST: api/Transactions
        [HttpPost]
        public async Task<IActionResult> PostTransaction(Transactions transaction)
        {
            transaction.ref_id = 0;
            _context.Transaction.Add(transaction);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        //POST: api/Transactions
        //[HttpPost]
        //public async Task<IActionResult> PostTransaction(Account fromA, Account toA, double amount)
        //{
        //    Transactions transaction = new Transactions();
        //    transaction.ref_id = 0;
        //    transaction.src_acct = fromA.Acct_Id;
        //    transaction.dst_acct = toA.Acct_Id;
        //    transaction.status = "approved";
        //    transaction.amount = (decimal) amount;
        //    _context.Transaction.Add(transaction);
        //    await _context.SaveChangesAsync();
        //    return NoContent();
        //}

        //GET: api/Transactions/account/all/{id}, id is an ACCOUNT ID
        [HttpGet("account/all/{id}")]
        public async Task<IEnumerable<Transactions>> GetTransactionsAll(int id)
        {
            var transactions = _context.Transaction.Where(t => t.src_acct == id || t.dst_acct == id).ToArray();
            return transactions;
        }

        //GET: api/Transactions/account/to/{id}, id is an ACCOUNT ID
        [HttpGet("account/to/{id}")]
        public async Task<IEnumerable<Transactions>> GetTransactionsTo(int id)
        {
            var transactions = _context.Transaction.Where(t => t.dst_acct == id).ToArray();
            return transactions;
        }

        //GET: api/Transactions/account/from/{id}, id is an ACCOUNT ID
        [HttpGet("account/from/{id}")]
        public async Task<IEnumerable<Transactions>> GetTransactionsFrom(int id)
        {
            var transactions = _context.Transaction.Where(t => t.src_acct == id).ToArray();
            return transactions;
        }

        // PUT: api/Transactions/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTransaction(int id, Transactions transaction)
        {
            if (id != transaction.ref_id)
            {
                return BadRequest();
            }

            _context.Entry(transaction).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransactionExists(id))
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

        private bool TransactionExists(int id)
        {
            return _context.Transaction.Any(e => e.ref_id == id);
        }
    }
}
