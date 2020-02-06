using Angular8_App_Part1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular8_App_Part1.Controllers
{
    [Route("/api/employees")]
    public class EmployeesController : Controller
    {
        private readonly AppDbContext context;

        public EmployeesController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Employee>> GetEmployees()
        {
            return await context.Employees.ToListAsync();
            
        }

        [HttpGet("{code}")]
        public async Task<Employee> GetEmployee(string code)
        {
            return await context.Employees.FirstOrDefaultAsync(e => e.Code == code);
        }
    }
}
