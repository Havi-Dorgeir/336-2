using System;
using System.Collections.Generic;

namespace ElectrickStore.DataAccess.Entities;

public partial class VenueEntity
{
    public int Id { get; set; }

    public string? Venueno { get; set; }

    public string? Venue1 { get; set; }

    public string? Capacity { get; set; }

    public byte[]? VenueMap { get; set; }

    public string? Remarks { get; set; }
}
