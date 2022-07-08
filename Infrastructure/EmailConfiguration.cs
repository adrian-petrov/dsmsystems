using System.Collections.Generic;

namespace Infrastructure
{
    public class EmailConfiguration
    {
        public List<string> To { get; set; }
        public string From { get; set; }
        public string AccessKey { get; set; }
        public string SecretKey { get; set; }
    }
}