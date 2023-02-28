﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Core.Entities.Abstract
{
    public interface IUpdatedEntity
    {
        public int? UpdatedUserId { get; set; }

        public DateTime? UpdatedDate { get; set; }
    }
}
