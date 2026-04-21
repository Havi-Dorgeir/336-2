namespace LW2.Contracts
{
    public record EventRequest(
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
