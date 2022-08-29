using Assignment.Entities;
using System.Threading.Tasks;
using Assignment.Cryptography;

namespace Assignment.Services
{
    public class PaymentService : IPaymentService
    {
        public async Task<TransactionRequest> Encrypt(TransactionRequest req)
        {
            var result = new TransactionRequest();
            result.Key = Encryption.Key();
            result.ProcessingCode = Encryption.Encrypt(req.ProcessingCode, result.Key);
            result.SystemTraceNr = Encryption.Encrypt(req.SystemTraceNr, result.Key);
            result.FunctionCode = Encryption.Encrypt(req.FunctionCode, result.Key);
            result.CardNo = Encryption.Encrypt(req.CardNo, result.Key);
            result.CardHolder = Encryption.Encrypt(req.CardHolder, result.Key);
            result.AmountTrxn = Encryption.Encrypt(req.AmountTrxn, result.Key);
            result.CurrencyCode = Encryption.Encrypt(req.CurrencyCode, result.Key);
            return result;
        }

        public async Task<TransactionResponse> Process(TransactionRequest req)
        {
            var trans = new TransactionRequest();
            trans.ProcessingCode = Encryption.Decrypt(req.ProcessingCode, req.Key);
            trans.SystemTraceNr = Encryption.Decrypt(req.SystemTraceNr, req.Key);
            trans.FunctionCode = Encryption.Decrypt(req.FunctionCode, req.Key);
            trans.CardNo = Encryption.Decrypt(req.CardNo, req.Key);
            trans.CardHolder = Encryption.Decrypt(req.CardHolder, req.Key);
            trans.AmountTrxn = Encryption.Decrypt(req.AmountTrxn, req.Key);
            trans.CurrencyCode = Encryption.Decrypt(req.CurrencyCode, req.Key);

            var resp = new TransactionResponse
            {
                ResponseCode = "00",
                Message = "Success",
                ApprovalCode = req.Key,
                DateTime = "202102261200"
            };
            return resp;
        }
    }
}
