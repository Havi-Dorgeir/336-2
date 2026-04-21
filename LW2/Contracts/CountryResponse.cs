namespace LW2.Contracts
{
    public record CountryResponse(
          int Id,
          string Name,
          string Capital,
          string Continent,
          string Area,
          string Population
      );
}
