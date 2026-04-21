using ElectrickStore.Core.Models;
using ElectrickStore.DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Text;


namespace ElectrickStore.Application.Services
{
    public class DeviceServices : IDeviceServices
    {
        private readonly IDevicesRepositories devicesRepositories;

        public DeviceServices(IDevicesRepositories devicesRepositories)
        {
            this.devicesRepositories = devicesRepositories;
        }
        public async Task<List<Device>> GetAllDevice()
        {
            return await devicesRepositories.GetDevices();

        }
        public async Task<Guid> CreateDevice(Device device)
        {
            return await devicesRepositories.Create(device);
        }

        public async Task<Guid> UpdateDevice(Guid id, string name, string decription, decimal price)
        {
            return await devicesRepositories.Update(id, name, decription, price);
        }

        public async Task<Guid> DeleteDevice(Guid id)
        {
            return await devicesRepositories.Delete(id);
        }
    }
}
