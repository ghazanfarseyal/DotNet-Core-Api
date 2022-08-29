using Assignment.Entities;
using System.Threading.Tasks;

namespace Assignment.Services
{
    public interface IPaymentService
    {
        Task<TransactionRequest> Encrypt(TransactionRequest req);
        Task<TransactionResponse> Process(TransactionRequest req);
    }
}
