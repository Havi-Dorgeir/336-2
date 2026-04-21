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
    public class VenuesController : ControllerBase
    {
        private readonly IVenueServices venueServices;

        public VenuesController(IVenueServices venueServices)
        {
            this.venueServices = venueServices;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<VenueResponse>>> GetVenues()
        {
            var venues = await venueServices.GetAllVenues();
            var response = venues.Select(b => new VenueResponse(b.Id, b.VenueNo, b.Name, b.Capacity, b.VenueMap, b.Remarks));
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreateVenue([FromBody] VenueRequest request)
        {
            var (venue, error) = Venue.Create(0, request.VenueNo, request.Name, request.Capacity, request.VenueMap, request.Remarks);

            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }

            var venueid = await venueServices.CreateVenue(venue);
            return Ok(venueid);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<int>> UpdateVenue(int id, [FromBody] VenueRequest request)
        {
            var venueid = await venueServices.UpdateVenue(id, request.VenueNo, request.Name, request.Capacity, request.VenueMap, request.Remarks);
            return Ok(venueid);
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<int>> DeleteVenue(int id)
        {
            return Ok(await venueServices.DeleteVenue(id));
        }
    }
}