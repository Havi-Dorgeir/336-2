using ElectrickStore.Core.Abstract;
using ElectrickStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.Application.Services
{
    public class EventServices : IEventServices
    {
        private readonly IEventsRepositories eventsRepositories;

        public EventServices(IEventsRepositories eventsRepositories)
        {
            this.eventsRepositories = eventsRepositories;
        }

        public async Task<List<Event>> GetAllEvents()
        {
            return await eventsRepositories.GetEvents();
        }

        public async Task<int> CreateEvent(Event eventModel)
        {
            return await eventsRepositories.Create(eventModel);
        }

        public async Task<int> UpdateEvent(int id, string eventNo, string venueNo, string eventName, string eventDescription, string ticketPrice, DateOnly? eventDate, TimeOnly? eventTime, byte[]? eventPhoto)
        {
            return await eventsRepositories.Update(id, eventNo, venueNo, eventName, eventDescription, ticketPrice, eventDate, eventTime, eventPhoto);
        }

        public async Task<int> DeleteEvent(int id)
        {
            return await eventsRepositories.Delete(id);
        }
    }
}
