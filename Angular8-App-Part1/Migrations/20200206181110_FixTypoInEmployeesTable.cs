using Microsoft.EntityFrameworkCore.Migrations;

namespace Angular8AppPart1.Migrations
{
    public partial class FixTypoInEmployeesTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DayOfBirth",
                table: "Employees",
                newName: "DateOfBirth");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DateOfBirth",
                table: "Employees",
                newName: "DayOfBirth");
        }
    }
}
