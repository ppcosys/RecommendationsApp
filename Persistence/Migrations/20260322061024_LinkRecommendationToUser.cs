using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class LinkRecommendationToUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "AppUserId",
                table: "Recommendations",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Recommendations_AppUserId",
                table: "Recommendations",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Recommendations_Users_AppUserId",
                table: "Recommendations",
                column: "AppUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Recommendations_Users_AppUserId",
                table: "Recommendations");

            migrationBuilder.DropIndex(
                name: "IX_Recommendations_AppUserId",
                table: "Recommendations");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "Recommendations");
        }
    }
}
