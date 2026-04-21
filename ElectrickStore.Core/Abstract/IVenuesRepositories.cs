using ElectrickStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.Core.Abstract
{
    public interface IVenuesRepositories
    {
        Task<int> Create(Venue venue);
        Task<int> Delete(int id);
        Task<List<Venue>> GetVenues();
        Task<int> Update(int id, string venueNo, string name, string capacity, byte[]? map, string remarks);
    }
}
