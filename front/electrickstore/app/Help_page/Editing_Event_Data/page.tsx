"use client";
import React from "react";
import { Typography, Breadcrumb, Card } from "antd";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;

export default function EditingEventDataPage() {
    return (
        <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
            <Breadcrumb style={{ marginBottom: '20px' }}>
                <Breadcrumb.Item><Link href="/events">Events</Link></Breadcrumb.Item>
                <Breadcrumb.Item>Help: Adding & Editing</Breadcrumb.Item>
            </Breadcrumb>

            <Title level={2}>Adding and Editing Events</Title>
            
            <Title level={4} style={{ marginTop: '30px' }}>Overview</Title>
            <Paragraph>
                Event details can change, and new events are constantly being planned. 
                The <Text strong>Add Event</Text> and <Text strong>Edit</Text> functions allow administrators to manage 
                the database efficiently. Both functions use the same modal form interface.
            </Paragraph>

            <Title level={4} style={{ marginTop: '30px' }}>Step-by-Step Guide: Creating a New Event</Title>
            <ol style={{ fontSize: '16px', lineHeight: '1.8' }}>
                <li>Click the primary blue <Text strong>Add Event</Text> button at the top of the Events page.</li>
                <li>A modal window will appear. Fill out all the required fields (Name, Date, Price, etc.).</li>
                <li>Click <Text strong>Save</Text> to send a POST request to the database. The table will update automatically.</li>
            </ol>

            <Title level={4} style={{ marginTop: '30px' }}>Step-by-Step Guide: Updating an Event</Title>
            <ol style={{ fontSize: '16px', lineHeight: '1.8' }}>
                <li>Locate the event you want to modify in the Events table.</li>
                <li>Click the <Text strong>Edit</Text> button associated with that event.</li>
                <li>The form will open pre-filled with the current data. Make your necessary adjustments.</li>
                <li>Click <Text strong>Save</Text> to apply the changes globally.</li>
            </ol>

            <Card size="small" style={{ marginTop: '30px', backgroundColor: '#fffbe6', borderColor: '#ffe58f' }}>
                <Text strong style={{ color: '#faad14' }}>⚠️ Validation Note:</Text> Ensure that your dates are formatted correctly 
                (YYYY-MM-DD) and that the ticket price contains only numbers before submitting the form.
            </Card>
        </div>
    );
}