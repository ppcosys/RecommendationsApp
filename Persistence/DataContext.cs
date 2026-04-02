using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Recommendation> Recommendations { get; set; }
        public DbSet<AppUser> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Recommendation>()
                .HasOne(r => r.AppUser)
                .WithMany(u => u.Recommendations)
                .HasForeignKey(r => r.AppUserId);
        }
    }
}