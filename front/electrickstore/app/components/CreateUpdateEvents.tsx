import Modal from "antd/es/modal/Modal";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { EventRequest } from "../services/events"; // Імпортуємо твій інтерфейс!

export enum Mode {
    Create,
    Edit,
}

interface Props {
    mode: Mode;
    values: EventRequest;
    isModalOpen: boolean;
    handleCancel: () => void;
    handleCreate: (request: EventRequest) => void;
    handleUpdate: (id: string, request: EventRequest) => void;
}

export const CreateUpdateEvents = ({
    mode,
    values,
    isModalOpen,
    handleCancel,
    handleCreate,
    handleUpdate
}: Props) => {
    const [eventno, setEventno] = useState<string>("");
    const [venueno, setVenueno] = useState<string>("");
    const [eventName, setEventName] = useState<string>("");
    const [eventDescription, setEventDescription] = useState<string>("");
    const [ticketPrice, setTicketPrice] = useState<string>("");
    const [eventDate, setEventDate] = useState<string>("");
    const [eventTime, setEventTime] = useState<string>("");

    useEffect(() => {
        setEventno(values?.eventno || "");
        setVenueno(values?.venueno || "");
        setEventName(values?.eventName || "");
        setEventDescription(values?.eventDescription || "");
        setTicketPrice(values?.ticketPrice || "");
        setEventDate(values?.eventDate ? String(values.eventDate) : "");
        setEventTime(values?.eventTime || "");
    }, [values]);

    const handleOnOk = async () => {
        const eventRequest: EventRequest = {
            id: values?.id || "", // В режимі створення id може бути пустим
            eventno,
            venueno,
            eventName,
            eventDescription,
            ticketPrice,
            eventDate,
            eventTime,
            eventPhoto: null
        };

        mode === Mode.Create 
            ? handleCreate(eventRequest) 
            : handleUpdate(values.id, eventRequest);
    };

    return (
        <Modal
            title={mode === Mode.Create ? "Add Event" : "Edit Event"}
            open={isModalOpen}
            onOk={handleOnOk}
            onCancel={handleCancel}
            cancelText={"Cancel"}
            okText={"Save"}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                <Input value={eventno} onChange={(e: any) => setEventno(e.target.value)} placeholder="Event Number (e.g. EVT-01)" />
                <Input value={venueno} onChange={(e: any) => setVenueno(e.target.value)} placeholder="Venue Code (e.g. 3)" />
                <Input value={eventName} onChange={(e: any) => setEventName(e.target.value)} placeholder="Event Name" />
                <TextArea value={eventDescription} onChange={(e: any) => setEventDescription(e.target.value)} autoSize={{ minRows: 3, maxRows: 5 }} placeholder="Description" />
                <Input value={ticketPrice} onChange={(e: any) => setTicketPrice(e.target.value)} placeholder="Ticket Price" />
                <Input value={eventDate} onChange={(e: any) => setEventDate(e.target.value)} placeholder="Date (YYYY-MM-DD)" />
                <Input value={eventTime} onChange={(e: any) => setEventTime(e.target.value)} placeholder="Time (HH:MM)" />
            </div>
        </Modal>
    );
};