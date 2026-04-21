using ElectrickStore.Core.Models;

namespace ElectrickStore.DataAccess.Repositories
{
    public interface IDevicesRepositories
    {
        Task<Guid> Create(Device device);
        Task<Guid> Delete(Guid Id);
        Task<List<Device>> GetDevices();
        Task<Guid> Update(Guid id, string Name, string Description, decimal Price);
    }
}