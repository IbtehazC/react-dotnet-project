using Domain;

namespace Persistance
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Posts.Any()) return;

            var posts = new List<Post>
            {
                new Post
                {
                    Title="Does Bitcoin energy usage per block vary with the number of transactions",
                    Details="Purely technically speaking, would energy consumption increase per block* increase if the number of transactions increased? I am pretty sure I've read somewhere the answer is no. But I can't remember where and why, and so your feedback would be appreciated - along with any sources (I've tried looking myself, to not much avail). Note - this is not intended to be a critique of Bitcoin energy usage, and so please don't feel the need to have to defend Bitcoin.Reasons for emphasising 'per block' is because I know that global adoption of Bitcoin may likely attract people into starting up mining businesses, leading to energy consumption increase.But I just want to know whether technically transaction volume comes into play.",
                    Category="Crypto Currency",
                    Like=7,
                    CreatedAt=DateTime.Now.AddMonths(-2),
                },
                new Post
                {
                    Title="n 2019, I read one book. In 2020 I read 4 books! In 2021 I read 7 books!! This subreddit has reignited my love for reading…",
                    Details="First and foremost: Thank you so much for that! :) /n Some of the books I read: /n Rutger Bregman - Humankind (in 2020) /n Walter Isaacson - Steve Jobs (in 2019) /n Marieke Lucas Rijneveld - The Discomfort of Evening (in 2020) /n Mario Puzo - The Godfather (in 2021) /n Kari Hotakainen - Kimi Räikkönen (in 2020) /n Bernie Sanders - Our Revolution (in 2021) /n I’d love to hear your suggestions for 2022! Just started today with Oliver Todd’s Jacques Brel: Une Vie(a life)",
                    Category="Books",
                    Like=10,
                    CreatedAt=DateTime.Now.AddMonths(-1),
                },
                new Post
                {
                    Title="How to get student loan?",
                    Details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum .",
                    Category="Advertisement",
                    Like=0,
                    CreatedAt=DateTime.Now,
                },
                new Post
                {
                    Title="Well well well",
                    Details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum .",
                    Category="Spam",
                    Like=0,
                    CreatedAt=DateTime.Now,
                },
                new Post
                {
                    Title="GGWP",
                    Details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum .",
                    Category="Game",
                    Like=0,
                    CreatedAt=DateTime.Now,
                },
                new Post
                {
                    Title="LMFAO",
                    Details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum .",
                    Category="Spam",
                    Like=0,
                    CreatedAt=DateTime.Now.AddMonths(-5),
                },
                new Post
                {
                    Title="National News",
                    Details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum .",
                    Category="New",
                    Like=0,
                    CreatedAt=DateTime.Now,
                },
                new Post
                {
                    Title="Well Played",
                    Details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum .",
                    Category="Game",
                    Like=0,
                    CreatedAt=DateTime.Now.AddMonths(-1),
                },
                new Post
                {
                    Title="Scamming",
                    Details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum .",
                    Category="Advertisement",
                    Like=0,
                    CreatedAt=DateTime.Now,
                },
                new Post
                {
                    Title="My friend",
                    Details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum .",
                    Category="Advertisement",
                    Like=0,
                    CreatedAt=DateTime.Now,
                },
            };

            await context.Posts.AddRangeAsync(posts);
            await context.SaveChangesAsync();
        }
    }
}
