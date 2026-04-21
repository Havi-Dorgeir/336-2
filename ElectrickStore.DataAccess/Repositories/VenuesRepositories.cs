using ElectrickStore.Core.Abstract;
using ElectrickStore.Core.Models;
using ElectrickStore.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.DataAccess.Repositories
{
    public class VenuesRepositories : IVenuesRepositories
    {
        private readonly ElectrickStoreDbContext _context;

        public VenuesRepositories(ElectrickStoreDbContext context)
        {
            _context = context;
        }

        public async Task<List<Venue>> GetVenues()
        {
            var venueEntities = await _context.Venues
                .AsNoTracking()
                .ToListAsync();

            var venues = venueEntities.
                Select(b => Venue.Create(
                    b.Id,
                    b.Venueno ?? string.Empty,
                    b.Venue1 ?? string.Empty,
                    b.Capacity ?? string.Empty, // Теперь string.Empty
                    b.VenueMap,
                    b.Remarks ?? string.Empty
                ).Venue).ToList();

            return venues;
        }

        public async Task<int> Create(Venue venue)
        {
            var venueEntity = new VenueEntity
            {
                Id = venue.Id,
                Venueno = venue.VenueNo,
                Venue1 = venue.Name,
                Capacity = venue.Capacity,
                VenueMap = venue.VenueMap,
                Remarks = venue.Remarks
            };

            await _context.Venues.AddAsync(venueEntity);
            await _context.SaveChangesAsync();

            return venueEntity.Id;
        }

        public async Task<int> Update(int id, string venueNo, string name, string capacity, byte[]? map, string remarks)
        {
            await _context.Venues.Where(b => b.Id == id).ExecuteUpdateAsync(s => s
                .SetProperty(b => b.Venueno, b => venueNo)
                .SetProperty(b => b.Venue1, b => name)
                .SetProperty(b => b.Capacity, b => capacity)
                .SetProperty(b => b.VenueMap, b => map)
                .SetProperty(b => b.Remarks, b => remarks)
            );

            return id;
        }

        public async Task<int> Delete(int id)
        {
            await _context.Venues.Where(b => b.Id == id).ExecuteDeleteAsync();
            return id;
        }
    }
}
