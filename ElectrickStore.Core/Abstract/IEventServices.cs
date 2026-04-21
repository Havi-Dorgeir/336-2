using ElectrickStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.Core.Abstract
{
    public interface IEventServices
    {
        Task<int> CreateEvent(Event eventModel);
        Task<int> DeleteEvent(int id);
        Task<List<Event>> GetAllEvents();
        Task<int> UpdateEvent(int id, string eventNo, string venueNo, string eventName, string eventDescription, string ticketPrice, DateOnly? eventDate, TimeOnly? eventTime, byte[]? eventPhoto);
    }
}
