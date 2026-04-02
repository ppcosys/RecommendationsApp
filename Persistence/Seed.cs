using System.Security.Cryptography;
using System.Text;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            const string seedEmail = "seed@recommendations.local";

            var seedUser = await context.Users
                .FirstOrDefaultAsync(x => x.Email == seedEmail);

            if (seedUser == null)
            {
                CreatePasswordHash("Seed123!", out var passwordHash, out var passwordSalt);

                seedUser = new AppUser
                {
                    Id = Guid.NewGuid(),
                    DisplayName = "Recommendations Seed",
                    UserName = "seeduser",
                    Email = seedEmail,
                    PasswordHash = passwordHash,
                    PasswordSalt = passwordSalt
                };

                await context.Users.AddAsync(seedUser);
                await context.SaveChangesAsync();
            }

            var seedRecommendations = new List<Recommendation>
            {
                new Recommendation
                {
                    Id = Guid.NewGuid(),
                    Title = "React Summit 2026",
                    Category = "Dev",
                    Link = "https://reactsummit.com/",
                    Date = new DateTime(2026, 6, 12),
                    Description = "The largest React conference in the world, gathering front-end engineers.",
                    Country = "Netherlands",
                    City = "Amsterdam",
                    Place = "Kromhouthal, Amsterdam",
                    AppUserId = seedUser.Id
                },
                new Recommendation
                {
                    Id = Guid.NewGuid(),
                    Title = "DevOps Con",
                    Category = "DevOps",
                    Link = "https://devopscon.io/",
                    Date = new DateTime(2026, 9, 28),
                    Description = "International conference for software delivery, microservices, and cloud-native.",
                    Country = "USA",
                    City = "New York",
                    Place = "New York Marriott at the Brooklyn Bridge, New York",
                    AppUserId = seedUser.Id
                },
                new Recommendation
                {
                    Id = Guid.NewGuid(),
                    Title = "World Summit AI",
                    Category = "AI",
                    Link = "https://worldsummit.ai/",
                    Date = new DateTime(2026, 10, 14),
                    Description = "The world's leading AI summit focusing on the entire AI ecosystem.",
                    Country = "Netherlands",
                    City = "Amsterdam",
                    Place = "Taets Art and Event Park, Amsterdam",
                    AppUserId = seedUser.Id
                },
                new Recommendation
                {
                    Id = Guid.NewGuid(),
                    Title = ".NET Developer Days 2026",
                    Category = "Dev",
                    Link = "https://netdeveloperdays.pl/",
                    Date = new DateTime(2026, 10, 20),
                    Description = ".NET biggest event in Central and Eastern Europe dedicated to the .NET platform.",
                    Country = "Poland",
                    City = "Warsaw",
                    Place = "EXPO XXI, Warsaw",
                    AppUserId = seedUser.Id
                }
            };

            foreach (var recommendation in seedRecommendations)
            {
                var exists = await context.Recommendations
                    .AnyAsync(x => x.Link == recommendation.Link);

                if (!exists)
                {
                    await context.Recommendations.AddAsync(recommendation);
                }
            }

            await context.SaveChangesAsync();
        }

        private static void CreatePasswordHash(
            string password,
            out byte[] passwordHash,
            out byte[] passwordSalt)
        {
            using var hmac = new HMACSHA512();

            passwordSalt = hmac.Key;
            passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
        }
    }
}