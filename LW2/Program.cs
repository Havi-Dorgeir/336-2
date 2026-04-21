
using ElectrickStore.Application.Services;
using ElectrickStore.Core.Abstract;
using ElectrickStore.DataAccess;
using ElectrickStore.DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;

namespace LW2
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);


            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddOpenApi();
            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<ElectrickStoreDbContext>(
                options =>
                {
                    options.UseNpgsql(builder.Configuration.GetConnectionString(nameof(ElectrickStoreDbContext)));
                });
          builder.Services.AddScoped<IDeviceServices, DeviceServices>();
          builder.Services.AddScoped<IDevicesRepositories, DeviceRepositories>();
            //-------------------------------------------------------------------
          builder.Services.AddScoped<IEventsRepositories, EventsRepositories>();
            builder.Services.AddScoped<IEventServices, EventServices>();
            //-------------------------------------------------------------------
            builder.Services.AddScoped<ICountriesRepositories, CountriesRepositories>();
            builder.Services.AddScoped<ICountryServices, CountryServices>();
            //-------------------------------------------------------------------
            builder.Services.AddScoped<IVenuesRepositories, VenuesRepositories>();
            builder.Services.AddScoped<IVenueServices, VenueServices>();



            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
                app.MapOpenApi();
            }

            app.UseHttpsRedirection();
           
            app.UseCors(x =>
            {
                x.WithHeaders().AllowAnyHeader();
                x.WithOrigins("http://localhost:3000");
                x.WithOrigins().AllowAnyMethod();

            });
            app.UseAuthorization();
            app.MapControllers();
            app.Run();
        }
    }
}
