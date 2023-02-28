﻿
using Advanced_To_DoList.Core.Entities.Concrete.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Core.Utilities.Security.JWT
{
    public class AccessToken
    {
        public User User { get; set; }
        public string Token { get; set; }
        public DateTime Expiration { get; set; }


    }
}
