using System;
using System.Threading.Tasks;
using API.Dtos;
using API.Filters;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    public class EmailController : BaseApiController
    {
        private readonly IEmailSender _emailSender;
        private readonly ILogger _logger;

        public EmailController(IEmailSender emailSender, ILogger<EmailController> logger)
        {
            _emailSender = emailSender;
            _logger = logger;
        }

        [ServiceFilter(typeof(HoneypotServiceFilter))]
        [HttpPost("send")]
        public async Task<IActionResult> SendEmail([FromBody] ContactFormDto contactForm)
        {
            _logger.LogInformation("Email sent successfully at {Time}", DateTime.UtcNow);
            await _emailSender.SendEmailAsync(
                contactForm.Name, 
                contactForm.Email, 
                contactForm.Phone,
                contactForm.Message);
            return Ok();
        }
    }
}