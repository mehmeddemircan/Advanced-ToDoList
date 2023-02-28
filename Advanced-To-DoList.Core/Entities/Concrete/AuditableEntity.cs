using Advanced_To_DoList.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advanced_To_DoList.Core.Entities.Concrete
{
    public class AuditableEntity : BaseEntity , ICreatedEntity , IUpdatedEntity
    {
      

        public DateTime CreatedDate { get; set; }


        public int? UpdatedUserId { get; set; }

        public DateTime? UpdatedDate { get; set; }
    }
}
