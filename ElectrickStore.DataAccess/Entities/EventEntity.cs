using System;
using System.Collections.Generic;

namespace ElectrickStore.DataAccess.Entities;

public partial class EventEntity
{
    public int Id { get; set; }

    public string? Eventno { get; set; }

    public string? Venueno { get; set; }

    public string? EventName { get; set; }

    public DateOnly? EventDate { get; set; }

    public TimeOnly? EventTime { get; set; }

    public string? EventDescription { get; set; }

    public string? TicketPrice { get; set; }

    public byte[]? EventPhoto { get; set; }
}
