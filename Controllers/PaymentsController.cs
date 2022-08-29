using Assignment.Entities;
using Assignment.Services;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Assignment.Controllers
{
    [Route("api/payments")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        public readonly IPaymentService _paymentService;
        public PaymentsController(IPaymentService paymentService)
        {
            _paymentService = paymentService;
        }

        [HttpPost("encrypt")]
        public async Task<ActionResult<TransactionResponse>> Encrypt([FromBody] TransactionRequest req)
        {
            var result = await _paymentService.Encrypt(req);
            return Ok(result);
        }

        [HttpPost("process")]
        public async Task<ActionResult<TransactionResponse>> Process([FromBody] TransactionRequest req)
        {
            var result = await _paymentService.Process(req);
            return Ok(result);
        }
    }
}
