using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Angular8_App_Part1.Models
{
    public class Employee
    {
        [Key]
        public string Code { get; set; }

        public string Name { get; set; }

        public string Gender { get; set; }

        [Column(TypeName = "decimal(18, 3)")]
        public decimal AnnualSalary { get; set; }

        public string DayOfBirth { get; set; }
    }
}
