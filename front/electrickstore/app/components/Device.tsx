import Card from "antd/es/card/Card";
import { CardName } from "./Cardname";
import Button from "antd/es/button";
import { Tooltip } from "antd";

interface Props {
    devices: Device[]
    handleDelete: (id: string) => void;
    handleOpen: (device: Device) => void;

}

export const Devices = ({ devices, handleDelete, handleOpen }: Props) => {
    return (
        <div className="cards">
            {devices.map((device: Device) => (
                <Card key={device.id}
                    name={<CardName name={device.name} price={device.price} />}
                    bordered={false}
                >
                    <p>{device.description}</p>
                    <div className="card-buttons">
                        <Button
                            onClick={() => handleOpen(device)}
                            style={{ flex: 1 }}

                        >
                            Edit
                        </Button>
                        <Tooltip title=" This button deletes the device forever, be careful!">
                            <Button
                                onClick={() => handleDelete(device.id)}
                                danger
                                style={{ flex: 1 }}>
                                Delete
                            </Button>
                        </Tooltip>
                    </div>
                </Card>
            ))}
        </div>
    )
}