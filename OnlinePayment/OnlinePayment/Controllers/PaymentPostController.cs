using Microsoft.AspNetCore.Mvc;
using OnlinePayment.Models;

namespace OnlinePayment.Controllers
{
    public class PaymentPostController : Controller
    {
        public IActionResult Index()
        {
            PaymentPost paymentPost = new PaymentPost
            {
                MerchantId = "123456",
                OrderId = "123456",
                Currency = "TRY",
                Amount = 100.0m,
                Installment = 1,
                UrlOk = "https://www.example.com/ok",
                UrlFail = "https://www.example.com/fail",
                CardName = "John Doe",
                CardNo = "1234567890123456",
                CardCvv = "123",
                CardExpireMonth = "12",
                CardExpireYear = "2023",
                CardType = "Visa",
                UserIp = "77.87.98.34",
                UserName = "John Doe",
                UserEmail = "johndoe@gmail.com",
                UserPhone = "905551234567",
                UserAddress = "John Doe Street",
                UserLang = "TR",
                Description = "Payment Description",
                Hash = "1234567890"
            };

            return View(paymentPost);
        }
    }
}
