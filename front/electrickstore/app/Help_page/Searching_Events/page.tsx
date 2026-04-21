"use client";
import React from "react";
import { Typography, Breadcrumb, Card } from "antd";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;

export default function SearchingEventsPage() {
    return (
        <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
            <Breadcrumb style={{ marginBottom: '20px' }}>
                <Breadcrumb.Item><Link href="/events">Events</Link></Breadcrumb.Item>
                <Breadcrumb.Item>Help: Searching</Breadcrumb.Item>
            </Breadcrumb>

            <Title level={2}>Searching for Events</Title>
            
            <Title level={4} style={{ marginTop: '30px' }}>Overview</Title>
            <Paragraph>
                When your database grows to hundreds of events, finding a specific one manually becomes inefficient. 
                The built-in search tool helps you locate exactly what you need instantly without reloading the page.
            </Paragraph>

            <Title level={4} style={{ marginTop: '30px' }}>Using the Search Bar</Title>
            <Paragraph>
                Located at the top right of the Events list, the search bar allows you to type the name of the event. 
                As you type, the table will automatically update in real-time to only show events that match your text. 
                Once you find your target, you can <Link href="/Editing_Event_Data" style={{ color: "#1890ff" }}>Edit</Link> it or open its 
                <Link href="/Viewing_Event_Details" style={{ color: "#1890ff", marginLeft: '4px' }}>Details panel</Link>.
            </Paragraph>

            <Card size="small" style={{ marginTop: '30px', backgroundColor: '#e6f7ff', borderColor: '#91d5ff' }}>
                <Text strong style={{ color: '#096dd9' }}>🔍 Technical Note:</Text> Currently, the search function looks specifically 
                at the <Text code>Event Name</Text> field. It operates locally on the client-side data, meaning it filters the currently loaded list 
                and is not case-sensitive.
            </Card>
        </div>
    );
}