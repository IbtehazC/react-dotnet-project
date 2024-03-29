﻿using Domain;
using MediatR;
using Persistance;

namespace Application.Posts
{
    public class Create
    {
        public class Command : IRequest
        {
            public Post Post { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                context.Add(request.Post);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
