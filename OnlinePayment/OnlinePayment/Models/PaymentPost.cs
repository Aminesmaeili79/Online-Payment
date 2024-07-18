using static System.Runtime.InteropServices.JavaScript.JSType;

namespace OnlinePayment.Models
{
    public class PaymentPost
    {
        public string MerchantId { get; set; }
        public string OrderId { get; set; }
        public string Currency { get; set; }
        public decimal Amount { get; set; }
        public int Installment { get; set; }
        public string UrlOk { get; set; }
        public string UrlFail { get; set; }
        public string CardName { get; set; }
        public string CardNo { get; set; }
        public string CardCvv { get; set; }
        public string CardExpireMonth { get; set; }
        public string CardExpireYear { get; set; }
        public string CardType { get; set; }
        public string UserIp { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string UserPhone { get; set; }
        public string UserAddress { get; set; }
        public string UserLang { get; set; }
        public string Description { get; set; }
        public string Hash { get; set; }
    }
}
