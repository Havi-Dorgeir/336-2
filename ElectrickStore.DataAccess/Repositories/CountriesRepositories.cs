using ElectrickStore.Core.Abstract;
using ElectrickStore.Core.Models;
using ElectrickStore.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.DataAccess.Repositories
{
    public class CountriesRepositories : ICountriesRepositories
    {
        private readonly ElectrickStoreDbContext _context;

        public CountriesRepositories(ElectrickStoreDbContext context)
        {
            _context = context;
        }

        public async Task<List<Country>> GetCountries()
        {
            var countryEntities = await _context.Countries
                .AsNoTracking()
                .ToListAsync();

            var countries = countryEntities.
                Select(b => Country.Create(
                    b.Id,
                    b.Name ?? string.Empty,
                    b.Capital ?? string.Empty,
                    b.Continent ?? string.Empty,
                    b.Area ?? string.Empty, // Теперь string.Empty
                    b.Population ?? string.Empty // Теперь string.Empty
                ).Country).ToList();

            return countries;
        }

        public async Task<int> Create(Country country)
        {
            var countryEntity = new CountryEntity
            {
                Id = country.Id,
                Name = country.Name,
                Capital = country.Capital,
                Continent = country.Continent,
                Area = country.Area,
                Population = country.Population
            };

            await _context.Countries.AddAsync(countryEntity);
            await _context.SaveChangesAsync();

            return countryEntity.Id;
        }

        public async Task<int> Update(int id, string name, string capital, string continent, string area, string population)
        {
            await _context.Countries.Where(b => b.Id == id).ExecuteUpdateAsync(s => s
                .SetProperty(b => b.Name, b => name)
                .SetProperty(b => b.Capital, b => capital)
                .SetProperty(b => b.Continent, b => continent)
                .SetProperty(b => b.Area, b => area)
                .SetProperty(b => b.Population, b => population)
            );

            return id;
        }

        public async Task<int> Delete(int id)
        {
            await _context.Countries.Where(b => b.Id == id).ExecuteDeleteAsync();
            return id;
        }
    }
}
