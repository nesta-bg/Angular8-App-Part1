using Microsoft.EntityFrameworkCore.Migrations;

namespace Angular8AppPart1.Migrations
{
    public partial class SeedEmployeesTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Employees",
                columns: new[] { "Code", "AnnualSalary", "DayOfBirth", "Gender", "Name" },
                values: new object[,]
                {
                    { "emp101", 5500m, "6/25/1988", "Male", "Tom" },
                    { "emp102", 5700.95m, "9/6/1982", "Male", "Alex" },
                    { "emp103", 5900m, "12/8/1979", "Male", "Mike" },
                    { "emp104", 6500.826m, "10/14/1980", "Female", "Mary" },
                    { "emp105", 6700.826m, "12/15/1982", "Female", "Nancy" },
                    { "emp106", 7700.481m, "11/18/1979", "Male", "Steve" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Employees",
                keyColumn: "Code",
                keyValue: "emp101");

            migrationBuilder.DeleteData(
                table: "Employees",
                keyColumn: "Code",
                keyValue: "emp102");

            migrationBuilder.DeleteData(
                table: "Employees",
                keyColumn: "Code",
                keyValue: "emp103");

            migrationBuilder.DeleteData(
                table: "Employees",
                keyColumn: "Code",
                keyValue: "emp104");

            migrationBuilder.DeleteData(
                table: "Employees",
                keyColumn: "Code",
                keyValue: "emp105");

            migrationBuilder.DeleteData(
                table: "Employees",
                keyColumn: "Code",
                keyValue: "emp106");
        }
    }
}
