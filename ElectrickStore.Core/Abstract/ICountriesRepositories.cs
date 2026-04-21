using ElectrickStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.Core.Abstract
{
    public interface ICountriesRepositories
    {
        Task<int> Create(Country country);
        Task<int> Delete(int id);
        Task<List<Country>> GetCountries();
        Task<int> Update(int id, string name, string capital, string continent, string area, string population);
    }
}
