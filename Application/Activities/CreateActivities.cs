using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class CreateActivities
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Hanlder : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Hanlder(DataContext context)
            {
                _context = context;
            }


            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.Activity);

                await _context.SaveChangesAsync();
            }

        }
    }
}