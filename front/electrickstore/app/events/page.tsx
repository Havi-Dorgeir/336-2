"use client";
import { InfoCircleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import { Table, Button, Drawer, Descriptions, Tag, Image as AntImage, Space, Typography, Spin, Input, Tooltip, Alert } from "antd";
import { CreateUpdateEvents, Mode } from "../components/CreateUpdateEvents";
import { createEvents, updateEvents, deleteEvents, EventRequest } from "../services/events";
import Link from 'next/link';
const { Title } = Typography
export interface VenueModel {
    id: number;
    venueNo: string;
    name: string;
    capacity: string;
    venueMap?: string;
    remarks: string;
}
export interface EventModel {
    id: number;
    eventNo: string;
    venueNo: string;
    eventName: string;
    eventDescription: string;
    ticketPrice: string;
    eventDate?: string;
    eventTime?: string;
    eventPhoto?: string;
}
export interface CountryModel {
    id: number;
    name: string;
    capital: string;
    continent: string;
    area: string;
    population: string;
}
export default function EventPage() {
    const [events, setEvents] = useState<EventModel[]>([]);
    const [venues, setVenues] = useState<VenueModel[]>([]);
    const [countries, setCountries] = useState<CountryModel[]>([]);
    const [loading, setLoading] = useState(true);



    const defaultHint = "Main panel. Pay attention to the fastening elements or buttons for removing extended tips.";
    const [panelHint, setPanelHint] = useState(defaultHint);


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState(Mode.Create);

    const defaultValues: EventRequest = {
        id: "", eventno: "", venueno: "", eventName: "",
        eventDescription: "", ticketPrice: "", eventDate: "", eventTime: "", eventPhoto: null
    };

    const [formValues, setFormValues] = useState<EventRequest>(defaultValues);

    const openCreateModal = () => {
        setFormValues(defaultValues);
        setMode(Mode.Create);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleCreateEvent = async (request: EventRequest) => {
        await createEvents(request);
        closeModal();

        const res = await fetch("http://localhost:5104/Events");
        if (res.ok) {
            setEvents(await res.json());
        }
    };

    const handleUpdateEvent = async (id: string, request: EventRequest) => {
        await updateEvents(id, request);
        closeModal();

        const res = await fetch("http://localhost:5104/Events");
        if (res.ok) {
            setEvents(await res.json());
        }
    };





    const [searchText, setSearchText] = useState("");

    const [isDrawenOpen, setIsDrawerOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<EventModel | null>(null);

    const API_Base = "http://localhost:5104";
    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const [eventsRes, venuesRes, countriesRes] = await Promise.all([
                    fetch(`${API_Base}/Events`),
                    fetch(`${API_Base}/Venues`),
                    fetch(`${API_Base}/Countries`)
                ]);

                if (eventsRes.ok) setEvents(await eventsRes.json());
                if (venuesRes.ok) setVenues(await venuesRes.json());
                if (countriesRes.ok) setCountries(await countriesRes.json());
            } catch (error) {
                console.error("Error loading data from the backend:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);
    const detailsTooltipText = (
        <span>
            This is Details button.{''}
            <Link href="/Viewing_Event_Details" style={{ color: "#1890ff" }}>
                Learn more about it in the documentation.
            </Link>
        </span>
    );
    const addEventTooltipText = (
        <span>
            Создание нового события.{' '}
            <Link href="/Editing_Event_Data" style={{ color: "#1890ff" }}>
                Read the guide
            </Link>
        </span>
    );
    const searchTooltipText = (
        <span>
            Локальный поиск по названию.{' '}
            <Link href="/Searching_Events" style={{ color: "#1890ff" }}>
                How filtering works
            </Link>
        </span>
    );
    const columns = [
        {
            title: (
                <Space>
                    Poster
                    <Tooltip title="Event poster or logo. Upload in Base64 format.">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', cursor: 'help' }} />
                    </Tooltip>
                </Space>
            ),
            dataIndex: 'eventPhoto',
            key: 'eventPhoto',
            width: 100,
            render: (photo: string) => photo ? (
                <AntImage
                    width={60}
                    height={60}
                    style={{ borderRadius: '8px', objectFit: 'cover' }}
                    src={`data:image/jpeg;base64,${photo}`}
                    alt="Poster"
                />
            ) : <Tag>No photo</Tag>,
        },
        {
            title: (
                <Space>
                    Name
                    <Tooltip title="Official name of the planned event.">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', cursor: 'help' }} />
                    </Tooltip>
                </Space>
            ),
            dataIndex: 'eventName',
            key: 'eventName',
            render: (text: string) => <b>{text}</b>
        },
        {
            title: (
                <Space>
                    Ticket price
                    <Tooltip title="Base price of a single ticket in UAH (₴).">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', cursor: 'help' }} />
                    </Tooltip>
                </Space>
            ),
            dataIndex: 'ticketPrice',
            key: 'ticketPrice',
            render: (price: string) => <Tag color="green">{price} ₴</Tag>
        },
        {
            title: (
                <Space>
                    Venue & Country
                    <Tooltip title="Venue and country. Data is fetched from the related Venues and Countries tables.">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', cursor: 'help' }} />
                    </Tooltip>
                </Space>
            ),
            key: 'venueDetails',
            render: (_: any, record: EventModel) => {
                const linkedVenue = venues.find(v => String(v.venueNo) === String(record.venueNo));
                const linkedCountry = linkedVenue ? countries.find(c => c.name === linkedVenue.name) : null;

                return (
                    <div style={{ display: `flex`, flexDirection: `column` }}>
                        <Tag color="blue" style={{ width: `fit-content`, marginBottom: `4px` }}>
                            {linkedVenue ? linkedVenue.name : `Code: ${record.venueNo}`}
                        </Tag>
                        <span style={{ fontSize: `12px`, color: `gray` }}>
                            {linkedCountry ? linkedCountry.name : "Country unknown"}
                        </span>
                    </div>
                )
            }
        },
        {
            title: (
                <Space>
                    Actions
                    <Tooltip title="Click Details to open the side panel with full information about the event.">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', cursor: 'help' }} />
                    </Tooltip>
                </Space>
            ),
            key: 'actions',
            render: (_: any, record: EventModel) => (

                <Tooltip title={detailsTooltipText}>
                    <Button
                        type="primary"
                        onMouseEnter={() => setPanelHint(`Open detailed card for event "${record.eventName}". You see event's map and information about country`)}
                        onMouseLeave={() => setPanelHint(defaultHint)}
                        onClick={() => {
                            setSelectedEvent(record);
                            setIsDrawerOpen(true);
                        }}>
                        Details
                    </Button>
                </Tooltip>
            ),
        },
    ];

    const linkedVenue = selectedEvent ? venues.find(v => v.venueNo === selectedEvent.venueNo) : null
    const linkedCountry = linkedVenue ? countries.find(c => c.name === linkedVenue.name) : null


    const filteredEvents = events.filter((event) => {
        return event.eventName?.toLowerCase().includes(searchText.toLowerCase());

    });
    return (
        <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <Title level={2} style={{ margin: 0 }}>Events list</Title>
                <Space size="middle">
                   <Tooltip title={addEventTooltipText}>
                        <Button
                            type="primary"
                            size="large"
                            onMouseEnter={() => setPanelHint("Go to the new event creation form (POST request to the database). All fields will be required.")}
                            onMouseLeave={() => setPanelHint(defaultHint)}
                            onClick={openCreateModal}>
                            Add Event
                        </Button>
                    </Tooltip>

                    <Tooltip title={searchTooltipText}>
                        <Input.Search
                            placeholder="Seacrh for name"
                            allowClear
                            onChange={(e: any) => setSearchText(e.target.value)}
                            onMouseEnter={() => setPanelHint("Enter the event name to quickly filter the current table. The search is done locally.")}
                            onMouseLeave={() => setPanelHint(defaultHint)}
                            style={{ width: 300 }}
                        />
                    </Tooltip>

                </Space>

            </div>
            <Alert
                message="Information panel"
                description={panelHint}
                type="Info"
                showIcon
                style={{ marginBottom: `20px`, transition: `all 0.3s` }}


            />




            {loading ? (
                <Spin size="large" style={{ display: `block`, margin: `50px auto` }} />
            ) : (
                <Table
                    dataSource={filteredEvents}
                    columns={columns}
                    rowKeys="id"
                    pagination={{ pageSize: 10 }}
                    bordered
                />
            )}
            <CreateUpdateEvents
                mode={mode}
                values={formValues}
                isModalOpen={isModalOpen}
                handleCreate={handleCreateEvent}
                handleUpdate={handleUpdateEvent}
                handleCancel={closeModal}
            />
            {/* 6. Sliding panel with details */}
            <Drawer
                title={selectedEvent ? `Details: ${selectedEvent.eventName}` : "Details"}
                width={500}
                onClose={() => setIsDrawerOpen(false)}
                open={isDrawenOpen}
            >
                {selectedEvent && (
                    <Space direction="vertical" size="large" style={{ display: `flex` }}>
                        <Descriptions title="Information about events" bordered column={1}>
                            <Descriptions.Item label="Descriptions">{selectedEvent.eventDescription || "-"}</Descriptions.Item>
                            <Descriptions.Item label="Date">{selectedEvent.eventDate || "—"}</Descriptions.Item>
                            <Descriptions.Item label="Time">{selectedEvent.eventTime || "—"}</Descriptions.Item>
                        </Descriptions>
                        {linkedVenue ? (
                            <Descriptions title="Venue" bordered column={1}>
                                <Descriptions.Item label="Name"><b>{linkedVenue.name}</b></Descriptions.Item>
                                <Descriptions.Item label="Capacity">{linkedVenue.capacity}</Descriptions.Item>
                                <Descriptions.Item label="Remarks">{linkedVenue.remarks || "—"}</Descriptions.Item>
                                {linkedVenue.venueMap && (
                                    <Descriptions.Item label="Venue map">
                                        <AntImage
                                            width="100%"
                                            style={{ borderRadius: '8px' }}
                                            src={`data:image/jpeg;base64,${linkedVenue.venueMap}`}
                                            alt="Map"
                                        />
                                    </Descriptions.Item>
                                )}
                            </Descriptions>
                        ) : (
                            <Tag color="orange">Venue not found</Tag>
                        )}

                        {linkedCountry && (
                            <Descriptions title="About country" bordered column={1}>
                                <Descriptions.Item label="Country">{linkedCountry.name}</Descriptions.Item>
                                <Descriptions.Item label="Capital">{linkedCountry.capital}</Descriptions.Item>
                                <Descriptions.Item label="Continent">{linkedCountry.continent}</Descriptions.Item>
                            </Descriptions>
                        )}
                    </Space>
                )}

            </Drawer>

        </div>
    )



}
