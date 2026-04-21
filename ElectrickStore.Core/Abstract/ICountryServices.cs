using ElectrickStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.Core.Abstract
{
    public interface ICountryServices
    {
        Task<int> CreateCountry(Country country);
        Task<int> DeleteCountry(int id);
        Task<List<Country>> GetAllCountries();
        Task<int> UpdateCountry(int id, string name, string capital, string continent, string area, string population);
    }
}
