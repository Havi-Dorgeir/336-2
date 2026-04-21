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
    public class EventsController : ControllerBase
    {
        private readonly IEventServices eventServices;

        public EventsController(IEventServices eventServices)
        {
            this.eventServices = eventServices;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EventResponse>>> GetEvents()
        {
            var events = await eventServices.GetAllEvents();
            var response = events.Select(b => new EventResponse(b.Id, b.EventNo, b.VenueNo, b.EventName, b.EventDescription, b.TicketPrice, b.EventDate, b.EventTime, b.EventPhoto));
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreateEvent([FromBody] EventRequest request)
        {
            // Передаем 0, так как ID генерируется базой (SERIAL)
            var (eventModel, error) = Event.Create(0, request.EventNo, request.VenueNo, request.EventName, request.EventDescription, request.TicketPrice, request.EventDate, request.EventTime, request.EventPhoto);

            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }

            var eventid = await eventServices.CreateEvent(eventModel);
            return Ok(eventid);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<int>> UpdateEvent(int id, [FromBody] EventRequest request)
        {
            var eventid = await eventServices.UpdateEvent(id, request.EventNo, request.VenueNo, request.EventName, request.EventDescription, request.TicketPrice, request.EventDate, request.EventTime, request.EventPhoto);
            return Ok(eventid);
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<int>> DeleteEvent(int id)
        {
            return Ok(await eventServices.DeleteEvent(id));
        }
    }
}