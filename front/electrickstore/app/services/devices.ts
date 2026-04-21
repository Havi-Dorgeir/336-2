import { json } from "stream/consumers";

export interface DeviceRequest{
    name: string;
    description: string;
    price: number;
}
export const getAllDevices = async()  =>{
    const response = await  fetch("http://localhost:5104/Devices");

    return response.json();

};
export const createDevice = async (deviceRequest: DeviceRequest) =>{
    await fetch("http://localhost:5104/Devices",{
        method:"POST",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(deviceRequest),
    });
};

export const updateDevice = async (id:string,deviceRequest: DeviceRequest) =>{
    await fetch(`http://localhost:5104/Devices/${id}`,{
        method:"PUT",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(deviceRequest),
    });
};
export const deleteDevice = async (id:string) =>{
    await fetch(`http://localhost:5104/Devices/${id}`,{
        method:"DELETE",
    });
};
