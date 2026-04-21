using ElectrickStore.Core.Models;

namespace ElectrickStore.Application.Services
{
    public interface IDeviceServices
    {
        Task<Guid> CreateDevice(Device device);
        Task<Guid> DeleteDevice(Guid id);
        Task<List<Device>> GetAllDevice();
        Task<Guid> UpdateDevice(Guid id, string name, string decription, decimal price);
    }
}