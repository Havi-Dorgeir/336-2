using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.Core.Models
{
    public class Event
    {
        public const int MAX_NAME_LENGTH = 350;

        public Event(
            int id,
            string eventNo,
            string venueNo,
            string name,
            string description,
            string price,
            DateOnly? date,
            TimeOnly? time,
            byte[]? photo)
        {
            Id = id;
            EventNo = eventNo;
            VenueNo = venueNo;
            EventName = name;
            EventDescription = description;
            TicketPrice = price;
            EventDate = date;
            EventTime = time;
            EventPhoto = photo;
        }

        public int Id { get; }
        public string EventNo { get; } = string.Empty;
        public string VenueNo { get; } = string.Empty;
        public string EventName { get; } = string.Empty;
        public string EventDescription { get; } = string.Empty;
        public string TicketPrice { get; }
        public DateOnly? EventDate { get; }
        public TimeOnly? EventTime { get; }
        public byte[]? EventPhoto { get; }

        public static (Event Event, string Error) Create(
            int id,
            string eventNo,
            string venueNo,
            string name,
            string description,
            string price,
            DateOnly? date = null,
            TimeOnly? time = null,
            byte[]? photo = null)
        {
            var error = string.Empty;

            if (string.IsNullOrEmpty(name) || name.Length > MAX_NAME_LENGTH)
            {
                error = $"Name can't be empty or longer than {MAX_NAME_LENGTH} symbols";
            }

            var @event = new Event(id, eventNo, venueNo, name, description, price, date, time, photo);

            return (@event, error);
        }
    }

}

