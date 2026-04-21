"use client";
import React, { useState } from "react";

import { Typography, Button, Modal, Space, Divider, Row, Col } from "antd";
import { Card } from "antd";
import Link from "next/link";

const { Title, Paragraph, Text, Link: AntLink } = Typography;
export default function WWLPage() {
    const [isModalOpen, setIsMOdalOpen] = useState(false)
    return (
       <div id="add-device" style={{ marginBottom: "60px", paddingTop: "20px" }}>
    <Title level={3}>4. Adding a New Device</Title>
    
    <Title level={5}>Overview</Title>
    <Paragraph>
        The "Add device" feature is a core component of the inventory management system. 
        It allows administrators to quickly register new hardware components, accessories, 
        and peripherals into the store's database.
    </Paragraph>

    <Title level={5}>Step-by-Step Guide</Title>
    <Paragraph>
        To add a new item to your inventory, follow these simple steps:
    </Paragraph>
    <ul>
        <li>Navigate to the <Text strong>Devices</Text> page using the main navigation menu.</li>
        <li>Click the primary blue <Text strong>Add device</Text> button located above the inventory list.</li>
        <li>A modal window will appear. Fill out the required information for the new product.</li>
        <li>Click <Text strong>OK</Text> to save the device to the database, or <Text strong>Cancel</Text> to discard the operation.</li>
    </ul>

    <Title level={5}>Form Fields Explained</Title>
    <Paragraph>
        When the creation modal opens, you will need to provide the following details:
    </Paragraph>
    <ul>
        <li>
            <Text strong>Name:</Text> The official title or model name of the product. 
            Be as specific as possible to help customers find the exact item 
            (e.g., "Keychron Q1 Pro" or "120mm RGB Cooling Fan").
        </li>
        <li>
            <Text strong>Description:</Text> A brief overview of the device. 
            This is a great place to list key specifications, materials, or compatible platforms.
        </li>
        <li>
            <Text strong>Price:</Text> The retail value of the item. Please enter numerical values only.
        </li>
    </ul>

    <Card size="small" style={{ marginTop: '16px', backgroundColor: '#f6ffed', borderColor: '#b7eb8f' }}>
        <Text strong style={{ color: '#389e0d' }}>💡 Note:</Text> Once a device is successfully added, 
        the system will automatically refresh, and the new item will instantly appear in your inventory list.
    </Card>
</div>
    )
}