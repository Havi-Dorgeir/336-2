using ElectrickStore.Core.Abstract;
using ElectrickStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.Application.Services
{
    public class VenueServices : IVenueServices
    {
        private readonly IVenuesRepositories venuesRepositories;

        public VenueServices(IVenuesRepositories venuesRepositories)
        {
            this.venuesRepositories = venuesRepositories;
        }

        public async Task<List<Venue>> GetAllVenues()
        {
            return await venuesRepositories.GetVenues();
        }

        public async Task<int> CreateVenue(Venue venue)
        {
            return await venuesRepositories.Create(venue);
        }

        public async Task<int> UpdateVenue(int id, string venueNo, string name, string capacity, byte[]? map, string remarks)
        {
            return await venuesRepositories.Update(id, venueNo, name, capacity, map, remarks);
        }

        public async Task<int> DeleteVenue(int id)
        {
            return await venuesRepositories.Delete(id);
        }
    }
}
