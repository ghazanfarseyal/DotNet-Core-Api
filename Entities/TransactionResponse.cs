using System;

namespace Assignment.Entities
{
    public class TransactionResponse
    {
        public string ResponseCode { get; set; }
        public string Message { get; set; }
        public string ApprovalCode { get; set; }
        public string DateTime { get; set; }
    }
}
