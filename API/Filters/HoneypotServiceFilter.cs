using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using API.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;

namespace API.Filters
{
    public class HoneypotServiceFilter : IActionFilter
    {
        private readonly ILogger<HoneypotServiceFilter> _logger;
        
        public HoneypotServiceFilter(ILogger<HoneypotServiceFilter> logger)
        {
            _logger = logger;
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            var formData = context.ActionArguments["contactForm"] as ContactFormDto;
            var honeypotField = formData.GetType().GetProperty("Company").GetValue(formData).ToString();
            
            // no spambot
            if (string.IsNullOrEmpty(honeypotField)) return;

            // spambot detected
            context.Result = new ContentResult()
            {
                Content = "No, thank you.",
                ContentType = "text/plain",
                StatusCode = (int)HttpStatusCode.OK
            };
            
            _logger.LogWarning($"\n Spambot detected at {DateTime.UtcNow}");
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
        }
    }
}