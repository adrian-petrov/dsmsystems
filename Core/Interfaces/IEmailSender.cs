using System.Collections.Generic;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IEmailSender
    {
        Task SendEmailAsync(
            string name,
            string email,
            string phone,
            string message);
    }
}