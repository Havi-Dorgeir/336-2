interface Event {
    id: string;
    eventno?: string | null;
    venueno?: string | null;
    eventName?: string | null;
    eventDate?: string | Date | null;
    eventTime?: string | null;
    eventDescription?: string | null;
    ticketPrice?: string | null;
    eventPhoto?: Uint8Array | string | null;
}