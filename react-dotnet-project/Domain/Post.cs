namespace Domain
{
    public class Post
    {
        public Guid id { get; set; }
        public string Title { get; set; }
        public string Details { get; set; }
        public int Like { get; set; }
        public string Category { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
