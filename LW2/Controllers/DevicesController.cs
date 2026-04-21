using ElectrickStore.Application.Services;
using ElectrickStore.Core.Models;
using ElectrickStore.DataAccess.Repositories;
using LW2.Contracts;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace LW2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DevicesController : ControllerBase
    {
        private readonly IDeviceServices deviceServices;

        public DevicesController(IDeviceServices deviceServices)
        {
            this.deviceServices = deviceServices;
        }
        [HttpGet]
        public async Task<ActionResult<List<DeviceRepositories>>> GetDevice()
        {
            var devices = await deviceServices.GetAllDevice();
            var response = devices.Select(b => new  DeviceResponse(b.Id, b.Name , b.Description, b.Price));
             return Ok(response);
        }
        [HttpPost] 
        public async Task<ActionResult<Guid>> CreateDevice([FromBody] DeviceRequest request)
        {
            var (device, error) = Device.Create(Guid.NewGuid(), request.name, request.description, request.price);

            if (!string.IsNullOrEmpty(error))
            {
               return BadRequest(error);
            }
          var deviceid=   await deviceServices.CreateDevice(device);
            return Ok(deviceid);

        }
        [HttpPut("{id:guid}")]
        public async Task<ActionResult<Guid>> UpdateDevices(Guid id , [FromBody] DeviceRequest request)
        {
             var deviceid = await deviceServices.UpdateDevice(id, request.name, request.description, request.price);
            return Ok(deviceid);
        }
        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<Guid>> DeleteDevice(Guid id)
        {
            return Ok(await  deviceServices.DeleteDevice(id));
        }

    }
}
