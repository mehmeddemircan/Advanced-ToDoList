﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Core.Entities.Abstract
{
    public interface ICreatedEntity 
    {
       

        public DateTime CreatedDate { get; set; }
    }
}