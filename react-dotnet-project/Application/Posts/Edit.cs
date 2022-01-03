using AutoMapper;
using Domain;
using MediatR;
using Persistance;

namespace Application.Posts
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Post Post { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            private readonly IMapper mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                this.context = context;
                this.mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var post = await context.Posts.FindAsync(request.Post.Id);
                mapper.Map(request.Post, post);

                await context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}
