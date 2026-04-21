"use client";
import Button from "antd/es/button";
import { Devices } from "../components/Device";
import { useEffect, useState } from "react";
import { createDevice, deleteDevice, DeviceRequest, getAllDevices, updateDevice } from "../services/devices";
import Title from "antd/es/typography/Title";
import { CreateUpdateDevices, Mode } from "../components/CreateUpdateDevices";
import { request } from "http";
import { create } from "domain";
import { Tooltip } from "antd";
import Link from "next/dist/client/link";

export default function DevicesPage() {
    const defaultvalues = {
        name: "",
        description: "",
        price: 1,
    } as Device;

    const [values, setValues] = useState<Device>({
        name: "",
        description: "",
        price: 1,
    } as Device);


    const [device, setDevices] = useState<Device[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setisModalOpen] = useState(false);
    const [mode, setMode] = useState(Mode.Create);
    useEffect(() => {
        const getDevices = async () => {
            const devices = await getAllDevices();
            setLoading(false);
            setDevices(devices);
        };
        getDevices();


    }, [])
    const handleCreateDevice = async (request: DeviceRequest) => {
        await createDevice(request);
        closeModal();

        const devices = await getAllDevices();
        setDevices(devices);

    };


    const handleUpdateDevice = async (id: string, request: DeviceRequest) => {
        await updateDevice(id, request);
        closeModal();
        const devices = await getAllDevices();
        setDevices(devices);
    };

    const handeleDeleteDevice = async (id: string) => {
        await deleteDevice(id);
        closeModal();
        const devices = await getAllDevices();
        setDevices(devices);
    };
    const openModal = () => {
        setMode(Mode.Create);
        setisModalOpen(true);

    };
    const closeModal = () => {
        setValues(defaultvalues)
        setisModalOpen(false);



    };

    const openEditModal = (device: Device) => {
        setMode(Mode.Edit);
        setValues(device);
        setisModalOpen(true);

    };

    const tooltipText = (
        <span>
            This is add Devise button.{''}
            <Link href="/ABDP" style={{ color: "#1890ff" }}>
                Learn more about it in the documentation.
            </Link>
        </span>
    )
    return (
       
            <div>
                 <Tooltip title={tooltipText}>
                <Button
                    type="primary"
                    style={{ marginTop: "30px" }}
                    size="large"
                    onClick={openModal}
                >
                    Add device
                </Button>
                 </Tooltip>
                <CreateUpdateDevices mode={mode} values={values} isModalOpen={isModalOpen} hangleCreate={handleCreateDevice} handleUpdate={handleUpdateDevice} handleCancel={closeModal} />
                {loading ? (<Title>Loading...</Title>) : (<Devices devices={device} handleOpen={openEditModal} handleDelete={handeleDeleteDevice} />)}
            </div>
      

    );


}