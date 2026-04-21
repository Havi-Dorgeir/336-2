namespace LW2.Contracts
{
    public record EventResponse(
        int Id,
        string EventNo,
        string VenueNo,
        string EventName,
        string EventDescription,
        string TicketPrice,
        DateOnly? EventDate,
        TimeOnly? EventTime,
        byte[]? EventPhoto
    );
}
