using Domain;
using MediatR;
using Persistance;

namespace Application.Posts
{
    public class Details
    {
        public class Query : IRequest<Post>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Post>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Post> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Posts.FindAsync(request.Id);
            }
        }
    }
}
