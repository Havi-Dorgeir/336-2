"use client";
import React from "react";
import { Typography, Breadcrumb } from "antd";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;

export default function ViewingEventDetailsPage() {
    return (
        <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
            <Breadcrumb style={{ marginBottom: '20px' }}>
                <Breadcrumb.Item><Link href="/events">Events</Link></Breadcrumb.Item>
                <Breadcrumb.Item>Help: Viewing Details</Breadcrumb.Item>
            </Breadcrumb>

            <Title level={2}>Viewing Event Details</Title>
            
            <Title level={4} style={{ marginTop: '30px' }}>Overview</Title>
            <Paragraph>
                To keep the <Text strong>Events list</Text> clean and easy to read, the main table only displays critical information 
                like the event poster, name, and ticket price. For a comprehensive view of an event, you can use the <Text strong>Details</Text> feature. 
                If you are having trouble finding a specific event, we recommend using the 
                <Link href="/Searching_Events" style={{ color: "#1890ff", marginLeft: '4px' }}>Search tool</Link> first.
            </Paragraph>

            <Title level={4} style={{ marginTop: '30px' }}>How it Works</Title>
            <Paragraph>
                Clicking the <Text mark>Details</Text> button on any event row will open a sliding panel 
                (Drawer) on the right side of your screen. This allows you to view in-depth information without leaving 
                the current page.
            </Paragraph>

            <Title level={4} style={{ marginTop: '30px' }}>What You Will Find Inside:</Title>
            <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
                <li><Text strong>Event Schedule:</Text> Full description, date, and exact time of the event.</li>
                <li><Text strong>Venue Data:</Text> The venue's name, capacity, specific remarks, and a visual floor map.</li>
                <li><Text strong>Country Information:</Text> Geolocation data including the host country, its capital, and continent.</li>
            </ul>
        </div>
    );
}