"use client";
import React, { useState } from "react";

import { Typography, Button, Modal, Space, Divider, Row, Col } from "antd";
import { Card } from "antd";
import Link from "next/link";

const { Title, Paragraph, Text, Link: AntLink } = Typography;
export default function IFIPage() {
    const [isModalOpen, setIsMOdalOpen] = useState(false)
    return (
        <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
            <div id="interface" style={{ marginBottom: "60px", paddingTop: "20px" }}>
                <Title level={3}>2. Інтерфейс та форми</Title>
                <Paragraph>
                    Below is an example of the main working form of the program with comments on its use.
                </Paragraph>

                <Card
                    hoverable
                    style={{ width: "100%", maxWidth: "600px" }}
                    cover={

                        <img
                            alt="Home form"
                            src="/Image/image1.png"
                            style={{ width: "100%", borderRadius: "8px" }}
                        />
                    }
                >
                    <Card.Meta
                        title="Event list screen"
                        description={
                            <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                                <li><b>Search:</b> Allows you to filter the table locally.</li>
                                <li><b>Add Event button:</b> Opens a modal window for a POST request to the database.</li>
                                <li><b>Details button:</b> Opens a sidebar (Drawer) with related country and venue data.</li>
                            </ul>
                        }
                    />
                </Card>
            </div>
        </div>
    )
}