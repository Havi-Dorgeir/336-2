using System;
using System.Collections.Generic;
using System.Text;

namespace ElectrickStore.Core.Models
{
    public class Device
    {
         public  const int  max_title_length = 350;
        public Device(Guid id , string name , string description , decimal price) 
        { 
            Id = id;
            Name = name;
            Description = description;
            Price = price;
            

        }
        public Guid Id { get;  }
        public string Name { get; } = string.Empty;
        public string Description { get; } = string.Empty;

        public decimal Price { get;  }


        public static (Device Device , string Error ) Create(Guid id, string DeviceName, string description, decimal price)
        {
            var error = string.Empty;
            if (string.IsNullOrEmpty(DeviceName) || DeviceName.Length> max_title_length)
            {
                error = $"Name can't  be empty or longer then {max_title_length} symbols ";

            }
            var device = new Device(id, DeviceName, description, price);
            return (device, error);
        }
    }
}
