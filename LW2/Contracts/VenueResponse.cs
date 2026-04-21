namespace LW2.Contracts
{
    public record VenueResponse(
          int Id,
          string VenueNo,
          string Name,
          string Capacity,
          byte[]? VenueMap,
          string Remarks
      );
}
