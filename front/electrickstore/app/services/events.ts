import { json } from "stream/consumers";

export interface EventRequest{
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
export const getAllEvents = async()  =>{
    const response = await  fetch("http://localhost:5104/Events");

    return response.json();

};
export const createEvents = async (eventRequest: EventRequest) =>{
    await fetch("http://localhost:5104/Events",{
        method:"POST",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(eventRequest),
    });
};

export const updateEvents = async (id:string,deviceRequest: EventRequest) =>{
    await fetch(`http://localhost:5104/Events/${id}`,{
        method:"PUT",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(deviceRequest),
    });
};
export const deleteEvents = async (id:string) =>{
    await fetch(`http://localhost:5104/Events/${id}`,{
        method:"DELETE",
    });
};
