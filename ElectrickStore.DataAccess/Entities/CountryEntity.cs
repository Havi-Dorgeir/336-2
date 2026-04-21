using System;
using System.Collections.Generic;

namespace ElectrickStore.DataAccess.Entities;

public partial class CountryEntity
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Capital { get; set; }

    public string? Continent { get; set; }

    public string? Area { get; set; }

    public string? Population { get; set; }
}
