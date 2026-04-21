"use client";
import React, { useState } from "react";
import { Typography, Anchor, Button, Modal, Space, Divider, Row, Col } from "antd";
import Card from "antd/lib/card";

import Link from "next/link";

const { Title, Paragraph, Text, Link: AntLink } = Typography;

export default function HelpPage() {
    const [isModalOpen, setIsMOdalOpen] = useState(false)

    return (
        <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
            <Divider />
            <Row gutter={32}>

                <Col span={6}>
                    <div style={{ position: "sticky", top: "20px" }}>
                        <Title level={4}>Contents</Title>
                        <Anchor
                            items={[
                                { key: 'intro', href: '#intro', title: '1. General information' },
                                { key: 'interface', href: '#interface', title: '2. Interface and forms' },
                                { key: 'links', href: '#links', title: '3. Working with links' },
                            ]}
                        />
                    </div>
                </Col>

                <Col span={18}>


                    <div id="intro" style={{ marginBottom: "60px", paddingTop: "20px" }}>
                        <Title level={3}>
                            <AntLink
                                href="/General_Information"
                                style={{
                                    fontSize: 'inherit',
                                    fontWeight: 'inherit',
                                    color: 'inherit'
                                }}
                            >
                                1. General information
                            </AntLink>
                        </Title>
                        <Paragraph>
                            This system is designed to manage a list of Events, Venues, and Devices.
                            It is built on a modern architecture using React, Next.js, and Ant Design.
                        </Paragraph>
                    </div>


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


                    <div id="links" style={{ marginBottom: "60px", paddingTop: "20px" }}>
                        <Title level={3}>3. Working with links</Title>
                        <Paragraph>
                            The system implements two types of link navigation:
                        </Paragraph>

                        <Space direction="vertical" size="middle">

                            <Card size="small" title="Перехід ІЗ затиранням вмісту">
                                <Text>Full redirect to another page (current page disappears):</Text>
                                <Link href="/events">
                                    <Button type="primary" ghost>Go to the list of events</Button>
                                </Link>
                            </Card>


                            <Card size="small" title="Перехід БЕЗ затирання вмісту">
                                <Text>Opening additional information on top of the current page: </Text>
                                <Button type="default" onClick={() => setIsMOdalOpen(true)}>
                                    Learn about the system rules
                                </Button>
                            </Card>
                        </Space>


                        <Modal
                            title="System rules"
                            open={isModalOpen}
                            onOk={() => setIsMOdalOpen(false)}
                            onCancel={() => setIsMOdalOpen(false)}
                            footer={[
                                <Button key="ok" type="primary" onClick={() => setIsMOdalOpen(false)}>
                                    Зрозуміло
                                </Button>
                            ]}
                        >
                            <p>Additional background information is displayed here.</p>
                            <p>As you can see, the background content of the Help page remained in place and was not erased!</p>
                        </Modal>
                    </div>

                </Col>
            </Row>


        </div>
    )
}