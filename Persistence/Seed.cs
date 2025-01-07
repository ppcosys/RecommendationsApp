using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.Recommendations.Any()) return;

            var recommendations = new List<Recommendation>
            {
                new Recommendation
                {
                    Title = "DevDays Europe",
                    Category = "Dev",
                    Link = "https://devdays.lt/",
                    Date = DateTime.UtcNow.AddMonths(1),
                    Description = "Event 1 month in future",
                    Country = "Lithuania",
                    City = "Vilnius",
                    Place = "LITEXPO Conference Center",
                },
                new Recommendation
                {
                    Title = "Microsoft Conference",
                    Category = "Dev",
                    Link = "https://mstechsummit.pl",                    
                    Date = DateTime.UtcNow.AddMonths(5),
                    Description = "Event 5 months in future",
                    Country = "Poland",
                    City = "Warsaw",
                    Place = "ADN Conference Center",
                },          
                new Recommendation
                {
                    Title = "DevOps Con",
                    Category = "DevOps",
                    Link = "https://devopscon.io",
                    Date = DateTime.UtcNow.AddMonths(-1),
                    Description = "Event 1 month ago",
                    Country = "UK",
                    City = "London",
                    Place = "Park Plaza Victoria",
                },
                new Recommendation
                {
                    Title = "AI Summit New York",
                    Category = "AI",
                    Link = "https://newyork.theaisummit.com",
                    Date = DateTime.UtcNow.AddMonths(11),
                    Description = "Event 11 months in future",
                    Country = "USA",
                    City = "New York",
                    Place = "Javits Center",
                }
            };

            await context.Recommendations.AddRangeAsync(recommendations);
            await context.SaveChangesAsync();
        }
    }
}