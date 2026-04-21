

using ElectrickStore.Core.Models;
using ElectrickStore.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace ElectrickStore.DataAccess.Configurations
{
    public class DeviceConfig : IEntityTypeConfiguration<DeviceEntity>
    {
        public void Configure(EntityTypeBuilder<DeviceEntity> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(b => b.Name)
                .HasMaxLength(Device.max_title_length)
                .IsRequired();

            builder.Property(b => b.Description).IsRequired();

            builder.Property(b => b.Price).IsRequired(); 

        }
    }
}
