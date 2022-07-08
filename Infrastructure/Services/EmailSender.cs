using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Amazon;
using Amazon.Runtime;
using Amazon.SimpleEmail;
using Amazon.SimpleEmail.Model;
using Core.Interfaces;
using Microsoft.Extensions.Options;

namespace Infrastructure.Services
{
    public class EmailSender : IEmailSender
    {
        private readonly EmailConfiguration _emailConfig;
        
        public EmailSender(IOptions<EmailConfiguration> options)
        {
            _emailConfig = options.Value;
        }
        
        public async Task SendEmailAsync(
            string name,
            string email,
            string phone,
            string message)
        {
            using var client = new AmazonSimpleEmailServiceClient(
                new BasicAWSCredentials(_emailConfig.AccessKey, _emailConfig.SecretKey),
                RegionEndpoint.USEast2);            
            
            var sendRequest = CreateMessageFromFormData(name, email, phone, message);

            try
            {
                await client.SendEmailAsync(sendRequest);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        private SendEmailRequest CreateMessageFromFormData(
            string name,
            string email,
            string phone,
            string message)
        {
            var subject = $"Website Customer Enquiry: {name} - {email}";
            var textBody = $"This email was sent by {name}" +
                           $"Their details are: {email}, {phone}" +
                           $"Their message is:\r\n" +
                           $"{message}";
            var htmlBody = $@"<html>
                <head></head>
                <body>
                    <h3>This email was sent by {name}.</h3>
                    <p>Contact details:</p>
                    <ul>
                        <li>Email: {email}</li>
                        <li>Phone Number: {phone}</li>
                    </ul>
                    <h3>Message below:</h3>
                    <p>{message}</p>
                </body>
                </html>
            ";
            
            var sendRequest = new SendEmailRequest
            {
                Source = _emailConfig.From,
                Destination = new Destination
                {
                    ToAddresses = new List<string>(_emailConfig.To)
                },
                Message = new Message
                {
                    Subject = new Content(subject),
                    Body = new Body
                    {
                        Html = new Content
                        {
                            Charset = "UTF-8",
                            Data = htmlBody
                        },
                        Text = new Content
                        {
                            Charset = "UTF-8",
                            Data = textBody
                        }
                    }
                }
            };
            return sendRequest;
        }
    }
}