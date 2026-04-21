using ElectrickStore.Core.Abstract;
using ElectrickStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.Application.Services
{
    public class CountryServices : ICountryServices
    {
        private readonly ICountriesRepositories countriesRepositories;

        public CountryServices(ICountriesRepositories countriesRepositories)
        {
            this.countriesRepositories = countriesRepositories;
        }

        public async Task<List<Country>> GetAllCountries()
        {
            return await countriesRepositories.GetCountries();
        }

        public async Task<int> CreateCountry(Country country)
        {
            return await countriesRepositories.Create(country);
        }

        public async Task<int> UpdateCountry(int id, string name, string capital, string continent, string area, string population)
        {
            return await countriesRepositories.Update(id, name, capital, continent, area, population);
        }

        public async Task<int> DeleteCountry(int id)
        {
            return await countriesRepositories.Delete(id);
        }
    }
}
