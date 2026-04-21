using ElectrickStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.Core.Abstract
{
    public interface IVenueServices
    {
        Task<int> CreateVenue(Venue venue);
        Task<int> DeleteVenue(int id);
        Task<List<Venue>> GetAllVenues();
        Task<int> UpdateVenue(int id, string venueNo, string name, string capacity, byte[]? map, string remarks);
    }
}
