﻿using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Posts
{
    public class List
    {
        public class Query : IRequest<List<Post>>
        {

        }

        public class Handler : IRequestHandler<Query, List<Post>>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<List<Post>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Posts.ToListAsync();
            }
        }
    }
}
