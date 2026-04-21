using ElectrickStore.Core.Abstract;
using ElectrickStore.Core.Models;
using ElectrickStore.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.DataAccess.Repositories
{
    public class EventsRepositories : IEventsRepositories
    {
        private readonly ElectrickStoreDbContext _context;

        public EventsRepositories(ElectrickStoreDbContext context)
        {
            _context = context;
        }

        public async Task<List<Event>> GetEvents()
        {
            var eventEntities = await _context.Events
                .AsNoTracking()
                .ToListAsync();

            var events = eventEntities.
                Select(b => Event.Create(
                    b.Id,
                    b.Eventno ?? string.Empty,         
                    b.Venueno ?? string.Empty,       
                    b.EventName ?? string.Empty,       
                    b.EventDescription ?? string.Empty, 
                    b.TicketPrice ?? string.Empty,      
                    b.EventDate,
                    b.EventTime,
                    b.EventPhoto
                ).Event).ToList();

            return events;
        }

        public async Task<int> Create(Event eventModel)
        {
            var eventEntity = new EventEntity
            {
                Id = eventModel.Id,
                Eventno = eventModel.EventNo,
                Venueno = eventModel.VenueNo,
                EventName = eventModel.EventName,
                EventDescription = eventModel.EventDescription,
                TicketPrice = eventModel.TicketPrice,
                EventDate = eventModel.EventDate,
                EventTime = eventModel.EventTime,
                EventPhoto = eventModel.EventPhoto
            };

            await _context.Events.AddAsync(eventEntity);
            await _context.SaveChangesAsync();

            return eventEntity.Id;
        }

        public async Task<int> Update(int id, string eventNo, string venueNo, string eventName, string eventDescription, string ticketPrice, DateOnly? eventDate, TimeOnly? eventTime, byte[]? eventPhoto)
        {
            await _context.Events.Where(b => b.Id == id).ExecuteUpdateAsync(s => s
                .SetProperty(b => b.Eventno, b => eventNo)
                .SetProperty(b => b.Venueno, b => venueNo)
                .SetProperty(b => b.EventName, b => eventName)
                .SetProperty(b => b.EventDescription, b => eventDescription)
                .SetProperty(b => b.TicketPrice, b => ticketPrice) // Больше никаких конфликтов!
                .SetProperty(b => b.EventDate, b => eventDate)
                .SetProperty(b => b.EventTime, b => eventTime)
                .SetProperty(b => b.EventPhoto, b => eventPhoto)
            );

            return id;
        }

        public async Task<int> Delete(int id)
        {
            await _context.Events.Where(b => b.Id == id).ExecuteDeleteAsync();
            return id;
        }
    }
}
