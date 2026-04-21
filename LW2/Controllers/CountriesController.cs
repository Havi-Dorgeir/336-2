using ElectrickStore.Core.Abstract;
using ElectrickStore.Core.Models;
using ElectrickStore.DataAccess;
using ElectrickStore.DataAccess.Entities;
using LW2.Contracts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ElectrickStore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CountriesController : ControllerBase
    {
        private readonly ICountryServices countryServices;

        public CountriesController(ICountryServices countryServices)
        {
            this.countryServices = countryServices;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CountryResponse>>> GetCountries()
        {
            var countries = await countryServices.GetAllCountries();
            var response = countries.Select(b => new CountryResponse(b.Id, b.Name, b.Capital, b.Continent, b.Area, b.Population));
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreateCountry([FromBody] CountryRequest request)
        {
            var (country, error) = Country.Create(0, request.Name, request.Capital, request.Continent, request.Area, request.Population);

            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }

            var countryid = await countryServices.CreateCountry(country);
            return Ok(countryid);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<int>> UpdateCountry(int id, [FromBody] CountryRequest request)
        {
            var countryid = await countryServices.UpdateCountry(id, request.Name, request.Capital, request.Continent, request.Area, request.Population);
            return Ok(countryid);
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<int>> DeleteCountry(int id)
        {
            return Ok(await countryServices.DeleteCountry(id));
        }
    }
}