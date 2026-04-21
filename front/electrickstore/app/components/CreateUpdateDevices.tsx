import Modal from "antd/es/modal/Modal";
import { DeviceRequest } from "../services/devices";
import Input from "antd/es/input/Input";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";

interface Props {
    mode: Mode;
    values: Device;
    isModalOpen: boolean;
    handleCancel: () => void;
    hangleCreate: (request: DeviceRequest) => void;
    handleUpdate: (id: string, request: DeviceRequest) => void;
}

export enum Mode {
    Create,
    Edit,
}
export const CreateUpdateDevices = ({
    mode,
    values,
    isModalOpen,
    handleCancel,
    hangleCreate,
    handleUpdate }: Props) => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(1);

    useEffect(() => {
        setName(values.name)
        setDescription(values.description)
        setPrice(values.price)

    }, [values])


    const handeleOnOk = async () => {
        const deviceRequest = { name, description, price };

        mode == Mode.Create ? hangleCreate(deviceRequest) : handleUpdate(values.id, deviceRequest)
    }


    return (
        <Modal
            name={
                mode === Mode.Create ? "Add device" : "Edit device"
            }
            open={isModalOpen}
            onOk={handeleOnOk}
            onCancel={handleCancel}
            cancelText={"Cancel"}
        >
            <div className="device-model">
                <Input
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                    placeholder="Name"
                />
                <TextArea
                    value={description}
                    onChange={(e: any) => setDescription(e.target.value)}
                    autoSize={{ minRows: 3, maxRows: 3 }}
                    placeholder="Description"
                />
                <Input
                    value={price}
                    onChange={(e: any) => setPrice(Number(e.target.value))}
                    placeholder="Price"
                />
            </div>
        </Modal>
    )

};