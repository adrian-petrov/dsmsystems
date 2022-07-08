using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class ContactFormDto
    {
        public string Company { get; set; }
        [Required] 
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        public string Phone { get; set; }
        [Required]
        public string Message { get; set; }
    }
}