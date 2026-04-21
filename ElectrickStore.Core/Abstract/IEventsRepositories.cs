using ElectrickStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.Core.Abstract
{
    public interface IEventsRepositories
    {
        Task<int> Create(Event eventModel);
        Task<int> Delete(int id);
        Task<List<Event>> GetEvents();
        Task<int> Update(int id, string eventNo, string venueNo, string eventName, string eventDescription, string ticketPrice, DateOnly? eventDate, TimeOnly? eventTime, byte[]? eventPhoto);
    }
}
