namespace LW2.Contracts
{
    public record VenueRequest(
         string VenueNo,
         string Name,
         string Capacity,
         byte[]? VenueMap,
         string Remarks
     );
}
