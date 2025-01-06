namespace Domain
{
    public class Recommendation
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public string Link { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }        
        public string Country { get; set; }
        public string City { get; set; }
        public string Place { get; set; }
    }
}