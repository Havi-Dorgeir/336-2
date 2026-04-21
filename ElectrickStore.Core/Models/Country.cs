using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.Core.Models
{
    public class Country
    {
        public const int MAX_NAME_LENGTH = 100;

        public Country(int id, string name, string capital, string continent, string area, string population)
        {
            Id = id;
            Name = name;
            Capital = capital;
            Continent = continent;
            Area = area;
            Population = population;
        }

        public int Id { get; }
        public string Name { get; } = string.Empty;
        public string Capital { get; } = string.Empty;
        public string Continent { get; } = string.Empty;
        public string Area { get; } = string.Empty; 
        public string Population { get; } = string.Empty; 

        public static (Country Country, string Error) Create(
            int id,
            string name,
            string capital,
            string continent,
            string area,
            string population)
        {
            var error = string.Empty;

            if (string.IsNullOrWhiteSpace(name) || name.Length > MAX_NAME_LENGTH)
            {
                error = $"Country name cannot be empty or longer than {MAX_NAME_LENGTH} symbols";
            }

            var country = new Country(id, name, capital, continent, area, population);
            return (country, error);
        }
    }
}
