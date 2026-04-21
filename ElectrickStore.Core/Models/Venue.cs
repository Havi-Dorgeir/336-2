using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.Core.Models
{
    public class Venue
    {
        public const int MAX_NAME_LENGTH = 200;

        public Venue(int id, string venueNo, string name, string capacity, byte[]? map, string remarks)
        {
            Id = id;
            VenueNo = venueNo;
            Name = name;
            Capacity = capacity;
            VenueMap = map;
            Remarks = remarks;
        }

        public int Id { get; }
        public string VenueNo { get; } = string.Empty;
        public string Name { get; } = string.Empty;
        public string Capacity { get; } = string.Empty; // Теперь string
        public byte[]? VenueMap { get; }
        public string Remarks { get; } = string.Empty;

        public static (Venue Venue, string Error) Create(
            int id,
            string venueNo,
            string name,
            string capacity,
            byte[]? map = null,
            string remarks = "")
        {
            var error = string.Empty;

            if (string.IsNullOrWhiteSpace(name) || name.Length > MAX_NAME_LENGTH)
            {
                error = $"Venue name cannot be empty or longer than {MAX_NAME_LENGTH} symbols";
            }

            var venue = new Venue(id, venueNo, name, capacity, map, remarks);
            return (venue, error);
        }
    }
}
