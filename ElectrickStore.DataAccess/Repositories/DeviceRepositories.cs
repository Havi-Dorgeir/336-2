

using ElectrickStore.Core.Models;
using ElectrickStore.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace ElectrickStore.DataAccess.Repositories
{
    public class DeviceRepositories : IDevicesRepositories 
    {
        private readonly ElectrickStoreDbContext _context;

        public DeviceRepositories(ElectrickStoreDbContext context)
        {
            _context = context;

        }
        public async Task<List<Device>> GetDevices()
        {
            var deviceEntityes = await _context.Devices
                .AsNoTracking()
                .ToListAsync();
            var devices = deviceEntityes.
                Select(b => Device.Create(b.Id, b.Name, b.Description, b.Price).Device).ToList();
            return devices;
        }
        public async Task<Guid> Create(Device device)
        {
            var deviceEntity = new DeviceEntity
            {
                Id = device.Id,
                Name = device.Name,
                Description = device.Description,
                Price = device.Price,

            };
            await _context.Devices.AddAsync(deviceEntity);
            await _context.SaveChangesAsync();

            return deviceEntity.Id;
        }
        public async Task<Guid> Update(Guid id, string Name, string Description, decimal Price)
        {
            await _context.Devices.Where(b => b.Id == id).ExecuteUpdateAsync(s => s.SetProperty(b => b.Name, b => Name)
            .SetProperty(b => b.Description, b => Description)
            .SetProperty(b => b.Price, b => Price)
            );

            return id;
        }
        public async Task<Guid> Delete(Guid Id)
        {
            await _context.Devices.Where(b => b.Id == Id).ExecuteDeleteAsync();
            return Id;
        }

    }
}
