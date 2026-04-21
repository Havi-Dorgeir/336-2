using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ElectrickStore.DataAccess.Entities.Scaffolded;

public partial class TempDbContext : DbContext
{
    public TempDbContext()
    {
    }

    public TempDbContext(DbContextOptions<TempDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<CountryEntity> Countries { get; set; }

    public virtual DbSet<EventEntity> Events { get; set; }

    public virtual DbSet<VenueEntity> Venues { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=electrickstoredb;Username=postgres;Password=123");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CountryEntity>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("country_pkey");

            entity.ToTable("country");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Area).HasColumnName("area");
            entity.Property(e => e.Capital).HasColumnName("capital");
            entity.Property(e => e.Continent).HasColumnName("continent");
            entity.Property(e => e.Name).HasColumnName("name");
            entity.Property(e => e.Population).HasColumnName("population");
        });

        modelBuilder.Entity<EventEntity>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("events_pkey");

            entity.ToTable("events");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.EventDate).HasColumnName("event_date");
            entity.Property(e => e.EventDescription).HasColumnName("event_description");
            entity.Property(e => e.EventName).HasColumnName("event_name");
            entity.Property(e => e.EventPhoto).HasColumnName("event_photo");
            entity.Property(e => e.EventTime).HasColumnName("event_time");
            entity.Property(e => e.Eventno).HasColumnName("eventno");
            entity.Property(e => e.TicketPrice).HasColumnName("ticket_price");
            entity.Property(e => e.Venueno).HasColumnName("venueno");
        });

        modelBuilder.Entity<VenueEntity>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("venues_pkey");

            entity.ToTable("venues");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Capacity).HasColumnName("capacity");
            entity.Property(e => e.Remarks).HasColumnName("remarks");
            entity.Property(e => e.Venue1).HasColumnName("venue");
            entity.Property(e => e.VenueMap).HasColumnName("venue_map");
            entity.Property(e => e.Venueno).HasColumnName("venueno");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
