namespace OnlinePayment.Models
{
    public class PaymentResponse
    {
        public string Status { get; set; }
        public string Description { get; set; }
        public string MerchantId { get; set; }
        public string OrderId { get; set; }
        public string TransId { get; set; }
        public string Amount { get; set; }
        public string Currency { get; set; }
        public int Installment { get; set; }
        public string Hash { get; set; }
    }
}
